//Aca empieza E1 JS
class Pizza {
    constructor(id,nombre,ingredientes,precio){
        this.id=id;
        this.nombre=nombre;
        this.ingredientes=ingredientes;
        this.precio=precio;
    }
}

let tipoPizza=[];
tipoPizza.push(new Pizza(1,'Muzzarella',['Salsa de tomate','Muzzarella'],700));
tipoPizza.push(new Pizza(2,'Especial',['Tomate','Muzzarella','Jamon','Morron','Aceitunas'],1000));
tipoPizza.push(new Pizza(3,'Calabresa',['Muzzarella','Tomate','cantimpalo'],1200));
tipoPizza.push(new Pizza(4,'Napolitana',['Muzzarella','Rodaja de Tomate','Ajo'],1100));
tipoPizza.push(new Pizza(5,'Palmito',['Muzzarella','Jamon','Palmito','Salsa Golf'],1200));
tipoPizza.push(new Pizza(6,'Margarita',['Muzzarella','Tomate','Oregano'],800));
console.log('Listado de Pizzas con id impar:');
for (let i=0;i<tipoPizza.length;i++){
    if ((tipoPizza[i].id % 2)!=0 ){
        console.log('Id:' + tipoPizza[i].id + ' Nombre Pizza: ' + tipoPizza[i].nombre);
    }
}
console.log(' ');
console.log(' ');
if (tipoPizza.some((element)=> element.precio > 600)){
    console.log('Hay al menos una Pizza con valor superior a 600$');
} else {
    console.log('Ninguna Pizza tiene un valor superior a 600$');
}

console.log(' ');
console.log(' ');

console.log('Precios de las Pizzas:');
console.log(' ');
let precioPizza=[];
for (let i=0;i<tipoPizza.length;i++){
        precioPizza.push({Nombre:tipoPizza[i].nombre,Precio:tipoPizza[i].precio});
        //console.table(tipoPizza[i].nombre + ' ' + tipoPizza[i].precio);
 }

console.table(precioPizza);

console.log(' ');
console.log(' ');
console.log('Ingredientes de las Pizzas:');
console.log(' ');

 for (let i=0;i<tipoPizza.length;i++){
    console.log(tipoPizza[i].nombre + ' tiene los siguientes ingredientes:');
    for (let j=0;j<tipoPizza[i].ingredientes.length;j++){
        console.log('   '+tipoPizza[i].ingredientes[j]);
    }
    
    console.log(' ');
    console.log(' ');
}
//Aca finaliza E1 JS

