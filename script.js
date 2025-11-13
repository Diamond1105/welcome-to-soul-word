// Wait for the page to load
document.addEventListener('DOMContentLoaded', () => {

    // 1. Get the buttons
    const btnEn = document.getElementById('btn-en');
    const btnHi = document.getElementById('btn-hi');
    
    // 2. Get all text elements
    const elementsEn = document.querySelectorAll('.lang-en');
    const elementsHi = document.querySelectorAll('.lang-hi');

    // 3. Add click listener for the HINDI button
    btnHi.addEventListener('click', () => {
        // Show all Hindi elements
        elementsHi.forEach(el => { el.style.display = 'block'; });
        // Hide all English elements
        elementsEn.forEach(el => { el.style.display = 'none'; });
        
        // Update button style
        btnHi.classList.add('active');
        btnEn.classList.remove('active');
    });

    // 4. Add click listener for the ENGLISH button
    btnEn.addEventListener('click', () => {
        // Hide all Hindi elements
        elementsHi.forEach(el => { el.style.display = 'none'; });
        // Show all English elements
        elementsEn.forEach(el => { el.style.display = 'block'; });
        
        // Update button style
        btnEn.classList.add('active');
        btnHi.classList.remove('active');
    });


});
// === Scroll-reveal animation ===
    const reveals = document.querySelectorAll('.reveal');
    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        reveals.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const revealPoint = 150; 
            if (elementTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // === Dynamic header background on scroll ===
    const header = document.querySelector('.main-header');
    const handleHeaderScroll = () => {
        if (window.scrollY > 50) { 
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.backgroundColor = '#ffffff';
            header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)';
        }
    };
    window.addEventListener('scroll', handleHeaderScroll);
    handleHeaderScroll();
