function iterator(num) {
    for (let i= 0; i<num; i++){
 const esMultiplo3 =i%3==0;
 const esMultiplo5 =i%5==0;
 let output="";
 if (esMultiplo3 && esMultiplo5) {
     output= "TzStriker";
    } else if (esMultiplo3) {
        output= "Tz";
    } else if (esMultiplo5) {
        output= "Striker"
    }
        console.log (i, output)
    }

    }   
iterator(10);