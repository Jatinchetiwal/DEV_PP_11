//destructring objects means we can take out values of keys and place them in a variable which has same name as key
//if the variable name doesnt match with key name  then it will give undefined as output
let add  = {
    loc : 'pitampura',
    city : 'delhi',
    pin : 110085
}
let{loc,city,pin,street} = add;
console.log(loc);
console.log(city);
console.log(pin);
console.log(street);
