class Blocks {
    constructor (runtime) {
        this.runtime = runtime;
    }

    getPrimitives () {
        return {
            RS_SETTINGS_SELECT_FRONT_END: this.RS_SETTINGS_SELECT_FRONT_END,
            RS_SETTINGS_SET_SPEED: this.RS_SETTINGS_SET_SPEED,
            RS_SETTINGS_SET_ACCELERATION: this.RS_SETTINGS_SET_ACCELERATION,
            RS_SETTINGS_SET_MOTION_MODE: this.RS_SETTINGS_SET_MOTION_MODE,
            RS_SETTINGS_SET_WORK_ORIGIN: this.RS_SETTINGS_SET_WORK_ORIGIN
        };
    }

    RS_SETTINGS_SELECT_FRONT_END (args) {
        const blockName = 'RS_SETTINGS_SELECT_FRONT_END';
        return new Promise(resolve => {
            this.runtime.emit('rotrics-async', {blockName, resolve, args});
        });
    }

    RS_SETTINGS_SET_SPEED (args) {
        const blockName = 'RS_SETTINGS_SET_SPEED';
        return new Promise(resolve => {
            this.runtime.emit('rotrics-async', {blockName, resolve, args});
        });
    }

    RS_SETTINGS_SET_ACCELERATION (args) {
        const blockName = 'RS_SETTINGS_SET_ACCELERATION';
        return new Promise(resolve => {
            this.runtime.emit('rotrics-async', {blockName, resolve, args});
        });
    }

    RS_SETTINGS_SET_MOTION_MODE (args) {
        const blockName = 'RS_SETTINGS_SET_MOTION_MODE';
        return new Promise(resolve => {
            this.runtime.emit('rotrics-async', {blockName, resolve, args});
        });
    }

    RS_SETTINGS_SET_WORK_ORIGIN (args) {
        const blockName = 'RS_SETTINGS_SET_WORK_ORIGIN';
        return new Promise(resolve => {
            this.runtime.emit('rotrics-async', {blockName, resolve, args});
        });
    }
}

module.exports = Blocks;
