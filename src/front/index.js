import Scene from './ui/scene'
import Pod from './ui/pod'
import Socket from './io/socket'

import Shape from './ui/primitives/geometry'
import IoUtils from './utils/io'
import nd from 'multi-dim'

class App {
    constructor(components) {
        this.scene = components.scene

        this.socket = components.socket
        this.socket.listen('message', this.addPodFromSocketMessage.bind(this))

        window.setInterval(this.render.bind(this))
    }

    addPodFromSocketMessage(socketMessage) {
        const [rawArray, type] = IoUtils.parseSocketMessage(socketMessage.data)

        this.scene.pods.push(new Pod({
            data: nd.array(rawArray, type),
            layout: {
                origin: nd.array([300, 300, 0, 1]),
                size: nd.array([300, 300, 300, 1]),
            },
            playback: {
                animate: true,
                repeat: false,
                alive: true,
                animationPause: 0,
            },
            display: {
                border: true
            }
        }))
    }

    render() {
        this.scene.render()
    }
}

new App({
    socket: new Socket({ port: 3000, host: 'localhost' }),
    scene: new Scene({
        canvas: document.getElementById('canvas'),
        pods: [new Pod({
            data: nd.random.randint(0, 256, [450, 450, 4]).set(':', ':', 3)(1),
            layout: {
                origin: nd.array([600, 400, 0, 1]),
                size: nd.array([650, 650, 650, 1]),
                shape: Shape.cuboid
            },
            playback: {
                animate: true,
                repeat: false,
                alive: true,
                animationPause: 0,
            },
            display: {
                border: true
            }
        })]
    }),
})