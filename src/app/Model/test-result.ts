import { Appointment } from "./appointment";

export class TestResult {
    id: number;
    testreading: number;
    condition: string;
    testname: string;
    appointments: Appointment;
    constructor(id: number, testreading: number, condition: string, testname: string, appointments: Appointment) {
        this.id = id;
        this.testreading = testreading;
        this.condition = condition;
        this.testname = testname;
        this.appointments = appointments;
    }
    toString(): string {
        return "Id: " + this.id + ", Testreading: " + this.testreading + ", Condition:" + this.condition + ", TestName:" + this.testname + ", Appointmnets:" + this.appointments;
    }
}
