import mongoose from "mongoose";

import {getServerSession} from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { User } from "@/models/User";
import { UserInfo } from "@/models/UserInfo";


export async function PUT(req) {
    mongoose.connect(process.env.MONGO_URL);
    const data = await req.json();
    const {name, ...otherUserInfo} = data;
  
    const session = await getServerSession(authOptions);
    const email = session.user.email;
    let filter = {email};
    
    const user = await User.findOne(filter);
    await User.updateOne(filter, {name});
    await UserInfo.findOneAndUpdate({email:user.email}, otherUserInfo, {upsert:true});
    
    return Response.json(true);
}

export async function GET(req) {
    mongoose.connect(process.env.MONGO_URL);
  
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    if (!email) {
      return Response.json({});
    }
    let filterUser = {email};
  
    const user = await User.findOne(filterUser).lean();
    const userInfo = await UserInfo.findOne({email:user.email}).lean();
    
    return Response.json({...user, ...userInfo});
}