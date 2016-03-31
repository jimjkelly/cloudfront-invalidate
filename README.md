# Cloudfront Invalidate

The CloudFront Invalidate tool does just what it says
on the tin - it invalidates a CloudFront distribution.
This is useful for when deploying static web assets,
like a simple static website backed by S3, where it's
easier to just invalidate the whole distribution than
try and pick out what changed.

## Installation

Installation is via npm:

	$ npm install @jimjkelly/cloudfront-invalidate

## Configuration

The standard methods of configuration for the
[AWS-SDK](http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html)
apply. An easy method is using environment variables.

## Usage

The only argument required to run the tool is your
CloudFront distribution ID:

	$ cloudfront-invalidate DISTRIBUTION_ID

If successful, a bit of JSON will be spit out indicating
your invalidation is in progress. Success!

If there's a problem, the error information returned from
the AWS SDK should be printed and indicate what it is.
