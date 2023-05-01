import { MainDesc } from '@/components/layout'
import { MainLayout, NoHome } from '../../layouts';
import { ServiceCard } from '@/components/other';
import Image from 'next/image';
import { services_images } from '../../myassets';


export default function Dynamic() {
  return (
    <MainLayout title='Dynamic Web Development'>
      <NoHome>
          <div className='col-md-6 d-flex fade-up flex-wrap'>
            <MainDesc title='Dynamic Web Development'>
              <article className='mt-5 lh-1'>
                <p>
                Maybe you want more than a Static website or Landing page, if thats the case, this package include a all interactivity layer,
                 if you or you enterprise already have an backend development but need to perform frontend, this package is for you.
                </p>
              </article>
            </MainDesc>
          </div>
          <div className='col-md-6 d-flex p-5 justify-content-center fade-up my-5'>
              <Image priority={true} src={services_images.dynamic} alt='Contact Image' sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw, 33vw" style={{ minWidth: '60%', height: 'auto' }}/>
          </div>
          <div className='col-md-12 col-lg-12 d-flex fade-up'>
            <section className='mt-10 d-flex flex-wrap gap-4'>
              <ServiceCard alt='Basic Package' title='Basic Package' 
                 image='https://cristian021195.github.io/portfolio/img/others/desktop-layout.svg'>
                  <div className='lh-1'>
                    <p>Simple interactivity website, one page, Vanilla JavaScript.</p>
                    <p className='mb-1'><b>Usecases: </b></p>
                    <ul>
                      <li>Promotion clock sites</li>
                      <li>Exposition deta for your API REST service</li>
                      <li>Create, Read, Update and Delete Funcionalitiy to your service</li>
                    </ul>
                  </div>
              </ServiceCard>
              <ServiceCard alt='Medium Package' title='Medium Package' image='https://cristian021195.github.io/portfolio/img/others/static-med.svg'>
                  <div className='lh-1'>
                    <p>Frontend Projec, using library, for medium to large projects, generally no SEO frendly</p>
                    <p className='mb-1'><b>Usecases: </b></p>
                    <ul>
                      <li>Large web aplications</li>
                      <li>Exposition deta for your API REST service</li>
                      <li>Create, Read, Update and Delete Funcionalitiy to your service</li>
                    </ul>
                  </div>
              </ServiceCard>
              <ServiceCard alt='Pro Package' title='Pro Package' image='https://cristian021195.github.io/portfolio/img/others/static-pro.svg'>
                  <div className='lh-1'>
                    <p>Frondend Project, using Frondend Frameworks, SEO Frendly</p>
                    <ul>
                      <li>Large web aplications for your public and clients</li>
                      <li>Exposition deta for your API REST service</li>
                      <li>Create, Read, Update and Delete Funcionalitiy to your service</li>
                      <li>Server Side Generation, High performance website, SEO friendly</li>
                    </ul>
                  </div>
              </ServiceCard>
            </section>            
          </div>
      </NoHome>
    </MainLayout>
  )
}
