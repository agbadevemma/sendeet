"use client";
import Button from "@/components/buttons/Button";
import ExploreCard from "@/components/onboarding/ExploreCard";
import FileDownload from "@/icons/file-download";
import Plus from "@/icons/plus";
import UserAdd from "@/icons/user-add";
import UserGroup from "@/icons/user-group";
import { useAppDispatch } from "@/lib/hooks";
import { setExplore } from "@/lib/slices/miscellaneousSlice";
import React, { useEffect } from "react";

type Props = {};

const Audience = (props: Props) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setExplore("singlecontact"));
  }, []);
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-start gap-4 lg:items-center justify-between">
        <div className="flex items-center gap-4">
          <div className=" flex items-center justify-center p-4 shadow-[0px_1px_1px_0px_rgba(16,_24,_40,_0.10)] rounded-lg border border-grey-50">
            <UserGroup color="black" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold">Audience</p>
            <p className="text-sm text-grey-800">
              View, import, and organize your contact list for more effective
              campaign targeting
            </p>
          </div>
        </div>
        <div className="flex  gap-3 mt-4 lg:mt-0">
          <div className="relative w-full">
            <ExploreCard
              arrowClassName="-translate-x-1/2  !left-auto  !top-2  !-right-2.5 "
              currentStep="singlecontact"
              bodyClassName="top-[0rem]  !-left-[21rem] "
              description="Quickly add a new contact to your audience list manually."
              onNext={() => dispatch(setExplore("bulkcontact"))}
              title="Manually add a single contact"
            />{" "}
            <Button
              size="sm"
              iconComponent={<UserAdd color="#383E49" />}
              icon_style="leading-icon"
              text="Add Contact"
            />
          </div>
          <div className="relative w-full">
          <ExploreCard
              arrowClassName="-translate-x-1/2  !left-auto  !-top-1.5 !right-1 "
              currentStep="bulkcontact"
              bodyClassName="top-[0rem]  !-left-[10rem]  mt-14  "
              description="Quickly add a new contact to your audience list manually."
              onNext={() => dispatch(setExplore("bulkcontact"))}
              title="Manually add a single contact"
            />{" "}
            <Button
              size="sm"
              // onClick={() => dispatch(toggleModal())}
              iconComponent={<Plus color="#fff" />}
              icon_style="leading-icon"
              type="primary"
              text="Import Contacts"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audience;
