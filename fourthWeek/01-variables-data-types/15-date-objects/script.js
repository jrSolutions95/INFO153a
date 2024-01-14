let x;

let d = new Date();

x = d.toString(); //will give string

x = d.getTime(); //will give number of milliseconds since 1970-01-01

x = d.valueOf(); //will give number of milliseconds since 1970-01-01

x = d.getFullYear(); //will give year

x = d.getMonth(); //will give month

x = d.getDate(); //will give day of the month

x = d.getDay(); //will give day of the week

x = d.getHours(); //will give hour

x = d.getMinutes(); //will give minutes

x = d.getSeconds(); //will give seconds

x = "${d.getDate()}/${d.getMonth()}/${d.getFullYear()}"; //will give 'day/month/year'

x = Intl.DateTimeFormat("en-US").format(d); //will give 'month(day/year'
x = Intl.DateTimeFormat("en-GB").format(d); //will give 'day/month/year'

x = d.toLocaleDateString("default", { month: "short" }); //will give 'day/month/year'

x = d.toLocaleDateString("default", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
}); //will give 'day/month/year'

console.log(d);
