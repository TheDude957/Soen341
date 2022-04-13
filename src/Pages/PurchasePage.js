import * as React from "react";
import { useState } from "react";
import { TextField, Paper, MenuItem, Button, Container } from "@mui/material";
import "../CSS/PurchasePage.css";
import SendIcon from "@mui/icons-material/Send";
import "../firebaseService.js";

const provinces = [
	{ label: "Alberta", value: "AB" },
	{ label: "British Columbia", value: "BC" },
	{ label: "Manitoba", value: "MB" },
	{ label: "New Brunswick", value: "NB" },
	{ label: "Newfoundland and Labrador", value: "NL" },
	{ label: "Nova Scotia", value: "NS" },
	{ label: "Ontario", value: "ON" },
	{ label: "Prince Edward Island", value: "PE" },
	{ label: "Quebec", value: "QC" },
	{ label: "Saskatchewan", value: "SK" },
];

export default function FormPropsTextFields() {
	const [email, setEmail] = useState("");
	const [firstname, setFirstName] = useState("");
	const [lastname, setLastName] = useState("");
	const [phonenumber, setPhoneNumber] = useState("");
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [province, setProvince] = useState("");
	const [postalcode, setPostalCode] = useState("");
	const [cardname, setCardName] = useState("");
	const [cardnumber, setCardNumber] = useState("");
	const [expdate, setExpDate] = useState("");
	const [cvc, setCVC] = useState("");

	const [emailError, setEmailError] = useState(false);
	const [firstError, setFirstNameError] = useState(false);
	const [lastError, setLastNameError] = useState(false);
	const [phoneError, setPhoneNumberError] = useState(false);
	const [addError, setAddressError] = useState(false);
	const [cityError, setCityError] = useState(false);
	const [provError, setProvinceError] = useState(false);
	const [postalError, setPostalCodeError] = useState(false);
	const [cardnameError, setCardNameError] = useState(false);
	const [cardnumberError, setCardNumberError] = useState(false);
	const [expError, setExpDateError] = useState(false);
	const [cvcError, setCVCError] = useState(false);

	const handleCheckout = (e) => {
		if (email === "" || stringContainsNumber(email)) {
			setEmailError(true);
		}
		if (firstname === "" || stringContainsNumber(firstname)) {
			setFirstNameError(true);
		}
		if (lastname === "" || stringContainsNumber(lastname)) {
			setLastNameError(true);
		}
		if (phonenumber === "" || !stringContainsNumber(phonenumber)) {
			setPhoneNumberError(true);
		}
		if (address === "") {
			setAddressError(true);
		}
		if (city === "" || stringContainsNumber(city)) {
			setCityError(true);
		}
		if (province === "") {
			setProvinceError(true);
		}
		if (postalcode === "") {
			setPostalCodeError(true);
		}
		if (cardname === "" || stringContainsNumber(cardname)) {
			setCardNameError(true);
		}
		if (cardnumber === "" || !stringContainsNumber(cardnumber)) {
			setCardNumberError(true);
		}
		if (expdate === "") {
			setExpDateError(true);
		}
		if (cvc === "" || !stringContainsNumber(cvc)) {
			setCVCError(true);
		}
		e.preventDefault();
	};

	function stringContainsNumber(_string) {
		return /\d/.test(_string);
	}

	function sendData() {
    
  }

	return (
		<Container className="parent">
			<Paper className="div1">Checkout:</Paper>
			<Paper className="div2">
				Contact Information:
				<div></div>
				<TextField
					margin="normal"
					required
					label="Email Address"
					placeholder="Email Address"
					onChange={(email) => setEmail(email.target.value)}
					onClick={() => {
						setEmailError(false);
					}}
					value={email}
					error={emailError}
					helperText={emailError ? "Please enter a valid email address" : ""}
					style={{
						paddingBottom: 10,
						paddingRight: 10,
						width: "50%",
					}}
				/>
			</Paper>
			<Paper className="div3">
				Shipping Address:
				<div></div>
				<TextField
					margin="normal"
					required
					label="First Name"
					placeholder="First Name"
					onChange={(fName) => setFirstName(fName.target.value)}
					onClick={() => {
						setFirstNameError(false);
					}}
					value={firstname}
					error={firstError}
					helperText={firstError ? "Please enter your first name" : ""}
					style={{
						paddingBottom: 10,
						paddingRight: 10,
						width: "50%",
					}}
				/>
				<TextField
					margin="normal"
					required
					label="Last Name"
					placeholder="Last Name"
					onChange={(lName) => setLastName(lName.target.value)}
					onClick={() => {
						setLastNameError(false);
					}}
					value={lastname}
					error={lastError}
					helperText={lastError ? "Please enter your last name" : ""}
					style={{
						paddingBottom: 10,
						paddingRight: 10,
						width: "50%",
					}}
				/>
				<TextField
					margin="normal"
					required
					label="Phone Number"
					placeholder="Phone Number"
					onChange={(pNumber) => setPhoneNumber(pNumber.target.value)}
					onClick={() => {
						setPhoneNumberError(false);
					}}
					value={phonenumber}
					error={phoneError}
					helperText={phoneError ? "Please enter a valid phone number" : ""}
					style={{
						paddingBottom: 10,
						paddingRight: 10,
						width: "50%",
					}}
				/>
				<div></div>
				<TextField
					margin="normal"
					required
					fullWidth
					label="Address"
					onChange={(add) => setAddress(add.target.value)}
					onClick={() => {
						setAddressError(false);
					}}
					value={address}
					error={addError}
					helperText={addError ? "Please enter your shipping address" : ""}
					style={{
						paddingBottom: 10,
						paddingRight: 10,
						width: "50%",
					}}
				/>
				<TextField
					margin="normal"
					required
					label="City"
					onChange={(c) => setCity(c.target.value)}
					onClick={() => {
						setCityError(false);
					}}
					value={city}
					error={cityError}
					helperText={cityError ? "Please enter your city" : ""}
					style={{
						paddingBottom: 10,
						paddingRight: 10,
						width: "50%",
					}}
				/>
				<TextField
					select
					margin="normal"
					required
					label="Province"
					onChange={(prov) => setProvince(prov.target.value)}
					onClick={() => {
						setProvinceError(false);
					}}
					value={province}
					error={provError}
					helperText={provError ? "Please select your province" : ""}
					style={{
						paddingBottom: 10,
						paddingRight: 10,
						width: "50%",
					}}>
					{provinces.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</TextField>
				<TextField
					margin="normal"
					required
					label="Postal Code"
					onChange={(postal) => setPostalCode(postal.target.value)}
					onClick={() => {
						setPostalCodeError(false);
					}}
					value={postalcode}
					error={postalError}
					helperText={cityError ? "Please enter your postal code" : ""}
				/>
			</Paper>
			<div className="div4">
				Payment Information:
				<div></div>
				<TextField
					margin="normal"
					fullWidth
					required
					label="Full Name on Card"
					onChange={(cardname) => setCardName(cardname.target.value)}
					onClick={() => {
						setCardNameError(false);
					}}
					value={cardname}
					error={cardnameError}
					helperText={cardnameError ? "Please enter your credit card name" : ""}
					style={{
						paddingBottom: 10,
						paddingRight: 10,
						width: "50%",
					}}
				/>
				<TextField
					margin="normal"
					required
					fullWidth
					label="Card Number"
					onChange={(cardnumber) => setCardNumber(cardnumber.target.value)}
					onClick={() => {
						setCardNumberError(false);
					}}
					value={cardnumber}
					error={cardnumberError}
					helperText={
						cardnumberError ? "Please enter your credit card number" : ""
					}
					style={{
						paddingBottom: 10,
						paddingRight: 10,
						width: "50%",
					}}
				/>
				<TextField
					margin="normal"
					required
					label="Expiration date"
					onChange={(cardexp) => setExpDate(cardexp.target.value)}
					onClick={() => {
						setExpDateError(false);
					}}
					value={expdate}
					error={expError}
					helperText={
						expError
							? "Please enter your credit card expiration date as: MM/YYYY"
							: ""
					}
					style={{
						paddingBottom: 10,
						paddingRight: 10,
						width: "50%",
					}}
				/>
				<TextField
					margin="normal"
					required
					label="CVC/CVV"
					onChange={(cvc) => setCVC(cvc.target.value)}
					onClick={() => {
						setCVCError(false);
					}}
					value={cvc}
					error={cvcError}
					helperText={
						cvcError ? "Please enter your credit card CVC/CVV number" : ""
					}
					style={{
						paddingBottom: 10,
						paddingRight: 10,
						width: "50%",
					}}
				/>
			</div>
			<div className="div5">
				Review Order:
				<div></div>
				Order:
				<div></div>
				<Button
					className="button"
					onClick={handleCheckout}
					variant="contained"
					endIcon={<SendIcon />}>
					Confirm Order
				</Button>
			</div>
		</Container>
	);
}
