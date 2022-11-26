import Footer from 'components/Footer'
import Header from 'components/Header'

interface IProps {
  children: JSX.Element
  header: string
}

const Mobile = ({ children, header }: IProps) => (
  <div className="flex flex-col h-screen">
    <Header header={header} />
    <div className="grow overflow-y-auto p-4">{children}</div>
    <Footer />
  </div>
)

export default Mobile
