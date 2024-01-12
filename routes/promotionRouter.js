const express = require('express');
const promotionRouter = express.Router(); 

promotionRouter.route('/')
.all((req, res, next) => { //.all routing method, a catch all method - goes to this first, then goes to specific request eg .get if it's a get request, .post if its post request
    res.statusCode = 200; //status ok
    res.setHeader('Content-Type', 'text/plain');
    next();
}) //all chained together so no semicolon here
.get((req, res) => {
    res.end('Will send all the promotions to you'); 
})
.post((req, res) => {
    res.end(`Will add the promotion: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403; //operation not supported code
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res) => {
    res.end('Deleting all promotions');
});

promotionRouter.route('/:promotionId')
.all((req, res, next) => { 
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the promotion: ${req.params.promotionId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /promotions/${req.params.promotionId}`);
})
.put((req, res) => {
    res.write(`Updating the promotion: ${req.params.promotionId}\n`);
    res.end(`Will update the promotion: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting promotion: ${req.params.promotionId}`);
})

module.exports = promotionRouter; //exporting promotionRouter so can be used in other 'modules' or files - similar to React - used in server.js