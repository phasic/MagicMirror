/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
    address: "localhost", // Address to listen on, can be:
    // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
    // - another specific IPv4/6 to listen on a specific interface
    // - "", "0.0.0.0", "::" to listen on any interface
    // Default, when address config is left out, is "localhost"
    port: 8080,
    ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
    // or add a specific IPv4 of 192.168.1.5 :
    // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
    // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
    // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

    language: "en",
    timeFormat: 24,
    units: "metric",

    modules: [
        {
            module: "alert",
        },
        {
            module: "updatenotification",
            position: "top_bar"
        },
        {
            module: "clock",
            position: "top_left"
        },
        {
            module: "MMM-CalendarWeek",
            position: "top_left",	// This can be any of the regions. Best results in bottom region.
            config: {
                colored: true,
                coloredSymbolOnly: true,
                calendars: [
                    {
                        url: 'WEBCALURL',
                        symbol: 'calendar',
                    },
                ],
            }
        },
        {
            module: "currentweather",
            position: "top_right",
            config: {
                location: "Kontich",
                locationID: "2794118",  //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
                appid: "TOKEN"
            }
        },
        {
            module: "weatherforecast",
            position: "top_right",
            header: "Weather Forecast",
            config: {
                location: "Kontich",
                locationID: "2794118",  //ID from http://www.openweathermap.org/help/city_list.txt
                appid: "TOKEN"
            }
        },
        {
            module: 'MMM-Screencast',
            position: 'bottom_left',
            config: {
                position: 'bottomRight',
                height: 300,
                width: 500,
            }
        },
        {
            module: "MMM-NMBS-Connection",
            position: "bottom_right",
            config: {
                humanizeDuration: false,
                showStationNames: true,
                from: "Kontich-Lint",
                to: "Merode"
            }
        },
    ]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
