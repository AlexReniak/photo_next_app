import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './globals.css';

export const metadata = {
  title: 'JR Photography | Professional Photographer',
  description:
    'Professional photographer who loves capturing breathtaking moments',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className=''>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
