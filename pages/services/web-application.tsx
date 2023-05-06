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
                <p>A Web Application is basically a software program that is designed to be accessed and used through a web browser. Are typically more complex than websites, often requiring a database and server-side scripting to function</p>
                <p>They are also designed to be responsive and provide a smooth user experience, similar to a desktop application.</p>
              </article>
            </MainDesc>
          </div>
          <div className='col-md-6 d-flex p-5 justify-content-center fade-up my-5'>
              <Image priority={true} src={services_images.webapp} alt='Contact Image' sizes="(max-width: 768px) 100vw,
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
                    <p>many meetings are necessary to define the requirements of this Project.</p>
                  </div>
              </ServiceCard>
            </section>            
          </div>
      </NoHome>
    </MainLayout>
  )
}
