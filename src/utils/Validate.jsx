//  Email Validation
export const validateEmail = (email) => {
  const emailRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.trim());
};

//  Password Validation (Strong Password)
export const validatePassword = (password) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;

  return passwordRegex.test(password);
};

//  Phone Validation (India format - optional)
export const validatePhone = (phone) => {
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone);
};

//  Confirm Password
export const validateConfirmPassword = (password, confirmPassword) => {
  return password === confirmPassword;
};

//  Full Form Validation (returns error object)
export const validateForm = (formData, isSignUp) => {
  const errors = {};

  // Email or phone
  if (!formData.email) {
    errors.email = "Email or phone is required";
  } else if (
    !validateEmail(formData.email) &&
    !validatePhone(formData.email)
  ) {
    errors.email = "Enter a valid email or phone number";
  }

  // Password
  if (!formData.password) {
    errors.password = "Password is required";
  } else if (!validatePassword(formData.password)) {
    errors.password =
      "Password must contain uppercase, lowercase, number & special character";
  }

  // Signup specific
  if (isSignUp) {
    if (!formData.name) {
      errors.name = "Name is required";
    }

    if (!formData.confirmPassword) {
      errors.confirmPassword = "Confirm your password";
    } else if (
      !validateConfirmPassword(
        formData.password,
        formData.confirmPassword
      )
    ) {
      errors.confirmPassword = "Passwords do not match";
    }
  }

  return errors;
};