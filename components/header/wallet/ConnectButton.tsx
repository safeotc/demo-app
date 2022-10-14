import PrimaryButton from '../../forms/buttons/PrimaryButton';
import WalletIcon from '../../icons/WalletIcon';

interface ConnectButtonProps {
    connect: (id: number) => void;
}

const ConnectButton = ({ connect }: ConnectButtonProps) => {
    return (
        <PrimaryButton inlineOnMobile={true} icon={<WalletIcon />} onClick={() => connect(0)}>
            Connect
        </PrimaryButton>
    );
};

export default ConnectButton;
