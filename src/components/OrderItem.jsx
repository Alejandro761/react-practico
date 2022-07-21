import React from 'react';
import '../styles/OrderItem.scss';
import close from '@icons/icon_close.png'

const OrderItem = ({product: {title, price, images}}) => {
	return (
		<div className="OrderItem">
			<figure>
				<img src={images[0]} alt="bike" />
			</figure>
			<p>{title}</p>
			<p>{price}</p>
			<img src={close} alt="close" />
		</div>
	);
}

export {OrderItem};
