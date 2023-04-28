import { MainDesc } from '@/components/layout'
import { MainLayout, NoHome } from '../layouts/';
import Image from 'next/image';
import { privacy_images } from '../myassets';
import Link from 'next/link';

export default function Privacy() {
  return (
    <MainLayout title='Privacy Policy'>
      <NoHome>
          <div className='col-md-6 d-flex fade-up flex-wrap'>
            <MainDesc title='Privacy Policy'>
              <article className='lh-1 mt-5'>
                </article>
            </MainDesc>
          </div>
          <div className='col-md-6 d-flex p-5 justify-content-center fade-up my-5'>
              <Image src={privacy_images.privmain} alt='Contact Image' sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw, 33vw" style={{ minWidth: '60%', height: 'auto' }}/>
            </div>
            <div className='col-md-6 offset-md-3 d-flex p-5 fade-up flex-wrap'>
            <section>
          <br />
          <h2>INFORMATION USAGE</h2>
            <article className='mb-5'>
              <p className='mt-2'>
                My website not require any previous register to use it, still there, would be good if you read 
                what data store you browser, and what data comes out when you fill and send a form, change styles, make any payment.
              </p>
            </article>
            <article className='mb-5 lh-1'>
                <h3 className='mb-2'>FORMS AND DATA SUBMITED</h3>
                <p>
                    Contact form will be send only if you fill al the fields, i recommend make shure that check all information, 
                    and check that you agree to terms and conditions.
                </p>
                <p>
                    All that information goes for a server that comsumes external service so i can read your mail, i will not save
                    your mail, name or message you will send me, all that will keep in mailbox.
                </p>
            </article>
            <article className='mb-5'>
                <h3 className='mb-2'>LOCAL DATA</h3>
                <ul className='ps-4'>
                  <li>Save website preferences, such as favorites, font size, and theme.</li>
                  <li>Cookies for analytics, mail an payment services.</li>
                  <li>Text on your device's clipboard in case of copying mail or other data indexing any sharing function</li>
              </ul>
            </article>
            <article className='mb-5 lh-1'>
                <h3 className='mb-2'>PAYMENTS</h3>
                <p>
                    If you select payment preference, some browsers save payments methods and form fields, my website is not responsable of 
                    the way browser works.
                </p>
                <p>
                    By other way, certain payments links will send you to that platforms and maybe save cookies, again my website is not responsable of that.
                </p>
                <p>
                    If you have any other concern you can tell me, just go to <Link href="/contact" className='cyan-0'>Contact</Link> section.
                </p>
            </article>
            </section>
          </div>
        </NoHome>
    </MainLayout>
  )
}
