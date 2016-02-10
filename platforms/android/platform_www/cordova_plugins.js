cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "pluginId": "cordova-plugin-whitelist",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-pedometer/www/pedometer.js",
        "id": "cordova-plugin-pedometer.Pedometer",
        "pluginId": "cordova-plugin-pedometer",
        "clobbers": [
            "pedometer"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.1",
    "cordova-plugin-crosswalk-webview": "1.5.0",
    "cordova-plugin-pedometer": "0.4.1"
}
// BOTTOM OF METADATA
});