function capitalize(str) {
    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalize("hello world"));  // Output: "Hello World"