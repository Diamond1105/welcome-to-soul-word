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
    // (Line 81 waala code)
    const greetingElement = document.getElementById("greeting-text");
    
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

    // === Back to Top Button Logic ===
    const backToTopButton = document.getElementById('back-to-top');
    
    // Sirf tabhi chalao agar '#back-to-top' HTML mein hai
    if (backToTopButton) {
        // (Aapka back-to-top ka jo bhi code hai woh yahaan daal dijiye)
        // Example ke liye:
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });
    }
    
    // ... (Aapka bacha hua code jaise handleScroll() etc. bhi YAHIN AAYEGA)
    // const handleScroll = () => { ... };
    // window.addEventListener('scroll', handleScroll);
    // handleScroll();

}); // <-- Yahaan 'DOMContentLoaded' wrapper band hota hai
