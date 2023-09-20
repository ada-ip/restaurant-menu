const TagsList = ({ categories }) => {
	return (
		<ul className="tags-list">
			<li className="tag tags-list-tag">All</li>
			{categories.map((category, index) => (
				<li className="tag tags-list-tag" key={`cat${index}`}>
					{category}
				</li>
			))}
		</ul>
	);
};
export default TagsList;
