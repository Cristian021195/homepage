import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { MainDesc } from '@/components/layout'
import { MainLayout, NoHome } from '../../layouts';
import { SquareImg } from '@/components/other';

import {GalleryPortfolio} from '../../components/ui/';
import { useState } from 'react';

import {panerita} from '../../myassets'

export default function Panerita() { // yarn remove react-grid-gallery
  const [open, setOpen] = useState(false);
  return (
    <MainLayout title='Panerita'>
      <NoHome>
          <div className='col-md-6 d-flex fade-up flex-wrap'>
            <MainDesc title='Panerita'>
              <div>
              <p className=''>
              The web system was made for a food distribution company, it handled hundreds of users and clients, where
               purchase receipts were made for those businesses that sold said foods at retail prices. 
              It also had a section for monthly sales analysis, best seller of the company, and printing data. <br /><br />
              </p>
              <br />
              <i><b>Application delivered time: </b>8 months</i>
              </div>
              <div className='mt-5'>
                <a className="btn p-2 bg-pink-0 m-2" target='_blank' href='https://lapanerita.000webhostapp.com/panerita/'>¡Try It!</a>
                <a className="btn p-2 bg-lblue-0 m-2" target='_blank' href='https://github.com/Cristian021195/panerita'>Go to repository</a>
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
                <SquareImg alt='Photo' src={panerita[5]}  />
                <SquareImg alt='Photo' src={panerita[4]}  />
                <SquareImg alt='Photo' src={panerita[2]}  />
                <button className='btn bg-pink-0 p-1' style={{position:'absolute'}} onClick={()=>setOpen(true)}>Ver Fotos</button>
              </div>
              <div>
              <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={panerita}
                render={{ slide: GalleryPortfolio }}
              />
              </div>

              <h3>Technologies and other resources</h3>
              <div className="d-flex flex-wrap p-4 gap-6 mb-4">
                <ul>
                  <li><b>Programing Languajes: </b>PHP, JavaScript, HTML + CSS</li>
                  <li><b>Database Engine: </b>MySQL</li>
                  <li><b>Deploy Platform: </b>Hostinger</li>
                  <li><b>Additional Packages: </b>mPDF, PageJS, Boostrap 5, CroppieJS</li>
                </ul>
              </div>
            </section>            
          </div>
      </NoHome>
    </MainLayout>
  )
}
