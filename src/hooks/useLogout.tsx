import SuccessToast2 from '@/components/SuccessToast2';
import { useLogoutMutation } from '@/lib/slices/authApi';
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'react-toastify';

 

const useLogout = () => {
    const [logout, { isLoading, isError, error }] = useLogoutMutation();
    const router = useRouter()
    const handleLogout = async () => {
        try {
            await logout().unwrap();
            toast.success(<SuccessToast2 message={"Logout successful!"} />, {
                style: {
                    width: '100%', // Adjust width as needed
                    maxWidth: '',
                },
                className:
                    'text-white rounded-lg p-4 shadow-lg !w-full max-w-[400px]',
                bodyClassName:
                    'text-sm flex flex-col w-full max-w-[400px] !w-full !p-12',
                progressClassName: 'bg-red-200',
                icon: false,
                // closeButton: false, // Uncomment if you want to hide the close button
            });
            router.push("/login")
        } catch (error) {
            console.log("error", error);
        }
    }
    return {
        handleLogout
    }
}

export default useLogout