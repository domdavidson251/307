const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

const users = { 
    users_list: [
        { 
            id: 'xyz789',
            name: 'Charlie',
            job: 'Janitor',
        },
        {
            id: 'abc123', 
            name: 'Mac',
            job: 'Bouncer',
        },
        {
            id: 'ppp222', 
            name: 'Mac',
            job: 'Professor',
        }, 
        {
            id: 'yat999', 
            name: 'Dee',
            job: 'Aspring actress',
        },
        {
            id: 'zap555', 
            name: 'Dennis',
            job: 'Bartender',
        }   
    ]
}

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/users', (req, res) => {
    const name = req.query.name;
    const job = req.query.job;
    let result = users.users_list;

    if (name && job) {
        result = findUserByNameAndJob(name, job);
    } else if (name) {
        result = findUserByName(name);
    } else if (job) {
        result = findUserByJob(job);
    } else {
        res.send(users);
    }

    // make sure result (an array) is in a JSON before returning 
    result = {users_list: result};
    res.send(result);
});
const findUserByName = (name) => { 
    return users.users_list.filter( (user) => user['name'] === name); 
}
const findUserByJob = (name) => { 
    return users.users_list.filter( (user) => user['job'] === job); 
}
const findUserByNameAndJob = (name, job) => { 
    return users.users_list.filter( (user) => (user['name'] === name && user['job'] === job)); 
}


app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    let result = findUserById(id);
    if (result === undefined || result.length == 0)
        res.status(404).send('Resource not found.');
    else {
        result = {users_list: result};
        res.send(result);
    }
});
function findUserById(id) {
    return users.users_list.find( (user) => user['id'] === id);
}

app.post('/users', (req, res) => {
    const userToAdd = req.body;
    addUser(userToAdd);
    res.status(200).end();
});
const addUser = (user) => {
    users.users_list.push(user);
}

app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    users.users_list.forEach((ele, i) => {
        if (ele?.id === id) {
            res.send(ele);
            delete users.users_list[i];
            // users.users_list.splice(index, i);
            return;
        }
    });

    res.status(404).send('Resource not found.');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});    
