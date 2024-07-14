import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Onschool - Hệ thống quản lý và học tập trực tuyến",
  description: "Hệ thống học tập Chương trình cử nhân trực tuyến",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Tắt tự động thêm underline Email, Phone trên mobile */}
        {/* Start */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="email=no" />
        {/* End */}
        <link rel="apple-touch-icon" sizes="180x180" href="/images/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/icons/favicon-16x16.png" />
        <link rel="manifest" href="/images/icons/site.webmanifest" />
      </head>
      <body>{children}</body>
    </html>
  );
}
