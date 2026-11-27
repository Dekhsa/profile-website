import { Bricolage_Grotesque, Instrument_Serif, DM_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./contexts/LanguageContext";

const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Hey, over here! — Muhamad Dekhsa Afnan",
  description:
    "Portfolio website of Muhamad Dekhsa Afnan — Project Manager & Junior Fullstack Web Developer at PT. Jendela Digital Indonesia (IndonesiaIT).",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${bricolage.variable} ${instrumentSerif.variable} ${dmSans.variable} antialiased bg-[#F0EBE6] text-black selection:bg-[#E6FAB9] selection:text-black`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
