import { Request, Response } from "express";
import { User } from "../models";

const createCurrentUser = async (req: Request, res: Response) => {
    try {
        const { auth0Id } = req.body;
        const existingUser = await User.findOne({ auth0Id });
        if (existingUser) {
            return res.status(200).json();
        }
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err: any) {
        res.status(500).json({ message: "Error creating user!" });
    }
};

export default {
    createCurrentUser,
};
