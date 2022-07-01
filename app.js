document.getElementById('name').addEventListener('blur', validateName)
const zipCode = document.getElementById('zipcode')
const email = document.getElementById('email')
const phone = document.getElementById('phone')

zipCode.addEventListener('blur', validateZipCode)
email.addEventListener('blur', validateEmail)
phone.addEventListener('blur', validatePhoneNo)

function validateName() {
    const name = document.getElementById('name')
    const re = /^[A-Za-z]{3,15}$/

    if (!re.test(name.value)) {
        name.classList.add('is-invalid')
    } else {
        name.classList.remove('is-invalid')
    }
}
function validateZipCode() {
    const zip = document.getElementById('zipcode')
    const re = /^[0-9]{5}(-[0-9]{4})?$/

    if (!re.test(zip.value)) {
        zip.classList.add('is-invalid')
    } else {
        zip.classList.remove('is-invalid')
    }
}
function validateEmail() {
    const email = document.getElementById('email')
    const re = /^([A-Za-z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

    if (!re.test(email.value)) {
        email.classList.add('is-invalid')
    } else {
        email.classList.remove('is-invalid')
    }
}

function validatePhoneNo() {
    const phone = document.getElementById('phone')
    const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/

    if (!re.test(phone.value)) {
        phone.classList.add('is-invalid')
    } else {
        phone.classList.remove('is-invalid')
    }
}
