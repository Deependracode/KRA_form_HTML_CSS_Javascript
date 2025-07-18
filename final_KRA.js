// const form = document.querySelector("#fulldata");
// const tableBody = document.querySelector("#dataTable tbody");

// // Form submission
// form.addEventListener("submit", (e) => {
//     e.preventDefault(); 

//     // Fetch values and trim them
//     const ETC = document.querySelector("#ETC").value.trim();
//     const em_Name = document.querySelector("#em_Name").value.trim();
//     const ED = document.querySelector("#ED").value.trim();
//     const department = document.querySelector("#department").value.trim();
//     const placeposting1 = document.querySelector("#placeposting1").value.trim();

//     // Checkboxes (at least one must be selected)
//     const checkboxes = document.querySelectorAll("#checkBoxes input[type='checkbox']");
//     let selectedOfficers = [];
//     checkboxes.forEach(cb => {
//         if (cb.checked) selectedOfficers.push(cb.nextSibling.textContent.trim());
//     });

//     if (ETC && em_Name && ED && department && placeposting1 && selectedOfficers.length > 0) {
//         // All fields are filled — show alert and insert data
//         alert("Form submitted successfully!");




//         // Add data to table
//         const row = document.createElement("tr");
//         row.innerHTML = `
//             <td>${ETC}</td>
//             <td>${em_Name}</td>
//             <td>${ED}</td>
//             <td>${department}</td>
//             <td>${placeposting1}</td>
//             <td>${selectedOfficers.join(", ")}</td>
//         `;
//         tableBody.appendChild(row);

//         form.reset(); // Reset form after submission

//         // Also hide checkboxes
//         document.getElementById("checkBoxes").style.display = "none";
//     } else {

//         // alert("Please fill all fields before submitting.");
//     }
// });

// // // Reset alert
// // const resetBtn = document.querySelector(".button_res");
// // resetBtn.onclick = () => {
// //     alert("Full form will be reset!");
// // };


// alert("Form submitted successfully!");


const form = document.querySelector("#fulldata");
const tableBody = document.querySelector("#dataTable tbody");

// Form submission
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Fetch values and trim them
    const ETC = document.querySelector("#ETC").value.trim();
    const em_Name = document.querySelector("#em_Name").value.trim();
    const ED = document.querySelector("#ED").value.trim();
    const department = document.querySelector("#department").value.trim();
    const placeposting1 = document.querySelector("#placeposting1").value.trim();

    // Checkboxes (at least one must be selected)
    const checkboxes = document.querySelectorAll("#checkBoxes input[type='checkbox']");
    let selectedOfficers = [];
    checkboxes.forEach(cb => {
        if (cb.checked) selectedOfficers.push(cb.nextSibling.textContent.trim());
    });

    if (ETC && em_Name && ED && department && placeposting1 && selectedOfficers.length > 0) {
        // Show toast-style alert
        const toast = document.createElement("div");
        toast.className = "toast-alert";
        toast.textContent = "Form submitted successfully!";
        document.body.appendChild(toast);

        // Animate out and remove
        setTimeout(() => {
            toast.classList.add("fade-out");
        }, 2500);
        setTimeout(() => {
            toast.remove();
        }, 3000);

        
        // Add data to table
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${ETC}</td>
            <td>${em_Name}</td>
            <td>${ED}</td>
            <td>${department}</td>
            <td>${placeposting1}</td>
            <td>${selectedOfficers.join(", ")}</td>
        `;
        tableBody.appendChild(row);

        form.reset(); // Reset form
        document.getElementById("checkBoxes").style.display = "none"; // Hide checkboxes
    } else {
        // You can optionally add a toast for error too
        // Example: showToast("Please fill all fields.");
    }
});
