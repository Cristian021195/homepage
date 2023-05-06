import { MainDesc } from '@/components/layout'
import { MainLayout, NoHome } from '../../layouts';
import { ServiceCard } from '@/components/other';
import Image from 'next/image';
import { services_images } from '../../myassets';


export default function Static() {
  return (
    <MainLayout title='Static Web Development'>
      <NoHome>
          <div className='col-md-6 d-flex fade-up flex-wrap'>
            <MainDesc title='Static Web Development'>
              <article className='mt-5 lh-1'>
                <p>
                  Occasionally you might only want an informative site, no registration of clients, shopping cart, only share information, like special events, concerts, presentations. This package includes the all design process you only select the time you want the site on the web.
                </p>
              </article>
            </MainDesc>
          </div>
          <div className='col-md-6 d-flex p-5 justify-content-center fade-up my-5'>
              <Image priority={true} src={services_images.statics} alt='Contact Image' sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw, 33vw" style={{ minWidth: '60%', height: 'auto' }}/>
          </div>
          <div className='col-md-12 col-lg-12 d-flex fade-up'>
            <section className='mt-10 d-flex flex-wrap gap-4'>
              <ServiceCard alt='Sigle Page' title='Single Page' 
                 image='https://cristian021195.github.io/portfolio/img/others/desktop-layout.svg'>
                  <div className='lh-1'>
                    <p>The simplest website, all in one html file, no interactivity, just information in one section.</p>
                    <p className='mb-1'><b>Use cases: </b></p>
                    <ul>
                      <li>Special Promotion for short period of time.</li>
                      <li>Expiration Site information.</li>
                      <li>Organizations sites welcome.</li>
                    </ul>
                  </div>
              </ServiceCard>
              <ServiceCard alt='Medium Package +3' title='Medium Package +3' image='https://cristian021195.github.io/portfolio/img/others/static-med.svg'>
                  <div className='lh-1'>
                    <p>Like previous package but with more sections, 3 in total.</p>
                  </div>
              </ServiceCard>
              <ServiceCard alt='Pro Package +3' title='Pro Package' image='https://cristian021195.github.io/portfolio/img/others/static-pro.svg'>
                  <div className='lh-1'>
                    <p>Many sections as you need, all static. All project organized assets and links</p>
                  </div>
              </ServiceCard>
            </section>            
          </div>
      </NoHome>
    </MainLayout>
  )
}
