
let cameraStream;

async function startCamera() {

    try {

        cameraStream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false
        });

        document.getElementById("video").srcObject = cameraStream;

        document.getElementById("startExamBtn").disabled = false;

    }
    catch (err) {

        alert("Camera permission is required.");

    }
}

function startExam() {

    console.log("Questions:", questions);

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

function loadQuestion() {

    console.log("loadQuestion called");

    console.log(questions);

    document.getElementById("questionNumber").innerHTML =
        "Question " + (currentQuestion + 1) + " of " + questions.length;

    document.getElementById("question").innerHTML =
        "<pre>" + questions[currentQuestion].question + "</pre>";

    let html = "";

    for (let i = 0; i < questions[currentQuestion].options.length; i++) {

        html += `
        <label>
            <input type="radio" name="option" value="${i}">
            ${questions[currentQuestion].options[i]}
        </label><br>
        `;
    }

    document.getElementById("options").innerHTML = html;
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

function createPalette() {

    let palette = document.getElementById("palette");

    if (!palette) return;

    let html = "";

    for (let i = 0; i < questions.length; i++) {

        html += `<button id="q${i}" onclick="jumpQuestion(${i})">${i + 1}</button>`;
    }

    palette.innerHTML = html;

    updatePalette();
}

function updatePalette() {

    for (let i = 0; i < questions.length; i++) {

        let btn = document.getElementById("q" + i);

        if (!btn) continue;

        btn.className = "";

        if (selectedAnswers[i] !== undefined) {
            btn.classList.add("answered");
        } else {
            btn.classList.add("notanswered");
        }

        if (i === currentQuestion) {
            btn.classList.add("current");
        }
    }
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

function submitExam() {

    saveAnswer();

    if (confirm("Are you sure you want to submit the assessment?")) {

        localStorage.setItem(
            "candidateAnswers",
            JSON.stringify(selectedAnswers)
        );

       // stopExamCamera();   // Stop camera
       stopCamera();

        window.location.href = "thankyou.html";
    }
}

