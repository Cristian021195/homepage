import { MainDesc } from '@/components/layout'
import { MainLayout, NoHome } from '../../layouts';
import { ServiceCard } from '@/components/other';
import Image from 'next/image';
import { services_images } from '../../myassets';


export default function LogosAnimationBrand() {
  return (
    <MainLayout title='Logos & Logo Animations'>
      <NoHome>
          <div className='col-md-6 d-flex fade-up flex-wrap'>
            <MainDesc title='Logos & Logo Animations'>
              <article className='mt-5 lh-1'>
                <p>A good logo grabs attention, makes a strong first impression, is the foundation of your brand identity, is memorable, separates you from competition, ending to foster brand loyalty.</p>
                <p>By a previous analysis of your business or product i make some monocrome previews of your logo, then pick the corresponding colors.<br />
                 Once  you logo is ready i can add some animations if you need it like custom loaders.</p>
                <p>If you already have a logo and want to make animations for it i can make it too</p>
              </article>
            </MainDesc>
          </div>
          <div className='col-md-6 d-flex p-5 justify-content-center fade-up my-5'>
              <Image src={services_images.logos} alt='Contact Image' sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw, 33vw" style={{ minWidth: '60%', height: 'auto' }}/>
          </div>
          <div className='col-md-12 col-lg-12 d-flex fade-up'>
            <section className='mt-10 d-flex flex-wrap gap-4'>
              <ServiceCard alt='Logo Design' title='Logo Design' 
                 image='https://cristian021195.github.io/portfolio/img/others/logos-prev.svg'>
                  <div className='lh-1'>
                    <p>No matter if you hava a website, app, or just a simple bussiness, a logo always is a good reminder to your clients for who you are.</p>
                    <p>This service youre gonna have the final product and the project if you want it.</p>
                  </div>
              </ServiceCard>
              <ServiceCard alt='Logo animation' title='Logo animation' image='https://cristian021195.github.io/portfolio/img/logos/clogo3.svg' animate='gelatine'>
                  <div className='lh-1'>
                    <p>This service normally hire people who already have a website, app,or just a brand, and want to add an extra</p>
                    <p>Depending of the need an complexity the price differs</p>
                    <p>If its web making use of css as far is possible, or a lottie file project, giving you the final product and then project</p>
                  </div>
              </ServiceCard>
            </section>            
          </div>
      </NoHome>
    </MainLayout>
  )
}
