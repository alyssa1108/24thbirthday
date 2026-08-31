function openCover() {
  document.getElementById('cover').style.transform = "rotateY(-180deg)";
  setTimeout(() => {
    document.getElementById('passwordPage').classList.add('active');
  }, 2000); // show password page after cover opens
}

function checkPassword() {
  const input = document.getElementById('passwordInput').value;
  if (input === "JoashManicum") {
    document.querySelectorAll('.locked').forEach(page => {
      page.classList.add('active');
    });
    document.getElementById('error').textContent = "Unlocked!";
    document.getElementById('error').style.color = "green";
  } else {
    document.getElementById('error').textContent = "Incorrect password!";
    document.getElementById('error').style.color = "red";
  }
}

// Trigger cover opening when user clicks it
document.getElementById('cover').addEventListener('click', openCover);
