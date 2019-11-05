function tax(price,worker){
    var price = price;


if(worker === "craftsman"){
 if(price <= 1000 ){
    var tax = price * (5 / 100);
    return tax;

}
else if(price > 1000){
    var tax1 = 1000 * (5 / 100);
    var tax2 = (price - 1000) * (10 / 100);
    tax = tax1 + tax2; 
    return tax;
}
}
else{
 if(price <= 1000 ){
    tax = price * (11 / 100);
    return tax;
}
else if(price > 1000){
    var tax1 = 1000 * (11 / 100);
    var tax2 = (price - 1000) * (18 / 100);
    tax = tax1 + tax2; 
    return tax;
}
}
}