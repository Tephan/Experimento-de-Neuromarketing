var valor = new Array();
var num = new Array();
var cont = 0;
var bandera = false;
var emax = []
var e1 = []
var e2 = []
let etd1 = []
let etd2 = []
let datos = []
var zero = '';
var cuestionario = localStorage.getItem("ID");
var fin
var duracion

function procesar(){
    var dim = 0;
    switch (cuestionario) {
        case 'em':
            dim=13;
            guadar1()
            if(comprobar(dim)){
                console.log(emax)
                window.open('eleccion1', "_self");
            }
            break;
        case 'ct1':
            dim = 15;
            guadar2()
            if(comprobar(dim)){
                console.log(etd1)
                window.open('intermedio', "_self");
            }
            break;
        case 'ct2':
            dim = 15;
            guadar3()
            if(comprobar(dim)){
                console.log(etd2)
                window.open('gracias', "_self");
            }
            break;
        case 'cd':
            dim = 7;
            guardar4()
            if(comprobar(dim)){
                console.log(datos)
                window.open('resolver', "_self");
            }
            break;
        case 'e1':
            dim = 1;
            guardar5()
            if(comprobar(dim)){
                console.log(e1)
                window.open('etd', "_self");
            }
            fin = new Date;
            duracion = fin-inicio
            console.log('El usuario tardó',duracion,' milisegundos, y ',(duracion)*0.001,' segundos')
            break;
        case 'e2':
            dim = 1;
            guardar6()
            if(comprobar(dim)){
                console.log(e2)
                window.open('etd', "_self");
            }
            fin = new Date;
            duracion = fin-inicio
            console.log('El usuario tardó',duracion,' milisegundos, y ',(duracion)*0.001,' segundos')
            break;
        default:
            console.log('Error con tipo de pagina')
            break;
    }

}

function guadar1(){
    emax[0]= document.test.n1.value;
    emax[1]= document.test.n2.value;
    emax[2]= document.test.n3.value;
    emax[3]= document.test.n4.value;
    emax[4]= document.test.n5.value;
    emax[5]= document.test.n6.value;
    emax[6]= document.test.n7.value;
    emax[7]= document.test.n8.value;
    emax[8]= document.test.n9.value;
    emax[9]= document.test.n10.value;
    emax[10]= document.test.n11.value;
    emax[11]= document.test.n12.value;
    emax[12]= document.test.n13.value;
    valor=emax;
}

function guadar2(){
    etd1[0]=document.test.n1.value;
    etd1[1]=document.test.n2.value;
    etd1[2]=document.test.n3.value;
    etd1[3]=document.test.n4.value;
    etd1[4]=document.test.n5.value;
    etd1[5]=document.test.n6.value;
    etd1[6]=document.test.n7.value;
    etd1[7]=document.test.n8.value;
    etd1[8]=document.test.n9.value;
    etd1[9]=document.test.n10.value;
    etd1[10]=document.test.n11.value;
    etd1[11]=document.test.n12.value;
    etd1[12]=document.test.n13.value;
    etd1[13]=document.test.n14.value;
    etd1[14]=document.test.n15.value;
    valor=etd1;
}

function guadar3(){
    etd2[0]=document.test.n1.value;
    etd2[1]=document.test.n2.value;
    etd2[2]=document.test.n3.value;
    etd2[3]=document.test.n4.value;
    etd2[4]=document.test.n5.value;
    etd2[5]=document.test.n6.value;
    etd2[6]=document.test.n7.value;
    etd2[7]=document.test.n8.value;
    etd2[8]=document.test.n9.value;
    etd2[9]=document.test.n10.value;
    etd2[10]=document.test.n11.value;
    etd2[11]=document.test.n12.value;
    etd2[12]=document.test.n13.value;
    etd2[13]=document.test.n14.value;
    etd2[14]=document.test.n15.value;
    valor=etd2;
}


function guardar4(){
    datos[0]=document.test.n1.value;
    datos[1]=document.test.n2.value;
    datos[2]=document.test.n3.value;
    datos[3]=document.test.n4.value;
    datos[4]=document.test.n5.value;
    datos[5]=document.test.n6.value;
    datos[6]=document.test.n7.value;
    valor=datos;
}

function guardar5(){
    e1[0]=localStorage.getItem("Elegido1");
    valor = e1;
}

function guardar6(){
    e2[0]=localStorage.getItem("Elegido2");
    valor = e2;
}

function comprobar(dim){
    var d
    for (i = 0; i < dim; i++) {
        d = valor[i];
        if(d){
                cont++;
        }
        else{
                console.log(i+' Esta vacio');
            }
        }

    if(cont<(dim)){
        alert('Complete la tarea, por favor.');
    }
    else{
        bandera = true;
        console.log('Tarea finalizada sasfactoriamente');
    }
    return bandera;
}
