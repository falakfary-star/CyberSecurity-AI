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