import React from "react";

// Definice typů pro props
interface ClientCardProps {
  image: string;
  description: string;
}

export const ClientCard: React.FC<ClientCardProps> = ({
  image,
  description,
}) => {
  return (
    <div className="p-4">
      <img src={image} alt="Klient" className="w-auto h-96 object-center " />

      <p className="text-center mt-2">{description}</p>
    </div>
  );
};
