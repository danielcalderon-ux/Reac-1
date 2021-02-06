import React from "react";

//include images into your bundle

import { Navbar } from "./navbar.js";
import { Cards } from "./cards.js";
import { Jumbotron } from "./jumbotron.js";
import { Footer } from "./footer.js";

//create your first component
export function Home() {
	return (
		<div className="container-fluid">
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row">
					<Cards /> <Cards /> <Cards />
				</div>
			</div>
			<Footer />
		</div>
	);
}
