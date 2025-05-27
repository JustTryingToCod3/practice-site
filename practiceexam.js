class Question {
  constructor (prompy, correctAnswer) {
    this.prompt = prompt;
    this.correctAnswer = correctAnswer;
  }
  checkAnswer(userInput) {
    return userInput.trim().toLowerCase() === this.correctAnswer.toLowerCase(); 
  }
}
