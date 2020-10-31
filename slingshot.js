class Slingshot{

    constructor(a,b){
        
        var options={

            bodyA:a,
            bodyB:b        

        }

      this.sling=  Matter.Constraint.create(options);
      World.add(world, this.sling);

    }
    
    display(){

        var pointA= this.sling.bodyA.position;
        var pointB= this.sling.bodyB.position;
        line (pointA.x,pointA.y,pointB.x,pointB.y);
    }

}