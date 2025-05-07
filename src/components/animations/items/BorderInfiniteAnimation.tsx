import '../css/BorderInfiniteAnimation.css';

const BorderInfiniteAnimation = ({ children, style }: { children: React.ReactNode, style?: React.CSSProperties }) => {
    return (
        <article className="card" style={style}>
            {children}
            <span className="top span"></span>
            <span className="right span"></span>
            <span className="bottom span"></span>
            <span className="left span"></span>
        </article>
    );
};

export default BorderInfiniteAnimation;
