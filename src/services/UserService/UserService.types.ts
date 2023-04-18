export type AuthRequest = {
  public_address: string;
  nonce: string;
  signature: string;
  referral_uuid?: string;
};

export type TokenObtain = {
  access: string;
  refresh: string;
};
