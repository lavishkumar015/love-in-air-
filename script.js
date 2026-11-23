// A Rose For You — 1,000 generated shayari combinations per language.
// Each language uses 10 x 10 x 10 phrase combinations.

const phrases = {
  hi: {
    a: ["तुम्हारी मुस्कान", "तेरी आँखों में", "तुम्हारे साथ", "तेरी बातों में", "मेरे हर ख्वाब में", "तेरी हँसी से", "तुम्हारे नाम से", "मेरे दिल में", "तेरे एहसास से", "तेरी यादों में"],
    b: ["एक खूबसूरत कहानी बसती है", "मेरी दुनिया रोशन होती है", "हजारों फूल खिल जाते हैं", "दिल को सुकून मिलता है", "हर लम्हा खास बन जाता है", "प्यार का एहसास होता है", "एक नई उम्मीद जागती है", "खुशियों का मौसम आता है", "चाँद भी शर्मा जाता है", "मेरे सपने सज जाते हैं"],
    c: ["और ये एहसास हमेशा रहेगा। ❤️", "क्योंकि तुम मेरे लिए खास हो। 🌹", "बस तुम साथ रहना। 💕", "यही मेरी सबसे प्यारी दुआ है। ✨", "तुमसे ही मेरी दुनिया है। 💖", "ये दिल सिर्फ तुम्हें चाहता है। 🥰", "हर जन्म में तुम्हें चुनूँगा। ❤️", "तुम मेरी सबसे सुंदर खुशी हो। 🌸", "तुमसे बेहतर कोई ख्वाब नहीं। 💌", "और ये कहानी कभी खत्म न हो। 💍"]
  },
  en: {
    a: ["Your beautiful smile", "Your lovely eyes", "Every moment with you", "Your sweet voice", "Your presence", "Every little memory", "Your beautiful heart", "The thought of you", "Your innocent laughter", "Your name"],
    b: ["makes my world brighter", "turns ordinary moments magical", "fills my heart with peace", "makes every day special", "feels like a beautiful dream", "gives me a reason to smile", "makes my heart skip a beat", "brings sunshine to my life", "is my favorite feeling", "makes life more beautiful"],
    c: ["And I hope it lasts forever. ❤️", "Because you are truly special. 🌹", "I just want you by my side. 💕", "You are my sweetest blessing. ✨", "My heart chooses you every day. 💖", "You are my favorite person. 🥰", "I would choose you in every lifetime. ❤️", "You make my world complete. 🌸", "You are my beautiful forever. 💌", "And this story should never end. 💍"]
  },
  mix: {
    a: ["Tumhari smile", "Teri aankhon mein", "Tumhare saath", "Teri baaton mein", "Mere har dream mein", "Teri hansi se", "Tumhare naam se", "Mere dil mein", "Tere ehsaas se", "Teri yaadon mein"],
    b: ["ek beautiful story basti hai", "meri world bright ho jaati hai", "thousand flowers khil jaate hain", "dil ko sukoon milta hai", "har moment special ban jaata hai", "love ka ehsaas hota hai", "ek new hope jagti hai", "happiness ka season aa jaata hai", "moon bhi blush kar jaata hai", "mere dreams saj jaate hain"],
    c: ["and this feeling will stay forever. ❤️", "because you are so special. 🌹", "bas tum saath rehna. 💕", "you are my sweetest wish. ✨", "tumse hi meri duniya hai. 💖", "my heart chooses only you. 🥰", "har lifetime mein I choose you. ❤️", "you are my happiest thought. 🌸", "you are my favorite dream. 💌", "and may our story never end. 💍"]
  }
};

const shayariText = document.getElementById("shayariText");
const counter = document.getElementById("counter");
const languageButtons = document.querySelectorAll(".lang-btn");
const toast = document.getElementById("toast");
let language = "hi";
let currentIndex = 0;
const TOTAL = 1000;

function makeShayari(index, lang) {
  const set = phrases[lang];
  const a = Math.floor(index / 100);
  const b = Math.floor(index / 10) % 10;
  const c = index % 10;
  return `${set.a[a]}, ${set.b[b]} ${set.c[c]}`;
}

function renderShayari() {
  shayariText.classList.add("changing");
  shayariText.style.opacity = "0";
  shayariText.style.transform = "translateY(8px)";
  window.setTimeout(() => {
    shayariText.textContent = makeShayari(currentIndex, language);
    counter.textContent = `${String(currentIndex + 1).padStart(2, "0")} / ${TOTAL}`;
    shayariText.style.opacity = "1";
    shayariText.style.transform = "translateY(0)";
  }, 180);
}

function setLanguage(nextLanguage) {
  language = nextLanguage;
  languageButtons.forEach(button => button.classList.toggle("active", button.dataset.lang === language));
  renderShayari();
}

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % TOTAL;
  renderShayari();
});
document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + TOTAL) % TOTAL;
  renderShayari();
});
document.getElementById("randomBtn").addEventListener("click", () => {
  let next;
  do { next = Math.floor(Math.random() * TOTAL); } while (next === currentIndex);
  currentIndex = next;
  renderShayari();
  showToast("A little surprise, just for you ✨");
});
languageButtons.forEach(button => button.addEventListener("click", () => setLanguage(button.dataset.lang)));

document.getElementById("openProposal").addEventListener("click", () => {
  const card = document.getElementById("answerCard");
  card.hidden = false;
  card.scrollIntoView({ behavior: "smooth", block: "center" });
  petalShower(16);
});
document.getElementById("yesBtn").addEventListener("click", () => {
  document.getElementById("response").innerHTML =
    "Yay! ❤️ You just made this moment unforgettable.<br>हमारी कहानी का यह सबसे खूबसूरत पल है। 🌹";
  petalShower(65);
  showToast("Sending you a thousand virtual roses 🌹");
});
document.getElementById("thinkBtn").addEventListener("click", () => {
  document.getElementById("response").textContent =
    "Take all the time you need. Your happiness matters most. 🌷";
  showToast("No pressure — only good feelings 💗");
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function petalShower(count = 12) {
  const symbols = ["🌸", "🌹", "💗", "♥"];
  for (let i = 0; i < count; i++) {
    window.setTimeout(() => {
      const petal = document.createElement("span");
      petal.className = "petal-fall";
      petal.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      petal.style.left = `${Math.random() * 100}vw`;
      petal.style.fontSize = `${14 + Math.random() * 17}px`;
      petal.style.animationDuration = `${3 + Math.random() * 3}s`;
      document.body.appendChild(petal);
      window.setTimeout(() => petal.remove(), 6500);
    }, i * 45);
  }
}

// Soft decorative stars, created once and animated in CSS.
const sparkleLayer = document.getElementById("sparkleLayer");
for (let i = 0; i < 24; i++) {
  const star = document.createElement("span");
  star.className = "sparkle";
  star.textContent = i % 3 === 0 ? "✦" : "·";
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.fontSize = `${8 + Math.random() * 12}px`;
  star.style.animationDelay = `${Math.random() * 4}s`;
  sparkleLayer.appendChild(star);
}

renderShayari();
