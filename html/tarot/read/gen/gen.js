class GenRead extends Deck {
  constructor() {
    super();
    this.headP = Deck.headerMessages()[Math.floor(Math.random() * Deck.headerMessages().length)];
    this.supP = Deck.supportingMessages()[Math.floor(Math.random() * Deck.supportingMessages().length)];
    this.pastP = Deck.past()[Math.floor(Math.random() * Deck.past().length)];
    this.presentP = Deck.present()[Math.floor(Math.random() * Deck.present().length)];
    this.futureP = Deck.future()[Math.floor(Math.random() * Deck.future().length)];
    this.encourageP = Deck.encourage()[Math.floor(Math.random() * Deck.encourage().length)];

    //HTML BUTTONS 
    this.genReadingBtn = document.getElementById("genreading");
    this.ppfBtn = document.getElementById("ppf");
    this.mainP = document.getElementById("mainp");
    this.supPEl = document.getElementById("supP");  // renamed to avoid conflict with message
    this.presentEl = document.getElementById("present");
    this.futureEl = document.getElementById("future");
    this.encourageBtn = document.getElementById("encourage");
    this.encouragementEl = document.getElementById("encouragement");
  }

  general() {
    this.mainP.innerHTML = this.headP;
    this.supPEl.innerHTML = this.supP;
  }

  ppf() {
    this.supPEl.innerHTML = this.pastP;
    this.presentEl.innerHTML = this.presentP;
    this.futureEl.innerHTML = this.futureP;
  }

  encourage() {
    this.encouragementEl.innerHTML = this.encourageP;
  }
}
