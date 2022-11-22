class products{
    constructor(name,price,description,id){ 
    this.name=name;
    this.price=price;
    this.description=description;
    this.id=id;
}
toString(){
    return ("price:$"+this.price +" description: "+ this.description +" ID:"+this.id);
}
}
module.exports=products;