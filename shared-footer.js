// Shared footer component for all pages
function createSharedFooter() {
    const footer = document.createElement('footer');
    footer.className = 'bg-background-light dark:bg-background-dark border-t border-stone-200 dark:border-stone-800';
    
    footer.innerHTML = `
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div class="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
                <p class="text-sm text-stone-500 dark:text-stone-400">© 2024 ניבה לב. כל הזכויות שמורות.</p>
                <div class="flex space-x-6">
                    <a class="text-sm text-stone-500 dark:text-stone-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">תנאי שירות</a>
                    <a class="text-sm text-stone-500 dark:text-stone-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">מדיניות פרטיות</a>
                    <a class="text-sm text-stone-500 dark:text-stone-400 hover:text-primary dark:hover:text-primary transition-colors" href="#">צור קשר</a>
                </div>
            </div>
        </div>
    `;
    
    return footer;
}

// Function to add footer to a page
function addSharedFooter(containerId = 'shared-footer') {
    const container = document.getElementById(containerId);
    if (container) {
        container.appendChild(createSharedFooter());
    } else {
        console.warn(`Container with id '${containerId}' not found`);
    }
}

// Auto-add footer when DOM is loaded (if container exists)
document.addEventListener('DOMContentLoaded', function() {
    // Only add footer if there's a container for it
    const footerContainer = document.getElementById('shared-footer');
    if (footerContainer) {
        addSharedFooter();
    }
});
