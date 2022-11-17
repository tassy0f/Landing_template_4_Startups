export class Users {
    email!: string;
    fmiliya!: string;
    imya!: string;
    otchestvo!: string;
    telNumber!: number;
    password!: number;
    rate!: number;
    id!: number;
    startDate!: Date;
    endDate!: Date

    constructor(email: string, fmiliya: string, imya: string, otchestvo: string, telNumber: number, password: number, rate: number, id: number, startDate: Date, endDate: Date) {
        this.email = email
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