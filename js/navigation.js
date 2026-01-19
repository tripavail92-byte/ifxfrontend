// IFX Trading Platform - Shared Navigation System
// Provides consistent navigation across all screens

(function() {
    'use strict';

    // Navigation routes mapping
    const routes = {
        'terminal': '../ifx_manual_terminal/code.html',
        'hub': '../ifx_copy_hub_leaderboard/code.html',
        'wallet': '../ifx_custodial_wallet/code.html',
        'stats': '../ifx_performance_dashboard/code.html',
        'settings': '../ifx_account_settings/code.html',
        'admin': '../ifx_admin_backoffice/code.html',
        'training': '../ifx_system_training_onboarding/code.html',
        'home': '../../index.html'
    };

    // Add back button to screens
    function addBackButton() {
        const headers = document.querySelectorAll('header');
        headers.forEach(header => {
            // Check if back button already exists
            if (header.querySelector('.back-to-home')) return;
            
            const backBtn = document.createElement('button');
            backBtn.className = 'back-to-home flex items-center gap-2 text-slate-400 hover:text-primary transition-colors';
            backBtn.innerHTML = `
                <span class="material-symbols-outlined">arrow_back</span>
                <span class="text-sm font-medium">Back to Home</span>
            `;
            backBtn.onclick = () => window.location.href = routes.home;
            
            // Insert at the beginning of header
            header.insertBefore(backBtn, header.firstChild);
        });
    }

    // Enhance bottom navigation with proper routing
    function enhanceBottomNav() {
        const navs = document.querySelectorAll('nav[class*="bottom"]');
        navs.forEach(nav => {
            const buttons = nav.querySelectorAll('button');
            buttons.forEach(btn => {
                const text = btn.textContent.toLowerCase().trim();
                
                // Map button text to routes
                if (text.includes('terminal') || text.includes('dashboard')) {
                    btn.onclick = () => window.location.href = routes.terminal;
                } else if (text.includes('hub') || text.includes('copy')) {
                    btn.onclick = () => window.location.href = routes.hub;
                } else if (text.includes('wallet')) {
                    btn.onclick = () => window.location.href = routes.wallet;
                } else if (text.includes('stats') || text.includes('analysis') || text.includes('monitoring')) {
                    btn.onclick = () => window.location.href = routes.stats;
                } else if (text.includes('settings') || text.includes('more')) {
                    btn.onclick = () => window.location.href = routes.settings;
                }
            });
        });
    }

    // Add smooth page transitions
    function addPageTransitions() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.3s ease-in';
        
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 50);
        });
    }

    // Initialize navigation enhancements
    function init() {
        // Only run on screen pages, not on index
        if (!window.location.pathname.includes('index.html')) {
            addBackButton();
            enhanceBottomNav();
            addPageTransitions();
        }
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
