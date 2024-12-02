import { motion } from 'framer-motion'

const Terms = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-20 pb-16 min-h-screen"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          <span className="gradient-text">Terms of Service</span>
        </h1>

        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the BTFD Coin platform, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Description of Services</h2>
            <p className="mb-4">
              BTFD Coin provides the following services:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cryptocurrency token trading</li>
              <li>Staking rewards program</li>
              <li>Play-to-Earn gaming platform</li>
              <li>Community engagement features</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">3. User Responsibilities</h2>
            <p className="mb-4">Users must:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate information</li>
              <li>Maintain the security of their wallet</li>
              <li>Comply with all applicable laws</li>
              <li>Not engage in fraudulent activities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Risks and Disclaimers</h2>
            <p className="mb-4">
              Cryptocurrency trading involves substantial risk. You acknowledge that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cryptocurrency prices are highly volatile</li>
              <li>Past performance does not guarantee future results</li>
              <li>You could lose your entire investment</li>
              <li>Smart contract risks exist</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Intellectual Property</h2>
            <p>
              All content on the BTFD Coin platform is protected by intellectual property rights and belongs to BTFD Coin or its licensors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Termination</h2>
            <p>
              We reserve the right to terminate or suspend access to our services for any reason without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">7. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which BTFD Coin operates.
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

export default Terms
