document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form'); // this selects the first form on the page
    var stealthInput = document.getElementById('stealth');

    form.addEventListener('submit', function(e) {
        if (stealthInput.value.trim() !== '') { // if the stealth input is not empty
            e.preventDefault(); // prevent the form from submitting
            alert('Form submission prevented due to stealth input being filled out.'); // optional: show a message
        }
    });
});
