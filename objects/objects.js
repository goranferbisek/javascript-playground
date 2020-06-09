// object literal notation

let user = {
    name: 'Daisy',
    age : 32,
    email : 'daisy@example.com',
    location: 'London',
    blogs: ['Programming in Javascript', 'Objects in Javascript'],
    login: function() {
        console.log('The user logged in');
    },
    logBlogs: function() {
        // this does not work with arrow functions
        // this is the global Window object
        console.log('This user has writen the following blogs:');

        this.blogs.forEach(blog => {
            console.log(blog);
        });
    }
};

console.log(user);
console.log(user.name);

user.age = 35;
console.log(user.age);
console.log(user['age']);  // square bracket notation - like arrays

console.log(typeof user);

// methods
user.login();
user.logBlogs();