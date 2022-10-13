import { Injectable } from '@nestjs/common';
import { Tweet } from '../entities/tweet.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TweetsCountService {
    constructor(
        @InjectModel(Tweet)
        private tweetModel: typeof Tweet
    ) {}

    async countTweets(): Promise<void> {}
}
