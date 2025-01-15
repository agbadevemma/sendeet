import UserCross from '@/icons/user-cross';
import React from 'react'

type Props = {
    message: string;
    subMessage?: string;

}

const ErrorToast = ({ message,
    subMessage,
}: Props) => {
    return <div className="flex items-start justify-between w-full py-2 px-4">
        <div className="rounded-lg flex items-center mr-5 justify-center p-2 bg-error-50 border border-error-500 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.10),0px_0px_0px_1px_rgba(185,_189,_199,_0.20)]">
            <UserCross color="#D42620" />
        </div>
        <div className="gap-1 flex flex-col mr-4 w-full">
            <p className="!text-[14px] !font-medium text-[#101828]">
                {message || 'An error occurred'}
            </p>
            <p className="!text-[14px] !font-normal text-[#667085]">
                {subMessage || 'Please try again later.'}
            </p>
        </div>
    </div>

}

export default ErrorToast