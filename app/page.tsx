import { Button } from '@/components/ui/button';
import {
  LoginLink,
  RegisterLink,
} from '@kinde-oss/kinde-auth-nextjs/components';
import { LogIn, Volleyball } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex justify-between p-10">
      <Volleyball size={55} className="rounded-2xl bg-primary p-1 text-white" />
      <Button asChild>
        <LoginLink className="flex items-center justify-center space-x-2">
          <LogIn size={15} strokeWidth={3} />
          <p className="font-bold tracking-wide">Sign In</p>
        </LoginLink>
      </Button>
      <Button asChild>
        <RegisterLink>Sign Up</RegisterLink>
      </Button>
    </div>
  );
}
