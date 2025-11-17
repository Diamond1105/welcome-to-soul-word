// YEH SABSE ZAROORI LINE HAI
// Iska matlab hai: "Browser, pehle poora HTML load kar lo, fir yeh function chalana"
document.addEventListener('DOMContentLoaded', function() {
    // === Dynamic header background on scroll ===
    const header = document.querySelector('.main-header');
    
    // Sirf tabhi chalao agar '.main-header' HTML mein hai
    if (header) {
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
        handleHeaderScroll(); // Pehli baar load hone par bhi check karo
    }

    // === Good Morning/Evening Logic ===
    // === Language Toggle Logic ===
const englishBtn=document.getElementById('btn-en');
const hindiBtn=document.getElementById('btn-hi');
const englishElements=document.querySelectorAll('.lang-en');
const hindiElements=document.querySelectorAll('.lang-hi');

function setLanguage(lang) {
    // 1. Langage ko loacal storage me save karo
    localStorage.setItem('soul WorldLang',lang);
    
    if (lang === 'hi') {
        englishElements.forEach(el => el.style.display = 'none');
        hindiElements.forEach(el => el.style.display = 'block');
        englishBtn.classList.remove('active');
        hindiBtn.classList.add('active');
    } else { // Default English
        englishElements.forEach(el => el.style.display = 'block');
        hindiElements.forEach(el => el.style.display = 'none');
        englishBtn.classList.add('active');
        hindiBtn.classList.remove('active');
    }
}
// Button par click hone pae language save hogi(yeh code theek hai)
englishBtn.addEventListener('click', () => setLanguage('en'));
hindiBtn.addEventListener('click', () => setLanguage('hi'));

// Pehli baar load hone par English set karo
    //===LANGUAGE PREWFERENCE LOAD KAREIN===
    const savedLang=LocalStorage.getItem('soulWorldLang');
    if (savedLang){
        setLanguage(savedLang); // Agar koi saved language hai, toh use set karo
    }else{
        setLanguage('en'); // Agar kuch save nahi hai, toh default English set karo
    }
    // (Line 81 waala code)
    const greetingElement = document.getElementById("dynamic-greeting");
    
    // Sirf tabhi chalao agar '#greeting-text' HTML mein hai
    if (greetingElement) {
        const today = new Date();
        const hour = today.getHours();
        let message;

        if (hour < 12) {
            message = "Good morning";
        } else if (hour < 18) {
            message = "Good afternoon";
        } else {
            // Abhi (shaam ke 7 baje) yeh 'Good evening' dikhayega
            message = "Good evening";
        }
        greetingElement.innerHTML = message;
    }

   // === BACK TO TOP BUTTON LOGIC (FINAL WORKING VERSION) ===
const backToTopButton = document.getElementById('back-to-top');

// Sirf tabhi chalao agar button HTML mein maujood hai
if (backToTopButton) {

    // 1. Button ko scroll hone par dikhana aur chhipana
    window.addEventListener('scroll', () => {
        if (window.scrollY > 350) { 
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    // 2. Click hone par upar scroll karna
    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault(); 
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    });
    //===Language Preference Load Karein===
    const savedLang=loaclstorage.grtItem('soulWorldLang');

    // Agar koi saved language hai, to use set kro
    if (savedLang){
        setLanguage(savedLang);
    }else{
        //Agar luch save nahi hai, toh default English set karo
        setLanguage('en');
    }
});

// -------------------------------------------------------------------
// Note: Iske neeche agar koi aur code nahi hai, toh file sahi se band honi chahiye.

} // <--- Yahaan 'if (backToTopButton)' check band hua.

}); // <--- Yahaan 'document.addEventListener' (File ka ant) band hua.










