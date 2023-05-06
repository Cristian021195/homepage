import { MainDesc } from '@/components/layout'
import { MainLayout, NoHome } from '../layouts';
import Image from 'next/image';
import { terms_images } from '../myassets';

export default function Page404() {
  return (
    <MainLayout title='404 Error'>
      <NoHome>
          <div className='col-md-6 d-flex fade-up flex-wrap'>
            <MainDesc title='404 Error'>
              <p>
                If you see this message, it's because the resource you were trying to access is no longer available, or you mistyped the web address.
              </p>
            </MainDesc>
          </div>
          <div className='col-md-6 d-flex p-5 justify-content-center fade-up my-5'>
              <Image priority={true} src={terms_images.error} alt='Contact Image' sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw, 33vw" style={{ minWidth: '60%', height: 'auto' }}/>
            </div>
            <div className='col-md-6 offset-md-3 d-flex p-5 fade-up flex-wrap'>
            <section>
            </section>
          </div>
        </NoHome>
    </MainLayout>
  )
}
