import React, { useEffect } from "react";

export default function Alert({ message, setMessage }) {
	const { msgClass, msg } = message;

	useEffect(() => {
		setTimeout(() => {
			setMessage(false);
		}, 7000);
	}, []);

	return (
		<div className="container mt-3">
			<div className="row">
				<div className="col-md-12">
					<div className="container mt-3">
						<div className={`alert text-center ${msgClass}`} role="alert">
							<strong>{msg}</strong>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
