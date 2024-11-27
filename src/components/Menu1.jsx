import React, { useState } from 'react';
import '../App.css';
import Swal from 'sweetalert2';
import 'font-awesome/css/font-awesome.min.css';

function Menu1({ addToCart }) {
  const [selectedSize, setSelectedSize] = useState('Medium');
  const [selectedTemperature, setSelectedTemperature] = useState('Hot');
  
  const menuItems = [
    {
      name: 'Espresso',
      price: { Hot: { Medium: 5, Large: 7 }, Iced: { Medium: 6, Large: 8 } },
      image: 'https://example.com/espresso.jpg',
      description: 'A strong and black coffee made from espresso beans.',
    },
    {
      name: 'Latte',
      price: { Hot: { Medium: 6, Large: 8 }, Iced: { Medium: 7, Large: 9 } },
      image: 'https://example.com/latte.jpg',
      description: 'A creamy coffee made with espresso and steamed milk.',
    },
    {
      name: 'Cappuccino',
      price: { Hot: { Medium: 6, Large: 8 }, Iced: { Medium: 7, Large: 9 } },
      image: 'https://example.com/cappuccino.jpg',
      description: 'A coffee made with espresso, steamed milk, and a layer of foam.',
    },
    {
      name: 'Americano',
      price: { Hot: { Medium: 5, Large: 7 }, Iced: { Medium: 6, Large: 8 } },
      image: 'https://example.com/americano.jpg',
      description: 'A simple black coffee made by diluting espresso with hot water.',
    },
  ];

  const handleCardClick = (item) => {
    Swal.fire({
      title: item.name,
      html: `
        <img src="${item.image}" alt="${item.name}" class="img-fluid mb-3" style="max-width: 100%; height: auto;" />
        <p>${item.description}</p>
      `,
      showCancelButton: true,
      confirmButtonText: 'Add to Cart',
      customClass: {
        confirmButton: 'swal-btn-confirm',
        cancelButton: 'swal-btn-cancel',
        popup: 'swal-popup',
      },
      preConfirm: () => {
        const size = selectedSize;
        const temperature = selectedTemperature;

        const itemWithSizeAndTemperature = {
          ...item,
          size: size,
          temperature: temperature,
          price: item.price[temperature][size],
        };
        addToCart(itemWithSizeAndTemperature);
      },
    });
  };

  const handleSizeAndTemperatureSelection = (item) => {
    Swal.fire({
      title: `Choose size and temperature for ${item.name}`,
      html: `
        <div class="form-group">
          <label>Select Size:</label>
          <div>
            <input type="radio" id="sizeMedium" name="size" value="Medium" checked />
            <label for="sizeMedium">Medium</label>
          </div>
          <div>
            <input type="radio" id="sizeLarge" name="size" value="Large" />
            <label for="sizeLarge">Large</label>
          </div>
        </div>
        <div class="form-group mt-3">
          <label>Select Temperature:</label>
          <div>
            <input type="radio" id="temperatureHot" name="temperature" value="Hot" checked />
            <label for="temperatureHot">Hot</label>
          </div>
          <div>
            <input type="radio" id="temperatureIced" name="temperature" value="Iced" />
            <label for="temperatureIced">Iced</label>
          </div>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: 'Add to Cart',
      customClass: {
        confirmButton: 'swal-btn-confirm',
        cancelButton: 'swal-btn-cancel',
        popup: 'swal-popup',
      },
      preConfirm: () => {
        const size = document.querySelector('input[name="size"]:checked').value;
        const temperature = document.querySelector('input[name="temperature"]:checked').value;

        const itemWithSizeAndTemperature = {
          ...item,
          size: size,
          temperature: temperature,
          price: item.price[temperature][size],
        };
        addToCart(itemWithSizeAndTemperature);
      },
    });
  };

  return (
    <section className="menu py-5">
      <div className="container">
        <h2 className="text-center mb-5">Our Coffee Menu</h2>
        <div className="row">
          {menuItems.map((item, index) => (
            <div key={index} className="col-md-3 mb-4">
              <div
                className="menu-box shadow-lg p-3 rounded"
                onClick={() => handleCardClick(item)}
                style={{ cursor: 'pointer', backgroundColor: '#fff', transition: 'transform 0.3s ease' }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="img-fluid rounded mb-3"
                  style={{ maxHeight: '200px', objectFit: 'cover' }}
                />
                <h4 className="text-center">{item.name}</h4>
                <p className="text-muted text-center" style={{ fontSize: '0.9rem' }}>{item.description}</p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                <button
                  className="btn btn-buy btn-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSizeAndTemperatureSelection(item);
                  }}
                  style={{ width: '100%' }}
                >
                  Buy
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu1;