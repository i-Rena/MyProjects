var total = 0;
var prime = 0;
function suma(x,y)
{
 for(var i=x; i<=y; i++)
    {
        if(y % i === 0){
            prime ++;
            
        }
        else{
            total ++;
        }
    }
    console.log("sum",total);
    console.log("prime",prime);
}
