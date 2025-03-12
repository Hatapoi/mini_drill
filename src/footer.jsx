import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              Kami berdedikasi untuk menyediakan Produk aktif berkualitas tinggi yang menggabungkan kualitas, kenyamanan, dan performa.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="/" className="hover:text-white transition duration-300">Home</a>
              </li>
              <li className="mb-2">
                <a href="/products" className="hover:text-white transition duration-300">Products</a>
              </li>
              <li className="mb-2">
                <a href="/about" className="hover:text-white transition duration-300">About</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:text-white transition duration-300">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="text-gray-400">
              <li className="mb-2">Email: toolsDriven@business.com</li>
              <li className="mb-2">Telepon: +62 85365203936</li>
              <li className="mb-2">Alamat: RIAU, PEKANBARU JL.PARIT INDAH</li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="Twitter" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Relode. Hak cipta dilindungi undang-undang.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;