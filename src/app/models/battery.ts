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

export const BATTERY_TYPES = [
  'TB50',
  'TB55',
  'TB60',
  'TB30',
  'Mavic-2',
  'Mavic-2 Enterprise',
  'Mavic 3 Battery',
  'Air 2 S Akku',
  'T30 Akku',
  'T20 Akku',
  'T16 Akku',
  'T10 Akku',
  'Phantom 4 Akku',
  'Mini 3 Akku',
  'Mini 4 Akku',
]

export const BATTERY_PROBLEM = [
  'Normal - keine Probleme',
  'leicht gebläht',
  'stark gebläht',
  'Gehäuse defekt',
  'Elektronik defekt',
  'Auffällige Zellen-Spannungsdifferenzen',

]

export const BATTERY_STATUS = [
  'Normal - in Verwendung',
  'Kritisch - Beobachten',
  'Störung - nicht mehr in Betrieb',
]
