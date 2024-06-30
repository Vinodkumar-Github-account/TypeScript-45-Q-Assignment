let alien_color: string = 'green';

// Version that passes the if test
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}

alien_color = 'red';

// Version that fails the if test (no output)
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}