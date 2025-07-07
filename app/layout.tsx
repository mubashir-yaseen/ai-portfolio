export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Muhammad Mubashir – AI Portfolio</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-gray-50 text-gray-900 font-sans antialiased">{children}</body>
    </html>
  );
}
