    $(document).ready(function(){
    var current_fs, next_fs, prev_fs;
    var opacity;
    $(".next").click(function(){
       current_fs = $(this).parent();
       next_fs = $(this).parent().next();
       console.log(current_fs);
       console.log(next_fs);
       
    //Add Class Active
    $("#progressbar li").eq($(".fieldset").index(next_fs)).addClass("active"); 
     
    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
    step: function(now) {
    // for making fielset appear animation
    opacity = 1 - now;

    current_fs.css({
    'display': 'none',
    'position': 'relative'
    });

    next_fs.css({'opacity': opacity});
    },
    duration: 600
    });
    });

    $(".prev").click(function(){
       current_fs = $(this).parent();
       prev_fs = $(this).parent().prev();
      
       
    //Add Class Active
    $("#progressbar li").eq($(".fieldset").index(current_fs)).removeClass("active"); 
     
    //show the next fieldset
    prev_fs.show();
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
    step: function(now) {
    // for making fielset appear animation
    opacity = 1 - now;

    current_fs.css({
    'display': 'none',
    'position': 'relative'
    });

    prev_fs.css({'opacity': opacity});
    },
    duration: 600
    });
    });
    
    $('.radio-group .radio').click(function(){
    $(this).parent().find('.radio').removeClass('selected');
    $(this).addClass('selected');
    });
    
    // Password strength meter
    $('#password').on('input', function() {
        var password = $(this).val();
        var strength = 0;
        var meter = $('#strength-meter');
        
        if (password.length > 0) {
            if (password.length >= 8) strength += 1;
            if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength += 1;
            if (password.match(/\d/)) strength += 1;
            if (password.match(/[^a-zA-Z\d]/)) strength += 1;
        }
        
        meter.removeClass('strength-weak strength-medium strength-strong');
        
        if (strength <= 1) {
            meter.addClass('strength-weak').css('width', '25%');
        } else if (strength <= 2) {
            meter.addClass('strength-medium').css('width', '50%');
        } else if (strength <= 3) {
            meter.addClass('strength-strong').css('width', '75%');
        } else {
            meter.addClass('strength-strong').css('width', '100%');
        }
        
        if (password.length === 0) {
            meter.css('width', '0');
        }
    });
    
    // Privacy modal
    $('#privacy-link').click(function(e) {
        e.preventDefault();
        $('#privacy-modal').show();
    });
    
    $('.close-modal').click(function() {
        $('#privacy-modal').hide();
    });
    
    $(window).click(function(e) {
        if ($(e.target).is('#privacy-modal')) {
            $('#privacy-modal').hide();
        }
    });
});