// 43. Unchanged Magicians: Start with your work from Exercise 42. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.

let magicians_array: string []= ["Alico","Don","kaka"];

function copy_aray(arr: string[]): string [] {
    return [...arr]

}

let array_copy = copy_aray(magicians_array)

function make_great(arr: string[]){

    for (let i =0; i < arr.length; i++) {
        array_copy[i] = `the great ${arr[i]}`
    }
}

make_great(array_copy);

function show_magicians(arr: string[]){
    return arr;

}

console.log("original array:", show_magicians(magicians_array));
console.log("modified array:", show_magicians(array_copy));