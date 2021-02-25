// Форма обратной связи 
const openFeedbackForm = document.querySelector('._open-feedback-form')

if (openFeedbackForm) {
    const feedbackWrapper = document.querySelector('.feedback-modal-wrapper')
    const closeFeedbackForm = document.querySelector('._close-feedback-form')
    const feedbackModal = document.querySelector('.feedback.modal')
    const feedback = document.querySelector('.feedback form')
    const userName = feedback.querySelector('.user-name-input')
    const userEmail = feedback.querySelector('.user-email-input')
    const userFeedback = feedback.querySelector('.user-feedback-input')
    const textArea = feedback.querySelector('.user-text')


    feedback.addEventListener('submit', function (evt) {
        if (!userName.value || !userEmail.value || !userFeedback.value) {
            evt.preventDefault();
            feedback.classList.add('modal-error')
            setTimeout(function () { feedback.classList.remove('modal-error') }, 600)
        }

    });

    window.addEventListener('keydown', function (evt) {
        if (evt.keyCode === 27) {
            if (feedbackWrapper.style.display === "grid") {
                evt.preventDefault()
                feedbackWrapper.style.display = "none"
                feedback.classList.remove('modal-error')
            }
        }
    });

    openFeedbackForm.onclick = function () {
        feedbackWrapper.style.display = "grid"
    }


    feedbackWrapper.addEventListener('click', function () {
        feedbackWrapper.style.display = "none"
        feedback.classList.remove('modal-error')
    })

    feedbackModal.addEventListener('click', function (evt) {
        evt.stopPropagation()
    })

    closeFeedbackForm.onclick = function () {
        feedbackWrapper.style.display = "none"
        feedback.classList.remove('modal-error')
    }
}


// Промо слайдер с фонами 
const bg = document.querySelector('.bg')
const controls = document.querySelectorAll('.control')
const slides = document.querySelectorAll('.slider-item')

let activeSlideIndex = 0

function setActiveControl(index) {
    controls[activeSlideIndex].classList.remove('control-current')
    controls[index].classList.add('control-current')
}

function setActiveSlide(index) {
    slides[activeSlideIndex].classList.remove('slide-current')
    slides[index].classList.add('slide-current')
}

function setActiveBg(index) {
    bg.classList.remove('bg-' + (activeSlideIndex + 1))
    bg.classList.add('bg-' + (index + 1))
}

for (let i = 0; i < controls.length; i++) {
    const control = controls[i]
    control.addEventListener('click', function() {
        setActiveControl(i)
        setActiveSlide(i)
        setActiveBg(i)

        activeSlideIndex = i
    })
}

// Форма логина 
const loginForm = document.querySelector('.login-form')
const loginFormLogin = document.querySelector('.login-log-input')
const loginFormPassword = document.querySelector('.login-pass-input')

let isStorageSupported = true
let storedLogin = ''

try {
    storedLogin = localStorage.getItem('login')
} catch (err) {
    isStorageSupported = false
}


if (storedLogin) {
    loginFormLogin.value = storedLogin
}


loginForm.addEventListener('submit', function (evt) {
    if (!loginFormLogin || !loginFormPassword) {
        evt.preventDefault()
    } else if (isStorageSupported) {
        localStorage.setItem('login', loginFormLogin.value)
    }
})



