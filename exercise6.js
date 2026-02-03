//Multi-Level prototype chain
const person = {
    species: 'Human',
    breathe() {
    return 'Breathing...';
    }
};

const employee = Object.create(person);
employee.company = "Tech Corp";
employee.position = "Developer";

const manager = Object.create(employee);
manager.department = "Engineering";
manager.team = [];

manager.addTeamMember = function(name) {
  this.team.push(name);
};

// Test
console.log(manager.breathe());          // inherited from person
manager.addTeamMember('Alice');
manager.addTeamMember('Bob');
console.log(manager.team);               // ['Alice', 'Bob']
console.log(manager.species);            // 'Human'
console.log(manager.company);            // 'Tech Corp'