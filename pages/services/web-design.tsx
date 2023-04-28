import { MainDesc } from '@/components/layout'
import { MainLayout, NoHome } from '../../layouts';
import { ServiceCard } from '@/components/other';
import Image from 'next/image';
import { services_images } from '../../myassets';


export default function WebDesign() { 
  return (
    <MainLayout title='Web & Mail Design'>
      <NoHome>
          <div className='col-md-6 d-flex fade-up flex-wrap'>
            <MainDesc title='Web & Mail Design'>
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
              <Image src={services_images.design} alt='Contact Image' sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw, 33vw" style={{ minWidth: '60%', height: 'auto' }}/>
          </div>
          <div className='col-md-12 col-lg-12 d-flex fade-up'>
            <section className='mt-10 d-flex flex-wrap gap-4'>
              <ServiceCard alt='Web Design' title='Web Design' 
                 image='https://cristian021195.github.io/portfolio/img/others/desktop-layout.svg'>
                  <div className='lh-1'>
                    <p>Any website should have an estructure, something that defines where you want each element without giving headaches to those who browser in</p>
                    <p>If you already have a website but feeling inconfrontable this service is for you.</p>
                    <p>I use Figma to make designs, the service i will give you is the project an simple assets like preview</p>
                  </div>
              </ServiceCard>
              <ServiceCard alt='Mail image' title='Mail'>
                  <div className='lh-1'>
                    <p>This service normally hire people who already have a website, and want to expand the comunication with their clients</p>
                    <p>I design making mockups, then pass to html code with styles and any images you want making look proffesional not like spaming mails</p>
                    <p>I use Figma to make designs, the service i will give you is the project an simple assets like preview</p>
                  </div>
              </ServiceCard>
            </section>            
          </div>
      </NoHome>
    </MainLayout>
  )
}
/*
<div className='col-md-6 d-flex fade-up outlined'>
  <section className='mt-10'>
  </section>
</div>
*/