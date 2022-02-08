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

    /**
     * 
     * @param c String containing HEX-valued color
     */
    setColor(c?: Color | string): void {
        if (c) {
            this.currentColor = c
            this.ctx.fillStyle = this.currentColor
        }
    }

    /**
     * 
     * @param x X-position of rect
     * @param y Y-position of rect
     * @param w Width of rect
     * @param h Height of rect
     * @param c Optional - String containing HEX-valued color
     */
    fillRect(x: number, y: number, w: number, h: number, c?: Color | string): void {
        this.setColor(c)
        this.ctx.fillRect(x, y, w, h)
    }

    /**
     * 
     * @param x X-position of rect
     * @param y Y-position of rect
     * @param w Width of rect
     * @param h Height of rect
     * @param c Optional - String containing HEX-valued color
     */
    drawRect(x: number, y: number, w: number, h: number, c?: Color | string): void {
        this.setColor(c)
        this.ctx.rect(x, y, w, h)
    }

    /**
     * 
     * @param x X-position of rect
     * @param y Y-position of rect
     * @param w Width of rect
     * @param h Height of rect
     * @param c Optional - String containing HEX-valued color
     */
    fillCircle(x: number, y: number, r: number, c?: Color | string): void {
        this.setColor(c)
        this.ctx.beginPath()
        this.ctx.arc(x, y, r, 0, 2 * Math.PI)
        this.ctx.fill()
        this.ctx.stroke()
    }

    /**
     * 
     * @param x X-position of rect
     * @param y Y-position of rect
     * @param w Width of rect
     * @param h Height of rect
     * @param c Optional - String containing HEX-valued color
     */
    drawCircle(x: number, y: number, r: number, c?: Color | string): void {
        this.setColor(c)
        this.ctx.beginPath()
        this.ctx.arc(x, y, r, 0, 2 * Math.PI)
        this.ctx.stroke()
    }

    /**
     * 
     * @param image String containing path to image
     * @param x X-position of image
     * @param y Y-position of image
     * @param w Optional - new width of image
     * @param h Optional - new height of image
     */
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