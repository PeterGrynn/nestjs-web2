const axios = require('axios');

(async () => {
    const { data } = await axios.post('http://localhost:5000/auth/login', {
        username: 'Szymon',
        password: 'Szymon'
    });
    console.log(data.access_token);

    const d = await axios.get('http://localhost:5000/profile',{
        headers: { authorization: `Bearer ${data.access_token}`}
    })

    console.log(d);
})();