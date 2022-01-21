class Translate {
    constructor(word, lang) {
        this.apikey = "AIzaSyBcCSoY8v1LpxseNSGkMR8KsvwHaH4VHsw";
        this.word = word;
        this.lang = lang;

        //XHR object
        this.xhr = new XMLHttpRequest();
    }
    translateword(callback) {
        const endpoint = `https://translation.googleapis.com/language/translate/v2?key=${this.apikey}`; //BABA ENDPOİNT YOK
        let body = {
            "source": `tr`,
            "target": `${this.lang}`,
            "q": `${this.word}`
        };


        console.log(body);
        fetch(endpoint, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => {
                var jsonResult = response.json();
                jsonResult.then((responsem) => {
                    let transletedText = responsem.data.translations[0].translatedText;
                    document.getElementById("outputWord").textContent = transletedText;
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    changeParameters(newWord, newLanguage) {

        this.word = newWord;
        this.lang = newLanguage;
    }
    
}




// this.xhr.open("POST",endpoint);

// this.xhr.setRequestHeader("Content-type","application/json");
// this.xhr.onload = function(){
//     if(this.xhr.status === 200){
//       const json = JSON.parse(this.xhr.responseText);
//       const text = json.text[0];

//       callback(null,text);
//     }
//     else{
//         callback("hata",null);
//     }
// }



//  var data=this.xhr.responseText;
//  var jsonResponse = JSON.parse(data);
//  console.log(jsonResponse["data"]);