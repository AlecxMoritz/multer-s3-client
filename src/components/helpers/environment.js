let APIURL = '';

switch(window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3000';
        break;
    
    case 'am-image-client.herokuapp.con':
        APIURL = 'https://am-image-db.herokuapp.com';
        break;
}

export default APIURL;