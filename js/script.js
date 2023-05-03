//DIFERENÇA ENTRE LET/VAR/CONST
// var nome = "Kayque";
// if(nome == "Kayque"){
//     let nome = "Denise";
// }
// console.log(nome);

 //Recuperando um elemento button que está no index.html
 const btn  = document.getElementById("meu-btn");
 console.log(btn.textContent);

 //Atrelando um evento de click ao button que foi recuperado.
 btn.addEventListener("click" , function(){
    //console.log(btn.innerHTML);                     //pode usar no lugar do btn o this
                                 //innerHTML trabalha com as tags diferente de textContent
    
    //Função Matematica - Math
    //randon = gera números aleatórios enre 0 e 1. Ex: 0.232323;
    //floor  = arredonda o número para baixo.
    //ceil   = arredonda o número para cima.
    //round  = arredonda o número aleatóriamente.
    let l,g,b;

    r = Math.round(Math.random() *255);
    g = Math.round(Math.random() *255);
    b = Math.round(Math.random() *255);

    //Adicionando um atributo ao elemeno button
    //this.setAttribute("nome do atributo" , "valor do atributo");
    this.setAttribute("style", `background-color:rgb(${r},${g},${b});`);
            //contenação e interpolação

} );

//DESAFIO
//Recupere o elemento tit-sec e atrele a ele um evento de mmouse a sua escolha.
// Altere a cor de fundo e a cor do texto quando o evento ocorer.

const tit  = document.getElementById("tit-2");
//const tit = document.querySelector(".tit-sec");  -  pegar pela classe - mas so pega o 1 elemento
// no lugar do .tit.-sec vc pode colocar qualquer objeto como só h2
console.log(tit.textContent);

tit.addEventListener("click" , function(){

    let l,g,b;

    r = Math.round(Math.random() *255);
    g = Math.round(Math.random() *255);
    b = Math.round(Math.random() *255);

    this.setAttribute("style", `background-color:rgb(${r},${g},${b});color:#fff;`);

} );