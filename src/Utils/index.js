//entry point 
export const ValidPassword = (password) => {
    const minLength = 8;
    const containsUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const containsLowercase = "abcdefghijklmnopqrstuvwxyz";
    const containsNumber = "0123456789";
    const containsSpecialChar = [" ",".", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "_", "-", "+", "=", "|", "\\'", "/", ";", "<", ">", "?", "~", "`", ","]
    let upperFlag = false, lowerFlag = false, numberFlag = false, specialCharFlag = false;
    Array.from(password).forEach((element) => {
        if (containsSpecialChar.indexOf(element) !== -1)
            specialCharFlag = true;
        else if (containsUppercase.indexOf(element) !== -1)
            upperFlag = true;
        else if (containsLowercase.indexOf(element) !== -1)
            lowerFlag = true;
        else if (containsNumber.indexOf(element) !== -1)
            numberFlag = true;
    });
    return (password.length >= minLength && numberFlag && lowerFlag && upperFlag && specialCharFlag);
};

export const ValidEmail = (email) => {
    const atChar = email.indexOf('@');
    const dotChar = email.lastIndexOf('.');
    if (atChar > 0 && dotChar > 0 && dotChar > atChar + 1 && dotChar < email.length - 1)
        return true;
    else
        return false;
};