import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer/Footer";

export const meta = () => {
	return [{ title: 'BuildMyBody|Replacement Policy' }];
}
function ReturnPolicy() {
	return (
		<>
			<Navbar />
			<div className="container py-4">
				<h1 className="py-4">Return & Replacement Policy</h1>
				<div className="">
					<h3>
						<strong>7-days replacement policy</strong>
					</h3>
					<p>
						We offer you complete peace of mind while ordering at BuildMyBody -
						you can return all items <strong>within 7 days of receipt</strong>{" "}
						of goods. Please ensure however that the product is unused and the
						tags, boxes and other packaging is intact. If you are not satisfied
						with what you have bought, we'll gladly take it back within 7 days
						from the date of delivery. If you have paid by card then we will
						reverse the payment. In case of Cash on Delivery or Bank Deposits as
						modes of payment, we will issue a cheque in the registered name of
						the customer.
					</p>
					<p>&nbsp;</p>
					<h3>
						<strong>Wrong item if received:</strong>
					</h3>

					<p>
						We apologize if you have received the wrong item by mistake. This is
						not common and we want to resolve this as quickly as possible for
						you. To receive a refund or a replacement, you must return the item
						in the same condition you received it and within 7 days from the day
						on which you received the item. Product will be only replaced if it
						follows the following conditions:
						<br />
						1) Product should be sealed. We will not accept the return product
						if it finds unpacked or unsealed in any condition.
						<br />
						2) Our 7 days Return Policy period starts on the day when you
						receive the product. In case, you are not satisfied with the
						product, you need to inform us at given email address:
						care@buildmybody.in within 7 days only, otherwise order will be not
						replaced or returned.
						<br />
						3) We will only guarantee with the replacement of the product. Only
						in extreme circumstances, your product may be returned with refunds.
						<br />
						<br />
						For further details, feel free to contact us.
					</p>
				</div>
			</div>
			<Footer />
		</>
	);
}
export default ReturnPolicy;
