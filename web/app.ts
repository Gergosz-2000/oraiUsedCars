import { User } from './user.js';

var url = 'https://jsonplaceholder.typicode.com/users/';

fetch(url)
.then(res => res.json())
.then(users => {
    console.log(users);
    
});