const customerForm = document.getElementById("customerForm");
const submitButton = document.getElementById("submit-button");
const phone = document.getElementById("phone");
const phoneNumber = document.getElementById("phoneNumber");
const mail = document.getElementById("mail");
const mailAddress = document.getElementById("mailAddress");

customerForm.addEventListener("input", function () {
    submitButton.disabled = !isFormValid();
});

phone.addEventListener("click", function (event) {
    phoneNumber.style.display = phoneNumber.style.display === "none" ? "block" : "none";
    mailAddress.style.display = "none";
    event.stopPropagation();
});

mail.addEventListener("click", function (event) {
    mailAddress.style.display = mailAddress.style.display === "none" ? "block" : "none";
    phoneNumber.style.display = "none";
    event.stopPropagation();
});

document.addEventListener("click", function (event) {
    phoneNumber.style.display = "none";
    mailAddress.style.display = "none";
    event.stopPropagation();
});

function isFormValid() {
    return Array.from(customerForm.elements).filter((element) => element.hasAttribute("required"))
        .every((element) => element.checkValidity());
}