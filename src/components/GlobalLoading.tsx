
"use client"
import { useAppSelector } from '@/lib/hooks';
import React from 'react';
import {BeatLoader} from "react-spinners"


const GlobalLoading = () => {
  const isLoading = useAppSelector((state) => state.loading.isLoading);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0  bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="spinner text-white z-50"><BeatLoader color='#19AEF1' size={28} speedMultiplier={1} /></div>
    </div>
  ); 
};

export default GlobalLoading;
