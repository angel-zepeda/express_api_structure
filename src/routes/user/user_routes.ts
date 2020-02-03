import expres from "express";
import { getUsers, getOneuser } from "../../controllers";

export const userRoutes = expres();

userRoutes.get("/", getUsers);
userRoutes.get("/usuario", getOneuser);
