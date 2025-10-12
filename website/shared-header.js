// Shared header component for all pages
function loadSharedHeader() {
  const headerHTML = `
    <header class="sticky top-0 z-20 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-border-light dark:border-border-dark">
      <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <a class="flex items-center gap-3" href="index.html">
          <svg class="text-primary" fill="none" height="28" viewBox="0 0 48 48" width="28" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_6_535)">
              <path clip-rule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fill-rule="evenodd"></path>
            </g>
            <defs>
              <clipPath id="clip0_6_535">
                <rect fill="white" height="48" width="48"></rect>
              </clipPath>
            </defs>
          </svg>
          <h1 class="text-2xl font-bold">ניבה לב</h1>
        </a>
        <nav class="hidden md:flex items-center gap-8 text-base font-medium text-foreground-light/80 dark:text-foreground-dark/80">
          <div class="dropdown-container">
            <button class="flex items-center gap-1 hover:text-primary transition-colors">
              <span>ניבה</span>
              <svg class="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
            </button>
            <div class="dropdown-menu absolute bg-card-light dark:bg-card-dark shadow-soft rounded-lg mt-2 py-2 w-60 border border-border-light dark:border-border-dark right-0">
              <a class="block px-4 py-2 text-sm hover:bg-primary/10 dark:hover:bg-primary/20" href="about_niva.html">אודות</a>
              <a class="block px-4 py-2 text-sm hover:bg-primary/10 dark:hover:bg-primary/20" href="open_meeting_registration.html">הרשמה למפגש פתוח</a>
              <a class="block px-4 py-2 text-sm hover:bg-primary/10 dark:hover:bg-primary/20" href="#">הצטרפות לקבוצת העדכונים השקטה בוואטסאפ</a>
            </div>
          </div>
          <div class="dropdown-container">
            <button class="flex items-center gap-1 hover:text-primary transition-colors">
              <span>מדע ההתעשרות</span>
              <svg class="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
            </button>
            <div class="dropdown-menu absolute bg-card-light dark:bg-card-dark shadow-soft rounded-lg mt-2 py-2 w-64 border border-border-light dark:border-border-dark right-0">
              <a class="block px-4 py-2 text-sm hover:bg-primary/10 dark:hover:bg-primary/20" href="#">אודות</a>
              <a class="block px-4 py-2 text-sm hover:bg-primary/10 dark:hover:bg-primary/20" href="#">הספר לצפייה באתר/הורדה/האזנה</a>
              <a class="block px-4 py-2 text-sm hover:bg-primary/10 dark:hover:bg-primary/20" href="book_purchase.html">רכישת עותק של הספר</a>
            </div>
          </div>
          <a class="hover:text-primary transition-colors" href="online_course.html">קורס אונליין</a>
          <a class="hover:text-primary transition-colors" href="#">סרטונים</a>
          <a class="hover:text-primary transition-colors" href="#">מוזיקה</a>
          <a class="hover:text-primary transition-colors" href="#">שאלות ותשובות</a>
          <a class="hover:text-primary transition-colors" href="contact.html">צור קשר</a>
        </nav>
        <div class="flex items-center gap-4">
          <button class="md:hidden p-2 rounded-full hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16M4 12h16m-7 6h7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
          </button>
        </div>
      </div>
    </header>
  `;
  
  return headerHTML;
}

// Load the header when the page loads
document.addEventListener('DOMContentLoaded', function() {
  const headerContainer = document.getElementById('shared-header');
  if (headerContainer) {
    headerContainer.innerHTML = loadSharedHeader();
  }
});
