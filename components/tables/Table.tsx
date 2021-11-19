import React, { TableHTMLAttributes } from 'react';
import cn from 'classnames';
import Th, { ThProps } from './Th';
import Td, { TdProps } from './Td';

type TableSize = 'small';

interface TableProps<TRowData> extends TableHTMLAttributes<HTMLTableElement> {
    size?: TableSize;
    singleLineItems?: boolean;
    headerProps: ThProps[];
    data: TRowData[];
    rowMapper: (row: TRowData) => { key: React.Key; rowProps: TdProps[] };
}

const Table = <TRowData extends {}>({
    headerProps,
    data,
    rowMapper,
    size,
    singleLineItems,
    ...props
}: TableProps<TRowData>) => {
    const propsClasses = props?.className || '';
    const tableClasses = cn('o-table u-margin-bottom-none', propsClasses, {
        'o-table--small': size === 'small',
        'u-text-white-space-nowrap': !!singleLineItems,
    });

    return (
        <table {...props} className={tableClasses}>
            <thead>
                <tr>
                    {headerProps.map((hProps, i) => (
                        <Th key={i} {...hProps} />
                    ))}
                </tr>
            </thead>

            <tbody>
                {data.map((rowData) => {
                    const { key, rowProps } = rowMapper(rowData);
                    return (
                        <tr key={key}>
                            {rowProps.map((rProps, i) => (
                                <Td key={i} {...rProps} />
                            ))}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;
