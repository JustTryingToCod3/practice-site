function WiseBalls() {
    var responses = [
        'Absolutely! 😊',
        'What do you think? 🤔',
        'I think we both know the answer to this... 😔',
        'Yes? 😬',
        'HAHAHAHAHA!!!! Why would you even ask that? 🤡',
        'Eh... No! 😒',
        'It is your DESTINY!!! 🤩',
        'No? 🤨',
        'You Just Broke your Future 😅',
        'Your future is hazy 😶‍🌫️',
        'Maybe 🤷',
        'You will have everything you desire 🎉',
        'Not right now 🚫',
        'You can try... I highly doubt it will work 🤭',
        'Your ability to manifest this is nonexistent 😆',
        'Do not even try 🥱',
        'Give it your best shot! 🫡',
        'Yes, if you keep your mouth shut 🤫 ',
        'All your wishes will be fulfilled 🙄',
        'I am just going to pretend... I dont know the answer we both clearly know 🫣',
        'I Read your horoscope... It is best for you not to know... 🫢',
        'Yeah, absolutely 🤥',
    ];

    var error = "Please enter a question ❓";
    
    var response = responses[Math.floor(Math.random() * responses.length)];
    if(document.getElementById("questionBox").value !== ""){
        document.getElementById('outputDiv').innerHTML = response;
    } else{
        document.getElementById('outputDiv').innerHTML = error;
    }
}
//This was just transferred over from my previous web development assignment with a few edits
