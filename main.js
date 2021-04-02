
var speechRecognition = window.webkitSpeechRecognition;
var Recognition = new speechRecognition();
function start(){
    document.getElementById("command").innerHTML = "";
    Recognition.start();
}
Recognition.onresult = function run(event){
console.log(event);
var content = event.results[0][0].transcript;
document.getElementById("command").innerHTML=content;
console.log(content);
if(content == "take my selfie"){
  speak();
Webcam.attach( camera );
setTimeout(function(){ snapshot();
save();
}, 5000);

}
};
function speak(){
 var synth=window.speechSynthesis;
 speak_data = "takeing your selfie in five seconds";
 var utterThis = new SpeechSynthesisUtterance(speak_data);
 synth.speak(utterThis);
 
}

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90
  });
camera = document.getElementById("camera");
 
function snapshot(){
  Webcam.snap(function (data_uri){
    document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+ data_uri +'">';
  });
}
function save(){
link= document.getElementById("link");
image = document.getElementById("selfie_image").src;
link.href=image;
link.click();
};