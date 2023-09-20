import MenuItem from "./MenuItem.jsx";

const Menu = ({ items }) => {
	return (
		<section className="menu-container">
			{items.map((item) => (
				<MenuItem key={item.id} {...item} />
			))}
		</section>
	);
};
export default Menu;
