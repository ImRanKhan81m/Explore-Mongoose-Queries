import express from "express";
import { createUser, getAllAdminUsers, getUserById, getUsers } from "./user.controller";
const router = express.Router()

router.get('/', getUsers);
router.get('/admins', getAllAdminUsers)
router.get('/:id', getUserById);
router.post('/create-user', createUser);


export default router;
