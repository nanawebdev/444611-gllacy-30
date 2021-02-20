const openFeedbackForm = document.querySelector('._open-feedback-form')
const feedbackForm = document.querySelector('.feedback-modal-wrapper')
const closeFeedbackForm = document.querySelector('._close-feedback-form')

openFeedbackForm.onclick = function() {
    feedbackForm.style.display = "grid"

}
closeFeedbackForm.onclick = function() {
    feedbackForm.style.display = "none"
   
}
