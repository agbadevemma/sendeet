import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import StoreProvider from "./StoreProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalLoading from "@/components/GlobalLoading";
import ClientOnly from "@/components/ClientOnly";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sendeet",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={`en`}>
      <body className={` antialiased  ${inter.className} `}>
        <NextTopLoader showSpinner={false} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          style={{
            width: "100%", // Ensuring full width for the container
            maxWidth: "", // Can adjust as per your needs
          }}
          className="text-white rounded-lg p-4  !w-full max-w-[400px]" // Tailwind classes applied to container
          bodyClassName="text-sm flex flex-col w-full max-w-[400px] !w-full !p-12" // Tailwind classes applied to body
        />
        <StoreProvider> {children}</StoreProvider>
      </body>
    </html>
  );
}
