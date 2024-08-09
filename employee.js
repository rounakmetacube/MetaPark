var Employee = /** @class */ (function () {
    function Employee(employeeName, genderSelected, email, password, phoneNumber, regID) {
        this.employeeName = employeeName;
        this.genderSelected = genderSelected;
        this.empName = employeeName;
        this.gender = genderSelected;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.regID = regID;
    }
    return Employee;
}());
var Vehicle = /** @class */ (function () {
    function Vehicle(brandName, modelName, typeName, vehicleNum, employeeID, identificationMark) {
        this.brandName = brandName;
        this.modelName = modelName;
        this.typeName = typeName;
        this.vehicleNum = vehicleNum;
        this.employeeID = employeeID;
        this.identificationMark = identificationMark;
        this.brand = brandName;
        this.model = modelName;
        this.type = typeName;
        this.vehicleNumber = vehicleNum;
        this.empID = this.employeeID;
        this.identification = identificationMark;
    }
    return Vehicle;
}());
var pass = /** @class */ (function () {
    function pass(regID, empID, empName, phoneNumber, vehicleNumber) {
        this.regID = regID;
        this.empID = empID;
        this.empName = empName;
        this.phoneNumber = phoneNumber;
        this.vehicleNumber = vehicleNumber;
    }
    return pass;
}());
