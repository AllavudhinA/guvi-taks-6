class person {
    constructor (firstname,lastname,profession,city)
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.profession = profession;
        this.city = city;
    }
    get firstname(){
        return this.firstname;
    }
        getLastname(){
return this.lastname;
        }
        get profession(){
            return this.profession;
        }
        getcity(){
            return this.city;
        }
}
let p1 = new person ("allavudhin","akbar","engineer","cuddalore");
console.log("FirstName:" + p1.getfirstname()+"\n+ "lastname:" +p1.getLastname()+"\n"
+"profession:"+p1.getprofession()+"\n"+city: "+p1.getcity());
