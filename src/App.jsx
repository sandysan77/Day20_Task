import React from 'react'
import Card from './Card'
function App() {

  const data = [
    {
      plan:"FREE",
      price:0,
      user:"Single User",
      storage:"5GB Storage",
      publicProject:"Unlimited Public Projects",
      communityAccess:"Community Access",
      privateProject:"Unlimited Private Projects",
      support:"Dedicated Phone Support",
      subDomain:"Free Subdomain",
      reports:"Monthly Status Reports"
    },
    {
      plan:"PLUS",
      price:9,
      user:"5 User",
      storage:"50GB Storage",
      publicProject:"Unlimited Public Projects",
      communityAccess:"Community Access",
      privateProject:"Unlimited Private Projects",
      support:"Dedicated Phone Support",
      subDomain:"Free Subdomain",
      reports:"Monthly Status Reports"
    },
    {
      plan:"PRO",
      price:49,
      user:"Unlimited Users",
      storage:"150GB Storage",
      publicProject:"Unlimited Public Projects",
      communityAccess:"Community Access",
      privateProject:"Unlimited Private Projects",
      support:"Dedicated Phone Support",
      subDomain:"Unlimited Free Subdomain",
      reports:"Monthly Status Reports"
    }
  ]

  return <>
    <section class="pricing py-5">
      <div class="container">
        <div class="row">
         {
            data.map((e)=>{
              return <Card details={e}/>
            })
         }
        </div>
      </div>
    </section>
  </>
}

export default App