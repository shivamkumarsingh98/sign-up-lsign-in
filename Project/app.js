const register = document.getElementById('register')
const already = document.getElementById('already')
const changeimg = document.getElementById('sydeimage')
const heading = document.getElementById('heading')
const facebook = document.getElementById('facebook')
const Apple = document.getElementById('Apple')
const Google = document.getElementById('Google')
const username = document.getElementById('hiddentwo')
const confrorm = document.getElementById('hiddenone')
const checkbox = document.getElementById('checkbox')
const forget = document.getElementById('forget')
const loginother = document.getElementById('otherlogin')



let isRegister = true

register.addEventListener('click', function (event) {
    event.preventDefault();
    if (isRegister) {
        register.innerText = 'Login here !'
        already.innerText = 'already have an'
        changeimg.src = 'man.jpg'
        heading.innerText = 'Sign up'
        facebook.style.display = 'none'
        Apple.style.display = 'none'
        Google.style.display = 'none'
        username.style.display = 'block'
        confrorm.style.display = 'block'
        checkbox.style.display = 'none'
        forget.style.display = 'none'
        loginother.style.display = 'none'

        isRegister = false

    } else {
        register.innerText = 'Register here !'
        already.innerText = 'don’t have an'
        heading.innerText = 'Sign in'
        changeimg.src = '3644996 1.jpg'
        facebook.style.display = 'block'
        Apple.style.display = 'block'
        Google.style.display = 'block'
        username.style.display = 'none'
        confrorm.style.display = 'none'
        checkbox.style.display = 'block'
        forget.style.display = 'none'
        loginother.style.display = 'none'

        isRegister = true
    }


});

const validateForm = (event) => {
    event.preventDefault()
    const email = document.forms["myForm"]["email"].value;
    const name = document.forms["myForm"]["username"].value;
    const password = document.forms["myForm"]["confirmPassword"].value;
    const userpassword = document.forms["myForm"]["userpassword"].value;

    const nameError = document.getElementById("usernamerror");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("confirmPasswordError");
    const userpasswordError = document.getElementById("passworderror");


    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    userpasswordError.textContent = "";

    let isValid = true;

    if (name.trim() === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = "Enter a valid email address.";
        isValid = false;
    }

    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        isValid = false;
    }
    if (userpassword.length < 6) {
        userpasswordError.textContent = "Password must be at least 6 characters.";
        isValid = false;
    }
    if (isValid) {
        console.log("Before reset");
        document.forms["myForm"].reset();
        console.log("After reset");
        isValid = false;
    }

    return isValid;
}

const passwordicon = document.getElementById('password')
const confrorms = document.getElementById('confrom')
const eye = document.getElementById('eye1')
const eyetwo = document.getElementById('eye2')


eye.addEventListener('click', () => {
    if (passwordicon.type === 'password') {
        passwordicon.type = 'text'
        this.classList.add("fa-eye")
        this.classList.remove('fa-eye-slash')

    } else {
        passwordicon.type = 'password'
        this.classList.remove('fa-eye')
        this.classList.add('fa-eye-slash')
    }
})
eyetwo.addEventListener('click', () => {
    if (confrorms.type === 'password') {
        confrorms.type = 'text'

    } else {
        confrorms.type = 'password'
    }
})


