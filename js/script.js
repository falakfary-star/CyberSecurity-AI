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

/* ==========================
CyberShield Knowledge Assistant
========================== */

const aiQuestion = document.getElementById("aiQuestion");
const askAIButton = document.getElementById("askAI");
const chatContainer = document.getElementById("chatContainer");

const suggestions = [
    "What is phishing?",
    "What is malware?",
    "What is ransomware?",
    "What is a computer virus?",
    "What is a firewall?",
    "What is VPN?",
    "How to create a strong password?",
    "What is SQL Injection?",
    "What is XSS?",
    "What is Python?",
    "What is Java?",
    "What is C++?",
    "What is HTML?",
    "What is CSS?",
    "What is JavaScript?",
    "What is Artificial Intelligence?",
    "What is RAM?",
    "What is CPU?",
    "What is Networking?",
    "What is Database?"
];

const suggestionBox = document.getElementById("suggestions");

const knowledgeBase = {

phishing:"🎣 Phishing is a cyber attack where attackers create fake emails or websites to steal passwords or personal information.",

malware:"🦠 Malware is harmful software such as viruses, worms, trojans, spyware and ransomware.",

ransomware:"🔒 Ransomware encrypts files and demands payment for recovery.",

virus:"💻 A computer virus attaches itself to files and spreads to other computers.",

firewall:"🔥 A firewall filters network traffic and blocks unauthorized access.",

vpn:"🌍 VPN encrypts your internet connection and hides your IP address.",

password:"🔐 A strong password should contain at least 12 characters with uppercase, lowercase, numbers and symbols.",

sql:"🗄 SQL Injection attacks databases through vulnerable input fields.",

xss:"⚠ XSS injects malicious JavaScript into webpages viewed by other users.",

python:"🐍 Python is a powerful language used in AI, Cyber Security, Automation and Web Development.",

java:"☕ Java is an object-oriented programming language used in enterprise and Android development.",

cpp:"⚙ C++ is widely used in game development and operating systems.",

html:"📄 HTML creates the structure of webpages.",

css:"🎨 CSS controls the design and layout of webpages.",

javascript:"⚡ JavaScript makes websites interactive.",

database:"🗄 Databases store and organize information efficiently.",

network:"🌐 Computer networks connect devices to share information.",

cpu:"🖥 CPU is the brain of the computer.",

ram:"💾 RAM temporarily stores data while programs are running.",

ai:"🤖 Artificial Intelligence enables computers to perform tasks that normally require human intelligence."

};
function addMessage(message, type) {

    const div = document.createElement("div");

    div.className = type;

    div.innerHTML = message;

    chatContainer.appendChild(div);

    chatContainer.scrollTop = chatContainer.scrollHeight;

}

function replyQuestion(question) {

    addMessage(
        "<strong>🧠 CyberShield Knowledge Assistant</strong><br><br><span class='typing'>Thinking</span>",
        "assistant-message"
    );

    const typingMessage = chatContainer.lastElementChild;

    setTimeout(() => {

        typingMessage.remove();

        let found = false;

        for (const key in knowledgeBase) {

            if (question.includes(key)) {

                addMessage(
                    "<strong>🧠 CyberShield Knowledge Assistant</strong><br><br>" +
                    knowledgeBase[key],
                    "assistant-message"
                );

                found = true;

                break;

            }

        }

        if (!found) {

            addMessage(
                "<strong>🧠 CyberShield Knowledge Assistant</strong><br><br>" +
                "I don't have information about that topic yet.<br><br>" +
                "<strong>Try asking about:</strong><br>" +
                "🔐 Passwords<br>" +
                "🎣 Phishing<br>" +
                "🦠 Malware<br>" +
                "🔥 Firewall<br>" +
                "🌐 Networking<br>" +
                "🐍 Python<br>" +
                "📄 HTML<br>" +
                "🎨 CSS<br>" +
                "⚡ JavaScript<br>" +
                "🤖 Artificial Intelligence",
                "assistant-message"
            );

        }

    }, 1000);

}
/* ==========================
Question Suggestions
========================== */

function showSuggestions(text) {

    suggestionBox.innerHTML = "";

    const filtered = suggestions.filter(item =>
        item.toLowerCase().includes(text.toLowerCase())
    );

    filtered.forEach(item => {

        const div = document.createElement("div");

        div.className = "suggestion";

        div.innerText = item;

        div.addEventListener("click", () => {

            aiQuestion.value = item;

            suggestionBox.style.display = "none";

            aiQuestion.focus();

        });

        suggestionBox.appendChild(div);

    });

    suggestionBox.style.display = filtered.length ? "block" : "none";

}

if (aiQuestion) {

    aiQuestion.addEventListener("focus", () => {

        showSuggestions("");

    });

    aiQuestion.addEventListener("input", () => {

        showSuggestions(aiQuestion.value);

    });

}

document.addEventListener("click", function (e) {

    if (!e.target.closest(".assistant-search")) {

        suggestionBox.style.display = "none";

    }

});

/* ==========================
Send Question
========================== */

function sendQuestion() {

    const question = aiQuestion.value.trim();

    if (question === "") {

        return;

    }

    addMessage(
        "<strong>👤 You</strong><br><br>" + question,
        "user-message"
    );

    replyQuestion(question.toLowerCase());

    aiQuestion.value = "";

    suggestionBox.style.display = "none";

}

if (askAIButton) {

    askAIButton.addEventListener("click", sendQuestion);

}

if (aiQuestion) {

    aiQuestion.addEventListener("keypress", function (e) {

        if (e.key === "Enter") {

            sendQuestion();

        }

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
/* ==========================
   Loading Screen
========================== */

window.addEventListener("load", function () {
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
    }, 2000);
});

/* ==========================
   Cyber Particles
========================== */

particlesJS("particles-js", {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#00e5ff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5
    },
    size: {
      value: 3
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00e5ff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      }
    },
    modes: {
      grab: {
        distance: 180,
        line_linked: {
          opacity: 1
        }
      }
    }
  },
  retina_detect: true
});
/* ==========================
   Animated Statistics Counter
========================== */

const counters = document.querySelectorAll(".counter");

const animateCounter = (counter) => {
    const target = +counter.getAttribute("data-target");
    const speed = 200;
    const increment = target / speed;

    let count = 0;

    const updateCounter = () => {
        count += increment;

        if (count < target) {
            counter.innerText = Math.floor(count).toLocaleString();
            requestAnimationFrame(updateCounter);
        } else {
            counter.innerText = target.toLocaleString() + "+";
        }
    };

    updateCounter();
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

counters.forEach(counter => {
    observer.observe(counter);
});
/* ==========================
   Back To Top Button
========================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


/* ==========================
   Hero Subtitle Typing
========================== */

const subtitle = document.getElementById("typingSubtitle");

if (subtitle) {
    const subtitleText = "Protecting Your Digital World...";
    let i = 0;

    subtitle.textContent = "";

    function typeSubtitle() {
        if (i < subtitleText.length) {
            subtitle.textContent += subtitleText.charAt(i);
            i++;
            setTimeout(typeSubtitle, 70);
        }
    }

    setTimeout(typeSubtitle, 2500);
}
/* ==========================
   Password Popup
========================== */

const passwordCard = document.getElementById("passwordCard");
const passwordPopup = document.getElementById("passwordPopup");
const closePopup = document.querySelector(".close-popup");

if (passwordCard && passwordPopup && closePopup) {

    passwordCard.addEventListener("click", () => {
        passwordPopup.style.display = "flex";
    });

    closePopup.addEventListener("click", () => {
        passwordPopup.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === passwordPopup) {
            passwordPopup.style.display = "none";
        }
    });

}
/* ==========================
   Popup Password Analyzer
========================== */

const popupPassword = document.getElementById("popupPassword");
const analyzePopupPassword = document.getElementById("analyzePopupPassword");
const popupResult = document.getElementById("popupResult");
const securityScore = document.getElementById("securityScore");
const crackTime = document.getElementById("crackTime");
const strengthFill = document.getElementById("strengthFill");

const lengthCheck = document.getElementById("lengthCheck");
const upperCheck = document.getElementById("upperCheck");
const lowerCheck = document.getElementById("lowerCheck");
const numberCheck = document.getElementById("numberCheck");
const specialCheck = document.getElementById("specialCheck");

if (analyzePopupPassword) {

function analyzePassword() {

const password = popupPassword.value;

let score = 0;

const hasUpper = /[A-Z]/.test(password);
const hasLower = /[a-z]/.test(password);
const hasNumber = /[0-9]/.test(password);
const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

lengthCheck.innerHTML =
password.length >= 8 ? "✅ At least 8 characters" : "❌ At least 8 characters";

upperCheck.innerHTML =
hasUpper ? "✅ Uppercase letter" : "❌ Uppercase letter";

lowerCheck.innerHTML =
hasLower ? "✅ Lowercase letter" : "❌ Lowercase letter";

numberCheck.innerHTML =
hasNumber ? "✅ Number" : "❌ Number";

specialCheck.innerHTML =
hasSpecial ? "✅ Special character" : "❌ Special character";

if(password.length>=8) score++;
if(hasUpper) score++;
if(hasLower) score++;
if(hasNumber) score++;
if(hasSpecial) score++;

if(score<=2){

popupResult.innerHTML="🔴 Weak Password";
securityScore.innerHTML="Security Score: 30 / 100";
crackTime.innerHTML="Estimated Crack Time: A few minutes";

strengthFill.style.width="35%";

strengthFill.style.background="red";

}
else if(score<=4){

popupResult.innerHTML="🟡 Medium Password";
securityScore.innerHTML="Security Score: 65 / 100";
crackTime.innerHTML="Estimated Crack Time: A few days";

strengthFill.style.width="70%";

strengthFill.style.background="orange";

}
else{

popupResult.innerHTML="🟢 Strong Password";
securityScore.innerHTML="Security Score: 95 / 100";
crackTime.innerHTML="Estimated Crack Time: Hundreds of years";

strengthFill.style.width="100%";

strengthFill.style.background="lime";

}

}
if (analyzePopupPassword) {
    analyzePopupPassword.addEventListener("click", analyzePassword);
}
if (popupPassword) {
    popupPassword.addEventListener("input", analyzePassword);
}
}
/* ==========================
   Show / Hide Password
========================== */

const togglePopupPassword =
document.getElementById("togglePopupPassword");

if(togglePopupPassword){

togglePopupPassword.addEventListener("click",()=>{

if(popupPassword.type==="password"){

popupPassword.type="text";

togglePopupPassword.innerHTML="🙈";

}else{

popupPassword.type="password";

togglePopupPassword.innerHTML="👁️";

}

});

}
/* ==========================
   Phishing Popup
========================== */

const phishingCard = document.getElementById("phishingCard");
const phishingPopup = document.getElementById("phishingPopup");
const closePhishing = document.getElementById("closePhishingPopup");

if (phishingCard && phishingPopup && closePhishing) {

    phishingCard.addEventListener("click", () => {
        phishingPopup.style.display = "flex";
    });

    closePhishing.addEventListener("click", () => {
        phishingPopup.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === phishingPopup) {
            phishingPopup.style.display = "none";
        }
    });

}
/* ==========================
   Popup Phishing Detector
========================== */

const popupURL = document.getElementById("popupURL");
const scanPopupURL = document.getElementById("scanPopupURL");
const popupURLResult = document.getElementById("popupURLResult");
const riskScore = document.getElementById("riskScore");

const loginCheck = document.getElementById("loginCheck");
const verifyCheck = document.getElementById("verifyCheck");
const secureCheck = document.getElementById("secureCheck");
const freeCheck = document.getElementById("freeCheck");
const atCheck = document.getElementById("atCheck");

if (scanPopupURL) {

    scanPopupURL.addEventListener("click", function () {

        const url = popupURL.value.toLowerCase();

        let score = 0;

        const hasLogin = url.includes("login");
        const hasVerify = url.includes("verify");
        const hasSecure = url.includes("secure");
        const hasFree = url.includes("free");
        const hasAt = url.includes("@");

        loginCheck.innerHTML = hasLogin ? "⚠️ Contains 'login'" : "✅ No login keyword";
        verifyCheck.innerHTML = hasVerify ? "⚠️ Contains 'verify'" : "✅ No verify keyword";
        secureCheck.innerHTML = hasSecure ? "⚠️ Contains 'secure'" : "✅ No secure keyword";
        freeCheck.innerHTML = hasFree ? "⚠️ Contains 'free'" : "✅ No free keyword";
        atCheck.innerHTML = hasAt ? "⚠️ Contains '@'" : "✅ No @ symbol";

        if (hasLogin) score += 20;
        if (hasVerify) score += 20;
        if (hasSecure) score += 20;
        if (hasFree) score += 20;
        if (hasAt) score += 20;

        if (score <= 20) {

            popupURLResult.innerHTML = "🟢 Safe Website";
            popupURLResult.style.color = "lime";

        } else if (score <= 60) {

            popupURLResult.innerHTML = "🟡 Suspicious Website";
            popupURLResult.style.color = "orange";

        } else {

            popupURLResult.innerHTML = "🔴 Dangerous Website";
            popupURLResult.style.color = "red";

        }

        riskScore.innerHTML = "Risk Score: " + score + "%";

    });

}
/* ==========================
   Cyber Awareness Popup
========================== */

const awarenessCard = document.getElementById("awarenessCard");
const awarenessPopup = document.getElementById("awarenessPopup");
const closeAwareness = document.querySelector(".close-awareness");
const topicSelect = document.getElementById("topicSelect");
const learnTopic = document.getElementById("learnTopic");
const lessonBox = document.getElementById("lessonBox");

if (awarenessCard && awarenessPopup && closeAwareness) {

    awarenessCard.addEventListener("click", () => {
        awarenessPopup.style.display = "flex";
    });

    closeAwareness.addEventListener("click", () => {
        awarenessPopup.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === awarenessPopup) {
            awarenessPopup.style.display = "none";
        }
    });

}

if (learnTopic) {

    learnTopic.addEventListener("click", function () {

        switch(topicSelect.value){

            case "phishing":

                lessonBox.innerHTML = `
                <h3>🎣 Phishing</h3>
                <p>Phishing is a cyber attack where fake emails or websites trick people into revealing passwords or banking information.</p>
                <p><strong>Warning Signs:</strong></p>
                <ul>
                    <li>⚠️ Urgent messages</li>
                    <li>⚠️ Unknown sender</li>
                    <li>⚠️ Suspicious links</li>
                    <li>⚠️ Requests for personal information</li>
                </ul>
                `;
                break;

            case "malware":

                lessonBox.innerHTML = `
                <h3>💻 Malware</h3>
                <p>Malware is harmful software designed to damage systems or steal information.</p>
                <ul>
                    <li>🦠 Virus</li>
                    <li>🐴 Trojan</li>
                    <li>🔒 Ransomware</li>
                    <li>👀 Spyware</li>
                </ul>
                `;
                break;

            case "password":

                lessonBox.innerHTML = `
                <h3>🔐 Strong Passwords</h3>
                <p>A strong password should:</p>
                <ul>
                    <li>✅ Be at least 12 characters</li>
                    <li>✅ Include uppercase letters</li>
                    <li>✅ Include lowercase letters</li>
                    <li>✅ Include numbers</li>
                    <li>✅ Include special characters</li>
                </ul>
                `;
                break;

            case "email":

                lessonBox.innerHTML = `
                <h3>📧 Email Scams</h3>
                <p>Never open unexpected attachments or click unknown links.</p>
                <p>Always verify the sender before responding.</p>
                `;
                break;

            case "browsing":

                lessonBox.innerHTML = `
                <h3>🌐 Safe Browsing</h3>
                <p>Use HTTPS websites, keep your browser updated, and avoid downloading files from unknown sources.</p>
                `;
                break;

            default:

                lessonBox.innerHTML="Please select a topic.";

        }

    });

}
/* ==========================
   Live Clock
========================== */

const liveClock = document.getElementById("liveClock");

function updateClock(){

    if(!liveClock) return;

    const now = new Date();

    liveClock.innerHTML =
        now.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();

/* ==========================
   Website Safety Checker
========================== */

const websiteURL = document.getElementById("websiteURL");
const scanWebsite = document.getElementById("scanWebsite");
const scanResult = document.getElementById("scanResult");

if (scanWebsite) {

    scanWebsite.addEventListener("click", function () {

        const url = websiteURL.value.trim().toLowerCase();

        if (url === "") {

            scanResult.innerHTML =
                "⚠ Please enter a website URL.";

            return;

        }

        let score = 0;
        let reasons = [];

        // HTTPS Check
        if (!url.startsWith("https://")) {

            score += 25;
            reasons.push("❌ Website is NOT using HTTPS.");

        } else {

            reasons.push("✔ HTTPS Enabled");

        }

        // Suspicious Words
        const suspiciousWords = [
            "login",
            "verify",
            "update",
            "secure",
            "bank",
            "paypal",
            "gift",
            "free",
            "bonus",
            "claim",
            "password"
        ];

        suspiciousWords.forEach(word => {

            if (url.includes(word)) {

                score += 8;
                reasons.push("⚠ Suspicious keyword: " + word);

            }

        });

        // Too many hyphens
        const hyphenCount = (url.match(/-/g) || []).length;

        if (hyphenCount >= 3) {

            score += 15;
            reasons.push("⚠ Too many hyphens.");

        }

        // Long URL
        if (url.length > 60) {

            score += 10;
            reasons.push("⚠ Very long URL.");

        }

        // Fake domains
        if (
            url.includes("paypa1") ||
            url.includes("g00gle") ||
            url.includes("micr0soft")
        ) {

            score += 25;
            reasons.push("⚠ Fake domain detected.");

        }

        // Final Result
        if (score <= 20) {

            scanResult.innerHTML =
                "<h3 style='color:lime;'>🟢 SAFE WEBSITE</h3>" +
                reasons.join("<br>") +
                "<br><br><strong>Risk Score:</strong> " + score + "%";

        } else if (score <= 50) {

            scanResult.innerHTML =
                "<h3 style='color:orange;'>🟡 USE CAUTION</h3>" +
                reasons.join("<br>") +
                "<br><br><strong>Risk Score:</strong> " + score + "%";

        } else {

            scanResult.innerHTML =
                "<h3 style='color:red;'>🔴 SUSPICIOUS WEBSITE</h3>" +
                reasons.join("<br>") +
                "<br><br><strong>Risk Score:</strong> " + score + "%" +
                "<br><br><strong>Recommendation:</strong><br>Do NOT enter passwords or personal information.";

        }

    });

}
/* ==========================
Hero Information Cards
========================== */

const aiBadge = document.getElementById("aiBadge");
const realtimeBadge = document.getElementById("realtimeBadge");
const educationBadge = document.getElementById("educationBadge");

const aiInfoCard = document.getElementById("aiInfoCard");
const infoContent = document.getElementById("infoContent");

function showInfo(title, description, items) {

    let html = `<h3>${title}</h3>`;

    html += `<p>${description}</p>`;

    html += "<ul>";

    items.forEach(item => {

        html += `<li>${item}</li>`;

    });

    html += "</ul>";

    infoContent.innerHTML = html;

    aiInfoCard.style.display = "block";

}

if (aiBadge) {

    aiBadge.addEventListener("click", () => {

        showInfo(

            "🛡 CyberShield Smart Scanner",

            "CyberShield uses intelligent rule-based analysis to identify cybersecurity threats.",

            [

                "✔ URL Safety Analysis",

                "✔ Password Strength Checker",

                "✔ Cybersecurity Awareness",

                "✔ Rule-Based Threat Detection"

            ]

        );

    });

}

if (realtimeBadge) {

    realtimeBadge.addEventListener("click", () => {

        showInfo(

            "⚡ Real-Time Detection",

            "CyberShield instantly analyzes websites using smart security checks.",

            [

                "✔ HTTPS Verification",

                "✔ Suspicious Keyword Detection",

                "✔ URL Pattern Analysis",

                "✔ Risk Score Calculation"

            ]

        );

    });

}

if (educationBadge) {

    educationBadge.addEventListener("click", () => {

        showInfo(

            "🔒 Educational Purpose",

            "CyberShield is built to help students and beginners learn cybersecurity safely.",

            [

                "✔ Password Security",

                "✔ Safe Browsing",

                "✔ Phishing Awareness",

                "✔ Cybersecurity Best Practices"

            ]

        );

    });

}