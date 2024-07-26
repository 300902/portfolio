let spanElement = document.querySelector('.home-content h3 span');
let text = 'Front End Developer ';
let index = 0;

// Fungsi untuk memperbarui teks di elemen span
function updateText() {
  spanElement.innerText += text[index];
  spanElement.style.color = "rgb(135, 58, 193)";
  
  index++;

  if (index > text.length) {
    index = 0;
    spanElement.innerText = '';
  }
}

setInterval(updateText, 300);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  let navbar = document.getElementById("navbar");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.style.background = "#242338"; // ganti dengan warna hitam
  } else {
    navbar.style.background = "transparent"; // ganti dengan warna awal navbar
  }
}



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  let navbar = document.getElementById("navbar");
  let chevronIcon = document.getElementById("chevronIcon");
  
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.style.background = "#242338"; // ganti dengan warna hitam
    chevronIcon.style.display = "block"; // tampilkan ikon
    chevronIcon.classList.remove("slide-out-right"); // hapus animasi
  } else {
    navbar.style.background = "transparent"; // ganti dengan warna awal navbar
    chevronIcon.classList.add("slide-out-right"); // tambahkan animasi
  }
}