import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { createUser } from "../endpoints/createUser";
import { getAllUsers } from "../endpoints/getAllUsers";
import { createProduct } from "../endpoints/createProduct";
import { getAllProducts } from "../endpoints/getAllProducts";
import { createPurchases } from "../endpoints/createPurchases";
import { getUserPurchase } from "../endpoints/getUserPurchase";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/users", createUser)
app.get("/users", getAllUsers)
app.post("/products", createProduct)
app.get("/products", getAllProducts)
app.post("/purchases", createPurchases)
app.get("/users/:user_id/purchases", getUserPurchase)

const server = app.listen(process.env.PORT || 3003, () => {
  if(server){
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error("Failure upon starting server.");
  }
})

export default app;
