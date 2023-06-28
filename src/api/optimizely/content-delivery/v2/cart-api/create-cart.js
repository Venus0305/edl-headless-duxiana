import Optimizely from "../../../../../libs/optimizely";

/**
 * @description Creates a new cart as per provided model.
 * @source https://docs.developers.optimizely.com/content-cloud/v1.5.0-content-delivery-api/reference/cartapi_post
 * @return {Promise} Promise object represents the result of the request
 */
export default async function handler(req, res) {
	try {
		const { Id, Name, CustomerId, Market, Currency, LastUpdated, Shipments, CouponCodes } = req.query;

		let endpoint = `/v2.0/carts`;

		const body = {
			Shipments,
			CouponCodes,
			Id,
			Name,
			CustomerId,
			Market,
			Currency,
			LastUpdated
		};

		const result = await Optimizely({
			endpoint,
			method: "post",
			body
		});

		res.json(result.data);
	} catch (err) {
		console.error(err);

		res.json({ message: "There was an error", error: err });
	}
}
