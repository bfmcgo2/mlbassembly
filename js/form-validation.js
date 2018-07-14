$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='mc-embedded-subscribe-form']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      FNAME: "required",
      LNAME: "required",
      EMAIL: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      ZIP: {
        require: false
      },
      BIRTHDATE: {
        require: false
      }
    },
    // Specify validation error messages
    messages: {
      FNAME: "Please enter your firstname",
      LNAME: "Please enter your lastname",
      EMAIL: "Please enter a valid email address"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});