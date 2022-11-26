interface IProps {
  title: string
  onClick: () => void
}

const Button = ({ title, onClick }: IProps) => (
  <button
    className="bg-orange-500 text-white py-1 px-3 rounded-full"
    onClick={onClick}
  >
    {title}
  </button>
)

export default Button
