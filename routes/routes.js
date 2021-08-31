import express from "express"
import {getAllSauces, getOneSauce, createSauce, updateSauce, deleteSauce, likeSauce} from "./../controllers/sauceControllers.js";
import {signUp, logIn} from "./../controllers/userControllers.js";
import authorization from '../middleware/auth.js'
import multerImage from '../middleware/multer-config.js'
const router = express.Router()

router.post('/auth/signup', signUp);
router.post('/auth/login', logIn);
router.get('/sauces', authorization, getAllSauces);
router.get('/sauces/:id', authorization, getOneSauce);
router.post('/sauces', authorization, multerImage, createSauce);
router.put('/sauces/:id', authorization, multerImage, updateSauce);
router.delete('/sauces/:id', authorization, deleteSauce);
router.post('/sauces/:id/like', authorization, likeSauce);

export default router