import { QueueNames } from "../../enums";

export class ClassCategoriesPreferenceDeletedEventPattern {
    readonly pattern: string = `${QueueNames.USER_PREFERENCES}.class-categories-preference-deleted`;
}

export class ClassCategoriesPreferenceDeletedEventPayload {
    constructor(
        readonly userId: string,
        readonly classCategoryIds: string[],
    ) { }
}

export class ClassCategoriesPreferenceDeletedEvent {
    readonly pattern: ClassCategoriesPreferenceDeletedEventPattern;

    constructor(
        readonly payload: ClassCategoriesPreferenceDeletedEventPayload,
    ) {
        this.pattern = new ClassCategoriesPreferenceDeletedEventPattern();
    }
}
