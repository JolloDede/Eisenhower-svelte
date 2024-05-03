type EisenRecord = {
    id: number;
    title: string;
    description: string;
    requiredTime: RequiredTime;
    endDateStr: string;
    importance: Importance;
}

// type Importance = 'none' | 'high' | 'medium' | 'low';
type Importance = 'high' | 'low';

type RequiredTime = 'seconds' | 'minutes'| 'hours' | 'days' | 'weeks' | 'months';