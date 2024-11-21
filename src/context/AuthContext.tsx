import {createContext} from "react";
import {IAuthContext} from "../models/user.ts";

export const AuthContext = createContext<IAuthContext | null>(null)