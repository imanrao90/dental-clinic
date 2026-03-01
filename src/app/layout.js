import './global.css'
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Dental Clinics of Texas",
  description: "Trusted pediatric dental clinic in Texas.",
  icons: {
    icon: "/favicon.jpg",
  },
};

export default function Layout({ children }) {

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}