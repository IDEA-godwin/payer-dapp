'use client'

import {useEffect, useState} from "react";
import {useSearchParams} from "next/navigation";
import {verifyPayment} from "~/app/actions";
import {
  approveSpend,
  getAccount,
  getDaiWalletBalance,
  getDefaultBridgeAddress,
  getWalletBalance, pay
} from "~/helper/contract";


export default function Page() {
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [amount, setAmount] = useState(0);
  const params = useSearchParams();

  const convert_rate = 1600;

  useEffect(() => {

    const verify = async (reference: string) => {
      const data = (await verifyPayment(reference)).data;
      if (data.status !== 'success') {
        setLoading(false);
        return;
      }
      setAmount(data.amount / 100);
      const amount = (data.amount / 100) / 1600.00;
      const acct = getAccount();
      if (!acct) return;

      approveSpend(acct.address, amount).then(async () => {
        await pay(acct.address, data.metadata.meter_id, amount);
        setSuccess(true);
      }, err => alert("could not approve transaction, contact developer for aid"));
    }
    const ref = params.get('trxref');
    if (ref) verify(ref); else setLoading(false);
  }, []);

  return (
    <section className={'position-absolute top-0 left-0 right-0 bottom-0 w-100 d-flex align-items-center justify-content-center'}>
      <div className={'text-center'}>
        <h3>Thank you for using <span className={'text-success'}>GreenPay</span></h3>
        <br />
        {loading && <p className={'d-flex align-items-center justify-content-center'}>
          Verifying transaction <span className={'ms-4 spinner-border'}></span>
        </p>}
        {!loading && !success && <p>
          Could not verify your transaction. contact support@gmail.com.
        </p>}
        {!loading && success && <p>
          Transaction successful! Meter has been credited ₦{amount} worth of unit
        </p>}
      </div>
    </section>
  )
}
