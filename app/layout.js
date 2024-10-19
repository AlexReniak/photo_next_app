import './globals.css';

export const metadata = {
  title: 'Photoes by JR',
  description: 'Photo Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className=''>{children}</body>
    </html>
  );
}
