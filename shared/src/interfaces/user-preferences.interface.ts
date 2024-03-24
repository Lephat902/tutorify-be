import { Geometry } from 'geojson';

export interface UserPreferencesData {
    classCategoryIds: string[];
    locations?: Geometry[];
}
