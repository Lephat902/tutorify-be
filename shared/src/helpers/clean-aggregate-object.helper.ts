export function cleanAggregateObject<T>(obj: T): T {
    if (typeof obj !== 'object' || obj === null || obj instanceof Date) {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(cleanAggregateObject) as unknown as T;
    }

    const cleanObj = {} as T;
    for (const key in obj) {
        if (!key.startsWith('_') && typeof obj[key] !== 'function') {
            cleanObj[key] = cleanAggregateObject(obj[key]);
        }
    }
    return cleanObj;
}