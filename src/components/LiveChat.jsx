import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaComments, FaTimes } from 'react-icons/fa'

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')

  const sendMessage = (e) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    setMessages([...messages, {
      id: Date.now(),
      text: newMessage,
      sender: 'user'
    }])
    setNewMessage('')

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: "Thanks for your message! Our team will get back to you soon.",
        sender: 'bot'
      }])
    }, 1000)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-primary text-black p-4 rounded-full shadow-lg hover:bg-primary/80 transition-colors"
      >
        <FaComments size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-20 right-4 w-80 bg-black border border-primary/20 rounded-lg shadow-xl"
          >
            <div className="p-4 border-b border-primary/20 flex justify-between items-center">
              <h3 className="font-bold">Community Chat</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <FaTimes />
              </button>
            </div>

            <div className="h-96 flex flex-col">
              <div className="flex-grow p-4 space-y-4 overflow-y-auto">
                {messages.map(message => (
                  <div
                    key={message.id}
                    className={`${
                      message.sender === 'user'
                        ? 'ml-auto bg-primary/20'
                        : 'mr-auto bg-gray-800'
                    } max-w-[80%] rounded-lg p-2`}
                  >
                    {message.text}
                  </div>
                ))}
              </div>

              <form onSubmit={sendMessage} className="p-4 border-t border-primary/20">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-grow px-4 py-2 bg-black border border-primary/20 rounded-lg focus:outline-none focus:border-primary"
                  />
                  <button
                    type="submit"
                    className="bg-primary text-black px-4 py-2 rounded-lg hover:bg-primary/80 transition-colors"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default LiveChat
