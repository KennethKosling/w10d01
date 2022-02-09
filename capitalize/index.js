// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str){
    let input = str.split(' ');
    let output = [];
    
    for(let i = 0; i < input.length; i++){
        output.push(input[i].charAt(0).toUpperCase() + input[i].slice(1));
    }
    return output.join(' ');
}

module.exports = capitalize;