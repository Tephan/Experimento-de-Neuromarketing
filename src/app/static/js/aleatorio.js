'use strict'

let productos=['Frituras', 'Cacahuates', 'Mermeladas', 'Galletas', 'Jugos', 'Palomitas']
let nomProd=[['Cheetos Flamin Hot','Cheetos Torciditos', 'Chips Fuego', 'Chips Jalapeño','Chips Sal','Churrumais','Fritos Limón y Sal','Doritos Nacho','Rancheritos','Runners','Sabritas Adobadas','Sabritas Limón','Sabritas Sal','Takis Fuego','Takis Original','Ninguna'],
            ['Mafer Tostado sin sal','Mafer Tostado Sazonado','Mafer Surtido Salado','Mafer Enchilado','Mafer Surtido Enchilado','Mafer Salado','Mafer Mexicalisímo','Mafer Japonés Limón','Mafer Japonés Clásico','Kacang Sal y Limón','Kacang Enchilado','Hot Nuts Original','Golden Nuts Salados','Golden Nuts Japonés','Golden Nuts Enchilados', 'Ninguna'],
            ['La Costeña Chabacano','La Costeña Fresa','La Costeña Piña','La Costeña Zarzamora','McCORMICK Balance Fresa','McCORMICK Balance Zarzamora','McCORMIC Chile Morita','McCORMICK Habanero','McCORMICK Chile Pasilla','McCORMICK Zarzamora','McCORMICK Fresa','McCORMICK Mango','McCORMICK Piña','Selecto Fresa','Selecto Zarzamora','Ninguna'],
            ['Emperador Chocolate','Emperador Combinado','Emperador Limón','Barritas Fresa','Barritas Moras','Barritas Piña','Canelitas','Chokis','Senzo','Sponch','Triki-trakes','Galleta Gansito','Oreo','Polvorones','Principe','Ninguna'],
            ['del Valle Nectar Durazno','del Valle Néctar Mango','del Valle Néctar Manzana A','del Valle Néctar Manzana R','del Valle Néctar Naranja','del Valle Naranja','del Valle Manzana Roja','Jumex Durazno','Jumex Mango','Jumex Manzana Amarilla','Jumex Uva','Jumex Piña','Jumex Unico Manzana R','Jumex Unico Naranja','Jumex Unico Toronja','Ninguna'],
            ['ACT II Inferno','ACT II Queso Xtremo','ACT II Sal y Oliva','ACT II Pimienta y Limón','ACT II Natural','ACT II Mantequilla','ACT II Extra Mantequilla','Sabritas Natural','Sabritas Extra Mantequilla','Great Value Cheddar','Great Value Matequilla','Great Value Natural','ACT II Fusión Picante','ACT II Manzana y Canela','Ninguna']]
let cantidad=[]

let ruta1=[]
let ruta2=[]

let serie = []

function shuffleArray(inputArray){
    inputArray.sort(()=> Math.random() - 0.5);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

function shuffleNum(){
    let arr=[]
    for (let i = 1; i <= 15; i++) {
        arr.push(i)
    }
    shuffleArray(arr)
    return arr
}

function generarRuta(prod,numw) {
    var base = 'images/'
    if(numw<9 && numw>1){
        serie = shuffleNum()
        console.log(prod,' ',cantidad[1])
        for (let c = 1; c< cantidad[1]; c++) {
            ruta1.push(base+prod+'/'+serie[c-1]+'.jpg')
        }
        ruta1.push(base+prod+'/n.jpg')
    }else if(numw<=15 && numw>8){
        serie = shuffleNum()
        console.log(prod,' ',cantidad[2])
        for (let c = 1; c< cantidad[2]; c++) {
            ruta2.push(base+prod+'/'+serie[c-1]+'.jpg')
        }
        ruta2.push(base+prod+'/n.jpg')
    }else{
        console.log('Número de alternativas incorrecto')
    }
}

function crearImagen(c,eleccion){
    for (let i = 1; i <= c; i++) {
        var str=''
        var ids='r'+i
        var imagen = document.getElementById(ids)
        imagen.class = 'im'
        imagen.width = 150
        imagen.height = 200
        if(eleccion == 1){
            str+='div_'+i
            imagen.src  = ruta1[i-1]
            if(i<c){
                imagen.alt=nombrar(productos[0],serie[i-1])
            }else{
                imagen.alt=nombrar(productos[0],16)
            }
            var d = document.getElementById(str)
            d.appendChild(imagen)
        }else{
            var prd=localStorage.getItem('Producto2');
            str=String('div_'+i)
            imagen.src  = String(ruta2[i-1])
            if(i<c){
                imagen.alt=nombrar(prd,serie[i-1])
            }else{
                imagen.alt=nombrar(prd,16)
            }
            var d = document.getElementById(str)
            d.appendChild(imagen)
        }
    }
}

function nombrar(p,nom){
    var valor
    switch (p) {
        case 'Frituras':
            valor=nomProd[0][nom-1]
            break;
        case 'Cacahuates':
            valor=nomProd[1][nom-1]
            break;
        case 'Mermeladas':
            valor=nomProd[2][nom-1]
            break;
        case 'Galletas':
            valor=nomProd[3][nom-1]
            break;
        case 'Jugos':
            valor=nomProd[4][nom-1]
            break;
        case 'Palomitas':
            valor=nomProd[5][nom-1]
            break;
        default:
            console.log('Algo salio mal con el tipo de producto')
            break;
    }
    return valor
}

function main(){
    var iden=localStorage.getItem("ID")

    if(iden=='e1'){
        shuffleArray(productos)
        localStorage.setItem("Producto2", productos[1])
        console.log('Es la pagina '+iden)
        cantidad[1]= getRandomInt(3,9)
        localStorage.setItem("NumOpc1",cantidad[1]);
        generarRuta(productos[0],cantidad[1])
        console.log(ruta1)
        crearImagen(cantidad[1],1)
    }else if(iden=='e2'){
        var p=localStorage.getItem("Producto2")
        console.log('Es la pagina '+iden)
        cantidad[2]=getRandomInt(9,16)
        localStorage.setItem("NumOpc2",cantidad[2]);
        generarRuta(p,cantidad[2])
        console.log(ruta2)
        crearImagen(cantidad[2],2)
    }else{
        console.log('Error con el ID de la página')
    }

}

main()
