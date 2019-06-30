import bb from 'big-box'
import app from './app'

window.bb = bb
window.app = app

window.vertices = bb.randint({ low: 0, high: 256, shape: [6000000 / 4, 3], type: Uint8ClampedArray })
window.colors = vertices

app.graphics.plot({
    vertices,
    colors,
    sizes: bb.ones({ shape: [6000000 / 4, 1] }).multiply({ with: 1 })
})
