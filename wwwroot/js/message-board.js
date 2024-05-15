const uri = 'http://localhost:5050/api/contacts';

function populate() {
    const scrollpane = document.querySelector("#contacts-scroll");
  
    fetch(uri)
      .then(response => response.json())
      .then(data => {
        for (let i = 0; i < Math.min(data.length, 20); i++) {
          // Create the card
          const card = document.createElement("div");
          card.style.width = "300px";
          card.style.height = "300px";
          card.style.margin = "10px";
          card.style.padding = "20px";
          card.style.border = "1px solid var(--earth-green)";
          card.style.borderRadius = "10px";
          card.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
          card.style.overflow = "hidden";
  
          // Get the values from the database data
          const userNameValue = data[i].FirstName + " " + data[i].LastName;
          const emailValue = data[i].Email;
          const phoneNumberValue = data[i].PhoneNumber;
          const messageValue = data[i].Msg;
  
          // Create the card contents
          const userName = document.createElement("h3");
          userName.textContent = userNameValue;

          const userEmail = document.createElement("p");
          if (data[i].EmailHide) {
            userEmail.textContent = emailValue;
          } else {
            userEmail.textContent = "User has hidden Email."
          }
          
          const userPhone = document.createElement("p");
          if (data[i].PhoneHide) {
            userPhone.textContent = phoneNumberValue;
          } else {
            userPhone.textContent = "User has hidden Phone#."
          }
          

          const userMessage = document.createElement("div");
          userMessage.style.overflowY = "auto";
          userMessage.style.height = "150px";
          userMessage.textContent = messageValue;
          userMessage.style.border = "1px solid var(--earth-green)";
          userMessage.style.borderRadius = "4px";
          userMessage.style.padding = "4px";
          
          // Add the contents to the card
          card.appendChild(userName);
          card.appendChild(userEmail);
          card.appendChild(userPhone);
          card.appendChild(userMessage);
  
          // Add the card to the scroll pane
          scrollpane.appendChild(card);
        }
      })
      .catch(error => console.error(error));
  }

populate();
