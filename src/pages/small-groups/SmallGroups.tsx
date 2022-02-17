import { LandingPageSection } from '../../components/LandingPageSection'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import styled from 'styled-components'
import bg from '../../assets/pictures/smallgroups_bg.jpg'
import { Breadcrumb } from '../../components/Breadcrumb'
import { BreadcrumbItem } from '../../components/BreadcrumbItem'
import { motion } from 'framer-motion'

export const SmallGroups = () => {
  useDocumentTitle('Small Groups')
  return (
    <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <SmallGroupsSection>
        <Banner>
          <BannerTitle>our small groups</BannerTitle>
        </Banner>
        <Breadcrumb>
          <BreadcrumbItem location="/" title="home" />
          <BreadcrumbItem location="/smallgroups" title="small groups" last />
        </Breadcrumb>
        <LandingPageSection
          title="women chasing God"
          btnText="velcome"
          btnLocation="/smallgroups/women-chasing-god"
        />
        <LandingPageSection
          title="university students bible study (16-19)"
          btnText="youth"
          btnLocation="/ministries/youth"
          flip
        />
        <LandingPageSection
          title="south mississauga"
          btnText="mississauga"
          btnLocation="/smallgroups/mississauga"
        />
        <LandingPageSection
          title="yumul bible study"
          btnText="explore"
          btnLocation="/smallgroups/yumul"
          flip
        />
        <LandingPageSection
          title="bro. allan's bible study"
          btnText="explore"
          btnLocation="/smallgroups/allan"
        />
        <LandingPageSection
          title="young adults"
          btnText="young adults"
          btnLocation="/ministries/ya"
          flip
        />
      </SmallGroupsSection>
    </Container>
  )
}

const Container = styled(motion.main)`
  background-color: var(--main-white);
  color: var(--main-black);
  transition: var(--transition-delay);
`

const SmallGroupsSection = styled.section`
  text-align: center;
  background-color: var(--main-white);
  color: var(--main-black);
`

const Banner = styled.header`
  display: flex;
  justify-content: center;
  background-size: cover;
  background-position: 50%;
  background-image: url(${bg});
  margin: 0 auto;
  padding: 7rem 0;

  @media (max-width: 60em) {
    padding: 4rem 0;
  }
`

const BannerTitle = styled.h1`
  color: var(--main-green);
`
