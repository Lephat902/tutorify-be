export class UserEmailVerifiedEventPattern {
    readonly pattern: string = 'auth.user-email-verified';
}

export class UserEmailVerifiedEventPayload {
    constructor(
        readonly userId: string,
    ) { }
}

export class UserEmailVerifiedEvent {
    readonly pattern: UserEmailVerifiedEventPattern;

    constructor(
        readonly payload: UserEmailVerifiedEventPayload,
    ) { 
        this.pattern = new UserEmailVerifiedEventPattern();
    }
}