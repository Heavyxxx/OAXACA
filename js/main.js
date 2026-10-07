document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".nav-toggle");
    const navigation = document.querySelector("#site-navigation");
    const inquiryForm = document.querySelector("#contacto");
    const formStatus = document.querySelector(".form-status");

    if (menuToggle && navigation) {
        const closeMenu = () => {
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menú");
            navigation.classList.remove("is-open");
        };

        menuToggle.addEventListener("click", () => {
            const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
            menuToggle.setAttribute("aria-expanded", String(!isExpanded));
            menuToggle.setAttribute("aria-label", isExpanded ? "Abrir menú" : "Cerrar menú");
            navigation.classList.toggle("is-open", !isExpanded);
        });

        navigation.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", closeMenu);
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                closeMenu();
            }
        });
    }

    if (inquiryForm && formStatus) {
        inquiryForm.addEventListener("submit", (event) => {
            event.preventDefault();
            formStatus.textContent = "Este prototipo no envía ni almacena solicitudes. Integra un servicio de concierge para habilitar el contacto.";
        });
    }
});