export class QueryModel {
    constructor(
        public id?: number,
        public name?: string,
        public gender?: string,
        public birthSt?: Date,
        public birthEnd?: Date,
        public dept?: any[],
        public grade?: number
    ) { }
}