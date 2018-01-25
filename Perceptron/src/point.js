class Point {
  constructor() {    
    this.x = random(0, 300);
    this.y = random(0, 300);
    this.target = this.x > this.y ? 1 : -1;
  }
}
