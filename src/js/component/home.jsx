import React, { useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [active, setActive] = useState("")

	return (
		<div className="container vh-100 p-5">
			<div className="top bg-black m-auto d-flex flex-column align-items-center justify-content-center"></div>
			<div className="box w-25 h-50 bg-black m-auto d-flex flex-column align-items-center justify-content-center">
				<div className={`light red ${active === "red" && "active"}`}
					onClick={() => setActive("red")}
				></div>
				<div className={`light yellow ${active === "yellow" && "active"}`}
					onClick={() => setActive("yellow")}
				></div>
				<div className={`light green ${active === "green" && "active"}`}
					onClick={() => setActive("green")}
				></div>
			</div>

		</div>
	);
};

export default Home;
