interface SocialLinksProps {
  className?: string
}

const SocialLinks = ({ className = '' }: SocialLinksProps) => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/yourusername' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
    { name: 'Twitter', url: 'https://twitter.com/yourusername' }
  ]

  return (
    <div className={`flex gap-6 ${className}`}>
      {socialLinks.map(link => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-300 transition-colors"
        >
          {link.name}
        </a>
      ))}
    </div>
  )
}

export default SocialLinks 