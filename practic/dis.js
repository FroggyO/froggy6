function calculate(){

    let a = parseFloat(document.getElementById('A').value);
    let b = parseFloat(document.getElementById('B').value);
    let c = parseFloat(document.getElementById('C').value);
    let dis = b ** 2 - 4 * a * c;
    let x1 = 0.0;
    let x2 = 0.0;
    
    
    
    document.getElementById('resulsum').innerHTML = 'дискрименант : ' + dis;
    if (dis == 0){
        dis = Math.sqrt(dis,2);
        x1 = (-b + dis) / (2 * a);
         
        document.getElementById('resulsum1').innerHTML = 'первый корень : ' + x1;
    }
    else if(dis > 1){
        dis = Math.sqrt(dis,2); 
        x1 = (-b + dis) / (2 * a);
        x2 = (-b - dis) / (2 * a);
        document.getElementById('resulsum1').innerHTML = 'первый корень : ' + x1;
        document.getElementById('resulsum2').innerHTML = 'второй корень : ' + x2;
    }
    else if (dis < 1){
        dis = Math.sqrt(dis,2); 
        document.getElementById('resulsum1').innerHTML = 'нет корней';
    }
    
    
    }
       