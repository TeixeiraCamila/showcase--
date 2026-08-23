document.addEventListener('DOMContentLoaded', () => {

  const STORAGE_KEY = 'pomodoro:tasks';
  const COUNT_KEY = 'pomodoro:count';
  const MAX_INCOMPLETE = 5;
  const TICK_MS = 200;

  const DURATION = 15000;               // 15s em ms (teste)
  // const DURATION = 25 * 60 * 1000;   // 25min em ms

  const BREAK = 30000;                   // 30s em ms (teste)
  // const BREAK = 30 * 60 * 1000;       // 30min em ms


  const app = document.querySelector('.app');
  const startButton = document.querySelector('#start');
  const pauseButton = document.querySelector('#pause');
  const resetButton = document.querySelector('#reset');
  const addTaskButton = document.querySelector('#addTask');
  const taskInput = document.querySelector('#taskInput');
  const listContainer = document.querySelector('#taskList');
  const tasksSection = document.querySelector('.tasks');
  const timer = document.querySelector('#timer');
  const timerTitle = document.querySelector('#timerTitle');
  const timerMessage = document.querySelector('#timerMessage');
  const taskFormHint = document.querySelector('#taskFormHint');
  const minutes = document.querySelector('#minutes');
  const seconds = document.querySelector('#seconds');

  // States
  let tasks = loadTasks();
  let pomodoroCount = loadCount();
  let selectedTaskId = null;            // ultima task clicada
  let activeTaskId = null;              // task associada ao timer

  let remaining = DURATION;             // ms restantes
  let running = false;
  let endTime = null;                   // timestamp alvo (tick sem drift)
  let intervalId = null;
  let mode = 'work';                    // 'work' | 'break'

  let breakRemaining = 0;
  let breakEndTime = null;
  let breakRunning = false;
  let breakIntervalId = null;

  // Storage
  function loadTasks() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  function saveTasks() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (err) {
      console.error('Falha ao salvar task no localStorage:', err);
    }
  }

  function loadCount() {
    try {
      const raw = localStorage.getItem(COUNT_KEY);
      return raw ? Number(JSON.parse(raw)) : 0;
    } catch {
      return 0;
    }
  }

  function saveCount() {
    try {
      localStorage.setItem(COUNT_KEY, JSON.stringify(pomodoroCount));
    } catch (err) {
      console.error('Falha ao salvar contador no localStorage:', err);
    }
  }

  // Actions
  function deleteTask(id) {
    tasks = tasks.filter((task) => task.id !== id);
    if (selectedTaskId === id) selectedTaskId = null;
    if (activeTaskId === id) activeTaskId = null;
    saveTasks();
  }

  function toggleTask(id) {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;
    task.status = !task.status;
    saveTasks();
    renderList();
  }

  function completeTask(id) {
    if (!id) return;
    const task = tasks.find((t) => t.id === id);
    if (!task) return;
    task.status = true;
    saveTasks();
    renderList();
  }

  function countIncomplete() {
    return tasks.filter((task) => !task.status).length;
  }

  function addTask() {
    const value = taskInput.value.trim();
    if (!value) return;

    if (countIncomplete() >= MAX_INCOMPLETE) {
      taskFormHint.textContent = `Limite: ${MAX_INCOMPLETE} tarefas imcompletas.`;
      taskInput.value = '';
      return;
    }

    tasks.push({
      id: crypto.randomUUID(),
      task: value,
      status: false,
      createdAt: Date.now()
    });

    saveTasks();
    taskInput.value = '';
    taskFormHint.textContent = '';
    renderList();
  }

  // Render
  function renderList() {
    listContainer.innerHTML = '';

    for (const task of tasks) {
      const li = document.createElement('li');
      li.className = 'tasks__item'
        + (task.status ? ' tasks__item--done' : '')
        + (task.id === selectedTaskId ? ' tasks__item--selected' : '');
      li.dataset.id = task.id;

      const check = document.createElement('button');
      check.className = 'tasks__check';
      check.type = 'button';
      check.setAttribute('aria-label', task.status ? 'Mark as not done' : 'Mark as done');

      const text = document.createElement('span');
      text.className = 'tasks__text';
      text.textContent = task.task;

      const del = document.createElement('button');
      del.className = 'tasks__delete';
      del.type = 'button';
      del.setAttribute('aria-label', 'Delete task');

      li.append(check, text, del);
      listContainer.appendChild(li);
    }

    tasksSection.classList.toggle('tasks--empty', tasks.length === 0);
  }

  // Delegação de eventos em um único listener
  listContainer.addEventListener('click', (event) => {
    const li = event.target.closest('.tasks__item');
    if (!li) return;
    const id = li.dataset.id;

    if (event.target.closest('.tasks__check')) {
      toggleTask(id);
      renderList();
      return;
    }

    if (event.target.closest('.tasks__delete')) {
      deleteTask(id);
      renderList();
      return;
    }

    selectedTaskId = id;
    showTimer();
    renderList();
  });

  function showTimer() {
    timer.classList.remove('timer--hidden');
  }

  function updateDisplay(ms) {
    const totalSeconds = Math.ceil(ms / 1000);
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    minutes.textContent = String(mins).padStart(2, '0');
    seconds.textContent = String(secs).padStart(2, '0');
  }

  // Work timer
  function startTimer() {
    if (running) return;                 // evita clique duplo
    if (remaining <= 0) return;          // não inicia se já acabou

    if (!activeTaskId && selectedTaskId) activeTaskId = selectedTaskId;

    running = true;
    endTime = Date.now() + remaining;

    intervalId = setInterval(() => {
      const timeLeft = endTime - Date.now();

      if (timeLeft <= 0) {
        clearInterval(intervalId);
        running = false;
        remaining = DURATION;

        toggleTask(activeTaskId);
        activeTaskId = null;

        pomodoroCount += 1;
        saveCount();

        if (pomodoroCount % 5 === 0) {
          startBreak();
        } else {
          updateDisplay(remaining);
        }
        return;
      }

      remaining = timeLeft;
      updateDisplay(remaining);
    }, TICK_MS);
  }

  function pauseTimer() {
    if (mode === 'break') return;
    if (!running) return;
    running = false;
    clearInterval(intervalId);
  }

  function resetTimer() {
    if (mode === 'break') return;
    running = false;
    clearInterval(intervalId);
    remaining = DURATION;
    updateDisplay(remaining);
  }

  // Break
  function startBreak() {
    mode = 'break';
    breakRemaining = BREAK;
    breakRunning = false;

    timer.classList.add('timer--break');
    app.classList.add('app--break');
    timerTitle.textContent = 'Hora da pausa!';
    timerMessage.textContent = 'Faça uma pausa de 30 minutos.';
    updateDisplay(breakRemaining);
  }

  function startBreakTimer() {
    if (breakRunning) return;            // evita clique duplo
    breakRunning = true;
    breakEndTime = Date.now() + breakRemaining;

    breakIntervalId = setInterval(() => {
      const timeLeft = breakEndTime - Date.now();

      if (timeLeft <= 0) {
        clearInterval(breakIntervalId);
        breakRunning = false;
        endBreak();
        return;
      }

      breakRemaining = timeLeft;
      updateDisplay(breakRemaining);
    }, TICK_MS);
  }

  function endBreak() {
    mode = 'work';
    breakRemaining = 0;
    breakEndTime = null;
    breakIntervalId = null;

    timer.classList.remove('timer--break');
    app.classList.remove('app--break');
    timerTitle.textContent = 'Pomodoro Timer';
    timerMessage.textContent = '';

    pomodoroCount = 0;
    saveCount();

    remaining = DURATION;
    updateDisplay(remaining);
  }

  // Events + Init
  addTaskButton.addEventListener('click', addTask);
  taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') addTask();
  });

  startButton.addEventListener('click', () => {
    if (mode === 'break') {
      startBreakTimer();
    } else {
      startTimer();
    }
  });
  pauseButton.addEventListener('click', pauseTimer);
  resetButton.addEventListener('click', resetTimer);

  renderList();
  updateDisplay(remaining);

})