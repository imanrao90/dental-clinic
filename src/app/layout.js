import './global.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import { TopBar } from './components/header/TopBar';

export default function Layout({ children }) {

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* <TopBar/> */}
        <Header/>
        {/* Main Content */}
        <main className="flex-grow">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}