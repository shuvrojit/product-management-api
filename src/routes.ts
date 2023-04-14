import {Request, Response, Router} from "express"
import { createCategory, deleteCategory, getAllCategories, getOneCategory, updateCategory } from "./modules/category"

const router = Router()


router.get("/products/", (req: Request, res: Response) => {})
router.get("/product/:id", (req: Request, res: Response) => {})
router.post("/products/", (req: Request, res: Response) => {})
router.put("/product/:id", (req: Request, res: Response) => {})
router.delete("/product/:id", (req: Request, res: Response) => {})

router.get("/categories/", getAllCategories)
router.get("/categories/:id", getOneCategory)
router.put("/categories/:id", updateCategory)
router.post("/categories/", createCategory)
router.delete("/categories/:id", deleteCategory)


export default router
