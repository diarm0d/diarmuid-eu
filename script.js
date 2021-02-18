const portfolioSections = document.querySelector('section');
const splashImage = document.getElementById('image-wrapper');
const portfolioBtn = document.getElementById('explore-portfolio');
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');

function toggleDarkLightMode(isDark) {
    isDark ? toggleIcon.children[0].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[0].classList.replace('fa-moon', 'fa-sun');
    isDark ? splashImage.classList.add('dark') :  splashImage.classList.remove('dark');
}

console.log(splashImage.style.filter);

// 
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
    portfolioSections.style.display = "block";
    window.location.hash = "portfolio-project-1";
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);
portfolioBtn.addEventListener('click', viewPortfolio);

// Check local Storage for Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMode(true);
    }
}