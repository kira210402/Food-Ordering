import { Request, Response } from "express";
import User from "../models/user";

const getAllUser = async (req: Request, res: Response) => {

}; 

const getOneUser = async (req: Request, res: Response) => {

};

const createUser = async (req: Request, res: Response) => { 
  try { 
    const { auth0Id } = req.body;
    
    // 1. check if the user exists
    const existingUser = await User.findOne({ auth0Id });
    
    if (existingUser) {
      return res.status(200).json();
    }
    
    // 2. create the user if it doesn't exist
    const newUser = new User(req.body);
    await newUser.save();
    
    // 3. return the user object to the calling client
    res.status(201).json(newUser.toObject());

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error when creating user" })
  }

};

const updateUser = async (req: Request, res: Response) => {

};

const deleteUser = async (req: Request, res: Response) => {

};

export default {
  getAllUser,
  getOneUser,
  updateUser,
  createUser,
  deleteUser
}

