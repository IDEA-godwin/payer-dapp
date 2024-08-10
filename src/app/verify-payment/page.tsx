'use client'

import {Suspense, useEffect, useState} from "react";
import {useSearchParams} from "next/navigation";
import {verifyPayment} from "~/app/actions";
import {
  approveSpend,
  getAccount, pay
} from "~/helper/contract";
import Link from "next/link";

function VerifyPayment() {
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
    console.log('verifying paystack transaction with reference:', reference);
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
    const acct = await getAccount();
    if (!acct) return;

    console.log(acct);
    approveSpend(acct, amount).then(async () => {
      console.log('bridge payment approved')
      const receipt = await pay(acct, data.metadata.meter_id, amount);
      setSuccess(true);
      setLoading(false);
      console.log(`transaction completed with receipt:`, receipt);
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
  )

  const whenTrxrefFalse = () => {
    return (
      <div className={'position-relative'}>
        {loading && <span className={'spinner-grow'}></span>}
        {!loading && <>
          <h4>Enter Transaction code to verify payment</h4>
          <form onSubmit={handleSubmit} className={'d-flex justify-content-between mt-3'}>
            <input className={'form-control w-75'} placeholder={'Transaction code'}/>
            <input className={'btn btn-secondary'} type={'submit'}/>
          </form>

        </>}
      </div>
    )
  }

  return (
    <section className={'position-absolute top-0 left-0 right-0 bottom-0 w-100 d-flex flex-column  align-items-center justify-content-center'}>
      <div>
        <div className={'text-end mb-3'}>
          {!loading && <Link href={'/'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                 className="bi bi-x-square"
                 viewBox="0 0 16 16">
              <path
                d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
            </svg>
          </Link>}
        </div>
        {hasTrxref && whenTrxref()}
        {!hasTrxref && (whenTrxrefFalse())}
      </div>
    </section>
  )
}

export default function Page() {
  return (
    <Suspense>
      <VerifyPayment />
    </Suspense>
  )
}
