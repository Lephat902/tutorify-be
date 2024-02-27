export class ClassUpdatedEventPattern {
    readonly pattern: string = 'class.class-updated';
}

export class ClassUpdatedEventPayload {
    constructor(
        readonly classId: string,
    ) { }
}

export class ClassUpdatedEvent {
    readonly pattern: ClassUpdatedEventPattern;

    constructor(
        readonly payload: ClassUpdatedEventPayload,
    ) { 
        this.pattern = new ClassUpdatedEventPattern();
    }
}