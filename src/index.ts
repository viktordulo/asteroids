import { Pointer } from './Pointer.js';
export class Game {
    container: HTMLDivElement;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    prevUpdateTime: number;
    height: number;
    width: number;

    pointer: Pointer = Pointer.getInstance();

    constructor() {
      this.container = <HTMLDivElement>document.getElementById('content');
      this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
      this.ctx = <CanvasRenderingContext2D>this.canvas.getContext('2d');
  
      this.prevUpdateTime = 0;
      this.height = 0;
      this.width = 0;
  
      this.init();
    }
  
    init() {
      window.addEventListener("resize", x => this.onResize());
      this.onResize();
  
      requestAnimationFrame((time) => this.update(time));
    }
  
    onResize() {
      this.width = this.container.clientWidth;
      this.height = this.container.clientHeight;
  
      this.canvas.width = this.width;
      this.canvas.height = this.height;
    }
  
    update(time: number) {
      const dt = time - this.prevUpdateTime;
      this.prevUpdateTime = time;
      // console.log('update!');
  
      requestAnimationFrame((time) => {
        this.pointer.draw();
        this.update(time);
      });
    }


  }