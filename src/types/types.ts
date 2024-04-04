export interface UserData {
  id: number;
  userName: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: "Inactive" | "Pending" | "Active" | "Blacklisted";
  tier: 1 | 2 | 3;
  levelOfEducation: string;
  bvn: string;
  gender: "Male" | "Female";
  maritalStatus: "Married" | "Single";
  numberOfChildren: 0 | 1 | 2 | 3 | 4 | 5;
  bankDetails: { name: string; accountNumber: string; balance: Number };
  employmentDetails: {
    organization: string;
    status: string;
    sector: string;
    duration: string;
    email: string;
    income: string;
    repayment: string;
  };
  socials: { twitter: string; facebook: string; instagram: string };
  guarantor: {
    fullName: string;
    phone: string;
    email: string;
    relationship: string;
  };
}

export interface CardProps {
  userData: UserData | undefined;
}
