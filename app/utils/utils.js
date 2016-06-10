function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

let utils = {
    // TODO Need to figure out a way to get unique keys
    getUniqueKey: function() {

        return new Date().getTime();
    },
    getAndFormatCurrentDate: function() {

        let d = new Date();
        // let month = d.getMonth() + 1;
        // let day = d.getDate();
        let hours = d.getHours();
        let minutes = d.getMinutes();
        let amOrPm = "am";
        console.log(d);

        // convert to readable am/pm format
        if (hours > 12) {
            hours -= 12;
            amOrPm = "pm";
        } else if (hours == 12) {
            amOrPm = "pm"
        } else if (hours == 0) {
            hours += 12;
        }
        return hours + ":" + addZero(minutes) + amOrPm; // converts num to str automatically
    }
};

module.exports = utils;
