import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:"SparkRelay — Open source, connected.",
  description:"SparkRelay is a small, independent technology organization building practical software, experiments, and open-source projects for the open web."
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
