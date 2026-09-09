import { useState } from 'react';

export default function Contra() {
  /*
  INSTEAD OF THE FOLLOWING
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    setIsSending(true);
    await sendMessage(text);
    setIsSent(true);
    }
    */
  //WE DO THE FOLLOWING:

  const [text, setText] = useState('');
  const [status, setStatus] = useState('typing');
  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    await sendMessage(text);
    setStatus('sent');
  }

  const isSending = status === 'sending'; //It is a conditional flag. Checks if the value of status eqls "sending"
  const isSent = status === 'sent';//Same here except it checks "sent"

  if (isSent) {
    return <h1>Thanks for the feedback!</h1>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>How was your stay at The Prancing Pony?</p>
      <textarea
        disabled={isSending}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button disabled={isSending} type="submit">
        Send Now!
      </button>
      {isSending && <p>Sending...</p>}
    </form>
  );
}

//sending fake message
function sendMessage(text) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}
