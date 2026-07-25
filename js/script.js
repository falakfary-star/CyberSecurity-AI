console.log("CyberShield AI Loaded Successfully!");

const passwordInput = document.getElementById("passwordInput");
const checkButton = document.getElementById("checkPassword");
const result = document.getElementById("passwordResult");

checkButton.addEventListener("click", function () {

    const password = passwordInput.value;

   const hasUpper = /[A-Z]/.test(password);
const hasLower = /[a-z]/.test(password);
const hasNumber = /[0-9]/.test(password);
const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

let score = 0;

if (password.length >= 8) score++;
if (hasUpper) score++;
if (hasLower) score++;
if (hasNumber) score++;
if (hasSpecial) score++;

if (score <= 2) {
    result.innerHTML = "🔴 Weak Password";
    result.style.color = "red";
}
else if (score <= 4) {
    result.innerHTML = "🟡 Medium Password";
    result.style.color = "orange";
}
else {
    result.innerHTML = "🟢 Strong Password";
    result.style.color = "lime";
}

});

const urlInput = document.getElementById("urlInput");
const checkURLButton = document.getElementById("checkURL");
const urlResult = document.getElementById("urlResult");

if (checkURLButton) {

    checkURLButton.addEventListener("click", function () {

        const url = urlInput.value.toLowerCase();

        if (
            url.includes("login") ||
            url.includes("verify") ||
            url.includes("secure") ||
            url.includes("update") ||
            url.includes("free") ||
            url.includes("@")
        ) {

            urlResult.innerHTML = "🚨 Suspicious URL Detected!";
            urlResult.style.color = "red";

        }

        else {

            urlResult.innerHTML = "✅ This URL Looks Safe";
            urlResult.style.color = "lime";

        }

    });

}

// ============================
// Typing Animation
// ============================

const typingHeading = document.getElementById("typingHeading");

if (typingHeading) {

    const originalText = typingHeading.textContent;

    typingHeading.textContent = "";

    let index = 0;

    function typeText() {

        if (index < originalText.length) {

            typingHeading.textContent += originalText.charAt(index);

            index++;

            setTimeout(typeText, 100);

        }

    }

    typeText();

}
// ============================
// Scroll Progress Bar
// ============================

const progressBar = document.getElementById("progressBar");

if (progressBar) {

    window.addEventListener("scroll", function () {

        const scrollTop = document.documentElement.scrollTop;

        const scrollHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const progress = (scrollTop / scrollHeight) * 100;

        progressBar.style.width = progress + "%";

    });

}
// ============================
// Scroll Reveal Animation
// ============================

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(function(section) {

        const windowHeight = window.innerHeight;

        const sectionTop = section.getBoundingClientRect().top;

        const revealPoint = 100;

        if (sectionTop < windowHeight - revealPoint) {

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();
// ============================
// Cyber AI Assistant
// ============================

const aiQuestion = document.getElementById("aiQuestion");
const askAIButton = document.getElementById("askAI");
const aiAnswer = document.getElementById("aiAnswer");

if (askAIButton) {

    askAIButton.addEventListener("click", function () {

        const question = aiQuestion.value.toLowerCase();
        aiAnswer.innerHTML = "🤖 Thinking...";
        aiAnswer.style.color = "#FFD700";

        setTimeout(function () {

    if (question.includes("phishing")) {

            aiAnswer.innerHTML =
                "🛡️ Phishing is a cyber attack where fake emails or websites are used to steal your personal information.";

        }

        else if (question.includes("malware")) {

            aiAnswer.innerHTML =
                "💻 Malware is harmful software that can damage your computer or steal your data.";

        }

        else if (question.includes("password")) {

            aiAnswer.innerHTML =
                "🔐 A strong password should contain at least 12 characters with uppercase letters, lowercase letters, numbers, and special symbols.";

        }

        else if (question.includes("ransomware")) {

            aiAnswer.innerHTML =
                "🔒 Ransomware is malware that locks or encrypts your files and demands money to restore them.";

        }

        else if (question.includes("virus")) {

            aiAnswer.innerHTML =
                "🦠 A computer virus is a malicious program that spreads from one file or computer to another.";

        }

        else {

            aiAnswer.innerHTML =
                "🤖 Sorry, I don't know that yet. Try asking about phishing, malware, ransomware, virus, or passwords.";

        }
        }, 1000);

         });

}
// ============================
// Theme Toggle
// ============================

const themeToggle = document.getElementById("themeToggle");
// Load saved theme

if (localStorage.getItem("theme") === "light") {

    document.body.classList.add("light-mode");

    themeToggle.innerHTML = "☀️";

}

if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("light-mode");

       if (document.body.classList.contains("light-mode")) {

    themeToggle.innerHTML = "☀️";

    localStorage.setItem("theme", "light");

} else {

    themeToggle.innerHTML = "🌙";

    localStorage.setItem("theme", "dark");

}

    });

}