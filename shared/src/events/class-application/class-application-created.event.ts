import { QueueNames } from "../../enums";

export class ClassApplicationCreatedEventPattern {
    readonly pattern: string = `${QueueNames.TUTOR_APPLY_FOR_CLASS}.class-application-created`;
}

export class ClassApplicationCreatedEventPayload {
    constructor(
        readonly classApplicationId: string,
        readonly classId: string,
        readonly tutorId: string,
        readonly isDesignated: boolean,
        readonly appliedAt: Date,
    ) { }
}

export class ClassApplicationCreatedEvent {
    readonly pattern: ClassApplicationCreatedEventPattern;

    constructor(
        readonly payload: ClassApplicationCreatedEventPayload,
    ) { 
        this.pattern = new ClassApplicationCreatedEventPattern();
    }
}