export class ClassCreatedEventPattern {
    readonly pattern: string = 'class.class-created';
}

export class ClassCreatedEventPayload {
    constructor(
        readonly classId: string,
    ) { }
}

export class ClassCreatedEvent {
    readonly pattern: ClassCreatedEventPattern;

    constructor(
        readonly payload: ClassCreatedEventPayload,
    ) { 
        this.pattern = new ClassCreatedEventPattern();
    }
}