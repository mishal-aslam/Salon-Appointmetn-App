import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return(

      <div className="flex items-center justify-center flex-col gap-y-10 my-12 ">
    <SignUp />
  </div>
)
}
