import {
  HomeIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  UserIcon,
} from '@heroicons/react/24/solid'

const Footer = () => (
  <div className="bg-orange-500 p-2 flex justify-around">
    <HomeIcon className="h-10 w-10 text-white" />
    <ChatBubbleOvalLeftEllipsisIcon className="h-10 w-10 text-white" />
    <UserIcon className="h-10 w-10 text-white" />
  </div>
)

export default Footer
