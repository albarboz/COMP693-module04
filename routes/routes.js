import express from 'express'
import { getAllEmployees, createEmployee, deleteEmployee } from '../controllers/employee.js'

const router = express.Router()

router.route('/api/employees')
    .get(getAllEmployees)
    .post(createEmployee)

router.route('/api/employees/:id')
    .delete(deleteEmployee)


export default router 