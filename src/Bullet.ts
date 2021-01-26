
export class Bullet {
    x: number;
    y: number;

    dx: number;
    dy: number;

    speed: number = 4;

    toX: number;
    toY: number;

    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    constructor(x: number, y: number, toX: number, toY: number) {
        this.x = x;
        this.y = y;
        this.toX = toX;
        this.toY = toY;

        this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
        this.ctx = <CanvasRenderingContext2D>this.canvas.getContext('2d');

        let startX = this.x;
        let startY = this.y;
        this.dx = Math.cos(this.rotationAngle());
        this.dy = Math.sin(this.rotationAngle());

        // this.draw();
    }

    private rotationAngle(): number {
        let radians: number = Math.atan2(this.toY - this.y, this.toX - this.x);
        // let degrees: number = radians*(180/Math.PI)*-1;
        return radians;
    }

    private drawBullet() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
        this.ctx.fillStyle = 'white';
        this.ctx.fill();
        this.ctx.closePath();
    }

    draw() {
        this.ctx.clearRect(this.x - 4, this.y - 4, 8, 8);
        if (this.x + this.dx < this.canvas.width || this.y + this.dy < this.canvas.height || this.x + this.dx > 0 || this.y + this.dy > 0) {
            this.drawBullet();
            this.x += this.dx * this.speed;
            this.y += this.dy * this.speed;
        }
    }
}