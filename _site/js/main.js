$(document).ready(function () {
    setTimeout(function () {
        $(".nav-trigger").click();
    }, 300);

    $(".back-to-top").click(function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    $('#clients-slider').on('click', function () {
        $(this).data('sliderPro').nextSlide();
    });

    document.querySelectorAll('.has-dropdown').forEach(item => {
        const dropdown = item.querySelector('.dropdown');

        item.addEventListener('mouseenter', () => {
            // reset eerst
            dropdown.style.left = '';
            dropdown.style.right = '';

            const rect = dropdown.getBoundingClientRect();
            const viewportWidth = window.innerWidth;

            // overflow rechts
            if (rect.right > viewportWidth - 10) {
                const overflowRight = rect.right - viewportWidth + 10;

                dropdown.style.left = `calc(0px - ${overflowRight}px)`;
            }

            // overflow links (edge case)
            if (rect.left < 10) {
                const overflowLeft = 10 - rect.left;

                dropdown.style.left = `${overflowLeft}px`;
            }
        });
    });

    $(".news-item").click(function(){
        $(".news-item").removeAttr("open");

        var el = $(this);

        var parent;
        if(el.hasClass(".news-item")){
            parent = el;
        }else{
            $(this).closest(".news-item");;
        }

        parent.attr("open", "true");
    });
});