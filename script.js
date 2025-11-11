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