import { Speciality } from "../speciality/speciality";

export interface User {
    id: number;
    email: string;
    username: string;
    password:string;
    speciality: Speciality;
}
