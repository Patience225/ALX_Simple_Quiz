function checkAnswer() {
  const correctAnswer = "4";
  const userSelection = document.querySelector('input[name="quiz"]:checked');
  const feedbackElement = document.getElementById("feedback");

  if (userSelection) {
      const userAnswer = userSelection.value;
      if (userAnswer === correctAnswer) {
          feedbackElement.textContent = "Correct! Well done.";
          feedbackElement.style.color = "green";
      } else {
          feedbackElement.textContent = "That's incorrect. Try again!";
          feedbackElement.style.color = "red";
      }
  } else {
      feedbackElement.textContent = "Please select an answer!";
      feedbackElement.style.color = "orange";
  }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);
