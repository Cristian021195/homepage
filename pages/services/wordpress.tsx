import { MainDesc } from '@/components/layout';
import { MainLayout, NoHome } from '../../layouts';
import { ServiceCard } from '@/components/other';
import Image from 'next/image';
import { services_images } from '../../myassets';


export default function Wordpress() {
  return (
    <MainLayout title='Web Design'>
      <NoHome>
          <div className='col-md-6 d-flex fade-up flex-wrap'>
            <MainDesc title='Wordpress'>
              <article className='mt-5 lh-1'>
                <p>Work with this CMS is a really quick solution to the common requirements out there.</p>
                <p>Allowing you to easily create and manage websites and blogs. It offers a user-friendly interface, a wide range of themes and plugins to customize.</p>
                <p>You can put your store in a really short time and offer your products to the world.</p>
              </article>
            </MainDesc>
          </div>
          <div className='col-md-6 d-flex p-5 justify-content-center fade-up my-5'>
              <Image priority={true} src={services_images.wordpress} alt='Contact Image' sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw, 33vw" style={{ minWidth: '60%', height: 'auto' }}/>
          </div>
          <div className='col-md-12 col-lg-12 d-flex fade-up'>
            <section className='mt-10 d-flex flex-wrap gap-4'>
              <ServiceCard alt='Basic Plan' title='Basic Plan' 
                 image='https://cristian021195.github.io/portfolio/img/others/wordpress-basic.svg'>
                  <div className='lh-1'>
                    <p>For people, institutions, or small companies that want to advertise their product for the first time or make announcements.</p>
                    <p>No more than 3 sections</p>
                    <p>Server and domain expenses by the client.</p>
                  </div>
              </ServiceCard>
              <ServiceCard title='Medium Plan' alt='Medium Plan' image='https://cristian021195.github.io/portfolio/img/others/wordpress-pro.svg'>
                  <div className='lh-1'>
                    <p>For independent professionals, medium-sized institutions and companies.</p>
                    <p>Many sections as you need, with control panel.</p>
                    <p>Server and domain expenses by the client.</p>
                  </div>
              </ServiceCard>
              <ServiceCard title='Pro Plan' alt='Medium Plan' image='https://cristian021195.github.io/portfolio/img/others/wordpress-med.svg'>
                  <div className='lh-1'>
                    <p>For independent professionals, medium-sized institutions and companies.</p>
                    <p>Many sections as you need, with control panel, integrations (woocomerce, PayPal, etc.)</p>
                    <p>Server and domain expenses by the client.</p>
                  </div>
              </ServiceCard>
            </section>            
          </div>
      </NoHome>
    </MainLayout>
  )
}
