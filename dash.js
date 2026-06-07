

document.addEventListener("DOMContentLoaded", () => {
    
    // --- DROPDOWN ACCORDION LOGIC ---
    const dropdownBtns = document.querySelectorAll(".dropdown-btn");

    dropdownBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            const wrapper = this.parentElement;
            
            // Optional: Close other open dropdowns for a clean accordion effect
            document.querySelectorAll(".dropdown-wrapper").forEach(otherWrapper => {
                if (otherWrapper !== wrapper) {
                    otherWrapper.classList.remove("open");
                }
            });

            // Toggle active status on the selected dropdown
            wrapper.classList.toggle("open");
        });
    });

    // --- MOBILE SIDEBAR DRAWER LOGIC ---
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebar-overlay");

    function toggleMobileMenu() {
        sidebar.classList.toggle("show");
        overlay.classList.toggle("show");
    }

    // Check if element exists to avoid runtime errors on non-mobile states
    if (menuToggle && overlay) {
        menuToggle.addEventListener("click", toggleMobileMenu);
        overlay.addEventListener("click", toggleMobileMenu);
    }
});
