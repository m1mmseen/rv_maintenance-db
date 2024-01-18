import {Cycle} from "./cycle";
import {Condition} from "./condition";

export type Battery = {
  batteryType: string,
  batterySerial: string,
  batteryInstallation: Date,
  batteryCycleNumbers: Cycle[],
  batteryProblems: string
  batteryCondition: Condition[],
  batteryStatus: string
}
