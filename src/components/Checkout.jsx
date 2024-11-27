import React from "react";
import Swal from 'sweetalert2';
import 'animate.css';

function Checkout({ cart, clearCart }) {
  const handleCheckout = () => {
    if (cart.length === 0) {
      Swal.fire("Error", "Your cart is empty. Please add items before checking out.", "error");
      return;
    }

    Swal.fire({
      title: "Confirm Your Purchase",
      text: `You have ${cart.length} items in your cart. Do you want to complete your purchase?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Complete Purchase",
      cancelButtonText: "Cancel",
      showClass: {
        popup: `animate__animated animate__fadeInUp animate__faster`,
      },
      hideClass: {
        popup: `animate__animated animate__fadeOutDown animate__faster`,
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        // Prompt user for their name
        const { value: name } = await Swal.fire({
          title: 'Enter Your Name',
          input: 'text',
          inputLabel: 'Name',
          inputPlaceholder: 'Enter your name here',
          showCancelButton: true,
          confirmButtonText: 'Proceed',
        });

        if (name) {
          // Example user email
          const userEmail = "user@example.com"; // Replace with user input if needed

          // Prepare data for Web3Forms
          const formData = {
            access_key: "0f9f64b2-2128-4df4-b3a5-2f4dcce00b49", // Your Web3Forms access key
            subject: `New Order from ${name} at Ko-Co Cafe`,
            email: userEmail,
            name: name,
            message: `Order placed by ${name} with the following items:\n\n${cart
              .map(
                (item) =>
                  `${item.name} - Size: ${item.size} - Temperature: ${item.temperature} - Price: ${item.price}₮`
              )
              .join("\n")}\n\nThank you for your order!`,
          };

          try {
            // Send data to Web3Forms
            const response = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            });

            if (response.ok) {
              Swal.fire(
                "Success!",
                "Your order has been placed successfully. A confirmation email has been sent.",
                "success"
              );
              clearCart(); // Clear the cart
            } else {
              Swal.fire("Error", "Failed to send order confirmation email.", "error");
            }
          } catch (error) {
            console.error("Error sending email:", error);
            Swal.fire("Error", "An error occurred while processing your request.", "error");
          }
        }
      }
    });
  };

  return (
    <section className="checkout py-5">
      <div className="container">
        <h2>Checkout</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty. Add some items to the cart!</p>
        ) : (
          <div>
            <h4>Your Order:</h4>
            {cart.map((item, index) => (
              <div key={index} className="cart-item mb-4">
                <h5>{item.name}</h5>
                <p>Size: {item.size}</p>
                <p>Temperature: {item.temperature}</p>
                <p>Price: {item.price}₮</p>
              </div>
            ))}
            <div className="mt-4">
              <button className="btn btn-primary" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Checkout;