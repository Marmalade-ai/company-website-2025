import * as React from 'react'
// import Layout from '../components/layout'
// import { navigate } from 'gatsby'
// import { StaticImage } from 'gatsby-plugin-image'

export const Head = () => (
  <> 
    <meta charSet="utf-8" />
    <title>Professional Networking virtually - Why?</title>
    <meta 
      name="description"
      content="Why do this? We started with user research into the common problems people in various 
      career stages and professions encounter in networking:
      1) Missed opportunity: You go to an event and learn later there was someone there you should have met.
      2) Staying in touch: People you know from the past have no idea what you are doing now. They could be helpful, but they don't know.
      3) Inefficiency: Networking can be powerful. But there's only so much time you can put into it.
      We found each other through user research into networking, then connected remotely, and developed a prototype in Figma.
      Software development prototyping for a web subscription service was done in Vue with a GCP backend. We wanted an exceptionally easy-to-use,
      &quot;responsive&quot; interaction that could work equally well on phones, laptops, and desktops. We wanted
      to see how we could solve problems like the above in networking, and then see where that led."
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </>
);

const NewAboutPage = () => {
  return (
    <body class="grid place-items-center min-h-screen"><p>nothing here</p>
    
    <div class="p-4 max-w-5xl grid gap-4 sm:grid-cols-2">
      <h1 class="text-4xl font-extrabold">Grid layout with Tailwind CSS.</h1>

      <p>Lorem ipsum dolor amet consectetur adipiscing elit. Distinctio hic itaque alias officilis. Distinctio hic itaque alias officilis. Distinctio hic itaque alias officilis. Distinctio hic itaque alias officilis. </p>
 
      <div class="h-16 bg-blue-500"></div>
      <div class="h-16 bg-blue-500"></div>
      <div class="h-16 bg-pink-500"></div>
      <div class="h-16 bg-blue-500"></div>
      <div class="h-16 bg-pink-500"></div>
      <div class="h-16 bg-blue-500"></div>
      <div class="h-16 bg-blue-500"></div>
      <div class="h-16 bg-pink-500"></div>

      <p>Lorem ipsum dolor amet consectetur adipiscing elit. Distinctio hic itaque alias officilis. Distinctio hic itaque alias officilis. Distinctio hic itaque alias officilis. Distinctio hic itaque alias officilis. </p>

    </div>
    
    </body>

    // <Layout>
    //   <main><h1>About Marmalade AI, Inc.</h1>
    //     <p>Hi there! We're the proud operators of this site, built with Gatsby and Tailwind. Original development work by Justin Blake and Jim Tyhurst. 
    //       Updated in 2023 by Craig Fisk.</p>

    //     <div>
    //       <h2>Founders</h2>
    //       <div>
    //         <p>Why do this? We started with user research into the common problems people encounter in networking:</p><br/>
    //         <ol class="list-decimal list-inside">
    //         <li><u>Missed opportunity</u>: You go to an event and learn later there was someone there you should have met.</li>
    //         <li><u>Staying in touch</u>: People you know from the past have no idea what you are doing now. They could be helpful, but they don't know.</li>
    //         <li><u>Inefficiency</u>: Networking can be powerful. But there's only so much time you can put into it.</li>
    //         </ol>
    //         <br/>
    //         <p>We found each other through user research into networking, connected remotely, and developed a prototype in Figma.
    //         Our development aimed for easy-to-use, <i>responsive</i> interaction that could work equally well on phones, laptops, and desktops.
    //         </p><br/><br/>
    //       </div>

    //       {/* <div className="grid grid-cols-2"> */}
    //       <div class="grid grid-rows-2 justify-items-start border-spacing-0 py-2">

    //         <div class="grid grid-cols-4 justify-items-start">
    //           <div class="bg-red-500 h-4 w-6"></div>
    //           <div class="bg-blue-500 h-8 w-6"></div>
    //           <div class="bg-green-500 h-12 w-6"></div>
    //           <div class="bg-yellow-500 h-16 w-6"></div>
    //         </div>
            
    //         <div class="grid grid-cols-4 justify-items-start border-spacing-0">

    //           <div class="grid grid-rows-2 justify-items-start">
    //             <div class="border-spacing-0">
    //               <StaticImage
    //                 src="../../images/craig_fisk_headshot_150.jpg"
    //                 alt="Photo of Craig Fisk."
    //                 title="Craig Fisk, CEO"
    //                 width="150"
    //                 height="150"
    //               />
    //             </div>
    //             <div class="border-spacing-0 bg-red-500 sm:bg-green-500 md:bg-yellow-500 xl:bg-blue-500">
    //               <h3>Craig Fisk</h3>
    //               <p className="cardSubHeading text-sm slate px-2">CEO<br/>
    //                 Series A mobile CRM, new software products/channels at Intel.
    //                 Chicago Booth MBA. (San Jose, CA).</p>
    //             </div>
    //           </div>  

    //           <div class="grid grid-rows-2 justify-items-start">
    //             <div class="border-spacing-0">
    //               <StaticImage
    //                 // className="mb-4 w-16 h-16 rounded-lg shadow-lg	"
    //                 src="../../images/jim_tyhurst_headshot_150.jpg"
    //                 alt="Photo of Jim Tyhurst."
    //                 title="Jim Tyhurst, CTO"
    //                 width="150"
    //                 height="150"
    //               />
    //             </div>
    //             <div class="px-0">
    //               <h3>Jim Tyhurst</h3>
    //               <p className="cardSubHeading text-sm slate px-2">CTO<br />
    //               Software architect, Machine Learning / Natural Language
    //               Processing (ML/NLP), Object Computing, Inc. UCLA PhD. (Portland, OR).</p>
    //             </div>
    //           </div>  

    //           <div class="grid grid-rows-2 justify-items-start">
    //             <div class="border-spacing-0">
    //               <StaticImage
    //                 // className="mb-4 w-16 h-16 rounded-lg shadow-lg	"
    //                 src="../../images/vivian_tran_headshot_150.jpg"
    //                 alt="Photo of Vivian Tran, Marketing Advisor."
    //                 title="Vivian Tran, Marketing Advisor"
    //                 width="150"
    //                 height="150"
    //               />
    //             </div>
    //             <div>
    //               <h3>Vivian Tran</h3>
    //               <p className="cardSubHeading text-sm slate px-2">Marketing Advisor<br />
    //               New segment marketing, healthcare focus marketing manager.
    //               UC Berkeley (Berkeley, CA).</p>
    //             </div>
    //           </div>  
              
    //           <div class="grid grid-rows-2 justify-items-start">
    //             <div class="border-spacing-0">
    //               <StaticImage
    //                 // className="mb-4 w-16 h-16 rounded-lg shadow-lg	"
    //                 src="../../images/michael_porto_headshot_150.jpg"
    //                 alt="Photo of Michael Porto, Product Advisor."
    //                 title="Michael Porto, Product Management Advisor"
    //                 width="150"
    //                 height="150"
    //               />
    //             </div>
    //             <div>
    //               <h3>Michael Porto</h3>
    //               <p className="cardSubHeading text-sm slate px-2">Product Management Advisor<br/>
    //               Big data, mobile, ML, Intel, Wells Fargo, EY. Princeton MS CS (Charlotte, NC).</p>
    //             </div>
    //           </div>

    //         </div>

    //       </div>

    //       <div className="container flex flex-col items-center">
    //         <button className="hover:bg-orange-300 bg-orange-400 border-slate-800 mt-2 mb-2 px-4 py-0 rounded items-centerfont-bold" onClick={()=>{navigate("https://calendly.com/wcraigfisk/call-with-craig-fisk-30-minutes")}}>Schedule a demo (Zoom)</button>
    //       </div>

    //     </div>
    //   </main>
    // </Layout>
  )
}

// export const Head = () => <Seo title="About Me" />

export default NewAboutPage