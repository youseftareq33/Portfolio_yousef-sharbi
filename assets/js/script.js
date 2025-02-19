document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");
    const sections = document.querySelectorAll("section[id]");
    const navBtns = document.querySelectorAll(".nav-btn");
    const indicator = document.querySelector(".active-indicator");

    // Sticky header
    window.addEventListener("scroll", function () {
        if (window.scrollY >= sections[1].offsetTop - 10) {
            header.classList.add("sticky");
        }
        else {
            header.classList.remove("sticky");
        }
    });

    // Smooth scrolling when clicking nav buttons
    navBtns.forEach(button => {
        button.addEventListener("click", function () {
            const targetId = this.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 0,
                    behavior: "smooth"
                });
            }
        });
    });

    // Function to update active link based on scroll position
    function scrollActive() {
        const scrollDown = window.scrollY;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 80;
            const sectionId = current.getAttribute("id");
            const targetBtn = document.querySelector(`.nav-btn[data-target="${sectionId}"]`);

            if (scrollDown >= sectionTop && scrollDown < sectionTop + sectionHeight) {
                navBtns.forEach(b => b.classList.remove("active-link"));
                if (targetBtn) {
                    targetBtn.classList.add("active-link");
                    moveIndicator(targetBtn);
                }
            }
        });
    }

    // Function to move indicator
    function moveIndicator(element) {
        const rect = element.getBoundingClientRect();
        const navRect = document.querySelector("nav").getBoundingClientRect();
        indicator.style.width = `${rect.width - 11}px`;
        indicator.style.left = `${rect.left - navRect.left + 6}px`;
    }

    // Attach scroll event
    window.addEventListener("scroll", scrollActive);

    // Set initial active link on page load
    scrollActive();
});


const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    delay: 200,
//     reset: true
    viewFactor: 0.2,  // Adjust visibility before animation
    beforeReveal: function (el) {
        el.style.zIndex = "1";  // Ensure it has z-index
    }
});

sr.reveal('.home, .about, .p_sector, .projects',{}); 
sr.reveal('.about_sector, .projects_sector',{delay: 400}); 
sr.reveal('.about_emoji, .skills_emoji, .p_container, projects_emoji ,.projects_container, contacts_emoji',{ interval: 200}); 
