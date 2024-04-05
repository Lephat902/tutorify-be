export class TutorRejectedEventPattern {
    readonly pattern: string = 'auth.tutor-rejected';
}

export class TutorRejectedEventPayload {
    constructor(
        readonly tutorId: string,
        readonly email: string,
        readonly firstName: string,
        readonly middleName: string,
        readonly lastName: string,
    ) { }
}

export class TutorRejectedEvent {
    readonly pattern: TutorRejectedEventPattern;

    constructor(
        readonly payload: TutorRejectedEventPayload,
    ) { 
        this.pattern = new TutorRejectedEventPattern();
    }
}
