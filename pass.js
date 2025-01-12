

// masking of password
function maskPassword(pass) {
    let str = "";

    for (let index = 0; index < pass.length; index++) {
        str += "*";
    }
    return str;
}   


// function to copy text

function copyText(txt) {
    navigator.clipboard.writeText(txt).then(
        () => {
            // alert("Copied to Clipboard");
            document.getElementById("alert").style.display = "block";
            setTimeout(() => {
                document.getElementById("alert").style.display = "none";

            }, 2000);
        },
        () => {
            alert("Clipboard copying failed")
        },
    );
}



const deletePassword = (website) => {  // Added website parameter
    let data = localStorage.getItem("passwords");
    let arr = JSON.parse(data);
    arrUpdated = arr.filter((e) => {  // higher-order method in JavaScript used to create a new array containing all elements from the original array that pass a test implemented by the provided callback function.
        return e.website != website;
    });
    localStorage.setItem("passwords", JSON.stringify(arrUpdated));
    alert(`Successfully deleted ${website}'s password`);  // Fixed syntax issue with alert
    showPasswords();
}

// logic to fill the table
const showPasswords = () => {

    let tb = document.querySelector("table");
    let data = localStorage.getItem("passwords");

    if (data == null || JSON.parse(data).length == 0) {
        tb.innerHTML = "No Data To Show";  // Added table row with colspan for "No Data"
    } else {

        tb.innerHTML = `<tr>
                <th>Website</th>
                <th>Username</th>
                <th>Password</th>
                <th>Delete</th>
            </tr>`;  // Fixed template literal for the table headers
        let arr = JSON.parse(data);
        let str = "";  // Initialize str to accumulate rows
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            str += `<tr>
                <td>${element.website} <img class = "copy" src="copy.svg" alt="Copy Icon" width="17" height ="23" onclick="copyText('${element.website}')"></td>
                <td>${element.username} <img class = "copy" src="copy.svg" alt="Copy Icon" width="17" height ="23" onclick="copyText('${element.username}')"></td>
                <td>${maskPassword(element.password)} <img class = "copy" src="copy.svg" alt="Copy Icon" width="17" height ="23" onclick="copyText('${element.password}')"></td>
                <td><button id = "${element.website}" class="btnsm" onclick="deletePassword('${element.website}')">Delete</button></td>
            </tr>`;  // Added the row inside the loop, fixing the undefined element issue
        }
        tb.innerHTML += str;  // Append the rows after the loop
    }
    website.value = "";
    username.value = "";
    password.value = "";
}

console.log("Working");
showPasswords();

document.querySelector(".btn").addEventListener("click", (e) => {  // Ye ek function se local storage mein id aur password save hogaye !!
    e.preventDefault();  // so that it won't perform the default function
    console.log("Clicked");
    // console.log(username.value, password.value);  // We can use IDs directly and avoid document.querySelector

    let passwords = localStorage.getItem("passwords");
    // console.log(passwords);

    if (passwords == null) {
        let json = [];
        json.push({ website: website.value, username: username.value, password: password.value });
        alert("Password Saved");  // Use dialog boxes rather than alerts
        localStorage.setItem("passwords", JSON.stringify(json));
    } else {
        let json = JSON.parse(localStorage.getItem("passwords"));
        json.push({ website: website.value, username: username.value, password: password.value });
        alert("Password Saved");  // Use dialog boxes rather than alerts
        localStorage.setItem("passwords", JSON.stringify(json));
    }

    showPasswords();
});
