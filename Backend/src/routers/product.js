import { Router } from "express";
import {
  create,
  getAll,
  getDetail,
  remove,
  update,
} from "../controllers/product";

const routerPro = Router();

routerPro.get("/", getAll);
routerPro.get("/:id", getDetail);
routerPro.post("/", create);
routerPro.put("/:id", update);
routerPro.delete("/:id", remove);

export default routerPro;
