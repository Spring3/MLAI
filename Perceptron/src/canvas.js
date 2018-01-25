function Canvas(htmlId) {
  this.canvas = document.getElementById(htmlId);
  this.context = this.canvas.getContext('2d');
  this.points = [];

  this.drawLine = (from, to, color) => {
    this.context.beginPath();
    this.context.moveTo(from.x, from.y);
    this.context.lineTo(to.x, to.y);
    this.context.strokeStyle = color;
    this.context.stroke();
  }

  this.drawPoint = (point, color) => {
    this.points.push(point);
    const radius = 3;
    this.context.beginPath();
    this.context.arc(point.x, point.y, radius, 0, 2 * Math.PI, false);
    this.context.fillStyle = color;
    this.context.fill();
  }
}


