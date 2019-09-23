const { isExpressionType, getExpressionType } = require("../util");

const isMelodyNode = n => {
    const proto = n.__proto__;
    return typeof n === "object" && proto.type && proto.visitorKeys;
};

const findParentNode = path => {
    let currentIndex = path.stack.length - 2;
    while (currentIndex >= 0) {
        const currentElement = path.stack[currentIndex];
        if (isMelodyNode(currentElement)) {
            return currentElement;
        }
        currentIndex--;
    }
    return null;
};

const p = (node, path, print, options) => {
    // The parent node of this StringLiteral is 2 positions
    // up in the stack. If it is some kind of Expression,
    // we have to put quotes around the value.
    const parentNode = findParentNode(path);
    if (parentNode) {
        if (isExpressionType(parentNode)) {
            return '"' + node.value + '"';
        }
    }
    return node.value;
};

module.exports = {
    printStringLiteral: p
};