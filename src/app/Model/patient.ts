import { Appointment } from "./appointment";
export class Patient {
    id: number;
    name: String;
    phoneno: String;
    age: number;
    gender: String;
    appointments: Appointment[];
}