window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    let header_bg = document.getElementById('masthead');
    header_bg.style.backgroundImage = 'url("images/head0.webp")';

    function changeImage(i) {   
        var BackgroundImg=[
            "images/head0.webp",
            "images/head1.webp",
            "images/head2.webp",
            "images/head3.webp",
            "images/head4.webp",
            "images/head5.webp",
            "images/head6.webp",
            "images/head7.webp",
            "images/head8.webp",
            "images/head9.webp",
            "images/head10.webp",
        ];
        var i = Math.floor((Math.random() * 11));
        header_bg.style.backgroundImage = 'url("' + BackgroundImg[i] + '")';
    }

    window.setInterval(changeImage, 25000);

});
