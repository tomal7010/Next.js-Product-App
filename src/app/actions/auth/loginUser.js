"use server"

import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

export const loginUser = async (payload) => {
  const { email, password } = payload;

  // DB connection
  const userCollection = await dbConnect(collectionNamesObj.userCollection);

  // Find user by email
  const user = await userCollection.findOne({ email });
  if (!user) return null;

  // Plain text password check
  if (user.password !== password) return null;

  // Return user without password
  const { password: pwd, ...userWithoutPassword } = user;
  return userWithoutPassword;
};

/*
"use server"

import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

export const loginUser = async (payload) => {
  const { email, password } = payload;

  // DB connection
  const userCollection = await dbConnect(collectionNamesObj.userCollection);

  // Find user by email
  const user = await userCollection.findOne({ email });
  if (!user) return null;

  // Plain text password check 
  if (user.password !== password) return null;

  // Return user without password, but _id must be string
  const { password: pwd, _id, ...rest } = user;
  return { id: _id.toString(), ...rest };
};
*/