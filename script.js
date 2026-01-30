function addData() {
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let age = document.getElementById("age").value;
            let mobile = document.getElementById("mobile").value;
            let address = document.getElementById("address").value;

            if (name === "" || email === "" || age === "" || mobile === "" || address === "") {
                alert("Please fill all fields");
                return;
            }

            let table = document.getElementById("tableBody");
            let row = table.insertRow();

            row.insertCell(0).innerHTML = name;
            row.insertCell(1).innerHTML = email;
            row.insertCell(2).innerHTML = age;
            row.insertCell(3).innerHTML = mobile;
            row.insertCell(4).innerHTML = address;
            row.insertCell(5).innerHTML =
                `<button class="delete-btn" onclick="deleteRow(this)">Delete</button>`;

            // Clear inputs
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("age").value = "";
            document.getElementById("mobile").value = "";
            document.getElementById("address").value = "";
        }

        function deleteRow(btn) {
            let row = btn.parentNode.parentNode;
            row.remove();
        }