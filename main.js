(function(){   
    const listElements = document.querySelectorAll('.menu_item--show');
    const list = document.querySelector('menu_links');
    const menu = document.querySelector('menu_hamburguer')
    
    const addClick = ()=>{
        listElements.forEach(element =>{
            element.addEventListener('click', ()=>{
                
                let subMenu = element.children[1];
                let height = 0;
                element.classList.toggle('menu_item--active');
                                
                if(subMenu.clientHeight === 0){
                    height= subMenu.scrollHeight;
                }
                
                subMenu.style.height = `${height}px`
            });
        });
    }
    
    const deleteStyleHeight = ()=>{
        listElements.forEach(Element=>{
            
            if(Element.children[1].getAttribute('style')){
               Element.children[1].removeAttribute('style');
                Element.classList.remove('menu_item--active');
            }
        });
    }
    
    window.addEventListener('resize', ()=>{
        if(window.innerWidth > 800){
            document.getElementById("menu_links").style.right = "-100px";
        
        }else{
            addClick();
        }
    });
    
    if(window.innerWidth <= 800){
            addClick();
    }
})();



function open_menu() {
    document.getElementById("menu_links").style.right = "0px";
    document.getElementById("close_img").style.display = "block";
    document.getElementById("menu_img").style.display = "none";

}
function close_menu() {
    document.getElementById("menu_links").style.right = "-100%";
       document.getElementById("close_img").style.display = "none";
    document.getElementById("menu_img").style.display = "block";
    
}

// fin menú





// inicio ventana modal

var modal = document.getElementById("ventanaModal");

// Botón que abre el modal
var boton = document.getElementById("abrirModal");

// Hace referencia al elemento <span> que tiene la X que cierra la ventana
var span = document.getElementsByClassName("cerrar")[0];

// Cuando el usuario hace click en el botón, se abre la ventana
boton.addEventListener("click",function() {
  modal.style.display = "block";
});

// Si el usuario hace click en la x, la ventana se cierra
span.addEventListener("click",function() {
  modal.style.display = "none";
});

// Si el usuario hace click fuera de la ventana, se cierra.
window.addEventListener("click",function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// fin ventana modal
