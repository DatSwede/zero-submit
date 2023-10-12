document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('form-1');
    var stealthInput = document.getElementById('stealth');

    if(form && stealthInput) {
        form.addEventListener('submit', function(e) {
            if (stealthInput.value.trim() !== '') { // if the stealth input is not empty
                e.preventDefault(); // prevent the form from submitting
                alert('Form submission prevented due to stealth input being filled out.'); // optional: show a message
            }
        });
    }
});
