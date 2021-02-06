import React from "react";

let imagen = "https://static.dw.com/image/15293959_4.jpg";

export function Cards() {
	return (
		<div className="card mx-2" style={{ width: "18rem" }}>
			<img src={imagen} className="card-img-top" alt="" />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the cards content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
}
