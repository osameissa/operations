// ---Selectors---
const username = document.getElementById('username')
const password = document.getElementById('password')
const welcome = document.getElementById("welcome")
const signOutBtn = document.getElementById("signOutBtn")
const logInForm = document.querySelector("#logIn")
const formBtn2 = document.querySelector("#formBtn2")
const createAccount = document.querySelector("#createAccount")


// [username,password]
let users = [ 
{"username": "Janne", "password": "test"},
{"username": "John", "password": "Doe"},
{"username": "Sergey", "password": "Nazarov"},
{"username": "Bob", "password": "Lazar"},
{"username": "Mario", "password": "64"}];


// ---Event-listeners---

// switching between logInForm & createAccountForm
document.addEventListener("DOMContentLoaded", () => {
    const logInForm = document.querySelector("#logIn")
    const createAccountForm = document.querySelector("#createAccount")

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault()
        logInForm.classList.add("formHidden")
        createAccountForm.classList.remove("formHidden")
    }
)

        document.querySelector("#linkLogIn").addEventListener("click", e => {
            e.preventDefault();
            logInForm.classList.remove("formHidden")
            createAccountForm.classList.add("formHidden")  
        }
    )
    
// clear localStorage when clicking on signOutBtn
            document.getElementById("signOutBtn").addEventListener("click" , () => {
                localStorage.removeItem("username")
                localStorage.removeItem("password")
                console.log("Cleared username & password key")
            }
        )
    }
)

// store username, password in localStorage
logInForm.addEventListener("submit", e =>   {
    e.preventDefault()
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    localStorage.setItem("username", username)
    localStorage.setItem("password", password)
    console.log("Credentials stored in localStorage");
    }
)


createAccount.addEventListener("submit", e => {
    e.preventDefault()
    let newUsername = document.querySelector("#newUsername").value
    let newPassword = document.querySelector("#newPassword").value
    let newUser = {
        username: newUsername,
        password: newPassword
    }
        users.push(newUser)
        localStorage.setItem("users", JSON.stringify(users))
        alert("You have successfully created an account!")
        
        return true
})

// ---Functions---
loggingIn = () => {
    localStorage.setItem("users", JSON.stringify(users))
    console.log('Checking credentials..')
    for (i = 0; i < users.length; i++) {
        if (username.value == users[i].username && password.value == users[i].password) {
            console.log(username.value + " logged in.")
            logInForm.classList.add("formHidden")
            formTask.classList.remove("formHidden")
            signOutBtn.classList.remove("formHidden")
            signOutBtn.innerHTML = '<i class="fa-solid fa-arrow-right-from-bracket"></i>'
            formTask.innerHTML = "Welcome, " + username.value
            return true;
        }
    }
// if invalid credentials -> display error message
    invalid.classList.remove("formHidden")
    console.log("Invalid credentials")

}
// autologin: fetch values from localStorage & cross-check
checkCredentials = () => {
    let users = JSON.parse(localStorage.getItem("users"))
    for (i = 0; i < users.length; i++) {
        let storedUsername = localStorage.getItem("username")
        let storedPassword = localStorage.getItem("password")
        const checkCredentials = document.querySelector("checking")
        if (storedUsername == users[i].username && storedPassword == users[i].password) {
            console.log("Welcome back, " + storedUsername)
            logInForm.classList.add("formHidden")
            formTask.classList.remove("formHidden")
            signOutBtn.classList.remove("formHidden")
            signOutBtn.innerHTML = '<i class="fa-solid fa-arrow-right-from-bracket"></i>'
            formTask.innerHTML = "Welcome, " + storedUsername
            return true
        }
    }
}

