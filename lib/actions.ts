"use server"

import fetchUser from '@/utils/hooks';
import { productSchema } from '@/utils/schema';
import { parseWithZod } from '@conform-to/zod';
import { redirect } from 'next/navigation';

export async function createProductAction(
  currentState: unknown,
  formData: FormData,
) {
  const user = await fetchUser();

  if (user.email !== process.env.ADMIN_EMAIL) {
    return redirect('/');
  }

  const submission = parseWithZod(formData, { schema: productSchema });

  if (submission.status !== 'success') {
    return submission.reply();
  }
}
