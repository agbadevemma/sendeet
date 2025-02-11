import Check from '@/icons/check';
import CheckCircle from '@/icons/check-circle';
import UserCross from '@/icons/user-cross';
import React from 'react'

type Props = {
    message: string;
    subMessage?: string;

}

const SuccessToast2 = ({ message,
    subMessage,
}: Props) => {
    return <div className="flex items-start justify-between w-full py-2 px-4">
        <div className="rounded-lg flex items-center mr-5 justify-center p-2 bg-success-50 border border-success-500">
            <CheckCircle color="#0F973D" />
        </div>
        <div className="gap-1 flex flex-col mr-4 w-full">
            <p className="  !text-[14px] !font-medium text-[#101828]">
                {message || 'Success'}
            </p>
            <p className=" !text-[14px] !font-normal text-[#667085]">
                {subMessage ?? ""}
            </p>
        </div>
    </div>

}

export default SuccessToast2