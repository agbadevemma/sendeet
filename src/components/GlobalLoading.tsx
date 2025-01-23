
"use client"
import { useAppSelector } from '@/lib/hooks';
import React from 'react';
import {BeatLoader} from "react-spinners"


const GlobalLoading = () => {
  const isLoading = useAppSelector((state) => state.loading.isLoading);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0  z-[100] bg-black bg-opacity-50 flex items-center justify-center">
      <div className="spinner text-white z-50"><span className="loader"></span></div>
    </div>
  ); 
};

export default GlobalLoading;
