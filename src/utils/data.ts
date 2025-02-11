import { Contact } from "@/lib/slices/contactApi";
import industries from "./industries.json";
type Option = {
  value: string;
  label: string;
};

type deliveryOption = {
  value: Array<string>;
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

export const issueTypeOptions: Option[] = [
  { value: "Bug Report", label: "Bug Report" },
  { value: "Feature Request", label: "Feature Request" },
  { value: "UI/UX Issue", label: "UI/UX Issue" },
  { value: "Performance", label: "Performance" },
  { value: "Security", label: "Security" },
  { value: "Billing", label: "Billing" },
  { value: "Account Access", label: "Account Access" },
  { value: "Integration", label: "Integration" },
  { value: "Content Error", label: "Content Error" },
  { value: "Other", label: "Other" },
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
  creditUsed: string | number;
  status: "successful" | "Pending" | "Failed";
}

export interface CampaignInterface {
  id: number;
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
    creditUsed: 50,
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
    creditUsed: 100,
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
    creditUsed: 50,
    status: "Failed",
  },
  {
    code: "TXN12352",
    date: "10/17/24",
    creditPurchased: "1000",
    description: "Purchased 1000 credits",
    creditUsed: 200,
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
    creditUsed: 300,
    status: "Failed",
  },
];

// export const initialTransactions: Transaction[] = [];

export const initialCampaign: CampaignInterface[] = [
  {
    id: 1,
    campaign: "Tech requirements for Fund A.pdf",
    clicked: "75%",
    date: "02/10/24",
    delivered: "30",
    open: "10",
    status: "Draft",
  },
  {
    id: 2,
    campaign: "Financial Analysis for Fund B.pdf",
    clicked: "89.5%",
    date: "03/10/24",
    delivered: "50",
    open: "20",
    status: "Active",
  },
  {
    id: 3,
    campaign: "Market Research Report.pdf",
    clicked: "92%",
    date: "04/10/24",
    delivered: "60",
    open: "18",
    status: "Active",
  },
  {
    id: 4,
    campaign: "Investment Strategy Overview.pdf",
    clicked: "85%",
    date: "05/10/24",
    delivered: "55",
    open: "25",
    status: "Active",
  },
  {
    id: 5,
    campaign: "Tech requirements for Fund C.pdf",
    clicked: "78%",
    date: "06/10/24",
    delivered: "45",
    open: "15",
    status: "Completed",
  },
];

export interface Step1Data {
  campaignName: string;
  campaignDescription: string;
  messageType: string;
  targetAudience: string;
}

export const timeZones: Option[] = [
  { value: "UTC +01:00: West Africa Time (WAT)", label: "UTC +01:00: West Africa Time (WAT)" },
  { value: "EST (Eastern Standard Time)", label: "EST (Eastern Standard Time)" },
  { value: "PST (Pacific Standard Time)", label: "PST (Pacific Standard Time)" },
  { value: "CET (Central European Time)", label: "CET (Central European Time)" },
  { value: "JST (Japan Standard Time)", label: "JST (Japan Standard Time)" },
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
  subscription: "Opted In" | "Opted Out";
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

// Define types for the organization
export type Organization = {
  id: string;
  organizationName: string;
  emailAddress: string;
  registrationDate: string;
  industry: string;
  whatsappAPIStatus: "Connected" | "Pending";
};

// Single array with mixed statuses
export const organizations: Organization[] = [
  {
    id: "1",
    organizationName: "Tech Innovators Inc.",
    emailAddress: "contact@techinnovators.com",
    registrationDate: "01/15/24",
    industry: "Technology",
    whatsappAPIStatus: "Connected",
  },
  {
    id: "2",
    organizationName: "Smart Health Systems",
    emailAddress: "admin@smarthealth.com",
    registrationDate: "12/10/23",
    industry: "Healthcare",
    whatsappAPIStatus: "Connected",
  },
  {
    id: "3",
    organizationName: "NextGen EduTech",
    emailAddress: "hello@nextgenedutech.com",
    registrationDate: "02/08/24",
    industry: "Education",
    whatsappAPIStatus: "Connected",
  },
  {
    id: "4",
    organizationName: "Green Earth Solutions",
    emailAddress: "info@greenearth.com",
    registrationDate: "02/10/24",
    industry: "Environmental Services",
    whatsappAPIStatus: "Pending",
  },
  {
    id: "5",
    organizationName: "Global Retail Hub",
    emailAddress: "support@globalretail.com",
    registrationDate: "03/01/24",
    industry: "Retail",
    whatsappAPIStatus: "Pending",
  },
  {
    id: "6",
    organizationName: "Bright Minds Marketing",
    emailAddress: "contact@brightminds.com",
    registrationDate: "01/20/24",
    industry: "Marketing",
    whatsappAPIStatus: "Connected",
  },
  {
    id: "7",
    organizationName: "Apex Financial Group",
    emailAddress: "info@apexfinancial.com",
    registrationDate: "11/25/23",
    industry: "Finance",
    whatsappAPIStatus: "Pending",
  },
  {
    id: "8",
    organizationName: "Urban Developers Ltd.",
    emailAddress: "sales@urbandevelopers.com",
    registrationDate: "02/28/24",
    industry: "Construction",
    whatsappAPIStatus: "Connected",
  },
  {
    id: "9",
    organizationName: "EcoFarms Alliance",
    emailAddress: "admin@ecofarms.com",
    registrationDate: "12/05/23",
    industry: "Agriculture",
    whatsappAPIStatus: "Pending",
  },
  {
    id: "10",
    organizationName: "Peak Performance Training",
    emailAddress: "training@peakperformance.com",
    registrationDate: "03/10/24",
    industry: "Professional Services",
    whatsappAPIStatus: "Connected",
  },
];


export type OrganizationAdmin = {
  id: string;
  organizationName: string,
  industry: string;
  totalCampaigns: string;
  totalCreditsUsed: string;
  optInRate: string;

};

export const adminOrganizations: OrganizationAdmin[] = [
  {
    id: "1",
    organizationName: "Peak Performance Training",
    industry: "Technology",
    totalCampaigns: "120",
    totalCreditsUsed: "3450",
    optInRate: "85%",
  },
  {
    id: "2",
    organizationName: "Peak Performance Training",
    industry: "Healthcare",
    totalCampaigns: "98",
    totalCreditsUsed: "1290",
    optInRate: "72%",
  },
  {
    id: "3",
    organizationName: "Peak Performance Training",
    industry: "Education",
    totalCampaigns: "76",
    totalCreditsUsed: "890",
    optInRate: "68%",
  },
  {
    id: "4",
    organizationName: "Peak Performance Training",
    industry: "Finance",
    totalCampaigns: "145",
    totalCreditsUsed: "5600",
    optInRate: "91%",
  },
  {
    id: "5",
    organizationName: "Peak Performance Training",
    industry: "Retail",
    totalCampaigns: "87",
    totalCreditsUsed: "1023",
    optInRate: "78%",
  },
  {
    id: "6",
    organizationName: "Peak Performance Training",
    industry: "Automotive",
    totalCampaigns: "43",
    totalCreditsUsed: "670",
    optInRate: "65%",
  },
  {
    id: "7",
    organizationName: "Peak Performance Training",
    industry: "Entertainment",
    totalCampaigns: "110",
    totalCreditsUsed: "4300",
    optInRate: "88%",
  },
  {
    id: "8",
    organizationName: "Peak Performance Training",
    industry: "Real Estate",
    totalCampaigns: "65",
    totalCreditsUsed: "2100",
    optInRate: "80%",
  },
  {
    id: "9",
    organizationName: "Peak Performance Training",
    industry: "Food & Beverage",
    totalCampaigns: "93",
    totalCreditsUsed: "1340",
    optInRate: "74%",
  },
  {
    id: "10",
    organizationName: "Peak Performance Training",
    industry: "Energy",
    totalCampaigns: "50",
    totalCreditsUsed: "950",
    optInRate: "69%",
  },
];

export type OrganizationCredit = {
  id: number;
  organizationName: string;
  industry
  : string;
  creditBalance: string;
  lastPurchase: string;
  creditStatus: "Normal" | "Low";
};

// Single array with mixed statuses
export const organizationCredits: OrganizationCredit[] = [
  {
    id: 1,
    organizationName: "Tech Innovators Inc.",
    industry: "Technology",
    creditBalance: "2300",
    lastPurchase: "01/15/24",
    creditStatus: "Normal",
  },
  {
    id: 2,
    organizationName: "Green Solutions Ltd.",
    industry: "Environmental Services",
    creditBalance: "1800",
    lastPurchase: "02/10/24",
    creditStatus: "Normal",
  },
  {
    id: 3,
    organizationName: "Healthcare United",
    industry: "Healthcare",
    creditBalance: "3200",
    lastPurchase: "01/25/24",
    creditStatus: "Low",
  },
  {
    id: 4,
    organizationName: "Bright Minds Education",
    industry: "Education",
    creditBalance: "500",
    lastPurchase: "02/05/24",
    creditStatus: "Normal",
  },
  {
    id: 5,
    organizationName: "Global Freight Corp.",
    industry: "Logistics",
    creditBalance: "2750",
    lastPurchase: "01/30/24",
    creditStatus: "Normal",
  },
  {
    id: 6,
    organizationName: "Solar Power Network",
    industry: "Energy",
    creditBalance: "1200",
    lastPurchase: "02/01/24",
    creditStatus: "Low",
  },
  {
    id: 7,
    organizationName: "Visionary Designs Co.",
    industry: "Creative Arts",
    creditBalance: "2100",
    lastPurchase: "01/20/24",
    creditStatus: "Normal",
  },
  {
    id: 8,
    organizationName: "Pinnacle Finance Group",
    industry: "Finance",
    creditBalance: "4000",
    lastPurchase: "02/12/24",
    creditStatus: "Normal",
  },
  {
    id: 9,
    organizationName: "Urban Living Architects",
    industry: "Construction",
    creditBalance: "950",
    lastPurchase: "01/28/24",
    creditStatus: "Low",
  },
  {
    id: 10,
    organizationName: "Fresh Farm Organics",
    industry: "Agriculture",
    creditBalance: "1500",
    lastPurchase: "02/08/24",
    creditStatus: "Normal",
  },
];

export type CreditHistory = {
  id: number;
  organizationName: string;
  date: string;
  transactionCode: string;
  creditPurchased: string;
  creditUsed: string;
  creditStatus: "Normal" | "Low";
};

// Single array with mixed statuses
export const creditHistory: CreditHistory[] = [
  {
    id: 1,
    organizationName: "Tech Innovators Inc.",
    date: "01/12/24",
    transactionCode: "123456789",
    creditPurchased: "2300",
    creditUsed: "1200",
    creditStatus: "Normal",
  },
  {
    id: 2,
    organizationName: "Green Solutions Ltd.",
    date: "02/10/24",
    transactionCode: "987654321",
    creditPurchased: "1800",
    creditUsed: "700",
    creditStatus: "Normal",
  },
  {
    id: 3,
    organizationName: "Healthcare United",
    date: "01/10/24",
    transactionCode: "112233445",
    creditPurchased: "3200",
    creditUsed: "2800",
    creditStatus: "Low",
  },
  {
    id: 4,
    organizationName: "Bright Minds Education",
    date: "02/11/24",
    transactionCode: "556677889",
    creditPurchased: "500",
    creditUsed: "450",
    creditStatus: "Low",
  },
  {
    id: 5,
    organizationName: "Global Freight Corp.",
    date: "01/12/24",
    transactionCode: "998877665",
    creditPurchased: "2750",
    creditUsed: "2200",
    creditStatus: "Normal",
  },
  {
    id: 6,
    organizationName: "Solar Power Network",
    date: "02/12/24",
    transactionCode: "334455667",
    creditPurchased: "1200",
    creditUsed: "1100",
    creditStatus: "Low",
  },
  {
    id: 7,
    organizationName: "Visionary Designs Co.",
    date: "01/09/24",
    transactionCode: "443322110",
    creditPurchased: "2100",
    creditUsed: "1700",
    creditStatus: "Normal",
  },
  {
    id: 8,
    organizationName: "Pinnacle Finance Group",
    date: "02/12/24",
    transactionCode: "223344556",
    creditPurchased: "4000",
    creditUsed: "3500",
    creditStatus: "Normal",
  },
  {
    id: 9,
    organizationName: "Urban Living Architects",
    date: "01/10/24",
    transactionCode: "665544332",
    creditPurchased: "950",
    creditUsed: "850",
    creditStatus: "Low",
  },
  {
    id: 10,
    organizationName: "Fresh Farm Organics",
    date: "02/11/24",
    transactionCode: "778899001",
    creditPurchased: "1500",
    creditUsed: "1400",
    creditStatus: "Normal",
  },
];

interface ActivityData {
  day: string; // Day of the week (e.g., "Mon")
  hour: string; // Hour of the day (e.g., "12 AM")
  count: number; // Activity count
}

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const hours = Array.from({ length: 24 }, (_, idx) => {
  const period = idx < 12 ? "AM" : "PM";
  const hour = idx % 12 || 12; // Convert 0 to 12 for 12-hour format
  return `${hour} ${period}`;
});

export const activityData: ActivityData[] = days.flatMap((day) =>
  hours.map((hour) => ({
    day,
    hour,
    count: Math.floor(Math.random() * 100), // Random count between 0 and 99
  }))
);

// Define the type for a campaign
export interface Campaign {
  id: number;
  name: string;
  organization: string;
  date: string;
  openRate: string;
  optOutRate: string;
  status: string;
}

export const mockCampaignData: Campaign[] = [
  {
    id: 1,
    name: "Campaign A",
    organization: "Org 1",
    date: "2024-12-01",
    openRate: "45%",
    optOutRate: "5%",
    status: "Active",
  },
  {
    id: 2,
    name: "Campaign B",
    organization: "Org 2",
    date: "2024-11-15",
    openRate: "60%",
    optOutRate: "3%",
    status: "Completed",
  },
  {
    id: 3,
    name: "Campaign C",
    organization: "Org 3",
    date: "2024-10-20",
    openRate: "30%",
    optOutRate: "8%",
    status: "Drafts",
  },
];

export interface Uploads {
  id: number;
  fileName: string;
  dateUploaded: string;
  uploadedBy: string;
  fileSize: string;
  status: "In Progress" | "Successful" | "Failed";
}

export const mockUploadsData: Uploads[] = [
  {
    id: 1,
    fileName: "Tech_requirements_about_the_fund.gif",
    dateUploaded: "2024-12-01",
    uploadedBy: "TechSavvy Solutions",
    fileSize: "12MB",
    status: "Successful",
  },
  {
    id: 2,
    fileName: "Financial_report_2024.xlsx",
    dateUploaded: "2024-11-28",
    uploadedBy: "Finance Team",
    fileSize: "3MB",
    status: "In Progress",
  },
  {
    id: 3,
    fileName: "Project_presentation.mp3",
    dateUploaded: "2024-11-30",
    uploadedBy: "Audio Team",
    fileSize: "8MB",
    status: "Failed",
  },
  {
    id: 4,
    fileName: "Team_meeting_notes.png",
    dateUploaded: "2024-11-25",
    uploadedBy: "HR Department",
    fileSize: "1.5MB",
    status: "Successful",
  },
  {
    id: 5,
    fileName: "Annual_budget_review.xlsx",
    dateUploaded: "2024-11-15",
    uploadedBy: "Finance Department",
    fileSize: "4.2MB",
    status: "In Progress",
  },
  {
    id: 6,
    fileName: "Marketing_campaign_summary.gif",
    dateUploaded: "2024-11-10",
    uploadedBy: "Marketing Team",
    fileSize: "2.1MB",
    status: "Successful",
  },
  {
    id: 7,
    fileName: "Client_feedback.mp3",
    dateUploaded: "2024-11-20",
    uploadedBy: "Customer Support",
    fileSize: "6.3MB",
    status: "Failed",
  },
  {
    id: 8,
    fileName: "Product_launch_plan.png",
    dateUploaded: "2024-12-02",
    uploadedBy: "Product Team",
    fileSize: "3.5MB",
    status: "Successful",
  },
  {
    id: 9,
    fileName: "Performance_evaluation.gif",
    dateUploaded: "2024-10-30",
    uploadedBy: "HR Department",
    fileSize: "5MB",
    status: "Successful",
  },
  {
    id: 10,
    fileName: "Quarterly_sales_report.xlsx",
    dateUploaded: "2024-10-25",
    uploadedBy: "Sales Team",
    fileSize: "7.8MB",
    status: "In Progress",
  },
];

export interface AudienceData2 {
  id: number; // id field is now a number
  name: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  tags: string[];
  subscription: "Opted In" | "Opted Out";
}

// export const audienceData2: Array<AudienceData2> = [
//   {
//     id: 1,
//     name: "Catherine Summer",
//     phoneNumber: "+2348012345678",
//     tags: ["Sales", "Church", "Financials"],
//     subscription: "Opted In",
//   },
//   {
//     id: 2,
//     name: "John Doe",
//     phoneNumber: "+2348023456789",
//     tags: ["Marketing", "Outreach", "Strategy"],
//     subscription: "Opted In",
//   },
//   {
//     id: 3,
//     name: "Grace Johnson",
//     phoneNumber: "+2348034567890",
//     tags: ["Tech", "Support", "IT"],
//     subscription: "Opted Out",
//   },
//   {
//     id: 4,
//     name: "Michael Smith",
//     phoneNumber: "+2348045678901",
//     tags: ["Development", "Engineering", "Innovation"],
//     subscription: "Opted In",
//   },
//   {
//     id: 5,
//     name: "Sarah Lee",
//     phoneNumber: "+2348056789012",
//     tags: ["Customer Service", "Feedback", "Clients"],
//     subscription: "Opted In",
//   },
//   {
//     id: 6,
//     name: "David Kim",
//     phoneNumber: "+2348067890123",
//     tags: ["Finance", "Reports", "Planning"],
//     subscription: "Opted Out",
//   },
//   {
//     id: 7,
//     name: "Emily Davis",
//     phoneNumber: "+2348078901234",
//     tags: ["HR", "Recruitment", "Employee Relations"],
//     subscription: "Opted In",
//   },
//   {
//     id: 8,
//     name: "Daniel Wright",
//     phoneNumber: "+2348089012345",
//     tags: ["Executive", "Leadership", "Strategy"],
//     subscription: "Opted In",
//   },
//   {
//     id: 9,
//     name: "Jessica Brown",
//     phoneNumber: "+2348090123456",
//     tags: ["Logistics", "Operations", "Distribution"],
//     subscription: "Opted Out",
//   },
//   {
//     id: 10,
//     name: "Anthony White",
//     phoneNumber: "+2348101234567",
//     tags: ["Legal", "Compliance", "Contracts"],
//     subscription: "Opted In",
//   },
//   {
//     id: 11,
//     name: "Olivia Clark",
//     phoneNumber: "+2348112345678",
//     tags: ["Design", "Branding", "Creatives"],
//     subscription: "Opted In",
//   },
// ];

export interface ApiInterfaceTable {
  id: number
  name: string;
  value: string;
  lastUsed: string;
  created: string;
}

export const apiTable: ApiInterfaceTable[] = [
  {
    id: 1,
    name: "Default API key",
    value: "45d2c92c9002bb9bbb09686a51d0da",
    lastUsed: "2025-01-01",
    created: "2024-06-01",
  },

];
