//alert("script.js loaded");

let cameraStream;
async function startCamera() {
    try {
        cameraStream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false
        });

        document.getElementById("video").srcObject = cameraStream;

    } catch (err) {
        alert("Camera permission is required.");
    }
}


function startExam() {

    //alert("startExam is running");

    createPalette();
    loadQuestion();
    updateButtons();
    startTimer();
}


function stopCamera() {
    if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
    }
}

let currentQuestion = 0;
let selectedAnswers = [];

function escapeHTML(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function loadQuestion() {

    document.getElementById("questionNumber").innerHTML =
        "Question " +
        (currentQuestion + 1) +
        " of " +
        questions.length;

    const q = questions[currentQuestion].question;

    const isCode =
        q.includes("\n") ||
        q.includes("#include") ||
        q.includes("def ") ||
        q.includes("class ") ||
        q.includes("printf") ||
        q.includes("print(");

    if (isCode) {

        document.getElementById("question").innerHTML =
            `<pre class="code-question">${escapeHTML(q)}</pre>`;

    } else {

        document.getElementById("question").innerHTML =
            `<div class="normal-question">${escapeHTML(q)}</div>`;

    }


    let html = "";

    questions[currentQuestion].options.forEach((option, i) => {

        const checked = selectedAnswers[currentQuestion] === i ? "checked" : "";

        html += `
        <label class="option-card">
            <input type="radio" name="option" value="${i}" ${checked}>
            <span>${option}</span>
        </label>`;
    });

    document.getElementById("options").innerHTML = html;
    updatePalette();
    updateButtons();
}

function saveAnswer() {

    let selected = document.querySelector('input[name="option"]:checked');

    if (selected) {
        selectedAnswers[currentQuestion] = Number(selected.value);
    }

    updatePalette();
}

function nextQuestion() {

    saveAnswer();

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
}

function previousQuestion() {

    saveAnswer();

    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

const palette = document.getElementById("palette");

function createPalette() {

    palette.innerHTML = "";

    for (let i = 0; i < questions.length; i++) {

        const btn = document.createElement("button");

        btn.id = "q" + i;          // IMPORTANT
        btn.textContent = i + 1;

        btn.onclick = function () {
            jumpQuestion(i);
        };

        palette.appendChild(btn);
    }

    updatePalette();
}

function updatePalette() {

    for (let i = 0; i < questions.length; i++) {

        let btn = document.getElementById("q" + i);

        btn.className = "";

        if (selectedAnswers[i] !== undefined)
            btn.classList.add("answered");
        else
            btn.classList.add("notanswered");
    }

    document.getElementById("q" + currentQuestion).classList.add("current");
}

function jumpQuestion(index) {

    saveAnswer();

    currentQuestion = index;

    loadQuestion();
}

function updateButtons() {

    if (currentQuestion === questions.length - 1) {
        document.getElementById("nextBtn").style.display = "none";
        document.getElementById("submitBtn").style.display = "inline-block";
    } else {
        document.getElementById("nextBtn").style.display = "inline-block";
        document.getElementById("submitBtn").style.display = "none";
    }
}

/* ---------- TIMER ---------- */

let timeLeft = 60 * 60; // 60 minutes
function startTimer() {

    const timer = document.getElementById("timer");

    timerInterval = setInterval(function () {

        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        timer.innerHTML =
            String(minutes).padStart(2, "0") + ":" +
            String(seconds).padStart(2, "0");


        // TIME OVER
        if (timeLeft <= 0) {

            clearInterval(timerInterval);

            timer.innerHTML = "00:00";

            // NO CONFIRMATION
            submitExam(true);

            return;
        }

        timeLeft--;

    }, 1000);
}

function submitExam(autoSubmit = false) {

    saveAnswer();

    // Show confirmation ONLY for manual submission
    if (!autoSubmit) {

        const confirmSubmit = confirm(
            "Are you sure you want to submit the assessment?"
        );

        if (!confirmSubmit) {
            return;
        }
    }

    // Save answers
    localStorage.setItem(
        "candidateAnswers",
        JSON.stringify(selectedAnswers)
    );

    // Stop camera
    stopCamera();

    // Go directly to thank-you page
    window.location.href = "thankyou.html";
}
