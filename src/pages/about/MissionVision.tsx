import React from 'react'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import styled from 'styled-components'
import banner from '../../assets/pictures/about_bg.avif'
import { Breadcrumb } from '../../components/Breadcrumb'
import { BreadcrumbItem } from '../../components/BreadcrumbItem'
import { motion } from 'framer-motion'

export const MissionVision = () => {
  useDocumentTitle('Mission & Vision')
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}>
      <Banner>
        <BannerTitle>mission & vision</BannerTitle>
      </Banner>
      <Breadcrumb>
        <BreadcrumbItem location="/" title="home" />
        <BreadcrumbItem location="/about" title="about" />
        <BreadcrumbItem
          location="/about/mission-vision"
          title="mission & vision"
          last
        />
      </Breadcrumb>
      <Mission>
        <MissionHeader>our mission:</MissionHeader>
        <MissionDescription>
          To introduce and represent Christ through our nurturing, small
          group-driven ministries in the community.
        </MissionDescription>
      </Mission>
      <Vision>
        <VisionHeader>our vision:</VisionHeader>
        <VisionDescription>
          A Christ-centred, Holy Spirit-led community committed to the building
          of strong relationships and planting of healthy reproducing churches.
        </VisionDescription>
      </Vision>
    </motion.div>
  )
}

const Banner = styled.section`
  display: flex;
  justify-content: center;
  background-size: cover;
  background-position: 50%;
  background-image: url(${banner});
  margin: 0 auto;
  padding: 7rem 0;

  @media (max-width: 60em) {
    padding: 4rem 0;
  }
`

const BannerTitle = styled.h1`
  color: var(--main-white);
`

const Mission = styled.section`
  background-color: var(--main-white);
  text-align: center;
  padding: 2rem 1rem;
`

const MissionHeader = styled.h2`
  max-width: 800px;
  margin: 0 auto;
`

const VisionHeader = styled(MissionHeader)``

const MissionDescription = styled.h3`
  max-width: 800px;
  margin: 0 auto;
  font-weight: 400;
`

const VisionDescription = styled(MissionDescription)``

const Vision = styled.section`
  background-color: var(--main-blue);
  text-align: center;
  padding: 3rem 0;
`
