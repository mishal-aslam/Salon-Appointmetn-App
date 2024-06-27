import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center flex-col gap-y-10 my-12 ">
      <SignIn />
    </div>
  );
}
