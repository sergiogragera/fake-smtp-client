import { PageResponse } from "../services/api.interface";

export class Page {
    content!: any[];
    totalPages!: number;
    totalElements!: number;
    number!: number;
    first!: boolean;
    last!: boolean;

    constructor(page: PageResponse) {
        this.content = page.content;
        this.totalPages = page.totalPages;
        this.totalElements = page.totalElements;
        this.number = page.number;
        this.first = page.first;
        this.last = page.last;
    }

    get hasPrevious(): boolean {
        return this.number > 0;
    }

    get hasNext(): boolean {
        return this.number < this.totalPages - 1;
    }
}
