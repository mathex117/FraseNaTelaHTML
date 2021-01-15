for(var i = 0; i < 10; i++){
    var cor1 = (Math.floor(Math.random()*256)).toString(16);
    var cor2 = (Math.floor(Math.random()*256)).toString(16);
    var cor3 = (Math.floor(Math.random()*256)).toString(16);

    var paragrafo = document.createElement("p");
    paragrafo.innerText = "Hello World";
    paragrafo.style.color = "#"+cor1+cor2+cor3;

    console.log((Math.floor(Math.random()*256)).toString(16)); 
    document.body.appendChild(paragrafo);
}