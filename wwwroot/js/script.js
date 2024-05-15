const uri = 'http://localhost:5050/api/contacts';
let contacts = [];


function addContact() {
    const firstName = document.querySelector('#first-name');
    const lastName = document.querySelector('#last-name');
    const email = document.querySelector('#e');
    const pass = document.querySelector('#password');
    const num = document.querySelector('#phone-number');
    const pass_c = document.querySelector('#password-confirm');
    const e_allow = document.querySelector('#check-email').checked;
    const p_allow = document.querySelector('#check-phone').checked;
    const msg = document.querySelector('#message');
  
    const contact = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: pass.value,
      phoneNumber: num.value,
      emailHide: e_allow,
      phoneHide: p_allow,
      msg: msg.value
    };
  
    fetch(uri, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contact)
    })
      .then(response => response.json())
      .catch(error => {
        
        console.error('Unable to add contact.', error);
        setTimeout(10000);

      });

      // firstName.value = "";
      // lastName.value = "";
      // email.value = "";
      // pass.value = "";
      // pass_c.value = "";
      // email.value = "";
      // num.value = "";

      window.location.replace("./pages/message-board.html");
  }

function val(){
    console.log("Entered");
    const password = document.querySelector("#password")
    const confirm_password = document.querySelector("#password-confirm");
    const password_div = document.querySelector("#pass");

    if (password.value != confirm_password.value) {
        console.log("Password mismatch...");
        password.style.borderColor = "red";
        confirm_password.style.borderColor = "red";

        password.value = "";   //.
        confirm_password.value = "";

        const msg = document.createElement("p");
        msg.textContent = "*Passwords must match";
        msg.style.marginTop = "0";
        msg.style.color = "red";
        msg.style.fontSize = "small";

        password_div.appendChild(msg);

        return false;
    }
    console.log("Password Match!");
    return true;
}
