import React, { useContext } from "react";
import '../styles/MyOrder.scss';
import arrow from '@icons/flechita.svg';
import { OrderItem } from "../components/OrderItem";
import { AppContext } from "../context/AppContext";

const MyOrder = () => {
	const {state: {cart}} = useContext(AppContext);

	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = cart.reduce(reducer, 0);
		return sum;
	}
	
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={arrow} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
                {cart.map(item => (
					<OrderItem product={item} key={`orderItem-${item.id}`} />
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export {MyOrder};