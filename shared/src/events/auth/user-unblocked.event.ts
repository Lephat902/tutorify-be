export class UserUnblockedEventPattern {
    readonly pattern: string = 'auth.user-Unblocked';
}

export class UserUnblockedEventPayload {
    constructor(
        readonly userId: string,
    ) { }
}

export class UserUnblockedEvent {
    readonly pattern: UserUnblockedEventPattern;

    constructor(
        readonly payload: UserUnblockedEventPayload,
    ) { 
        this.pattern = new UserUnblockedEventPattern();
    }
}
