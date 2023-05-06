import { MainDesc } from '@/components/layout'
import { MainLayout, NoHome } from '../../layouts';
import { ServiceCard } from '@/components/other';
import Image from 'next/image';
import { services_images } from '../../myassets';


export default function apiRest() {
  return (
    <MainLayout title='Api Rest App'>
      <NoHome>
          <div className='col-md-6 d-flex fade-up flex-wrap'>
            <MainDesc title='Api Rest Application'>
            <article className='mt-5 lh-1'>
                <p>A RESTful API allows developers to create web applications that can interact with other applications or services.</p>
                <p>The major advantage of a RESTful API is its flexibility and scalability.</p>
                <p>This way you can use this RESTful API independent of the device, (Web Browsers, Mobile or Desktop Apps)</p>
              </article>
            </MainDesc>
          </div>
          <div className='col-md-6 d-flex p-5 justify-content-center fade-up my-5'>
              <Image priority={true} src={services_images.apirest} alt='Contact Image' sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw, 33vw" style={{ minWidth: '60%', height: 'auto' }}/>
          </div>
          <div className='col-md-12 col-lg-12 d-flex fade-up'>
            <section className='mt-10 d-flex flex-wrap gap-4'>
              <ServiceCard alt='Standar Plan' title='Standar Plan' 
                 image='https://cristian021195.github.io/portfolio/img/others/json.svg'>
                  <div className='lh-1'>
                    <p>This service is hired by people who already have a defined frontend, be it web, mobile, or desktop.</p>
                    <p>It includes everything related to the backend, consumption and loading of data to a database, authentication, among the most common.</p>
                  </div>
              </ServiceCard>
            </section>            
          </div>
      </NoHome>
    </MainLayout>
  )
}
