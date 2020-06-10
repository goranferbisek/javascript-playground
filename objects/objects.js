// object literal notation

let user = {
    name: 'Daisy',
    age : 32,
    email : 'daisy@example.com',
    location: 'London',
    blogs: [
        { title: 'Programming in Javascript', likes: 30 },
        { title: 'Objects in Javascript', likes: 50 }
    ],
    login() {
        console.log('The user logged in');
    },
    logBlogs() {
        console.log('This user has writen the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
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