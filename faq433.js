let contactList = [];
function showContacts() {
  document.getElementById("contacts").innerHTML = contactList.join(", ");
}
function addName() {
  let name = document.getElementById("nameInput").value;

  if (name.trim() !== "") {
    if (contactList.length >= 7) {
      contactList.shift(); 
    }
    contactList.push(name); 
    showContacts();
    document.getElementById("nameInput").value = ""; 
  }
}
function removeName() {
  contactList.pop(); 
  showContacts();
}
