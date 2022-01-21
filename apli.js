//prototype,ajax,callback

EventListener();

function EventListener(){
    document.getElementById("translate-form").addEventListener("submit",translateword)
    
//change
    document.getElementById("language").onchange = function(){
        //arayüz işlemleri
        
        ui.ChangeUI();
        // window.location.reload(UI);

    }


}
const translate = new Translate(document.getElementById("word").value,document.getElementById("language").value)
const ui = new UI()


function translateword(e){
    
    

translate.changeParameters(document.getElementById("word").value,document.getElementById("language").value);
translate.translateword(function(err,response){
    if(err === null){
        console.log(err);
    }
    else{
        ui.displayTranslate(response);
    }
});
    document.getElementById("word").value = null;
    e.preventDefault();
}


console.log(document.forms);