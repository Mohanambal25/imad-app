//counter code
var button=document.getElementById('counter');
button.onclick=function(){
    
    var request= new XMLHttpRequest();
    
    request.onreadystatechange=function(){
        
        if(request.readyState===XMLHttpRequest){
            
            if(request.status===200){
                
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
                
            }
            
        }
        
        
        
    };
    
    request.open('GET','http://mohanambal25.imad.hasura-app.io/',true);
    request.send(null);
    

    
    
    
};