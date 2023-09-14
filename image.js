var Indexvalue=1;
ShowSlider(Indexvalue);
function Slider_btn(n){ShowSlider(Indexvalue=n)}
function Side_Slide(n){ShowSlider(Indexvalue+=n)}
function ShowSlider(n){
    var i;
    const images=document.querySelectorAll('img');
    const sliders=document.querySelectorAll('.counter span');
    if(n>images.length){
        Indexvalue=1;
    }
    if(n<1){
        Indexvalue=images.length;
    }
    for(i=0; i < images.length; i++){
        images[i].style.display="none"
    }
    for(i=0; i < images.length; i++){
        sliders[i].style.background="#222"
    }
    images[Indexvalue-1].style.display="block";
    sliders[Indexvalue-1].style.background="#fff";
}