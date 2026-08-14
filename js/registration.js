// ==========================================
// SUPABASE CONFIGURATION
// ==========================================

const SUPABASE_URL =
    "https://tndcilwfpszviupilcl.supabase.co";

const SUPABASE_KEY =
    "PASTE_YOUR_PUBLISHABLE_KEY_HERE";


// ==========================================
// MOVE TO NEXT STEP
// ==========================================

function nextStep(step) {

    // Hide all steps
    for (let i = 1; i <= 5; i++) {

        const current =
            document.getElementById("step" + i);

        if (current) {
            current.style.display = "none";
        }
    }

    // Show requested step
    const next =
        document.getElementById("step" + step);

    if (next) {
        next.style.display = "block";
    }
}


// ==========================================
// MOVE TO PREVIOUS STEP
// ==========================================

function previousStep(step) {

    // Hide all steps
    for (let i = 1; i <= 5; i++) {

        const current =
            document.getElementById("step" + i);

        if (current) {
            current.style.display = "none";
        }
    }

    // Show requested step
    const previous =
        document.getElementById("step" + step);

    if (previous) {
        previous.style.display = "block";
    }
}


// ==========================================
// CHECK EXAM CODE
// ==========================================

async function checkExamCode() {

    const codeInput =
        document.getElementById("examCode");

    const message =
        document.getElementById("codeMessage");

    const code =
        codeInput.value.trim().toUpperCase();


    // Empty code
    if (code === "") {

        message.textContent =
            "Please enter your exam code.";

        return;
    }


    message.textContent =
        "Checking exam code...";


    try {

        const response = await fetch(
            `${SUPABASE_URL}/rest/v1/rpc/claim_exam_code`,
            {
                method: "POST",

                headers: {

                    "Content-Type":
                        "application/json",

                    "apikey":
                        SUPABASE_KEY,

                    "Authorization":
                        `Bearer ${SUPABASE_KEY}`
                },

                body: JSON.stringify({

                    p_code: code

                })
            }
        );


        // Server error
        if (!response.ok) {

            throw new Error(
                "Unable to verify exam code."
            );
        }


        const result =
            await response.json();


        // Valid code
        if (
            result.length > 0 &&
            result[0].success === true
        ) {

            const candidateName =
                result[0].candidate_name;


            // Save candidate information
            localStorage.setItem(
                "candidateName",
                candidateName
            );

            localStorage.setItem(
                "examCode",
                code
            );


            message.textContent =
                "Code verified. Starting exam...";


            // Open exam
            setTimeout(function () {

                window.location.href =
                    "exam.html";

            }, 500);


        } else {

            // Invalid / already used
            message.textContent =
                "Invalid or already used exam code.";
        }


    } catch (error) {

        console.error(error);

        message.textContent =
            "Unable to verify exam code. Please try again.";
    }
}


// ==========================================
// START EXAM BUTTON
// ==========================================

async function continueAssessment() {

    await checkExamCode();

}
