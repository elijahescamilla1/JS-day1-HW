let arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];

function replaceEvens(arr) {
    for (let i = 0; i < arr.length; i += 2) {
        arr.splice(i, 1, "even index");
    }
}

// Call the function
replaceEvens(arr);

console.log(arr);
// Expected output: ["even index","Baseball","even index","Goku","even index","Rodger"]
