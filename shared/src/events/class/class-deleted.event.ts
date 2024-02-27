export class ClassDeletedEventPattern {
    readonly pattern: string = 'class.class-deleted';
}

export class ClassDeletedEventPayload {
    constructor(
        readonly classId: string,
    ) { }
}

export class ClassDeletedEvent {
    readonly pattern: ClassDeletedEventPattern;

    constructor(
        readonly payload: ClassDeletedEventPayload,
    ) { 
        this.pattern = new ClassDeletedEventPattern();
    }
}