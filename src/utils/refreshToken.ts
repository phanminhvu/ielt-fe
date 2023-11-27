export const refreshTokenSetup = (res: any) => {
  let refreshTiming = (res?.tokenObj?.expires_in || 3600 - 5 * 60) * 1000;
};
