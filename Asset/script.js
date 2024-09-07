const wrapper = document.querySelector('.wrapper2')
const registerLink = document.querySelector('.register-link')
const loginLink = document.querySelector('.login-link')
const SecondSignup = document.querySelector('.Second-SignUp')

registerLink.onclick = () => wrapper.classList.add('active');

loginLink.onclick = () => wrapper.classList.toggle('active', false);
SecondSignup.onclick = () => wrapper.classList.toggle('active', false);
