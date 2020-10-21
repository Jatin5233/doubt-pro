class Stone{
    constructor(){
        this.image=loadImage("stone.png");
        
        this.width=600;
        this.height=300;
    }
    display(){
        imageMode(CENTER);
        image(this.image,100,500,this.width,this.height);
    }
}