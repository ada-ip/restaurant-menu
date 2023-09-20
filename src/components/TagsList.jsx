const TagsList = ({ items, setItems }) => {
	const categories = items.reduce(
		(listCategories, item) => {
			if (!listCategories.includes(item.category)) {
				listCategories.push(item.category);
			}
			return listCategories;
		},
		["all"]
	);

	const filterItems = (items, category) => {
		if (category === "all") return items;
		return items.filter((item) => item.category === category);
	};

	return (
		<ul className="tags-list">
			{categories.map((category, index) => (
				<li
					className="tag tags-list-tag"
					key={`cat${index}`}
					onClick={(e) => setItems(filterItems(items, e.target.textContent))}>
					{category}
				</li>
			))}
		</ul>
	);
};
export default TagsList;
