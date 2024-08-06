class Employee 
{
    empName: string;
    gender: string;
    email: string;
    password: string;
    phoneNumber : number;
    regID: number;

    constructor(public employeeName: string, public genderSelected: string, email: string, password: string, phoneNumber : number, regID: number)
    {
        this.empName = employeeName;
        this.gender = genderSelected;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.regID = regID;
    }
}

class vehicle
{
    brand: string;
    model: string;
    type: string;
    vehicleNumber: string;
    empID: number;
    identification: string;

    constructor(public brandName: string, public modelName: string, public typeName: string,
        public vehicleNum: string, public employeeID: number, public identificationMark: string)
        {
            this.brand = brandName;
            this.model = modelName;
            this.type = typeName;
            this.vehicleNumber = vehicleNum;
            this.empID = this.employeeID;
            this.identification = identificationMark;   
        }
}

class pass
{
    regID: number;
    empID: number;
    empName: string;
    phoneNumber : number;
    vehicleNumber: string;

    constructor(regID: number, empID: number, empName: string, phoneNumber : number, vehicleNumber: string)
    {
        this.regID = regID;
        this.empID = empID;
        this.empName = empName;
        this.phoneNumber = phoneNumber;
        this.vehicleNumber = vehicleNumber;
    }
}
