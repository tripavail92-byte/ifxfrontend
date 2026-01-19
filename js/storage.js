// LocalStorage Utility for User Preferences
(function() {
    'use strict';
    
    const Storage = {
        prefix: 'ifx_',
        
        set(key, value) {
            try {
                localStorage.setItem(this.prefix + key, JSON.stringify(value));
                return true;
            } catch (e) {
                console.warn('LocalStorage not available:', e);
                return false;
            }
        },
        
        get(key, defaultValue = null) {
            try {
                const item = localStorage.getItem(this.prefix + key);
                return item ? JSON.parse(item) : defaultValue;
            } catch (e) {
                console.warn('LocalStorage read error:', e);
                return defaultValue;
            }
        },
        
        remove(key) {
            try {
                localStorage.removeItem(this.prefix + key);
                return true;
            } catch (e) {
                return false;
            }
        },
        
        clear() {
            try {
                Object.keys(localStorage).forEach(key => {
                    if (key.startsWith(this.prefix)) {
                        localStorage.removeItem(key);
                    }
                });
                return true;
            } catch (e) {
                return false;
            }
        }
    };
    
    window.Storage = Storage;
})();
