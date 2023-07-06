#!/bin/sh

# Start the first app
node /opt/projects/1/app.js &

# Start the second app
node /opt/projects/2/app.js &

# Start nginx in the foreground
nginx -g 'daemon off;'
