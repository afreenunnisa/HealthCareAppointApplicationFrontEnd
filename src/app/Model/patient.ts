import { Appointment } from "./appointment";
import { User } from "./user";

export class Patient {
    id: number;
    name: String;
    phoneno: String;
    age: number;
    gender: String;
    user: User;
    appointments: Appointment;

    consturctor(id: number, name: String, phoneno: String, age: number, gender: String, user: User, appointment: Appointment) {
        this.id = id;
        this.name = name;
        this.phoneno = phoneno;
        this.age = age;
        this.gender = gender;
        this.user = user;
        this.appointments = appointment;
    }
    toString(): string {
        return `Patient [id=` + this.id + `, name=` + this.name + `, phoneno=` + this.phoneno + `, age=` + this.age + `, gender=` + this.gender +
            `User =` + this.user + `, appointments=` + this.appointments + `]`;
    }
}