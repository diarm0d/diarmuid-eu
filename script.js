const portfolioHome =document.getElementById('portfolio-home');
const portfolioSections = document.querySelectorAll('.portfolio-projects');
const emailInput = document.getElementById('email');
const splashImage = document.getElementById('image-wrapper');
const portfolioBtn = document.getElementById('explore-portfolio');
const contactBtn = document.getElementById('contact-button');
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const backupBtn = document.getElementById('back-up-button');


function toggleDarkLightMode(isDark) {
    isDark ? toggleIcon.children[0].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[0].classList.replace('fa-moon', 'fa-sun');
    isDark ? splashImage.classList.add('dark') :  splashImage.classList.remove('dark');
}

// Swtich Theme
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode(true);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode(false);
    }
}

function viewPortfolio() {
    for (i = 0; i < portfolioSections.length; i++) {
        var projectSelect = portfolioSections[i];
        projectSelect.classList.remove('portfolio-display');
    }
    window.location.hash = "portfolio-project-1";
    portfolioHome.classList.add('portfolio-display');
}

function exitPortfolio() {
    portfolioHome.classList.remove('portfolio-display');
    window.location.hash = "portfolio-home";
    for (i = 0; i < portfolioSections.length; i++) {
        var projectSelect = portfolioSections[i];
        projectSelect.classList.add('portfolio-display');   
    }
}


// Copy email address
function copy() {
    var copyText = emailInput.value;
    copyToClipboard(copyText);
    contactBtn.textContent = 'Copied Email';
  }

  const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);
portfolioBtn.addEventListener('click', viewPortfolio);
backupBtn.addEventListener('click', exitPortfolio);
contactBtn.addEventListener('click', copy);

// Check local Storage for Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMode(true);
    }
}