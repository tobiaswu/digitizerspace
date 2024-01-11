import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy of DigitizerSpace - we care about your data',
  description:
    '▷ Your data is 100% safe with DigitizerSpace. Read about how we protect and use your data in our privacy policy. ✓ Anti spam promise. ✓ Aligned with GDPR/DSGVO.',
};

export default function Privacy() {
  return (
    <div className="container mx-auto py-8 px-4 bg-base-100">
      <h1 className="text-4xl sm:text-6xl font-bold mb-12 sm:leading-relaxed">
        Privacy Policy
      </h1>
      <p className="pb-8">
        At DigitizerSpace, accessible from https://www.digitizerspace.com, one
        of our main priorities is the privacy of our visitors. This Privacy
        Policy document contains types of information that is collected and
        recorded by DigitizerSpace and how we use it.
      </p>
      <p className="pb-8">
        If you have additional questions or require more information about our
        Privacy Policy, do not hesitate to contact us.
      </p>
      <h2 className="pb-4 text-2xl">Log Files</h2>
      <p className="pb-8">
        DigitizerSpace follows a standard procedure of using log files. These
        files log visitors when they visit websites. All hosting companies do
        this and a part of hosting services&apos; analytics. The information
        collected by log files include internet protocol (IP) addresses, browser
        type, Internet Service Provider (ISP), date and time stamp,
        referring/exit pages, and possibly the number of clicks. These are not
        linked to any information that is personally identifiable. The purpose
        of the information is for analyzing trends, administering the site,
        tracking users&apos; movement on the website, and gathering demographic
        information.
      </p>
      <h2 className="pb-4 text-2xl">Cookies and Web Beacons</h2>
      <p className="pb-8">
        Like any other website, DigitizerSpace uses &quot;cookies&quot;. These
        cookies are used to store information including visitors&apos;
        preferences, and the pages on the website that the visitor accessed or
        visited. The information is used to optimize the users&apos; experience
        by customizing our web page content based on visitors&apos; browser type
        and/or other information.
      </p>
      <h2 className="pb-4 text-2xl">Google DoubleClick DART Cookie</h2>
      <p className="pb-8">
        Google is one of a third-party vendor on our site. It also uses cookies,
        known as DART cookies, to serve ads to our site visitors based upon
        their visit to www.website.com and other sites on the internet. However,
        visitors may choose to decline the use of DART cookies by visiting the
        Google ad and content network Privacy Policy at the following URL:&nbsp;
        <a href="https://policies.google.com/technologies/ads">
          https://policies.google.com/technologies/ads
        </a>
      </p>
      <h2 className="pb-4 text-2xl">Our Advertising Partners</h2>
      <p className="pb-8">
        Some of advertisers on our site may use cookies and web beacons. Our
        advertising partners are listed below. Each of our advertising partners
        has their own Privacy Policy for their policies on user data. For easier
        access, we hyperlinked to their Privacy Policies below.
      </p>
      <ul className="pb-8 pl-4">
        <li>
          <p>Google</p>
          <p>
            <a href="https://policies.google.com/technologies/ads">
              https://policies.google.com/technologies/ads
            </a>
          </p>
        </li>
      </ul>
      <h2 className="pb-4 text-2xl">Privacy Policies</h2>
      <p className="pb-8">
        You may consult this list to find the Privacy Policy for each of the
        advertising partners of DigitizerSpace.
      </p>
      <p className="pb-8">
        Third-party ad servers or ad networks uses technologies like cookies,
        JavaScript, or Web Beacons that are used in their respective
        advertisements and links that appear on DigitizerSpace, which are sent
        directly to users&apos; browser. They automatically receive your IP
        address when this occurs. These technologies are used to measure the
        effectiveness of their advertising campaigns and/or to personalize the
        advertising content that you see on websites that you visit.
      </p>
      <p className="pb-8">
        Note that DigitizerSpace has no access to or control over these cookies
        that are used by third-party advertisers.
      </p>
      <h2 className="pb-4 text-2xl">Third Party Privacy Policies</h2>
      <p className="pb-8">
        DigitizerSpace&apos;s Privacy Policy does not apply to other advertisers
        or websites. Thus, we are advising you to consult the respective Privacy
        Policies of these third-party ad servers for more detailed information.
        It may include their practices and instructions about how to opt-out of
        certain options.
      </p>
      <p className="pb-8">
        You can choose to disable cookies through your individual browser
        options. To know more detailed information about cookie management with
        specific web browsers, it can be found at the browsers&apos; respective
        websites.
      </p>
      <h2 className="pb-4 text-2xl">Children&apos;s Information</h2>
      <p className="pb-8">
        Another part of our priority is adding protection for children while
        using the internet. We encourage parents and guardians to observe,
        participate in, and/or monitor and guide their online activity.
      </p>
      <p className="pb-8">
        DigitizerSpace does not knowingly collect any Personal Identifiable
        Information from children under the age of 13. If you think that your
        child provided this kind of information on our website, we strongly
        encourage you to contact us immediately and we will do our best efforts
        to promptly remove such information from our records.
      </p>
      <h2 className="pb-4 text-2xl">Online Privacy Policy Only</h2>
      <p className="pb-8">
        This Privacy Policy applies only to our online activities and is valid
        for visitors to our website with regards to the information that they
        shared and/or collect in DigitizerSpace. This policy is not applicable
        to any information collected offline or via channels other than this
        website.
      </p>
      <h2 className="pb-4 text-2xl">Consent</h2>
      <p>
        By using our website, you hereby consent to our Privacy Policy and agree
        to its Terms and Conditions.
      </p>
    </div>
  );
}
