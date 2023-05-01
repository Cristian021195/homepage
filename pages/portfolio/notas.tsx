import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { MainDesc } from '@/components/layout'
import { MainLayout, NoHome } from '../../layouts';
import { SquareImg } from '@/components/other';

import {GalleryPortfolio} from '../../components/ui/';
import { useState } from 'react';

import {notas} from '../../myassets'

export default function Notas() { // yarn remove react-grid-gallery
  const [open, setOpen] = useState(false);
  return (
    <MainLayout title='Notas'>
      <NoHome>
          <div className='col-md-6 d-flex fade-up flex-wrap'>
            <MainDesc title='Notas'>
              <div>
              <p className=''>
              It is a PWA for offline use, with the PouchDB library and use of a dynamic table that I designed. 
              Made with Bootstrap, HTML and JS. This application was made for testing purposes.<br /><br />
              <br />
              <i><b>Application delivered time: </b>2 days</i><br /></p>
              </div>
              <div className='mt-5'>
                <a className="btn p-2 bg-pink-0 m-2" target='_blank' href='https://cristian021195.github.io/notas/'>¡Try It!</a>
                <a className="btn p-2 bg-lblue-0 m-2" target='_blank' href='https://github.com/Cristian021195/notas'>Go to repository</a>
              </div>
            </MainDesc>
          </div>
          <div className='col-md-6 col-sm-12 d-flex fade-up row d-flex justify-content-center'>
            <section className='mt-10 row col-sm-12'>
              <div className="col-sm-12">
                <h2 className='fs-2 mb-4'>Resources</h2>
                <h3>Gallery</h3>
              </div>
              
              <div className="d-flex overflow-x h-scroll p-2 overflow-y gap-1 my-4 view-gallery br-1">
                <SquareImg prior={true} alt='Photo' src={notas[0]}  />
                <SquareImg prior={true} alt='Photo' src={notas[1]}  />
                <SquareImg prior={true} alt='Photo' src={notas[2]}  />
                <button className='btn bg-pink-0 p-1' style={{position:'absolute'}} onClick={()=>setOpen(true)}>Ver Fotos</button>
              </div>
              <div>
              <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={notas}
                render={{ slide: GalleryPortfolio }}
              />
              </div>

              <h3>Technologies and other resources</h3>
              <div className="d-flex flex-wrap p-4 gap-6 mb-4">
                <ul>
                  <li><b>Programing Languajes: </b>JavaScript + HTML + CSS</li>
                  <li><b>Database Engine: </b>Indexed Database (client side only)</li>
                  <li><b>Deploy Platform: </b>Github Pages</li>
                  <li><b>Additional Packages: </b>Pouch DB, Boostrap 5</li>
                </ul>
              </div>
            </section>            
          </div>
      </NoHome>
    </MainLayout>
  )
}
