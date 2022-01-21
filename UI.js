class UI {
    constructor() {
        this.outputImage = document.getElementById("outputImage");
        this.outputLanguage = document.getElementById("outputLanguage");
        this.outputWord = document.getElementById("outputword");

        this.languageList = document.getElementById("language");
    }
    ChangeUI() {
        //Arayüz değiştir
        this.outputImage.src = `images/${this.languageList.value}.png`;
        this.outputLanguage.innerHTML = this.languageList.options[this.languageList.selectedIndex].textContent;


    }
    displayTranslate() {
        this.outputWord.textContent = word;
    }
}

  