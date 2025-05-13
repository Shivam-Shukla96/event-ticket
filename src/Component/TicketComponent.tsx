import Image from "next/image";
import Link from "next/link";
interface FormData {
  name: string;
  email: string;
  github: string;
  avatarUrl: string;
}


export default function TicketComponent({ data }: { data: FormData }) {
  return (
    <div className="flex  flex-col items-center justify-center  text-white text-center space-y-8 p-4 sm:p-6 w-full ">
      {/* button to go back to prev page
       */}
      <div className="absolute top-4 left-4 bg-white/5 px-2 py-1 rounded-md backdrop-blur-md">
        <Link
          href="/"
          className="text-sm text-gray-300 hover:text-white transition"
        >
          &larr; Back
        </Link>
      </div>

      <div className="items-center justify-center flex flex-col space-y-6 max-w-lg">
        <Image src="/logo.svg" alt="Logo" width={30} height={30} />

        <h1 className="text-3xl sm:text-4xl font-bold">
          Congrats, <span className="text-[#ff6b6b]">{data.name}</span>!
        </h1>
        <p className="text-2xl sm:text-3xl font-bold">Your ticket is ready.</p>

        <p className="text-sm sm:text-lg font-medium text-gray-300 leading-relaxed">
          We've emailed your ticket to <br />
          <span className="text-[#ff6b6b]">

            <Link
              href={`mailto:${data.email}`}
              className="text-[#ff6b6b] hover:underline"
            >{data.email}</Link>
          </span>{" "}
          and will send updates in <br />
          the run-up to the event.
        </p>
      </div>

      {/* Ticket */}
      <div className="relative w-full max-w-sm sm:max-w-md mt-4">
        <div className="absolute inset-0  bg-white/5 border-2 border-[#ff6b6b]  rounded-[10px] " />
        <div className=" flex flex-col justify-between px-4 sm:px-6 py-6">
          <div className="flex flex-col items-start space-y-2 mb-4 sm:mb-6">
            <Image src="/logo.svg" alt="Logo" width={20} height={20} />
            <p className="text-xs sm:text-sm text-gray-400">
              Jan 31, 2025 / Austin, TX
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Image
            width={40}
            height={40}
              src={data.avatarUrl}
              alt="Avatar"
              className="w-16 h-16 sm:w-14 sm:h-14 rounded-[10px] object-cover"
            />
            <div className="text-left">
              <p className="font-medium text-sm sm:text-base">{data.name}</p>
              <div className="flex items-center gap-1">
                <Image
                
                  src="/icon-github.svg"
                  alt="GitHub"
                  width={16}
                  height={16}
                />
                <p className="text-xs sm:text-sm text-gray-400">
                  @{data.github}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
}
