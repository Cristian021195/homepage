import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { MainDesc } from '@/components/layout'
import { MainLayout, NoHome } from '../../layouts';
import { SquareImg } from '@/components/other';

import {GalleryPortfolio} from '../../components/ui/';
import { useState } from 'react';

import {listacompras} from '../../myassets'

export default function ListaCompras() { // yarn remove react-grid-gallery
  const [open, setOpen] = useState(false);
  return (
    <MainLayout title='ListaCompras'>
      <NoHome>
          <div className='col-md-6 d-flex fade-up flex-wrap'>
            <MainDesc title='ListaCompras'>
              <article className="mt-5 lh-1">
                <p>This application was made for a single personal purpose, sometimes I just need a simple 
                application to have control of my purchases in the supermarket, without having to fill the entire screen with advertising.</p>
                <i><b>Application delivered time: </b>1 week</i><br />
              </article>
              <div className='mt-5'>
                <a className="btn p-2 bg-pink-0" target='_blank' href='https://listacompras-omega.vercel.app/'>Try It</a>
                <a className="btn p-2 bg-lblue-0 m-2" target='_blank' href='https://github.com/Cristian021195/compras'>Go to repository</a>
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
                <SquareImg prior={true} alt='Photo' src={listacompras[2]}  />
                <SquareImg prior={true} alt='Photo' src={listacompras[1]}  />
                <SquareImg prior={true} alt='Photo' src={listacompras[0]}  />
                </div>
                <button type="button" className='btn bg-pink-0 p-1' style={{position:'absolute'}} onClick={()=>setOpen(true)}>See Pictures</button>
              </div>

              <div>
              <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={listacompras}
                render={{ slide: GalleryPortfolio }}
              />
              </div>

              <h3>Technologies and other resources</h3>
              <div className="d-flex flex-wrap p-4 gap-6 mb-4">
                <ul>
                  <li><b>Library: </b>
                  <span translate="no">ReactJS</span></li>
                  <li><b>Programing Languajes: </b>
                  <span translate="no">JavaScript + HTML + CSS</span></li>
                  <li><b>Database Engine: </b>
                  <span translate="no">Indexed Database</span> (client side only)</li>
                  <li><b>Deploy Platform: </b>
                  <span translate="no">Vercel</span></li>
                  <li><b>Additional Packages: </b>
                  <span translate="no">React Router DOM, uuid, Dexie JS, dexie-react-hooks, react-qr-code</span></li>
                </ul>
              </div>
            </section>            
          </div>
      </NoHome>
    </MainLayout>
  )
}
