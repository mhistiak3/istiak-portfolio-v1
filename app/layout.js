import "./globals.css";

export const metadata = {
  title: "Istiak Ahmmad",
  description: "Istiak Ahammad Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
