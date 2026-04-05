import { IBM_Plex_Sans, Source_Serif_4 } from "next/font/google";

export const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

export const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-source-serif-4",
  display: "swap",
});