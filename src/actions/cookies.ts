'use server';
import { cookies } from 'next/headers';

export const getCookieByKey = async(key: string) => {
  const cookiesAction = await cookies();
  const cookie = cookiesAction.get(key);
  if (!cookie) {
    return null;
  }
  return cookie.value;
};

export const setCookieByKey = async(key: string, value: string) => {
  const cookiesAction = await cookies();
  cookiesAction.set(key, value);
};

export const deleteCookieByKey = async(key: string) => {
  const cookiesAction = await cookies();
  cookiesAction.delete(key);
};
