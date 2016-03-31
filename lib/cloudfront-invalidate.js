"use strict";

var aws = require('aws-sdk'),
		uuid = require('node-uuid'),
		cloudfront = new aws.CloudFront();

module.exports = function(id, cb) {
	cloudfront.createInvalidation({
		DistributionId: id,
		InvalidationBatch: {
			CallerReference: uuid.v4(), /* required */
			Paths: { /* required */
				Quantity: 1, /* required */
				Items: [
					'/*',
				]
			}
	  }
	}, function(err, data) {
	  if (err) {
	  	console.log(err, err.stack); // an error occurred
	  	return cb(1);
	  } else {
	  	console.log(data);           // successful response
	  	return cb(0);
	  }
	});
}; // exports
