import { Tweet } from "./entities/tweet.entity";
import { SequelizeModule } from "@nestjs/sequelize";
import { Module } from "@nestjs/common";
import { TweetsService } from "./tweets.service";
import { TweetsController } from "./tweets.controller";
import { TweetsCountService } from './tweets-count/tweets-count.service';

@Module({
  imports: [SequelizeModule.forFeature([Tweet])],
  controllers: [TweetsController],
  providers: [TweetsService, TweetsCountService],
})
export class TweetsModule {}
