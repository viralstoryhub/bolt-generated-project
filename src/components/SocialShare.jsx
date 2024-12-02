import { FaTwitter, FaTelegram, FaReddit, FaLink } from 'react-icons/fa'

const SocialShare = () => {
  const shareUrl = window.location.href
  const title = "Join BTFD Coin - The Next Generation Meme Token with Real Utility! 🚀"

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`,
    reddit: `https://reddit.com/submit?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl)
    alert('Link copied to clipboard!')
  }

  return (
    <div className="flex space-x-4">
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:text-primary/80 transition-colors"
      >
        <FaTwitter size={24} />
      </a>
      <a
        href={shareLinks.telegram}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:text-primary/80 transition-colors"
      >
        <FaTelegram size={24} />
      </a>
      <a
        href={shareLinks.reddit}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:text-primary/80 transition-colors"
      >
        <FaReddit size={24} />
      </a>
      <button
        onClick={copyToClipboard}
        className="text-primary hover:text-primary/80 transition-colors"
      >
        <FaLink size={24} />
      </button>
    </div>
  )
}

export default SocialShare
