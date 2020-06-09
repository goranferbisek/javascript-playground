// object literal notation

let user = {
    name: 'Daisy',
    age : 32,
    email : 'daisy@example.com',
    location: 'London',
    blogs: ['Programming in Javascript', 'Objects in Javascript']
};

console.log(user);
console.log(user.name);

user.age = 35;
console.log(user.age);
console.log(user['age']);  // square bracket notation - like arrays
