let d;

d = new Date(); //will give current date and time
//it is an object

d = d.toString(); //will give string

d = new Date("2020-01-01"); //will give date and time of 2020-01-01

d = Date.now(); //will give number of milliseconds since 1970-01-01

d = new Date("2020-01-01"); //will give day of the week
d = d.getTime(); //

d = d.valueOf();

d = Math.floor(Date.now() / (1000 * 60 * 60 * 24 * 365)); //will give timestap in sconds
