var buttons=document.querySelectorAll('.drum').length;

for(let i=0;i<buttons;i++){
    document.querySelectorAll('.drum')[i].addEventListener("click",function(){
        let txt=this.innerHTML;
        keypressed(txt);
        animation(txt);
    });
}
 function keypressed(key){
    

        switch(key){

            case "w":
                var audio1= new Audio('crash.mp3');
                audio1.play();
                break;
            
            case "a":
                var audio2= new Audio('kick-bass.mp3');
                audio2.play();
                break;
            
            case "s":
                var audio3= new Audio('snare.mp3');
                audio3.play();
                break;

            case "d":
                var audio4= new Audio('tom-1.mp3');
                audio4.play();
                break;

            case "j":
                var audio5= new Audio('tom-1.mp3');
                audio5.play();
                break;

            case "k":
                var audio6= new Audio('tom-3.mp3');
                audio6.play();
                break;

            case "l":
                var audio7= new Audio('tom-4.mp3');
                audio7.play();
                break;

            default:
                console.log(txt);
                break;
        }
 }
 document.addEventListener("keypress",function(event){
    keypressed(event.key);
    animation(event.key);
 });

 function animation(current){
    var active=document.querySelector("."+current);
        active.classList.add("pressed");
    setTimeout(function(){
        active.classList.remove("pressed");
    },100);
    
 }
