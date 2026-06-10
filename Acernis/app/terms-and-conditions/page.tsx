export default function TermsAndConditionsPage() {
  return (
    <main className="pt-32 pb-24 min-h-screen" style={{ backgroundColor: "#FFFFFF" }}>

      {/* Header */}
      <section className="px-6 pt-12 pb-10" style={{ borderBottom: "1px solid #E5E7EB" }}>
        <div className="max-w-3xl mx-auto">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#07644D" }}>
            <span className="w-4 h-px inline-block" style={{ backgroundColor: "#07644D" }} />
            Legal
          </p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: "#0A0A0A", letterSpacing: "-0.02em" }}>
            Terms &amp; Conditions
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pt-12">
        <div className="max-w-3xl mx-auto flex flex-col gap-10">

          <div>
            <h2 className="text-lg font-semibold mb-4" style={{ color: "#0A0A0A" }}>Definitions</h2>
            <div className="flex flex-col gap-3 text-sm leading-relaxed" style={{ color: "#374151" }}>
              <p><strong style={{ color: "#0A0A0A" }}>Content</strong> encompasses various data types: electronic data, text, messages, documents, physical world data (photos, documentation, imagery), point cloud and digital surface model data, technical site and equipment information, contact details, dates, locations, and contractual/financial data.</p>
              <p><strong style={{ color: "#0A0A0A" }}>Acernis apps</strong> refers to the web application, mobile application, and associated web services and platforms.</p>
              <p><strong style={{ color: "#0A0A0A" }}>Services</strong> include documentation generation, documentation management, information management, and related offerings.</p>
              <p><strong style={{ color: "#0A0A0A" }}>User</strong> denotes any authorized Customer or other person utilizing Acernis Apps and Services.</p>
            </div>
          </div>

          <div style={{ borderTop: "1px solid #E5E7EB", paddingTop: "2.5rem" }}>
            <h2 className="text-lg font-semibold mb-4" style={{ color: "#0A0A0A" }}>Data Usage</h2>
            <div className="flex flex-col gap-3 text-sm leading-relaxed" style={{ color: "#374151" }}>
              <p>Acernis asserts no ownership of User Content; the User maintains existing copyright and rights. By uploading content through Acernis apps, the User grants Acernis "a non-exclusive, worldwide, transferable, sub-licensable, perpetual, irrevocable, royalty-free right to integrate, to modify and to use the Customer Content" for service provision and product development.</p>
              <p>Acernis disclaims responsibility for content accuracy or consequences from its use.</p>
            </div>
          </div>

          <div style={{ borderTop: "1px solid #E5E7EB", paddingTop: "2.5rem" }}>
            <h2 className="text-lg font-semibold mb-4" style={{ color: "#0A0A0A" }}>Permitted Use</h2>
            <div className="flex flex-col gap-3 text-sm leading-relaxed" style={{ color: "#374151" }}>
              <p>Customers and Users must employ Acernis Apps in compliance with these terms and applicable laws. Usage must align with commercial agreement restrictions, which Acernis may monitor.</p>
              <p>Customers bear full responsibility for User conduct; User actions constitute Customer actions. Customers must ensure Users are sufficiently qualified and must immediately notify Acernis of any violations.</p>
              <p>Acernis and subcontractors may utilize customer content for service delivery, documentation preparation, and research/development purposes.</p>
            </div>
          </div>

          <div style={{ borderTop: "1px solid #E5E7EB", paddingTop: "2.5rem" }}>
            <h2 className="text-lg font-semibold mb-4" style={{ color: "#0A0A0A" }}>Data We Collect</h2>
            <div className="flex flex-col gap-3 text-sm leading-relaxed" style={{ color: "#374151" }}>
              <p>Acernis collects account data, preferences, provided content, usage patterns, email engagement metrics, IP addresses, browser information, and cookie-based usage data.</p>
              <p>Data is stored via Microsoft, AWS, and OVH cloud services. Sentry processes anonymized performance and error information. Twilio Sendgrid handles email communications. The Site Survey mobile app follows separate privacy policies.</p>
              <p><strong style={{ color: "#0A0A0A" }}>Data Removal:</strong> Contact <a href="mailto:support@acernis.fr" style={{ color: "#07644D" }}>support@acernis.fr</a> to request data removal.</p>
            </div>
          </div>

          <div style={{ borderTop: "1px solid #E5E7EB", paddingTop: "2.5rem" }}>
            <h2 className="text-lg font-semibold mb-4" style={{ color: "#0A0A0A" }}>Changes to Terms of Use</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
              Acernis reserves modification rights and will notify Customers of amendments.
            </p>
          </div>

          <div style={{ borderTop: "1px solid #E5E7EB", paddingTop: "2.5rem" }}>
            <h2 className="text-lg font-semibold mb-4" style={{ color: "#0A0A0A" }}>Usage Restrictions</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>Users and Customers shall not:</p>
            <ul className="flex flex-col gap-2 text-sm leading-relaxed" style={{ color: "#374151" }}>
              {[
                "Distribute or resell Acernis apps/Services without authorization",
                "Reverse engineer or extract source code",
                "Introduce malicious files, viruses, or malware",
                "Rely exclusively on Acernis for critical activities",
                "Infringe intellectual property or copyrights",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#07644D" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

    </main>
  );
}
