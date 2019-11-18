const axios = require('axios');

(async () => {
    const {data} = await axios.get('http://localhost:5000/comments/2');

    console.log();
})()