"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
module.exports = function (socket) {
    socket.on('register-screen-display-added', function (id) {
        electron_1.screen.on('display-added', function (event, display) {
            global.elesocket.emit('screen-display-added-event' + id, display);
        });
    });
    socket.on('register-screen-display-removed', function (id) {
        electron_1.screen.on('display-removed', function (event, display) {
            global.elesocket.emit('screen-display-removed-event' + id, display);
        });
    });
    socket.on('register-screen-display-metrics-changed', function (id) {
        electron_1.screen.on('display-metrics-changed', function (event, display, changedMetrics) {
            global.elesocket.emit('screen-display-metrics-changed-event' + id, [display, changedMetrics]);
        });
    });
    socket.on('screen-getCursorScreenPoint', function () {
        var point = electron_1.screen.getCursorScreenPoint();
        global.elesocket.emit('screen-getCursorScreenPointCompleted', point);
    });
    socket.on('screen-getMenuBarHeight', function () {
        var height = electron_1.screen.getMenuBarHeight();
        global.elesocket.emit('screen-getMenuBarHeightCompleted', height);
    });
    socket.on('screen-getPrimaryDisplay', function () {
        var display = electron_1.screen.getPrimaryDisplay();
        global.elesocket.emit('screen-getPrimaryDisplayCompleted', display);
    });
    socket.on('screen-getAllDisplays', function () {
        var display = electron_1.screen.getAllDisplays();
        global.elesocket.emit('screen-getAllDisplaysCompleted', display);
    });
    socket.on('screen-getDisplayNearestPoint', function (point) {
        var display = electron_1.screen.getDisplayNearestPoint(point);
        global.elesocket.emit('screen-getDisplayNearestPointCompleted', display);
    });
    socket.on('screen-getDisplayMatching', function (rectangle) {
        var display = electron_1.screen.getDisplayMatching(rectangle);
        global.elesocket.emit('screen-getDisplayMatchingCompleted', display);
    });
};
//# sourceMappingURL=screen.js.map