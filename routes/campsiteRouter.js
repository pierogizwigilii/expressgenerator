const express = require('express');
const campsiteRouter = express.Router(); //creating new express router - express.Router() method creates object named campsiteRouter that we can use with express routing methods

campsiteRouter.route('/')
.all((req, res, next) => { //.all routing method, a catch all method - goes to this first, then goes to specific request eg .get if it's a get request, .post if its post request
    res.statusCode = 200; //status ok
    res.setHeader('Content-Type', 'text/plain');
    next();
}) //all chained together so no semicolon here
.get((req, res) => {
    res.end('Will send all the campsites to you'); 
})
.post((req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403; //operation not supported code
    res.end('PUT operation not supported on /campsites');
})
.delete((req, res) => {
    res.end('Deleting all campsites');
});

campsiteRouter.route('/:campsiteId')
.all((req, res, next) => { 
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the campsite: ${req.params.campsiteId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`);
})
.put((req, res) => {
    res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
    res.end(`Will update the campsite: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting campsite: ${req.params.campsiteId}`);
})

module.exports = campsiteRouter; //exporting campsiteRouter so can be used in other 'modules' or files - similar to React