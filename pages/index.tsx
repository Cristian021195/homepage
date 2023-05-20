import Image from 'next/image'
import { MainLayout } from '@/layouts'
import { copiarTexto } from '@/utils'


export default function Home() {
  return (
    <MainLayout title='Home'>
      <section id='main-section' className='row'>
          <div className='col-md-12 col-lg-8 pt-5 fade-up '>
            <section className="d-flex flex-wrap main-hello">
              <div className="custom-grid offset-md-1 col-lg-8 col-md-10 p-3">
                  <div id="caja1" className="p-3 hover-individual br-0">
                      <h2>Hola, Soy Cristian</h2>
                  </div>
                  <div id="caja2" style={{backgroundImage: "url('/images/horizontal.webp')", backgroundRepeat: "no-repeat", backgroundSize: 'cover'}} className="p-3 hover-individual br-0">
                  </div>
                  <div id="caja3">
                      <Image priority={true} src="/images/vertical.webp" alt="vertical" height={400} width={200} className='br-0 hover-individual' style={{objectFit:'contain'}}/>
                  </div>
                  <div id="caja4" className="p-3">
                      <h2 className='fs-2'>Hello there, I'm Cristian.</h2>
                      <p className='my-4 fs-1'>I'm a web designer and developer.</p>
                      <p className='mb-4'>
                      Graduated from National University of Tucumán, Argentina. Since then, I’ve working hard improving and adopting new web technologies to get the best performance in any project.
                      </p>
                      <a href='https://www.linkedin.com/in/cristian021195' target='_blank' className='btn bg-blue-0 p-2' translate='no'>Linkedin</a>
                      <button type='button' className='btn bg-pink-0 p-2 ms-4' onClick={(e:any)=>{
                        if(copiarTexto('cristiangramajo015@gmail.com')){
                          e.target.textContent = 'Copy Mail, copied!';
                        }else{
                          e.target.textContent = 'Copy Mail, error to copy!';
                        }
                      }}>Mail Me</button>
                  </div>
              </div>
            </section>
          </div>
          <div className='col-md-4 pt-5 bg-cyan-0 d-flex align-content-center justify-content-center px-5 d-none d-lg-block'>
            <div className='mt-15 fade-up'>
              <h1 className='fs-4 white-0'>Web development with a personal touch</h1><br />
              <p className='cyan-5 fs-1 mt-5 lh-0'><i>
                "Crafting beautiful and functional websites"<br />
              "Offering solutions adapted to today's needs"<br />
              "Transforming ideas into stunning websites"<br />
              "Fastest websites as posible"</i></p>
            </div>
          </div>
        </section>
        <section className='row'>
          <div className='container col-md-12 col-lg-5 offset-lg-1 my-5'>
          </div>
          <div className='col-md-4 offset-md-1 bg-cyan-0 d-none d-lg-block'></div>
        </section>
        
    </MainLayout>
  )
}
/*
<section className='row'>
          <div className='container col-md-12 col-lg-5 offset-lg-1 my-5'>
          </div>
          <div className='col-md-4 offset-md-1 bg-cyan-0 d-none d-lg-block'></div>
        </section>*/