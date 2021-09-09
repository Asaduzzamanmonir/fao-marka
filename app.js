// RegEx for testing email address
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// declare the sign of positive email
const resultPositive = document.getElementById('positiveResult')

// declare the sign of negative email
const resultNegative = document.getElementById('negativeResult')


const getEmail = () => {
    const inputField = document.getElementById('input-field')
    const inputValue = inputField.value
    inputField.value = '';

    if (re.test(inputValue)) {
        resultNegative.innerText = '';

        resultPositive.innerText = `
        your email address is correct
        `;
    }
    else {
        resultPositive.innerText = '';

        resultNegative.innerText = `
        your email address is incorrect . please type correct
        `;
    }
}
