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
    // Professional career start date (first job at Hiberus)
    const startDate = new Date('2013-10-01');
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
    
    // Console info for developers
    console.log('CV initialized successfully');
    console.log('Default language: English');
    console.log('Experience calculation: Active');
});