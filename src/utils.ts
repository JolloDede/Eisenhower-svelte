
export function dayBetweenDates(date1: Date, date2: Date): number {
    let timeBetween = date1.getTime()- date2.getTime();
    return (timeBetween / (1000 * 3600 * 24))
}