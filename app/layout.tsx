import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Bethel High School | Bapatla",
  description:
    "Bethel High School – Nursery to High School education in Bapatla, nurturing young minds with care, discipline and values.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
