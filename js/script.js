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
const aiAnswer = document.getElementById("aiAnswer");

const knowledgeBase = {

phishing:
"🎣 Phishing is a cyber attack where attackers create fake emails or websites to trick users into revealing passwords, banking information or personal data. Always verify website URLs before entering sensitive information.",

malware:
"🦠 Malware is malicious software such as viruses, worms, trojans, spyware and ransomware that damages computers or steals information.",

virus:
"💻 A computer virus is a malicious program that attaches itself to files and spreads to other computers when infected files are opened.",

ransomware:
"🔒 Ransomware encrypts your files and demands payment to unlock them. Never pay the ransom. Restore data from backups instead.",

firewall:
"🔥 A firewall protects your computer by filtering incoming and outgoing network traffic and blocking unauthorized access.",

vpn:
"🌍 A VPN (Virtual Private Network) encrypts your internet connection and hides your IP address to improve privacy and security.",

password:
"🔐 A strong password should contain at least 12 characters with uppercase letters, lowercase letters, numbers and symbols. Never reuse passwords.",

https:
"🌐 HTTPS encrypts communication between your browser and websites. Always prefer HTTPS over HTTP.",

sql:
"🗄 SQL Injection is a web attack where hackers insert malicious SQL commands into input fields to access or manipulate databases.",

xss:
"⚠ XSS (Cross Site Scripting) allows attackers to inject malicious JavaScript into webpages viewed by other users.",

python:
"🐍 Python is a powerful high-level programming language widely used for web development, AI, cybersecurity, automation and data science.",

java:
"☕ Java is an object-oriented programming language used for desktop applications, Android development and enterprise software.",

cpp:
"⚙ C++ is a fast programming language commonly used in game development, operating systems and competitive programming.",

html:
"📄 HTML (HyperText Markup Language) provides the structure of webpages.",

css:
"🎨 CSS (Cascading Style Sheets) controls the design, colors and layout of webpages.",

javascript:
"⚡ JavaScript makes websites interactive by handling animations, forms, buttons and dynamic content.",

database:
"🗄 A database stores and organizes data efficiently. Examples include MySQL, PostgreSQL and MongoDB.",

network:
"🌐 A computer network connects multiple devices together to share information and resources.",

ram:
"💾 RAM (Random Access Memory) temporarily stores data while programs are running. More RAM usually means better multitasking.",

cpu:
"🖥 CPU (Central Processing Unit) is the brain of the computer that executes instructions.",

ai:
"🤖 Artificial Intelligence enables computers to perform tasks that normally require human intelligence such as learning, reasoning and decision making."

};

if(askAIButton){

askAIButton.addEventListener("click",()=>{

const question = aiQuestion.value.toLowerCase().trim();

if(question===""){

aiAnswer.innerHTML="⚠ Please enter a question.";

return;

}

let found=false;

for(const key in knowledgeBase){

if(question.includes(key)){

aiAnswer.innerHTML=knowledgeBase[key];

found=true;

break;

}

}

if(!found){

aiAnswer.innerHTML=
"🧠 I don't have information about that topic yet.<br><br>Try asking about:<br><br>🔐 Passwords<br>🎣 Phishing<br>🦠 Malware<br>🌐 Networking<br>💻 Programming<br>🖥 Computer Hardware<br>🤖 Artificial Intelligence<br>🗄 Databases<br>🌍 Web Development";

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
const closePhishing = document.querySelector(".close-phishing");

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