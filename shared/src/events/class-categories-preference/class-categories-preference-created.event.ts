import { QueueNames } from "../../enums";

export class ClassCategoriesPreferenceCreatedEventPattern {
    readonly pattern: string = `${QueueNames.USER_PREFERENCES}.class-categories-preference-created`;
}

export class ClassCategoriesPreferenceCreatedEventPayload {
    constructor(
        readonly userId: string,
        readonly classCategoryIds: string[],
    ) { }
}

export class ClassCategoriesPreferenceCreatedEvent {
    readonly pattern: ClassCategoriesPreferenceCreatedEventPattern;

    constructor(
        readonly payload: ClassCategoriesPreferenceCreatedEventPayload,
    ) {
        this.pattern = new ClassCategoriesPreferenceCreatedEventPattern();
    }
}
