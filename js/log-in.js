const contacts_uri = 'http://localhost:5050/api/permission';

const test = 'http://localhost:5050/api/contacts'

async function val(){
    const pass = document.querySelector('#password');
    const first = document.querySelector('#first-name');
    const last = document.querySelector('#last-name');
    const msg = document.querySelector("#msg-log-in");

    const params = {
        sentFirst: first.value,
        sentLast: last.value,
        sentPassword: pass.value
    }

    let query = Object.keys(params).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&');
    let queried_uri = contacts_uri + "?" +  query;
    console.log(queried_uri);


    const response = await fetch(queried_uri )
    .then(response => response.text());

    const formatted = response === "" ? {} : JSON.parse(response);

    if (Object.keys(formatted).length === 0 && formatted.constructor === Object) {
        console.log("Not Allowed.");
        // do not allow:
            pass.style.borderColor = "red";
            pass.value = "";
            first.style.borderColor = "red";
            first.value = "";
            last.style.borderColor = "red";
            last.value = "";

            msg.textContent = "Incorrect Username or Password...Try Again!"
            msg.style.color = "red";
    } else {
        console.log(formatted);
        msg.textContent = "Excellent! Redirecting to Message Board... "
        msg.style.color = "var(--earth-green)";
        pass.style.borderColor = "red";
        pass.value = "";
        first.style.borderColor = "black";
        first.value = "";
        last.style.borderColor = "black";
        last.value = "";
        setTimeout(() => 
        window.location.replace("./message-board.html"), 3000);
        
    }
    
}
