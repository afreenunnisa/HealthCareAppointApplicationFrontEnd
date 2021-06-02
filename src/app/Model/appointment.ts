import { DiagnosticCenter } from "./diagnostic-center";
import { DiagnosticTest } from "./diagnostic-test";
import { Patient } from "./patient";
import { TestResult } from "./test-result";

export class Appointment {
    appointmentid: number;
    patients: Patient;
    diagnostictest: DiagnosticTest;
    appointmentdate: Date;
    approvalstatus: string;
    testResults: TestResult;
    diagnosticCenter: DiagnosticCenter;
    constructor(appointmentid: number, patients: Patient, diagnostictest: DiagnosticTest, appointmentdate: Date, approvalstatus: string, testResults: TestResult,
        diagnosticCenter: DiagnosticCenter,) {
        this.appointmentid = appointmentid
        this.patients = patients
        this.diagnostictest = diagnostictest
        this.appointmentdate = appointmentdate
        this.approvalstatus = approvalstatus
        this.testResults = testResults;
        this.diagnosticCenter = diagnosticCenter;
    }
    toString(): string {
        return "appointmentid " + this.appointmentid + ",patient " + this.patients + ",dtestid " + this.diagnostictest + ",appointmentdate " + this.appointmentdate + ", approvalstatus" + this.approvalstatus + ",  testResult" + this.testResults + ", diagnosticCenter" + this.diagnosticCenter;
    }
}
