import LenisDiv from '@/Components/LenisDiv'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <LenisDiv>
          <Main />
          <NextScript />
        </LenisDiv>
      </body>
    </Html>
  )
}
