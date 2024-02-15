// JavaScript для плавного скроллинга к секциям
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript для выпадающего меню
const toggleBtn = document.querySelector('.toggle-btn');
const nav = document.querySelector('nav');

toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});
