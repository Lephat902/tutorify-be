export function mergeArraysById<T extends { id: any }>(array1: T[], array2: T[]): T[] {
    const mergedMap: Record<any, T> = {};

    // Populate the map with array1
    for (const obj1 of array1) {
        mergedMap[obj1.id] = obj1;
    }

    // Merge objects from array2
    for (const obj2 of array2) {
        if (mergedMap[obj2.id]) {
            // Merge properties (obj2 will overwrite previous obj1)
            Object.assign(mergedMap[obj2.id], obj2);
        } else {
            // Object not found in array1, add directly
            mergedMap[obj2.id] = obj2;
        }
    }

    // Convert the map values back to an array
    return Object.values(mergedMap);
}