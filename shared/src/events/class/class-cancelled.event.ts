export class ClassCancelledEventPattern {
    readonly pattern: string = 'class.class-cancelled';
}

export class ClassCancelledEventPayload {
    constructor(
        readonly classId: string,
    ) { }
}

export class ClassCancelledEvent {
    readonly pattern: ClassCancelledEventPattern;

    constructor(
        readonly payload: ClassCancelledEventPayload,
    ) { 
        this.pattern = new ClassCancelledEventPattern();
    }
}