import React from 'react';

const TermsConditions: React.FC = () => {
  const lastUpdated = '2024-01-15';

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800 rounded-lg p-8">
          <h1 className="text-4xl font-bold text-white mb-6">Terms & Conditions</h1>
          <p className="text-gray-400 mb-8">Last updated: {lastUpdated}</p>

          <div className="prose prose-lg text-gray-300 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using Battlegrounds ("we," "our," or "us"), you accept and agree to be 
                bound by the terms and provision of this agreement. If you do not agree to abide by the 
                above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Service</h2>
              <p>
                Battlegrounds is a free online gaming platform that provides access to HTML5 games. Our 
                service allows users to play games directly in their web browser without downloads or 
                registration requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. User Conduct and Responsibilities</h2>
              
              <h3 className="text-xl font-medium text-green-400 mb-3">3.1 Acceptable Use</h3>
              <p>You agree to use our service only for lawful purposes and in accordance with these Terms. You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Use the service for any illegal or unauthorized purpose</li>
                <li>Attempt to interfere with or disrupt the service or servers</li>
                <li>Use automated scripts, bots, or other automated tools</li>
                <li>Upload or transmit viruses, malware, or other malicious code</li>
                <li>Impersonate others or provide false information</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Attempt to gain unauthorized access to other accounts or systems</li>
              </ul>

              <h3 className="text-xl font-medium text-green-400 mb-3 mt-6">3.2 Age Requirements</h3>
              <p>
                You must be at least 13 years old to use our service. Users under 18 should have 
                parental or guardian consent before using our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Intellectual Property Rights</h2>
              
              <h3 className="text-xl font-medium text-green-400 mb-3">4.1 Our Content</h3>
              <p>
                The Battlegrounds platform, including its design, graphics, interface, and software, 
                is owned by us and protected by copyright, trademark, and other intellectual property laws.
              </p>

              <h3 className="text-xl font-medium text-green-400 mb-3 mt-6">4.2 Game Content</h3>
              <p>
                Games available on our platform are owned by their respective developers and publishers. 
                We have obtained proper licensing or permission to host these games. Users may not 
                download, copy, or redistribute game content without permission.
              </p>

              <h3 className="text-xl font-medium text-green-400 mb-3 mt-6">4.3 User-Generated Content</h3>
              <p>
                Any content you submit (reviews, ratings, comments) remains your property, but you grant 
                us a non-exclusive, royalty-free license to use, display, and distribute such content 
                on our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Privacy and Data Collection</h2>
              <p>
                Your privacy is important to us. Our collection and use of personal information is 
                governed by our Privacy Policy, which is incorporated into these Terms by reference. 
                By using our service, you consent to the collection and use of information as outlined 
                in our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibent text-white mb-4">6. Advertising and Third-Party Content</h2>
              <p>
                Our service is supported by advertising. You acknowledge and agree that:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>We may display advertisements before, during, or after gameplay</li>
                <li>We use Google AdSense and other advertising partners</li>
                <li>Third-party advertisers may use cookies and tracking technologies</li>
                <li>We are not responsible for third-party advertisement content</li>
                <li>Ad-blocking software may interfere with service functionality</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Service Availability and Modifications</h2>
              
              <h3 className="text-xl font-medium text-green-400 mb-3">7.1 Service Availability</h3>
              <p>
                We strive to maintain continuous service availability but cannot guarantee uninterrupted 
                access. Service may be temporarily unavailable due to maintenance, updates, or technical issues.
              </p>

              <h3 className="text-xl font-medium text-green-400 mb-3 mt-6">7.2 Modifications to Service</h3>
              <p>
                We reserve the right to modify, suspend, or discontinue any part of our service at any 
                time without prior notice. We may also add, remove, or modify games in our catalog.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Disclaimers and Limitation of Liability</h2>
              
              <h3 className="text-xl font-medium text-green-400 mb-3">8.1 Service Disclaimer</h3>
              <p>
                Our service is provided "as is" and "as available" without warranties of any kind, 
                either express or implied. We do not warrant that the service will be error-free, 
                secure, or continuously available.
              </p>

              <h3 className="text-xl font-medium text-green-400 mb-3 mt-6">8.2 Limitation of Liability</h3>
              <p>
                To the maximum extent permitted by law, we shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages arising out of your use of 
                our service, even if we have been advised of the possibility of such damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Battlegrounds, its officers, directors, 
                employees, and agents from any claims, damages, losses, or expenses arising out of 
                your use of the service or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Termination</h2>
              <p>
                We may terminate or suspend your access to our service immediately, without prior 
                notice, for any reason, including breach of these Terms. You may also discontinue 
                use of our service at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">11. Governing Law and Disputes</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the 
                United States, without regard to its conflict of law provisions. Any disputes arising 
                from these Terms shall be resolved through binding arbitration.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">12. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify users of 
                significant changes by posting the updated Terms on our website and updating the 
                "Last updated" date. Continued use of our service after changes constitutes acceptance 
                of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">13. Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable or invalid, that provision 
                shall be limited or eliminated to the minimum extent necessary so that these Terms shall 
                otherwise remain in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">14. Contact Information</h2>
              <p>If you have questions about these Terms, please contact us:</p>
              <div className="bg-gray-700 p-4 rounded-lg mt-4">
                <p><strong>Email:</strong> legal@battlegrounds.com</p>
                <p><strong>Address:</strong> 123 Gaming Street, Tech City, TC 12345, United States</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">15. Entire Agreement</h2>
              <p>
                These Terms, together with our Privacy Policy, constitute the entire agreement between 
                you and Battlegrounds regarding the use of our service and supersede all prior 
                agreements and understandings.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;