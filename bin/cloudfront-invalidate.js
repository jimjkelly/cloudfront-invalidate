#!/usr/bin/env node

var dist = process.argv[2];

if (dist) {
	console.log('Invalidating CloudFont Distribution: ', dist);
	require('../lib/cloudfront-invalidate.js')(dist, errCode => process.exit(errCode));
} else {
	console.log('Usage: ' + process.argv[1] + ' DISTRIBUTION_ID');
}
