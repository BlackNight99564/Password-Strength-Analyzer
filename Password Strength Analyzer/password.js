function checkStrength() {
    const password = document.getElementById('password').value;
    const progressBar = document.getElementById('progressBar');
    const strengthMessage = document.getElementById('strengthMessage');

    // Advanced strength calculation
    let strength = 0;
    if (password.length >= 8) strength += 1; // Length
    if (password.match(/[A-Z]/)) strength += 1; // Uppercase
    if (password.match(/[a-z]/)) strength += 1; // Lowercase
    if (password.match(/[0-9]/)) strength += 1; // Number
    if (password.match(/[!@#$%^&*()_+{}\[\]:;"'<>,.?~`|\\]/)) strength += 1; // Special Character
    if (password.length >= 12) strength += 1; // Extra for longer length
    if (password.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;"'<>,.?~`|\\])[A-Za-z\d!@#$%^&*()_+{}\[\]:;"'<>,.?~`|\\]{8,}$/)) strength += 1; // Complex pattern

    // Determine strength level
    let level = 'weak';
    if (strength >= 7) level = 'strong';
    else if (strength >= 5) level = 'medium';

    // Update progress bar and message
    let width = (strength / 8) * 100;
    progressBar.style.width = width + '%';

    // Remove existing classes
    progressBar.classList.remove('weak-blink', 'medium', 'strong');

    // Add new class
    if (level === 'strong') {
        progressBar.classList.add('strong');
    } else if (level === 'medium') {
        progressBar.classList.add('medium');
    } else {
        progressBar.classList.add('weak-blink');
    }

    // Update message
    let message = 'Weak';
    if (level === 'strong') {
        message = 'Strong';
    } else if (level === 'medium') {
        message = 'Medium';
    }
    strengthMessage.textContent = message;
    strengthMessage.className = 'strength-message ' + level;
}