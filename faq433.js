let contactList = []; 

function showContacts() {
  let contactText = "";
  for (let i = 0; i < contactList.length; i++) {
    contactText += contactList[i];
    if (i < contactList.length - 1) {
      contactText += ", ";
    }
  }
  document.getElementById("contacts").innerHTML = contactText;
}
function addName() {
  let name = document.getElementById("nameInput").value;

  if (name !== "") {
    if (contactList.length === 7) {
      for (let i = 0; i < 6; i++) {
        contactList[i] = contactList[i + 1];
      }
      contactList[6] = name;
    } else {
      contactList[contactList.length] = name; 
    }

    showContacts();
    document.getElementById("nameInput").value = ""; 
  }
}

function removeName() {
  if (contactList.length > 0) {
    let newn = [];
    for (let i = 0; i < contactList.length - 1; i++) {
      newList[i] = contactList[i];
    }
    contactList = newn;
    showContacts();
  }
}
