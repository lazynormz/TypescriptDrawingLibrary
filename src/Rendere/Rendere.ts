export class TRendere {
    canvas: HTMLCanvasElement
    ctx: CanvasRenderingContext2D
    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas
        this.ctx = <CanvasRenderingContext2D>this.canvas.getContext("2d")
    }

    fillRect(x: number, y: number, w: number, h: number): void {

    }

    drawRect(x: number, y: number, w: number, h: number): void {

    }

    fillCircle(x: number, y: number, w: number, h: number): void {

    }

    drawCircle(x: number, y: number, w: number, h: number): void {

    }

    drawImage(x: number, y: number, w: number, h: number): void {

    }
}