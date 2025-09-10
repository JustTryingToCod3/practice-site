class GenRead extends Deck {
  constructor() {
    super();
    this.headP = Math.floor(Math.random() * Deck.headerMessages().length);
    this.supP = Math.floor(Math.random() * Deck.supportingMessages().length);
    this.pastP = Math.floor(Math.random() * Deck.past().length);
    this.presentP = Math.floor(Math.random() * Deck.present().length);
    this.futureP = Math.floor(Math.random() * Deck.future().length);
    this.encourageP = Math.floor(Math.random() * Deck.encourage().length);
    
    //HTML BUTTONS 
    this.genReadingBtn = document.getElementById("genreading"); //general reading button
    this.ppfBtn = document.getElementById("ppf"); //Past present future button 
    this.mainP = document.getElementById("mainp"); //main paragraph
    this.supP = document.getElementById("supP"); // supporting paragraph and past paragraph
    this.present = document.getElementById("present"); //present paragraph
    this.future = document.getElementById("future"); //future paragraph
    this.encourageBtn = document.getElementById("encourage"); //encouragement button 
    this.encouragement = document.getElementById("encouragement"); //encouragement paragraph 
  }

  general() {
    document.getElementById("mainp").innerHTML = this.headP;
    document.getElementById("supP").innerHTML = this.supP;
  }

  ppf() {
    document.getElementById("supP").innerHTML = this.pastP;
    document.getElementById("present").innerHTML = this.presentP;
    document.getElementById("future").innerHTML = this.futureP;
  }

  encourage() {
    document.getElementById("encouragement").innerHTML = this.encourageP;
  }
}

let getRead = new GenRead();

getRead.genReadingBtn.addEventListener("click", () => getRead.general());
getRead.ppfBtn.addEventListener("click", () => getRead.ppf());
getRead.encourageBtn.addEventListener("click", () => getRead.encourage());
