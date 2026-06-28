// CONTACT FORM

const form = document.getElementById("contact-form");

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        if (name === "" || subject === "" || message === "") {

            alert("Please fill in all fields!");

            return;

        }

        alert("Message sent successfully!");

        form.reset();

    });

}

// THEME TOGGLE

const themeButton = document.getElementById("theme-toggle");

if (themeButton) {

    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark-theme");
        themeButton.textContent = "☀️ Light Mode";

    }

    themeButton.addEventListener("click", () => {

        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {

            localStorage.setItem("theme", "dark");
            themeButton.textContent = "☀️ Light Mode";

        } else {

            localStorage.setItem("theme", "light");
            themeButton.textContent = "🌙 Dark Mode";

        }

    });

}

// MOBILE MENU

const menuButton = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if (menuButton && navbar) {

    menuButton.addEventListener("click", () => {

        navbar.classList.toggle("active");

        if (navbar.classList.contains("active")) {

            menuButton.textContent = "✖";

        } else {

            menuButton.textContent = "☰";

        }

    });

}