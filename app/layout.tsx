import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { APP_NAME, APP_DESCRIPTION,APP_SLOGAN } from "@/lib/constants";
import { Roboto } from "next/font/google";
import { RfqProvider } from "@/lib/rqt";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import CookieConsent from "@/components/cookie";
import { RfqDrawer } from "@/components/RfqDrawer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Toaster } from "@/components/ui/sonner";
import ScrollProgress from "@/components/ScrollProgress";


const roboto =Roboto({
  subsets:['latin'],
  weight:['400','500','700']
})

const geistSans = Geist({ 
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
   title:{
    template:`%s | ${APP_NAME}`,
    default: `${APP_NAME}.${APP_SLOGAN}`,
  },
   description:APP_DESCRIPTION, 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
       
     <RfqProvider>
      <ScrollProgress/>
       <SmoothScroll>
      {children}
      </SmoothScroll>
       <RfqDrawer/>
        <WhatsAppFab/>
    <CookieConsent/>
       <Toaster />
     </RfqProvider>
    
   
      </body>
    </html>
  );
}

