export class Users {
    name!: string;
    fmiliya!: string;
    imya!: string;
    otchestvo!: string;
    telNumber!: number;
    password!: number;
    rate!: number;
    id!: number;
    startDate!: Date;
    endDate!: Date

    constructor(name: string, fmiliya: string, imya: string, otchestvo: string, telNumber: number, password: number, rate: number, id: number, startDate: Date, endDate: Date) {
        this.name = name
        this.fmiliya = fmiliya
        this.imya = imya
        this.otchestvo = otchestvo
        this.telNumber = telNumber
        this.password = password
        this.rate = rate
        this.id = id
        this.startDate = startDate
        this.endDate = endDate
    }
}