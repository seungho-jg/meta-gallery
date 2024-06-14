const express = require('express');
const router = express.Router();

router.get('./ex', (req, res) => {
    res.json({message: 'hi'});
})

module.exports = router;