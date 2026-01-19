// Toast Notification System
(function() {
    'use strict';
    
    const Toast = {
        container: null,
        
        init() {
            if (!this.container) {
                this.container = document.createElement('div');
                this.container.id = 'toast-container';
                this.container.className = 'fixed top-4 right-4 z-[9999] flex flex-col gap-2 pointer-events-none';
                document.body.appendChild(this.container);
            }
        },
        
        show(message, type = 'success', duration = 3000) {
            this.init();
            
            const toast = document.createElement('div');
            const bgColor = type === 'success' ? 'bg-success/90' : type === 'error' ? 'bg-danger/90' : 'bg-primary/90';
            const icon = type === 'success' ? 'check_circle' : type === 'error' ? 'error' : 'info';
            
            toast.className = `${bgColor} text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 min-w-[280px] max-w-md pointer-events-auto animate-slide-in`;
            toast.innerHTML = `
                <span class="material-symbols-outlined">${icon}</span>
                <span class="flex-1 text-sm font-medium">${message}</span>
                <button class="text-white/80 hover:text-white" onclick="this.parentElement.remove()">
                    <span class="material-symbols-outlined text-lg">close</span>
                </button>
            `;
            
            this.container.appendChild(toast);
            
            setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transform = 'translateX(100%)';
                setTimeout(() => toast.remove(), 300);
            }, duration);
        },
        
        success(message, duration) {
            this.show(message, 'success', duration);
        },
        
        error(message, duration) {
            this.show(message, 'error', duration);
        },
        
        info(message, duration) {
            this.show(message, 'info', duration);
        }
    };
    
    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slide-in {
            from {
                opacity: 0;
                transform: translateX(100%);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        .animate-slide-in {
            animation: slide-in 0.3s ease-out;
        }
    `;
    document.head.appendChild(style);
    
    // Make Toast globally available
    window.Toast = Toast;
})();
