const express = require('express')
const Companyrouter = express.Router()




const { getCompanyDetails,
    getCompanyDetailsById,
    postCompanyDetails,
    patchCompanyDetails,
    deleteCompanyDetails,
     } = require("../controller/companyController")

Companyrouter.get('/', getCompanyDetails)

Companyrouter.get('/:id', getCompanyDetailsById)

Companyrouter.post('/', postCompanyDetails)

Companyrouter.patch('/:id', patchCompanyDetails)

Companyrouter.delete('/:id', deleteCompanyDetails)




module.exports = Companyrouter