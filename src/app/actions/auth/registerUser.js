/*"use server";

import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

export const registerUser = async (payload) =>{
  const userCollection = await dbConnect(collectionNamesObj.userCollection);

    //validation
    const{email, password} =payload;
    if(!email || !password) return {success: false};
    const user = await userCollection.findOne({email: payload.email});

    if(!user){
        const result = await userCollection.insertOne(payload);
    return result;

    }

    return {success: false};
    
}*/

"use server";

import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
  const userCollection = await dbConnect(collectionNamesObj.userCollection);

  const { email, password } = payload;
  if (!email || !password) return { success: false, message: "Missing fields" };

  const existingUser = await userCollection.findOne({ email });

  if (!existingUser) {
    const result = await userCollection.insertOne(payload);

    
    return { 
      success: true, 
      insertedId: result.insertedId.toString() 
    };
  }

  return { success: false, message: "User already exists" };
};
