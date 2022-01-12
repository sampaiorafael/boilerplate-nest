import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env.NODE_ENV}` }) 

export const typeormConfig = (): TypeOrmModule => {
    return {
        type: 'postgres',
        host: process.env.DB_HOSTNAME,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA,
        entities: [__dirname + '/../modules/**/*.entity.{js,ts}'],
        synchronize: false,
        logging: process.env.NODE_ENV === 'development' ? true : false,
        autoLoadEntities: true,
      }
}