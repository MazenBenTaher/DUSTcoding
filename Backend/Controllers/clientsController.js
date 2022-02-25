import asyncHandler from "express-async-handler";
import client from "../models/clientsModel.js";

const getClients = asyncHandler(async (req, res) => {
  const clients = await client.find();
  if (!client) {
    res.status(400);
    throw new Error("is not client");
  }
  res.status(200).json(clients);
});

const setClients = asyncHandler(async (req, res) => {
  if (
    !req.body.username ||
    !req.body.password ||
    !req.body.fullName ||
    !req.body.email
  ) {
    res.status(400);
    throw new Error("please add everything ");
  }

  const newClient = await client.create({
    username: req.body.username,
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password,
  });
  res.status(200).json(newClient);
});

const updateClient = asyncHandler((req, res) => {
  const body = req.body;
  client.updateOne({ _id: req.params.id }, body, (err, data) => {
    if (err) return res.status(500).send(err);
    return res.send("updated");
  });

  res.status(200);
});

const delateClient = asyncHandler(async (req, res) => {
  const clients = await client.findById(req.params.id);
  if (!clients) {
    res.status(400);
    throw new Error("is not client");
  }
  await clients.deleteOne();
  res.status(200).json({ id: req.params.id });
});

export { getClients, setClients, updateClient, delateClient };
