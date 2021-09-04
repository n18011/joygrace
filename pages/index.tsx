import Layout from '../components/Layout'
import { GetStaticProps } from 'next'

const Home: React.FC<any> = ({ domainName }) => {
  return (
    <Layout title="Home">
      <p className="text-4xl">Welcome to Next js</p>
      <p className="text-4xl">{domainName}</p>
    </Layout>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      domainName: process.env.microcms_domain,
    },
  }
}
export default Home
