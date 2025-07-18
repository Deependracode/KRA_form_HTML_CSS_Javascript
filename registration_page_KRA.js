
    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#password');

    togglePassword.addEventListener('click', () => {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        togglePassword.classList.toggle('bi-eye');
    });

    let btnn = document.querySelector("#btn");

    btnn.addEventListener("click", function (event) {
        // Get all input values
        const name = document.querySelector("#name").value.trim();
        const code = document.querySelector("#emp_code").value.trim();
        const age = document.querySelector("#Age").value.trim();
        const date = document.querySelector("#Joining_date").value.trim();
        const dept = document.querySelector("#Department").value.trim();
        const pass = document.querySelector("#password").value.trim();

        if (!name || !code || !age || !date || !dept || !pass) {
            event.preventDefault(); // prevent form submission
            alert("Please fill all the fields before submitting.");
        } else {
            alert("Form submitted successfully. Moving to login page.");
            event.preventDefault();
             window.location.href = "second_Login_KRA.html";
        }
    });


//     btnn.addEventListener("click", function (event) {
//     const name = document.querySelector("#name").value.trim();
//     const code = document.querySelector("#emp_code").value.trim();
//     const age = document.querySelector("#Age").value.trim();
//     const date = document.querySelector("#Joining_date").value.trim();
//     const dept = document.querySelector("#Department").value.trim();
//     const pass = document.querySelector("#password").value.trim();

//     if (!name || !code || !age || !date || !dept || !pass) {
//         event.preventDefault();
//         alert("Please fill all the fields before submitting.");
//     } else {
//          // optional
//         alert("Form submitted successfully. Moving to login page.");
       
//     }
// });


// function myFunction(){
// var x=document.querySelector("#password").pattern;
// document.getElementById("#btn").innerHTML = x;

// }


