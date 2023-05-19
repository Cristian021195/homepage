import { MainDesc } from '@/components/layout'
import { MainLayout, NoHome } from '../layouts';
import Image from 'next/image';
import { AcordeonHover } from '@/components/other';
import Link from 'next/link';
import { faq_images } from '../myassets';

export default function Faq() { 
  return (
    <MainLayout title='FAQ'>
        <NoHome>
            <div className='col-md-6 d-flexfade-up flex-wrap'>
                <MainDesc title='Frequented Asked Questions'></MainDesc>
            </div>
            <div className='col-md-6 d-flex p-5 justify-content-center fade-up my-5'>
              <Image priority={true} src={faq_images.faqmain} alt='Contact Image' sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw, 33vw" style={{ minWidth: '60%', height: 'auto' }}/>
            </div>
            <div className='col-md-6 offset-md-3 d-flex py-5 fade-up flex-wrap'>
                <AcordeonHover title='I can get in touch with you any time?' >
                  <p>I reply mails, and messages quickly as possible, but remember I’m from Argentina (GMT-3). So if you not get any response now I’ll reply you next morning for sure.</p>
                </AcordeonHover>
                <AcordeonHover title='You only work alone?'>
                  <p>Normally yes, but if you need me to collaborate with you or anyone else in a project, we need to make a meeting absolutely.</p>
                </AcordeonHover>
                <AcordeonHover title='Do you make mobile or desktop apps?'>
                  <p>Only web pages, and web applications for now, but in the near future I will offer that service too. Check <Link href='/services' className='text-underline cyan-0'>Services</Link> to stay up to date.</p>
                </AcordeonHover>
                <AcordeonHover title='Do you receive crypto currencies as payment?'>
                  <p>Yes, the common ones (USDT, DAI, USDC, Bitcoin, Ethereum)</p>
                </AcordeonHover>
                <AcordeonHover title="There's any other way to contact you?">
                  <p>No, only by the <Link href='/contact' legacyBehavior><a className='text-underline cyan-0'>Contact</a></Link>&nbsp;section.</p>
                </AcordeonHover>
                <AcordeonHover title='If buy you a website or web application, you will use it for your portfolio?'>
                  <p>Yes, it gives you visibility too, but if you need keep your web application private just tell me.</p>
                </AcordeonHover>
                <AcordeonHover title='If I pay the website service PWA is free?'>
                  <p>No, it's an extra service.</p>
                </AcordeonHover>
                <AcordeonHover title='Can I get logo demos for free?'>
                  <p>No, but the ones in my <Link href='/porfolio' legacyBehavior><a className='text-underline cyan-0'>Porfolio</a></Link> except the websites projects, you can use it if you need it.</p>
                </AcordeonHover>
                <AcordeonHover title='logo demos are SVG format?'>
                  <p>No, demos are delivered in webp, jpg/jpeg, png format only.</p>
                </AcordeonHover>
                <AcordeonHover title='If I buy Lottie Animated logos, you give the the file or the project file?'>
                  <p>Only the file, but if you need the project just tell me. There's many software out there, and I only create it with Adobe After Effects.</p>
                </AcordeonHover>
                <AcordeonHover title='You Make web translations?'>
                  <p>Yes, anyway always going to contact with you if I have any doubt about a word or sentence.</p>
                </AcordeonHover>
                <AcordeonHover title='You Make custom fonts for websites, WhatsApp / telegram / social media bots?'>
                  <p>No, I use free fonts and only link to your social media, but in the near future I will offer that service too. Check &nbsp;
                     <Link href='/services' className='text-underline cyan-0'>Services</Link> to stay up to date.
                  </p>
                </AcordeonHover>
                <AcordeonHover title='You only work with Upwork?'>
                  <p>If you're not form Argentina, yes I only work with Upwork platform.</p>
                </AcordeonHover>
                <AcordeonHover title='You make email design?'>
                  <p>Yes, it's an extra service.</p>
                </AcordeonHover>
                <AcordeonHover title='You make video editing if I need it on my website?'>
                  <p>No, I just put them on your website.</p>
                </AcordeonHover>
                <AcordeonHover title='Website maintenance is free?'>
                  <p>No, we define your project requirements and build it, if you need any changes or see something missing after the delivered time it's an extra service.</p>
                </AcordeonHover>
            </div>
        </NoHome>
    </MainLayout>
  )
}

/*

<Acordeon title='I can get in touch with you any time?'>
                  <p>I reply mails, and messages quickly as possible, but remember I’m from Argentina (GMT-3). So if you not get any response now I’ll reply you next morning for sure.</p>
                </Acordeon>
                <Acordeon title='You only work alone?'>
                  <p>Normally yes, but if you need me to collaborate with you or anyone else in a project, we need to make a meeting absolutely.</p>
                </Acordeon>
                <Acordeon title='Do you make mobile or desktop apps?'>
                  <p>Only web pages, and web applications for now, but in the near future I will offer that service too. Check <Link href='/services' className='text-underline cyan-0'>Services</Link> to stay up to date.</p>
                </Acordeon>
                <Acordeon title='Do you receive crypto currencies as payment?'>
                  <p>Yes, the common ones (USDT, DAI, USDC, Bitcoin, Ethereum)</p>
                </Acordeon>
                <Acordeon title="There's any other way to contact you?">
                  <p>No, only by the <Link href='/contact' legacyBehavior><a className='text-underline cyan-0'>Contact</a></Link>&nbsp; section.</p>
                </Acordeon>
                <Acordeon title='If buy you a website or web application, you will use it for your portfolio?'>
                  <p>Yes, it gives you visibility too, but if you need keep your web application private just tell me.</p>
                </Acordeon>
                <Acordeon title='If I pay the website service PWA is free?'>
                  <p>No, it's an extra service.</p>
                </Acordeon>
                <Acordeon title='Can I get logo demos for free?'>
                  <p>No, but the ones in my <Link href='/porfolio' legacyBehavior><a className='text-underline cyan-0'>Porfolio</a></Link> except the websites projects, you can use it if you need it.</p>
                </Acordeon>
                <Acordeon title='logo demos are SVG format?'>
                  <p>No, demos are delivered in webp or jpg format / jpeg format only.</p>
                </Acordeon>
                <Acordeon title='If I buy Lottie Animated logos, you give the the file or the project file?'>
                  <p>Only the file, but if you need the project just tell me. There's many software out there, and I only create it with Adobe After Effects.</p>
                </Acordeon>
                <Acordeon title='You Make web translations?'>
                  <p>Yes, anyway always going to contact with you if I have any doubt about a word or sentence.</p>
                </Acordeon>
                <Acordeon title='You Make custom fonts for websites, WhatsApp / telegram / social media bots?'>
                  <p>No, I use free fonts and only link to your social media, but in the near future I will offer that service too. Check
                     <Link href='/services' className='text-underline cyan-0'>Services</Link> to stay up to date.
                  </p>
                </Acordeon>
                <Acordeon title='You only work with Upwork?'>
                  <p>If you're not form Argentina, yes I only work with Upwork platform.</p>
                </Acordeon>
                <Acordeon title='You make email design?'>
                  <p>Yes, it's an extra service.</p>
                </Acordeon>
                <Acordeon title='You make video editing if I need it on my website?'>
                  <p>No, I just put them on your website.</p>
                </Acordeon>
                <Acordeon title='Website maintenance is free?'>
                  <p>No, we define your project requirements and build it, if you need any changes or see something missing after the delivered time it's an extra service</p>
                </Acordeon>

*/
