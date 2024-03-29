import { redirect } from "next/navigation";

export const sendRegosterRequest = async (
	pass_id: String,
	formData: FormData
) => {
	"use server";
	const name = formData.get("name");
	const email = formData.get("email");
	const phone = formData.get("phone");
	const aadhar = formData.get("aadhar");
	const college = formData.get("college");
	const referral = formData.get("referral");
	console.log(name, email, phone, typeof aadhar, college, referral);
	let searchParams;
	try {
		const response = await fetch(
			`${process.env.url}/api/registrations/update`,
			{
				method: "POST",
				body: JSON.stringify({
					qrId: pass_id,
					name,
					email,
					phone,
					aadhar,
					college,
					referral,
				}),
			}
		);
		const data = await response.json();

		if (data.error) {
			searchParams = new URLSearchParams({
				error: "true",
				message: data.message,
			});
		} else {
			searchParams = new URLSearchParams({ success: "true" });
		}
	} catch (e: any) {
		console.log(e);
		searchParams = new URLSearchParams({ error: "true", message: e });
	} finally {
		redirect(`/registrations/create/${pass_id}?${searchParams}`);
	}
};
