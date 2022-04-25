import { Plan } from "./plan";
import { User } from "./user";

export class RealEnrollement {

    en_id : number;
    date : string;
    telenum : number;
    adrrs : string;
    userc : User;
    planc : Plan;

    constructor(){
        this.userc =    new  User();
        this.planc =    new  Plan();
    }
}
