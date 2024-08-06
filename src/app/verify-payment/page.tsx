'use client'

import {useEffect, useState} from "react";
import {useSearchParams} from "next/navigation";
import {verifyPayment} from "~/app/actions";
import {
  approveSpend,
  getAccount, pay
} from "~/helper/contract";
import Link from "next/link";


export default function Page() {
  const [loading, setLoading] = useState(true);
  const [hasTrxref, setHasTrxref] = useState(false);
  const [success, setSuccess] = useState(false);
  const [amount, setAmount] = useState(0);

  const [trxCode, setTrxCode] = useState('');

  const params = useSearchParams();

  const convert_rate = 1600;

  useEffect(() => {
    if (params.has('trxref'))
      setHasTrxref(true);
    else {
      setLoading(false);
      return;
    }
    const ref = params.get('trxref');
    if (ref) verify(ref, true).then(); else setLoading(false);
  }, []);

  const verify = async (reference: string, sendTrx: boolean) => {
    console.log('verifying paystack transaction with reference: ', reference);
    const res = await verifyPayment(reference);
    const data = res ? res.data : null;

    if (!data || data.status !== 'success') {
      console.log('paystack verification failed')
      setLoading(false);
      return;
    }
    console.log('paystack verification successful')

    setAmount(data.amount / 100);
    if (!sendTrx) {
      setSuccess(true);
      setLoading(false);
      return;
    }

    const amount = (data.amount / 100) / convert_rate;
    const acct = getAccount();
    if (!acct) return;

    approveSpend(acct.address, amount).then(async () => {
      await pay(acct.address, data.metadata.meter_id, amount);
      setSuccess(true);
      setLoading(false);
    }, err => alert("could not approve transaction, contact developer for aid"));
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const ref = event.target[0].value;
    if (!ref) {
      alert('transaction code field is required');
      return;
    }
    setHasTrxref(true);
    setLoading(true);
    await verify(ref, false);
  }

  const tryAgain = () => {
    setHasTrxref(false);
  }

  const whenTrxref = () => (
    <>
      <div className={'text-center'}>
        <h3>Thank you for using <Link href={'/'} className={'text-decoration-none text-success'}>GreenPay</Link></h3>
        <br/>
        {loading && <p className={'d-flex align-items-center justify-content-center'}>
          Verifying transaction <span className={'ms-4 spinner-border'}></span>
        </p>}
        {!loading && !success && <p>
          Could not verify your transaction.
          <a role={'button'} className={'text-decoration-none'} onClick={tryAgain}> Try again</a>
        </p>}
        {!loading && success && <p>
          Transaction was successful! Meter credited ₦{amount} worth of unit
        </p>}
      </div>
    </>
  )

  const whenTrxrefFalse = () => {
    return (
      <section>
        {loading && <span className={'spinner-grow'}></span>}
        {!loading && <>
          <h4>Enter Transaction code to verify payment</h4> <br/>
          <form onSubmit={handleSubmit} className={'d-flex justify-content-between'}>
            <input className={'form-control w-75'} placeholder={'Transaction code'}/>
            <input className={'btn btn-secondary'} type={'submit'}/>
          </form>
        </>}
      </section>
    )
  }

  return (
    <section
      className={'position-absolute top-0 left-0 right-0 bottom-0 w-100 d-flex align-items-center justify-content-center'}>
      {hasTrxref && whenTrxref()}
      {!hasTrxref && (whenTrxrefFalse())}
    </section>
  )
}
