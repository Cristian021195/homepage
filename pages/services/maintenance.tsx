import { MainDesc } from '@/components/layout'
import { MainLayout, NoHome } from '../../layouts';
import { ServiceCard } from '@/components/other';
import Image from 'next/image';
import { services_images } from '../../myassets';


export default function Maintenance() {
  return (
    <MainLayout title='Maintenance Web Development'>
      <NoHome>
          <div className='col-md-6 d-flex fade-up flex-wrap'>
            <MainDesc title='Maintenance Web Development'>
              <article className='mt-5 lh-1'>
                <p>Web maintenance refers to the ongoing process of keeping a website updated, secure, and functioning properly.</p>
                <p>It involves regularly checking for issues and fixing them, updating content, and ensuring the website is compatible for all user devices.</p>
                <p>Include tasks such as updating software, plugins, and themes, backing up website data, monitoring website speed and performance, checking for broken links or missing images, optimizing images and other media files for faster loading times, and ensuring the website is mobile-friendly.</p>
              </article>
            </MainDesc>
          </div>
          
          <div className='col-md-6 d-flex p-5 justify-content-center fade-up my-5'>
              <Image priority={true} src={services_images.mantenience} alt='Contact Image' sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw, 33vw" style={{ minWidth: '60%', height: 'auto' }}/>
          </div>
          <div className='col-md-12 col-lg-12 d-flex fade-up'>
            <section className='mt-10 d-flex flex-wrap gap-4'>
              <ServiceCard alt="Basic Plan" title="Basic Plan" 
                 image="https://cristian021195.github.io/portfolio/img/others/tool-key.svg">
                  <div className='lh-1'>
                    <p>Generally old websites (only frontend), re-defining, re-designing old websites with old styles.</p>
                    <p>Fixing responsive issues, old implementations issues, adding supported functions.</p>
                    <p>Making an obsolete website a new one, complying with current standards.</p>
                  </div>
              </ServiceCard>
              <ServiceCard title="Standar Plan" alt="Medium Plan" image="https://cristian021195.github.io/portfolio/img/others/mantenience-pro.svg">
                  <div className='lh-1'>
                    <p>It's pretty much like the previous plan, adding server-side support.</p>
                    <p>Renewing expired SSL certificates, redefining rest API responses, HTTP errors, and more.</p>
                    <p>It depends on the error, so a meeting is necessary.</p>
                  </div>
              </ServiceCard>
            </section>            
          </div>
      </NoHome>
    </MainLayout>
  )
}
