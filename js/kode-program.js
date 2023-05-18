function writeSend() {
  event.preventDefault();

  var output = document.getElementById("output");
  var name = document.getElementById("form-name").value;
  var email = document.getElementById("form-email").value;
  var message = document.getElementById("form-message").value;
  var outputText =
    "<h4>Thanks for your response!</h4>" +
    "<br>" +
    "Hello my name is " +
    name +
    "<br>" +
    "My email is " +
    email +
    "<br>" +
    "This is my message :  " +
    message;

  output.innerHTML = outputText;
}

function showTextArea() {
  const alignContent = document.getElementById("align-content");
  const textArea = document.getElementById("textArea");
  const editButton = document.getElementById("edit");

  textArea.style.display = "block";
  textArea.value = alignContent.textContent.trim();
  alignContent.style.display = "none";
  edit.textContent = "Save";
  edit.onclick = saveChanges;
}

function saveChanges() {
  const alignContent = document.getElementById("align-content");
  const textArea = document.getElementById("textArea");
  const editButton = document.getElementById("edit");

  alignContent.textContent = textArea.value;
  alignContent.style.display = "block";
  textArea.style.display = "none";
  edit.textContent = "Edit";
  edit.onclick = showTextArea;
}
