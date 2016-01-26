$(function () {
    window.setTimeout(function () {
        $('.alert-dismissible').fadeOut('slow');
    }, 5000);

    $('input:text:visible:first').focus();

    $('#loginForm').validate();
    $('#signInForm').validate();
});
