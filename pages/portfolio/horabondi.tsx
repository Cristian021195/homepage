import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { MainDesc } from '@/components/layout'
import { MainLayout, NoHome } from '../../layouts';
import { SquareImg } from '@/components/other';

import {GalleryPortfolio} from '../../components/ui/';
import { useState } from 'react';

import {horabondi} from '../../myassets'

export default function Horabondi() { // yarn remove react-grid-gallery
  const [open, setOpen] = useState(false);
  return (
    <MainLayout title='Horabondi'>
      <NoHome>
          <div className='col-md-6 d-flex fade-up flex-wrap'>
            <MainDesc title='Horabondi'>
              <article className="mt-5 lh-1">
                <p>It's an awesome and very util web app, that makes you have control about the buses schedule and travel fees. </p>
                <p>With the power of service workers and PWA implementations, this app could be acceded on an offline or bad mobile data connection. </p>
                <p>It has a very low data consumption and the main benefit of have a centralized data, that way everyone is up to date.</p>
                <br />
                <i><b>Application delivered time: </b>3 months</i>
              </article>
              <div className='mt-5'>
                <a className="btn p-2 bg-pink-0 m-2" target='_blank' href='https://horabondi.vercel.app/'>¡Try It!</a>
                <a className="btn p-2 bg-lblue-0 m-2" target='_blank' href='https://github.com/Cristian021195/horabondi'>Go to repository</a>
              </div>
            </MainDesc>
          </div>
          <div className='col-md-6 col-sm-12 d-flex fade-up row d-flex justify-content-center'>
            <section className='mt-10 row col-sm-12'>
              <div className="col-sm-12">
                <h2 className='fs-2 mb-4'>Resources</h2>
                <h3>Gallery</h3>
              </div>
              
              <div className="gallery-box d-flex justify-content-center align-items-center p-2 gap-1 my-4 br-1">
                <div className="d-flex overflow-x h-scroll overflow-y view-gallery gap-2">
                    <SquareImg prior={true} alt='Photo' src={horabondi[0]}  />
                    <SquareImg prior={true} alt='Photo' src={horabondi[1]}  />
                    <SquareImg prior={true} alt='Photo' src={horabondi[2]}  />
                </div>
                <button type="button" className='btn bg-pink-0 p-1' style={{position:'absolute'}} onClick={()=>setOpen(true)}>Ver Fotos</button>
              </div>

              <div>
              <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={horabondi}
                render={{ slide: GalleryPortfolio }}
              />
              </div>

              <h3>Technologies and other resources</h3>
              <div className="d-flex flex-wrap p-4 gap-6 mb-4">
                <ul>
                  <li><b>Framework: </b>NextJS</li>
                  <li><b>Database Engine: </b>MySQL</li>
                  <li><b>Deploy Platform: </b>Vercel</li>
                  <li><b>Backend Platform: </b>Railway + PlanetScale</li>
                  <li><b>Additional Packages: </b>NextAuth</li>
                  <li><b>Additional Info: </b>Demo service is currently is in sleep mode, if you want test it send me a mail</li>
                </ul>
              </div>
            </section>            
          </div>
      </NoHome>
    </MainLayout>
  )
}
