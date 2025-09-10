Class GenRead extends Deck {
  genRead{
    super();
    this.headM = Math.floor(Math.random()*Deck.headerMessages().length);
    this.supM = Math.floor(Math.random()*Deck.supportingMessages().length);
    this.Past = Math.floor(Math.random()*Deck.past().length);
    this.present = Math.floor(Math.random()*Deck.present().length);
    this.future = Math.floor(Math.random()*Deck.future().length);
    this.encourage = Math.floor(Math.random()*Deck.encourage().length);
    
    //HTML BUTTONS 
    this.genReadingBtn = document.getElementById("genreading"); //general reading button
    this.ppfBtn = document.getElementById("ppf"); //Past present future button 
    this.mainP = document.getElementById("mainp"); //main paragraph
    this.supP = document.getElementById("supP"); // supporting paragraph and past paragraph
    this.present = document.getElementById("present"); //present paragrapg
    this.future = document.getElementById("future"); //future paragraph
    this.encourageBtn = document.getElementById("encourage"); //encouragement button 
    this.encouragement = document.getElementById("encouragement"); //encouragement paragraph 
  }
  general(){
      document.getElementById("demo").innerHTML = this.headM;
    
  }
  ppf(){
    
  }
  encourage(){
    
  }
  
}

let getRead = new GenRead();


genReadingBtn.addEventListener("click", getRead.general(){});
ppfBtn.addEventListener("click", getRead.ppf(){});
encourageBtn.addEventListener("click", getRead.encourage(){});


