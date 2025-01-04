// Dark and light mode theme switch
const button = document.getElementById("theme-toggle");
const root = document.documentElement;

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light-mode") {
    root.classList.add("light-mode");
}

button.addEventListener("click", () => {
    if (root.classList.contains("light-mode")) {
        root.classList.remove("light-mode");
        root.classList.add("dark-mode");
        localStorage.setItem("theme", "dark-mode");
    } else {
        root.classList.remove("dark-mode");
        root.classList.add("light-mode");
        localStorage.setItem("theme", "light-mode");
    }
});

// Checks for what section the user is in
const sectionMap = {
    "home-section": "home-button",
    "about-section": "about-button",
    "skills-section": "skills-button",
    "projects-section": "projects-button",
    "contact-section": "contact-button",
    "footer-section": "",
};

const navLinks = document.querySelectorAll('nav a');

function updateActiveClass(activeId) {
    navLinks.forEach(link => link.classList.remove('active'));

    const activeLink = document.getElementById(activeId);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                const activeSection = entry.target.id;
                const activeLinkId = sectionMap[activeSection];
                updateActiveClass(activeLinkId);

                if (activeSection === "about-section" || activeSection === "projects-section" || activeSection === "footer-section") {
                    root.classList.remove("dark-mode");
                    root.classList.add("light-mode");
                    localStorage.setItem("theme", "light-mode");
                } else {
                    root.classList.remove("light-mode");
                    root.classList.add("dark-mode");
                    localStorage.setItem("theme", "dark-mode");
                }
            }
        });
    },
    {
        threshold: 0.5,
    }
);

Object.keys(sectionMap).forEach(sectionId => {
    const section = document.getElementById(sectionId);
    if (section) {
        observer.observe(section);
    }
});

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.setAttribute("class", "header-scrolled");
    } else {
        header.setAttribute("class", "header");
    }
});