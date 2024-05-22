import TotalOrder from "../components/TotalOrder";
import CartList from "../components/CartList";

const Cart = () => {
  return (
    <>
      <main className="container px-5 py-16 lg:pb-28 lg:pt-20">
        <div className="container py-16 lg:pb-28 lg:pt-20">
          <div className="mb-12 sm:mb-16">
            <h2 className="block text-2xl font-semibold sm:text-3xl lg:text-4xl">
              Shopping Cart
            </h2>
            <div className="block mt-3 sm:mt-5 text-xs sm:text-sm font-medium text-[#334155]">
              <a href="/">Homepage</a>
              <span className="text-xs mx-1 sm:mx-1.5">/</span>
              <a href="/collection">Clothing Categories</a>
              <span className="text-xs mx-1 sm:mx-1.5">/</span>
              <span className="underline">Shopping Cart</span>
            </div>
          </div>
          <hr className="my-10 border-slate-200 dark:border-slate-700 xl:my-12" />
          <div className="flex flex-col lg:flex-row">
            <CartList />
            <div className="flex-shrink-0 my-10 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-700 lg:my-0 lg:mx-10 xl:mx-16 2xl:mx-20"></div>
            <TotalOrder />
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;
