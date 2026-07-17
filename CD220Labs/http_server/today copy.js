 // Export a function named 'getDate' from the module
module.exports.getDate = function getDate() {
    // Get the current date and time in the timezone "Australia/Brisbane"
    let aestString = new Date().toLocaleString("en-US", {timeZone: "Australia/Brisbane"});
    const aestDate = new Date(aestString);
    return aestTime; // Return the formatted date and time
};
