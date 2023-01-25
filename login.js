const loginAuth = async(event) => {
    event.preventDefault(); // to prevent the default behavior of form submission

    const username = document.getElementById("userName").value;
    const password = document.getElementById("password").value;

    // Hardcoded valid credentials
    const validUsername = "admin";
    const validPassword = "password";

    // Warning: Hardcoded username and password for demonstration
    // purposes only. For server-side authentication :
    /* 
         const data = {username, password};
         try {
            const response = await fetch('/login', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const json = wait response.json();
            if(json.authenticated) {
                window.location.href = "weekly-flyer.html";
            } else {
                alert("Invalif username or password");
            } catch (error) {
                alert("Error Occured, please try again!");
            }
         }
    */

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

document.getElementById("logIn").addEventListener("click", loginAuth);