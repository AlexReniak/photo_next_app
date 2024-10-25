import './globals.css';

export const metadata = {
  title: 'JR Photography | Professional Photographer',
  description:
    'Professional photographer who loves taking pictures that capture memories forever',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className=''>{children}</body>
    </html>
  );
}
