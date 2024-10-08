import Head from 'next/head'
import { Login } from '@/components/Login'
import { useRouter } from 'next/router'
import {Navbar } from '../components/Navbar'

export default function Home() {
  const router = useRouter()
  const code = router.query.code
  if(code){
    router.replace({
      pathname: "/quilt",
      query: {
        code
      }
    })
  }
  return (
    <>
      <Head>
        <title>Quiltify</title>
      </Head>
      <Navbar/>
      <Login/>
    </>
  )
}
