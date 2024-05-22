import { Inter } from "next/font/google";
import "../css/index.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Matrix Rotator",
  description: "Rotate NxN matrix counterclockwise",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
