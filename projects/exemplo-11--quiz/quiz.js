"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// ------------------------------------------------------------
// Estado global do quiz
// ------------------------------------------------------------
let questions = [];
let currentIndex = 0;
let answers = [];
// ------------------------------------------------------------
// Funções de dados
// ------------------------------------------------------------
/**
 * Carrega todas as perguntas do arquivo quiz.json
 */
function loadQuestions() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('quiz.json');
        const data = yield response.json();
        questions = data.quiz;
    });
}
/**
 * Restaura progresso salvo no localStorage
 */
function loadProgress() {
    const saved = localStorage.getItem('quizProgress');
    if (saved) {
        const data = JSON.parse(saved);
        currentIndex = data.currentIndex || 0;
        answers = data.answers || [];
    }
    updateResetButton();
}
/**
 * Salva progresso atual no localStorage
 */
function saveProgress() {
    localStorage.setItem('quizProgress', JSON.stringify({ currentIndex, answers }));
}
/**
 * Limpa progresso salvo (reiniciar quiz)
 */
function clearProgress() {
    localStorage.removeItem('quizProgress');
}
// ------------------------------------------------------------
// Funções de UI
// ------------------------------------------------------------
/**
 * Atualiza visibilidade do botão reset
 */
function updateResetButton() {
    const resetBtn = document.querySelector('.reset-btn');
    if (resetBtn) {
        resetBtn.style.display = answers.length > 0 ? 'block' : 'none';
    }
}
/**
 * Atualiza a barra de progresso
 */
function updateProgressBar() {
    const progress = (currentIndex / questions.length) * 100;
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    progressFill.style.width = progress + '%';
    progressText.textContent = (currentIndex + 1) + ' / ' + questions.length;
}
/**
 * Renderiza a pergunta atual e suas opções
 */
function renderQuestion() {
    // Verifica se ainda há perguntas
    if (currentIndex >= questions.length) {
        showResult();
        return;
    }
    const q = questions[currentIndex];
    const questionEl = document.getElementById('question');
    questionEl.textContent = q.pergunta;
    updateProgressBar();
    // Criabotões de opção
    const optionsEl = document.getElementById('options');
    optionsEl.innerHTML = '';
    q.opcoes.forEach((option, index) => {
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
function handleAnswer(selectedIndex) {
    const q = questions[currentIndex];
    const correctIndex = q.respostaCorreta;
    const isCorrect = selectedIndex === correctIndex;
    // Salva resposta
    answers.push({ question: currentIndex, selected: selectedIndex, correct: isCorrect });
    saveProgress();
    // Aplica classes de feedback visual
    const buttons = document.querySelectorAll('.option');
    buttons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === correctIndex) {
            btn.classList.add('correct');
        }
        else if (index === selectedIndex && !isCorrect) {
            btn.classList.add('wrong');
        }
    });
    // Animação de feedback
    const quizContent = document.getElementById('quizContent');
    if (isCorrect) {
        quizContent.classList.add('pulse');
    }
    else {
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
function showResult() {
    const correctCount = answers.filter((a) => a.correct).length;
    const total = questions.length;
    const percentage = Math.round((correctCount / total) * 100);
    // Oculta perguntas e exibe resultado
    const quizContent = document.getElementById('quizContent');
    const progressText = document.getElementById('progressText');
    const progressFill = document.getElementById('progressFill');
    const resultEl = document.getElementById('result');
    const scoreEl = document.getElementById('score');
    quizContent.style.display = 'none';
    progressText.textContent = total + ' / ' + total;
    progressFill.style.width = '100%';
    resultEl.style.display = 'block';
    scoreEl.textContent = correctCount + ' / ' + total + ' (' + percentage + '%)';
    // Mensagem baseada na pontuação
    let message = '';
    if (percentage >= 90) {
        message = 'Parabéns! Você é um expert em JavaScript!';
    }
    else if (percentage >= 70) {
        message = 'Muito bom! Você manja muito de JS!';
    }
    else if (percentage >= 50) {
        message = 'Bom trabalho! Mas pode melhorar!';
    }
    else {
        message = 'Que tal estudar mais um pouco?';
    }
    const messageEl = document.getElementById('message');
    messageEl.textContent = message;
}
/**
 * Reinicia o quiz do zero
 */
function restartQuiz() {
    clearProgress();
    currentIndex = 0;
    answers = [];
    const resultEl = document.getElementById('result');
    const quizContent = document.getElementById('quizContent');
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
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        yield loadQuestions();
        loadProgress();
        renderQuestion();
    });
}
// Inicia quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', init);
