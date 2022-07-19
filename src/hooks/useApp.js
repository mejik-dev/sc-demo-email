import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const SEND_MAIL_MUTATION = gql`
  mutation sendEmail($input: SendEmailInput) {
    sendEmail(input: $input) {
      message
    }
  }
`;

export const useApp = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const [sendMail, { loading, error, data }] = useMutation(SEND_MAIL_MUTATION);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendMail({
        variables: {
          input: { to: email, subject: subject, body: body },
        },
      });
      setBody("");
      setEmail("");
      setSubject("");
    } catch (error) {
      console.log(error);
      alert("Failed");
    }
  };

  return { handleSubmit, setEmail, setSubject, setBody, loading, error, data };
};
