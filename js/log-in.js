const contacts_uri = 'http://localhost:5050/api/permission';

async function val(){
    const pass = document.querySelector('#password');
    const first = document.querySelector('#first-name');
    const last = document.querySelector('#last-name');

    const perm = {
        sentFirst: first.value,
        sentLast: last.value,
        sentPassword: pass.value
    }

    console.log(perm);

    const xx = await fetch(contacts_uri, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(perm)
      })
    .then(data => {
        if (data[0] == null) {
            console.log(data);
            // do not allow:
            pass.style.borderColor = "red";
            pass.value = "";
            first.style.borderColor = "red";
            first.value = "";
            last.style.borderColor = "red";
            last.value = "";
            return false;
        } else {
            window.location.replace("./message-board.html");
        }
    })
    .catch(error => console.error(error));
    return true;

}
