import mongoose from "mongoose";
import { Category } from "@/models/Category";
import { isAdmin } from "../auth/[...nextauth]/route";


export async function POST(req) {
    mongoose.connect(process.env.MONGO_URL);
    const {name} = await req.json();
    if (await isAdmin()) {
      const categoryDoc = await Category.create({name});
      return Response.json(categoryDoc);
    } else {
      return Response.json({});
    }
}