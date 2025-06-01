// about.js

// Typing words
const words = [
  'Creative',
  'Web Developer',
  'Loves Cats',
  'Graphic Designer',
  'Aspiring Full-Stack Developer'
];

let currentWordIndex = 0;
let currentText = '';
let isDeleting = false;
const typingSpeed = 150;
const pauseTime = 2000;

// Load skills and projects dynamically
async function loadAboutData() {
  const res = await fetch('/api/about-data');
  if (!res.ok) return;
  const data = await res.json();

  const skillList = document.getElementById('skills-list');
  if (skillList) {
    skillList.innerHTML = '';
    data.skills.forEach(skill => {
      const badge = document.createElement('span');
      badge.className = `bg-${skill.color}-500 text-white px-4 py-2 rounded-full shadow-md text-sm font-semibold select-none`;
      badge.textContent = skill.name;
      skillList.appendChild(badge);
    });
  }

  const projectsContainer = document.getElementById('projects-list');
  if (projectsContainer) {
    projectsContainer.innerHTML = '';
    data.projects.forEach(project => {
      const card = document.createElement('div');
      card.className = "bg-white rounded-xl shadow-lg transform transition-transform hover:scale-105 p-5";
      card.innerHTML = `
        <img src="${project.image}" alt="${project.title} image" class="w-full h-48 object-cover rounded-lg mb-4" />
        <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
        <p class="text-gray-600 text-sm">${project.description}</p>
      `;
      projectsContainer.appendChild(card);
    });
  }
}

// Typing effect
document.addEventListener('DOMContentLoaded', () => {
  const dynamicWordEl = document.getElementById('dynamic-word');

  function type() {
    const fullText = words[currentWordIndex];
    if (!isDeleting) {
      currentText = fullText.substring(0, currentText.length + 1);
    } else {
      currentText = fullText.substring(0, currentText.length - 1);
    }

    if (dynamicWordEl) {
      dynamicWordEl.textContent = currentText;
    }

    if (!isDeleting && currentText === fullText) {
      setTimeout(() => { isDeleting = true; type(); }, pauseTime);
    } else if (isDeleting && currentText === '') {
      isDeleting = false;
      currentWordIndex = (currentWordIndex + 1) % words.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed);
    }
  }

  loadAboutData();
  type();
});
