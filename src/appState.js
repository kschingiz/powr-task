import { observable } from "mobx";
import { generateId, getRandomColor } from "./utils";

class AppStore {
  tree = { root: [] };
  items = {};

  constructor() {
    this.tree = observable.map(this.tree);
    this.items = observable.map(this.items);
  }

  addToTree(parentId, item, itemId = generateId(10)) {
    this.items.set(itemId, item);
    this.tree.get(parentId).push(itemId);
    this.tree.set(itemId, []);
  }

  changeColor(current) {
    const item = this.items.get(current);

    this.items.set(current, {
      ...item,
      color: getRandomColor()
    });
  }

  getTree(root = "root") {
    const rootChilds = this.tree.get(root);
    const rootItem = this.items.get(root) || {};

    if (rootItem.type === "box") {
      return {
        type: "box",
        color: rootItem.color
      };
    } else if (rootChilds.length === 0) {
      return {
        type: "container",
        items: []
      };
    }

    const childItems = rootChilds.map(child => this.getTree(child));

    return {
      type: "container",
      items: childItems
    };
  }

  buildTree(tree, parent = "root") {
    const currentId = generateId();

    this.addToTree(
      parent,
      {
        type: "container"
      },
      currentId
    );

    tree.items.forEach(item => {
      if (item.type === "box") {
        this.addToTree(currentId, {
          type: "box",
          color: item.color || "orange"
        });
      } else if (item.type === "container") {
        this.buildTree(item, currentId);
      }
    });
  }

  getTreeItems(current) {
    const treeItems = this.tree.get(current) || [];

    const currentTree = treeItems.map(itemId => {
      const item = this.items.get(itemId);

      return {
        key: itemId,
        ...item
      };
    });

    return currentTree;
  }
}

// const appState = observable({
//   type: "container",
//   items: [
//     {
//       type: "box"
//     },
//     {
//       type: "container",
//       items: [
//         {
//           type: "box",
//           color: "green"
//         },
//         {
//           type: "box",
//           color: "red"
//         }
//       ]
//     }
//   ]
// });

const appState = new AppStore();

export default appState;
