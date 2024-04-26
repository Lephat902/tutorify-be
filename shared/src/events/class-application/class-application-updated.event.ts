import { ApplicationStatus, QueueNames } from "../../enums";

export class ClassApplicationUpdatedEventPattern {
    readonly pattern: string = `${QueueNames.TUTOR_APPLY_FOR_CLASS}.class-application-updated`;
}

export class ClassApplicationUpdatedEventPayload {
    constructor(
        readonly classApplicationId: string,
        readonly isDesignated: boolean,
        readonly classId: string,
        readonly tutorId: string,
        readonly newStatus: ApplicationStatus,
    ) { }
}

export class ClassApplicationUpdatedEvent {
    readonly pattern: ClassApplicationUpdatedEventPattern;

    constructor(
        readonly payload: ClassApplicationUpdatedEventPayload,
    ) { 
        this.pattern = new ClassApplicationUpdatedEventPattern();
    }
}