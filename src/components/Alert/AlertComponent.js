import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

/**
 * 
 * @param {String} severity 
 * @param {String} title 
 * @param {Array} messages  - Array of strings
 * @returns 
 */
const AlertComponent = ({ severity, title, messages }) => {
  return (
    <Alert severity={severity} sx={{ mb: 5 }}>
      {title && <AlertTitle>{title}</AlertTitle>}
      {messages.map((message, index) => (
        <div key={index}>{message}</div>
      ))}
    </Alert>
  );
}

export default AlertComponent
