
        // DOM Element Cache Selectors
        const menuToggle = document.getElementById('menu-toggle');
        const sidebar = document.getElementById('sidebar');
        const headerTitle = document.getElementById('header-title');
        const menuItems = document.querySelectorAll('.sidebar .menu-item');
        const pageViews = document.querySelectorAll('.page-content');
        
        const searchInput = document.getElementById('dashboard-search');
        const noResults = document.getElementById('no-results');
        const userModal = document.getElementById('user-modal');
        const closeModalBtn = document.getElementById('close-modal-btn');

        /* 1. Global Navigation Routing Control (SPA Engine Selector) */
        menuItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                menuItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                
                headerTitle.textContent = item.getAttribute('data-title');
                const targetPageId = item.getAttribute('data-page');
                
                pageViews.forEach(page => {
                    page.classList.toggle('active', page.id === targetPageId);
                });
            });
        });

        /* 2. RE-USABLE DATA INITIALIZATION AND MIRROR CONTEXT CLONING ENGINES */
        // Grab the raw core dataset arrays from rows on the Home layout screen
        const originalRows = document.querySelectorAll('#home-view tbody tr');
        const paymentsTableBody = document.getElementById('payments-table-body');
        
        // Clone rows straight from Home into the Payments screen array body programmatically
        originalRows.forEach(row => {
            const clone = row.cloneNode(true);
            paymentsTableBody.appendChild(clone);
        });

        // Re-cache elements containing all generated rows inside the ecosystem framework 
        const allSystemRows = document.querySelectorAll('.master-payment-table tbody tr');

        /* 3. DYNAMIC STATUS COMPILING INTERFACES (PAYMENTS TAB ENGINE) */
        function computeStatusMetricCounters() {
            let completedCount = 0, pendingCount = 0, failedCount = 0;
            
            document.querySelectorAll('#payments-table-body tr').forEach(row => {
                const status = row.getAttribute('data-status').toLowerCase();
                if (status === 'completed') completedCount++;
                if (status === 'pending') pendingCount++;
                if (status === 'failed') failedCount++;
            });

            document.getElementById('counter-completed').textContent = completedCount;
            document.getElementById('counter-pending').textContent = pendingCount;
            document.getElementById('counter-failed').textContent = failedCount;
        }
        computeStatusMetricCounters(); // Compute initial baseline states upon load execution

        /* 4. PAYMENT STATUS DROPDOWN FILTER SELECT ROUTINE */
        const statusFilter = document.getElementById('payment-status-filter');
        const paymentsFallback = document.querySelector('.no-payments-fallback');

        statusFilter.addEventListener('change', (e) => {
            const selectedValue = e.target.value.toLowerCase();
            let visibleRowCount = 0;
            const targetedPaymentRows = document.querySelectorAll('#payments-table-body tr');

            targetedPaymentRows.forEach(row => {
                const rowStatus = row.getAttribute('data-status').toLowerCase();
                if (selectedValue === 'all' || rowStatus === selectedValue) {
                    row.style.display = '';
                    visibleRowCount++;
                } else {
                    row.style.display = 'none';
                }
            });

            paymentsFallback.style.display = visibleRowCount === 0 ? 'block' : 'none';
        });

        /* 5. USER METRIC MODAL POPUP TRIGGER FOR ALL SYSTEM INSTANCES */
        allSystemRows.forEach(row => {
            row.addEventListener('click', () => {
                document.getElementById('modal-user-name').textContent = row.getAttribute('data-name');
                document.getElementById('modal-user-email').textContent = row.getAttribute('data-email');
                document.getElementById('modal-date').textContent = row.getAttribute('data-date');
                document.getElementById('modal-amount').textContent = row.getAttribute('data-amount');
                document.getElementById('modal-status').textContent = row.getAttribute('data-status');
                document.getElementById('modal-id').textContent = row.getAttribute('data-id');

                const initials = row.getAttribute('data-name').split(' ').map(n => n[0]).join('');
                document.getElementById('modal-avatar-logo').textContent = initials;
                userModal.classList.add('active');
            });
        });

        /* 6. UNIVERSAL LIVE ENGINE TEXT-SEARCH ALGORITHM BAR */
        searchInput.addEventListener('input', (e) => {
            const queryValue = e.target.value.toLowerCase().trim();
            const activePage = document.querySelector('.page-content.active');
            
            // Limit filtration targets purely to the active screen view context
            const targetedRows = activePage.querySelectorAll('.master-payment-table tbody tr');
            let matchesFound = false;

            targetedRows.forEach(row => {
                const nameMatch = row.getAttribute('data-name').toLowerCase();
                if (nameMatch.includes(queryValue)) {
                    row.style.display = '';
                    matchesFound = true;
                } else {
                    row.style.display = 'none';
                }
            });

            // Handle displaying error fallbacks based on context screens
            if (activePage.id === 'home-view') {
                noResults.style.display = matchesFound ? 'none' : 'block';
            } else if (activePage.id === 'payments-view') {
                paymentsFallback.style.display = matchesFound ? 'none' : 'block';
            }
        });

        /* 7. SETTINGS SUB-NAV TAB INTERFACES SWAPPING ROUTINES */
        const settingTabs = document.querySelectorAll('.settings-tab-btn:not(#btn-session-logout)');
        const settingPanes = document.querySelectorAll('.settings-form-pane');

        settingTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                settingTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                const targetPaneId = tab.getAttribute('data-pane');
                settingPanes.forEach(pane => {
                    pane.classList.toggle('active', pane.id === targetPaneId);
                });
            });
        });

        /* 8. SYSTEM GLOBAL LOGOUT CONTROLLER */
        document.getElementById('btn-session-logout').addEventListener('click', () => {
            if (confirm("Are you sure you want to terminate this operational dashboard administrative session?")) {
                alert("Session terminated securely.");
                window.location.reload();
            }
        });

        // General close listener bounds
        closeModalBtn.addEventListener('click', () => userModal.classList.remove('active'));
        window.addEventListener('click', (e) => { if (e.target === userModal) userModal.classList.remove('active'); });
        menuToggle.addEventListener('click', () => sidebar.classList.toggle('collapsed'));
