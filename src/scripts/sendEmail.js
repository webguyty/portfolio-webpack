console.log("sendemail is working");
const emailSubmit = document.getElementById("form");

emailSubmit.addEventListener("submit", sendEmail);

function sendEmail(e) {
  e.preventDefault();
  const name = document.getElementById("form_name").value;
  const email = document.getElementById("form_email").value;
  const phone = document.getElementById("form_phone").value;
  const message = document.getElementById("form_message").value;

  console.log(name, email, phone, message);
}
