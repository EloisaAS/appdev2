import React, { useState } from "react";
import "../Reservation.css";
import "bootstrap/dist/css/bootstrap.min.css";

const BreakfastReservation = () => {
  const [reservationDetails, setReservationDetails] = useState({
    fullName: "",
    emailAddress: "",
    contactNumber: "",
    reservationDate: "",
    reservationTime: "",
    numberOfGuests: "",
    seatingPreference: "",
    specialRequests: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservationDetails({
      ...reservationDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedDate = new Date(reservationDetails.reservationDate);
    const selectedDay = selectedDate.getDay();

    if (selectedDay !== 6 && selectedDay !== 0) {
      setErrorMessage("Reservations are only allowed on Saturdays and Sundays.");
      return;
    }

    setErrorMessage("");
    setShowConfirmation(true);

    // Clear the form
    setReservationDetails({
      fullName: "",
      emailAddress: "",
      contactNumber: "",
      reservationDate: "",
      reservationTime: "",
      numberOfGuests: "",
      seatingPreference: "",
      specialRequests: "",
    });
  };

  return (
    <div className="reservation-header">
        <h2>Book a Table</h2>
    <div className="reservation-container">
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form onSubmit={handleSubmit} className="reservation-form">
        <div className="form-row">
          <input
            type="text"
            name="fullName"
            placeholder="Your Full Name"
            value={reservationDetails.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="emailAddress"
            placeholder="Your Email Address"
            value={reservationDetails.emailAddress}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <input
            type="tel"
            name="contactNumber"
            placeholder="Your Contact Number"
            value={reservationDetails.contactNumber}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="reservationDate"
            placeholder="Reservation Date"
            value={reservationDetails.reservationDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <input
            type="time"
            name="reservationTime"
            placeholder="Reservation Time"
            value={reservationDetails.reservationTime}
            onChange={handleChange}
            min="06:00"
            max="10:00"
            required
          />
          <input
            type="number"
            name="numberOfGuests"
            placeholder="Number of Guests"
            value={reservationDetails.numberOfGuests}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <select
            name="seatingPreference"
            value={reservationDetails.seatingPreference}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select Seating Preference
            </option>
            <option value="Indoor">Indoor</option>
            <option value="Outdoor">Outdoor</option>
          </select>
        </div>
        <textarea
          name="specialRequests"
          placeholder="Special Requests (Optional)"
          value={reservationDetails.specialRequests}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="reserve-button">
          Book a Table
        </button>
      </form>
      {showConfirmation && (
        <div className="confirmation">
          <h3>Reservation Confirmed!</h3>
          <p>
            Thank you, {reservationDetails.fullName}! Your reservation for{" "}
            {reservationDetails.numberOfGuests} guest(s) has been confirmed for{" "}
            {reservationDetails.reservationDate} at{" "}
            {reservationDetails.reservationTime}.
          </p>
          <button onClick={() => setShowConfirmation(false)}>Close</button>
        </div>
      )}
    </div>
    </div>
  );
};

export default BreakfastReservation;
