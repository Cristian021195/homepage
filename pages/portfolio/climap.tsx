import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { MainDesc } from '@/components/layout'
import { MainLayout, NoHome } from '../../layouts';
import { SquareImg } from '@/components/other';

import {GalleryPortfolio} from '../../components/ui/';
import { useState } from 'react';

import {climap} from '../../myassets'

export default function Climap() { // yarn remove react-grid-gallery
  const [open, setOpen] = useState(false);
  return (
    <MainLayout title='Climap'>
      <NoHome>
          <div className='col-md-6 d-flex fade-up flex-wrap'>
            <MainDesc title='Climap'>
              <div>
              <p className=''>
                It is a React PWA, with a very simple design, using the React Router library and hosted on Firebase, 
                it makes use of the Openweathermap and Mapbox APIs. Made with React JS, and CSS, this application was made for testing purposes.<br /><br />
              <br />
              <i><b>Application delivered time: </b>4 days</i><br /></p>
              </div>
              <div className='mt-5'>
                <a className="btn p-2 bg-pink-0" target='_blank' href='https://climap-6e45e.web.app/'>¡Try It!</a>
                <a className="btn p-2 bg-lblue-0 m-2" target='_blank' href='https://github.com/Cristian021195/climap'>Go to repository</a>
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
                <SquareImg alt='Photo' src={climap[0]}  />
                <SquareImg alt='Photo' src={climap[1]}  />
                <SquareImg alt='Photo' src={climap[2]}  />
                <button className='btn bg-pink-0 p-1' style={{position:'absolute'}} onClick={()=>setOpen(true)}>Ver Fotos</button>
              </div>
              <div>
              <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={climap}
                render={{ slide: GalleryPortfolio }}
              />
              </div>

              <h3>Technologies and other resources</h3>
              <div className="d-flex flex-wrap p-4 gap-6 mb-4">
                <ul>
                  <li><b>Library: </b>ReactJS</li>
                  <li><b>Programing Languajes: </b>TypeScript + HTML + CSS</li>
                  <li><b>Database Engine: </b>None, only api consuming data</li>
                  <li><b>Deploy Platform: </b>Firebase Hosting</li>
                  <li><b>Additional Packages: </b>React Mapbox, Openweathermap</li>
                </ul>
              </div>
            </section>            
          </div>
      </NoHome>
    </MainLayout>
  )
}
