'use server'

import {PaymentFormData} from "~/types";
import {redirect, RedirectType} from "next/navigation";


const paystack_api_secret = process.env.PAYSTACK_SECRET_KEY;
const app_base_url = process.env.NEXT_PUBLIC_APP_BASEURL;
const paystack_base_url = process.env.NEXT_PUBLIC_PAYSTACK_BASEURL;

export const initializeTransaction = async (data: PaymentFormData) => {
  const reference = Math.random().toString(26).slice(2);
  const callback_url = `${app_base_url}/verify-payment`;
  let req_body = {...data, reference, callback_url};

  const headers = new Headers();
  headers.append("Authorization", `Bearer ${paystack_api_secret}`);
  headers.append("Content-Type", "application/json");

  const req = new Request(`${paystack_base_url}/transaction/initialize`, {
    method: 'POST',
    headers,
    body: JSON.stringify(req_body)
  });
  console.log(req)
  const res = await fetch(req, {cache: 'no-cache'});
  const body = await res.json();

  redirect(body.data.authorization_url, RedirectType.push);
}

export const verifyPayment = async (reference: string) => {
  const headers = new Headers();
  headers.append("Authorization", `Bearer ${paystack_api_secret}`);

  const req = new Request(`${paystack_base_url}/transaction/verify/${reference}`, {
    method: 'GET',
    headers
  });
  const res = await fetch(req);
  console.log(res.ok);
  if (!res.ok) return false;
  return await res.json();
}
