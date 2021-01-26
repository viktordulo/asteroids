import { Game } from './index.js';
import { Bullet } from './Bullet.js';

export class Pointer {
    x: number;
    y: number;
    dx: number = 0;
    dy: number = 0;
    mouseX: number = 0;
    mouseY: number = 0;

    private static instance: Pointer = new Pointer();

    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    private constructor() {
        this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
        this.ctx = <CanvasRenderingContext2D>this.canvas.getContext('2d');
        this.x = this.canvas.width/2;
        this.y = this.canvas.height/2;

        // this.draw();
    }

    shoot() {
        new Bullet(this.x + Math.cos(this.rotationAngle()) * 25, this.y + Math.sin(this.rotationAngle()) * 25, this.mouseX, this.mouseY).draw();
    }

    private drawPointer() {
        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.y);
        this.ctx.arc(this.x, this.y, 10, 0, Math.PI*2);
        this.ctx.moveTo(this.x + Math.cos(this.rotationAngle()) * 10, this.y + Math.sin(this.rotationAngle()) * 10);

        let x: number = this.x + Math.cos(this.rotationAngle()) * 10;
        let y: number = this.y + Math.sin(this.rotationAngle()) * 10;
        this.ctx.lineTo(x + Math.cos(this.rotationAngle()) * 15, y + Math.sin(this.rotationAngle()) * 15);

        //#region TRYHARD

        // let x = this.x + Math.cos(this.rotationAngle()) * 15;
        // let y = this.y + Math.sin(this.rotationAngle()) * 15;
        // this.ctx.lineTo((this.x - 10)*Math.cos(this.rotationAngle()) - (this.y + 15) * Math.sin(this.rotationAngle()), (this.x - 10)*Math.sin(this.rotationAngle()) + (this.y + 15) * Math.cos(this.rotationAngle()));


        // this.ctx.moveTo(x, y);
        // this.ctx.lineTo(x - Math.cos(this.rotationAngle() + 18*Math.PI/180) * 15, this.y - Math.sin(this.rotationAngle() + 18*Math.PI/180) * 15);
        
        // this.ctx.moveTo(x + Math.cos(this.rotationAngle()) * 15, y + Math.sin(this.rotationAngle()) * 15);
        // this.ctx.lineTo(x + Math.cos(-18*Math.PI/180) * Math.sqrt(1000), y + Math.sin(-18*Math.PI/180) * Math.sqrt(1000));
        // x = x + Math.cos(-18*Math.PI/180) * Math.sqrt(1000);
        // y = y + Math.sin(-18*Math.PI/180) * Math.sqrt(1000);
        // this.ctx.lineTo(x + Math.cos(-72*Math.PI/180) * 20, y + Math.sin(-72*Math.PI/180) * 20);
        
        // this.ctx.moveTo(this.x, this.y - 15);
        
        // let x = this.x;
        // let y = this.y - 15;
        // this.ctx.lineTo(x + 20, y);
        // console.log(this.rotationAngle() / Math.PI * 180);
        // this.ctx.lineTo(x + Math.cos(this.rotationAngle()) * 15, y + Math.sin(this.rotationAngle()) * 15);
        // this.ctx.lineTo(x + Math.cos(Math.PI/180 * -30) * 20, y + Math.sin(Math.PI/180 * -30) * 20);

        // this.ctx.moveTo(this.x, this.y - 15);
        // this.ctx.lineTo(this.x - 10, this.y + 15);
        // this.ctx.lineTo(this.x + 10, this.y + 15);

        //#endregion TRYHARD

        this.ctx.strokeStyle = "white";
        this.ctx.stroke();
        
        // this.ctx.closePath();
        
    }

    private rotationAngle(): number {
        let radians: number = Math.atan2(this.mouseY - this.y, this.mouseX - this.x);
        // let degrees: number = radians*(180/Math.PI)*-1;
        return radians;
    }

    draw() {
        // this.ctx.clearRect(this.x - 13, this.y - 18, 26, 36);
        this.ctx.clearRect(0, 0, 1000, 1000);
        this.drawPointer();
        this.x += this.dx;
        this.y += this.dy;
        document.addEventListener('click', () => {
            this.shoot();
        })
    }

    static getInstance(): Pointer {
        if (this.instance) return this.instance;
        this.instance = new Pointer();
        return this.instance;
    }
}