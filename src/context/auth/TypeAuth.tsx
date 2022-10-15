export interface TypeAuthState {
  phone: any;
  checkCode: any;
  code: any;
  visibleWarningCode: boolean;
  visibleSendCode: boolean;
  visibleWarningNumber: boolean;
  timeLeft: any;
  isCounting: boolean;
  setPhone: () => void;
  setCheckCode: () => void;
  setCode: () => void;
  PhoneNumberSubmit: () => void;
  CodeSubmit: () => void;
  onPressRequestCode: () => void;
  minutes: () => void;
  seconds: () => void;
}

export type TypeAuth = {};
