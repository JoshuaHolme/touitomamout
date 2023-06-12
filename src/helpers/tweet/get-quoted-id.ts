import {TweetMetadata} from '../../types/index.js';
import {getTweetIdFromPermalink} from './get-tweet-from-permalink.js';

export const getQuotedId = (tweet: TweetMetadata): string | undefined => {
    const link = tweet?._extra?.links.find(link => link.type === 'quote');
    if (!link) {
        return undefined;
    }
    return getTweetIdFromPermalink(link.url);
};