import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { MainDesc } from '@/components/layout'
import { MainLayout, NoHome } from '../../layouts';
import { SquareImg } from '@/components/other';

import {GalleryPortfolio} from '../../components/ui/';
import { useState } from 'react';

import {colores} from '../../myassets'

export default function Colores() { // yarn remove react-grid-gallery
  const [open, setOpen] = useState(false);
  return (
    <MainLayout title='Colores'>
      <NoHome>
          <div className='col-md-6 d-flex fade-up flex-wrap'>
            <MainDesc title='Colores'>
              <article className="mt-5 lh-1">
              <p>This application was made for a single personal purpose, sometimes i just need a simple color palette quickly as possible and copy the 
              color. It is a PWA for offline use, made with HTML, CSS and JS only.</p>
              <br />
              <i><b>Application delivered time: </b>1 day</i><br />
              </article>
              <div className='mt-5'>
                <a className="btn p-2 bg-pink-0" target='_blank' href='https://cristian021195.github.io/notas/'>¡Try It!</a>
                <a className="btn p-2 bg-lblue-0 m-2" target='_blank' href='https://github.com/Cristian021195/color-palette'>Go to repository</a>
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
                  <SquareImg prior={true} alt='Photo' src={colores[2]}  />
                  <SquareImg prior={true} alt='Photo' src={colores[0]}  />
                  <SquareImg prior={true} alt='Photo' src={colores[1]}  />
                </div>
                <button type="button" className='btn bg-pink-0 p-1' style={{position:'absolute'}} onClick={()=>setOpen(true)}>Ver Fotos</button>
              </div>
              <div>
              <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={colores}
                render={{ slide: GalleryPortfolio }}
              />
              </div>

              <h3>Technologies and other resources</h3>
              <div className="d-flex flex-wrap p-4 gap-6 mb-4">
                <ul>
                  <li><b>Programing Languajes: </b>JavaScript + HTML + CSS</li>
                  <li><b>Deploy Platform: </b>Github Pages</li>
                </ul>
              </div>
            </section>            
          </div>
      </NoHome>
    </MainLayout>
  )
}
