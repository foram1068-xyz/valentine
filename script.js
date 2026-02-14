// ================= PAGE NAVIGATION =================

function goToPage2() {
    document.getElementById("page1").classList.remove("active");
    document.getElementById("page2").classList.add("active");
}

function goToPage3() {
    document.getElementById("page2").classList.remove("active");
    document.getElementById("page3").classList.add("active");
}

function goBackToGifts() {
    // Hide ALL pages
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    // Show Gifts page
    document.getElementById("page3").classList.add("active");
}



// ================= QUIZ LOGIC =================

// Quiz Data (Clean and Scalable)
const quizData = [
    {
        question: "Who is the absolute 'Boss' in this relationship 😉?",
        options: ["Obviously You", "Me", "My Mom"],
        correctIndex: 0
    },
    {
        question: "Who fights a lot in this relationship 😉?",
        options: ["Always You", "No One", "Me"],
        correctIndex: 0
    },
    {
        question: "Where do I plan to spend the rest of my life 🥺?",
        options: ["In Your Heart", "Paris", "On Mars"],
        correctIndex: 0
    }
];


let currentQuestion = 0;


// Start Quiz
function startQuiz() {
    document.getElementById("page3").classList.remove("active");
    document.getElementById("quizPage").classList.add("active");

    currentQuestion = 0;
    renderQuestion();
}


// Render Question Dynamically
function renderQuestion() {
    const quizContent = document.getElementById("quizContent");

    if (currentQuestion >= quizData.length) {
        quizContent.innerHTML = `
            <div class="quiz-box">
                <p>Yay! You passed the test! You really love me! 🥰❤️</p>
            </div>
        `;
        return;
    }

    const questionObj = quizData[currentQuestion];

    quizContent.innerHTML = `
        <div class="quiz-box">
            <h3>${questionObj.question}</h3>
            ${questionObj.options.map((option, index) => 
                `<button class="quiz-option" onclick="checkAnswer(${index})">
                    ${option}
                </button>`
            ).join("")}
        </div>
    `;
}

function checkAnswer(selectedIndex) {
    const questionObj = quizData[currentQuestion];
    const buttons = document.querySelectorAll(".quiz-option");

    if (selectedIndex === questionObj.correctIndex) {
        // Mark correct
        buttons[selectedIndex].style.backgroundColor = "green";
        buttons[selectedIndex].style.color = "white";

        // Move to next question after short delay
        setTimeout(() => {
            currentQuestion++;
            renderQuestion();
        }, 800);

    } else {
        // Mark wrong
        buttons[selectedIndex].style.backgroundColor = "red";
        buttons[selectedIndex].style.color = "white";

        // Reset wrong button after delay
        setTimeout(() => {
            buttons[selectedIndex].style.backgroundColor = "";
            buttons[selectedIndex].style.color = "";
        }, 800);
    }
}
   


// Move to Next Question
function nextQuestion() {
    currentQuestion++;
    renderQuestion();
}

function openLetter() {
    document.getElementById("page3").classList.remove("active");
    document.getElementById("letterPage").classList.add("active");
}

function openPhotos() {
    document.getElementById("page3").classList.remove("active");
    document.getElementById("photoPage").classList.add("active");
}

function goToFinal() {
    document.getElementById("photoPage").classList.remove("active");
    document.getElementById("finalPage").classList.add("active");
}
