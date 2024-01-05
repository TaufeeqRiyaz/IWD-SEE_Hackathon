import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import Provider from "./(Provider)/Provider";
import Navbar from "./(Nav_components)/Navbar";
import StarsCanvas from "./(StarMode)/Background_Stars";

const space_text = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Taufeeq Riyaz",
  description: "Taufeeq Riyaz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={` bg-[#030014] overflow-y-scroll overflow-x-hidden  transition_ ${space_text.className}`}
      >
        <Provider>
          <StarsCanvas />
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
