import SuccessToast2 from '@/components/SuccessToast2';
import { useLogoutMutation } from '@/lib/slices/authApi';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export const logoutHandler = async () => {
    const router = useRouter();
    const [logout] = useLogoutMutation();

    try {
        await logout().unwrap();
        toast.success("collsds-----mkmkk", {
            className: 'text-white rounded-lg p-4 shadow-lg !w-full max-w-[400px]',
            bodyClassName: 'text-sm flex flex-col w-full max-w-[400px] !w-full !p-12',
            progressClassName: 'bg-red-200',
            icon: false,
        });
        router.push("/login");
    } catch (error) {
        console.error("Logout error:", error);
    }
};
