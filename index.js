 m = document.getElementById('gardun').getContext("2d");
 function atom  (x,y,c){
    m.fillStyle=c;
    m.fillRect(x,y,3,3)
 }
 for( y=1 ; y<1000 ; y++ ){
    for(  = (y-500x=1 ; x<1000 000000
        dy)/98; x++ ){
        dx = (x-500)/1 0
    
        a = dx
        b = dy
        for( t=1 ; t<100 ; t++ ){
         d = (a*a) - (b*b)+dx
         b = 2*(a*b) + dy
         a = d
         h = d > 200
        if (h){
            atom(x,y,"rgb("+t*3+","+t+","+t*0.5+")");
             break
            }
        }
    }
}
 