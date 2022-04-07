export class Game {

    constructor(canvas) {
        this._canvas = canvas;
        this._ctx = canvas.getContext('2d');

        this._xHead = 20;
        this._yHead = 30;
    }

    drawBackground() {
        this._ctx.beginPath();
        this._ctx.fillStyle = '#C0DFEF';
        this._ctx.rect(0, 0, 400, 400);
        this._ctx.fill();
        this._ctx.closePath();
    }

    drawHead() {
        this._ctx.beginPath();
        this._ctx.fillStyle = '#03224C';
        this._ctx.rect(this._xHead, this._yHead, 10, 10);
        this._ctx.fill();
        this._ctx.closePath();
    }

    moveBottom() {
        document.addEventListener('keydown', (event) => {
            if(event.key === 'ArrowDown') {
                // Erase
                this._ctx.beginPath();
                this._ctx.fillStyle = '#C0DFEF';
                this._ctx.rect(this._xHead, this._yHead, 10, 10);
                this._ctx.fill();
                this._ctx.closePath();

                // Paint
                // Simulate the move
                this._yHead += 10;
                this._ctx.beginPath();
                this._ctx.fillStyle = '#03224C';
                this._ctx.rect(this._xHead, this._yHead, 10, 10);
                this._ctx.fill();
                this._ctx.closePath();
            }
        });
    }

}