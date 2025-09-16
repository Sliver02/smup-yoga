import { ContactFormProps } from "@/components/sections/Contact";

const ContactTemplate: React.FC<Readonly<ContactFormProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>RSVP ricevuto da {name}</h1>
    <p>
      <strong>Name:</strong> {name}
      <br />
      <strong>Email:</strong> {email}
    </p>

    <p>
      <strong>Message:</strong> {message}
    </p>
  </div>
);

export default ContactTemplate;
