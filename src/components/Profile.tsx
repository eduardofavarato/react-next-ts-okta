import Image from 'next/image'
import Link from 'next/link'

export default function Profile() {
  return (
    <div className={`p-4`}>
      <h1 className="text-2xl font-bold text-center lg:text-4xl">Profile</h1>
      <div className="max-w-sm px-8 py-8 mx-auto space-y-2 bg-white shadow-lg rounded-xl sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <Image
          className="block w-auto h-auto mx-auto rounded-full sm:mx-0 sm:shrink-0"
          src="https://github.com/eduardofavarato.png"
          alt="Eduardo Favarato"
          width={100}
          height={24}
          priority={true}
        ></Image>
        <div className="space-y-2 text-center sm:text-left">
          <div className="space-y-0.5 mb-2">
            <p className="text-lg font-semibold text-black">Eduardo Favarato</p>
            <p className="font-medium text-slate-500">Software Engineer</p>
          </div>
          <Link
            className="px-4 py-1 text-sm font-semibold border rounded-full text-slate-800 border-slate-200 hover:text-white hover:bg-slate-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-offset-2"
            href={'/repositories'}
          >
            Repositories
          </Link>
        </div>
      </div>
    </div>
  )
}
