import {Request, Response, Router} from "express"

const router = Router()


router.get("/products/", (req: Request, res: Response) => {})
router.get("/product/:id", (req: Request, res: Response) => {})
router.post("/products/", (req: Request, res: Response) => {})
router.put("/product/:id", (req: Request, res: Response) => {})
router.delete("/product/:id", (req: Request, res: Response) => {})
