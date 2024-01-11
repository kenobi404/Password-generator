function checkPasswordStrength(password) {
    
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

   
    let strength = 0;

    
    if (password.length >= minLength) {
        strength += 2;
    }

    
    strength += hasUpperCase + hasLowerCase + hasNumber + hasSpecialChar;

    return strength;

   
    if (strength <= 2) {
        return "Weak";
    } else if (strength <= 4) {
        return "Medium";
    } else {
        return "Strong";
    }
}

export {checkPasswordStrength}
