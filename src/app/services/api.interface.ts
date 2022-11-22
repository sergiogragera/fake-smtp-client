export interface PageResponse {
    content: any[];
    totalPages: number;
    totalElements: number;
    number: number;
    first: boolean;
    last: boolean;
}

export interface EmailResponse {
    fromAddress: string;
    toAddress: string;
    subject: string;
    receivedOn: Date;
    rawData: string;
    contents:
    [{
        data: string;
        contentType: string;
    }];
}