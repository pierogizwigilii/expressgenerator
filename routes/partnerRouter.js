const express = require('express');
const partnerRouter = express.Router(); 

partnerRouter.route('/')
.all((req, res, next) => { //.all routing method, a catch all method - goes to this first, then goes to specific request eg .get if it's a get request, .post if its post request
    res.statusCode = 200; //status ok
    res.setHeader('Content-Type', 'text/plain');
    next();
}) //all chained together so no semicolon here
.get((req, res) => {
    res.end('Will send all the partners to you'); 
})
.post((req, res) => {
    res.end(`Will add the partner: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403; //operation not supported code
    res.end('PUT operation not supported on /partners');
})
.delete((req, res) => {
    res.end('Deleting all partners');
});

partnerRouter.route('/:partnerId')
.all((req, res, next) => { 
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the partner: ${req.params.partnerId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /partners/${req.params.partnerId}`);
})
.put((req, res) => {
    res.write(`Updating the partner: ${req.params.partnerId}\n`);
    res.end(`Will update the partner: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting partner: ${req.params.partnerId}`);
})

module.exports = partnerRouter; //exporting partnerRouter so can be used in other 'modules' or files - similar to React - used in server.js