import Chat from 'components/Chat'
import Mobile from 'layouts/Mobile'

const Chats = () => (
  <Mobile header="Chat">
    <Chat
      image="/images/pfp_example.jpg"
      name="Pedro"
      message="Hello World"
      at="2017-05-15T17:36:00.000Z"
    />
  </Mobile>
)

export default Chats
