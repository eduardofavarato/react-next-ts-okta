import { signIn, signOut, useSession } from 'next-auth/react'

export default function Header() {
  const { data: session } = useSession()

  return (
    <header>
      <div id="global-header" className="pt-2 pb-2 font-medium tracking-tight text-center text-white h-15 bg-slate-800">
        <div className={`text-right mr-4`}>
          {!session && (
            <div className={``}>
              <a
                href={`/api/auth/signin`}
                className={`underline`}
                onClick={(e) => {
                  e.preventDefault()
                  signIn('okta')
                }}
              >
                Sign in
              </a>
            </div>
          )}
          {session?.user && (
            <div className={``}>
              <div className={``}>
                {session.user.image && <span style={{ backgroundImage: `url('${session.user.image}')` }} className={``} />}
              </div>
              <div className={``}>
                <strong>{`Hi, ${session.user.name ?? session.user.email}`}</strong>
              </div>
              <div className={`text-xs`}>
                <a
                  href={`/api/auth/signout`}
                  className={`underline`}
                  onClick={(e) => {
                    e.preventDefault()
                    signOut()
                  }}
                >
                  Sign out
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
