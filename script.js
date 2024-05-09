function validateSyntax() {
    let input = document.getElementById('petInput').value;
    let result = 'pet_'; // Placeholder for validation result

    // Regular expression to check if input starts with 'pet_' followed by alphanumeric characters
    let regex = /^pet_[a-zA-Z0-9]+$/;

    if (regex.test(input)) {
        result = 'Valid syntax';
    } else {
        result = 'Invalid syntax';
    }

    document.getElementById('result').innerText = result;
}


