let guest_list: string [] = ['ali','raza','abdullah','aman','nawaz'];
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Medam ' + guest_list[i] + ',\nwe invited you on dinner tomorrow.\n\nThank You\nFrom,\nVinod Kumar\n');
}
let not_present : string ='raza';
let new_guest : string = 'Amir Khan';
guest_list[1] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Medam ' + guest_list[i] + ',\nwe invited you on dinner tomorrow.\n\nThank You\nFrom,\nVinod Kumar\n');
}
console.log(`Mr. ${not_present} will not coming tomorrow dinner. `);