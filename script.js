$(document).ready(function(){
  $("#flipbook").turn({
    width: 550,
    height: 750,
    autoCenter: true
  });
});

function openCover() {
  // Flip the cover to reveal the password page
  $("#flipbook").turn("next");
}

function checkPassword() {
  const input = document.getElementById('passwordInput').value;
  if (input === "JoashManicum") {
    document.querySelectorAll('.locked').forEach(page => {
      page.classList.remove('locked');
    });
    document.getElementById('error').textContent = "Unlocked!";
    document.getElementById('error').style.color = "green";
  } else {
    document.getElementById('error').textContent = "Incorrect password!";
    document.getElementById('error').style.color = "red";
  }
}
