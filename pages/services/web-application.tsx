import { MainDesc } from '@/components/layout'
import { MainLayout, NoHome } from '../../layouts';
import { ServiceCard } from '@/components/other';
import Image from 'next/image';
import { services_images } from '../../myassets';


export default function Dynamic() {
  return (
    <MainLayout title='Web Application'>
      <NoHome>
          <div className='col-md-6 d-flex fade-up flex-wrap'>
            <MainDesc title='Web Application'>
              <article className='mt-5 lh-1'>
                <p>As a web designer's my job is less about using code and tools to bring a website to life.</p>
                <p>Determining a site's layout, sizes, color palette, font set, and visual themes. I use my knowledge 
                  and tools to create mockups, prototyping, and templates when designing a site. </p>
                <p>As a matter of fact, not only website should be designed, also mail, if you want to work with mail promotion sending
                  A better looking will give you more seriousness, and professionalism, cliets love it</p>
              </article>
            </MainDesc>
          </div>
          <div className='col-md-6 d-flex p-5 justify-content-center fade-up my-5'>
              <Image src={services_images.webapp} alt='Contact Image' sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw, 33vw" style={{ minWidth: '60%', height: 'auto' }}/>
          </div>
          <div className='col-md-12 col-lg-12 d-flex fade-up'>
            <section className='mt-10 d-flex flex-wrap gap-4'>
              <ServiceCard alt='Standar Plan' title='Basic Plan' 
                 image='https://cristian021195.github.io/portfolio/img/others/web-app-pro.svg'>
                  <div className='lh-1'>
                    <p>It is basically a frontend app, but with the features that Progressive Web Apps (PWA) offer.</p>
                    <p>Offline functionality, experience of an installable app, push notifications, and everything that a web offers by default.</p>
                  </div>
              </ServiceCard>
              <ServiceCard title='Premium Plan' alt='Medium Plan' image='https://cristian021195.github.io/portfolio/img/others/full-app.svg'>
                  <div className='lh-1'>
                    <p>It is the complete web application, it includes everything that the previous plans and services have.</p>
                    <p>many meetings are necessary to define the requirements of this project</p>
                  </div>
              </ServiceCard>
            </section>            
          </div>
      </NoHome>
    </MainLayout>
  )
}
