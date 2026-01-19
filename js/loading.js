// Loading States Manager
(function() {
    'use strict';
    
    const Loading = {
        show(element, text = 'Loading...') {
            if (!element) return;
            
            const loader = document.createElement('div');
            loader.className = 'loading-overlay absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 rounded-lg';
            loader.innerHTML = `
                <div class="flex flex-col items-center gap-3">
                    <div class="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                    <span class="text-sm text-white font-medium">${text}</span>
                </div>
            `;
            
            element.style.position = 'relative';
            element.appendChild(loader);
            
            return loader;
        },
        
        hide(loader) {
            if (loader && loader.parentElement) {
                loader.remove();
            }
        },
        
        button(button, isLoading) {
            if (!button) return;
            
            if (isLoading) {
                button.disabled = true;
                button.dataset.originalText = button.innerHTML;
                button.innerHTML = `
                    <div class="flex items-center gap-2">
                        <div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Loading...</span>
                    </div>
                `;
            } else {
                button.disabled = false;
                if (button.dataset.originalText) {
                    button.innerHTML = button.dataset.originalText;
                }
            }
        }
    };
    
    // Add spinner animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
        .animate-spin {
            animation: spin 1s linear infinite;
        }
    `;
    document.head.appendChild(style);
    
    window.Loading = Loading;
})();
