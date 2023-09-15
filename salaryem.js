// Employee
class Employee {
    constructor(name, employeeType) {
      this.name = name;
      this.employeeType = employeeType;
      this.workingHours = 0;
    }
  
    addWorkingHours(hours) {
      this.workingHours += hours;
    }
  
    calculateSalary() {
      return 0; 
    }
  }
  
  // FulltimeEmployee
  class FulltimeEmployee extends Employee {
    calculateSalary() {
      if (this.workingHours <= 6) {
        return this.workingHours * 100000;
      } else {
        return (this.workingHours - 6) * 75000 + 600000;
      }
    }
  }
  
  // ParttimeEmployee
  class ParttimeEmployee extends Employee {
    calculateSalary() {
      if (this.workingHours <= 6) {
        return this.workingHours * 50000;
      } else {
        return (this.workingHours - 6) * 30000 + 300000;
      }
    }
  }
  
  const fulltimeEmployee = new FulltimeEmployee("Andi", "Full-time");
  fulltimeEmployee.addWorkingHours(9); 
  console.log(`${fulltimeEmployee.name}'s salary is IDR ${fulltimeEmployee.calculateSalary()}`);
  
  const parttimeEmployee = new ParttimeEmployee("Budi", "Part-time");
  parttimeEmployee.addWorkingHours(9);
  console.log(`${parttimeEmployee.name}'s salary is IDR ${parttimeEmployee.calculateSalary()}`);
  