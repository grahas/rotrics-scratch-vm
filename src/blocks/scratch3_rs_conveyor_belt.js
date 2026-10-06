class Blocks {
    constructor (runtime) {
        this.runtime = runtime;
    }

    getPrimitives () {
        return {
            RS_CONVEYOR_BELT_MOVE: this.RS_CONVEYOR_BELT_MOVE,
            RS_CONVEYOR_BELT_STOP: this.RS_CONVEYOR_BELT_STOP
        };
    }

    RS_CONVEYOR_BELT_MOVE (args) {
        const blockName = 'RS_CONVEYOR_BELT_MOVE';
        return new Promise(resolve => {
            this.runtime.emit('rotrics-async', {blockName, resolve, args});
        });
    }

    RS_CONVEYOR_BELT_STOP (args) {
        const blockName = 'RS_CONVEYOR_BELT_STOP';
        return new Promise(resolve => {
            this.runtime.emit('rotrics-async', {blockName, resolve, args});
        });
    }
}

module.exports = Blocks;
