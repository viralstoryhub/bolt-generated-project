import { motion } from 'framer-motion'

const Privacy = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-20 pb-16 min-h-screen"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          <span className="gradient-text">Privacy Policy</span>
        </h1>

        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Information We Collect</h2>
            <p className="mb-4">
              We collect information you provide directly to us when using the BTFD Coin platform, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Wallet addresses</li>
              <li>Transaction data</li>
              <li>Email addresses (if provided for newsletters)</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">2. How We Use Your Information</h2>
            <p className="mb-4">
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process transactions and rewards</li>
              <li>Send important updates about BTFD Coin</li>
              <li>Improve our services and user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Information Sharing</h2>
            <p>
              We do not sell or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at privacy@btfdcoin.com
            </p>
          </section>

          <div className="text-sm text-gray-400 pt-8">
            Last Updated: {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Privacy
