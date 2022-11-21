/* Write a function called describe_city() that accepts the name of a city and its country.
   The function should print a simple sentence, such as Karachi is in Pakistan. 
   Give the parameter for the country a default value. Call your function for three different cities,
   at least one of which is not in the default country. */

function describeCity(city) {
  if (city == "lahore") {
    console.log(`${city}, is the city of Pakistan & IT hub.`);
  } else if (city == "Karachi") {
    console.log(`${city}, is the city of Pakistan,and city of light`);
  } else {
    console.log(`${city}, is the city of Pakistan`); //this work as default code
  }
}

describeCity("lahore");
describeCity("Karachi");
describeCity("peshawar");
describeCity("islamabad");
