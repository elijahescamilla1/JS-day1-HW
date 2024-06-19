let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max", "HAS", "PuRple", "dog"];

function findWords(dog_string, dog_names) {
    let foundMatch = false;
    for (let i = 0; i < dog_names.length; i++) {
        let name = dog_names[i];
        if (dog_string.toLowerCase().includes(name.toLowerCase())) {
            console.log(`Matched dog_name: ${name}`);
            foundMatch = true;
        }
    }
    if (!foundMatch) {
        console.log("No Matches");
    }
}

// Call the method with the parameters
findWords(dog_string, dog_names);
