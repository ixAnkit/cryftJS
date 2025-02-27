import { Avalanche, Buffer } from "avalanche/dist"
import { AVMAPI } from "avalanche/dist/apis/avm"

const ip: string = "localhost"
const port: number = 9650
const protocol: string = "http"
const networkID: number = 1337
const avalanche: Cryft = new Cryft(ip, port, protocol, networkID)
const xchain: AVMAPI = avalanche.XChain()

const main = async (): Promise<any> => {
  const assetID: Buffer = await xchain.getAVAXAssetID()
  console.log(assetID)
}

main()
