import { Context } from "aws-lambda";
import { Model } from "mongoose";
import { TradeRequestDto } from "../model/dto/tradeDTO";
import { TradesService } from "../service/trades";
import { MessageUtil } from "../utils/message";

export class TradesController extends TradesService {

    constructor (trades: Model<any>) {
      super(trades);
    }

    async create (event: any, context?: Context) {
      console.log('functionName', context.functionName);
      const params: TradeRequestDto = JSON.parse(event.body);
  
      try {
        const result = await this.createTrade(params);
  
        return MessageUtil.success(result);
      } catch (err) {
        console.error(err);
  
        return MessageUtil.error(err.code, err.message);
      }
    }

    async find () {
        try {
        const result = await this.findTrades();

        return MessageUtil.success(result);
        } catch (err) {
        console.error(err);

        return MessageUtil.error(err.code, err.message);
        }
    }

    async update (event: any) {
      // const id: number = Number(event.pathParameters.id);
      const body: TradeRequestDto = JSON.parse(event.body);
  
      try {
        const result = await this.updateTrade(body);
        return MessageUtil.success(result);
      } catch (err) {
        console.error(err);
  
        return MessageUtil.error(err.code, err.message);
      }
    }

    async deleteOne (event: any) {
      const id: number = event.pathParameters.id;
  
      try {
        const result = await this.deleteTradeById(id);
  
        if (result.deletedCount === 0) {
          return MessageUtil.error(1010, 'The data was not found! May have been deleted!');
        }
  
        return MessageUtil.success(result);
      } catch (err) {
        console.error(err);
  
        return MessageUtil.error(err.code, err.message);
      }
    }

    async findOne (event: any, context: Context) {
  
      const id: number = Number(event.pathParameters.id);
  
      try {
        const result = await this.findByTradeId(id);
  
        return MessageUtil.success(result);
      } catch (err) {
        console.error(err);
  
        return MessageUtil.error(err.code, err.message);
      }
    }
}