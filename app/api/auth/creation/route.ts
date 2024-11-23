import prisma from '@/utils/db';
import fetchUser from '@/utils/hooks';
import { NextResponse } from 'next/server';

export async function GET() {
  const user = await fetchUser();

  if (!user || user === null || !user.id) {
    throw new Error('Something went Wrong');
  }

  let userExists = await prisma.user.findUnique({ where: { id: user.id } });

  if (!userExists) {
    userExists = await prisma.user.create({
      data: {
        id: user.id,
        firstName: user.given_name,
        lastName: user.family_name,
        email: user.email,
        profileImage:
          user.picture ?? `https://avatar.vercel.sh/${user.given_name}`,
      },
    });
  }

  return NextResponse.redirect(process.env.PUBLIC_URL as string);
}
