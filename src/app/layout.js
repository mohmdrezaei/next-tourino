import Layout from "src/components/ui/layout/Layout";
import "./globals.css";
import { yekan } from "src/core/utils/fonts";
import { Toaster } from "react-hot-toast";
import TanstackQueryProvider from "src/components/partials/provider/TanstackQueryProvider";

export const metadata = {
  title: "Next Tourino",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <TanstackQueryProvider>
          <Layout>{children}</Layout>
        </TanstackQueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
