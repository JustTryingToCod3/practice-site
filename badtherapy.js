function BadTherapy(score) {
    // An array of objects, each representing a score range and its corresponding message.
  // Each object has:
  //  `min`: the lowest score for that message
  //  `max`: the highest score for that message
  //  `text`: the message to return if the score falls within that range
  const messages = [
    { min: 20, max: 24, text: "Diagnosis: Unassuming; negligible. \nAdvice: Even your responses were predictable. Go ahead... Try again... I dare you..." },
    { min: 25, max: 28, text: "Diagnosis: Cooked \nAdvice: There is nothing anyone can do to help you. You are absolutely mentally fucked." },
    { min: 29, max: 32, text: "Diagnosis: Irrelevant \nAdvice: You can't cope with how irrelevant you are and you never will. You are only good enough to be a disappointment." },
    { min: 33, max: 36, text: "Diagnosis: Self-proclaimed Altruist. \nAdvice: You love to be the hero, but you'd rather pretend to be the victim than accept when you're the villain. It's alright, everyone lies to themselves."},
    { min: 37, max: 40, text: "Diagnosis: Masochist \nAdvice: You tell people you love working hard, but you really just enjoy the hard part of it. Never take a break, you're better than that." },
    { min: 41, max: 44, text: "Diagnosis: Codependent \nAdvice You enable bad behavior because want to see people destroy themselves so you can save them. There is no saving you, you sadist." },
    { min: 45, max: 48, text: "Diagnosis: Not what I asked for \nAdvice: If there was a refund policy on relationships, you'd be a frequently returned item." },
    { min: 49, max: 52, text: "Diagnosis: Mean \nAdvice: You secretly enjoy the pain of others. Stop pretending to be sad and just laugh in their face already." },
    { min: 53, max: 56, text: "Diagnosis: Shame \nAdvice: I know your kinks are rare, but there's nothing to be ashamed of..." },
    { min: 57, max: 60, text: "Diagnosis: Sad \nAdvice: Happiness is chasing you, but you are fast."},
    { min: 61, max: 64, text: "Diagnosis: Broke \nAdvice: Why even Try? You will never escape the broke mentality."},
    { min: 65, max: 68, text: "Diagnosis: What's the point? \nAdvice: I know you secretly want someone to save you. Grow up or give up." },
    { min: 69, max: 72, text: "Diagnosis: Holy Liar \nAdvice: There is no reason to pretend you are a person of virtue. Everyone knows the truth of what you did. Go ahead, keep pretending." },
    { min: 73, max: 76, text: "Diagnosis: Reject \nAdvice: People talk to you because they feel bad. Just never talk to anyone ever again." },
    { min: 77, max: 80, text: "Diagnosis: Underachiever \nAdvice: Give up on your dreams. You will never achieve what you want in life. You already know that." },
    { min: 81, max: 84, text: "Diagnosis: Overachiever \nAdvice: Everyone already knows you're an imposter. They all just accept that you will continue to pretend like you know what you're doing." },
    { min: 85, max: 88, text: "Diagnosis: Defensive \nAdvice: You lie to others, lie to yourself, and even your heart lies to you. You can deny that if you want." },
    { min: 89, max: 92, text: "Diagnosis: Ticking Time Bomb \nAdvice: Everyone walks on eggshells around you. Just crash out already so they know what to expect." },
    { min: 93, max: 96, text: "Diagnosis: Glass human \nAdvice: Unfortunately you are so transparent, others can see more of you than you can see of yourself. Marry someone oblivious." },
    { min: 97, max: 100, text: "Diagnosis: Try-hard \nAdvice: You care too much. Stop fucking around and get a personality." } 
  ]; 
  // Arrow function used inside `.find()` to locate the first object where
  // the score is between the `min` and `max` values (inclusive).
  // Equivalent to:
  // function(msg) {
  //   return score >= msg.min && score <= msg.max;
  // }
  const match = messages.find(msg => score >= msg.min && score <= msg.max);

  // The line below uses the ternary operator ( ? : )
  // Syntax: condition ? valueIfTrue : valueIfFalse
  // In this case:
  // - If `match` is found (truthy), return `match.text`
  // - If not, return "You are beyond help."
  //Shorthand if statement
  return match ? match.text : "You are beyond help.";
}

document.getElementById("persquiz").addEventListener("submit", function(x) {
  x.preventDefault(); 
  // Prevents the default form behavior (page reload) when the submit button is clicked.

  //  Select all <select> dropdown elements inside the form with ID 'persquiz'
  const scanForm = document.querySelectorAll("#persquiz select");
  //  document: The entire loaded HTML page in the browser.
  //  querySelectorAll(): Selects all elements that match the given CSS selector.
  //  "#persquiz select":
  //     - "#persquiz": targets the element with id="persquiz"
  //     - "select": targets all <select> elements inside that form.

  let total = 0; // Initialize total score

  scanForm.forEach(select => { 
    //  forEach(): Loops through each <select> element in the NodeList.
    //  `select`: The current <select> dropdown being looped over.

    const selected = select.value;
    //  select.value: Gets the selected option’s value (as a string).
    //  const selected: Stores the value of the current dropdown.

    //  Only add value if something was selected (not blank)
    if (selected !== "") {
      total += parseInt(selected);
      //  parseInt(): Converts the selected value (a string like "3") into a number.
      //  total += ... : Adds the numeric value to the total score.
    }
  });

  // Get the result text from BadTherapy based on the total score
  const result = BadTherapy(total);

  // Display the result on the page
  document.getElementById("therapy-output").innerText = result;

});

document.getElementById("reset").addEventListener("click", function() {
  document.getElementById("therapy-output").innerText = "";
});



