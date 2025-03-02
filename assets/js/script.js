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


    document.querySelectorAll(".proj1").forEach(card => {
        card.addEventListener("click", function() {
            window.open('https://github.com/youseftareq33/SmartLib', '_blank');
        });
    });

    document.querySelectorAll(".proj2").forEach(card => {
        card.addEventListener("click", function() {
            window.open('https://github.com/youseftareq33/Web_1_Palestinian-Souvenirs-Online', '_blank');
        });
    });

    document.querySelectorAll(".proj3").forEach(card => {
        card.addEventListener("click", function() {
            window.open('https://github.com/youseftareq33/Flutter_Athkar-App', '_blank');
        });
    });

    document.querySelectorAll(".proj4").forEach(card => {
        card.addEventListener("click", function() {
            window.open('https://github.com/youseftareq33/AndroidStudio_Birzeit_University_Student_App', '_blank');
        });
    });

    document.querySelectorAll(".proj5").forEach(card => {
        card.addEventListener("click", function() {
            window.open('https://github.com/youseftareq33/Java_DataBase_1_SportShop', '_blank');
        });
    });
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

sr.reveal('.github-counter, .leetcode-counter', {
    afterReveal: function () {
        animateCounter("github-counter", 50, 50);
        animateCounter("leetcode-counter", 80, 30);
    }
});

function animateCounter(id, targetNumber, speed) {
    let counter = 0;
    let step = Math.ceil(targetNumber / 30); // Increase by a bigger step for speed

    let interval = setInterval(() => {
        counter += step;
        if (counter >= targetNumber) {
            counter = targetNumber; // Ensure it stops exactly at target
            clearInterval(interval);
        }
        document.getElementById(id).textContent = counter;
    }, speed / 2); // Reduce interval time for faster animation
}
