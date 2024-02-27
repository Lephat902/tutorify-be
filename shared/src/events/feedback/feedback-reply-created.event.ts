import { QueueNames } from "../../enums";

export class FeedbackReplyCreatedEventPattern {
    readonly pattern: string = `${QueueNames.FEEDBACK}.feedback-reply-created`;
}

export class FeedbackReplyCreatedEventPayload {
    constructor(
        readonly feedbackReplyId: string,
        readonly userId: string,
        readonly feedbackId: string,
    ) { }
}

export class FeedbackReplyCreatedEvent {
    readonly pattern: FeedbackReplyCreatedEventPattern;

    constructor(
        readonly payload: FeedbackReplyCreatedEventPayload,
    ) {
        this.pattern = new FeedbackReplyCreatedEventPattern();
    }
}