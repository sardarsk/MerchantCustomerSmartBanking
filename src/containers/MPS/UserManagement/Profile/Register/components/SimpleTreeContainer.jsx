/* eslint no-console:0 */
/* eslint no-alert:0 */
/* eslint jsx-a11y/no-noninteractive-element-interactions:0 */
import React from "react";
import Tree, { TreeNode } from "rc-tree";
import DropableContainer from "./DropableContainer";

const treeData = [
  {
    key: "0-0",
    title: "parent 1",
    children: [
      {
        key: "0-0-0",
        title: "parent 1-1",
        children: [{ key: "0-0-0-0", title: "parent 1-1-0" }]
      },
      {
        key: "0-0-1",
        title: "parent 1-2",
        children: [
          { key: "0-0-1-0", title: "parent 1-2-0", disableCheckbox: true },
          { key: "0-0-1-1", title: "parent 1-2-1" },
          { key: "0-0-1-2", title: "parent 1-2-1" },
          { key: "0-0-1-3", title: "parent 1-2-1" },
          { key: "0-0-1-4", title: "parent 1-2-1" },
          { key: "0-0-1-5", title: "parent 1-2-1" },
          { key: "0-0-1-6", title: "parent 1-2-1" }
        ]
      }
    ]
  }
];

class SimpleTreeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultExpandedKeys: ["0-0-1"],
      selectedKeys: [],
      droppedItems: []
    };
  }

  onSelect = (selectedKeys, { selected, selectedNodes, node, event, nativeEvent }) => {
    console.log("Demo:onSelect", selectedKeys);
    console.log({ selected, selectedNodes, node, event, nativeEvent });
    this.setState({ ...this.state, selectedKeys });
  };

  onDrop = e => {
    console.log("Demo:onDrop", e);
    console.log("Demo:onDrop --this.state.selectedKeys", this.state.selectedKeys);

    const allDroppedItems = [...this.state.droppedItems, ...this.state.selectedKeys];

    this.setState({
      ...this.state,
      droppedItems: Array.from(new Set(allDroppedItems))
      // selectedKeys: []
    });
  };

  render() {
    return (
      <div className="draggable-demo">
        <div className="dd-demo-container">
          <DropableContainer items={this.state.droppedItems} onDrop={this.onDrop} />
          <div className="draggable-container">
            <Tree
              multiple
              draggable
              treeData={treeData}
              defaultExpandedKeys={this.state.defaultExpandedKeys}
              selectedKeys={this.state.selectedKeys}
              onDragStart={this.onDragStart}
              onSelect={this.onSelect}
              autoExpandParent
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SimpleTreeContainer;
