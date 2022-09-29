import Image from 'next/image';

interface CurrencyIconProps {
    name: string;
    img: string;
}

const CurrencyIcon: React.FC<CurrencyIconProps> = ({ name, img }) => {
    return (
        <span className="c-currency-icon">
            <Image alt="currency icon image" title={name} src={`/images/currencies/${img}`} layout="fill" />
        </span>
    );
};

export default CurrencyIcon;
