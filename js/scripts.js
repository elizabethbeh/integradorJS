///valor de la entrada
const valorTicket=200;

//descuentos
var estudiante=80;
var trainee=50;
var junior=15;

//capturo datos de los imputs
nombre=document.getElementById("nombre");
apellido=document.getElementById("apellido");
mail=document.getElementById("mail");
cantidad=document.getElementById("cantidadTickets");
categoria=document.getElementById("categoriaSelect");


function reset_total_a_pagar()
{
    //sacar clase error
    totalPago.innerHTML="";
}


function total_a_pagar()
{
    quitarClaseError();

    //verifico nombre
    if(nombre.value==="")
    {
        alert("Verifique nombre");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return;
    }

    //verifico apellido

    if(apellido.value==="")
    {
        alert("Verifique apellido");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }

    if(mail.value==="")
    {
        alert("Verifique correo");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }

     // Para determinar si el correo electrónico es válido o no
     const emailValido = mail => 
     {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
     }

     if(!emailValido(mail.value))
     {
        alert("Verifique mail");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
     }

     if( (cantidadTickets.value<=0) || (isNaN(cantidadTickets.value)) )
     {
        alert("Verifique cantidadTickets");
        cantidadTickets.classList.add("is-invalid");
        cantidadTickets.focus();
        return;
     }

     if(!emailValido(mail.value))
     {
        alert("Verifique mail");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
     }

     if(categoria.value==="")
    {
        alert("Verifique categoria");
        categoria.classList.add("is-invalid");
        categoria.focus();
        return;
    }

    let totalValorTickets=(cantidadTickets.value*valorTicket);

    if(categoria.value==0)
    {
        totalValorTickets=totalValorTickets;
    }

    if(categoria.value==1)
    {
        totalValorTickets=totalValorTickets-(descuentoEstudiante/100*totalValorTickets);
    }

    if(categoria.value==2)
    {
        totalValorTickets=totalValorTickets-(descuentoTrainee/100*totalValorTickets);
    }

    if(categoria.value==3)
    {
        totalValorTickets=totalValorTickets-(descuentoJunior/100*totalValorTickets);
    }

    //inner html
    totalPago.innerHTML=totalValorTickets

}


function quitarClaseError()
{
    let x=document.querySelectorAll(".form-control,.form-select");
    let i;
    for(i=0;i<x.length;i++)
    {
        x[i].classList.remove("is-invalid");
    }
}




//boton borrar
btnBorrar.addEventListener.add("click", reset_total_a_pagar);

//boton resumen
btnResumen.addEventListener.add("click",total_a_pagar);
