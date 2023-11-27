class circle {
    constructor ( radius, color) {
        this.radius = radius;
        this.color = color;

    }
    get Radius () {
        return this.radius;
    }
    set Radius(NewRadius) {
        this.radius = NewRadius;    
    }
    get color() {
        return this.color;
    }
    set color (newcolor){
        this.color = newcolor;
    }
    getArea (radius) {
        return Math.PI*radius*radius
    }
    getcircumference (radius)
    {
        return 2*Math.PI*radius;
    }
    }
    let radius = 2.0;
    let color = "Green";
    let c1 = new circle (parseFloat(radius),color);
    console.log("First Radius : -" + c1.getRadius());
    c1.setRadius(1.0);
    console.log("changedRadius:-"+c1.getRadius());
    console.log("Firstcolor:-"+ c1.getcolor());
    c1.setcolor ("Blue");
    console.log("changed color:-"+c1.getcolour());
    console.log(c1);
    console.log("Area of circle is -" + c1.getArea(radius).toFixed(2));
    console.log ("circumference of circle is -"+ c1.getcircumference(radius).toFixed(2));