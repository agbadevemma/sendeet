import industries from "./industries.json";
type Option = {
  value: string;
  label: string;
};

export const industryOptions: Option[] = industries.industries.map(
  (industry) => {
    return { value: industry, label: industry };
  }
);

export const employeeCountOptions: Option[] = [
  { value: "1-10", label: "1-10 employees" },
  { value: "11-50", label: "11-50 employees" },
  { value: "51-200", label: "51-200 employees" },
  { value: "201+", label: "201+ employees" },
];

export const messageTypeOptions: Option[] = [
  { value: "Marketing", label: "Marketing" },
  { value: "Utility", label: "Utility" },
  { value: "Authentication", label: "Authentication" },
  { value: "Service", label: "Service" },
];

export const targetAudienceOptions: Option[] = [
  { value: "All Contacts", label: "All Contacts" },
  { value: "Custom Selection", label: "Custom Selection" },
];

export const subscriberRangeOptions: Option[] = [
  { value: "0-1000", label: "0-1,000 subscribers" },
  { value: "1001-10000", label: "1,001-10,000 subscribers" },
  { value: "10001-100000", label: "10,001-100,000 subscribers" },
  { value: "100001+", label: "100,001+ subscribers" },
];

export const statusOptions: Option[] = [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
  { value: "Pending", label: "Pending" },
  { value: "archived", label: "Archived" },
  { value: "draft", label: "Draft" },
];

export const sortOptions: Option[] = [
  { value: "newest", label: "Newest First" },
  { value: "oldest", label: "Oldest First" },
  { value: "name_asc", label: "Name A-Z" },
  { value: "name_desc", label: "Name Z-A" },
  { value: "updated_at", label: "Last Updated" },
  { value: "created_at", label: "Date Created" },
  { value: "priority_high", label: "Priority (High to Low)" },
  { value: "priority_low", label: "Priority (Low to High)" },
];

export interface Transaction {
  code: string;
  date: string;
  creditPurchased: string;
  description: string;
  creditUsed: string;
  status: "successful" | "Pending" | "Failed";
}

export interface CampaignInterface {
  campaign: string;
  date: string;
  delivered: string;
  open: string;
  clicked: string;
  status: "Draft" | "Active" | "Completed";
}
export const initialTransactions: Transaction[] = [
  {
    code: "TXN12345",
    date: "10/10/24",
    creditPurchased: "500",
    description: "Purchased 500 credits",
    creditUsed: "-",
    status: "successful",
  },
  {
    code: "TXN12346",
    date: "10/11/24",
    creditPurchased: "1000",
    description: "Purchased 1000 credits",
    creditUsed: "-",
    status: "successful",
  },
  {
    code: "TXN12347",
    date: "10/12/24",
    creditPurchased: "200",
    description: "Purchased 200 credits",
    creditUsed: "50",
    status: "Failed",
  },
  {
    code: "TXN12348",
    date: "10/13/24",
    creditPurchased: "300",
    description: "Purchased 300 credits",
    creditUsed: "-",
    status: "Pending",
  },
  {
    code: "TXN12349",
    date: "10/14/24",
    creditPurchased: "750",
    description: "Purchased 750 credits",
    creditUsed: "100",
    status: "successful",
  },
  {
    code: "TXN12350",
    date: "10/15/24",
    creditPurchased: "500",
    description: "Purchased 500 credits",
    creditUsed: "-",
    status: "Pending",
  },
  {
    code: "TXN12351",
    date: "10/16/24",
    creditPurchased: "250",
    description: "Purchased 250 credits",
    creditUsed: "50",
    status: "Failed",
  },
  {
    code: "TXN12352",
    date: "10/17/24",
    creditPurchased: "1000",
    description: "Purchased 1000 credits",
    creditUsed: "200",
    status: "successful",
  },
  {
    code: "TXN12353",
    date: "10/18/24",
    creditPurchased: "500",
    description: "Purchased 500 credits",
    creditUsed: "-",
    status: "Pending",
  },
  {
    code: "TXN12354",
    date: "10/19/24",
    creditPurchased: "600",
    description: "Purchased 600 credits",
    creditUsed: "-",
    status: "successful",
  },
  {
    code: "TXN12355",
    date: "10/20/24",
    creditPurchased: "1200",
    description: "Purchased 1200 credits",
    creditUsed: "300",
    status: "Failed",
  },
];

// export const initialTransactions: Transaction[] = [];

export const initialCampaign: CampaignInterface[] = [
  {
    campaign: "Tech requirements for Fund A.pdf",
    clicked: "75%",
    date: "02/10/24",
    delivered: "30",
    open: "10",
    status: "Draft",
  },
  {
    campaign: "Financial Analysis for Fund B.pdf",
    clicked: "89.5%",
    date: "03/10/24",
    delivered: "50",
    open: "20",
    status: "Active",
  },
  {
    campaign: "Market Research Report.pdf",
    clicked: "92%",
    date: "04/10/24",
    delivered: "60",
    open: "18",
    status: "Active",
  },
  {
    campaign: "Investment Strategy Overview.pdf",
    clicked: "85%",
    date: "05/10/24",
    delivered: "55",
    open: "25",
    status: "Active",
  },
  {
    campaign: "Tech requirements for Fund C.pdf",
    clicked: "78%",
    date: "06/10/24",
    delivered: "45",
    open: "15",
    status: "Completed",
  },
];

export const timeZones: Option[] = [
  { value: "utc", label: "UTC +01:00: West Africa Time (WAT)" },
  { value: "est", label: "EST (Eastern Standard Time)" },
  { value: "pst", label: "PST (Pacific Standard Time)" },
  { value: "cet", label: "CET (Central European Time)" },
  { value: "jst", label: "JST (Japan Standard Time)" },
];

export const deliveryWindows: Option[] = [
  { value: "09:00 AM - 12:00 PM", label: "09:00 AM - 12:00 PM" },
  { value: "12:00 PM - 03:00 PM", label: "12:00 PM - 03:00 PM" },
  { value: "03:00 PM - 06:00 PM", label: "03:00 PM - 06:00 PM" },
  { value: "06:00 PM - 09:00 PM", label: "06:00 PM - 09:00 PM" },
];

type DocumentItem = {
  title: string;
  date: string;
  time: string;
  size: string;
  buttonDate: string;
};
export const documents: DocumentItem[] = [
  {
    title: "October Issue 321.pdf",
    date: "11 Oct, 2024",
    time: "12:24pm",
    size: "4MB",
    buttonDate: "Oct 13, 2024",
  },
  {
    title: "September Edition 220.pdf",
    date: "10 Sep, 2024",
    time: "10:15am",
    size: "3.5MB",
    buttonDate: "Sep 12, 2024",
  },
  {
    title: "August Monthly Review.pdf",
    date: "08 Aug, 2024",
    time: "9:30am",
    size: "4.2MB",
    buttonDate: "Aug 10, 2024",
  },
  {
    title: "July Mid-Year Report.pdf",
    date: "12 Jul, 2024",
    time: "1:00pm",
    size: "5MB",
    buttonDate: "Jul 14, 2024",
  },
  {
    title: "June Special Issue.pdf",
    date: "15 Jun, 2024",
    time: "11:45am",
    size: "3MB",
    buttonDate: "Jun 17, 2024",
  },
];


type CreditItem = {
  price: string;
  credits: string;
};

export const creditsData: CreditItem[] = [
  { price: "7500", credits: "50 credits" },
  { price: "12500", credits: "100 credits" },
  { price: "14500", credits: "150 credits" },
  { price: "17500", credits: "200 credits" },
  { price: "37500", credits: "500 credits" },
  { price: "77500", credits: "1000 credits" },
];
export interface AudienceData {
  id: number; // id field is now a number
  name: string;
  phoneNumber: string;
  business: string;
  lastEngagement: string;
  subscription: 'Opted In' | 'Opted Out';
}

export const mockAudienceData: AudienceData[] = [
  {
    id: 1,
    name: "Alice Johnson",
    phoneNumber: "+2348012345678",
    business: "TechSavvy Solutions",
    lastEngagement: "02/10/24",
    subscription: "Opted In",
  },
  {
    id: 2,
    name: "John Doe",
    phoneNumber: "+2347012345678",
    business: "Tech Solutions",
    lastEngagement: "01/09/24",
    subscription: "Opted Out",
  },
  {
    id: 3,
    name: "Jane Smith",
    phoneNumber: "+2349012345678",
    business: "Digital Media",
    lastEngagement: "15/08/24",
    subscription: "Opted In",
  },
  {
    id: 4,
    name: "Bob Brown",
    phoneNumber: "+2347012345679",
    business: "E-commerce",
    lastEngagement: "03/11/24",
    subscription: "Opted Out",
  },
  {
    id: 5,
    name: "Charlie Davis",
    phoneNumber: "+2347023456789",
    business: "Consulting",
    lastEngagement: "10/07/24",
    subscription: "Opted In",
  },
  {
    id: 6,
    name: "David Wilson",
    phoneNumber: "+2347034567890",
    business: "Freelance Design",
    lastEngagement: "18/06/24",
    subscription: "Opted Out",
  },
];
