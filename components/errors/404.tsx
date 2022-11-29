interface Error404Props {
    text: string;
}

const Error404 = ({ text }: Error404Props) => {
    return (
        <div className="c-error">
            <div className="c-error__code">404</div>
            <div className="c-error__detail">Not found</div>
            <div className="c-error__text">{text}</div>
        </div>
    );
};

export default Error404;
