var speechRecognition = window.webkitSpeechRecognition;

var recognition = new speechRecognition();

var textbox = $("#textbox");

var content = '';

recognition.continuous = true;



$("#start-btn").click(function(event){

    if(content.length){
     content+= '';   
    }

    recognition.start()
   
    recognition.onresult = function (event){
       
        var current = event.resultIndex;
       
        var transcript = event.results[current][0].transcript;
    
        content+= transcript;
    
        textbox.val(content);
    
    }

    

});

$("#stop-btn").click(function(event){
    recognition.stop();
});