"use client";
import Button from "@/components/buttons/Button";
import Check from "@/icons/check";
import ChevronLeft from "@/icons/chevron-left";
import Copy from "@/icons/copy";
import Money1 from "@/icons/money-1";
import logo from "../../../../../images/Logo.png";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import Image from "next/image";

type Props = {};

type TransactionData = {
  transactionCode: string;
  date: string;
  transactionType: string;
  description: string;
  amountSpent: number;
  balance: number;
  status: string;
};

// Transaction data object
const transactionData: TransactionData = {
  transactionCode: "TXN45683",
  date: "02/10/2024, 13:09:45",
  transactionType: "Credit Usage",
  description: "Sent campaign #231",
  amountSpent: 346,
  balance: 31610,
  status: "Successful",
};

const TransactionDetails = (props: Props) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [istransaction, setIsTransaction] = useState<boolean>(false);
  const receiptRef = useRef<HTMLDivElement>(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState<boolean>(false);

  // Handler function to copy transaction code
  const handleCopy = () => {
    navigator.clipboard.writeText("TXN45683").then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    });
  };

  const downloadPDF = async () => {
    try {
      // Create PDF with slightly larger width for better spacing
      const pdf = new jsPDF({
        unit: "mm",
        format: "a4",
      });

      const pageWidth = pdf.internal.pageSize.getWidth();

      // Helper function to add justified text
      const addJustifiedText = (
        leftText: string,
        rightText: string,
        y: number
      ) => {
        pdf.text(leftText, 20, y); // Left margin at 20mm
        const rightTextWidth = pdf.getTextWidth(rightText);
        pdf.text(rightText, pageWidth - 20 - rightTextWidth, y); // Right margin at 20mm
      };

      const loadImage = () => {
        return new Promise<HTMLImageElement>((resolve, reject) => {
          const img = document.createElement("img");
          img.src = "logo";
          img.onload = () => resolve(img);
          img.onerror = () => reject(new Error("Failed to load logo"));
        });
      };

      try {
        // const img = await loadImage();

        // const canvas = document.createElement('canvas');
        // canvas.width = img.width;
        // canvas.height = img.height;
        // const ctx = canvas.getContext('2d');
        // if (ctx) {
        //   ctx.drawImage(img, 0, 0);
        //   const imageData = canvas.toDataURL('image/png');

        //   // Add logo
        //   pdf.addImage(imageData, "PNG", 20, 20, 30, 30);
        // }

        // Title and Company Name (centered)
        pdf.setFontSize(18);
        const title = "Transaction Receipt";
        const titleWidth = pdf.getTextWidth(title);
        pdf.text(title, (pageWidth - titleWidth) / 2, 30);

        pdf.setFontSize(12);
        const companyName = "Sendeet";
        const companyNameWidth = pdf.getTextWidth(companyName);
        pdf.text(companyName, (pageWidth - companyNameWidth) / 2, 40);

        // Transaction Details Header
        pdf.setFontSize(14);
        pdf.text("Transaction Details", 20, 60);

        // Transaction Details Content with justified text
        pdf.setFontSize(12);
        const details = [
          ["Transaction Code", transactionData.transactionCode],
          ["Date & Time", transactionData.date],
          ["Transaction Type", transactionData.transactionType],
          ["Description", transactionData.description],
          [
            "Credit Amount Spent",
            `$${transactionData.amountSpent.toLocaleString()}`,
          ],
          ["Credit Balance", `$${transactionData.balance.toLocaleString()}`],
        ];

        // Add each detail with justified text
        details.forEach(([label, value], index) => {
          addJustifiedText(label, value.toString(), 75 + index * 10);
        });

        // Status (special handling for color)
        pdf.setTextColor(
          transactionData.status === "Successful" ? "#0B6B2B" : "#FF0000"
        );
        addJustifiedText(
          "Status",
          transactionData.status,
          75 + details.length * 10
        );

        // Reset text color
        pdf.setTextColor("#000000");

        // // Add line under each detail
        // details.forEach((_, index) => {
        //   const y = 77 + (index * 10);
        //   pdf.setDrawColor(200, 200, 200); // Light gray color for lines
        //   pdf.line(20, y, pageWidth - 20, y);
        // });

        // Save PDF
        pdf.save("transaction_receipt.pdf");
      } catch (error) {
        console.error("Error generating PDF:", error);
        throw new Error("Failed to generate PDF");
      }
    } catch (error) {
      console.error("Error in downloadPDF:", error);
      alert("Failed to generate the PDF. Please try again.");
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center gap-4">
        <div className=" flex items-center justify-center p-4 shadow-[0px_1px_1px_0px_rgba(16,_24,_40,_0.10)] rounded-lg border border-grey-50">
          <Money1 color="black" />
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold">
            Credits <span className="text-[#D0D5DD] text-xs mx-2">/</span>
            <span className="text-primary-600 font-medium  text-sm">
              Transaction details
            </span>
          </p>
          <p className="text-sm text-grey-500">
            Manage your credits to send bulk messages
          </p>
        </div>
      </div>
      <div className="flex-1  mt-4 flex items-center justify-center ">
        <div className="flex flex-col gap-4 w-full max-w-[520px] ">
          <div className="flex items-center gap-3">
            <Link href={"/dashboard/credits"}>
              {" "}
              <Button
                icon_style="icon-only"
                size="sm"
                iconComponent={<ChevronLeft color="black" />}
              />
            </Link>
            <p className="font-semibold text-[#263238] text-[20px]">Credits</p>
          </div>
          <div
            className={`w-full p-7 mt-4  rounded-2xl border border-[#E4E7EC]
            `}
          >
            <div ref={receiptRef} className="">
              {isGeneratingPDF && (
                <div className="flex justify-center mb-4">
                  <Image
                    src={logo} // Replace with your logo path or URL
                    alt="Logo"
                    className="w-24 h-auto"
                  />
                </div>
              )}
              <p className="text-center text-[18px] font-medium">
                Transaction Details
              </p>
              <div className="flex flex-col mt-6 gap-6">
                <div className="flex items-center justify-between">
                  <span className="text-grey-300 text-sm">
                    Transaction code
                  </span>
                  <div
                    onClick={handleCopy}
                    className="flex items-center text-sm gap-1"
                  >
                    <span>TXN45683</span>{" "}
                    {isCopied ? (
                      <Check color="#0B6B2B" />
                    ) : (
                      <Copy color="#B9BDC7" />
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-grey-300 text-sm">Date & Time</span>

                  <span className="text-sm ">02/10/2024, 13:09:45</span>
                </div>
                <div className="flex items-center justify-between pb-6 border-b border-b-[#F0F1F3]">
                  <span className="text-grey-300 text-sm">
                    Transaction type
                  </span>
                  <span className="text-sm ">Credit Usage</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-grey-300 text-sm">Description</span>

                  <span className="text-sm ">Sent campaign #231</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-grey-300 text-sm">
                    Credit Amount Spent
                  </span>

                  <span className="text-sm ">346</span>
                </div>
                <div className="flex items-center justify-between pb-6 border-b border-b-[#F0F1F3]">
                  <span className="text-grey-300 text-sm">Credit Balance</span>

                  <span className="text-sm ">31,610</span>
                </div>

                <div className="flex items-center justify-between pb-5 border-b border-b-[#F0F1F3]">
                  <span className="text-grey-300 text-sm">Status</span>

                  <span className="py-1 text-sm bg-success-50 rounded-2xl text-success-700 px-[10px]">
                    Successful
                  </span>
                </div>
              </div>
            </div>
            <Button
              size="lg"
              onClick={downloadPDF}
              text="Download Receipt"
              type="primary"
              className="mt-11 !px-4 !py2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;
