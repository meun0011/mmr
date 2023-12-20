const loginForm = document.querySelector(".login-form");
const Meun_Uname = document.querySelector(".Meun_Uname");
const Meun_Pass = document.querySelector(".Meun_Pass");

const hdlLogin = (e) => {
    e.preventDefault();

    const validateAndHighlight = (input, errorText, condition) => {
        const trimmedValue = input.value.trim();
        if (!condition(trimmedValue)) {
            input.style.borderColor = "red";
            errorText.textContent = `${input.labels[0].textContent} ${errorText.dataset.message}`;
            errorText.style.color = 'red';
            return false;
        } else {
            input.style.borderColor = "initial";
            errorText.textContent = "รหัสผ่านไม่ถูกต้อง";
            errorText.style.color = 'red';
            return true;
        }
    };

    const usernameInput = document.querySelector("#username");
    const passwordInput = document.querySelector("#password");
    const selectInput = document.querySelector("#role");

    const isUsernameValid = validateAndHighlight(
        usernameInput,
        Meun_Uname,
        value => value.length > 3 && !/^\d/.test(value) && !/\s/.test(value)
    );

    const isPasswordValid = validateAndHighlight(
        passwordInput,
        Meun_Pass,
        value => value.length > 4 && /\d/.test(value) && /[a-zA-Z]/.test(value)
    );

    const isSelectValid = selectInput.value !== "";
    if (!isSelectValid) {
        selectInput.style.borderColor = "red";
    } else {
        selectInput.style.borderColor = "initial";
    }

    if (isUsernameValid && isPasswordValid && isSelectValid) {
        const enteredUsername = usernameInput.value.trim();
        const enteredPassword = passwordInput.value.trim();

        if (validateLogin(enteredUsername, enteredPassword)) {
            alert('Login successful');
            window.location.href = "https://www.example.com";
        } else {
            alert('Login failed: Incorrect username or password');
            // alert(`\nUsername: ${enteredUsername}\nPassword: ${enteredPassword}`);
        }
    }
};

function validateLogin(username, password) {
    const users = [
        { username: 'andy', password: 'a1234' },
        { username: 'bobby', password: 'a2345' },
        { username: 'candy', password: 'a3456' }
    ];
    return users.some((user) => user.username === username && user.password === password);
}

loginForm.addEventListener('submit', hdlLogin);
