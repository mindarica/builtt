import React from 'react';
import Logo from '../../assets/logo.svg';
import { useSelector } from 'react-redux';
import { countCartSelector, countProductSelector } from '../../redux/selectors/product/productSelector';
import { useNavigate } from 'react-router-dom';
import { cartURL, productsURL } from '../../constants/pagesRoute';

export const Header = () => {
    const countCart = useSelector(countCartSelector);
    const countProduct = useSelector(countProductSelector);
    const navigate = useNavigate();

    return (
        <header className="bg-gray-vol1 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <div onClick={() => navigate(productsURL)} className={`flex items-center flex-col cursor-pointer`}>
                    <img src={Logo} alt="Logo" className="h-8 w-auto mr-2" />
                    <span className="text-xxm text-gray-500">powered by Degordian</span>
                </div>
                <div class="group relative w-max">
                    <button
                        disabled={countProduct !== countCart}
                        onClick={() => navigate(cartURL)}
                        className={`relative h-6 w-6 bg-cart-img bg-cover ${countProduct !== countCart ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                        <span className="text-xsm">{countCart}</span>
                    </button>
                    {countProduct !== countCart && <span
                        className="pointer-events-none absolute top-8 -left-14 w-max opacity-0 transition-opacity group-hover:opacity-100 bg-gray-300 p-1 rounded-md"
                    >
                        Azurirajte vasu korpu
                    </span>}
                </div>
            </div>
        </header>
    )
} 
