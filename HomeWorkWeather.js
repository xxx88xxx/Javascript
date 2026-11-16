/*
// Task: Create a function that determines the season based on the month and temperature.
// Return "Error" for months outside 1–12 and "Season mismatch" if no seasonal condition matches.
function getSeason(month, temperature) {
    if (month < 1 || month > 12) {
        return "Error";
    }

    if ((month === 12 || month === 1 || month === 2) && temperature <= 5) {
        return "Winter";
    } else if (month >= 3 && month <= 5 && temperature < 20) {
        return "Spring";
    } else if (month >= 6 && month <= 8 && temperature > 20) {
        return "Summer";
    } else if (month >= 9 && month <= 11 && temperature >= 5 && temperature <= 20) {
        return "Autumn";
    } else {
        return "Season mismatch";
    }
}

console.log(getSeason(12, 8));
*/
