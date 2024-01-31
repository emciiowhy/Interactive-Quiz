const questions = [
    { question: "What is the capital of Japan?", answer: "Tokyo" },
    { question: "Which gas do plants absorb from the atmosphere?", answer: "Carbon dioxide" },
    { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci" },
    { question: "What is the largest ocean on Earth?", answer: "Pacific Ocean" },
    { question: "In which year did the first moon landing occur?", answer: "1969" }
];


let currentQuestion = 0;

function loadQuestion() {
    document.getElementById("question").innerText = questions[currentQuestion].question;
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    const correctAnswer = questions[currentQuestion].answer.toLowerCase();

    const resultContainer = document.getElementById("result-container");
    const resultMessage = document.getElementById("result-message");

    if (userAnswer === correctAnswer) {
        resultMessage.innerText = "Correct!";
        resultMessage.style.color = "d86f0d";
        resultContainer.style.backgroundColor = "d86f0d";
        resultContainer.style.display = "block";
    } else {
        resultMessage.innerText = "Wrong answer. Try again!";
        resultMessage.style.color = "#d9534f";
        resultContainer.style.backgroundColor = "#f2dede";
        resultContainer.style.display = "block";
        currentQuestion = 0; // Reset to the first question on incorrect answer
        loadQuestion(); // Load the first question again
    }
}

function nextQuestion() {
    document.getElementById("result-container").style.display = "none";
    document.getElementById("answer").value = "";

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion(); // Load the next question
    } else {
        alert("Quiz completed! You got the Perfect Answer");
    }
}

// Initial question load
loadQuestion();
