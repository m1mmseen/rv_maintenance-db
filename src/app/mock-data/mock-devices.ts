import {Cycle} from "../models/cycle";
import {Condition} from "../models/condition";

export const devices = [
  {
    deviceName: 'Mavic 3',
    deviceSerial: '29zusf67we0r28f6w',
    deviceFlightControllerSerial: '29zusf67we0r28f6w',
    deviceDescription: 'string',
    deviceCarePackInfo: 'string',
    deviceStatus: 'In Betrieb',
    deviceInstallation: new Date(2022, 8,15),
    deviceNextMaintenance: new Date(2024, 3,10),
    deviceAccessories: [
      {
        accessoryName: 'string',
        accessorySerial: 'string',
        accessoryDescription: 'string'
      },
      {
        accessoryName: 'string',
        accessorySerial: 'string',
        accessoryDescription: 'string'
      },
      {
        accessoryName: 'string',
        accessorySerial: 'string',
        accessoryDescription: 'string'
      },
      {
        accessoryName: 'string',
        accessorySerial: 'string',
        accessoryDescription: 'string'
      }
    ],
    deviceBatteries: [
      {
        batteryType: 'Mavic 3 Battery',
        batterySerial: '4a65s7fda89sdfasdfa',
        batteryInstallation: new Date(2022, 8,15),
        batteryCycleNumbers: [],
        batteryProblems: 'Normal - keine Probleme',
        batteryCondition: [],
        batteryStatus: 'Normal - in Verwendung'
      }
    ],
    deviceFirmware: '20.2.5',
    maintenanceLog: ['1'],
    deviceClient: '87e45dfs'
  },
  {
    deviceName: 'T10',
    deviceSerial: '14dusf67we0r28f6w',
    deviceFlightControllerSerial: '14dusf67we0r28f6w',
    deviceDescription: 'string',
    deviceCarePackInfo: 'string',
    deviceStatus: 'In Betrieb',
    deviceInstallation: new Date(2022, 8,15),
    deviceNextMaintenance: new Date(2024, 8,15),
    deviceAccessories: [
      {
        accessoryName: 'string',
        accessorySerial: 'string',
        accessoryDescription: 'string'
      },
      {
        accessoryName: 'string',
        accessorySerial: 'string',
        accessoryDescription: 'string'
      },
      {
        accessoryName: 'string',
        accessorySerial: 'string',
        accessoryDescription: 'string'
      },
      {
        accessoryName: 'string',
        accessorySerial: 'string',
        accessoryDescription: 'string'
      }
    ],
    deviceBatteries: [
      {
        batteryType: 'T10 Akku',
        batterySerial: '4a65rtzda89sdfsdfasdfa',
        batteryInstallation: new Date(2022, 8,15),
        batteryCycleNumbers: [],
        batteryProblems: 'Normal - keine Probleme',
        batteryCondition: [],
        batteryStatus: 'Normal - in Verwendung'
      }
    ],
    deviceFirmware: '20.2.5',
    maintenanceLog: ['2'],
    deviceClient: '854d5dfs'
  },
  {
    deviceName: 'Mavic 3 Enterprise',
    deviceSerial: 'er8usf67we0r28f6w',
    deviceFlightControllerSerial: 'er8usf67we0r28f6w',
    deviceDescription: 'string',
    deviceCarePackInfo: 'string',
    deviceStatus: 'In Betrieb',
    deviceInstallation: new Date(2022, 8,15),
    deviceNextMaintenance: new Date(2024, 8,15),
    deviceAccessories: [
      {
        accessoryName: 'string',
        accessorySerial: 'string',
        accessoryDescription: 'string'
      },
      {
        accessoryName: 'string',
        accessorySerial: 'string',
        accessoryDescription: 'string'
      },
      {
        accessoryName: 'string',
        accessorySerial: 'string',
        accessoryDescription: 'string'
      },
      {
        accessoryName: 'string',
        accessorySerial: 'string',
        accessoryDescription: 'string'
      }
    ],
    deviceBatteries: [
      {
        batteryType: 'Mavic 3 Akku',
        batterySerial: '4a65s7fda89ssdd58fasdfa',
        batteryInstallation: new Date(2022, 8,15),
        batteryCycleNumbers: [],
        batteryProblems: 'Normal - keine Probleme',
        batteryCondition: [],
        batteryStatus: 'Normal - in Verwendung'
      }
    ],
    deviceFirmware: '20.2.5',
    maintenanceLog: ['3'],
    deviceClient: '789d5dfs'
  }
]
function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = (`0${date.getMonth()}`).slice(-2); // JS months are 0-indexed
  const day = (`0${date.getDate()}`).slice(-2);
  return `${year}-${month}-${day}`;
}
