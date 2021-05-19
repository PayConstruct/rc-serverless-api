
import { Handler, Context } from 'aws-lambda';
import dotenv from 'dotenv';
import path from 'path';
const dotenvPath = path.join(__dirname, '../../', `../.env`);
console.log("Dot env path" + dotenvPath);
dotenv.config({
  path: dotenvPath,
});

import { trades } from '../model';
import { TradesController } from '../controller/trades';
const tradesController = new TradesController(trades);

export const findTradeById: Handler = (event: any, context: Context) => {
  return tradesController.findOne(event, context);
};

export const findTrades: Handler = () => tradesController.find();

export const createTrade: Handler = (event: any, context: Context) => {
  return tradesController.create(event, context);
};

export const updateTrade: Handler = (event: any) => tradesController.update(event);
export const deleteTrade: Handler = (event: any) => tradesController.deleteOne(event);
