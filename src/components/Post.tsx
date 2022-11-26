import Image from 'next/image'

import Button from './Button'

interface IProps {
  title: string
  content: string
  image: string
}

const Post = ({ title, content, image }: IProps) => (
  <div className="bg-gray-200 p-4 rounded-md flex flex-col space-y-4 mb-4">
    <div className="flex items-center space-x-2">
      <div className="flex items-center">
        <Image
          src={image}
          className="rounded-full"
          width={32}
          height={32}
          alt="test"
          objectFit="cover"
        />
      </div>

      <div className="flex items-center justify-between w-full">
        <h1>{title}</h1>
      </div>
    </div>

    <div className="bg-white p-4">
      <p>{content}</p>
    </div>

    <div className="flex justify-between">
      <Button title="отзывы" onClick={() => null} />
      <Button title="подать заявку" onClick={() => null} />
    </div>
  </div>
)

export default Post
