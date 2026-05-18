import HomeAbout from '../components/Home/HomeAbout'
import HomeBanner from '../components/Home/HomeBanner'
import HomeChoose from '../components/Home/HomeChoose'
import HomeContact from '../components/Home/HomeContact.jsx'
import HomeFAQ from '../components/Home/HomeFAQ.jsx'
import HomeJoin from '../components/Home/HomeJoin'
import HomeOffer from '../components/Home/HomeOffer'
import HomeResult from '../components/Home/HomeResult.jsx'
import HomeStudent from '../components/Home/HomeStudent'

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <HomeOffer />
      <HomeAbout />
      <HomeChoose />
      <HomeJoin />
      <HomeStudent />
      <HomeResult />
      <HomeFAQ/>
      <HomeContact />
    </div>
  )
}
