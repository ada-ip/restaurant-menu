import { getCategories, filterItems } from "../utils/itemsUtils";

const TagsList = ({ items, setItems }) => {
	const categories = getCategories(items);

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
