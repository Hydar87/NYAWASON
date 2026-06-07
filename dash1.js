document.addEventListener("DOMContentLoaded", () => {
    
    const sidebar = document.getElementById("sidebar");
    const pinToggle = document.getElementById("sidebar-pin-toggle");      /* Sidebar Header Button */
    const mobileMenuToggle = document.getElementById("menu-toggle");      /* Top Nav Header Bar Button */
    const overlay = document.getElementById("sidebar-overlay");
    const dropdownBtns = document.querySelectorAll(".dropdown-btn");
    const subLinks = document.querySelectorAll(".dropdown-container a");

    // --- SIDEBAR CYCLE FUNCTION ---
    function toggleSidebarState() {
        const currentState = sidebar.getAttribute("data-state");
        if (currentState === "full") {
            sidebar.setAttribute("data-state", "mini");
            // Collapse any active accordions when minimizing
            document.querySelectorAll(".dropdown-wrapper").forEach(w => w.classList.remove("open"));
        } else {
            sidebar.setAttribute("data-state", "full");
        }
    }

    // Attach click events to the header toggle buttons
    if (pinToggle) {
        pinToggle.addEventListener("click", toggleSidebarState);
    }

    // --- MOBILE SCREEN DRAWER DISPLAYS ---
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener("click", () => {
            // Check if open. If closed, initialize layout display context state
            const isOpen = sidebar.classList.contains("mobile-show");
            if (!isOpen) {
                sidebar.setAttribute("data-state", "full"); // Start fully opened on display call
                sidebar.classList.add("mobile-show");
                overlay.classList.add("show");
            } else {
                // If clicked again while open, check state to decide whether to minimize or close
                if (sidebar.getAttribute("data-state") === "full") {
                    sidebar.setAttribute("data-state", "mini");
                } else {
                    closeMobileSidebar();
                }
            }
        });
    }

    function closeMobileSidebar() {
        sidebar.classList.remove("mobile-show");
        overlay.classList.remove("show");
        // Reset state after animation completes
        setTimeout(() => { sidebar.setAttribute("data-state", "full"); }, 300);
    }

    if (overlay) {
        overlay.addEventListener("click", closeMobileSidebar);
    }

    // --- ACCORDION LIST TOGGLE ACTION ---
    dropdownBtns.forEach(btn => {
        btn.addEventListener("click", function(e) {
            // Prevent accordions from expanding downwards if the sidebar is in icon-only mode
            if (sidebar.getAttribute("data-state") === "mini") return;

            const wrapper = this.parentElement;
            
            document.querySelectorAll(".dropdown-wrapper").forEach(otherWrapper => {
                if (otherWrapper !== wrapper) {
                    otherWrapper.classList.remove("open");
                }
            });

            wrapper.classList.toggle("open");
        });
    });

    // --- FLOATING POPUP NAVIGATION SELECTOR CLOSURE ---
    subLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (sidebar.getAttribute("data-state") === "mini") {
                const container = link.parentElement;
                container.style.display = "none";
                setTimeout(() => { 
                    container.style.display = ""; 
                    // On mobile phones, hide the sidebar completely after making a selection
                    if (window.innerWidth <= 992) { closeMobileSidebar(); }
                }, 100);
            } else if (window.innerWidth <= 992) {
                // Close sidebar after selecting a link in full mode on mobile devices
                closeMobileSidebar();
            }
        });
    });
});