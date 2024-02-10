const express = require("express")
const router = express.Router()
const { SubmitContactDetails } = require("../controllers/SubmitContactDetails")

router.post("/contactus", SubmitContactDetails)

module.exports = router