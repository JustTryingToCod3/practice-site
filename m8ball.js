function WiseBalls() {
    var responses = [
        'Absolutely!',
        'What do you think?',
        'I think we both know the answer to this...',
        'Yes?',
        'HAHAHAHAHA!!!! Why would you even ask?',
        'Eh... No!',
        'It is your DESTINY!!!',
        'No?',
        'You Just Broke your Future',
        'Your future is hazy',
        'No, but you will be',
        'You will have everything you desire',
        'Not right now',
        'You can try... I highly doubt it will work',
        'Your ability to manifest this is nonexistent',
        'Do not even try',
        'Give it your best shot!',
        'We will see when we get home',
        'All your wishes will be fulfilled',
        'Watch your back',
        'I Read your horoscope... It is best for you not to know...',
        'I know you are but what am I?',
    ];
    var response = responses[Math.floor(Math.random() * responses.length)];
    document.getElementById('outputDiv').innerHTML = response;
}
//This was just transferred over from my previous web development assignment
