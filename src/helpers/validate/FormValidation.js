function validateText(value){
    let error = [];
    if (!value) {
        error.push('No input');
    }
    else if (!/[A-Z0-9]$/i.test(value)) {
        error.push('Invalid  text format. Must contain only letters or numbers');
    }
    return error;
}

export default validateText;