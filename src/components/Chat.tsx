import Image from 'next/image'
import { DateTime } from 'luxon'

interface IProps {
  image: string
  name: string
  message: string
  at: string
}

const Chat = ({ image, name, message, at }: IProps) => (
  <div className="flex space-x-4 border-b py-3">
    <div>
      <Image
        src={image}
        className="rounded-full"
        width={32}
        height={32}
        alt="test"
        objectFit="cover"
      />
    </div>

    <div className="grow flex flex-col">
      <div className="flex justify-between w-full">
        <h1>{name}</h1>
        <h6>{DateTime.fromISO(at).toFormat('yyyy LLL dd')}</h6>
      </div>

      <h4>{message}</h4>
    </div>
  </div>
)

export default Chat
