import './global.css'
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Layout({ children }) {

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header/>
        {/* Main Content */}
        <main className="flex-grow">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}