(function($) {

    $(".form-control").focus(function() {
        $(this).parent().addClass("label-float");
    }).blur(function() {
        var inputValue = $(this).val();
        if (inputValue.length == 0) {
            $(this).parent().removeClass("label-float");
        }
    });
    // scroll body to 0px on click
    $('.cyber-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        unslick: true,
        responsive: [{
            breakpoint: 767,
            settings: "unslick"
        }]
    });
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $("a.show").addClass("show-me");
        } else {
            $("a.show").removeClass("show-me");
        }

    });
    // scroll body to 0px on click
    $('#back-to-top').click(function() {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });


    $('.form-submit').click(function() {
        var formField = $('.form-control').val();
        if (formField.length != 0) {
            $('.thankyou-sec').show(400);
        }
    });

    $(".more-certi").click(function() {
        $(".section-two .right .bottom ul li.hide-block, .section-two .left ul li.hide-block").toggleClass('show_more');
        if ($('.section-two .right .bottom ul li.hide-block, .section-two .left ul li.hide-block').hasClass("show_more")) {
            $(this).text('show less');
        } else {
            $(this).text('show more');
        }
    });

    // $(".more-content").click(function() {
    //     $(".section-two .left ul li.hide-block").toggleClass('show_more');
    //     if ($('.section-two .left ul li.hide-block').hasClass("show_more")) {
    //         $(this).text('show less');
    //     } else {
    //         $(this).text('show more');
    //     }
    // });


    $('a#show').click(function() {
        $('.popup-cover').addClass('popup-show');
    });
    $('#hide').click(function() {
        $('.popup-cover').removeClass('popup-show');
    });

    var $range = $("#example_id");
    $("#example_id").ionRangeSlider({
        hide_min_max: true,
        hide_from_to: true,
        values: [
            "0-15", "16-50", "51-100",
            "100-500", "500-1,000", "1,000-5,000",
            "5,000-10,000", "10,000+"
        ]
    });

    $range.on("change", function() {
        var $this = $(this),
            value = $this.prop("value");
        $("h6.employe-size").text(value + " Employees");
    });

    var x, i, j, selElmnt, a, b, c;
    /*look for any elements with the class "custom-select":*/
    x = document.getElementsByClassName("custom-select");
    for (i = 0; i < x.length; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        /*for each element, create a new DIV that will act as the selected item:*/
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        /*for each element, create a new DIV that will contain the option list:*/
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 1; j < selElmnt.length; j++) {
            /*for each option in the original select element,
            create a new DIV that will act as an option item:*/
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function(e) {
                /*when an item is clicked, update the original select box,
                and the selected item:*/
                var i, s, h;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                h = this.parentNode.previousSibling;
                for (i = 0; i < s.length; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        break;
                    }
                }
                h.click();
            });
            b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function(e) {
            /*when the select box is clicked, close any other select boxes,
            and open/close the current select box:*/
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }

    function closeAllSelect(elmnt) {
        /*a function that will close all select boxes in the document,
        except the current select box:*/
        var x, y, i, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        for (i = 0; i < y.length; i++) {
            if (elmnt == y[i]) {
                arrNo.push(i)
            } else {
                y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < x.length; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
            }
        }
    }
    /*if the user clicks anywhere outside the select box,
    then close all select boxes:*/
    document.addEventListener("click", closeAllSelect);


})(jQuery);