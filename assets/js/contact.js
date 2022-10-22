/**
 * Copyright (c) 2022
 *
 * @summary Form Response Handling and CAPCHA
 * @author Connor Bernard <connorbernard@berkeley.edu>
 *
 */

/* -- SUBMISSION UPDATE -- */
const sent = (new URLSearchParams(window.location.search)).get("submitted")
const submitted = document.createElement("div")
const submittedText = document.createElement("p")
submitted.appendChild(submittedText)
if(sent == 1){
    submittedText.className = "success"
    submittedText.textContent = "Successfully submitted!"
    document.getElementById("contactForm").insertBefore(submitted, document.getElementById("submitButton"))
} else if(sent == 0){
    submittedText.className = "failed"
    submittedText.textContent = "Unable to send message, please try again later."
    document.getElementById("contactForm").insertBefore(submitted, document.getElementById("submitButton"))
}

/* -- SUBMIT BUTTON CAPCHA HANDLING -- */
function onSubmit(token) {
    document.getElementById("contactForm").submit()
}
