import { Color } from "./enums/Color"

export class TRendere {
    canvas: HTMLCanvasElement
    ctx: CanvasRenderingContext2D
    currentColor: string
    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas
        this.ctx = <CanvasRenderingContext2D>this.canvas.getContext("2d")
        this.currentColor = Color.GREY
    }

    setColor(c?: Color | string): void {
        if (c) {
            this.currentColor = c
            this.ctx.fillStyle = this.currentColor
        }
    }

    fillRect(x: number, y: number, w: number, h: number, c?: Color | string): void {
        this.setColor(c)
    }

    drawRect(x: number, y: number, w: number, h: number, c?: Color | string): void {
        this.setColor(c)
    }

    fillCircle(x: number, y: number, w: number, h: number, c?: Color | string): void {
        this.setColor(c)
    }

    drawCircle(x: number, y: number, w: number, h: number, c?: Color | string): void {
        this.setColor(c)
    }

    drawImage(x: number, y: number, w: number, h: number): void {

    }
}