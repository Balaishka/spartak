const eyeOpen = document.querySelector('.eye_open');
const eyeClose = document.querySelector('.eye_close');

const buttonCalendar = document.querySelector('.react-date-picker__calendar-button');
const calendar = document.querySelector('.react-date-picker__calendar');

if(eyeClose) {
    eyeClose.addEventListener('click', () => {
        eyeClose.style.display = 'none';
        eyeOpen.style.display = 'block';
    });
}

if (eyeOpen) {
    eyeOpen.addEventListener('click', () => {
        eyeOpen.style.display = 'none';
        eyeClose.style.display = 'block';
    });
}

if (buttonCalendar) {
    buttonCalendar.addEventListener('click', () => {
        calendar.classList.toggle('react-date-picker__calendar--closed');
        calendar.classList.toggle('react-date-picker__calendar--open');
    });
}