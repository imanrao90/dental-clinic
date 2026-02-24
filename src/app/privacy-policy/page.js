export default function PrivacyPolicyPage() {
    return (
  <div className="bg-white">
    <section className="py-24 bg-slate-900 text-white text-center">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-xl text-slate-400">Effective Date: February 22, 2025</p>
      </div>
    </section>

    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Terms and Conditions / Privacy Policy</h2>
        <p className="text-slate-600 leading-relaxed mb-8">
          Dental Clinics of Texas respects your privacy. By opting into our SMS messaging service, you agree to the following terms regarding how we handle your data.
        </p>

        <div className="space-y-12">
          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Data Collection</h3>
            <p className="text-slate-600">
              We will collect your name, email address, mailing address, and mobile phone number when you sign up for SMS updates. The information will be collected via the website contact form, email rental agreement, or third-party reservation systems.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Data Usage</h3>
            <p className="text-slate-600">
              We use your data solely for sending updates, promotions, and reminders related to our products or services.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Data Security</h3>
            <p className="text-slate-600">
              We protect your data with secure storage measures to prevent unauthorized access.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Data Retention</h3>
            <p className="text-slate-600">
              We retain your information as long as you are subscribed to our SMS service. You may request deletion at any time.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Message and Data Rates May Apply</h3>
            <p className="text-slate-600">
              Your mobile carrier may charge fees for sending or receiving text messages, especially if you do not have an unlimited texting or data plan. Messages are recurring, and message frequency varies.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Contact</h3>
            <p className="text-slate-600">
              For assistance, contact Dental Clinics of Texas at 832-427-1901 or visit our website at <a href="https://www.dentalclinicsoftexas.com/" className="text-brand-primary hover:underline">https://www.dentalclinicsoftexas.com/</a>. You can also email us for HELP or STOP receiving messages.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Opt-Out</h3>
            <p className="text-slate-600">
              You can opt out of the SMS list at any time by texting, emailing, or replying STOP or UNSUBSCRIBE to 832-427-1901. After unsubscribing, you will receive a final SMS to confirm that you have been unsubscribed, and we will remove your number from our list within 24 hours.
            </p>
            <p className="text-slate-600 mt-4">
              You can also text HELP for additional assistance, and you will receive a message including our phone number, email, and website.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Non-Sharing Clause</h3>
            <p className="text-slate-600">
              We do not share your data with third parties for marketing purposes. Dental Clinics of Texas will not sell, rent, or share collected mobile numbers.
            </p>
          </section>
        </div>

        <div className="mt-16 p-8 bg-slate-50 rounded-3xl border border-slate-100 text-center">
          <p className="text-slate-600 font-medium">
            If you have any further questions, please contact us. We’re here to help!
          </p>
        </div>
      </div>
    </section>
  </div>
);
}