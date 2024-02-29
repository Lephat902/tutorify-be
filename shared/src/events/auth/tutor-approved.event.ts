export class TutorApprovedEventPattern {
    readonly pattern: string = 'auth.tutor-approved';
}

export class TutorApprovedEventPayload {
    constructor(
        readonly tutorId: string,
    ) { }
}

export class TutorApprovedEvent {
    readonly pattern: TutorApprovedEventPattern;

    constructor(
        readonly payload: TutorApprovedEventPayload,
    ) { 
        this.pattern = new TutorApprovedEventPattern();
    }
}
