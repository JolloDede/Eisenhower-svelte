import { persisted } from "svelte-persisted-store";

let STORAGE_KEY = 'Eisenhover_app-';
let currentDate = new Date();

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
    },
    {
        id: 3,
        title: 'High Weekago',
        description: 'test desc',
        requiredTime: 'hours',
        endDate: new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000),
        importance: 'high'
    },
    {
        id: 4,
        title: 'Low Weekago',
        description: 'test desc',
        requiredTime: 'hours',
        endDate: new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000),
        importance: 'low'
    }
])