export class GridModel {
    public id: number;
    public name: string;
    public gender: string;
    public birth: Date;
    public deptName: string;
    public deptId: number;
    public grade: number;
    public gradeName: string;
    public height: number;
    public weight: number;
    constructor(options: {
        id?: number,
        name?: string,
        gender?: string,
        birth?: Date,
        deptName?: string,
        deptId?: number,
        grade?: number,
        gradeName?: string,
        height?: number,
        weight?: number
    } = {}) {
        this.name = options.name || '';
        this.gender = options.gender || '';
        this.birth = options.birth || null;
        this.deptName = options.deptName || '';
        this.deptId = options.deptId || null;
        this.grade = options.grade || null;
        this.gradeName = options.gradeName || '';
        this.height = options.height || null;
        this.weight = options.weight || null;
    }
}