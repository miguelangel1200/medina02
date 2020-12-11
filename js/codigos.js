function mostrar2(){
    var gas;
        var nitro;
        var oxigeno;
        var DC;
        var Argon;
        var hidro;

        gas=prompt("Ingrese la cantidad de gas")

        nitro = gas*0.78
        oxigeno = gas*0.21
        DC = gas*0.0003
        Argon = gas*0.0094
        hidro = gas*0.0001

        alert("En nitrogeno es: "+nitro.toFixed(3))
        alert("En oxigeno es: "+oxigeno)
        alert("En Dioxido de carbono es: "+DC)
        alert("En argon es: "+Argon)
        alert("En hidrogeno es: "+hidro)

}

function mostrar6(){
        var num;
        var a;
        var b;

        num = prompt("Ingrese el número: ")

        if (num>9 & num<100){
            a = Math.trunc(num/10)
            b = Math.trunc(num%10)
            alert("El número invertido es: "+(10*b+a))
        }
        else{
            alert("No Disponible")
        }

}
function mostrar14(){
        num = prompt("Ingrese un número: ")
        if(num%2==1 & num>99){
            a = Math.trunc(num/100);
            b = Math.trunc((num%100)/10);
            c = Math.trunc((num%10)%10);
            
            inverso = ((100*c)+(10*b)+(a));
            operacion= (parseInt(num)+parseInt(inverso));
            alert("El número incrementado más el invertido es: "+operacion);
        }
        else{
            alert("No es un primo de 3 digitos")
        }
        
}
function mostrar11(){
        cantidad=prompt("Ingrese la cantidad de conos de CD: ");
        precio=100;
        importe=cantidad*precio;
        dscto1=0.05*importe;
        dscto2=0.05*(importe-dscto1);
        dsctototal=dscto1+dscto2;
        alert("El importe de compra es: "+importe)
        alert("El importe de descuento total es: "+dsctototal)
        alert("El importe a pagar es: "+(importe-dsctototal))
}
function mostrar15(){
        num=prompt("Ingrese un numero de dos cifras: ")
        a=Math.trunc(num/10);
        b=Math.trunc(num%10);
        
        if(a==b)
        {
            alert("Capicua");
        }else
        {
            alert("No es Capicua");
        }
}
function mostrar9(){    
    cantidad = prompt("Ingrese la cantidad de gaseosas a comprar: ")
    precio = 15
    descuento1 = 0.05*15
    importe = cantidad*precio

    descuento2 = 0.07*importe
    
    caramelos = cantidad*2
    preciofinal = 15-descuento1
    descuentototal = descuento1+descuento2
    importe_a_pagar = importe-descuentototal

    alert("El nuevo precio de la gaseosa es: "+preciofinal)
    alert("El importe de la compra es: "+importe)
    alert("El importe de descuento es: "+descuentototal.toFixed(2))
    alert("El importe a pagar es: "+importe_a_pagar)
    alert("El obsequio son: "+caramelos+" caramelos")

}
function mostrar10(){
    dia = prompt("Ingrese los dias de estadia: ")
    precio = 15
    importe = dia*precio
    descuento1 = 0.15*importe
    obsequio1 = dia*3
    neto = importe-descuento1
    alert("El importe bruto es: "+importe)
    alert("El importe de descuento es: "+descuento1)
    alert("El importe neto a pagar es: "+neto)
    alert("La cantidad de lapiceros a entrar son: "+obsequio1)
}
function mostrar12(){
    importe_vendido=prompt("Ingrese el importe total vendido del mes: ")
    hijos = prompt("Ingrese la cantidad de hijos en edad escolar: ")
    bonificacion_hijos = 50*hijos
    comision = 0.075*importe_vendido 
    sueldo_bruto = (600)+(comision)+(bonificacion_hijos)
    descuento = 0.11*sueldo_bruto
    neto = sueldo_bruto-descuento

    alert("La comisión es: "+comision)
    alert("La bonificación es: "+bonificacion_hijos)
    alert("El sueldo bruto es: "+sueldo_bruto)
    alert("El sueldo neto es: "+neto.toFixed(2))
}
function mostrar8(){
    num = prompt("Ingrese un número de 4 cifras: ")
    if(num>999 & num<10000){
        a = Math.trunc(num/1000)
        b = (Math.trunc(num/100))%10
        c = Math.trunc((num%100)/10)
        d = Math.trunc(num%10)
        respuesta = a*1000+d*100+b*10+c
        alert("El número formado será: "+respuesta)
    }
}
function mostrar4(){
    let metros;
            metros = prompt("Ingrese la cantidad de metros: ")
            centimetros=metros*100;
            centimetroApulgada=centimetros/2.54;
            alert('Los metros convertido a centimetros de un telar es: ' + centimetros + ' centímetros' )
            alert('Los metros convertido a pulgadas de un telar es: '+ centimetroApulgada.toFixed(2) + ' pulgadas.')
}
function mostrar1(){
        let r,h;
        r=prompt('Ingrese el valor del radio: ')
        h=prompt('Ingrese el valor de la altura: ')
        areabase = 3.1416*r
        arealateral = 2*3.1416*r*h
        areatotal = 2*areabase + arealateral
        alert('El área de la base del cilindro es: ' + areabase)
        alert('El área lateral del cilindro es: ' + arealateral)
        alert('El área total del cilindro es: ' + areatotal)
}
function mostrar3(){
        let b,h;
        b=prompt('Ingrese el valor de la base: ')
        h=prompt('Ingrese el valor de la altura: ')
        area = b*h;
        perimetro = 2*(b+h)
        alert('El área del rectangulo es: ' + area)
        alert('El perímetro del rectangulo es: ' + perimetro)
}
function mostrar5(){
        num=prompt("Ingrese el numero de tres cifras: ");

        a = Math.trunc(num/100);
        b = Math.trunc((num%100)/10);
        c = Math.trunc((num%100)%10);

        suma = parseInt(a)+parseInt(b)+parseInt(c);
        promedio = (parseInt(a)+parseInt(b)+parseInt(c))/3;
        alert('La suma del número de tres cifras es: ' + suma)
        alert('El promedio del número de tres cifras es: ' + promedio.toFixed(2))
}
function mostrar7(){
        let seg;
        seg=prompt('Ingrese una cantidad de segundos: ');
        horas= Math.trunc(seg/3600);
        minutos= Math.trunc((seg%3600)/60);
        segRestantes= Math.trunc(seg%60);
        alert('Son ' + horas + ' horas ' + minutos + ' minutos ' +  segRestantes + ' segundos restantes ' )
}
function mostrar13(){
        sueldo=prompt('Ingrese el cantidad de sueldo: ')
        if(sueldo>1800)
        {
            descuento=sueldo*0.15
            alert('Al exceder su sueldo de 1800, su descuento es: ' + descuento +" soles")
        }
        else
        {
            alert('Su sueldo es: ' + sueldo + " soles")
        }
}