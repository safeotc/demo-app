import React from 'react';

interface ErrorMessageProps {
    children: string;
}

const ErrorMessage = ({ children }: ErrorMessageProps) => <span className="c-input-error">{children}</span>;

export default ErrorMessage;
