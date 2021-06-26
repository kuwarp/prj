const express = require('express')
const router = express.Router()

const axios = require('axios')

router.get('', async (req, res) => {
    // 

    try {
        const newapi = await get('')
        res.render('news', {articles:newapi.data})
    } catch (err) {

        if (err.response) {
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.header);
        } else if (err.requiest) {
            console.log(err.requiest);
        } else {
            console.error('Error', err.message);
        }

    }


})
module.exports = router