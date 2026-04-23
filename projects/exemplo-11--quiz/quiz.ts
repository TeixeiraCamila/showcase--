/**
 * Quiz JavaScript - TypeScript
 * 
 * Funcionalidades:
 * - Carrega perguntas do arquivo JSON
 * - Salva progresso no localStorage
 * - Feedback visual imediato (acerto/erro)
 * - Barra de progresso
 * - Tela de resultado final
 */

/**
 * Interface para cada pergunta do quiz
 */
interface Question {
  pergunta: string;
  opcoes: string[];
  respostaCorreta: number;
}

/**
 * Interface para o arquivo JSON completo
 */
interface QuizData {
  quiz: Question[];
}

/**
 * Interface para resposta do usuário
 */
interface Answer {
  question: number;
  selected: number;
  correct: boolean;
}

/**
 * Interface para dados salvos no localStorage
 */
interface SavedProgress {
  currentIndex: number;
  answers: Answer[];
}

// ------------------------------------------------------------
// Estado global do quiz
// ------------------------------------------------------------

let questions: Question[] = [];
let currentIndex: number = 0;
let answers: Answer[] = [];

// ------------------------------------------------------------
// Funções de dados
// ------------------------------------------------------------

/**
 * Carrega todas as perguntas do arquivo quiz.json
 */
async function loadQuestions(): Promise<void> {
  const response = await fetch('quiz.json');
  const data: QuizData = await response.json();
  questions = data.quiz;
}

/**
 * Restaura progresso salvo no localStorage
 */
function loadProgress(): void {
  const saved = localStorage.getItem('quizProgress');
  if (saved) {
    const data: SavedProgress = JSON.parse(saved);
    currentIndex = data.currentIndex || 0;
    answers = data.answers || [];
  }
  updateResetButton();
}

/**
 * Salva progresso atual no localStorage
 */
function saveProgress(): void {
  localStorage.setItem('quizProgress', JSON.stringify({ currentIndex, answers }));
}

/**
 * Limpa progresso salvo (reiniciar quiz)
 */
function clearProgress(): void {
  localStorage.removeItem('quizProgress');
}

// ------------------------------------------------------------
// Funções de UI
// ------------------------------------------------------------

/**
 * Atualiza visibilidade do botão reset
 */
function updateResetButton(): void {
  const resetBtn = document.querySelector('.reset-btn') as HTMLElement;
  if (resetBtn) {
    resetBtn.style.display = answers.length > 0 ? 'block' : 'none';
  }
}

/**
 * Atualiza a barra de progresso
 */
function updateProgressBar(): void {
  const progress = (currentIndex / questions.length) * 100;
  const progressFill = document.getElementById('progressFill') as HTMLElement;
  const progressText = document.getElementById('progressText') as HTMLElement;
  
  progressFill.style.width = progress + '%';
  progressText.textContent = (currentIndex + 1) + ' / ' + questions.length;
}

/**
 * Renderiza a pergunta atual e suas opções
 */
function renderQuestion(): void {
  // Verifica se ainda há perguntas
  if (currentIndex >= questions.length) {
    showResult();
    return;
  }

  const q = questions[currentIndex];
  const questionEl = document.getElementById('question') as HTMLElement;
  questionEl.textContent = q.pergunta;
  updateProgressBar();

  // Criabotões de opção
  const optionsEl = document.getElementById('options') as HTMLElement;
  optionsEl.innerHTML = '';

  q.opcoes.forEach((option: string, index: number) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.textContent = option;
    btn.dataset.index = String(index);
    btn.addEventListener('click', () => handleAnswer(index));
    optionsEl.appendChild(btn);
  });
}

// ------------------------------------------------------------
// Funções de interação
// ------------------------------------------------------------

/**
 * Processa a resposta do usuário
 * @param selectedIndex - Índice da opção escolhida
 */
function handleAnswer(selectedIndex: number): void {
  const q = questions[currentIndex];
  const correctIndex = q.respostaCorreta;
  const isCorrect = selectedIndex === correctIndex;

  // Salva resposta
  answers.push({ question: currentIndex, selected: selectedIndex, correct: isCorrect });
  saveProgress();

  // Aplica classes de feedback visual
  const buttons = document.querySelectorAll('.option') as NodeListOf<HTMLButtonElement>;
  buttons.forEach((btn: HTMLButtonElement, index: number) => {
    btn.disabled = true;
    if (index === correctIndex) {
      btn.classList.add('correct');
    } else if (index === selectedIndex && !isCorrect) {
      btn.classList.add('wrong');
    }
  });

  // Animação de feedback
  const quizContent = document.getElementById('quizContent') as HTMLElement;
  if (isCorrect) {
    quizContent.classList.add('pulse');
  } else {
    quizContent.classList.add('shake');
  }

  // Avança para próxima pergunta após 1 segundo
  setTimeout(() => {
    quizContent.classList.remove('shake', 'pulse');
    currentIndex++;
    saveProgress();
    renderQuestion();
  }, 1000);
}

// ------------------------------------------------------------
// Funções de resultado
// ------------------------------------------------------------

/**
 * Exibe tela de resultado final
 */
function showResult(): void {
  const correctCount = answers.filter((a: Answer) => a.correct).length;
  const total = questions.length;
  const percentage = Math.round((correctCount / total) * 100);

  // Oculta perguntas e exibe resultado
  const quizContent = document.getElementById('quizContent') as HTMLElement;
  const progressText = document.getElementById('progressText') as HTMLElement;
  const progressFill = document.getElementById('progressFill') as HTMLElement;
  const resultEl = document.getElementById('result') as HTMLElement;
  const scoreEl = document.getElementById('score') as HTMLElement;

  quizContent.style.display = 'none';
  progressText.textContent = total + ' / ' + total;
  progressFill.style.width = '100%';
  resultEl.style.display = 'block';
  scoreEl.textContent = correctCount + ' / ' + total + ' (' + percentage + '%)';

  // Mensagem baseada na pontuação
  let message = '';
  if (percentage >= 90) {
    message = 'Parabéns! Você é um expert em JavaScript!';
  } else if (percentage >= 70) {
    message = 'Muito bom! Você manja muito de JS!';
  } else if (percentage >= 50) {
    message = 'Bom trabalho! Mas pode melhorar!';
  } else {
    message = 'Que tal estudar mais um pouco?';
  }
  
  const messageEl = document.getElementById('message') as HTMLElement;
  messageEl.textContent = message;
}

/**
 * Reinicia o quiz do zero
 */
function restartQuiz(): void {
  clearProgress();
  currentIndex = 0;
  answers = [];
  
  const resultEl = document.getElementById('result') as HTMLElement;
  const quizContent = document.getElementById('quizContent') as HTMLElement;
  
  resultEl.style.display = 'none';
  quizContent.style.display = 'block';
  updateResetButton();
  renderQuestion();
}

// ------------------------------------------------------------
// Inicialização
// ------------------------------------------------------------

/**
 * Inicializa o quiz ao carregar a página
 */
async function init(): Promise<void> {
  await loadQuestions();
  loadProgress();
  renderQuestion();
}

// Inicia quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', init);