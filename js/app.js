/* ===================
*  Home page script
====================== */
$('.homepage .production .product').on('click', function(){// When user click the single product
    // Please add the script If user click the product image then update related product details
    $(this).parents('.production').addClass('active-product-details');// Active product details
    $('#product-carousel').carousel('pause');
    $('#product-carousel .carousel-indicators li').css({
        'pointer-events': 'none'
    });
    $('#product-carousel .carousel-controls').css({
        'pointer-events': 'none'
    });
    $('body').append('<div class="modal-backdrop mobileview fade in"></div>');
    $('body').addClass('modal-open');
});
$('.homepage .production .view-product-details .close-product-details').on('click', function(){
    // Close the product details when user click close icon
    $(this).parents('.production').removeClass('active-product-details');
    $('#product-carousel').carousel('cycle');
    $('#product-carousel .carousel-indicators li').css({
        'pointer-events': 'unset'
    });
    $('#product-carousel .carousel-controls').css({
        'pointer-events': 'unset'
    });
    $('.modal-backdrop').remove();
    $('body').removeClass('modal-open');
});
/* scrollTop function */
$(function () {
    var headerHeight = $(".main-menu").height();
    $('a[href^="\\#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate({'scrollTop': $target.offset().top - headerHeight}, 1200);
    });
});
// BOOTSTRAP SWIPE CAROUSEL
$("#product-carousel").carousel();
$("#product-image-carousel").carousel();
$("#recommendation-carousel").carousel();
/* ===================
*  Home form validation
====================== */
$(function(){
    $.validator.addMethod("customemail", 
        function(value, element) {
            return /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i.test(value);
        },
        "נא להזין דוא”ל תקני"
    );
    $.validator.addMethod("nameRequired", $.validator.methods.required, "נא להזין שם תקני");
    $('#message_details').on('keyup paste', function() {
        var $el = $(this),
            offset = $el.innerHeight() - $el.height();

        if ($el.innerHeight < this.scrollHeight) {
        //Grow the field if scroll height is smaller
        $el.height(this.scrollHeight - offset);
        } else {
        //Shrink the field and then re-set it to the scroll height in case it needs to shrink
        $el.height(1);
        $el.height(this.scrollHeight - offset);
        }
    });
    $('#contactFormHome').validate({
        onfocusout: function (element) { $(element).valid();},
        onkeyup: function(element) { $(element).valid(); },
        rules: {
            email: {
                required: {
                    depends:function(){
                        $(this).val($.trim($(this).val()));
                    }
                },
                customemail: true
        }/*,
            full_name: {
                nameRequired: true
            },
            phone_number: {
                required: true,
                number: true,
                minlength: 10,
                maxlength: 10
            },
            carrier_name: 'required',
            message_details: 'required'*/
        },
        message: {
            email_address: {
                required: 'הזן כתובת דוא"ל חוקית',
                customemail: 'נא להזין דוא”ל תקני'
        }/*,
            full_name: {
                nameRequired: 'נא להזין שם תקני'
            },
            phone_number: {
                required: 'נא להזין מספר טלפון תקני'
            },
            carrier_name: 'נא לספק הספק שלך',
            message_details: 'Please write message'*/
        },
        errorElement: 'em',
        validClass: "success",
        errorPlacement: function(error, element){
            // Add the `help-block` class to the error element
            error.addClass( "help-block" );

            if ( element.prop( "type" ) === "checkbox" ) {
                error.insertAfter( element.parent( "label" ) );
            } else {
                error.insertAfter( element );
            }
        },
        highlight: function ( element, errorClass, validClass ) {
            $( element ).parents( ".form-group" ).addClass( "has-error" ).removeClass( "has-success" );
        },
        unhighlight: function (element, errorClass, validClass) {
            $( element ).parents( ".form-group" ).addClass( "has-success" ).removeClass( "has-error" );
        }
    });
});
// COLLAPSE MENU AUTOMATIC ON MOBILE
$(function(){
    $('.navbar-nav li a').on('click', function(){
        $(this).parents('.navbar-collapse').removeClass('in');
        $(this).parents('.navbar-collapse').attr('aria-expanded', 'false');
    });
});