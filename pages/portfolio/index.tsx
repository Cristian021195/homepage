import { MainDesc } from '@/components/layout'
import { MainLayout, NoHome } from '../../layouts';
import { Card, HorizontalCard } from '@/components/other';
import Image from 'next/image';
import { portfolio_main } from '../../myassets';
import { IconTooltip } from '../../components/other/IconTooltip';


export default function Portfolio() {
  return (
    <MainLayout title='Portfolio'>
      <NoHome>
          <div className='col-md-6 d-flex fade-up flex-wrap'>
            <MainDesc title='Portfolio'>
              <article className='lh-1 mt-5'>
                <p>In case you need to see my work, throughout this section you will find both web projects, logo designs, and repositories where you can see deeply.</p>
              </article>
            </MainDesc>
          </div>
          <div className='col-md-6 d-flex p-5 justify-content-center fade-up my-5'>
            <Image priority={true} src={portfolio_main.pmain} alt='Contact Image' sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw, 33vw" style={{ minWidth: '60%', height: 'auto' }}/>
          </div>
          
          <div className='col-md-10 offset-md-1 py-0 fade-up'>
            <h2 className='fs-2 p-4'>Web Projects</h2>
            <div className="d-flex gap-10 horizontal-sm h-scroll p-2">
              <Card prior={true} bgTop='#00838f38' title='Horabondi' desc='Web App for bus schedule and prices' link='/portfolio/horabondi' image={'https://cristian021195.github.io/portfolio/img/svg/horabondi.svg'} maxWidth={240}/>
              <Card prior={true} bgTop='#a14b3240' title='Panerita' desc='Web system for stock, sales, clients, users, and printing analytics' link='/portfolio/panerita' image={'https://cristian021195.github.io/portfolio/img/svg/panerita.svg'} maxWidth={240}/>
              <Card prior={true} bgTop='#ffe98f4f' title='Notas' desc='Note web app offline' link='/portfolio/notas' image={'https://cristian021195.github.io/portfolio/img/svg/notas.svg'} maxWidth={240}/>
              <Card bgTop='#a6d5fa8c' title='Climap' desc='Weather and Location app' link='/portfolio/climap' image={'https://cristian021195.github.io/portfolio/img/svg/climap.svg'} maxWidth={240}/>
              <Card bgTop='#e6a52e47' title='Romano' desc='Nice web page for a bar' link='/portfolio/romano' image={'https://cristian021195.github.io/portfolio/img/svg/romano.svg'} maxWidth={240}/>
              <Card bgTop='#f1f1f1' title='Escritos' desc='Poems web app' link='/portfolio/escritos' image={'https://cristian021195.github.io/portfolio/img/svg/escritos.svg'} maxWidth={240}/>
              <Card bgTop='#f0629247' title='Colores' desc='Useful web app for take quickly colors' link='/portfolio/colores' image={'https://cristian021195.github.io/portfolio/img/svg/color_wheel.svg'} maxWidth={240}/>
              <Card bgTop='#ff7f5042' title='ListaCompras' desc='Useful web app for have money control while shopping' link='/portfolio/listacompras' image={'https://cristian021195.github.io/portfolio/img/svg/lista-compras.svg'} maxWidth={240}/>
              <Card bgTop='#ffb6553b' title='Radio App' desc='Web app to listen radio through url resource media' link='/portfolio/radioapp' image={'https://cristian021195.github.io/portfolio/img/svg/radio-app.svg'} maxWidth={240}/>
              <Card bgTop='#ff7f5042' title='Rolling Vet' desc='Web App for vet asistance' link='/portfolio/rolling-vet' image={'https://cristian021195.github.io/portfolio/img/svg/rolling-vet.svg'} maxWidth={240}/>
            </div>
            <h2 className='fs-2 mt-5 p-4'>Logos and Animations</h2>
            <div className="d-flex gap-10 flex-wrap justify-content-center p-2">
                <IconTooltip img="https://cristian021195.github.io/portfolio/img/svg/horabondi.svg" title='HoraBondi'/>
                <IconTooltip img="https://cristian021195.github.io/portfolio/img/svg/panerita.svg" title='La Panerita'/>
                <IconTooltip img="https://cristian021195.github.io/portfolio/img/svg/notas.svg" title='Notas'/>
                <IconTooltip img="https://cristian021195.github.io/portfolio/img/svg/climap.svg" title='Climap'/>
                <IconTooltip img="https://cristian021195.github.io/portfolio/img/svg/romano.svg" title='Romano Bar'/>
                <IconTooltip img="https://cristian021195.github.io/portfolio/img/svg/escritos.svg" title='Escritos'/>
                <IconTooltip img="https://cristian021195.github.io/portfolio/img/svg/color_wheel.svg" title='Colores App'/>
                <IconTooltip img="https://cristian021195.github.io/portfolio/img/svg/lista-compras.svg" title='ListaCompras'/>
                <IconTooltip img="https://cristian021195.github.io/portfolio/img/svg/radio-app.svg" title='RadioApp'/>
                <IconTooltip img="https://cristian021195.github.io/portfolio/img/svg/horabondi-beta.svg" title='HoraBondi (Beta)'/>

                <IconTooltip img="https://cristian021195.github.io/portfolio/img/logos/clogo1.svg" title='C Square Pipes'/>
                <IconTooltip img="https://cristian021195.github.io/portfolio/img/logos/clogo2.svg" title='Purple Box'/>
                <IconTooltip img="https://cristian021195.github.io/portfolio/img/logos/clogo3.svg" title='Favicon empty'/>
                <IconTooltip img="https://cristian021195.github.io/portfolio/img/logos/clogo4.svg" title='C-xv Logo'/>
                <IconTooltip img="https://cristian021195.github.io/portfolio/img/logos/clogo5.svg" title='C bold'/>
                <IconTooltip img="https://cristian021195.github.io/portfolio/img/logos/clogo6.svg" title='C logo'/>
                <IconTooltip img="https://cristian021195.github.io/portfolio/img/logos/clogo7.svg" title='C triangle'/>
                <IconTooltip img="https://cristian021195.github.io/portfolio/img/logos/clogo8.svg" title='C Arrow'/>
                <IconTooltip img="https://cristian021195.github.io/portfolio/img/logos/clogo9.svg" title='C Angle arrow'/>
                <IconTooltip img="https://cristian021195.github.io/portfolio/img/logos/clogo10.svg" title='C dashed triangle'/>
                <IconTooltip img="https://cristian021195.github.io/portfolio/img/logos/clogo11.svg" title='C colorized'/>
                <IconTooltip img="https://cristian021195.github.io/portfolio/img/logos/clogo12.svg" title='C weird'/>
                <IconTooltip img="https://cristian021195.github.io/portfolio/img/logos/clogo13.svg" title='C purple tirangles'/>
                <IconTooltip img="https://cristian021195.github.io/portfolio/img/logos/clogo14.svg" title='C triangles'/>
                <IconTooltip img="https://cristian021195.github.io/portfolio/img/logos/clogo15.svg" title='Website Logo'/>
                <IconTooltip img="https://cristian021195.github.io/portfolio/img/logos/clogo16.svg" title='Favicon'/>

                <IconTooltip img="https://cristian021195.github.io/portfolio/img/others/box.svg" title='Box'/>
                <IconTooltip img="https://cristian021195.github.io/portfolio/img/others/headphones.svg" title='Headphones'/>
                <IconTooltip img="https://cristian021195.github.io/portfolio/img/others/justice-building.svg" title='Justice Building'/>
                <IconTooltip img="https://cristian021195.github.io/portfolio/img/others/mail.svg" title='Mail'/>
                <IconTooltip img="https://cristian021195.github.io/portfolio/img/others/medal.svg" title='Medal'/>
                <IconTooltip img="https://cristian021195.github.io/portfolio/img/others/monitor.svg" title='Monitor'/>
                <IconTooltip img="https://cristian021195.github.io/portfolio/img/others/monitor-off.svg" title='Monitor Off'/>
                <IconTooltip img="https://cristian021195.github.io/portfolio/img/others/cuaderno.svg" title='Notebook'/>
                <IconTooltip img="https://cristian021195.github.io/portfolio/img/others/notes.svg" title='Notes'/>
                <IconTooltip img="https://cristian021195.github.io/portfolio/img/others/padlock.svg" title='Padlock'/>
                <IconTooltip img="https://cristian021195.github.io/portfolio/img/others/plant.svg" title='Plant'/>
                <IconTooltip img="https://cristian021195.github.io/portfolio/img/others/server.svg" title='Working Server'/>
                <IconTooltip img="https://cristian021195.github.io/portfolio/img/others/smartphone.svg" title='Smartphone'/>
                <IconTooltip img="https://cristian021195.github.io/portfolio/img/others/tool-key.svg" title='Tool Key'/>
                <IconTooltip img="https://cristian021195.github.io/portfolio/img/favicon.svg" title='Portfolio'/>
            </div>
            <h2 className='fs-2 mt-5 p-4'>Api Rest Projects</h2>
            <div className="d-flex gap-10 horizontal-sm h-scroll p-2">
              <HorizontalCard title='Escritos API' desc="Node JS + Express" 
                image='https://cristian021195.github.io/portfolio/img/svg/escritos.svg' link='https://github.com/Cristian021195/escritos-backend'/>
              <HorizontalCard title='Horabondi API' desc="Node JS + Express + JWT Authentication Node JS + Express + JWT Authentication" 
                image='https://cristian021195.github.io/portfolio/img/svg/horabondi.svg' link='https://github.com/Cristian021195/horabondi-backend'/>
              <HorizontalCard title='Escritos API' desc="Node JS + Express" 
                image='https://cristian021195.github.io/portfolio/img/svg/escritos.svg' link='https://github.com/Cristian021195/escritos-backend'/>
              <HorizontalCard title='Rolling Vet' desc="Node JS + Express + Mongo" 
                image='https://cristian021195.github.io/portfolio/img/svg/rolling-vet.svg' link='https://github.com/ProyectoFinal-Rc/RollingVeterinaria-Backend'/>
            </div>
          </div>
      </NoHome>
    </MainLayout>
  )
}
/*


              <Card title='Horabondi' desc='Node JS + Express + JWT Authentication' link='https://github.com/Cristian021195/horabondi-backend' target='_self' maxWidth={180}  image={'https://cristian021195.github.io/portfolio/img/svg/horabondi.svg'}/>
              <Card title='Escritos' desc='Node JS + Express' link='https://github.com/Cristian021195/escritos-backend' maxWidth={180}  image={'https://cristian021195.github.io/portfolio/img/svg/escritos.svg'}/>
*/