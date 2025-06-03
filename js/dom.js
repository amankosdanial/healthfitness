document.addEventListener("DOMContentLoaded", function () {


    const header = document.querySelector("header");
    if (header) header.style.borderBottom = "3px solid #4CAF50";

    const navLinks = document.getElementsByClassName("nav-link");
    for (let link of navLinks) link.style.padding = "8px 12px";

    const editProfileBtn = document.getElementById("editProfileBtn");
    if (editProfileBtn) editProfileBtn.style.fontWeight = "bold";

    const welcomeMsg = document.querySelector("header p");
    if (welcomeMsg) welcomeMsg.textContent = "Monitor your activity, plan workouts, and get personalized advice.";

    const fitnessImg = document.querySelector("section img");
    if (fitnessImg) fitnessImg.alt = "Мотивирующее изображение";

    const buttons = document.querySelectorAll("button");

    function playClickSound() {
        try {
            const sound = new Audio("sounds/click.mp3");
            sound.volume = 0.3; // Тише, чтобы не раздражал
            sound.play().catch(e => console.log("Браузер заблокировал звук"));
        } catch (e) {
            console.log("Ошибка загрузки звука", e);
        }
    }

    buttons.forEach(btn => {

        btn.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.02)";
            this.style.transition = "transform 0.2s";
        });

        btn.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });

        btn.addEventListener("click", function () {
            playClickSound();
        });
    });

    const appData = {
        name: "Fitness Tracker",
        version: "1.0",
        showInfo: function () {
            console.log(`${this.name} версия ${this.version}`);
        }
    };
    appData.showInfo();

    document.querySelectorAll('section img').forEach(img => {
        img.style.transition = 'opacity 0.3s ease';

        img.addEventListener('mouseenter', () => {
            img.style.opacity = '0.8';
        });

        img.addEventListener('mouseleave', () => {
            img.style.opacity = '1';
        });
    });

    document.querySelector('header')?.addEventListener('click', function () {
        this.style.transition = 'padding 0.2s ease';

        this.style.padding = '25px';

        setTimeout(() => {
            this.style.padding = '20px';
        }, 200);
    });

});