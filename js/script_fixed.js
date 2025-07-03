// Subscrbe YouTube Tamzidan Mahdiyin

function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform  = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform  = "translateY(-500px)"
}

// Animasi Menulis
const texts = [
    "DEVELOPER",
    "YOUTUBER",
    "DESIGNER"
]

let speed = 100;

const textElements = document.querySelector(".typewriter-text")

let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if(charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText() {
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1)
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter,500)
    }
}

window.onload = typeWriter;

// === Fungsi tombol statistik ===
function setupStatListeners() {
  document.getElementById("stat-projects")?.addEventListener("click", showProjects);
  document.getElementById("stat-experience")?.addEventListener("click", showExperience);
  document.getElementById("stat-clients")?.addEventListener("click", showClients);
  document.getElementById("stat-awards")?.addEventListener("click", showAwards);
}

document.addEventListener("DOMContentLoaded", function () {
  setupStatListeners();
});

// === Fungsi showProjects (dengan sertifikat) ===
function showProjects() {
  const aboutContent = document.getElementById('aboutContent');
  aboutContent.innerHTML = `
    <a href="about.html" class="back-button" onclick="restoreInitialContent()">
        <i class="fas fa-arrow-left"></i> Back
    </a>
    <div class="about-header" data-aos="fade-down" data-aos-duration="1500">
        <h1>Sertifikat</h1>
    </div>
    <div class="content-grid">
        <div class="content-card" data-aos="fade-up">
            <div class="card-image">
                <img src="https://files.catbox.moe/sertifikat-bssn.jpg" alt="Sertifikat BSSN">
            </div>
            <div class="card-info">
                <h3>Sertifikat Apresiasi BSSN - Lampung</h3>
                <p>Penghargaan dari Diskominfotik Provinsi Lampung dan BSSN atas kontribusi dalam pelaporan kerentanan sistem keamanan.</p>
            </div>
        </div>
        <div class="content-card" data-aos="fade-up">
            <div class="card-image">
                <img src="https://files.catbox.moe/sertifikat-devfest-html.jpg" alt="Sertifikat DevFest">
            </div>
            <div class="card-info">
                <h3>Sertifikat DevFest 2025 - HTML</h3>
                <p>Penyelesaian pelatihan HTML oleh DevFest 2025. Materi meliputi dasar-dasar pembuatan website dan struktur HTML.</p>
            </div>
        </div>
    </div>
  `;
  setupStatListeners();
  AOS.refresh();
}

function showExperience() {
  alert("Experience akan ditambahkan.");
  setupStatListeners();
}

function showClients() {
  alert("Client akan ditambahkan.");
  setupStatListeners();
}

function showAwards() {
  alert("Award akan ditambahkan.");
  setupStatListeners();
}

function restoreInitialContent() {
  location.reload();
}