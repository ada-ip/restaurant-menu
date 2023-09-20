const MenuItem = ({ title, price, desc, img }) => {
	return (
		<article className="menu-item">
			<div className="menu-item-details">
				<div className="item-details-header">
					<h3 className="item-details-title">{title}</h3>
					<span className="tag item-details-price">{price}€</span>
				</div>
				<p className="item-details-desc">{desc}</p>
			</div>
			<img className="menu-item-img" src={img} alt={title}></img>
		</article>
	);
};

export default MenuItem;
