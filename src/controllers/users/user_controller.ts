import { Request, Response } from "express";
import { client } from "../../db/config";

interface Props {
  req: Request;
  res: Response;
}
client.connect();

export function getUsers({ req, res }: Props) {
  client.query("SELECT NOW()", (err, success) => {
    if (err) return res.send({ messsage: err });
    res.send({ success });
    client.end();
  });
}

export function getOneuser({ req, res }: Props) {
  res.send({ messsage: "Hola usuari 2" });
}
