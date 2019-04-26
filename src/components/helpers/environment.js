let APIURL = '';

switch(window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:8080';
        break;
    
    case 'am-s3-image-client.herokuapp.com':
        APIURL = 'https://am-s3-image.herokuapp.com';
        break;
}

export default APIURL;