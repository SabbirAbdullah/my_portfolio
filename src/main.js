import './styles.css';
import Chart from 'chart.js/auto';

document.addEventListener('DOMContentLoaded', () => {
const text = "Md Abdullah Kaisar Sabbir";
const target = document.getElementById("typing-name");

let index = 0;

function typeEffect() {
  if (index < text.length) {
    target.textContent += text.charAt(index);
    index++;

    // Reposition cursor after adding a character
    requestAnimationFrame(updateCursorPosition);

    setTimeout(typeEffect, 120);
  }
}

function updateCursorPosition() {
  const rect = target.getBoundingClientRect();
  const style = window.getComputedStyle(target);

  // Force cursor (::after) to appear at end of last line
  target.style.setProperty("--cursor-top", rect.height - parseFloat(style.lineHeight) + "px");
}

typeEffect();

  // ----------------------------
  // Mobile menu toggle
  // ----------------------------
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuLinks = document.querySelectorAll("#mobile-menu a"); // all menu items

  // Toggle menu open/close
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Close menu when any menu link is clicked
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });

  // ----------------------------
  // IntersectionObserver for reveal animations
  // ----------------------------
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  const observeReveal = (selector) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.style.animationDelay = `${i * 60}ms`;
      io.observe(el);
    });
  };

  // ----------------------------
  // Skills icons
  // ----------------------------
  const skillsData = [
    { name: 'Flutter', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/flutter/flutter-original.svg' },
    { name: 'Kotlin', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/kotlin/kotlin-original.svg' },
    { name: 'Android', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/android/android-original.svg' },
    { name: 'iOS', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/apple/apple-original.svg' },
    { name: 'Dart', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/dart/dart-original.svg' },
    { name: 'Firebase', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/firebase/firebase-plain.svg' },
    { name: 'UI/UX', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/figma/figma-original.svg' },
    { name: 'MySQL', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/mysql/mysql-original.svg' },
     { name: 'Node.js', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },

    { name: 'Postman', imageUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+PHBhdGggZmlsbD0iI2YzNzAzNiIgZD0iTTExMy4xMTcgMjYuMDY2QzkyLjE2OC0xLjA2MiA1My4xOTEtNi4wNyAyNi4wNjIgMTQuODgzYy0yNy4xMjUgMjAuOTUzLTMyLjEyOCA1OS45My0xMS4xNzUgODcuMDU1YzIwLjk1NyAyNy4xMjQgNTkuOTM3IDMyLjEyNCA4Ny4wNTggMTEuMTY3YzI3LjExNC0yMC45NTMgMzIuMTE4LTU5LjkxOCAxMS4xNzItODcuMDM5bTAgMCIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik05MS4wNzggMjQuMTY0YTEwLjA0IDEwLjA0IDAgMCAwLTUuNzgxIDIuNDI2YTEwLjAzIDEwLjAzIDAgMCAwLTEuNTQgMTMuNDY1YTEwLjAzIDEwLjAzIDAgMCAwIDEzLjI3NiAyLjcxNWguMDAydi4wMDFsLjE1Ni4xNTVhMTAuNiAxMC42IDAgMCAwIDEuOTY1LTEuNDVBMTAuMzQgMTAuMzQgMCAwIDAgOTkgMjcuMTA3di0uMDAybC04Ljg0NCA4Ljc4OWwtLjE1Ni0uMTU1bDguODQ0LTguNzkzYTEwLjA0IDEwLjA0IDAgMCAwLTcuNzY2LTIuNzh6TTc5LjQzNCAzOC41NTFjLTQuMjQtLjAwNy0xMS4xNjMgNC43OTktMjguMDY3IDIxLjcwM2wuMDg0LjA4NmMtLjA5Mi0uMDMyLS4xODUtLjAzNS0uMTg1LS4wMzVsLTYuMzY0IDYuMzA4YTEuMDM1IDEuMDM1IDAgMCAwIC45MyAxLjc2MmwxMC45MTQtMi4zMjhhLjMuMyAwIDAgMCAuMDkyLS4xN2wuMjQyLjI1bC0zLjcyIDMuNjloLS4xOGwtMjIuMDg2IDIyLjI2bDcuMDg2IDYuODI0YTEuMjUgMS4yNSAwIDAgMCAxLjQ3Ni4xNDlhMS4zMyAxLjMzIDAgMCAwIC42NDUtMS4zNTZsLTEuMDM1LTQuNWEuNTMuNTMgMCAwIDEgMC0uNjJhMTE3LjMgMTE3LjMgMCAwIDAgMjYuNzM4LTE3LjU4M2wtNC41MzUtNC41MzdsLjA4Ni0uMDE0bC0yLjY5LTIuNjg5bC4xNzItLjE3NGwuMTgyLjE4NmwtLjA5NC4wOTFsNy4xMzcgNy4yOTN2LS4wMDNjMTMuNjgtMTIuOTU0IDIzLjM5LTIzLjM2NyAyMC44NjUtMzAuMzc1YTMuODMgMy44MyAwIDAgMC0xLjEwNy0yLjIwOHYuMDA0YTQgNCAwIDAgMC0uNDgzLS4zMDZjLS4wODMtLjA4OC0uMTU2LS4xNzgtLjI0NC0uMjY0bC0uMDY2LjA2NmE0IDQgMCAwIDAtLjU4Mi0uMjlsLjI4OS0uMjkyYy0xLjc5Ni0xLjYtMy4yOC0yLjkyNC01LjUtMi45M3pNMzAuOTQgOTIuMjFsLTUuMTcxIDUuMTcydi4wMDRhMS4wMyAxLjAzIDAgMCAwLS40NTcgMS4xMjVhMS4wMzUgMS4wMzUgMCAwIDAgLjkyMS43ODlsMTIuNjcyLjg3NXoiLz48cGF0aCBmaWxsPSIjZjM3MDM2IiBkPSJNOTEuOTUgMjMuMzFhMTEuMDUgMTEuMDUgMCAwIDAtNy43NTkgMy4xN2ExMC45OSAxMC45OSAwIDAgMC0yLjM5IDExLjY0MWMtNC43NDEtMi4wMy0xMS4xNTUgMS41MS0zMS4xMDYgMjEuNDU3YTEgMSAwIDAgMC0uMDM3LjA5NGExIDEgMCAwIDAtLjExOS4wNjJsLTYuMzA5IDYuMzY0YTEuOTcgMS45NyAwIDAgMC0uMzYzIDIuMzI0YTIuMDEgMi4wMSAwIDAgMCAxLjcwNy45ODRsLjMxMy0uMjAzbDguNDI0LTEuNzk3bC00LjAzIDQuMDY3YTEgMSAwIDAgMC0uMDU0LjE2NmwtMTkuNzUgMTkuNzk5YS44LjggMCAwIDAtLjE5Mi4yMzhsLTUuMDg2IDUuMDlhMS45NyAxLjk3IDAgMCAwLS40MTQgMi4wNDNhMiAyIDAgMCAwIDEuNjU2IDEuMjY1bDEyLjYxOC44OGExIDEgMCAwIDAgLjUyLS40MTVhLjg5Ljg5IDAgMCAwIDAtMS4wMzVsLS4wMjYtLjAyNWEyLjIgMi4yIDAgMCAwIC43MDUtLjU4YTIuMjQgMi4yNCAwIDAgMCAuNDA2LTEuODc2bC0uOTg0LTQuMTg3YTEyNi43IDEyNi43IDAgMCAwIDI2LjMzNC0xNi44NjFhMSAxIDAgMCAwIC4yNDguMTAzYy4yNTQtLjAxOS40OTItLjEyOC42NzItLjMwOGMxMy41NS0xMi44MyAyMS41MTUtMjEuNjIyIDIxLjUxNS0yOC42MDJhOCA4IDAgMCAwLS40MzEtMi44NWExMSAxMSAwIDAgMCAzLjg0NS44M2wtLjAxNS4wMDRhMTEuMiAxMS4yIDAgMCAwIDUuMTgzLTEuNDVsLjAwNC4wMDFhLjg0Ljg0IDAgMCAwIC42MTctLjA1NWE5LjQgOS40IDAgMCAwIDIuMDctMS42NTJhMTAuODcgMTAuODcgMCAwIDAgMy4yNTgtNy43NThhMTAuODcgMTAuODcgMCAwIDAtMy4yNTctNy43NThhMSAxIDAgMCAwLS4xMTgtLjA5MWExMS4wNSAxMS4wNSAwIDAgMC03LjY1Ni0zLjA3OHptLS4wODcgMS43NzJhOS4yNyA5LjI3IDAgMCAxIDUuNTg2IDEuOTE0bC04LjA2OCA4LjExN2ExIDEgMCAwIDAtLjA3Ni4wOThhLjgzLjgzIDAgMCAwLS4yMzkuNTVhLjgzLjgzIDAgMCAwIC4zMTMuNjVoLjAwMmw2LjEgNi4xYTkuMDQgOS4wNCAwIDAgMS0xMC4wMjgtMS45MTNjLTIuNTg2LTIuNi0zLjMzNi02LjUwNC0xLjk1My05Ljg5MWMxLjM4My0zLjM5IDQuNjgtNS42MDUgOC4zNjMtNS42MjVtNy4xMiAzLjQzMmE4Ljg3IDguODcgMCAwIDEgMi4wMzMgNS42NzRhOS4xNSA5LjE1IDAgMCAxLTIuNjg4IDYuNDY0YTEwIDEwIDAgMCAxLTEuMDk4Ljg5NUw5Mi4zMDcgMzYuN2wtLjk2My0uOTYzbC4yNjUtLjI2NWw3LjM3My02Ljk2em0tLjM2NiA0LjE5M2EuNzguNzggMCAwIDAtLjU1LjAzMWEuNzMuNzMgMCAwIDAtLjM2LjQyNmEuNzMuNzMgMCAwIDAgLjA1LjU1OWEyLjIzIDIuMjMgMCAwIDEtLjI1NyAyLjMyOGEuNjQuNjQgMCAwIDAtLjE5NS40ODhjLjAwNC4xODQuMDcuMzYuMTk1LjQ5MmEuNTguNTggMCAwIDAgLjQxNCAwYS42OC42OCAwIDAgMCAuNjcyLS4yMDdhMy41NyAzLjU3IDAgMCAwIC40NjUtMy43Nzd2LjAwNGEuNzguNzggMCAwIDAtLjQzNC0uMzQ0TTc5LjM0IDM5LjQzYTUuNiA1LjYgMCAwIDEgMy4zMSAxLjIyNmE0Ljc2IDQuNzYgMCAwIDAtMi42ODEgMS4zNEw1Ny4xNjIgNjQuNzAxbC00LjQ3Ni00LjQ3NmMxMS44MjgtMTEuNzcyIDE5LjA2LTE3LjkyMSAyMy41NTYtMTkuOTM2YTUuNiA1LjYgMCAwIDEgMy4wOTgtLjg2em0zLjk2NSAyLjk2YTIuOSAyLjkgMCAwIDEgMi4wNDMuODQ0YTIuOCAyLjggMCAwIDEgLjg3OSAyLjEyMWEyLjg3IDIuODcgMCAwIDEtLjk4NSAyLjA3bC0yNC4yNSAyMS4xMDZsLTIuNjE3LTIuNjE3bDIyLjg4Ny0yMi42OGEyLjkgMi45IDAgMCAxIDIuMDQzLS44NDN6bTIuOTk0IDYuNjk4Yy0xLjY5IDYuNzAyLTEwLjY0NyAxNS43ODMtMTkuOTg3IDI0LjYwN2wtMy43NzctMy43NzN6TTUxLjM2NyA2MS41NDdsLjI3NC4yN2wzLjUxMyAzLjUxM2wtOS42MyAyLjA2em01Ljc5MyA1Ljg0bC4wMDQuMDA0bDEuMTY4IDEuMTk1bC4wMTguMDg0bC4wNzguMDEybC4yNDguMjU0bC44Mi44NGwtNS4zODUuNjZ6bTMuODY3IDQuMDc2bDMuNTc4IDMuNTc2QTEyNyAxMjcgMCAwIDEgMzguNzUgOTEuNjk1YTEuNDQgMS40NCAwIDAgMC0uNzc3IDEuNjUzbDEuMDM1IDQuNWEuMzEuMzEgMCAwIDEgMCAuMzYzYS4zMS4zMSAwIDAgMS0uNDE0IDBsLTYuMTAyLTYuMTUyTDUxLjMgNzIuOTc1em0tMjkuOTMzIDIxLjk0bC44NjkuODE0bDQuNDkyIDQuNDkybC0xMC4wMTYtLjY0OGw0LjY1NS00LjY1OXoiLz48L3N2Zz4=' },
    { name: 'Bloc', imageUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMzIgMzIiPjxwYXRoIGZpbGw9IiM1NWEzYmYiIGQ9Ik0yNy40MTcgNS41SDE4LjE5bC0yLjA4MyA0LjJINC41djE2LjhoMjV2LTIxWm0wIDQuMmgtOC4xMzVsMS4wOTEtMi4xaDcuMDQ0WiIvPjxwYXRoIGQ9Im0zMSAyNmwtOC41NzEgNWwtOC41NzItNVYxNmw4LjU3Mi01TDMxIDE2eiIvPjxwYXRoIGZpbGw9IiMwMDg0YzEiIGQ9Ik0xNS42MjQgMTcuMDcxTDIyLjQyOSAyMWw2LjgwNC0zLjkyOWwtNi44MDQtMy45Mjh6Ii8+PHBhdGggZmlsbD0iIzgyZWRkZiIgZD0iTTE1LjYyNCAxNy4wNzF2Ny44NThsNi44MDUgMy45MjhWMjF6Ii8+PHBhdGggZmlsbD0iIzAwZDNiOSIgZD0iTTIyLjQyOSAyOC44NTdWMjFsNi44MDQtMy45Mjl2Ny44NTh6Ii8+PC9zdmc+' },
    { name: 'Getx', imageUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiNjMDI2ZDMiIGQ9Ik0xMC42NDMuOTM0Yy0uMzAyLjA2Ny0uOTI4LjI5LTEuMzg2LjUwM2MtMi4xNjcgMS4wNS0zLjQ4NSAzLjUyLTMuMTUgNS44OTlhNS43NiA1Ljc2IDAgMCAwIDEuNTc1IDMuMjVjMS4xMjggMS4xNzQgMi40NjkgMS43MzIgNC4xMzQgMS43NDRjMS42NDIgMCAyLjk5NC0uNTcgNC4xMzMtMS43NDNDMTkuMzkgNyAxNy4wNTUgMS4xMTMgMTIuMDk1Ljg2N2MtLjQ5Mi0uMDIyLTEuMTQgMC0xLjQ1Mi4wNjdNMTMuNzcgMy4xN2MuOTA1LjMzNSAxLjk2NiAxLjM3NCAyLjE3OCAyLjE0NWMuMjEzLjc5My4xIDEuODItLjI5IDIuNTQ3Yy0uODYgMS41NzUtMi44MTYgMi43MjYtMy45ODkgMi4zNDZjLS41MzYtLjE3OS0xLjI1LS45OTQtMS42NDItMS44NTVjLS44NDctMS44ODktMS4xMjctMy41Mi0uNzM2LTQuMjhjLjU5Mi0xLjE1IDIuNzE1LTEuNTc1IDQuNDgtLjkwNFptLTkuNjYzIDguNjljLTIuODM4LjkxNi00LjUxMyAzLjU5OC00LjAyMiA2LjQ4Yy40OCAyLjg2IDMuMTczIDQuOTk0IDYuMDMzIDQuNzdjMi4wMzMtLjE0NSAzLjc2NS0xLjI0IDQuNjgxLTIuOTZjLjUwMy0uOTYuNjgxLTEuNjc2LjY4MS0yLjgxNWMwLTIuMDQ1LS45NzEtMy43OTktMi43MzctNC44OTRjLTEuMjQtLjc4Mi0zLjI1LTEuMDI4LTQuNjM2LS41OFptMi40MzYgMS43OTljMi43MzcuNDQ3IDQuMjIyIDIuNzM3IDMuMTUgNC44ODJjLS40MzYuODYtMS4zNTIgMS43MzItMi4yOSAyLjE3OWMtLjYzNy4yOS0uODM4LjMzNS0xLjQzLjI5Yy0xLjAyOC0uMDY3LTEuNDg2LS40OC0yLjA0NS0xLjg3N2MtLjY3LTEuNjQyLS45NS0zLjYwOC0uNjE0LTQuMjQ1Yy40MTMtLjc3MSAxLjExNy0xLjE2MiAyLjQxMy0xLjMzYy4wNjcgMCAuNDI0LjA0NS44MTYuMTAxbTkuODQyLTEuNzQzYy0zLjM0IDEuMTczLTQuODM3IDQuODgyLTMuMjczIDguMDc3Yy40MzUuODk0IDEuNDYzIDEuOTQ0IDIuMzggMi40MjVjMi4zNTYgMS4yNCA0LjkwNC44NzEgNi43OC0uOTk1YzMuMDUtMy4wMTYgMS45LTguMDc3LTIuMTc4LTkuNTA3Yy0xLjAzOS0uMzY4LTIuNjctLjM2OC0zLjcwOSAwbTMuNDE5IDEuOTc4YzEuMTg0LjM4IDIuMzY4IDEuNDg1IDIuNjM2IDIuNDhjLjE3OS42NTkuMDc4IDEuNjA5LS4yMjMgMi4yMzRjLS41NDggMS4xMjktMS45MSAyLjE0NS0zLjI1MSAyLjQxM2MtMS44MS4zNTgtMi43MzctLjg4Mi0zLjE1LTQuMTljLS4yNDctMS45OTkuMy0yLjkxNSAxLjkxLTMuMTZjLjY3LS4xMDEgMS4yNS0uMDQ2IDIuMDc4LjIyMyIvPjwvc3ZnPg==' },

    { name: 'Git & Version Control', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    {
      name: 'Android Studio',
      imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg'
    },
    {
      name: 'VS Code',
      imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg'
    },
    {
      name: 'Xcode',
      imageUrl: 'https://img.icons8.com/color/480/xcode.png'
    },
  ];

  const grid = document.querySelector('.skill-icon-grid');
  if (grid) {
    grid.innerHTML = '';
    skillsData.forEach(skill => {
      const div = document.createElement('div');
      div.className = 'skill-item flex flex-col items-center justify-center space-y-2 p-4 rounded-xl transition-transform duration-200 hover:scale-110 cursor-pointer reveal bg-slate-800/50';
      div.innerHTML = `
        <img src="${skill.imageUrl}" alt="${skill.name}" class="skill-icon w-12 h-12 object-contain">
        <span class="skill-name text-sm font-medium text-slate-100">${skill.name}</span>
      `;
      grid.appendChild(div);
    });
    observeReveal('.skill-item');
  }

  // ----------------------------
  // Chart.js horizontal bar
  // ----------------------------
  // const ctx = document.getElementById('skillsChart');
  // if (ctx) {
  //   new Chart(ctx, {
  //     type: 'bar',
  //     data: {
  //       labels: ['Flutter', 'Dart', 'Firebase', 'GetX', 'UI/UX', 'MySQL'],
  //       datasets: [{
  //         label: 'Proficiency',
  //         data: [92, 88, 78, 80, 74, 68],
  //         backgroundColor: ['rgba(20,184,166,0.3)', 'rgba(20,184,166,0.33)', 'rgba(20,184,166,0.36)', 'rgba(20,184,166,0.39)', 'rgba(20,184,166,0.42)', 'rgba(20,184,166,0.45)'],
  //         borderColor: 'rgba(20,184,166,0.95)',
  //         borderWidth: 1,
  //         borderRadius: 8,
  //         maxBarThickness: 28
  //       }]
  //     },
  //     options: {
  //       indexAxis: 'y',
  //       responsive: true,
  //       maintainAspectRatio: false,
  //       scales: {
  //         x: { max: 100, ticks: { color: '#E5E7EB' } },
  //         y: { ticks: { color: '#E5E7EB' } }
  //       },
  //       plugins: {
  //         legend: { display: false },
  //         tooltip: { callbacks: { label: (c) => `${c.dataset.label}: ${c.parsed.x}%` } }
  //       },
  //       animation: { duration: 800, easing: 'easeOutQuart' }
  //     }
  //   });
  // }

  // ----------------------------
  // Project cards
  // ----------------------------
 
   const projectsData = [
    {
      name: 'Parkview Appointment',
      image: 'https://play-lh.googleusercontent.com/kZ_pAaBr0NP8vL8A72-k-j-1xsUl10Eg6-KCKXUdT-CvvfD1WDCfZMuYT02HuCirWug=w480-h960-rw',
      description: 'Parkview Appointment is your easy-to-use solution for booking doctor appointments at Parkview Hospital. Browse available doctors, view schedules, and book your visit in just a few taps. Get instant confirmation, appointment reminders, and access to your booking history — all from one convenient app.',
      categories: ['flutter', 'Appointment', 'Hospital', 'backend'],
      techStack: ['Flutter', 'Firebase', 'Getx', 'UI', 'RestAPI', 'Database', 'Backend'],
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.appointment.parkview.parkviewappointment&hl=en',
      appStoreLink: "https://apps.apple.com/us/app/parkview-appointment/id1660447155",
      githubLink: ""
    },
    {
      name: 'NeuroCheck Pro',
      image: 'https://play-lh.googleusercontent.com/32-yGg2j-0kcqo8cSaOZYLmW4yAi1pVgNDOV8bzQeakeqyIXZTHHNV6XJOA23VUf-P6BhcYzpJpXHGaJnlXbFDo=w480-h960-rw',
      description: 'NeuroCheck Pro is a mental health assessment app designed to streamline digital psychological evaluations. The app allows clinicians and users to perform structured assessments, manage patient profiles, and review progress reports.',
      categories: ['flutter', 'Appointment', 'Assessment', 'backend'],
      techStack: ['Flutter', 'Firebase', 'Getx', 'UI', 'RestAPI', 'Database', 'Backend', 'Clean Architecture'],
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.neurocheckpro.app&hl=en',
      appStoreLink: "https://apps.apple.com/us/app/neurocheck-pro/id6753708129",
      githubLink: ""
    },
    {
      name: 'Al Hasanain',
      image: 'https://play-lh.googleusercontent.com/MuMSE0frXIeQ3gLrqRdYXueI3EVNhBUT9Om1Xn1Js_716H9qx32l10ZXzG1jIiy8ZEY=w480-h960-rw',
      description: '"Al Hasanain -School Management" is the official mobile application designed to enhance communication and provide seamless access to vital academic information for parents and students of Al Hasanain.',
      categories: ['flutter', 'School Management', 'backend'],
      techStack: ['Flutter', 'Firebase', 'Getx', 'Notification', 'UI', 'RestAPI', 'Database', 'SQL', 'Backend'],
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.alhasanain.studant.parents.app.alhasanain_app&hl=en',
      appStoreLink: "",
      githubLink: ""
    },
    {
      name: 'Task Manager Backend',
      image: 'assets/github.svg',
      description: 'This is a Node.js + Express.js backend for a Todo application with JWT-based authentication. The backend supports User Registration, Login, Forgot/Reset Password, and secure Todo CRUD operations.It uses PostgreSQL (NeonDB) as the database and follows a clean, modular architecture with proper separation of routes, controllers, services, and repositories. All protected APIs are secured using JWT Bearer Token authentication.',
      categories: ['nodejs','expressjs', 'User Registration ','todo', 'backend'],
      techStack: ['Node.js', 'Express.js', 'NeonDB', 'REST API', 'PostgreSQL'],
      githubLink: 'https://github.com/SabbirAbdullah/task_manager_backend',
      appStoreLink: "",
      playStoreLink: ""
    },

       {
      name: 'WeatherForecast',
      image: 'https://github.com/user-attachments/assets/c4d6884e-18bc-4b09-abaa-7303931efde4',
      description: 'Weather Forecast App – Built with Kotlin, Hilt, Retrofit, and Clean Architecture. Users can search any location and get up-to-date current weather information.',
      categories: ['kotlin', 'Weather Forecast', 'backend'],
      techStack: ['Kotlin', 'Hilt', 'Retrofit', 'REST API'],
      githubLink: 'https://github.com/SabbirAbdullah/weather_forecast_kotlin/',
      appStoreLink: "",
      playStoreLink: ""
    },
    {
      name: 'Smart Inventory & POS Sys',
      image: 'https://github.com/user-attachments/assets/236a3596-1277-44f8-b635-6239f007e26a',
      description: 'Developed in Flutter with Bloc , Clean MVVM architecture. Features include QR code scanning, online payments, automatic item listing, and quantity updates.',
      categories: ['flutter', 'backend', 'bloc'],
      techStack: ['Flutter', 'Bloc', 'Clean Architecture', "POS"],
      githubLink: 'https://github.com/SabbirAbdullah/smart_inventory_pos_sys',
      appStoreLink: "",
      playStoreLink: ""
    },
    {
      name: 'AI Assistant',
      image: 'https://github.com/user-attachments/assets/ed05a652-6e61-4208-9fbc-65bb1b81519b?text=Ai+Assistant',
      description: 'AI Assistant lets you chat or speak directly with a smart AI for instant help. Ask questions, get guidance, and enjoy a seamless voice or text experience — anytime, anywhere.',
      categories: ['flutter', 'Ai Assistant', 'backend'],
      techStack: ['Flutter', 'Bloc'],
      githubLink: 'https://github.com/SabbirAbdullah/AI-Assistant-App',
      appStoreLink: "",
      playStoreLink: ""
    },
    {
      name: 'E-commerce Mobile App',
      image: 'https://github.com/user-attachments/assets/2ffc83a7-0ff0-43b5-8790-69f5245106b0?text=Shopping+App',
      description: 'A full-featured e-commerce application allowing users to browse products, add to cart, and complete purchases. Includes user authentication and order history.',
      categories: ['flutter', 'ecommerce', 'uiux', 'backend'],
      techStack: ['Flutter', 'Firebase', 'Provider', 'UI'],
      githubLink: 'https://github.com/SabbirAbdullah/shopping_app',
      appStoreLink: "",
      playStoreLink: ""
    },
 
    {
      name: 'Tic Tac Toe Game',
      image: 'https://github.com/user-attachments/assets/db0a6c9f-0629-4a84-a215-46e34ea4caab?text=Tic+tac+Toe',
      description: 'An intuitive Tic Tac Toe game using GetX for state management, custom sizing class for responsive screens, modularized code, and sound null safety!',
      categories: ['flutter', 'uiux', 'game', 'tic tac toe'],
      techStack: ['Flutter', 'GetX', 'Custom Widgets'],
      githubLink: 'https://github.com/SabbirAbdullah/tic_tac_toc',
      appStoreLink: "",
      playStoreLink: ""
    }
  ];

  const projectsContainer = document.getElementById('projects-container');
  const filterButtons = document.querySelectorAll('.filter-btn');

  function renderProjects(filterCategory = 'all') {
    projectsContainer.innerHTML = '';
    const filteredProjects = projectsData.filter(project =>
      filterCategory === 'all' || project.categories.includes(filterCategory)
    );

    if (filteredProjects.length === 0) {
      projectsContainer.innerHTML = '<p class="text-center text-slate-500">No projects found for this category.</p>';
      return;
    }

    filteredProjects.forEach(project => {
      const card = document.createElement('div');
 card.className = `
  project-card 
  bg-gradient-to-br from-gray-800 via-gray-900 to-black/90 
  rounded-xl shadow-lg 
  overflow-hidden 
  flex flex-col 
  transition-transform duration-300 
  hover:scale-105 hover:shadow-2xl
`;


      // Links section
      let linksHTML = '';
      if (project.playStoreLink) {
        linksHTML += `<a href="${project.playStoreLink}" target="_blank" class="inline-flex items-center gap-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" class="h-8">
        </a>`;
      }
      if (project.appStoreLink) {
        linksHTML += `<a href="${project.appStoreLink}" target="_blank" class="inline-flex items-center gap-2">
          <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" class="h-8">
        </a>`;
      }
      if (project.githubLink) {
        linksHTML += `<a href="${project.githubLink}" target="_blank" class="inline-flex items-center gap-2 text-slate-200 hover:text-teal-400">
          <img src="assets/github.svg" alt="GitHub" class="h-6"> GitHub
        </a>`;
      }

      card.innerHTML = `
        <div class="overflow-hidden rounded-t-xl">
          <img src="${project.image}" alt="${project.name}" class="w-full h-52 object-cover transition-transform duration-500 hover:scale-110">
        </div>
        <div class="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 class="text-xl font-semibold mb-2 text-slate-100 dark:text-slate-200">${project.name}</h3>
            <p class="text-slate-300 text-sm mb-4">${project.description}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              ${project.techStack.map(t => `<span class="px-2 py-1 bg-teal-600/20 text-teal-300 rounded text-xs">${t}</span>`).join('')}
            </div>
          </div>
          <div class="flex flex-wrap items-center gap-3 mt-4">
            ${linksHTML || '<span class="text-slate-400 text-sm italic">No public link available</span>'}
          </div>
        </div>
      `;

      projectsContainer.appendChild(card);
    });
  }

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active', 'bg-teal-600', 'text-white'));
      button.classList.add('active', 'bg-teal-600', 'text-white');
      renderProjects(button.dataset.category);
    });
  });

  renderProjects('all');





  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active', 'bg-teal-600', 'text-white'));
      btn.classList.add('active', 'bg-teal-600', 'text-white');
      renderProjects(btn.dataset.category);
    });
  });



///Name Typing 
// document.addEventListener("DOMContentLoaded", () => {
//   const text = "Md Abdullah Kaisar Sabbir";
//   const target = document.getElementById("typing-name");

//   let index = 0;

//   function typeEffect() {
//     if (index < text.length) {
//       target.textContent += text.charAt(index);
//       index++;
//       setTimeout(typeEffect, 120); // typing speed
//     }
//   }

//   typeEffect();
// });



});
