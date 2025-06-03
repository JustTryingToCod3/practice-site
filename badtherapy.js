function BadTherapy(score) {
  // A string of messages to be returned as the result if it is between a specific range
  const messages = [
    { min: 20, max: 24, text: "You just like to fuck around and find out." },
    { min: 25, max: 28, text: "You are a disappointment to anyone who tries to love you. Dust yourself off. You're the only one who can." },
    { min: 29, max: 32, text: "You aren't an introvert. You just say that when you don't like the person you're talking to." },
    { min: 33, max: 36, text: "You can't cope with how irrelevant you are. You are only good enough to be a disappointment." },
    { min: 37, max: 40, text: "Happiness is chasing you, but you are fast." },
    { min: 41, max: 44, text: "You don't enable other people's bad behavior because you're kind. You want to see them destroy themselves so you can save them." },
    { min: 45, max: 48, text: "You love to be the hero, but you'd rather pretend to be the victim than accept when you're the villain."  },
    { min: 49, max: 52, text: "You secretly enjoy the pain of others. Stop pretending to be sad and just laugh in their face already." },
    { min: 53, max: 56, text: "I know your kinks are rare, but there's nothing to be ashamed of..." },
    { min: 57, max: 60, text: "Stop pretending to be an altruist. We both know you don't care about these people." },
    { min: 61, max: 64, text: "You will never escape the broke mentality." },
    { min: 65, max: 68, text: "You pretend to have it all together, but secretly want someone to save you. Grow up." },
    { min: 69, max: 72, text: "There is no reason to pretend you are a person of virtue when you are not." },
    { min: 73, max: 76, text: "No one truly likes talking to you. They just talk to you because they feel bad for you." },
    { min: 77, max: 80, text: "You will never achieve what you want in life and you already know that." },
    { min: 81, max: 84, text: "Everyone already knows you are an imposter..." },
    { min: 85, max: 88, text: "You lie to others, lie to yourself, and even your heart lies to you. Love will never find you." },
    { min: 89, max: 92, text: "Everyone walks on eggshells around you. You're a ticking time bomb." },
    { min: 93, max: 96, text: "Unfortunately you are so transparent, others can see more of you than you can see of yourself." },
    { min: 97, max: 100, text: "Stop fucking around and get a personality." }
  ];  

  const match = messages.find(msg => score >= msg.min && score <= msg.max);
  return match ? match.text : "You are beyond help.";
}
document.getElementById("personality-quiz").addEventListener("submit", function(e) {
  e.preventDefault(); // prevent page reload
  let total = 0;
  for (let i = 1; i <= 20; i++) {
    const val = parseInt(document.getElementById("ques" + i).value);
    if (!isNaN(val)) total += val;
  }
  const result = BadTherapy(total);
  document.getElementById("therapy-output").innerText = `${result}`;
});
