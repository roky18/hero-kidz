import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const poppins = Poppins({
  weight: ["100", "200", "400", "500", "600", "800"],
});

export const fontBangla = localFont({ src: "./../fonts/mayaboti-normal.ttf" });

// app/layout.js

export const metadata = {
  // ✨ Base URL – production deployment domain
  metadataBase: new URL("https://hero-kids-one.vercel.app"),

  // 📌 Default site title and template
  title: {
    default: "Hero Kids Educational Toys",
    template: "%s | Hero Kids",
  },

  description:
    "Hero Kids: Fun & educational toys for kids — boards, flash cards, learning games & more!",

  openGraph: {
    title: "Hero Kids Educational Toys",
    description:
      "Explore fun & educational toys for kids — build skills, have fun!",
    url: "https://hero-kids-one.vercel.app",
    siteName: "Hero Kids",
    type: "website",
    images: [
      {
        url: "https://i.ibb.co.com/Txsfrmzw/Capture.png", // Home preview image
        width: 1200,
        height: 630,
        alt: "Hero Kids - Best educational toys for kids",
      },
      {
        url: "https://i.ibb.co.com/mrPPn3s6/Capture-products.png", // Product page review screenshot
        width: 1200,
        height: 630,
        alt: "Product review and ratings preview",
      },
    ],
  },

  // 📌 Twitter card settings
  twitter: {
    card: "summary_large_image",
    title: "Hero Kids Educational Toys",
    description: "Fun & engaging educational toys for kids!",
    images: ["https://ibb.co.com/1phnYD3"],
  },

  // 📌 Favicons / icons
  icons: {
    icon: "https://ibb.co.com/QF2Z2jjS", // logo image
    shortcut: "https://ibb.co.com/QF2Z2jjS",
  },

  // 🎯 Additional SEO tags (optional)
  keywords: [
    "kids toys",
    "educational toys",
    "learning toys for kids",
    "math games",
    "flash cards",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${poppins.className} antialiased`}>
        <header className="py=2 md:w-11/12 mx-auto">
          <Navbar></Navbar>
        </header>
        <main className="py=2 md:w-11/12 mx-auto min-h-[calc(100vh-302px)]">
          {children}
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
