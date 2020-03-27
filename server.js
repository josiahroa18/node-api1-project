const express = require('express');
const ids = require('short-id');
const server = express();
const port = 5000;


server.use(express.json());

const data = [
    {
        id: 0,
        name: 'Josiah',
        bio: 'A genius but humble software developer :P'
    }
]

server.post('/api/users', (req, res) => {
    let newUser = req.body
    newUser = {
        id: ids.generate(),
        ...req.body
    }
    if(!req.body.name || !req.body.bio){
        res.status(400).send({ errorMessage: 'Please provide name and bio for the user.'});
    }else{
        data.push(newUser);
        res.status(201).send(newUser);
    }
});

server.get('/api/users', (req, res) => {
    if(data.length === 0){
        res.status(500).send({ errorMessage: "The users information could not be retrieved." });
    }else{
        res.send(data);
    }
});

server.get('/api/users/:id', (req, res) => {
    const user = data.find(item => {
        if(item.id === (req.params.id * 1)){
            return item;
        }
    });
    if(user){
        res.status(200).send(user);
    }else{
        res.status(404).send({ message: "The user with the specified ID does not exist." });
    }
});

server.delete('/api/users/:id', (req, res) => {
    const user = data.find(item => {
        if(item.id === (req.params.id * 1)){
            return item;
        };
    });
    if(user){
        const users = data.filter(item => {
            if(item.id !== user.id){
                return item;
            }
        });
        data.splice(data.indexOf(user), 1);
        res.status(200).send(users);
    }else{
        res.status(404).send({ message: "The user with the specified ID does not exist." });
    }
});

server.put('/api/users/:id', (req, res) => {
    const user = data.find(item => {
        if(item.id === (req.params.id * 1)){
            return item;
        }
    });
    if(!req.body.name || !req.body.bio){
        res.status(400).send({ errorMessage: "Please provide name and bio for the user." });
    }else{
        data[data.indexOf(user)] = {
            id: user.id,
            name: req.body.name,
            bio: req.body.bio
        }
        res.status(200).send(data.find(item => item.id === (req.params.id * 1)));
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})