import { persisted } from "svelte-persisted-store";
import { get } from "svelte/store";
import * as devalue from 'devalue';

let STORAGE_KEY = 'Eisenhover-app-';
let currentDate = new Date();

export const todoRecords = persisted<EisenRecord[]>(STORAGE_KEY + 'records', [
    {
        id: 1,
        title: 'Bot Left',
        description: 'test desc',
        requiredTime: 'hours',
        endDate: new Date(currentDate.getTime() + 2 * 24 * 60 * 60 * 1000),
        importance: 'low'
    },
    {
        id: 2,
        title: 'Bot Right',
        description: 'test desc',
        requiredTime: 'hours',
        endDate: currentDate,
        importance: 'low'
    },
    {
        id: 3,
        title: 'Top Left',
        description: 'test desc',
        requiredTime: 'hours',
        endDate: new Date(currentDate.getTime() + 2 * 24 * 60 * 60 * 1000),
        importance: 'high'
    },
    {
        id: 4,
        title: 'Top Right',
        description: 'test desc',
        requiredTime: 'hours',
        endDate: new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000),
        importance: 'high'
    }
], { serializer: devalue });

export const recordIndex = persisted(STORAGE_KEY + 'record-id', 5);

export function newRecordIndex(): number {
    let newVal = get(recordIndex) + 1
    recordIndex.set(newVal);
    return newVal;
}