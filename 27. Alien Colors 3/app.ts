//27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

//version-1
let alien_color: string = 'green';

// • If the alien is green, print a message that the player earned 5 points.
if (alien_color == 'green') {
    console.log("the player just earnd 5 point for shooting the alien.");
}

// • If the alien is yellow, print a message that the player earned 10 points.
else if (alien_color == 'yellow') {
    console.log("the player just earnd 10 point for shooting the alien.");
}

// • If the alien is red, print a message that the player earned 15 points.
else if (alien_color == 'red') {
    console.log("the player just earnd 15 point for shooting the alien.");
}

else{
    console.log("Please select right color");
}

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

//version-2
alien_color = "red";
if (alien_color == 'green') {
    console.log("the player just earnd 5 point for shooting the alien.");
}
else if (alien_color == 'yellow') {
    console.log("the player just earnd 10 point for shooting the alien.");
}
else if (alien_color == 'red') {
    console.log("the player just earnd 15 point for shooting the alien.");
}

else{
    console.log("Please select right color");
}

//version-3
alien_color = "yellow";
if (alien_color == 'green') {
    console.log("the player just earnd 5 point for shooting the alien.");
}
else if (alien_color == 'yellow') {
    console.log("the player just earnd 10 point for shooting the alien.");
}
else if (alien_color == 'red') {
    console.log("the player just earnd 15 point for shooting the alien.");
}

else{
    console.log("Please select right color");
}