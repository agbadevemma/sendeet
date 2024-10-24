type Option = {
  value: string;
  label: string;
};
export const industryOptions: Option[] = [
  { value: "tech", label: "Technology" },
  { value: "finance", label: "Finance" },
  { value: "healthcare", label: "Healthcare" },
  { value: "education", label: "Education" },
  { value: "realestate", label: "Real Estate" },
  { value: "construction", label: "Construction" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "retail", label: "Retail" },
  { value: "transportation", label: "Transportation" },
  { value: "agriculture", label: "Agriculture" },
  { value: "energy", label: "Energy" },
  { value: "telecommunications", label: "Telecommunications" },
  { value: "entertainment", label: "Entertainment" },
  { value: "hospitality", label: "Hospitality" },
  { value: "legal", label: "Legal Services" },
  { value: "nonprofit", label: "Nonprofit Organizations" },
  { value: "marketing", label: "Marketing and Advertising" },
  { value: "insurance", label: "Insurance" },
  { value: "consulting", label: "Consulting" },
  { value: "logistics", label: "Logistics and Supply Chain" },
  { value: "automotive", label: "Automotive" },
  { value: "pharmaceutical", label: "Pharmaceutical" },
];

export const employeeCountOptions: Option[] = [
  { value: "1-10", label: "1-10 employees" },
  { value: "11-50", label: "11-50 employees" },
  { value: "51-200", label: "51-200 employees" },
  { value: "201+", label: "201+ employees" },
];

export const subscriberRangeOptions: Option[] = [
  { value: "0-1000", label: "0-1,000 subscribers" },
  { value: "1001-10000", label: "1,001-10,000 subscribers" },
  { value: "10001-100000", label: "10,001-100,000 subscribers" },
  { value: "100001+", label: "100,001+ subscribers" },
];

export interface Transaction {
  code: string;
  date: string;
  creditPurchased: string;
  description: string;
  creditUsed: string;
  status: "successful" | "pending" | "failed";
}

// export const initialTransactions: Transaction[] = [
//   {
//     code: "TXN12345",
//     date: "10/10/24",
//     creditPurchased: "500",
//     description: "Purchased 500 credits",
//     creditUsed: "-",
//     status: "successful",
//   },
//   {
//     code: "TXN12346",
//     date: "10/11/24",
//     creditPurchased: "1000",
//     description: "Purchased 1000 credits",
//     creditUsed: "-",
//     status: "successful",
//   },
//   {
//     code: "TXN12347",
//     date: "10/12/24",
//     creditPurchased: "200",
//     description: "Purchased 200 credits",
//     creditUsed: "50",
//     status: "failed",
//   },
//   {
//     code: "TXN12348",
//     date: "10/13/24",
//     creditPurchased: "300",
//     description: "Purchased 300 credits",
//     creditUsed: "-",
//     status: "pending",
//   },
//   {
//     code: "TXN12349",
//     date: "10/14/24",
//     creditPurchased: "750",
//     description: "Purchased 750 credits",
//     creditUsed: "100",
//     status: "successful",
//   },
//   {
//     code: "TXN12350",
//     date: "10/15/24",
//     creditPurchased: "500",
//     description: "Purchased 500 credits",
//     creditUsed: "-",
//     status: "pending",
//   },
//   {
//     code: "TXN12351",
//     date: "10/16/24",
//     creditPurchased: "250",
//     description: "Purchased 250 credits",
//     creditUsed: "50",
//     status: "failed",
//   },
//   {
//     code: "TXN12352",
//     date: "10/17/24",
//     creditPurchased: "1000",
//     description: "Purchased 1000 credits",
//     creditUsed: "200",
//     status: "successful",
//   },
//   {
//     code: "TXN12353",
//     date: "10/18/24",
//     creditPurchased: "500",
//     description: "Purchased 500 credits",
//     creditUsed: "-",
//     status: "pending",
//   },
//   {
//     code: "TXN12354",
//     date: "10/19/24",
//     creditPurchased: "600",
//     description: "Purchased 600 credits",
//     creditUsed: "-",
//     status: "successful",
//   },
//   {
//     code: "TXN12355",
//     date: "10/20/24",
//     creditPurchased: "1200",
//     description: "Purchased 1200 credits",
//     creditUsed: "300",
//     status: "failed",
//   },
  
  
 
// ];


export const initialTransactions: Transaction[] = [
  
 
];
