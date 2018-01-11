export class QueryModel {
    constructor(
        public id?: number,
        public name?: string,
        public sex?: string,
        public birthSt?: Date,
        public birthEnd?: Date,
        public dept?: number[],
        public grade?: number
    ) { }
}