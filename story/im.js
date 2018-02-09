var i=486; /*imge strt from 486 to 3280 total 2794*/
//var d;



/*FOR KEYBOARD USERS*/
function funimg(e){
    if(e.keyCode==39){
        var img = document.getElementById('m');
            if(i<3280){
                i=i+1;
                img.src= "star/Starless-Night-YouTube-"+i+".jpg";
                  
            }
        
    }
    else if(e.keyCode==37){
        var img = document.getElementById('m');

            if(i>486){
                i=i-1;
                img.src= "star/Starless-Night-YouTube-"+i+".jpg";                
            }
        
    }
    
}


/* FOR MOBILE USERS OR ONSCREEN ARROW USERS------ end comment here to work further
function keyFwd(e){
    e.preventDefault();
    d = 1;
    strtFwd();    
}
function keyFwdStop(){
    d=0;
}
function strtFwd(){
    if(d==1){
        var img = document.getElementById('m');
                if(i<3280){
                    i=i+1;
                    img.src= "star/Starless-Night-YouTube-"+i+".jpg";
                    keyFwd(e);
                }   
        }
}
function keyBack(e){
    var img = document.getElementById('m');
    if(i>321){
        i=i-1;
        img.src= "star/Starless-Night-YouTube-"+i+".jpg";    
    }   
}
*/