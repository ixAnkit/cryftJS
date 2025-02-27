import { Cryft } from "avalanche/dist"
import { AdminAPI } from "avalanche/dist/apis/admin"

const ip: string = "localhost"
const port: number = 9650
const protocol: string = "http"
const networkID: number = 1337
const avalanche: Cryft = new Cryft(ip, port, protocol, networkID)
const admin: AdminAPI = avalanche.Admin()

const main = async (): Promise<any> => {
  const successful: boolean = await admin.stopCPUProfiler()
  console.log(successful)
}

main()
