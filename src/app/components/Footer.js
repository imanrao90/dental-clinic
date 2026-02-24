import Link from "next/link";

export default function Footer () {
    return (
        <footer className="bg-gray-900 text-white py-10 mt-10">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-6">
            <p>
              © {new Date().getFullYear()} Dental Clinics of Texas. All rights reserved.
            </p>

            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-gray-300">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="hover:text-gray-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </footer>
    )
}