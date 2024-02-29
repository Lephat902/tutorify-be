export class UserBlockedEventPattern {
    readonly pattern: string = 'auth.user-blocked';
}

export class UserBlockedEventPayload {
    constructor(
        readonly userId: string,
    ) { }
}

export class UserBlockedEvent {
    readonly pattern: UserBlockedEventPattern;

    constructor(
        readonly payload: UserBlockedEventPayload,
    ) { 
        this.pattern = new UserBlockedEventPattern();
    }
}
