import React from 'react';
import Td, { TdProps } from './Td';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export type RowMapper<TRowData> = (row: TRowData) => { key: React.Key; rowProps: TdProps[] };

interface TBodyProps<TRowData> {
    data: TRowData[];
    rowMapper: RowMapper<TRowData>;
    useAnimations?: boolean;
}

const TBody = <TRowData extends {}>({ data, rowMapper, useAnimations }: TBodyProps<TRowData>) => {
    const defineItemKey = !useAnimations;
    const defineItemRef = !!useAnimations;

    const nodeRefs = data.reduce<{ [key: React.Key]: React.Ref<HTMLTableRowElement> }>((refs, item) => {
        const { key } = rowMapper(item);
        return { ...refs, [key]: React.createRef<HTMLTableRowElement>() };
    }, {});

    const rows = data.map<[JSX.Element, React.Key]>((rowData) => {
        const { key, rowProps } = rowMapper(rowData);
        return [
            <tr
                className="c-table-row"
                key={defineItemKey ? key : undefined}
                ref={defineItemRef ? nodeRefs[key] : undefined}
            >
                {rowProps.map((rProps, i) => (
                    <Td key={i} {...rProps} />
                ))}
            </tr>,
            key,
        ];
    });

    if (!!useAnimations) {
        return (
            <TransitionGroup component="tbody">
                {rows.map(([row, key]) => (
                    <CSSTransition
                        key={key}
                        classNames={{
                            enter: 'c-table-row--animated',
                        }}
                        timeout={{ enter: 2000, exit: 0 }}
                        nodeRef={nodeRefs[key]}
                    >
                        {row}
                    </CSSTransition>
                ))}
            </TransitionGroup>
        );
    }

    return <tbody>{rows.map(([row, key]) => row)}</tbody>;
};

export default TBody;
