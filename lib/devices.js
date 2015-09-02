var querystring = require('querystring');

module.exports = function (api) {
    /**
     * Returns a list of all devices associated with the current user
     * @returns {RSVP.Promise}
     */
    function getDevices () {
        return api.get('/devices/list', 'device');
    }

    /**
     * Turns a device off
     * @param device either {id: anId} or anId
     * @returns {*} a Promise
     */
    function turnOn (device) {
        return api.request('/device/turnOn?' + querystring.stringify({id: device.id || device}));
    }

    /**
     * Turns a device on
     * @param device either {id: anId} or anId
     * @returns {*} a Promise
     */
    function turnOff (device) {
        return api.request('/device/turnOff?' + querystring.stringify({id: device.id || device}));
    }


    /**
     * Dims a device
     * @param device either {id: anId} or anId
     * @param level (0-255)
     * @returns {*} a Promise
     */
    function dim (device, level) {
        return api.request('/device/dim?' + querystring.stringify({id: device.id || device, level: level}));
    }

    return {
        getDevices: getDevices,
        turnOn: turnOn,
        turnOff: turnOff,
        dim: dim
    };
};
