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
    updatePdfDownloadLink();
}

/**
 * Update the pretty PDF download link based on the active language
 */
function updatePdfDownloadLink() {
    const link = document.getElementById('pdf-download-btn');
    if (!link) return;
    const lang = document.body.classList.contains('lang-english') ? 'EN' : 'ES';
    const filename = 'DanielJordan-' + lang + '.pdf';
    link.href = filename;
    link.download = filename;
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
        spanEs.textContent = `más de ${years} años`;
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
    const pdfButton = document.querySelector('.pdf-download-btn:not(.pdf-download-btn--ats)');
    const atsButton = document.getElementById('ats-download-btn');
    let lastScrollTop = 0;
    const scrollThreshold = 10; // Pixels from top to consider "at top"
    
    window.addEventListener('scroll', function() {
        // Only apply on mobile screens (< 768px)
        if (window.innerWidth >= 768) {
            languageToggle.classList.remove('hidden-scroll');
            if (pdfButton) pdfButton.classList.remove('hidden-scroll');
            if (atsButton) atsButton.classList.remove('hidden-scroll');
            return;
        }
        
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop <= scrollThreshold) {
            // At the top of the page - show both elements
            languageToggle.classList.remove('hidden-scroll');
            if (pdfButton) pdfButton.classList.remove('hidden-scroll');
            if (atsButton) atsButton.classList.remove('hidden-scroll');
        } else {
            // Scrolled down - hide both elements
            languageToggle.classList.add('hidden-scroll');
            if (pdfButton) pdfButton.classList.add('hidden-scroll');
            if (atsButton) atsButton.classList.add('hidden-scroll');
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Also check on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) {
            languageToggle.classList.remove('hidden-scroll');
            if (pdfButton) pdfButton.classList.remove('hidden-scroll');
            if (atsButton) atsButton.classList.remove('hidden-scroll');
        }
    });
}

/**
 * ATS Print Mode - Activate ATS-friendly print layout
 * Swaps title for filename hint, adds body class, triggers print
 */
let _originalTitle = '';
let _atsPrintCleanupTimer = null;

function activateAtsPrint() {
    const isEnglish = document.body.classList.contains('lang-english');
    const lang = isEnglish ? 'EN' : 'ES';

    // Store original title and set ATS filename hint.
    // Format `DanielJordan-ATS-<LANG>` distinguishes ATS exports from pretty PDFs.
    _originalTitle = document.title;
    document.title = 'DanielJordan-ATS-' + lang;

    // Activate ATS print mode
    document.body.classList.add('ats-print');

    // Safety fallback: restore after 60s if afterprint never fires
    _atsPrintCleanupTimer = setTimeout(restoreAfterAtsPrint, 60000);

    window.print();
}

function restoreAfterAtsPrint() {
    if (!document.body.classList.contains('ats-print')) return;
    document.body.classList.remove('ats-print');
    if (_originalTitle) {
        document.title = _originalTitle;
        _originalTitle = '';
    }
    if (_atsPrintCleanupTimer) {
        clearTimeout(_atsPrintCleanupTimer);
        _atsPrintCleanupTimer = null;
    }
}

// Restore after print dialog closes (save or cancel)
window.addEventListener('afterprint', restoreAfterAtsPrint);

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
    
    // Set initial PDF download link for default language
    updatePdfDownloadLink();
    
    // Wire ATS print button
    const atsBtn = document.getElementById('ats-download-btn');
    if (atsBtn) {
        atsBtn.addEventListener('click', activateAtsPrint);
    }
    
    // Console info for developers
    console.log('CV initialized successfully');
    console.log('Default language: English');
    console.log('Experience calculation: Active');
    console.log('Scroll-based toggle visibility: Enabled for mobile');
});