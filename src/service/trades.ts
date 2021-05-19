import {Model} from 'mongoose';
import { TradeRequestDto } from '../model/dto/tradeDTO';

export class TradesService {

    private trades: Model<any>;

    constructor(trades: Model<any>) {
      this.trades = trades;
    }

    protected findTrades () {
        return this.trades.find();
    }

    protected async createTrade(params: TradeRequestDto): Promise<object> {
      try {
        const result = await this.trades.create(params);  
        return result;
      } catch (err) {
        console.error(err);
  
        throw err;
      }
    }

    protected updateTrade (data: TradeRequestDto) {
      const id = data.id;
      return this.trades.findOneAndUpdate(
        { id },
        { $set: data },
        { new: true },
      );
    }

    protected deleteTradeById (id: number) {
      return this.trades.deleteOne({ id });
    }

    protected findByTradeId(id: number) {
      return this.trades.findOne({ id });
    }
}