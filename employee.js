"use strict";
class Employee {
    constructor(employeeName, genderSelected, email, password, phoneNumber, regID) {
        this.employeeName = employeeName;
        this.genderSelected = genderSelected;
        this.empName = employeeName;
        this.gender = genderSelected;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.regID = regID;
    }
}
class Vehicle {
    constructor(brandName, modelName, typeName, vehicleNum, employeeID, identificationMark) {
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
}
class pass {
    constructor(regID, empID, empName, phoneNumber, vehicleNumber) {
        this.regID = regID;
        this.empID = empID;
        this.empName = empName;
        this.phoneNumber = phoneNumber;
        this.vehicleNumber = vehicleNumber;
    }
}
