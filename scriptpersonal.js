// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Scroll to top button features
window.addEventListener('scroll', function () {
    let button = document.getElementById('scroll-to-top');
    if (window.scrollY > 500) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
});
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries =>
{
    entries.forEach(entry =>
    {
        if (entry.isIntersecting)
        {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
});

sections.forEach(section =>
{
    section.style.opacity = 0;
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.6s ease";
    observer.observe(section);
});

