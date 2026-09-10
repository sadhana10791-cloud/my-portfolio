```javascript
/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const navbar = document.querySelector(".navbar");
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelectorAll(".nav-links a");


menuButton.addEventListener("click", () => {

    navbar.classList.toggle("menu-open");

});


/* Close mobile menu after clicking a link */

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navbar.classList.remove("menu-open");

    });

});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections = document.querySelectorAll("section[id]");


const updateActiveLink = () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 180;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

};


window.addEventListener(
    "scroll",
    updateActiveLink
);


updateActiveLink();


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements = document.querySelectorAll(
    ".bento-card, .skill-card, .education-card, .project-card, .contact-box"
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

});


const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =====================================================
   MOUSE PARALLAX FOR HERO CODE WINDOW
===================================================== */

const heroVisual =
    document.querySelector(".hero-visual");

const codeWindow =
    document.querySelector(".code-window");


if (heroVisual && codeWindow) {

    heroVisual.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                heroVisual.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;


            const moveX =
                (x / rect.width - 0.5) * 10;

            const moveY =
                (y / rect.height - 0.5) * 10;


            codeWindow.style.transform =
                `translate(${moveX}px, ${moveY}px)`;

        }
    );


    heroVisual.addEventListener(
        "mouseleave",
        () => {

            codeWindow.style.transform =
                "translate(0, 0)";

        }
    );

}


/* =====================================================
   SKILL BAR ANIMATION
===================================================== */

const skillBars =
    document.querySelectorAll(".skill-bar span");


const skillObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const bar = entry.target;

                const targetWidth =
                    bar.style.width;

                bar.style.width = "0";

                setTimeout(() => {

                    bar.style.transition =
                        "width 1.2s cubic-bezier(.22,1,.36,1)";

                    bar.style.width =
                        targetWidth;

                }, 150);

                skillObserver.unobserve(bar);

            }

        });

    },

    {
        threshold: 0.5
    }

);


skillBars.forEach((bar) => {

    skillObserver.observe(bar);

});


/* =====================================================
   BUTTON RIPPLE
===================================================== */

const buttons =
    document.querySelectorAll(
        ".primary-button, .secondary-button, .nav-button"
    );


buttons.forEach((button) => {

    button.addEventListener(
        "click",
        () => {

            button.animate(
                [
                    {
                        transform: "scale(1)"
                    },

                    {
                        transform: "scale(0.97)"
                    },

                    {
                        transform: "scale(1)"
                    }
                ],
                {
                    duration: 180
                }
            );

        }
    );

});


/* =====================================================
   CURRENT YEAR
===================================================== */

const yearText =
    document.querySelector(".footer-bottom span");

if (yearText) {

    yearText.textContent =
        `© ${new Date().getFullYear()} Sadhana`;

}
```
