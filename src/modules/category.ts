import { NextFunction, Request, Response } from "express"
import db from "../db"


export const getAllCategories = async (req: Request, res: Response, next: NextFunction) => {

  const categories = await db.select("*").from("category")

  if(!categories) {
    res.status(404)
    res.end()
  }

  res.send({"data": categories})
  next()
}


export const getOneCategory = async (req: Request, res: Response, next: NextFunction) => {
  const category = await db("category").where({id:req.params.id})
  res.json({"data": category})
}

export const createCategory = async (req: Request, res: Response, next: NextFunction) => {
  db("category").insert(req.body)
    .then(() => res.json({"msg": "success"}))
    .catch((err) => console.log(err))
  next()
}

export const updateCategory = async (req: Request, res: Response, next: NextFunction) => {
   const update = await db("category").where({id:req.params.id}).update({name: req.body.name})

  res.json({"msg": "updated"})
  next()
}

export const deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
  const del = await db("category").where({id:req.params.id}).del()

  res.json({"msg":"success"})

  next()

}
