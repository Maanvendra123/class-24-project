class Dustbin{
    constructor(x,y,width,height){
        var ground_options ={
            isStatic: true
        }
    
       this.dustbin = Bodies.rectangle(x,y,width,height,ground_options);
       this.width=width
       this.height=height
        World.add(world,this.dustbin);   
    }
    display(){
        var pos=this.dustbin.position
        push ()
        translate (pos.x,pos.y)
        rectMode(CENTER)
        fill ("green")
        rect(0,0,this.width,this.height)
        pop ()
    }
}