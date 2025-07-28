import React from 'react';

const PrivacyPolicy: React.FC = () => {
  const lastUpdated = '2024-01-15';

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800 rounded-lg p-8">
          <h1 className="text-4xl font-bold text-white mb-6">Privacy Policy</h1>
          <p className="text-gray-400 mb-8">Last updated: {lastUpdated}</p>

          <div className="prose prose-lg text-gray-300 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
              <p>
                Welcome to Battlegrounds ("we," "our," or "us"). We are committed to protecting your privacy 
                and ensuring you have a positive experience on our website. This Privacy Policy explains how 
                we collect, use, disclose, and safeguard your information when you visit our website 
                battlegrounds.com (the "Site") and use our gaming platform services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-medium text-green-400 mb-3">2.1 Information You Provide</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact information (name, email address) when you contact us</li>
                <li>Feedback and comments you provide</li>
                <li>Game ratings and reviews</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="text-xl font-medium text-green-400 mb-3 mt-6">2.2 Automatically Collected Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Device information (browser type, operating system, device type)</li>
                <li>Usage data (pages visited, time spent, click patterns)</li>
                <li>IP address and approximate location</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
              <p>We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Provide, operate, and maintain our gaming platform</li>
                <li>Improve user experience and platform functionality</li>
                <li>Communicate with you, including customer support</li>
                <li>Analyze usage patterns and optimize performance</li>
                <li>Display personalized content and advertisements</li>
                <li>Prevent fraud and ensure platform security</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your experience. These include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Essential Cookies:</strong> Required for basic site functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                <li><strong>Advertising Cookies:</strong> Used to display relevant advertisements</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>
              <p className="mt-4">
                You can control cookie preferences through your browser settings or our cookie consent banner.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Third-Party Services</h2>
              <p>We may use third-party services that collect information, including:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Google Analytics:</strong> For website analytics and user behavior insights</li>
                <li><strong>Google AdSense:</strong> For displaying relevant advertisements</li>
                <li><strong>Game Developers:</strong> Some games may collect anonymous usage data</li>
              </ul>
              <p className="mt-4">
                These third parties have their own privacy policies, and we encourage you to review them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Data Sharing and Disclosure</h2>
              <p>We do not sell, trade, or rent your personal information. We may share information in these situations:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations or court orders</li>
                <li>To protect our rights, property, or safety</li>
                <li>With service providers who assist in our operations</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your 
                information against unauthorized access, alteration, disclosure, or destruction. However, 
                no internet transmission is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Children's Privacy</h2>
              <p>
                Our service is not directed to children under 13. We do not knowingly collect personal 
                information from children under 13. If you are a parent or guardian and believe your 
                child has provided personal information, please contact us to remove such information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Your Rights and Choices</h2>
              <p>Depending on your location, you may have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Cookie preference management</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your own. 
                We ensure appropriate safeguards are in place to protect your information during such transfers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">11. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy periodically. We will notify you of significant changes 
                by posting the new policy on this page and updating the "Last updated" date. We encourage 
                you to review this policy regularly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">12. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us:</p>
              <div className="bg-gray-700 p-4 rounded-lg mt-4">
                <p><strong>Email:</strong> privacy@battlegrounds.com</p>
                <p><strong>Address:</strong> 123 Gaming Street, Tech City, TC 12345, United States</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;