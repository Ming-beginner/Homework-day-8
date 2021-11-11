document.getElementById("btn").addEventListener("click", getResult);

function getResult() {
    let gender = "";
    console.log(`Name: ${document.getElementById("name").value}`);
    console.log(`Email: ${document.getElementById("mail").value}`);
    console.log(`Website: ${document.getElementById("website").value}`);
    console.log(`Comment: ${document.getElementById("comment").value}`);
    if (document.getElementById("male").checked === true) {
        gender = "Male";
    } else if (document.getElementById("female").checked === true) {
        gender = "Female";
    } else if (document.getElementById("other").checked === true) {
        gender = "Other";
    }
    console.log(`Gender: ${gender}`);
}