import * as fs from 'fs';
import {parse} from 'dotenv';

export class ConfigService {

    private readonly envConfig:{[key:string]:string}; 

    constructor(){
        const isDevelopmentEnv= process.env.NODE_ENV!= "production"; 

        if(isDevelopmentEnv){
            const envFilePaht= __dirname + "/../../.env";
            const exisPaht = fs.existsSync(envFilePaht);
            if(!exisPaht){
                console.log(".env file does not exists"); 
                process.exit(0);
            }

            this.envConfig= parse(fs.readFileSync(envFilePaht));

        }else{
            this.envConfig ={
                PORT: process.env.PORT,
            }
        }
    }


    get(key: string){
        return this.envConfig[key];
    }
}