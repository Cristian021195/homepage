
import { MainDesc } from '@/components/layout'
import Image from 'next/image'
import { MainLayout, NoHome } from '../../layouts/';
import { ServiceContainer } from '@/components/other'
import { services_images } from '../../myassets'

export default function Services() {
  return (
    <MainLayout title='Services'>
      <NoHome>
          <div className='col-md-6 d-flex fade-up flex-wrap'>
            <MainDesc title='Services'>
              <article className='lh-1 mt-5'>
              <p>
                This section will give you main information of what you probably need, any of the selected services will have a meeting with you to set the bases of your project.
              </p>
              </article>              
            </MainDesc>
          </div>
          <div className='col-md-6 d-flex p-5 justify-content-center fade-up my-5'>
            <Image priority={true} src={services_images.smain} alt='Contact Image' sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw, 33vw" style={{ minWidth: '60%', height: 'auto' }}/>
          </div>
          <div className='offset-md-0 d-flex gap-5 justify-content-center flex-wrap fade-up'>
            <ServiceContainer prior={true}
              src={services_images.design}
              title='Web & Mail Design'
              desc='Bring a website to life in terms of design and good looking is crucial for get clients attention, the sizes, combination of colors, fonts and templates matters a lot and changes according to the product idea.'
              orientation='left' link='web-design'
            />
            <ServiceContainer prior={true}
              src={services_images.logos}
              title='Logos & Logo Animations'
              desc='Bring life to you already existing projects, a Logo gives you a strong first impression and is memorable. Animations makes people realize that is hard work in background and details matters. A brand means everything for your enterprise.'
              orientation='right' link='logos-animation-brand'
            />
            <ServiceContainer
              src={services_images.statics}
              title='Static Web development'
              desc='Occasionally you might only want an informative site, no registration of clients, shopping cart, only share information, like special events, concerts, presentations. This package includes the all design process you only select the time you want the site on the web.'
              orientation='left' link='static'
            />
            <ServiceContainer
              src={services_images.dynamic}
              title='Dynamic Web Development'
              desc='Maybe you want more than a Static website or Landing page, if that’s the case, this package includes an all interactivity layer, if you or your enterprise already have a backend development but need to perform frontend, this package is for you.'
              orientation='right' link='dynamic'
            />            
            <ServiceContainer
              src={services_images.wordpress}
              title='Wordpress'
              desc='Include all the basics, user and administrator management, templates, custom designs, and plugins installation and configuration.'
              orientation='left' link='wordpress'
            />
            <ServiceContainer
             src={services_images.mantenience}
             title='Web Maintenance'
             desc='If you already have a website or web app, and you need to add new sections, functionalities, or a new looking, this service is for you.'
             orientation='right' link='maintenance'
            />
            <ServiceContainer
              src={services_images.apirest}
              title='Api Rest Application'
              desc='In case that you already have your frontend (mobile or web), I can provide you an Api Rest service for you to consume or manage data.'
              orientation='left' link='api-rest'
            />
            <ServiceContainer
              src={services_images.webapp}
              title='Web Application'
              desc='This is an all Full Stack Application, it depends of your project or idea, server and database management, and an according frontend, I require to have a series of meetings and a project contract to settle the bases.'
              orientation='right' link='web-application'
            />
          </div>
      </NoHome>
    </MainLayout>
  )
}
