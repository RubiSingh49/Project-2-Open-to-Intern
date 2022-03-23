const express = require('express');
const router = express.Router();

const CollegeController = require("../controllers/collegeController")
const InternController = require("../controllers/internController")


// Create college-----------------------------------------
router.post('/functionup/colleges', CollegeController.createCollege)

// Create Intern------------------------------------------
router.post('/functionup/interns', InternController.createIntern)

// Get College Details------------------------------------
router.get('/functionup/collegeDetails', CollegeController.getCollegeDetails)



module.exports = router;






