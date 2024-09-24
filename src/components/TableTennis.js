import React, { useState } from 'react';

const TableTennis = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);

  const timeSlots = ["4:00 PM - 5:00 PM", "5:00 PM - 6:00 PM", "6:00 PM - 7:00 PM", "7:00 PM - 8:00 PM"];

  const handleSlotSelection = (slot) => {
    setSelectedSlot(slot);
    alert(`You have booked the ${slot} slot for table tennis.`);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center table-tennis-background">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center p-5">
        <h1 className="text-white text-4xl font-bold mb-4">Table Tennis - Rules & Slot Booking</h1>
        <h2 className="text-white text-2xl mb-2">Rules & Regulations</h2>
        <ul className="text-white mb-4">
          <li>Use official table tennis shoes.</li>
          <li>Booking allows 1 hour of playtime.</li>
          <li>No food or drinks allowed inside.</li>
          <li>Cancel booking 1 hour in advance if needed.</li>
        </ul>

        <h2 className="text-white text-2xl mb-2">Available Time Slots</h2>
        <div className="flex flex-col space-y-4">
          {timeSlots.map((slot, index) => (
            <button
              key={index}
              className={`bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300 ease-in-out ${selectedSlot === slot ? 'bg-blue-600' : 'hover:bg-blue-600'}`}
              onClick={() => handleSlotSelection(slot)}
            >
              {slot}
            </button>
          ))}
        </div>
        {selectedSlot && <p className="text-white mt-4">You have selected: {selectedSlot}</p>}
      </div>
    </div>
  );
}

export default TableTennis;
