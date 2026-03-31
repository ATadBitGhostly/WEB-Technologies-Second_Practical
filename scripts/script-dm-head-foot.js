// Didn't use getElementbyClassName cause well it would select all elements with navbar, and I would have to write [0] at the end.
// Used querySelector cause it can find any CSS Selector and always returns the first element.
const navbar = document.querySelector('.navbar')

window.addEventListener('scroll', function() {
    if (this.window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
})

const date = new Date();
document.getElementById('dynamicDate').innerHTML = date.getFullYear();


const footer = document.querySelector('footer');

footer.addEventListener('mouseenter', function() {
    footer.classList.add('hoverEffect');
    // console.log('YOU SHALL ENTER!');
})

footer.addEventListener('mouseleave', function() {
    footer.classList.remove('hoverEffect');
    // console.log('YOU SHALL LEAVE!');
})


const btn = document.getElementById('themeToggler');
const darkIcon = document.getElementById('dark-mode-icon');

function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        darkIcon.classList.remove('bi-moon-stars');
        darkIcon.classList.add('bi-sun');
    } else {
        document.body.classList.remove('dark-mode');
        darkIcon.classList.add('bi-moon-stars');
        darkIcon.classList.remove('bi-sun');
    }
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    applyTheme(savedTheme);
} else {
    // Default to light mode
    applyTheme('light');
}

btn.addEventListener('click', function() {
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    const newTheme = currentTheme == 'dark' ? 'light' : 'dark';
    
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
});

