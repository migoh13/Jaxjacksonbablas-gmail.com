// ============================================================
// Author: Jackson Bablas Matete | UDSM BSc BIT
// ============================================================

// ============================================================
// 1. REAL-TIME DIGITAL CLOCK  (setInterval)
// ============================================================
function updateClock() {
  var now = new Date();
  var h = String(now.getHours()).padStart(2, '0');
  var m = String(now.getMinutes()).padStart(2, '0');
  var s = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('clock').textContent = h + ':' + m + ':' + s;
}
updateClock();
setInterval(updateClock, 1000);

// ============================================================
// 2. TYPEWRITER EFFECT  (setTimeout)
// ============================================================
var messages = [
  "Studying BSc Business Information Technology at UDSM.",
  "Passionate about web development & cybersecurity.",
  "Building technology solutions for business problems.",
  "Future software developer from Tanzania."
];
var msgIndex = 0;
var charIndex = 0;
var isDeleting = false;
var typeEl = document.getElementById('typewriter');

function typeWriter() {
  var current = messages[msgIndex];
  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }
  typeEl.textContent = current.substring(0, charIndex);
  var speed = isDeleting ? 40 : 70;
  if (!isDeleting && charIndex === current.length) {
    speed = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    msgIndex = (msgIndex + 1) % messages.length;
    speed = 400;
  }
  setTimeout(typeWriter, speed);
}
typeWriter();

// ============================================================
// 3. DARK / LIGHT MODE TOGGLE
// ============================================================
var themeBtn = document.getElementById('theme-toggle');
var isLight = false;

themeBtn.addEventListener('click', function () {
  isLight = !isLight;
  document.body.classList.toggle('light', isLight);
  themeBtn.textContent = isLight ? '🌙 Dark' : '☀️ Light';
});

// ============================================================
// 4. SKILLS — SHOW / HIDE TOGGLE  (classList)
// ============================================================
document.querySelectorAll('.skill-item').forEach(function (item) {
  function toggleSkill() {
    var details = item.querySelector('.skill-details');
    var isOpen = details.classList.contains('open');
    // Close all first
    document.querySelectorAll('.skill-details').forEach(function (d) {
      d.classList.remove('open');
    });
    document.querySelectorAll('.skill-item').forEach(function (i) {
      i.classList.remove('open');
    });
    // Open clicked one if it was closed
    if (!isOpen) {
      details.classList.add('open');
      item.classList.add('open');
    }
  }
  item.addEventListener('click', toggleSkill);
  item.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleSkill();
    }
  });
});

// ============================================================
// 5. EDUCATION TABLE — SORT BY YEAR  (asc / desc toggle)
// ============================================================
var sortAsc = true;

document.getElementById('sort-btn').addEventListener('click', function () {
  var tbody = document.getElementById('edu-tbody');
  var rows = Array.from(tbody.querySelectorAll('tr'));

  rows.sort(function (a, b) {
    var ya = parseInt(a.cells[2].textContent) || 9999;
    var yb = parseInt(b.cells[2].textContent) || 9999;
    return sortAsc ? ya - yb : yb - ya;
  });

  rows.forEach(function (row) { tbody.appendChild(row); });
  sortAsc = !sortAsc;
  document.getElementById('sort-arrow').textContent = sortAsc ? '↑' : '↓';
});

// ============================================================
// 6. HOBBIES — READ MORE / READ LESS TOGGLE
// ============================================================
var readMoreBtn = document.getElementById('read-more-btn');
var hobbiesInner = document.getElementById('hobbies-inner');
var expanded = false;

readMoreBtn.addEventListener('click', function () {
  expanded = !expanded;
  hobbiesInner.classList.toggle('expanded', expanded);
  readMoreBtn.textContent = expanded ? 'Read Less ↑' : 'Read More ↓';
});

// ============================================================
// 7. IMAGE LIGHTBOX  (overlay with close button)
// ============================================================
var lightbox      = document.getElementById('lightbox');
var lightboxImg   = document.getElementById('lightbox-img');
var lightboxClose = document.getElementById('lightbox-close');

function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

// Thumbnail triggers
document.querySelectorAll('.lightbox-trigger').forEach(function (el) {
  el.addEventListener('click', function () {
    var src = el.dataset.src || (el.querySelector('img') && el.querySelector('img').src) || el.src;
    openLightbox(src);
  });
});

// Hero photo trigger
var heroPhoto = document.getElementById('hero-photo');
if (heroPhoto) {
  heroPhoto.addEventListener('click', function () {
    openLightbox(this.src);
  });
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', function (e) {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeLightbox();
});

// ============================================================
// 8. SCROLL-TO-TOP BUTTON  (appears after 200px scroll)
// ============================================================
var scrollBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', function () {
  if (window.scrollY > 200) {
    scrollBtn.classList.add('visible');
  } else {
    scrollBtn.classList.remove('visible');
  }
});

scrollBtn.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
