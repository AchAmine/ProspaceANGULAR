import { typeComplaint } from "../enum/typeComplaint.enum";
import { User } from "./User";

export class complaints{
    idComplaint: number;
    createdAt: Date;

    type?: typeComplaint;
    user: User;
}