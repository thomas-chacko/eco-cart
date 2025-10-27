import { useState } from 'react'

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'home', name: 'Home & Living' },
    { id: 'personal', name: 'Personal Care' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'food', name: 'Food & Drinks' }
  ]

  const products = [
    {
      id: 1,
      name: "Bamboo Toothbrush Set",
      category: "personal",
      price: "$12.99",
      originalPrice: "$16.99",
      image: "🦷",
      rating: 4.8,
      reviews: 124,
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Organic Cotton Tote Bag",
      category: "fashion",
      price: "$18.99",
      originalPrice: "$24.99",
      image: "👜",
      rating: 4.9,
      reviews: 89,
      badge: "Eco Choice"
    },
    {
      id: 3,
      name: "Reusable Water Bottle",
      category: "home",
      price: "$24.99",
      originalPrice: "$32.99",
      image: "🍶",
      rating: 4.7,
      reviews: 156,
      badge: "Popular"
    },
    {
      id: 4,
      name: "Natural Soap Bar Set",
      category: "personal",
      price: "$15.99",
      originalPrice: "$19.99",
      image: "🧼",
      rating: 4.6,
      reviews: 78,
      badge: "New"
    },
    {
      id: 5,
      name: "Organic Green Tea",
      category: "food",
      price: "$22.99",
      originalPrice: "$28.99",
      image: "🍵",
      rating: 4.8,
      reviews: 203,
      badge: "Premium"
    },
    {
      id: 6,
      name: "Eco-Friendly Cleaning Kit",
      category: "home",
      price: "$34.99",
      originalPrice: "$42.99",
      image: "🧽",
      rating: 4.5,
      reviews: 67,
      badge: "Bundle"
    }
  ]

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory)

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated collection of sustainable products. 
            Each item is chosen for its environmental benefits and exceptional quality.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              {/* Product Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.badge}
                  </span>
                </div>
              )}

              {/* Product Image */}
              <div className="relative bg-gradient-to-br from-green-100 to-emerald-100 h-64 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="text-6xl">{product.image}</div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                  <button className="bg-white text-green-600 px-6 py-2 rounded-full font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg cursor-pointer">
                    Quick View
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                
                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-green-600">{product.price}</span>
                    <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 rounded-full font-medium hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <button className="bg-white text-green-600 border-2 border-green-500 px-8 py-4 rounded-full font-semibold hover:bg-green-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer">
            Load More Products
          </button>
        </div>

        {/* Features Banner */}
        <div className="mt-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">Free Shipping</h4>
              <p className="text-green-100">On orders over $50</p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L9 9H1l6.5 5L5 23l7-5 7 5-2.5-9L23 9h-8L12 1z"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">30-Day Returns</h4>
              <p className="text-green-100">Hassle-free returns</p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">Eco Packaging</h4>
              <p className="text-green-100">100% recyclable materials</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products