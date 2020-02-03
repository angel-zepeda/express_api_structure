import { Request, Response } from "express";
import { pool } from "../../db/config";

export const getUsers = async (req: Request, res: Response) => {
  const response = await pool.query("SELECT * FROM USERS");
  return res.send({ data: response.rows });
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    await pool.query("INSERT INTO USERS (name, email) VALUES($1, $2)", [
      name,
      email
    ]);
    return res.send({
      data: { user: { name, email } },
      message: "User created",
      status: 200
    });
  } catch (error) {
    return res.send({
      status: 500,
      message: error.detail
    });
  }
};
