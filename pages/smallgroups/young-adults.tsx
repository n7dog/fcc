import { Layout } from '../../components/util/Layout'
import Image from 'next/image'

const YoungAdults = () => {
  return (
    <Layout title="FCC | Yumul Bible Study">
      <section className="flex flex-col md:flex-row container gap-6 justify-around items-center px-6 py-[10rem]">
        <div className="flex flex-col flex-1 gap-y-8 pr-4">
          <h1 className="text-5xl font-bold leading-snug">
            Young Adults Bible Study.
          </h1>
          <p>
            Our Young Adults' Small Groups are divided into 2, separated by
            gender. Young Adults Men's Bible Study meet every Monday at 8pm on
            Discord, while the Young Adults Women Small Group meet every other
            Sunday at 6:30pm.
          </p>
          <p>
            For more information about the Young Adults Small Groups at FCC,
            please contact Bro John Benologa.
          </p>
        </div>
        <div className="hidden sm:flex relative flex-1 justify-center items-center">
          <Image
            className="rounded-md"
            src="/ministries/youth.jpg"
            width={800}
            height={100}
            alt="Young Adults Image"
          />
        </div>
      </section>
    </Layout>
  )
}

export default YoungAdults
