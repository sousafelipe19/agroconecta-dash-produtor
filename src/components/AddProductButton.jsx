
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const AddProductButton = ({ className }) => {
  return (
    <Button 
      className={cn("bg-agrogreen hover:bg-agrogreen-dark text-agrocream font-medium", className)}
      size="lg"
    >
      Adicionar Novo Produto
    </Button>
  );
};

export default AddProductButton;
