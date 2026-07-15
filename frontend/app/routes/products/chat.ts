import type { ActionFunctionArgs } from 'react-router';

export interface AIResponse {
  response: string;
  error?: {
    message: string;
  };
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const message = formData.get('message');

  if (!message) {
    return Response.json(
      { error: { message: 'Message payload is required' } },
      { status: 400 },
    );
  }

  try {
    const response = await fetch(`${process.env.VITE_BACKEND_URL}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: message.toString() }),
    });

    if (!response.ok) {
      return Response.json(
        { error: { message: 'Something went wrong' } },
        { status: response.status },
      );
    }

    const data: AIResponse = await response.json();

    return Response.json({ response: data.response });

  } catch (err) {
    return Response.json(
      { error: { message: 'Failed to connect to server' } },
      { status: 500 },
    );
  }
}