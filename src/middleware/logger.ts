// logs the incoming requested and saves them to logs/accessLog.log with unique ID using uuid.v4 and date/time

import express, { NextFunction } from 'express';
import { default as fsWithCallbacks } from 'fs';
import moment from 'moment';
import * as uuid from 'uuid';

const fs = fsWithCallbacks.promises;
const outputFile = './logs/accessLog.log';

const logger = (
  req: express.Request,
  res: express.Response,
  next: NextFunction
): void => {
  const uniqueId: string = uuid.v4();
  const protocol: string = req.protocol;
  const host: string | undefined = req.get('host');
  const url: string = req.originalUrl;
  const ip: string | string[] | undefined =
    req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const dateTime: string = moment().format('LLLL');

  const logData = `ID:${uniqueId} :: Site ${protocol}://${host}${url} is visited from IP address ${ip} at ${dateTime} \n`;

  const writeData = async () => {
    try {
      const myFile: fsWithCallbacks.promises.FileHandle = await fs.open(
        outputFile,
        'a+'
      );
      await myFile.write(logData);
      myFile.close();
    } catch (err) {
      console.log(err);
    }
  };
  writeData();

  next();
};

export default logger;
