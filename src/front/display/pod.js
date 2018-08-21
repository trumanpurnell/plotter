import MediaManager from './managers/media'
import LayoutManager from './managers/layout'
import DisplayManager from './managers/display'

import IoUtils from '../utils/io'
import nd from 'multi-dim'

export default class Pod {
    constructor(props) {
        this.props = props

        this.layoutManager = new LayoutManager(this)
        this.mediaManager = new MediaManager(this)
        this.displayManager = new DisplayManager(this)
    }

    render(scene) { }

    static createFromSocketMessage(socketMessage) {
        const [rawArray, type] = IoUtils.parseSocketMessage(socketMessage.data)

        return new Pod({
            data: nd.array(rawArray, type),
            layout: LayoutManager.DEFAULT_LAYOUT
        })
    }
}
