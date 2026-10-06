class Blocks {
    constructor (runtime) {
        this.runtime = runtime;
    }

    getPrimitives () {
        return {
            RS_SLIDING_RAIL_SET_ACCELERATION: this.RS_SLIDING_RAIL_SET_ACCELERATION,
            RS_SLIDING_RAIL_MOVE: this.RS_SLIDING_RAIL_MOVE,
            RS_SLIDING_RAIL_STOP: this.RS_SLIDING_RAIL_STOP,
            RS_SLIDING_RAIL_MOVE_TO_ORIGIN: this.RS_SLIDING_RAIL_MOVE_TO_ORIGIN
        };
    }

    RS_SLIDING_RAIL_SET_ACCELERATION (args) {
        const blockName = 'RS_SLIDING_RAIL_SET_ACCELERATION';
        return new Promise(resolve => {
            this.runtime.emit('rotrics-async', {blockName, resolve, args});
        });
    }

    RS_SLIDING_RAIL_MOVE (args) {
        const blockName = 'RS_SLIDING_RAIL_MOVE';
        return new Promise(resolve => {
            this.runtime.emit('rotrics-async', {blockName, resolve, args});
        });
    }

    RS_SLIDING_RAIL_MOVE_TO_ORIGIN (args) {
        const blockName = 'RS_SLIDING_RAIL_MOVE_TO_ORIGIN';
        return new Promise(resolve => {
            this.runtime.emit('rotrics-async', {blockName, resolve, args});
        });
    }

    RS_SLIDING_RAIL_STOP (args) {
        const blockName = 'RS_SLIDING_RAIL_STOP';
        return new Promise(resolve => {
            this.runtime.emit('rotrics-async', {blockName, resolve, args});
        });
    }
}

module.exports = Blocks;
