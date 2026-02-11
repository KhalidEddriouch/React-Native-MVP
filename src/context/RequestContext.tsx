import React, { createContext, useContext, useState, ReactNode } from 'react';
import {ServiceRequest} from '../models/ServiceRequest';

interface RequestContextType {
  request: ServiceRequest | null;
  createRequest: (category: string, description: string, imageUri?: string) => void;
  setDiagnostic: (diagnostic: ServiceRequest['diagnostic']) => void;
  selectQuote: (quote: ServiceRequest['selectedQuote']) => void;
  setSchedule: (date: string, time: string) => void;
  confirmPayment: () => void;
  setRating: (rating: number) => void;
  resetRequest: () => void;
}


const RequestContext = createContext<RequestContextType | undefined>(undefined);


export const RequestProvider = ({ children }: { children: ReactNode }) => {
  const [request, setRequest] = useState<ServiceRequest | null>(null);

  const createRequest = (
    category: string,
    description: string,
    imageUri?: string
  ) => {
    setRequest({
      category,
      description,
      imageUri,
      paymentConfirmed: false,
    });
  };

  const setDiagnostic = (diagnostic: ServiceRequest['diagnostic']) => {
    if (!request) return;
    setRequest({ ...request, diagnostic });
  };

  const selectQuote = (quote: ServiceRequest['selectedQuote']) => {
    if (!request) return;
    setRequest({ ...request, selectedQuote: quote });
  };

  const setSchedule = (date: string, time: string) => {
    if (!request) return;
    setRequest({ ...request, schedule: { date, time } });
  };

  const confirmPayment = () => {
    if (!request) return;
    setRequest({ ...request, paymentConfirmed: true });
  };

  const setRating = (rating: number) => {
    if (!request) return;
    setRequest({ ...request, rating });
  };

  const resetRequest = () => {
    setRequest(null);
  };

  return (
    <RequestContext.Provider
      value={{
        request,
        createRequest,
        setDiagnostic,
        selectQuote,
        setSchedule,
        confirmPayment,
        setRating,
        resetRequest,
      }}
    >
      {children}
    </RequestContext.Provider>
  );
};


export const useRequest = () => {
  const context = useContext(RequestContext);
  if (!context) {
    throw new Error('useRequest must be used within a RequestProvider');
  }
  return context;
};
