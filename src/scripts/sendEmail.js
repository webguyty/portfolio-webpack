const emailSubmit = document.getElementById("form");

emailSubmit.addEventListener("submit", sendEmail);

function sendEmail(e) {
  e.preventDefault();
  const name = document.getElementById("form_name").value;
  const email = document.getElementById("form_email").value;
  const phone = document.getElementById("form_phone").value;
  const message = document.getElementById("form_message").value;

  console.log(name, email, phone, message);

  fetch("https://ujsa21iwz0.execute-api.us-west-2.amazonaws.com/sendEmail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, phone, message }),
  })
    .then((res) => res.json())
    .then((data) => console.log("Success", data))
    .catch((err) => console.log("error", err));
}
