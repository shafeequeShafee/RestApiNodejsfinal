const express = require('express')


const router =express.Router()


const userData = [
    { id: 1, name: "sfq", company: "claysys" },
    { id: 2, name: "sharvi", company: "claysys" },
    { id: 3, name: "tintu", company: "claysys" },
    { id: 4, name: "boss", company: "claysys" },
    { id: 5, name: "raseena", company: "claysys" }
]


// router.get("/userStatic", (req, res) => {
router.get("/", (req, res) => {    // eganneyum kodukkaa
    const userId = +req.params.id
    const userName = req.params.name

    const filteredUserData = userData.filter((data, index, array) => {
        if (userId || userName) {
            return data.id === userId || data.name === userName
        }
        else {
            return data
        }

        return data
    })
    res.json(filteredUserData)
})



module.exports = router