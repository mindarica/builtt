import { useSelector } from "react-redux";
import { productsSelector } from "../../redux/selectors/product/productSelector";
import { Product } from "../../components/Product/Product"
import { Header } from "../../components/Header/Header"
import { useChangeProductAndCartData } from "../../hooks/useChangeProductAndCartData";

export const Products = () => {
    const products = useSelector(productsSelector);
    const { selectItem, updateCart } = useChangeProductAndCartData();

    return (
        <>
            <Header />
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <div className="flex flex-row items-end">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Svi proizvodi</h2>
                        <p className="text-sm tracking-tight text-gray-400 ml-2">{products.length} proizvoda</p>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <Product
                                selectItem={selectItem}
                                updateCart={updateCart}
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};