import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { MainDesc } from '@/components/layout'
import { MainLayout, NoHome } from '../../layouts';
import { SquareImg } from '@/components/other';

import {GalleryPortfolio} from '../../components/ui/';
import { useState } from 'react';

import {escritos} from '../../myassets'

export default function Escritos() { // yarn remove react-grid-gallery
  const [open, setOpen] = useState(false);
  return (
    <MainLayout title='Escritos'>
      <NoHome>
          <div className='col-md-6 d-flex fade-up flex-wrap'>
            <MainDesc title='Escritos'>
              <article className="mt-5 lh-1">
                <p>It is a React PWA, with a very simple design, using the React Router library + Redux. Hosted on Firebase, 
                This application was made for testing purposes, consumig random poems from an external api poemist.com (not longer avaible), 
                and notifying users when a new poem was uploaded.</p>
              <br />
              <i><b>Application delivered time: </b>1 week</i><br />
              </article>
              <div className='mt-5'>
                <a className="btn p-2 bg-pink-0" target='_blank' href='https://escritos-f9d8d.web.app/'>Try It</a>
                <a className="btn p-2 bg-lblue-0 m-2" target='_blank' href='https://github.com/Cristian021195/escritos-fontend'>Go to repository</a>
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
                  <SquareImg prior={true} alt='Photo' src={escritos[0]}  />
                  <SquareImg prior={true} alt='Photo' src={escritos[1]}  />
                  <SquareImg prior={true} alt='Photo' src={escritos[2]}  />
                </div>
                <button type="button" className='btn bg-pink-0 p-1' style={{position:'absolute'}} onClick={()=>setOpen(true)}>See Pictures</button>
              </div>
              
              <div>
              <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={escritos}
                render={{ slide: GalleryPortfolio }}
              />
              </div>

              <h3>Technologies and other resources</h3>
              <div className="d-flex flex-wrap p-4 gap-6 mb-4">
                <ul>
                  <li><b>Library: </b>
                  <span translate="no">ReactJS</span>
                  </li>
                  <li><b>Programing Languajes: </b>
                    <span translate="no">TypeScript + HTML + CSS</span>
                  </li>
                  <li><b>Database Engine: </b>None, only api consuming data</li>
                  <li><b>Deploy Platform: </b>Firebase Hosting</li>
                  <li><b>Additional Packages: </b>
                    <span translate="no">React Mapbox, Openweathermap, Redux, React OneSignal</span>
                  </li>
                </ul>
              </div>
            </section>            
          </div>
      </NoHome>
    </MainLayout>
  )
}
