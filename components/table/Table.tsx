import React, { TableHTMLAttributes } from 'react';
import cn from 'classnames';
import Th, { ThProps } from './Th';
import TBody, { RowMapper } from './TBody';

type TableSize = 'small';

interface TableProps<TRowData> extends TableHTMLAttributes<HTMLTableElement> {
    size?: TableSize;
    singleLineItems?: boolean;
    headerProps: ThProps[];
    data: TRowData[];
    rowMapper: RowMapper<TRowData>;
    highlightNewItems?: boolean;
}

const Table = <TRowData extends {}>({
    headerProps,
    data,
    rowMapper,
    size,
    singleLineItems,
    highlightNewItems,
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

            <TBody data={data} rowMapper={rowMapper} useAnimations={highlightNewItems} />
        </table>
    );
};

export default Table;
