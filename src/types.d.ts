type EisenRecord = {
    id: number;
    title: string;
    description: string;
    endDate: Date;
    severity: 'none' | 'high' | 'medium' | 'low' = 'none';
}