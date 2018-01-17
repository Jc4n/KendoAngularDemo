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
        this.name = this.name || '';
        this.gender = this.gender || '';
        this.birth = this.birth || null;
        this.deptName = this.deptName || '';
        this.deptId = this.deptId || null;
        this.grade = this.grade || null;
        this.gradeName = this.gradeName || '';
        this.height = this.height || null;
        this.weight = this.weight || null;
    }
}