var hour=document.getElementById("hour")
var min=document.getElementById("min")
var sec=document.getElementById("sec")
var ms=document.getElementById("ms")

var h=0
var m=0
var s=0
var mis=0

var cpt=""
function traitement(){
    mis+=1
    ms.innerHTML=":0"+mis
    if(mis===10){
        mis=0
        s+=1
        if(s<10){
            sec.innerHTML=":0"+s

        }
        else{
            sec.innerHTML=":"+s

        }

        
        if(s===60){
            s=0
            m+=1
            min.innerHTML=":"+m
            if(m<10){
                min.innerHTML=":0"+m
    
            }
            else{
                min.innerHTML=":"+m
    
            }
    

        }
        if(m===59){
            m=0
            h+=1
            hour.innerHTML=":"+h
            if(h<10){
                hour.innerHTML=":0"+h
    
            }
            else{
                hour.innerHTML=":"+h
    
            }
    

        }
    }
}


function start(){
    cpt=setInterval('traitement()',80)
}
function stop(){
    clearInterval(cpt)
}
function reset(){
    stop()
    mis=0
    m=0
    h=0
    s=0
    hour.innerHTML="00:"
    min.innerHTML="00:"
    sec.innerHTML="00:"
    ms.innerHTML="00"

}