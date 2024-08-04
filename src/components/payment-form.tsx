import {useForm} from "react-hook-form";

import {PaymentFormData} from "~/types";
import {initializeTransaction} from "~/app/actions";


export default function PaymentForm() {
  const {register, handleSubmit} = useForm<PaymentFormData>()

  const onSubmit = async (data: PaymentFormData) => {
    console.log(data);
    data.amount = data.amount * 100;
    await initializeTransaction(data);
  }

  return (
    <section className="bg-light py-lg-4 py-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow-lg">
              <div className="row g-0">
                <div
                  className="col-md-6 d-none d-md-block rounded-start-3"
                  style={{
                    backgroundImage: "url(/images/logo/station.jpg)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                  }}>
                  {/*// <!-- for mobile img-->*/}
                </div>
                <div className="col-xl-6 col-md-6">
                  <div className="card-body p-md-5">
                    <form onSubmit={handleSubmit(onSubmit)} className="row needs-validation g-3">
                      <div className="col-lg-12">
                        <div>
                          <h3>Make Payment Here!</h3>
                          <p className="mb-0">
                            Enter the amount you want to pay for the service.
                            Please note that you will be redirected to a paystack gateway to complete your
                            payment.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <label htmlFor="companyPhoneInput" className="form-label">
                          Customer Name<span className="text-danger">*</span>
                        </label>
                        <input {...register('metadata.full_name', {required: true})} className="form-control" id="companyPhoneInput" required/>
                        <div className="invalid-feedback">Please enter the customer name.</div>
                      </div>
                      <div className="col-md-12">
                        <label htmlFor="companyPhoneInput" className="form-label">
                          Email<span className="text-danger">*</span>
                        </label>
                        <input {...register('email', {required: true})} className="form-control" required/>
                        <div className="invalid-feedback">Please enter the customer email.</div>
                      </div>
                      <div className="col-md-12">
                        <label className="form-label">
                          Meter Id<span className="text-danger">*</span>
                        </label>
                        <input {...register('metadata.meter_id', {required: true})} className="form-control"
                               id="companyPhoneInput" required/>
                        <div className="invalid-feedback">Specify the Meter to be credited.</div>
                      </div>
                      <div className="col-md-12">
                        <label htmlFor="companyPhoneInput"
                               className="form-label d-flex justify-content-between align-items-center">
                            <span>
                              Amount<span className="text-danger">*</span>
                            </span>
                          <sub className='fw-lighter'>₦1600 ≈ $1</sub>
                        </label>
                        <input {...register('amount', {required: true})} className="form-control" required/>
                        <div className="invalid-feedback">Please enter the Amount due.</div>
                      </div>
                      {/*<div className="col-md-12 disabled">*/}
                      {/*  <label htmlFor="disabledSelect" className="form-label">Payment To</label>*/}
                      {/*  <select {...register('vendor')} id="disabledSelect" className="form-select">*/}
                      {/*    <option>TechandSun_NG</option>*/}
                      {/*  </select>*/}
                      {/*</div>*/}
                      <div className="col-12">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="companyCheckagree" required/>
                          <label className="form-check-label" htmlFor="companyCheckagree">
                            I agree to the <a href="#!">privacy policy</a>
                          </label>
                          <div className="invalid-feedback">You must agree before submitting.</div>
                        </div>
                      </div>
                      <div className="d-grid">
                        <button className="btn btn-primary rounded-pill" type="submit">Proceed</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
