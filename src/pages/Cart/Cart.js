import React from "react"
import { Header } from "../../components/Header/Header"
import { useSelector } from "react-redux"
import { selectCartItems } from "../../redux/selectors/product/productSelector"
import { Counter } from "../../components/Counter/Counter"
import { useChangeProductAndCartData } from "../../hooks/useChangeProductAndCartData"

export const Cart = () => {
    const products = useSelector(selectCartItems);
    const { removeCart } = useChangeProductAndCartData();

    return (
        <>
            <Header />
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-semibold mb-20 mt-20">Tvoja korpa</h1>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-8/12 mr-20">
                        {products.carts.map((product) => (
                            <div className="flex mb-5 pb-5 border-b-2" key={product.id}>
                                <div>
                                    <img className="h-143 w-143 mr-4" src={`${process.env.PUBLIC_URL}${product.image}`} alt={product.name} />
                                </div>
                                <div className="flex flex-col grow">
                                    <div className="grow">
                                        <p className="text-lg font-bold mb-2">{product.name}</p>
                                        <p className="text-sm mb-2">{product.quantity}</p>
                                        <p className="text-xs text-slate-400">{product.priceBy}</p>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <div className="border border-black rounded-full mr-12">
                                            <Counter product={product} isChart />
                                        </div>
                                        <div className="flex">
                                            <button
                                                onClick={() => removeCart(product.id)}
                                                type="button"
                                                className="font-medium border-b border-black"
                                            >
                                                Ukloni
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <p className="text-2xl">{product.price}<sup className="text-sm">RSD</sup></p>
                                    {product.prevPrice && <p className="text-red-500 line-through">{product.prevPrice}<sup className="text-xs">RSD</sup></p>}
                                </div>
                            </div>
                        ))}
                        {!products.carts.length && <p className="text-lg font-bold mb-2">Korpa je prazna</p>}
                    </div>
                    <div className="md:w-4/12">
                        <div className="bg-gray-vol1 rounded-l shadow-md p-6">
                            <h2 className="text-lg font-semibold mb-4">Tvoja narudžbina</h2>
                            <div className="flex justify-between mb-2">
                                <span>Ukupno</span>
                                <span>{products.sumPrice}<sup>RSD</sup></span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Ušteda</span>
                                <span>-{products.sumPrevPrice - products.sumPrice}<sup>RSD</sup></span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Isporuka Daily Express*</span>
                                <span>Besplatna</span>
                            </div>
                            <hr className="my-2" />
                            <div className="flex justify-between mb-2">
                                <span className="font-semibold">Ukupno za uplatu</span>
                                <span className="font-semibold">{products.sumPrice}<sup>RSD</sup></span>
                            </div>
                            <div className="flex justify-between mb-2">
                                Cena je sa uključenim PDV-om
                            </div>
                            <button className="bg-black text-white py-2 px-4 rounded-3xl mt-4 w-full mb-20">Prijavi se za brže plaćanje</button>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}