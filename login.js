const login = async(event) => {
    event.preventDefault(); // to prevent the default behavior of form submission

    const username = document.getElementById("userName").value;
    const password = document.getElementById("password").value;

    // Hardcoded valid credentials
    const validUsername = "admin";
    const validPassword = "password";

    try {
        if(username === validUsername && password === validPassword) {
            window.location.href = "weekly-flyer.html";
        } else {
            alert("Invalid username or password");
        }
    } catch (error) {
        alert("Error Occured, please try again!");
    }
}

document.getElementById("logIn").addEventListener("click", login);