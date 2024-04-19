type EisenRecord = {
    id: number;
    title: string;
    description: string;
    requiredTime: RequiredTime;
    endDate: Date;
    importance: Importance;
}

type Importance = 'none' | 'high' | 'medium' | 'low';

type RequiredTime = 'seconds' | 'minutes'| 'hours' | 'days' | 'weeks' | 'months';