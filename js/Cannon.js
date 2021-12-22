class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.canonImg = loadImage("assets/canon.png")
    this.cannonBase = loadImage("assets/cannonBase.png")
  }
  display(){
    noFill()
    image(this.canonImg,this.x,this.y,this.width,this.height)
    image(this.cannonBase,170,120,200,200)
  }
}
