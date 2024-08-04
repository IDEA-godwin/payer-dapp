

export type PaymentFormData = {
  amount: number;
  email: string;
  metadata: {
    full_name: string;
    meter_id: number;
  }
}
