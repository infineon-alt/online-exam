let totalTime = 2 * 60; // 2 minutes

function startTimer() {

    const timer = document.getElementById("timer");

    const interval = setInterval(function () {

        let minutes = Math.floor(totalTime / 60);
        let seconds = totalTime % 60;

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        timer.innerHTML = minutes + ":" + seconds;

        if (totalTime <= 0) {

            clearInterval(interval);

            saveAnswer();

            localStorage.setItem(
                "candidateAnswers",
                JSON.stringify(selectedAnswers)
            );

            stopCamera();

            window.location.href = "thankyou.html";

            return;
        }

        totalTime--;

    }, 1000);
}
