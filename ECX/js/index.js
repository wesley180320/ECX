const mudar1 = () => {

  let a =  document.getElementById("lista1").style.display;

  if(a == 'block'){

    document.getElementById("lista1").style.display = "block";
    document.getElementById("lista2").style.display = "none";

  }else{

    document.getElementById("lista1").style.display = "block";
    document.getElementById("lista2").style.display = "none";

  }

}


const mudar2 = () => {

  let b = document.getElementById("lista2").style.display;


  if(b = "none"){

      document.getElementById("lista2").style.display = "block";
      document.getElementById("lista1").style.display = "none";

  }else{

      
      document.getElementById("lista2").style.display = "block";
      document.getElementById("lista1").style.display = "none";


  }
}

    /* ------------------------------------------------------------ */



    const form1 = () => {

      let form = document.getElementById("form1").style.display;

      if (form == "block"){


        document.getElementById("form1").style.display = "block";
        document.getElementById("form2").style.display = "none";

      }else{

        document.getElementById("form1").style.display = "block";
        document.getElementById("form2").style.display = "none";

      }

    }


    const form2 = () => {

      let form = document.getElementById("form2").style.display;


      if( form == "none"){

        document.getElementById("form2").style.display = "block";
        document.getElementById("form1").style.display = "none";
        
      }else{

        
        document.getElementById("form2").style.display = "block";
        document.getElementById("form1").style.display = "none";

      }
    }

 /*--------------------------------------------------------------*/
 


 const  beneficios = async(valor , beneficio) =>{
 if(beneficio.dataset.value != valor){
        beneficio.dataset.value = valor;
        setTimeout(function(){
        document.querySelectorAll(".beneficios #"+beneficio.dataset.id+"2.lista-block, .beneficios[data-value = 'is_colaborador'] #"+beneficio.dataset.id+"1.lista-block, .beneficios #"+beneficio.dataset.id+"1.lista-none, .beneficios[data-value = 'is_colaborador']  #"+beneficio.dataset.id+"2.lista-none").forEach(function(element, index, array){
          if(element.classList == "lista-none"){
            element.classList = "lista-block";
          }else{
            element.classList = "lista-none";
          }
        });
      },1000);
      }
 } 


 var acesso = true;
 function mudarBeneficio(valor){
   if(acesso == true){
    acesso = false;
    dataValue = document.querySelectorAll(".beneficios");
    dataValue.forEach(function(beneficio){
      beneficios(valor,beneficio);
    });
    setTimeout(function(){
      acesso = true;
    }, 1000);
  }
    
 }