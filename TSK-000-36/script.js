const scroll = new LocomotiveScroll({
    el: document.querySelector('body'),
    smooth: true
});

function validateForm() {
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerText = 'Invalid email address';
        return false;
    } else {
        document.getElementById('emailError').innerText = '';
    }

    // Additional validation for other fields can be added here

    // If all validations pass, the form will be submitted
    return true;
}

