import React from 'react'
import Table from '../Table/Table'

export default function Main() {
  return ( <>
        <div className=' back'>
        <div className='wid'>
        <section className='container'>
        <div className="text-center ss">
            <h1>Welcome in SBS</h1>
            <h3>
            How we help?
            </h3>
            <h5>We’re your partner in innovation.</h5>
            <p>Sustainability is a journey with a multifaceted roadmap. Turning plans into progress and hype into tangible results demands ambition, innovation, and a wealth of transformative expertise. We assist companies in rapidly scaling effective solutions, driving growth while reducing carbon emissions,
               and transforming sustainability into a competitive advantage and a foundation for resilience.</p>
        </div>
        </section>
        </div>
    </div>
             <section className='sec2'>
        <div className="container py-4">
        <h2>
        Sustainability is essential.
        Here’s how we’re partnering with clients to bring it to life.
        </h2>
        <div className="row p-4">
            <div className="col-md-4 card">
                <h3>
                With gen AI, helping green businesses strengthen our ‘blue economy’
                </h3>
                <p>
                Leveraging generative AI technologies, McKinsey is supporting One Ocean Foundation
                in building a precise understanding of how businesses are contributing to ocean sustainability.
                </p>
            </div>
            <div className="col-md-4 card">
                <h3>
                Building a next-generation carbon platform to accelerate the path to net zero
                </h3>
                <p>
                TPG partnered with McKinsey to launch Rubicon Carbon, a carbon credit management and investment
                firm dedicated to helping enterprises reach their sustainability objectives.
                </p>
            </div>
            <div className="col-md-4 card">
                <h3>
                How a global components manufacturer built an ambitious carbon reduction roadmap
                </h3>
                <p>
                With McKinsey's support, Danfoss is working to decarbonize supply chains in some of the world’s most emission-intensive sectors.
                </p>
            </div>
        </div>
        </div>
        </section> 
        <div className=''>
        <Table/>
        </div>
  </>

  )
}
