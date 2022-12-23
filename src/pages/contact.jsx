import * as React from 'react';
import DefaultLayout from '../templates/default';
import StaticPageHeader from '../components/ui/StaticPageHeader';

const ContactPage = () => {
  return (
    <DefaultLayout title="Contact">
      <StaticPageHeader title="Contact" />
      <article className="post">
        <p>
          It‘s best to contact me by email. You can reach me at{' '}
          <a href="mailto:hello@jaredcunha.com">hello@jaredcunha.com</a>.
        </p>
      </article>
    </DefaultLayout>
  );
};

export default ContactPage;
