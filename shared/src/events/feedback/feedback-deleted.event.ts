import { QueueNames } from "../../enums";

export class FeedbackDeletedEventPattern {
  readonly pattern: string = `${QueueNames.FEEDBACK}.feedback-deleted`;
}

export class FeedbackDeletedEventPayload {
  constructor(
    readonly feedbackId: string,
    readonly userId: string,
    readonly tutorId: string,
    readonly rate: number
  ) {}
}

export class FeedbackDeletedEvent {
  readonly pattern: FeedbackDeletedEventPattern;

  constructor(readonly payload: FeedbackDeletedEventPayload) {
    this.pattern = new FeedbackDeletedEventPattern();
  }
}
