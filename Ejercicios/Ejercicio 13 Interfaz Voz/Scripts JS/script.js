var speechRecognition = window.webkitSpeechRecognition;

var recognition = new speechRecognition();

var textbox = $("#textbox");

var content = '';

recognition.continuous = true;

//
recognition.onresult = function (event){
    var current = event.resultIndex;

    var transcript = event.results[current][0].transcript;

    content+= transcript;

    textbox.val(content);
}

$("#start-btn").click(function(event){

    if(content.length){
     content+= '';   
    }

    recognition.start()

});