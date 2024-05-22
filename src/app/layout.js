import "../css/index.scss";

export const metadata = {
  title: "Matrix Rotator",
  description: "Rotate NxN matrix counterclockwise",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
