import {Device} from "./device";

export type Client = {
  id: string,
  name: string,
  company: string,
  email: string,
  devices: string[],
  isActive: boolean
}
