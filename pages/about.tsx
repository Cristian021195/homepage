import { MainDesc } from '@/components/layout'
import { MainLayout, NoHome } from '../layouts/';
import Image from 'next/image';
import { copiarTexto } from '@/utils';


export default function About() {
  return (
    <MainLayout title='About Me'>
      <NoHome>
          <div className='col-md-6 d-flex fade-up flex-wrap'>
            <MainDesc title='About me'>
              <article className='lh-1 mt-5'>
                <p>I'm a Web Designer and Web Programmer with years of experience.</p>
                <p>I had my degree in National University of Tucumán, Argentina. Besides that many courses, online practicing and personal projects that made me
                grow in this work. </p>
                <p>Since then i've been working from small projects to web systems, my strong habilities is to reach good looking website, great web performance for any project, and good seo practices for putting you at the top</p>
                <p>If you are here, it's probably because you need a really good website, and definetly i could help you with that.</p>
                <p>A little reminder it's that for me is not only make you an website or web application, i like to be clear with all my clients at first, 
                they are not paying for the website only, besides they pay for attention, good design, planification, and orientation.</p>
                <div className='text-center mt-5'>
                  <button className='btn p-2 bg-pink-0' onClick={(e:any)=>{
                    if(copiarTexto('cristiangramajo015@gmail.com')){
                      e.target.textContent = 'Mail Me!, Copied!';
                    }
                  }}>Mail Me!</button>
                </div>
              </article>
            </MainDesc>
          </div>
          <div className='col-md-6 d-flex fade-up justify-content-sm-center md-sm-center'>
          <section className="d-flex flex-wrap mt-5 justify-content-center">
              <div className="custom-grid col-12 offset-md-2 col-md-8">
                  <div id="caja5">
                      <Image src="/images/vertical.webp" alt="vertical" height={400} width={200} className='br-0 hover-individual' style={{objectFit:'contain'}}/>
                  </div>
                  <div id="caja6" style={{backgroundImage: "url('/images/horizontal.webp')", backgroundRepeat: "no-repeat", backgroundSize: 'cover'}} className="p-3 hover-individual">
                  </div>
                  <div id="caja7" className="p-3 hover-individual br-0">
                      <h2>Hola, Soy Cristian</h2>
                  </div>
              </div>
            </section>            
          </div>
        </NoHome>
    </MainLayout>
  )
}
