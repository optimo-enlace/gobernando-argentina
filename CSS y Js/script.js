// script.js
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
        },
        {
            question: "¿Quién es el jefe del Poder Ejecutivo a nivel nacional?",
            options: ["El Presidente", "El Vicepresidente", "El Ministro de Hacienda"],
            answer: "El Presidente",
            explanation: "El Presidente de la Nación es el jefe del Poder Ejecutivo y se encarga de la administración general del país."
        },
        {
            question: "¿Cuál es la función principal de la Cámara de Diputados?",
            options: ["Crear leyes", "Ejecutar leyes", "Interpretar leyes"],
            answer: "Crear leyes",
            explanation: "La Cámara de Diputados, junto con el Senado, tiene la función de crear y modificar leyes a nivel nacional."
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
        },
        {
            question: "¿Cuál es el título del líder del Poder Ejecutivo en una provincia?",
            options: ["Gobernador", "Presidente", "Intendente"],
            answer: "Gobernador",
            explanation: "El Gobernador es el jefe del Poder Ejecutivo en una provincia y se encarga de dirigir el gobierno provincial."
        },
        {
            question: "¿Qué tipo de leyes crea la Legislatura Provincial?",
            options: ["Leyes provinciales", "Leyes nacionales", "Ordenanzas municipales"],
            answer: "Leyes provinciales",
            explanation: "La Legislatura Provincial se encarga de crear leyes que solo aplican dentro de la provincia."
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
        },
        {
            question: "¿Quién dirige el Poder Ejecutivo en un municipio?",
            options: ["Intendente", "Gobernador", "Presidente"],
            answer: "Intendente",
            explanation: "El Intendente es el líder del Poder Ejecutivo en el municipio y se encarga de la administración local."
        },
        {
            question: "¿Qué tipo de normativa crea el Concejo Deliberante?",
            options: ["Ordenanzas", "Leyes provinciales", "Reglamentos nacionales"],
            answer: "Ordenanzas",
            explanation: "El Concejo Deliberante crea ordenanzas que regulan diversos aspectos del funcionamiento del municipio."
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
        const questionHTML = `
            <div class="question">
                <h3>${questionData.question}</h3>
                <div class="options">
                    ${questionData.options.map(option => `
                        <button onclick="checkAnswer('${option}')">${option}</button>
                    `).join('')}
                </div>
            </div>
        `;
        document.getElementById('gameArea').innerHTML = questionHTML;
    } else {
        showFinalScore();
    }
}

function checkAnswer(selectedOption) {
    const questionData = questions[currentLevel][currentQuestionIndex];
    if (selectedOption === questionData.answer) {
        score++;
        document.getElementById('feedback').innerHTML = `<p class="correct">¡Correcto! ${questionData.explanation}</p>`;
    } else {
        document.getElementById('feedback').innerHTML = `<p class="incorrect">Incorrecto. ${questionData.explanation}</p>`;
    }
    currentQuestionIndex++;
    setTimeout(showQuestion, 2000);
}

function showFinalScore() {
    document.getElementById('gameArea').innerHTML = `<h2>Tu puntuación es ${score} de ${questions[currentLevel].length}</h2>`;
    document.getElementById('restartBtn').innerHTML = 'Volver al Menú';
    document.getElementById('restartBtn').onclick = () => window.location.href = 'index.html';
    document.getElementById('restartBtn').classList.remove('hidden');
}

function restartGame() {
    window.location.href = 'menu.html'; // Redirigir al menú
}
