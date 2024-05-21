document.addEventListener("DOMContentLoaded", function() {
    const profilePhoto = document.getElementById("profilePhoto");
    const typewriter = document.getElementById("typewriter");

    profilePhoto.addEventListener("click", function() {
        typewriterEffect("I design antibody", typewriter);
    });

    function typewriterEffect(text, element) {
        element.textContent = "";
        let i = 0;
        (function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, 100);
            }
        })();
    }
});
