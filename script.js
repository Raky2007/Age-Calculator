function calculateAge() {
  let birthdate = document.getElementById("birthdate").value;
  
  if (!birthdate) {
      document.getElementById("result").innerText = "Please enter your date of birth!";
      return;
  }

  let birthDateObj = new Date(birthdate);
  let currentDate = new Date();
  
  let age = currentDate.getFullYear() - birthDateObj.getFullYear();
  let monthDiff = currentDate.getMonth() - birthDateObj.getMonth();
  let dayDiff = currentDate.getDate() - birthDateObj.getDate();

  // Adjust age if the birthday hasn't occurred yet this year
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
  }

  document.getElementById("result").innerText = `You are ${age} years old! 🎉`;
}
