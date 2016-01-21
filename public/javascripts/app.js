$(function () {
    window.setTimeout(function () {
        $(".alert-dismissible").fadeOut("slow");
    }, 5000);

    $('input:text:visible:first').focus();

    $('#signUpModal').on('shown.bs.modal', function () {
        $('#nameField').focus()
    });

    $('#loginForm').validate();
    $('#signInForm').validate();
});
