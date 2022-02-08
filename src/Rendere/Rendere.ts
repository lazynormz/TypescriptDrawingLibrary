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
        this.ctx.fillRect(x, y, w, h)
    }

    drawRect(x: number, y: number, w: number, h: number, c?: Color | string): void {
        this.setColor(c)
        this.ctx.rect(x, y, w, h)
    }

    fillCircle(x: number, y: number, r: number, c?: Color | string): void {
        this.setColor(c)
        this.ctx.beginPath()
        this.ctx.arc(x, y, r, 0, 2 * Math.PI)
        this.ctx.fill()
        this.ctx.stroke()
    }

    drawCircle(x: number, y: number, r: number, c?: Color | string): void {
        this.setColor(c)
        this.ctx.beginPath()
        this.ctx.arc(x, y, r, 0, 2 * Math.PI)
        this.ctx.stroke()
    }

    drawImage(image: string, x: number, y: number, w?: number, h?: number): void {
        let img = new Image()
        img.src = image

        img.onload = () => {
            if(h && w){
                return this.ctx.drawImage(img, x, y, w, h)
            }
            this.ctx.drawImage(img, x, y)
        }
    }
}