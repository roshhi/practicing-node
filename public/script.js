const headerButtons = document.querySelectorAll('.header button');
const registerBtn = document.getElementById('showRegisterBtn');
const loginBtn = document.getElementById('showLoginBtn');
const headerRegisterBtn = document.getElementById('headerRegisterBtn');
const headerLoginBtn = document.getElementById('headerLoginBtn');

const form = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');
const image = document.getElementById('loginFormImage');
const loginImage = document.getElementById('loginImg');

registerBtn.addEventListener('click', showRegister);
loginBtn.addEventListener('click', showLogin);
headerRegisterBtn.addEventListener('click', showRegister);
headerLoginBtn.addEventListener('click', showLogin);

for (let i = 0; i < headerButtons.length; i++) {
  headerButtons[i].addEventListener('click', function () {
    // Remove "active" class from all buttons
    for (let j = 0; j < headerButtons.length; j++) {
      headerButtons[j].classList.remove('active');
    }
    // Add "active" class to the clicked button
    this.classList.add('active');
  });
}

function showRegister() {
    image.style.display = 'none';       
    form.style.display = 'block';         
    loginForm.style.display = 'none';  
  
    // FIRST set loginImage to visible (but transparent)
    loginImage.classList.remove('fade-in', 'fade-out', 'hidden');
    loginImage.classList.add('fade-out');
    loginImage.style.display = 'block';   // make it visible but transparent
  
    // FORCE BROWSER TO REPAINT
    void loginImage.offsetWidth; //This is called forcing a reflow. It gives the browser a tiny pause to notice the image is still invisible,
  
    // THEN fade it in
    loginImage.classList.remove('fade-out');
    loginImage.classList.add('fade-in');
  }
  

function showLogin() {
    loginImage.style.display = 'none';
    form.style.display = 'none';
    loginForm.style.display = 'flex';

        // FIRST set loginImage to visible (but transparent)
        image.classList.remove('fade-in', 'fade-out', 'hidden');
        image.classList.add('fade-out');
        image.style.display = 'block';   // make it visible but transparent
      
        // FORCE BROWSER TO REPAINT
        void image.offsetWidth; //This is called forcing a reflow. It gives the browser a tiny pause to notice the image is still invisible,
      
        // THEN fade it in
        image.classList.remove('fade-out');
        image.classList.add('fade-in');

}

window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
});

// To check whether both entered passwords are same in the registration form.

const formElement = document.getElementById('myForm');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

formElement.addEventListener('submit', function (e) {
  if (passwordInput.value !== confirmPasswordInput.value) {
    e.preventDefault(); // Stop form from submitting
    alert("Passwords do not match!");
    confirmPasswordInput.focus();
  }
});

//It highlights the respective button on the header which is when clicked in the form.

const highlight_Login_btn = document.querySelector('.myLoginBtn');
const highlight_Register_btn = document.querySelector('.myRegisterBtn');


highlight_Login_btn.addEventListener('click',()=>{
  headerRegisterBtn.classList.remove('active');
  headerLoginBtn.classList.add('active');
})
highlight_Register_btn.addEventListener('click',()=>{
  headerLoginBtn.classList.remove('active');
  headerRegisterBtn.classList.add('active');
})