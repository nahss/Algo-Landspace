import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";
import { stringToMicroAlgos } from "../../utils/conversions";

const AddProduct = ({ createProduct }) => {
	const [name, setName] = useState("");
	const [image, setImage] = useState("");
	const [description, setDescription] = useState("");
	const [location, setLocation] = useState("");
	const [startingPrice, setStartingPrice] = useState(0);
	const [instantPrice, setInstantPrice] = useState(0);
	const [endAt, setEndAt] = useState(0);

	const isFormFilled = useCallback(() => {
		return name && image && description && price > 0;
	}, [
		name,
		image,
		description,
		location,
		startingPrice,
		instantPrice,
		endAt,
	]);

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button
				onClick={handleShow}
				variant="dark"
				className="rounded-pill px-0"
				style={{ width: "38px" }}
			>
				<i className="bi bi-plus"></i>
			</Button>
			<Modal show={show} onHide={handleClose} centered>
				<Modal.Header closeButton>
					<Modal.Title>New Land</Modal.Title>
				</Modal.Header>
				<Form>
					<Modal.Body>
						<FloatingLabel
							controlId="inputName"
							label="Land/Home name"
							className="mb-3"
						>
							<Form.Control
								type="text"
								onChange={(e) => {
									setName(e.target.value);
								}}
								placeholder="Enter name of land/home"
							/>
						</FloatingLabel>
						<FloatingLabel
							controlId="inputUrl"
							label="Image URL"
							className="mb-3"
						>
							<Form.Control
								type="text"
								placeholder="Image URL"
								onChange={(e) => {
									setImage(e.target.value);
								}}
							/>
						</FloatingLabel>
						<FloatingLabel
							controlId="inputDescription"
							label="Description"
							className="mb-3"
						>
							<Form.Control
								as="textarea"
								placeholder="description"
								style={{ height: "80px" }}
								onChange={(e) => {
									setDescription(e.target.value);
								}}
							/>
						</FloatingLabel>
						<FloatingLabel
							controlId="inputLocation"
							label="Location"
							className="mb-3"
						>
							<Form.Control
								type="text"
								placeholder="Location"
								onChange={(e) => {
									setLocation(e.target.value);
								}}
							/>
						</FloatingLabel>
						<FloatingLabel
							controlId="inputInstantPrice"
							label="Instant Price"
							className="mb-3"
						>
							<Form.Control
								type="text"
								placeholder="Instant price"
								onChange={(e) => {
									setInstantPrice(
										stringToMicroAlgos(e.target.value)
									);
								}}
							/>
						</FloatingLabel>
						<FloatingLabel
							controlId="inputStartingPrice"
							label="Starting Price"
							className="mb-3"
						>
							<Form.Control
								type="text"
								placeholder="Starting price"
								onChange={(e) => {
									setStartingPrice(
										stringToMicroAlgos(e.target.value)
									);
								}}
							/>
						</FloatingLabel>
					</Modal.Body>
				</Form>
				<Modal.Footer>
					<Button variant="outline-secondary" onClick={handleClose}>
						Close
					</Button>
					<Button
						variant="dark"
						disabled={!isFormFilled()}
						onClick={() => {
							createProduct({
                                name,
                                image,
                                description,
                                startingPrice,
                                instantPrice
                            })
							handleClose();
						}}
					>
						Save Land
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

AddProduct.propTypes = {
	createProduct: PropTypes.func.isRequired,
};

export default AddProduct;
