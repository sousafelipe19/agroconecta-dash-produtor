
import React from 'react';

const DashboardHeader = ({ name }) => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('pt-BR', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-agrogreen">Olá, {name}!</h1>
      <p className="text-agrogray capitalize">{formattedDate}</p>
    </div>
  );
};

export default DashboardHeader;
