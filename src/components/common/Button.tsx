interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  className?: string
}

const Button = ({ 
  children, 
  href, 
  variant = 'primary', 
  onClick,
  className = ''
}: ButtonProps) => {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-200"
  const variants = {
    primary: "bg-indigo-400 text-white hover:bg-indigo-500",
    secondary: "bg-white text-gray-800 border border-gray-200 hover:border-indigo-400 hover:text-indigo-400"
  }

  const classes = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}

export default Button 