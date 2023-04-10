import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div id="global-header" className="bg-slate-800 text-white text-center pt-2 pb-2 font-medium tracking-tight">
          React Next Typescript Template
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
