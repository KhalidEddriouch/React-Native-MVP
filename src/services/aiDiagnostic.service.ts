import { DiagnosticResult } from '../models/ServiceRequest';

export const getAIDiagnostic = (
  category: string,
  description: string
): DiagnosticResult => {
  switch (category) {
    case 'Plumbing':
      return {
        issue: 'Possible pipe leakage or blockage',
        urgency: 'Medium',
        recommendation: 'A plumber inspection is recommended',
      };

    case 'Electricity':
      return {
        issue: 'Potential electrical malfunction',
        urgency: 'High',
        recommendation: 'Immediate electrician visit required',
      };

    case 'Cleaning':
      return {
        issue: 'General cleaning service needed',
        urgency: 'Low',
        recommendation: 'Standard cleaning service is sufficient',
      };

    default:
      return {
        issue: 'Unknown issue',
        urgency: 'Low',
        recommendation: 'A technician visit is recommended',
      };
  }
};
