document.addEventListener('DOMContentLoaded', () => {
    const serviceContents = document.querySelectorAll('.website');
    const checkScroll = () => {
        serviceContents.forEach(content => {
            const rect = content.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const isVisible = rect.top <= viewportHeight && rect.bottom >= 0;

            if (isVisible) {
                content.classList.add('visible');
            } 
        });
    };

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial check
});

//foronly animation of banner text

document.addEventListener('DOMContentLoaded', () => {
    const serviceContents = document.querySelectorAll('.animation_for_hometext');
    const checkScroll = () => {
        serviceContents.forEach(content => {
            const rect = content.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const isVisible = rect.top <= viewportHeight && rect.bottom >= 0;

            if (isVisible) {
                content.classList.add('visible');
            } 
        });
    };

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial check
});

//for shopnpw buttom
document.addEventListener('DOMContentLoaded', () => {
    const serviceContents = document.querySelectorAll('.shopnow_btn');
    const checkScroll = () => {
        serviceContents.forEach(content => {
            const rect = content.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const isVisible = rect.top <= viewportHeight && rect.bottom >= 0;

            if (isVisible) {
                content.classList.add('visible');
            } 
        });
    };

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial check
});

