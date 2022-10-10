import React from 'react';
import CheckboxTree from 'react-checkbox-tree';

const nodes = [
    {
        value: 'Documents',
        label: 'Documents',
        children: [
            {
                value: 'Employee Evaluations.zip',
                label: 'Employee Evaluations.zip',
            },
            {
                value: 'Expense Report.pdf',
                label: 'Expense Report.pdf',
            },
            {
                value: 'notes.txt',
                label: 'notes.txt',
            },
        ],
    },
    {
        value: 'Photos',
        label: 'Photos',
        children: [
            {
                value: 'nyan-cat.gif',
                label: 'nyan-cat.gif',
            },
            {
                value: 'SpaceX Falcon9 liftoff.jpg',
                label: 'SpaceX Falcon9 liftoff.jpg',
            },
        ],
    },
];

class CustomIconsExamples extends React.Component {
    state = {
        checked: [],
        expanded: [
            'Documents',
        ],
    };

    constructor(props) {
        super(props);

        this.onCheck = this.onCheck.bind(this);
        this.onExpand = this.onExpand.bind(this);
    }

    onCheck(checked) {
        this.setState({ checked });
    }

    onExpand(expanded) {
        this.setState({ expanded });
    }

    render() {
        const { checked, expanded } = this.state;

        return (
            <CheckboxTree
                checked={checked}
                expanded={expanded}
                iconsClass="fa5"
                nodes={nodes}
                onCheck={this.onCheck}
                onExpand={this.onExpand}
                showExpandAll
            />
        );
    }
}

export default CustomIconsExamples;