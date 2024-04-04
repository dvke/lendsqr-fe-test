export interface UserData {
  id: number;
  userName: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: "Inactive" | "Pending" | "Active" | "Blacklisted";
  tier: 1 | 2 | 3;
  levelOfEducation: string;
  bankDetails: { name: string; accountNumber: string; balance: string };
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
