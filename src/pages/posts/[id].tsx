import Image from 'next/image'

import Mobile from 'layouts/Mobile'
import Button from 'components/Button'

const Post = () => (
  <Mobile>
    <div className="flex space-x-2">
      <div>
        <Image
          src="/images/pfp_example.jpg"
          className="rounded-full"
          width={85}
          height={85}
          alt="test"
          objectFit="cover"
        />
      </div>

      <div className="flex flex-col">
        <h1>Pedro</h1>
        <h1>Pedro</h1>
        <Button title="button" onClick={() => null} />
      </div>
    </div>
  </Mobile>
)

export default Post
