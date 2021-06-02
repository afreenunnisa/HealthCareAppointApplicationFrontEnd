import { DiagnosticTest } from "./diagnostic-test";

export class DiagnosticCenter {
    id: number;
    cname: string;
    contactno: string;
    address: string;
    contactemail: string;
    servicesoffered: string;
    diagnostictest: DiagnosticTest;
    constructor(id: number, cname: string, contactno: string, address: string, contactemail: string, servicesoffered: string, diagnostictest: DiagnosticTest) {
        this.id = id;
        this.cname = cname;
        this.contactno = contactno;
        this.address = address;
        this.contactemail = contactemail;
        this.servicesoffered = servicesoffered;
        this.diagnostictest = diagnostictest;
    }
    toString(): string {
        return "id: " + this.id + ", cname: " + this.cname + ", contactno:" + this.contactno + ", address: " + this.address + " , contactemail:" + this.contactemail + ",servicesoffered:" + this.servicesoffered + ",tests:" + ", diagnostictest:" + this.diagnostictest;
    }
}
