import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";


const roboto = Roboto({ subsets: ["latin"], weight: ['400', '500', '700'] });

export const metadata = {
  title: "Easy Foods",
  description: "Food ordering application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="container mx-auto p-4">
          <Header />
          {children}
        </main>
        </body>
    </html>
  );
}
