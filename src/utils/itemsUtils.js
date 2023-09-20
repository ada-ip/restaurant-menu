export const getCategories = (items) =>
	items.reduce(
		(listCategories, item) => {
			if (!listCategories.includes(item.category)) {
				listCategories.push(item.category);
			}
			return listCategories;
		},
		["all"]
	);

export const filterItems = (items, category) => {
	if (category === "all") return items;
	return items.filter((item) => item.category === category);
};
