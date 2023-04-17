type EmojiProps = {
    className?: string;
    label: string;
    symbol: string;
};

const Emoji = ({ className, label, symbol }: EmojiProps) => (
    <span
        className={`emoji ${className}`}
        role="img"
        aria-label={label ?? ''}
        aria-hidden={!!label}
    >
        {symbol}
    </span>
);

export default Emoji;
