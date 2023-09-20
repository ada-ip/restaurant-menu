import Title from "./components/Title.jsx";
import TagsList from "./components/TagsList.jsx";
import Menu from "./components/Menu.jsx";

import menu from "./data";
import { useState } from "react";

function App() {
	const [items, setItems] = useState(menu);

	return (
		<main>
			<Title />
			<TagsList items={menu} setItems={setItems} />
			<Menu items={items} />
		</main>
	);
}

export default App;
