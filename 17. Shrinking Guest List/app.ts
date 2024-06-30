let guest_list: string [] = ['ali','raza','abdullah','aman','nawaz'];

let not_present : string ='raza';
let new_guest : string = 'Amir Khan';
guest_list[1] = new_guest;

guest_list.unshift("shaheen","sarfaraz","rizwan")

console.log(`\nUnfortunately we can not arange big table , only two people allaw.`)
while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    console.log(`Sorry Sir/Medam. ${remove_guest} you are not invited for dinner`);
}
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Medam ' + guest_list[i] + ',\nYes you are still invitd on tommorow dinner\nThank You\nFrom,\nVinod Kumar\n');
}
guest_list.splice(0,2)
console.log(guest_list);