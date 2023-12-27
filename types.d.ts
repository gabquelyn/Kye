type unionAl =
  | "avatar"
  | "firstname"
  | "lastname"
  | "phone"
  | "dob"
  | "previous"
  | "current"
  | "position"
  | "businessAddress"
  | "soo"
  | "address"
  | "city"
  | "state"
  | "zipcode"
  | "email";

interface inputFunction {
  (e: React.ChangeEvent<HTMLInputElement>): void;
}

interface EmployeeDetails {
  avatar: string;
  title: string;
  firstname: string;
  lastname: string;
  phone: string;
  dob: string;
  previous: string;
  current: string;
  position: string;
  businessAddress: string;
  soo: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  email: string;
  gender: string
}

interface MongoEmployeeDetails extends EmployeeDetails {
  _id: string
}