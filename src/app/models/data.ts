export class Data {
    type: string;
    message: string;
    data: any;
    constructor(type: string, message: string, data: any) {
        this.type = type;
        this.message = message;
        this.data = data;
    }
}