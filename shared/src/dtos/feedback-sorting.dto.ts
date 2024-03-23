import { FeedbackSortBy, SortingDirection } from "../enums";

export class FeedbackSortingDto {
  sort?: FeedbackSortBy = FeedbackSortBy.CREATED_AT;
  dir?: SortingDirection = SortingDirection.DESC;
}
