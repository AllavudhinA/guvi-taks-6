class uberprice{
    constructor(distance,price)
    {
        this.distance = distance;
        this.price = price;
    }
    get Distance(){
        return this.distance;
    }
    set price(newprice){
        this.price = newprice;
    }
    get price() {
        return this.price;
    }
}
let distance = userInput;
letprice;
let u = new uberprice(parseInt(distance),price);
console.log("distance is :"+u.getDistance()+"Km");
if (parseInt(distance)===1)
{
    price = 6;
}else{
    price = parseInt(distance)*6;
};
u.setprice(price);
console.log("price will be : Rs."+u.getprice ());