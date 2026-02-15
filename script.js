/**
 * CV Language Toggle and Dynamic Content Management
 * Author: Daniel Jordan
 */

/**
 * Toggle between Spanish and English languages
 */
function toggleLanguage() {
    const body = document.body;
    const toggle = document.querySelector('.toggle-switch');
    
    body.classList.toggle('lang-english');
    toggle.classList.toggle('active');
}

/**
 * Calculate and display years of professional experience
 * Based on career start date (first job at Hiberus)
 */
function calculateYearsOfExperience() {
    // Professional career start date (first job at Hiberus - internship)
    const startDate = new Date('2013-09-01');
    const currentDate = new Date();
    
    // Calculate difference in years
    const diffInMs = currentDate - startDate;
    const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);
    
    // Round down to be conservative
    const years = Math.floor(diffInYears);
    
    // Update HTML elements
    const spanEs = document.getElementById('years-experience-es');
    const spanEn = document.getElementById('years-experience-en');
    
    if (spanEs) {
        spanEs.textContent = `Más de ${years} años`;
    }
    
    if (spanEn) {
        spanEn.textContent = `${years}+ years`;
    }
}

/**
 * Handle language toggle and PDF button visibility on scroll (mobile only)
 * Hides both elements when user scrolls down, shows when at top
 */
function handleLanguageToggleScroll() {
    const languageToggle = document.querySelector('.language-toggle');
    const pdfButton = document.querySelector('.pdf-download-btn');
    let lastScrollTop = 0;
    const scrollThreshold = 10; // Pixels from top to consider "at top"
    
    window.addEventListener('scroll', function() {
        // Only apply on mobile screens (< 768px)
        if (window.innerWidth >= 768) {
            languageToggle.classList.remove('hidden-scroll');
            if (pdfButton) pdfButton.classList.remove('hidden-scroll');
            return;
        }
        
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop <= scrollThreshold) {
            // At the top of the page - show both elements
            languageToggle.classList.remove('hidden-scroll');
            if (pdfButton) pdfButton.classList.remove('hidden-scroll');
        } else {
            // Scrolled down - hide both elements
            languageToggle.classList.add('hidden-scroll');
            if (pdfButton) pdfButton.classList.add('hidden-scroll');
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Also check on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) {
            languageToggle.classList.remove('hidden-scroll');
            if (pdfButton) pdfButton.classList.remove('hidden-scroll');
        }
    });
}

/**
 * Initialize CV functionality when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const toggle = document.querySelector('.toggle-switch');
    
    // Ensure English is default language
    body.classList.add('lang-english');
    toggle.classList.add('active');
    
    // Calculate and display years of experience
    calculateYearsOfExperience();
    
    // Initialize scroll-based language toggle visibility (mobile only)
    handleLanguageToggleScroll();
    
    // Console info for developers
    console.log('CV initialized successfully');
    console.log('Default language: English');
    console.log('Experience calculation: Active');
    console.log('Scroll-based toggle visibility: Enabled for mobile');
});