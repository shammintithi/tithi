// ================================
// SMOOTH SCROLL TO SECTION
// ================================
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // Close mobile menu if open
    document.querySelector(".nav-links").classList.remove("active");
}

// ================================
// MOBILE MENU TOGGLE
// ================================
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

// ================================
// NAVBAR SCROLL EFFECT
// ================================
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// ================================
// NAVBAR LINKS STAGGERED ANIMATION ON PAGE LOAD
// ================================
window.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll(".nav-links li");
    navItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add("show");
        }, index * 200); // stagger each link by 200ms
    });
});

// ================================
// SECTION FADE-IN ON SCROLL
// ================================
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".fade-in, .section-text").forEach(section => {
    sectionObserver.observe(section);
});

// ================================
// SKILLS PROGRESS BAR ANIMATION
// ================================
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll(".progress-fill");
            bars.forEach(bar => {
                const width = bar.parentElement.parentElement.getAttribute("data-width");
                bar.style.width = width; // Animate bar width
            });
            // Optional: unobserve after animating once
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.4 });

// Observe the whole skills section
const skillsSection = document.querySelector(".skills");
if (skillsSection) skillObserver.observe(skillsSection);

// ================================
// OPTIONAL: PROJECT CARD HOVER EFFECTS
// ================================
// Already handled via CSS (.animate-card), no JS needed
