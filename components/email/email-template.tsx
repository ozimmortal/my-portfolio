import * as React from 'react';

interface EmailTemplateProps {
  message: string;
  senderEmail: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  message,senderEmail
}) => (
    
        <div>
          <section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
            <h2 className="leading-tight">
              You received the following message from the contact form
            </h2>
            <p>{message}</p>
            <br />
            <p>The sender's email is: {senderEmail}</p>
          </section>
        </div>
     
);
