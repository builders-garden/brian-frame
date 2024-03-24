import { PinataFDK } from "pinata-fdk";

const pinataGateway = process.env.PINATA_GATEWAY!;
const pinataJWT = process.env.PINATA_JWT!;

const fdk = new PinataFDK({
    pinata_jwt: pinataJWT,
    pinata_gateway: pinataGateway,}, 
);
