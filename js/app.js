consultarAPI();
function consultarAPI(){
    const url = `../data.json`;
    fetch(url)
    .then( respuesta => respuesta.json())
    .then(resultado => imprimirResultados(resultado));

}
function imprimirResultados(arr){
    const bars = document.querySelectorAll(".bar");
    const barsP = document.querySelectorAll(".bar__p");
    const barsBlock = document.querySelectorAll(".bar__block");
    for(let i = 0;  i< bars.length; i++){
        barsP[i].textContent = arr[i].day;
        barsBlock[i].textContent = `$${arr[i].amount}`;
        bars[i].addEventListener("mouseover",()=>{
            barsBlock[i].style.opacity = "1";
        });
        bars[i].addEventListener("mouseout",()=>{
            barsBlock[i].style.opacity = "0";
        });
    }
}
