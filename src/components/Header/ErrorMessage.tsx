type ErrorMessageProps = {
  message: string;
};
const ErrorMessage = (props: ErrorMessageProps) => {
  return <div>{props.message}</div>;
};

export default ErrorMessage;
