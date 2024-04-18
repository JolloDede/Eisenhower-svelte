type EisenRecord = {
    id: number;
    title: string;
    description: string;
    endDate: Date;
    importance: Importance;
}

type Importance = 'none' | 'high' | 'medium' | 'low';