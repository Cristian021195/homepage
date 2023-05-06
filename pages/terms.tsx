import { MainDesc } from '@/components/layout'
import { MainLayout, NoHome } from '../layouts/';
import Image from 'next/image';
import { terms_images } from '../myassets';
import Link from 'next/link';

export default function Terms() {
  return (
    <MainLayout title='Terms and Conditions'>
      <NoHome>
          <div className='col-md-6 d-flex fade-up flex-wrap'>
            <MainDesc title='Terms and Conditions'></MainDesc>
          </div>
          <div className='col-md-6 d-flex p-5 justify-content-center fade-up my-5'>
              <Image priority={true} src={terms_images.polmain} alt='Contact Image' sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw, 33vw" style={{ minWidth: '60%', height: 'auto' }}/>
            </div>
          <div className='col-md-6 offset-md-3 d-flex p-5 fade-up flex-wrap'>
            <section className='lh-1'>
              <article className='mb-5'>
                <h2 className='mb-2'>GENERAL TERMS AND CONDITIONS OF USE OF THE SITE</h2>
                <p>
                By continuing to browse and use this website, you agree to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern your relationship with this website.
                </p>
              </article>
              <article className='mb-5'>
                <h3 className='mb-2'>INTELLECTUAL PROPERTY</h3>
                <p>
                  The content of the pages of this website is for your general information and use only. It is subject to change without notice. All trademarks reproduced on this website, which are not the property of, or licensed to the operator, are acknowledged on the website.
                </p>
              </article>
              <article className='mb-5'>
                <h3 className='mb-2'>USE OF WEBSITE</h3>
                <p>
                  Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors, and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
                </p>
              </article>
              <article className='mb-5'>
                <h3 className='mb-2'>WEBSITE AVAILABILITY</h3>
                <p>
                  We will make every effort to ensure that this website is available at all times. However, we do not guarantee that the website or any part of it will always be available, uninterrupted, or error-free.
                </p>
              </article>
              <article className='mb-5'>
                <h3 className='mb-2'>DATA USAGE</h3>
                <p>
                By continuing using this website and functionalities involved in, you must know that your browser Will store text information that is relevant to certain functions of website.
To more information about this visit
 <Link href="/privacy" className='cyan-0'>Privacy Policy</Link> section.
                </p>
              </article>
              <article className='mb-5'>
                <h3 className='mb-2'>LINKS TO THIRD-PARTY WEBSITES</h3>
                <p>
                This website may include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the websites. We have no responsibility for the content of the linked websites.
                </p>
              </article>
              <article className='mb-5'>
                <h3 className='mb-2'>LIMITATIONS OF LIABILITY</h3>
                <p>
                  This website may include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the websites. We have no responsibility for the content of the linked websites.
                </p>
              </article>
              <article className='mb-5'>
                <h3 className='mb-2'>LAWS USED IN FREELANCE WORK PLATFORMS</h3>
                <p>
                In case of having used this website to obtain information about services, and contract it by third-party platforms like <a href='https://www.upwork.com/' target='_blank' className='cyan-0'>Upwork</a>&nbsp;, 
                <a href='https://freelancer.com' target='_blank' className='cyan-0'>Freelancer</a>, or any other platform where I’ll work in the future, I disclaim all responsibility for the terms and conditions raised by said platforms.
                </p>
              </article> 
              <article className='mb-5'>
                <h3 className='mb-2'>INDEMNIFICATION</h3>
                <p>
                You agree to indemnify, defend, and hold harmless my person from any and all third-party claims, losses, liabilities, damages, and/or costs. (including reasonable attorneys' fees and costs) arising out of your use of this website or your breach of these terms and conditions.
                </p>
              </article>              
              <article className='mb-5'>
                <h3 className='mb-2'>CHANGES TO TERMS AND CONDITIONS</h3>
                <p>
                  We reserve the right to change these terms and conditions at any time. Your continued use of this website following such changes signifies your acceptance of the new terms and conditions.
                </p>
              </article>
              <article className='mb-5'>
                <h3 className='mb-2'>GOVERNING LAW</h3>
                <p>
                  These terms and conditions shall be governed by and construed in accordance with the laws of Tucuman, Argentina, and any disputes relating to these terms and conditions shall be subject to the exclusive jurisdiction of the courts of Tucumán, Argentina.
                </p>
              </article>
              <article className='mb-5'>
                <h3 className='mb-2'>CONTACT US</h3>
                <p>
                  If you have any questions or concerns about these terms and conditions, please <Link href="/contact" className='cyan-0'>Contact</Link> me.
                </p>
              </article>
              
              <p>© 2023 Cristian Gramajo - All rights reserved.</p>
            </section>
          </div>
        </NoHome>
    </MainLayout>
  )
}
