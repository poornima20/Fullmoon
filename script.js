document.addEventListener("DOMContentLoaded", () => {

lucide.createIcons();

  function getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
  }

const icons = [
  "book",
  "book-open",
  "book-open-text",
  "book-text",
  "book-copy"
];

let index = 0;

setInterval(() => {
  const iconEl = document.getElementById("learningIcon");
  if (!iconEl) return;

  index = (index + 1) % icons.length;
  iconEl.setAttribute("data-lucide", icons[index]);

  lucide.createIcons(); // re-render icon
}, 1000); // change every 2 seconds

const logs = [
  { time: "2016", msg: "Started B.Tech in Computer & Communication" },
  { time: "2020", msg: "Graduated from Manipal University Jaipur" },
  { time: "2020", msg: "Joined Capgemini as SAP ABAP Developer" },
  { time: "2022", msg: "Completed 2 years building ERP Solutions" },
  { time: "2023", msg: "Started M.Tech in CSE (Ai & ML)" },
  { time: "2024", msg: "Joined Intel as Graduate Technical Intern" },
  { time: "2025", msg: "Graduated M.Tech from VIT" },
  { time: "2026", msg: "Actively Learning and developing" }
];


const container = document.getElementById("logLines");
const btn = document.getElementById("buildLogBtn");

btn.addEventListener("click", () => {

  container.innerHTML = ""; // clear old logs

  logs.forEach((log, index) => {

    const line = document.createElement("div");
    line.className = "log-line";

    line.innerHTML = `
      <span class="log-time">${log.time}</span>
      <span class="log-msg">${log.msg}</span>
    `;

    container.appendChild(line);

    setTimeout(() => {
      line.style.opacity = "1";
      line.style.transform = "translateY(0)";
      line.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    }, index * 500);

  });

});

const cmdBtn = document.querySelector(".nav-right");
const overlay = document.getElementById("commandOverlay");
const closeCmd = document.getElementById("closeCmd");

cmdBtn.addEventListener("click", () => {

  

  const scrollbarWidth = getScrollbarWidth();

  document.documentElement.style.setProperty(
    "--scrollbar-width",
    scrollbarWidth + "px"
  );

  overlay.classList.add("show");
  document.body.classList.add("popup-open");

  document.getElementById("cmdSearch").focus();
});


function closeCommand(){

  overlay.classList.remove("show");
  document.body.classList.remove("popup-open");

  document.documentElement.style.setProperty(
    "--scrollbar-width",
    "0px"
  );

}



closeCmd.addEventListener("click", closeCommand);

overlay.addEventListener("click", (e) => {
  if(e.target === overlay){
    closeCommand();
  }
});

document.addEventListener("keydown", (e) => {
  if(e.key === "Escape"){
    closeCommand();
  }
});

// ===============================
// Command Palette Search
// ===============================

const searchInput = document.getElementById("cmdSearch");
const cmdItems = document.querySelectorAll(".cmd-item");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();

  cmdItems.forEach(item => {
    const text = item.innerText.toLowerCase();

    if(text.includes(query)){
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
});


});
