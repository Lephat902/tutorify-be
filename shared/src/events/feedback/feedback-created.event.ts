import { QueueNames } from "../../enums";

export class FeedbackCreatedEventPattern {
    readonly pattern: string = `${QueueNames.FEEDBACK}.feedback-created`;
}

export class FeedbackCreatedEventPayload {
    constructor(
        readonly feedbackId: string,
        readonly studentId: string,
        readonly tutorId: string,
        readonly rate: number,
    ) { }
}

export class FeedbackCreatedEvent {
    readonly pattern: FeedbackCreatedEventPattern;

    constructor(
        readonly payload: FeedbackCreatedEventPayload,
    ) {
        this.pattern = new FeedbackCreatedEventPattern();
    }
}