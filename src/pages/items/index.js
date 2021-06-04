import { Link } from 'react-router-dom';

import './style.css';

import { useSelector, useDispatch } from 'react-redux';

import { cartActions } from '../../store/itemReducer';
import styles from '../../components/UI/Custom.module.css';


const Items = () => {
	const items = useSelector((state) => state.items);

	const cart = useSelector((state) => state.cart);

	const dispatch = useDispatch();

	const addToCardHandler = (event) => {
		let oldCartItems = cart.items.slice();

		let item = items.find((i) => i.id.toString() === event.target.getAttribute('itemID'));

		let existingItem = { ...oldCartItems.find((i) => i.id === item.id) };

		let totalQuantity = cart.totalQuantity;

		let totalAmount = cart.totalAmount;

		if (existingItem.hasOwnProperty('id')) {
			existingItem.quantity++;

			existingItem.totalPrice += item.newPrice;

			const itemIndex = oldCartItems.findIndex((item) => item.id === existingItem.id);

			oldCartItems[itemIndex] = existingItem;

			totalAmount = totalAmount + item.newPrice;
		} else {
			const newCartItem = {
				id: item.id,
				name: item.name,
				quantity: 1,
				totalPrice: item.newPrice,
				price: item.newPrice
			};

			oldCartItems.push(newCartItem);

			totalQuantity = cart.totalQuantity + 1;

			totalAmount = totalAmount + item.newPrice;
		}

		const newCart = { items: oldCartItems, totalQuantity: totalQuantity, totalAmount: totalAmount };

		dispatch(cartActions.replaceCart(newCart));
	};

	const results = items.map((item) => {
		return (
			<div className="col-md-3 col-sm-6" key={item.id}>
				<div className="product-grid">
					<div className="product-image">
						<Link to="#">
							<img className={`pic-1 ${styles['item-image']}`} src={item.imageUrl} alt={item.id} />
							<img className="pic-2" src={item.imageUrl} alt={item.id} />
						</Link>
						<span className="product-new-label">Sale</span>
						<span className="product-discount-label">50%</span>
					</div>

					<div className="product-content">
						<h3 className="title">
							<a href="/items">{item.name}</a>
						</h3>
						<div className="price">
							$ {item.newPrice}
							<span>$ {item.oldPrice}</span>
						</div>
						<button className={styles['cart-button']} itemID={item.id} onClick={addToCardHandler}>
							+ Add To Cart
						</button>
					</div>
				</div>
			</div>
		);
	});

	return (
		<>
			<div className="container">
				<h3 className="h3">Items </h3>
				<div className="row">{results}</div>
			</div>
			<hr />
		</>
	);
};

export default Items;
