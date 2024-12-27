window.onload = function () {
    var form = document.getElementById("contact-form");

    // Initialize Pristine with custom options
    var pristine = new Pristine(form, {
        classTo: 'form-group',        // Add validation classes to .form-group
        errorTextParent: 'form-group', // Place error messages within .form-group
        errorClass: 'has-error',       // Custom error class for invalid fields
        successClass: 'has-success'   // Custom success class for valid fields
    });

    // Add an event listener for form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission

        // Validate the form
        var isValid = pristine.validate();

        if (isValid) {
            alert("Form submitted successfully!");


            // Clear the form fields
            form.reset();

            // Optionally, reset Pristine validation styles
            pristine.reset();
        } else {
            alert("Please correct the errors and try again.");
        }
    });
};
