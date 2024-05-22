import { persisted } from "svelte-persisted-store";
import { get } from "svelte/store";

let STORAGE_KEY = 'Eisenhover-app-';
let currentDate = new Date();

export const todoRecords = persisted<EisenRecord[]>(STORAGE_KEY + 'records', [
    {
        id: 1,
        title: 'High Today',
        description: 'test desc',
        requiredTime: 'hours',
        endDateStr: JSON.stringify(currentDate).slice(1,25),
        importance: 'high'
    },
    {
        id: 2,
        title: 'Low Today',
        description: 'test desc',
        requiredTime: 'hours',
        endDateStr: JSON.stringify(currentDate).slice(1,25),
        importance: 'low'
    },
    {
        id: 3,
        title: 'High Weekago',
        description: 'test desc',
        requiredTime: 'hours',
        endDateStr: JSON.stringify(new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000)).slice(1,25),
        importance: 'high'
    },
    {
        id: 4,
        title: 'Low Weekago',
        description: 'test desc',
        requiredTime: 'hours',
        endDateStr: JSON.stringify(new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000)).slice(1,25),
        importance: 'low'
    }
]);

export const recordIndex = persisted(STORAGE_KEY + 'record-id', 5);

export function newRecordIndex(): number {
    let newVal = get(recordIndex)+1
    recordIndex.set(newVal);
    return newVal;
}