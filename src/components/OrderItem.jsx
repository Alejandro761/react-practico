import React, { useContext } from 'react';
import '../styles/OrderItem.scss';
import close from '@icons/icon_close.png'
import { AppContext } from '../context/AppContext';

const OrderItem = ({product, product: {title, price, images}}) => {
	const {removeFromCart} = useContext(AppContext);

	const handleRemove = product => {
		removeFromCart(product)
	}
	
	return (
		<div className="OrderItem">
			<figure>
				<img src={images[0]} alt="bike" />
			</figure>
			<p>{title}</p>
			<p>{price}</p>
			<img src={close} alt="close" onClick={() => handleRemove(product)} />
		</div>
	);
}

export {OrderItem};
