// use tsc init to initialize typescript components
interface admin {
  name: string;
  email: string;
  role?: string; //* optional
  isActive: boolean;
  lastLogin: Date;
  password: string;
}

let admin: admin = {
  name: 'John Doe',
  email: '0K5Wb@example.com',
  role: 'Admin',
  isActive: true,
  lastLogin: new Date(),
  password: 'password123',
};

// declare a generic type for an array of admins
let adminTwo: Partial<admin> = {
  //* optional making for certain data members in objects
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
  // isActive: false,
  lastLogin: new Date(),
  // password: "secret123",
};

let adminThree: Required<admin> = {
  name: 'John Doe',
  email: '0K5Wb@example.com',
  role: 'Admin',
  isActive: true,
  lastLogin: new Date(),
  password: 'password123',
};

let adminFour: Readonly<admin> = {
  // not editable
  name: 'John Doe',
  email: '0K5Wb@example.com',
  role: 'Admin',
  isActive: true,
  lastLogin: new Date(),
  password: 'password123',
};

// adminFour.name = "Changed"; // error: Cannot assign to 'name' because it is a read-only property.

//array 

interface person {
  name: string;
  email: string;
  role?: string; //* optional
  isActive: boolean;
  lastLogin: Date;
  password: string;
}

let abjOne: person = {
  name: 'John Doe',
  email: '0K5Wb@example.com',
  role: 'Admin',
  isActive: true,
  lastLogin: new Date(),
  password: 'password123',
};

let people: person[] = [abjOne];

//! function

function printPerson(person: person): void {
  console.log(person);
}

printPerson(abjOne);