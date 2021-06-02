import { DiagnosticCenter } from "./diagnostic-center"

export class DiagnosticTest {
   diagonasticTestid: number
   testName: string
   testPrice: number
   normalValue: string
   units: string
   diagnosticcenter:DiagnosticCenter;

   constructor(diagonasticTestid: number, testName: string, testPrice: number, normalValue: string,units: string,diagnosticcenter:DiagnosticCenter){
       this.diagonasticTestid=diagonasticTestid;
       this.testName=testName;
       this.testPrice=testPrice;
       this.normalValue=normalValue;
       this.units=units;
       this.diagnosticcenter=diagnosticcenter;
   }
   toString():string{
       return "diagnosticTestid ,"+this.diagonasticTestid+"testName ,"+this.testName+"testPrice ,"+this.testPrice+"normalValue ,"+this.normalValue+"units "+this.units+"diagnosticCenter ,"+this.diagnosticcenter;
   }



}

