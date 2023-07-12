import React from "react";
import { CartProvider } from "./context/CartProvider";
import { CategoriesProvider } from "./context/CategoriesProvider";
import { DrinksProvider } from "./context/DrinksProvider";
import MainLayout from "./layout";
import AppRoutes from "./routes";

function App() {
  return (
    <CartProvider>
      <CategoriesProvider>
        <DrinksProvider>
          <MainLayout>
            <AppRoutes />
          </MainLayout>
        </DrinksProvider>
      </CategoriesProvider>
    </CartProvider>
  );
}

export default App;
