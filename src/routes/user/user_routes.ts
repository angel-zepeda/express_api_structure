import expres from "express";
import { getUsers, createUser } from "../../controllers";

export const userRoutes = expres();

userRoutes.get("/", getUsers);
userRoutes.post("/users", createUser);
