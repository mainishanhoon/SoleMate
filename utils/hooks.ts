import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export default async function fetchUser() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    throw new Error('User does not exist.');
  }

  return user;
}
