window.onload = function () {
    const targets = document.querySelectorAll('.target');
    const b_menu_btn = document.querySelector('.b-menu-btn');
    const b_menu = document.querySelector('.b-menu')
    var open = false

    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
    }, {
    threshold: 0.2  // Trigger when 20% of the element is visible
    });

    targets.forEach(target => observer.observe(target));

    b_menu_btn.addEventListener('click',() => {
        if (!open) {
            b_menu.style.display = "block"
            open = true
        }else {
            b_menu.style.display = "none"
            open = false
        }
    })

    console.log("script.js is working")
}