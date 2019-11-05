function market(items,price,type){
    var result = items * price;
    if(type === "iphone")
{
    result += result * 0.05;
    result += result * 0.18;
    result -= result * 0.05;
}
    else if(type === "android")
	{
        result += result * 0.05;
        result += result * 0.18;
        result -= result * 0.02;
    }
    else{
        result += result * 0.05;
        result += result * 0.18;
    }
     
    return result;
}