import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
import bormini1 from "./assets/bormini1.jpg"
import bormini from "./assets/bormini.jpg"
import bormini2 from "./assets/bormini2.jpg"
import bormini3 from "./assets/bormini3.jpg"
import costumer1 from "./assets/costumer1.jpg"
import costumer2 from "./assets/costumer2.jpg"
import costumer3 from "./assets/costumer3.jpg"

const ProductPage = () => {
  // State for modal and selected image
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  // Product details
  const productName = "Bor Mini 12V DC 15000 RPM Mini Drill Electric Engraver Grinder";
  const productPrice = "Rp. 110.000"; // Harga setelah diskon
  const originalPrice = "Rp. 160.000"; // Harga sebelum diskon

  // WhatsApp message
  const whatsappMessage = `Hi admin, Saya ingin beli ${productName} dengan harga ${productPrice}. bisa cek ongkirnya?`;
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const phoneNumber = "6285365203936"; // Replace with your WhatsApp number (without spaces or special characters)
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Shopee link
  const shopeeLink = "https://s.shopee.co.id/6fSZ82tFKe"; // Replace with your actual Shopee product link

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Hanif Nazar",
      review: "Barangnya bagus, packingannya aman. Lengkap alatnya, sudah lama saya cari untuk aksesoris. Memudahkan pekerjaan, sangat membantu dengan berbagai macam alatnya. Terima kasih.",
      rating: 5,
      image: costumer1, // Placeholder image
    },
    {
      id: 2,
      name: "Rusdi R.",
      review: "Kualitas oke, maaf tidak ad video, sudah di uji coba sesaat, putaran kencang, berfungsi dengan baik dan benar. Sangat rekomendasi buat dan memeprrmudah pekerjaan 👍🏻👍🏻.",
      rating: 5,
      image: costumer3, // Placeholder image
    },
    {
      id: 3,
      name: "Azzahara Hasbih",
      review: "Barang nya kecil bagus nyaman di genggam, ada karetnya juga di didepan jd enak di pegang. Untuk Packing juga mantap, Dus dan BubbleWarp nya sangat tebal (walau saya cuma beli 1 barang) jadi sangat Safety.",
      rating: 5,
      image: costumer2, // Placeholder image
    },
  ];

  // Thumbnail images
  const thumbnailImages = [
    bormini1,
    bormini2,
    bormini3,
  ];

  // Handle thumbnail click
  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Handle Add to Cart button click
  const handleAddToCart = () => {
    window.open(whatsappLink, '_blank'); // Open WhatsApp link in a new tab
  };

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Images */}
          <div className="md:w-1/2">
            <img
              src={bormini}
              alt="Product"
              className="w-full rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleThumbnailClick(bormini)}
            />
            <div className="flex gap-4 mt-4">
              {thumbnailImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-24 h-24 rounded-lg shadow cursor-pointer"
                  onClick={() => handleThumbnailClick(image)}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-4 text-black">{productName}</h1>
            <div className="flex items-center gap-4 mb-6">
              <p className="text-4xl font-bold text-black">
                {productPrice}
              </p>
              <p className="text-gray-400 line-through text-xl">
                {originalPrice}
              </p>
            </div>
            <p className="text-gray-600 mb-6">
              Bor Mini 12V DC 15000 RPM Mini Drill Electric Engraver Grinder Gerinda Electrik Listrik / Alat Ukir Kayu /Alat Amplas / Alat Pemotong
            </p>

            {/* Size Selector */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="size">
                Size
              </label>
              <select id="size" className="block w-full bg-white border border-gray-300 rounded-lg py-2 px-4 text-black">
                <option>27pcs  (56 tersisa)</option>
                <option>130pcs (habis)</option>
                <option>240pcs (habis)</option>
              </select>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="bg-black text-white py-3 px-6 rounded-lg font-bold hover:bg-gray-800 transition duration-300 mb-4 hover:cursor-pointer">
              Beli Sekarang
            </button>

            {/* Buy via WhatsApp Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white py-3 px-6 rounded-lg font-bold hover:bg-green-600 transition duration-300 flex items-center justify-center gap-2 mb-4"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp Logo"
                className="w-6 h-6"
              />
              Pesan via WhatsApp
            </a>

            {/* Buy on Shopee Button */}
            <a
              href={shopeeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 text-white py-3 px-6 rounded-lg font-bold hover:bg-orange-600 transition duration-300 flex items-center justify-center gap-2"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Shopee.svg"
                alt="Shopee Logo"
                className="w-6 h-6"
              />
              Belanja di Shopee
            </a>

            {/* Product Description */}
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4 text-black">Deskripsi Produk</h2>
              <p className="text-gray-600">
                Model mini (dengan kecepatan variabel tak terbatas), mudah dioperasikan, ukuran kecil, desain manusiawi, nyaman, tahan aus, anti selip, dan daya kecil, cocok untuk operasi ukiran skala kecil
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-4">
                <li>Rentang kecepatan: 18000r/menit</li>
                <li>Tegangan masukan: 100-240V</li>
                <li>Tegangan keluaran: 12V</li>
                <li>Daya: 13W</li>
              </ul>
              <h2 className="text-xl font-bold mb-4 mt-4 text-gray-600">BEBERAPA ISI PAKET :</h2>
              <ul className="text-gray-600 mt-4">
                <li>- 1 Power Adapter</li>
                <li>- 1 Electric Drill</li>
                <li>- 27pcs Kelengkapan</li>
                <li>- Box</li>
              </ul>
            </div>

            {/* Testimonials */}
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4 text-black">Customer Reviews</h2>
              <div className="space-y-4">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <p className="text-gray-800 font-semibold">{testimonial.name}</p>
                        <div className="flex gap-1 text-yellow-500">
                          {[...Array(5)].map((_, index) => (
                            <FontAwesomeIcon
                              key={index}
                              icon={faStar}
                              className={index < testimonial.rating ? "text-yellow-500" : "text-gray-300"}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 mt-2">{testimonial.review}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Modal for Larger Image */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="bg-white p-4 rounded-lg max-w-3xl max-h-full overflow-auto">
            <img
              src={selectedImage}
              alt="Enlarged Product"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;