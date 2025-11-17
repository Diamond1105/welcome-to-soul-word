// YEH SABSE ZAROORI LINE HAI
// Iska matlab hai: "Browser, pehle poora HTML load kar lo, fir yeh function chalana"
document.addEventListener('DOMContentLoaded', function() {

    // --- 1. ELEMENT AND VARIABLE DEFINITIONS (Saare elements ek jagah) ---
    const header = document.querySelector('.main-header');
    const greetingElement = document.getElementById("dynamic-greeting"); 
    const backToTopButton = document.getElementById('back-to-top');

    const englishBtn = document.getElementById('btn-en');
    const hindiBtn = document.getElementById('btn-hi');
    const englishElements = document.querySelectorAll('.lang-en');
    const hindiElements = document.querySelectorAll('.lang-hi');
// [YAHAN PASTE KAREIN -1]
    const themeToggle=document.getElementById('theme-toggle');
    const body=document.body;//Body tag ko Target karne ke liye
    // ---------------------------
    
    // --- 2. FUNCTION DEFINITIONS ---
    
    // LANGUAGE FUNCTION (Uses variables defined above)
    function setLanguage(lang) {
        localStorage.setItem('soulWorldLang', lang); 
        
        if (lang === 'hi') {
            englishElements.forEach(el => el.style.display = 'none');
            hindiElements.forEach(el => el.style.display = 'block');
            englishBtn.classList.remove('active');
            hindiBtn.classList.add('active');
        } else { // 'en'
            englishElements.forEach(el => el.style.display = 'block');
            hindiElements.forEach(el => el.style.display = 'none');
            englishBtn.classList.add('active');
            hindiBtn.classList.remove('active');
        }
    }
    // DARK MODE FUNCTION
    function toggleTheme() {
        body.classList.toggle('dark-theme');
        //Body par class lagana
        const is DarkMode =bpdy.classList.contains(;dark-theme');
            localstorage.setItem('theme', is DarkMode ? 'dark' :'light'); 
        //preference save karna
    }
    //------------------------------
    
    // HEADER FUNCTION
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
        handleHeaderScroll(); 
    }

    // --- 3. ON-LOAD LOGIC ---

    // DYNAMIC GREETING
    if (greetingElement) {
        const today = new Date();
        const hour = today.getHours();
        let message;

        if (hour < 12) {
            message = "Good morning";
        } else if (hour < 18) {
            message = "Good afternoon";
        } else {
            message = "Good evening";
        }
        greetingElement.innerHTML = message;
    }

    // BACK TO TOP LOGIC
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 350) { backToTopButton.classList.add('show'); } 
            else { backToTopButton.classList.remove('show'); }
        });

        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault(); 
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        backToTopButton.style.display = 'none'; // Initial hide
    }

    // --- 4. EVENT LISTENERS ---

    // LANGUAGE BUTTON LISTENERS
    englishBtn.addEventListener('click', () => setLanguage('en'));
    hindiBtn.addEventListener('click', () => setLanguage('hi'));

    // --- 5. LANGUAGE LOADER (Final State Setter - Sabse Ant Mein Chalta Hai) ---

    // LANGUAGE PREFERENCE LOAD & INITIAL SETTING
    const savedLang = localStorage.getItem('soulWorldLang');
    if (savedLang) {
        setLanguage(savedLang); // Use saved language
    } else {
        setLanguage('en'); // Use default English
    }
    // DARK MODE BUTTON LISTENER
    themeToggle.addEventListener('click',toggleTheme);
    // DARK MODE LOADER(page load hone par check karna)
    const savedTheme+loacalstorage.getItem('theme');
    if(SavedTheme=== 'dark'){
        body.classList.add('dark-Theme');
    } else if (!savedTheme) {
        // Agar koi preference nahi hai, toh system preference check karein (optional)
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches) {
            body.classList.add('dark-theme');
        }
    }
  }); // <--- Final Closure

