import AchievementsSection from '@/components/awards/AcheivementSection'
import AwardsSection from '@/components/awards/AwardsSection'
import HeaderText from '@/components/awards/Header'
import React from 'react'

function page() {
  return (
    <div>
      <HeaderText/>
      <AchievementsSection/>
      <AwardsSection/>
    </div>
  )
}

export default page