export function getQuarter(date: Date): number {
    return Math.floor(date.getMonth() / 3) + 1;
}