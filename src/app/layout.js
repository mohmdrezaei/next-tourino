import Layout from "src/components/layouts/Layout";
import "./globals.css";

export const metadata = {
  title: "Next Tourino",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className=""><Layout>{children}</Layout></body>
    </html>
  );
}
