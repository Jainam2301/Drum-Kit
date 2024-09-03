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
                var audio1= new Audio('./sounds/crash.mp3');
                audio1.play();
                break;
            
            case "a":
                var audio2= new Audio('./sounds/kick-bass.mp3');
                audio2.play();
                break;
            
            case "s":
                var audio3= new Audio('./sounds/snare.mp3');
                audio3.play();
                break;

            case "d":
                var audio4= new Audio('./sounds/tom-1.mp3');
                audio4.play();
                break;

            case "j":
                var audio5= new Audio('./sounds/tom-1.mp3');
                audio5.play();
                break;

            case "k":
                var audio6= new Audio('./sounds/tom-3.mp3');
                audio6.play();
                break;

            case "l":
                var audio7= new Audio('./sounds/tom-4.mp3');
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


/*function add(n1,n2){
    console.log(n1+n2);
}

function multi(n1,n2){
    console.log(n1*n2);
}

function ans(n1,n2,operator){
    return operator(n1,n2);
}

ans(2,3,add);*/

/*var bellboy1 = new BellBoy("Max",20,true,["Gujarati","English"]);
console.log(`Name: ${bellboy1.name}, Age: ${bellboy1.age}, Male: ${bellboy1.boy}, Language: ${bellboy1.language}`);

function BellBoy(name,age,boy,language){
    this.name=name;
    this.age=age;
    this.boy=boy;
    this.language=language;
    this.clean=function(){alert("Cleaning in progress!")};
}
bellboy1.clean();*/