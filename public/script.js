const menuButton = document.querySelector('#menu');
const profileButton = document.querySelector('#user');
const closeButton = document.querySelector('#closeButton');
const sendButton = document.querySelector('#send');
const errorCancel = document.querySelector('#error-cancel');
menuButton.addEventListener('click', () => {
    document.querySelector('.profile-container').style.width = '100%';
});
profileButton.addEventListener('click', () => {
    document.querySelector('.profile-container').style.width = '100%';
});
closeButton.addEventListener('click', () => {
    document.querySelector('.profile-container').style.width = '0%';
});
sendButton.addEventListener('click', () => {
    document.querySelector('.error-info').style.width = '80%';
});
errorCancel.addEventListener('click', () => {
    document.querySelector('.error-info').style.width = '0%';
})

