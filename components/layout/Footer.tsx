import localFont from 'next/font/local'
import Link from 'next/link';
import { useRouter } from 'next/router';
const myFont = localFont({ src: '../../fonts/PTSans-Regular.woff2' })
export const Footer = () => {
    const router = useRouter();
    console.log(router.asPath)
  return ( // router.asPath === '/' ? 'col-12 col-md-4 col-sm-6 bg-cyan-0 white-0 p-5' : 'col-12 col-md-4 col-sm-6 p-5'
    <footer className={router.asPath === '/' ? myFont.className+' container-fluid' : myFont.className+' container-fluid'}>
        <div className="row">
            <section className={router.asPath === '/' ? 'col-12 col-md-8 col-sm-6 align-items-center footer-home' : 'col-12 col-md-8 py-5 col-sm-6 d-flex align-items-center'}>
                
            </section>
            <section className={router.asPath === '/' ? 'col-12 col-md-4 col-sm-6 bg-cyan-0 pt-5 white-0' : 'col-12 col-md-4 col-sm-6'}>
                <div className='p-3'>
                    <p className={router.asPath === '/' ? 'text-end white-0' : 'text-end cyan-0'}>&copy; 2023 Cristian Ismael Gramajo - All rights reserved. &nbsp;</p>
                    <div className='d-flex flex-wrap footer-buttons justify-content-end'>
                        <Link href='/terms' legacyBehavior>
                            <a className='m-2 cyan-0 btn bg-white-0 p-1'>Terms & Conditions</a>
                        </Link>
                        <Link href='/privacy' legacyBehavior>
                            <a className='m-2 cyan-0 btn bg-white-0 p-1'>Privacy Policy</a>
                        </Link>
                        <Link href='/faq' legacyBehavior>
                            <a className='m-2 cyan-0 btn bg-white-0 p-1'>FAQ's</a>
                        </Link>
                        <a href="#top" className='white-0 m-2 cyan-0 btn bg-white-0 p-1'>Up</a>
                    </div>
                </div>
            </section>
        </div>
    </footer>
  )
}
