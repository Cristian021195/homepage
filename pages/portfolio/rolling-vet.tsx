import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { MainDesc } from '@/components/layout'
import { MainLayout, NoHome } from '../../layouts';
import { SquareImg } from '@/components/other';

import {GalleryPortfolio} from '../../components/ui/';
import { useState } from 'react';

import {rollvet} from '../../myassets'

export default function Notas() { // yarn remove react-grid-gallery
  const [open, setOpen] = useState(false);
  return (
    <MainLayout title='Notas'>
      <NoHome>
          <div className='col-md-6 d-flex fade-up flex-wrap'>
            <MainDesc title='Notas'>
              <article className="mt-5 lh-1">
              <p>It is a website to manage shifts for those clients who need care for their pets.</p>
              <p>Made with Bootstrap, React, NodeJS and MongoDB. This application was made for learning purposes.</p>
              <i><b>Application delivered time: </b>1 month</i><br />
              </article>
              <div className='mt-5'>
                <a className="btn p-2 bg-pink-0 m-2" target='_blank' href='https://rolling-veterinaria-frontend.vercel.app/'>Try It</a>
                <a className="btn p-2 bg-lblue-0 m-2" target='_blank' href='https://github.com/orgs/ProyectoFinal-Rc/repositories'>Go to repository</a>
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
                  <SquareImg prior={true} alt='Photo' src={rollvet[0]}  />
                  <SquareImg prior={true} alt='Photo' src={rollvet[1]}  />
                  <SquareImg prior={true} alt='Photo' src={rollvet[2]}  />
                  <SquareImg prior={true} alt='Photo' src={rollvet[3]}  />
                </div>
                <button type="button" className='btn bg-pink-0 p-1' style={{position:'absolute'}} onClick={()=>setOpen(true)}>See Pictures</button>
              </div>

              <div>
              <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={rollvet}
                render={{ slide: GalleryPortfolio }}
              />
              </div>

              <h3>Technologies and other resources</h3>
              <div className="d-flex flex-wrap p-4 gap-6 mb-4">
                <ul>
                  <li><b>Programing Languajes: </b>
                    <span translate="no">JavaScript + HTML + CSS</span></li>
                  <li><b>Libraries: </b>
                    <span translate="no">React JS and React Bootstrap</span></li>
                  <li><b>Database Engine: </b>
                    <span translate="no">Mongo DB,  Mongo DB Atlas</span></li>
                  <li><b>Deploy Platform: </b>
                    <span translate="no">Vercel</span></li>
                </ul>
              </div>
            </section>            
          </div>
      </NoHome>
    </MainLayout>
  )
}
