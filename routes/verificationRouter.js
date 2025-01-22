import express from 'express';
import sendEmail from '../controllers/sendEmail.js';
import verifyEmail from '../controllers/verifyEmail.js';
const route = express.Router();

route.get('/sendEmail',sendEmail)
route.get('/:token',verifyEmail)
export default route;