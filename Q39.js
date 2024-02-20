//39. City Names: Write a function called city_country() that takes in the name of a city and its country.
// The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
var cityCountry1 = city_country("Lahore", "Pakistan");
var cityCountry2 = city_country("Tokyo", "Japan");
var cityCountry3 = city_country("Paris", "France");
console.log(cityCountry1);
console.log(cityCountry2);
console.log(cityCountry3);
