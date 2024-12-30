import { Cryft } from "avalanche/dist"
import { PlatformVMAPI } from "avalanche/dist/apis/platformvm"

const ip: string = "localhost"
const port: number = 9650
const protocol: string = "http"
const networkID: number = 1337
const avalanche: Cryft = new Cryft(ip, port, protocol, networkID)
const pchain: PlatformVMAPI = avalanche.PChain()

const main = async (): Promise<any> => {
  const ids: string[] = []
  const subnets: object[] = await pchain.getSubnets(ids)
  console.log(subnets)
}

main()
