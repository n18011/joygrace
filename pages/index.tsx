import Layout from '../components/Layout'

const Home: React.FC = () => {
  return (
    <Layout title="Home">
      <p className="text-4xl">Welcome to Next js</p>
      <p className="text-4xl">{process.env.microcms_domain}</p>
    </Layout>
  )
}
export default Home
