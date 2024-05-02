import { persisted } from "svelte-persisted-store";

let STORAGE_KEY = 'Eisenhover_app-';

export const todoRecords = persisted<EisenRecord[]>(STORAGE_KEY + 'records', [
    {
        id: 1,
        title: 'High Today',
        description: 'test desc',
        requiredTime: 'hours',
        endDate: new Date(),
        importance: 'high'
    },
    {
        id: 2,
        title: 'Low Today',
        description: 'test desc',
        requiredTime: 'hours',
        endDate: new Date(),
        importance: 'low'
    }
])