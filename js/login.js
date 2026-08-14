let currentStep = 1;

function showStep(stepNumber) {

    document.querySelectorAll(".step").forEach(function(step) {
        step.classList.remove("active");
    });

    document.getElementById("step" + stepNumber)
        .classList.add("active");

    currentStep = stepNumber;
}


function nextStep(stepNumber) {

    if (!validateStep(currentStep)) {
        return;
    }

    showStep(stepNumber);
}


function previousStep(stepNumber) {

    showStep(stepNumber);
}


function goBack() {

    window.history.back();
}


function validateStep(step) {

    if (step === 1) {

        let value = document
            .getElementById("examCode")
            .value
            .trim();

        if (value === "") {

            document.getElementById("examCodeError")
                .style.display = "block";

            return false;
        }

        document.getElementById("examCodeError")
            .style.display = "none";

        return true;
    }


    if (step === 2) {

        let value = document
            .getElementById("college")
            .value
            .trim();

        if (value === "") {

            document.getElementById("collegeError")
                .style.display = "block";

            return false;
        }

        document.getElementById("collegeError")
            .style.display = "none";

        return true;
    }


    if (step === 3) {

        let value = document
            .getElementById("mobile")
            .value
            .trim();

        if (!/^[0-9]{10}$/.test(value)) {

            document.getElementById("mobileError")
                .style.display = "block";

            return false;
        }

        document.getElementById("mobileError")
            .style.display = "none";

        return true;
    }


    if (step === 4) {

        let value = document
            .getElementById("email")
            .value
            .trim();

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {

            document.getElementById("emailError")
                .style.display = "block";

            return false;
        }

        document.getElementById("emailError")
            .style.display = "none";

        return true;
    }


    if (step === 5) {

        let value = document
            .getElementById("name")
            .value
            .trim();

        if (value === "") {

            document.getElementById("nameError")
                .style.display = "block";

            return false;
        }

        document.getElementById("nameError")
            .style.display = "none";

        return true;
    }

    return true;
}


function startExam() {

    if (!validateStep(5)) {
        return;
    }

    localStorage.setItem(
        "candidateName",
        document.getElementById("name").value.trim()
    );

    localStorage.setItem(
        "examCode",
        document.getElementById("examCode").value.trim()
    );

    localStorage.setItem(
        "college",
        document.getElementById("college").value.trim()
    );

    localStorage.setItem(
        "mobile",
        document.getElementById("mobile").value.trim()
    );

    localStorage.setItem(
        "email",
        document.getElementById("email").value.trim()
    );

    window.location.href = "exam.html";
}
