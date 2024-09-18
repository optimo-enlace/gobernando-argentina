const questions = {
    Nacional: [
        {
            question: "¿Cuál es la principal función del Poder Ejecutivo a nivel nacional?",
            options: ["Ejecutar las leyes", "Crear leyes", "Interpretar las leyes"],
            answer: "Ejecutar las leyes",
            explanation: "El Poder Ejecutivo en el nivel nacional se encarga de ejecutar y hacer cumplir las leyes aprobadas por el Poder Legislativo."
        },
        {
            question: "¿Cuál es el órgano que representa al Poder Legislativo a nivel nacional?",
            options: ["El Congreso", "El Senado", "El Presidente"],
            answer: "El Congreso",
            explanation: "El Congreso Nacional, compuesto por la Cámara de Diputados y el Senado, es el encargado de crear las leyes en Argentina."
        },
        {
            question: "¿Qué función tiene el Poder Judicial a nivel nacional?",
            options: ["Interpretar y aplicar las leyes", "Crear nuevas leyes", "Ejecutar leyes"],
            answer: "Interpretar y aplicar las leyes",
            explanation: "El Poder Judicial tiene la función de interpretar la Constitución y las leyes, además de resolver conflictos según la ley."
        }
    ],
    Provincial: [
        {
            question: "¿Cuál es la principal función del Poder Ejecutivo a nivel provincial?",
            options: ["Ejecutar políticas provinciales", "Crear leyes provinciales", "Interpretar leyes provinciales"],
            answer: "Ejecutar políticas provinciales",
            explanation: "El Poder Ejecutivo provincial, encabezado por el gobernador, se encarga de implementar y hacer cumplir las políticas dentro de la provincia."
        },
        {
            question: "¿Cómo se llama el órgano legislativo en una provincia?",
            options: ["Legislatura Provincial", "Congreso Nacional", "Cámara de Diputados"],
            answer: "Legislatura Provincial",
            explanation: "La Legislatura Provincial es el órgano encargado de crear las leyes que rigen dentro de la provincia."
        },
        {
            question: "¿Qué rol tiene el Poder Judicial a nivel provincial?",
            options: ["Aplicar justicia dentro de la provincia", "Crear leyes provinciales", "Ejecutar políticas"],
            answer: "Aplicar justicia dentro de la provincia",
            explanation: "El Poder Judicial provincial interpreta y aplica las leyes provinciales para garantizar justicia dentro de la jurisdicción."
        }
    ],
    Municipal: [
        {
            question: "¿Cuál es la función del Poder Ejecutivo a nivel municipal?",
            options: ["Administrar el municipio", "Crear leyes municipales", "Interpretar leyes municipales"],
            answer: "Administrar el municipio",
            explanation: "El Poder Ejecutivo municipal, encabezado por el intendente, se encarga de la administración y gestión de los asuntos locales."
        },
        {
            question: "¿Cómo se llama el órgano legislativo en un municipio?",
            options: ["Concejo Deliberante", "Legislatura Municipal", "Cámara Municipal"],
            answer: "Concejo Deliberante",
            explanation: "El Concejo Deliberante es el encargado de crear y aprobar ordenanzas que rigen en el municipio."
        },
        {
            question: "¿Qué función tiene el Poder Judicial a nivel municipal?",
            options: ["No hay Poder Judicial a nivel municipal", "Interpretar las leyes municipales", "Crear ordenanzas"],
            answer: "No hay Poder Judicial a nivel municipal",
            explanation: "El Poder Judicial no existe a nivel municipal, ya que la administración de justicia se realiza a nivel provincial o nacional."
        }
    ]
};

let currentQuestionIndex = 0;
let currentLevel = '';
let score = 0;

function startGame(level) {
    currentLevel = level;
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('gameArea').innerHTML = '';
    document.getElementById('feedback').innerHTML = '';
    document.getElementById('restartBtn').classList.add('hidden');
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex < questions[currentLevel].length) {
        const questionData = questions[currentLevel][currentQuestionIndex];
        const optionsHTML = questionData.options.map((option, index) => `
            <button class="option" onclick="checkAnswer('${option}')">${option}</button>
        `).join('');

        document.getElementById('gameArea').innerHTML = `
            <div class="question">
                <h3>${questionData.question}</h3>
                <div class="options">
                    ${optionsHTML}
                </div>
            </div>
        `;
    } else {
        endGame();
    }
}

function checkAnswer(selectedOption) {
    const questionData = questions[currentLevel][currentQuestionIndex];
    if (selectedOption === questionData.answer) {
        score++;
        document.getElementById('feedback').innerHTML = `<p>¡Correcto! ${questionData.explanation}</p>`;
    } else {
        document.getElementById('feedback').innerHTML = `<p>Incorrecto. ${questionData.explanation}</p>`;
    }
    currentQuestionIndex++;
    setTimeout(showQuestion, 2000);
}

function endGame() {
    document.getElementById('gameArea').innerHTML = `<h2>Juego terminado. Puntaje final: ${score} / ${questions[currentLevel].length}</h2>`;
    document.getElementById('restartBtn').classList.remove('hidden');
}

document.getElementById('restartBtn').addEventListener('click', () => {
    startGame(currentLevel);
});
