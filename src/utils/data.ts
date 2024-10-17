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
