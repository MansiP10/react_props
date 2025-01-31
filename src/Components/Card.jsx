import React from 'react';

function Card({ card_data }) {
  return (
    <div className="grid grid-cols-3 gap-20 m-20">
      {card_data.map((element, index) => (
        <div
          key={index}
          className="relative p-[4px] animate-border bg-gradient-to-r from-red-500 via-purple-500 to-green-500"
        >
          <div className="bg-black text-gray-100 overflow-hidden p-5">
            <img
              src={element.card_img}
              alt={`Card ${index + 1}`}
              className="object-cover object-center w-full h-72"
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2 text-center">
                <h4 className="text-2xl font-semibold tracking-wide">
                  Card {index + 1}
                </h4>
                <p className="text-gray-400">
                  This is card {index + 1} description
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
