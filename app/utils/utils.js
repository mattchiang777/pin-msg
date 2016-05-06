function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

var utils = {
    // TODO Need to figure out a way to get unique keys
    getUniqueKey: function() {

        return new Date().getTime();
    },
    getAndFormatCurrentDate: function(date) {

        var d = new Date();
        var hours = d.getHours();
        var minutes = d.getMinutes();
        var amOrPm = "am";

        // convert to readable am/pm format
        if (hours > 12) {
            hours -= 12;
            amOrPm = "pm";
        } else if (hours == 0) {
            hours += 12;
        }
        return hours + ":" + addZero(minutes) + amOrPm; // converts num to str automatically
    }
};

module.exports = utils;
