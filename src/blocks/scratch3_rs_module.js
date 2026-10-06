class Blocks {
    constructor (runtime) {
        this.runtime = runtime;
    }

    getPrimitives () {
        return {
            RS_FRONT_END_AIR_PICKER: this.RS_FRONT_END_AIR_PICKER,
            RS_FRONT_END_SOFT_GRIPPER: this.RS_FRONT_END_SOFT_GRIPPER
        };
    }

    RS_FRONT_END_AIR_PICKER (args) {
        const blockName = 'RS_FRONT_END_AIR_PICKER';
        return new Promise(resolve => {
            this.runtime.emit('rotrics-async', {blockName, resolve, args});
        });
    }

    RS_FRONT_END_SOFT_GRIPPER (args) {
        const blockName = 'RS_FRONT_END_SOFT_GRIPPER';
        return new Promise(resolve => {
            this.runtime.emit('rotrics-async', {blockName, resolve, args});
        });
    }
}

module.exports = Blocks;
