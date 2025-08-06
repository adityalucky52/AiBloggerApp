import express from 'express';
import auth from '../middleware/auth.js';
import { approvedCommentById, deleteCommentById, getallBlogAdmins, getAllComments, getDashBoardData } from '../controllers/adminController.js';

import { adminLogin } from '../controllers/adminController.js';

const adminRouter = express.Router();
adminRouter.post('/login', adminLogin);
adminRouter.get('/comments', auth ,getAllComments);
adminRouter.get('/blogs',auth,getallBlogAdmins );
adminRouter.post('/delete-comment',auth,deleteCommentById);
adminRouter.post('/approve-comment',auth,approvedCommentById);
adminRouter.get('/dashboard',auth, getDashBoardData);


export default adminRouter;