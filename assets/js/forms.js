window.onload = () => {
    const form = document.querySelector(".form")
    const email = document.querySelector(".email")
    const password = document.querySelector(".password")
    const password2 = document.querySelector(".password2") // may be null if not on signup form

    form.addEventListener("submit", (e) => {
        e.preventDefault()

        if (!email.value || !password.value || (password2 && !password2.value)) {
            alert("Please fill in all fields");
            return;
        }

        if (password2) {
            // signup logic
            if (password.value !== password2.value) {
                alert("Passwords do not match")
            } else if (password.value.length < 8) {
                alert("Password must be at least 8 characters")
            } else {
                signup(email.value, password.value)
            }
        } else {
            // login logic
            if (password.value.length < 8) {
                alert("Password must be at least 8 characters")
            }else {
                login(email.value, password.value)
                alert("loggin in")
            }
        }
    })

    function signup(email, password) {
        const data = {
            email: email,
            password: password,
        }

        fetch("http://localhost:8000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }
            return response.json();
        })
        .then(result => {
            console.log("Signup successful:", result);
            alert("Signup successful!");
            // maybe redirect or reset form
        })
        .catch(error => {
            console.error("Signup failed:", error);
            alert("Signup failed. Please try again.");
        });

    }

    function login(email, password) {
        fetch("http://localhost:8000/users", {
            method:"GET"
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }
            console.log(response)
            return response.json();
        })
        .then(result => {
            console.log(result)
            // maybe redirect or reset form
        })
        .catch(error => {
            console.error("Signup failed:", error);
            alert("Signup failed. Please try again.");
        });
    }
}
