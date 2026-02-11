export interface DiagnosticResult {
  issue: string;
  urgency: 'Low' | 'Medium' | 'High';
  recommendation: string;
}

export interface Quote {
  name: string;
  price: string;
  rating: number;
}

export interface Schedule {
  date: string;
  time: string;
}

export interface ServiceRequest {
  category: string;
  description: string;
  imageUri?: string;
  diagnostic?: DiagnosticResult;
  selectedQuote?: Quote;
  schedule?: Schedule;
  paymentConfirmed: boolean;
  rating?: number;
}
