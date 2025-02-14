import InfoCircle from "@/icons/info-circle";
import Multiply from "@/icons/multiply";
import React from "react";
import Button from "./buttons/Button";
import Spinner from "./spinner";

import { toast } from "react-toastify";
import { useDeleteContactMutation } from "@/lib/slices/contactApi";
import SuccessToast from "./SuccessToast";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  setSelectedItems: React.Dispatch<React.SetStateAction<number[]>>;
  selectedItems: number[];
  selectedIndex: number;
};

const DeleteModal: React.FC<Props> = ({
  setIsOpen,
  isOpen,
  setSelectedItems,
  selectedItems,
  selectedIndex,
}) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const handleDelete = async () => {
    try {
      if (selectedItems.length === 0) {
        await deleteContact(selectedIndex).unwrap();
      } else {
        await Promise.all(selectedItems.map((id) => deleteContact(id).unwrap()));
        setSelectedItems([]); // Reset selection after deletion
      }

      toast.success(<SuccessToast message="Deleted Successfully" />, { icon: false });
    } catch (error) {
      console.error("Failed to delete contacts", error);
    }
  };

  return (
    <div
      onClick={() => {
        if (isLoading) {
          return;
        }
        setIsOpen(false)}}
      className={`fixed top-0 left-0 z-50 h-screen w-full flex items-center justify-center bg-black/20 ${isOpen ? "visible" : "invisible"
        }`}
    >
      {isLoading ? (
        <div className="h-screen w-full flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div
          onClick={(e) => e.stopPropagation()}
          className={`flex rounded-[12px] items-start justify-between w-full p-6 bg-white max-w-[544px] mx-auto transition-all duration-700 ${isOpen ? "opacity-100" : "opacity-0"
            }`}
        >
          <div className="rounded-lg flex items-center mr-5 justify-center p-3 bg-[#FBE9E9] border border-solid border-[rgba(212,_38,_32,_0.50)]">
            <InfoCircle color="#D42620" height={20} width={20} />
          </div>
          <div className="flex flex-col gap-1 mr-4">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <p className="text-[17px] font-medium text-[#101828]">Delete Contact</p>
                <p className="text-[14px] max-w-[366px] font-normal text-[#667085] mt-2">
                  Are you sure you want to delete this contact? This action cannot be undone.
                </p>
              </div>
              <Button icon_style="icon-only" iconComponent={<Multiply color="#101928" />} onClick={() => setIsOpen(false)} />
            </div>

            <div className="flex items-center justify-end mt-8 gap-3">
              <Button

                onClick={() => {
                  setIsOpen(false);
                  setSelectedItems([]);
                }}
                text="Cancel"
              />
              <Button

                onClick={() => {
                  setIsOpen(false);
                  setSelectedItems([]);
                  handleDelete();
                }}
                type="destructive"
                text="Delete"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteModal;
