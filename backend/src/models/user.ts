import mongoose from "mongoose";
import { IUser } from "../interfaces";

const userSchema = new mongoose.Schema<IUser>(
    {
        auth0Id: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        name: {
            type: String,
        },
        addressLine1: {
            type: String,
        },
        city: {
            type: String,
        },
        country: {
            type: String,
        },
        profileUrl: {
            type: String,
        },
    },
    {
        timestamps: true,
        collection: "users",
    }
);

const User = mongoose.model<IUser>("user", userSchema);
export default User;
