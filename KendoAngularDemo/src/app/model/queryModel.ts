export class QueryModel {
    constructor(
        public id?: number,
        public name?: string,
        public gender?: string,
        public birthSt?: Date,
        public birthEnd?: Date,
        public dept?: number[],
        public grade?: number
    ) { }
}