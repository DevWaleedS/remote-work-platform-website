import React from "react";

import { AllPages } from "./Pages";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
	return (
		<>
			<HelmetProvider>
				<div className='app'>
					<AllPages />
				</div>
			</HelmetProvider>
		</>
	);
};

export default App;
