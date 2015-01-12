/* 
 * yousfi.saad@gmail.com
 */


var alfa = [    "A",    "B",    "C",    "D",    "E",    "F",    "G"];
var tab = [], exps = {};
var changeFct = function(ev){
    var tmp = "";
    if(exps[ev.currentTarget.getAttribute('id')] !== undefined)
        tmp = exps[ev.currentTarget.getAttribute('id')][0];
    document.getElementById('func').value = tmp;
};
for(var i = 0; i<7; i++){
    for(var j = 1; j<8; j++){
        tab.push(alfa[i]+j);
    }
}
var update = function(){
    for(it in exps){
        var exp = exps[it][0];
        for(var itt in tab){
            var exp = exp.replace(new RegExp(tab[itt], 'g'), document.getElementById(tab[itt]).value);
        }
        exps[it][1].value = eval(exp);
    }
};
for(var it in tab){
    document.getElementById(tab[it]).addEventListener('change', function(ev){
        var content = ev.currentTarget.value;
        if(content[0] === '='){//function
            var exp = content.substring(1);
            exps[ev.currentTarget.getAttribute('id')] = ([exp,ev.currentTarget]);
        }
        else{
            delete exps[ev.currentTarget.getAttribute('id')];
        }
        update();
        changeFct(ev);
    }, false);
    document.getElementById(tab[it]).addEventListener('focus', changeFct, false);
}




//  =A1+A2
