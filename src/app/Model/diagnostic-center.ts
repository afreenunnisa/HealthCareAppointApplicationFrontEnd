import { DiagnosticTest } from "./diagnostic-test";

export class DiagnosticCenter {
  public id: number;
  public cname: string;
  public contactno: number;
  public address: string;
  public contactemail:string;
  public tests:DiagnosticTest[]; 
  }
