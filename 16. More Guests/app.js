"use strict";
let guest_list = ['ali', 'raza', 'abdullah', 'aman', 'nawaz'];
let not_present = 'raza';
let new_guest = 'Amir Khan';
guest_list[1] = new_guest;
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected Sir/Medam ' + guest_list[i] + ',\nwe invited you on dinner tomorrow.\n\nThank You\nFrom,\nVinod Kumar\n');
// }
guest_list.unshift("shaheen", "sarfaraz", "rizwan");
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Medam ' + guest_list[i] + ',\nwe invited you on dinner tomorrow.\n\nThank You\nFrom,\nVinod Kumar\n');
}
