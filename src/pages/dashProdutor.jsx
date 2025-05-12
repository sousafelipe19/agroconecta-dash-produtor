
import React from 'react';
import Sidebar from '@/components/Sidebar';
import DashboardHeader from '@/components/DashboardHeader';
import SummaryCard from '@/components/SummaryCard';
import SalesChart from '@/components/SalesChart';
import OrdersTable from '@/components/OrdersTable';
import AddProductButton from '@/components/AddProductButton';
import { Button } from "@/components/ui/button";
import { ShoppingCart, Package, BarChart2 } from 'lucide-react';

const mockSalesData = [
  { name: 'Janeiro', value: 4000 },
  { name: 'Fevereiro', value: 3000 },
  { name: 'Março', value: 5000 },
  { name: 'Abril', value: 2780 },
  { name: 'Maio', value: 1890 },
  { name: 'Junho', value: 2390 },
];

const mockOrders = [
  { id: '#12345', customer: 'João Silva', product: 'Milho Orgânico (5kg)', date: '12/05/2025', amount: 'R$ 125,00', status: 'delivered' },
  { id: '#12346', customer: 'Maria Santos', product: 'Alface Americana (10 unid)', date: '11/05/2025', amount: 'R$ 50,00', status: 'paid' },
  { id: '#12347', customer: 'Pedro Oliveira', product: 'Tomate Cereja (2kg)', date: '10/05/2025', amount: 'R$ 32,00', status: 'pending' },
  { id: '#12348', customer: 'Ana Lima', product: 'Batata Doce (3kg)', date: '09/05/2025', amount: 'R$ 28,50', status: 'delivered' },
  { id: '#12349', customer: 'Carlos Mendes', product: 'Laranja Pera (10kg)', date: '08/05/2025', amount: 'R$ 45,00', status: 'paid' },
];

const Index = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 p-8 overflow-auto">
        <DashboardHeader name="José" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <SummaryCard 
            title="Total de Vendas" 
            value="R$ 4.385,00" 
            description="Mês atual" 
            icon={<ShoppingCart className="h-6 w-6 text-agrogreen" />} 
            trend="up"
            trendValue="15%"
          />
          
          <SummaryCard 
            title="Produtos Ativos" 
            value="24" 
            description="Em estoque" 
            icon={<Package className="h-6 w-6 text-agroblue" />} 
          />
          
          <SummaryCard 
            title="Pedidos Pendentes" 
            value="8" 
            description="Aguardando entrega" 
            icon={<ShoppingCart className="h-6 w-6 text-agrobrown" />} 
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <SalesChart data={mockSalesData} />
          
          <div className="flex flex-col justify-center items-center bg-gradient-to-br from-agrogreen to-agrogreen-dark text-white p-6 rounded-lg">
            <BarChart2 className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-bold mb-2">Ranking de Produtos</h3>
            <p className="text-center mb-4">Veja os seus produtos mais vendidos e otimize seu estoque!</p>
            <Button variant="outline" className="text-agrogreen bg-white hover:bg-gray-100">
              Ver Relatório Completo
            </Button>
          </div>
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold">Gerenciamento de Pedidos</h2>
          <AddProductButton />
        </div>
        
        <OrdersTable orders={mockOrders} />
      </main>
    </div>
  );
};

export default dashProdutor;
