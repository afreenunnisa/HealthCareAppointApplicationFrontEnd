import { DiagnosticCenter } from "./diagnostic-center";
import { DiagnosticTest } from "./diagnostic-test";
import { TestResult } from "./test-result";

export class Appointment {
    id: number;

    appointmentdate: Date;
  
    approvalStatus: string;
  
    tests: DiagnosticTest[];
  
    centers: DiagnosticCenter;
  
    testResults: TestResult[];
  }
