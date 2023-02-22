import { useRef } from 'react';
import { v4 as uuidV4 } from 'uuid';
import InfoAlert from '../alerts/types/InfoAlert';

interface EmptyTBodyProps {
    colspan: number;
}

const EmptyTBody = ({ colspan }: EmptyTBodyProps) => {
    const noDataUuid = useRef(uuidV4());
    return (
        <tbody>
            <tr>
                <td colSpan={colspan} className="u-text-center">
                    <div className="u-display-inline-block">
                        <InfoAlert
                            id={`empty-table-alert-${noDataUuid.current}`}
                            content="This table does not contain any data."
                        />
                    </div>
                </td>
            </tr>
        </tbody>
    );
};

export default EmptyTBody;
