$(function () {
    $('input:text:visible:first').focus();

    $('#signUpModal').on('shown.bs.modal', function () {
        $('#nameField').focus()
    });

    $('#loginForm').validate();
    $('#signInForm').validate();
});
