class Ground {
    constructor() {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(800, 390, 1600, 10, options);
        this.width = 1600;
        this.height = 10;
        World.add(world, this.body)
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}

