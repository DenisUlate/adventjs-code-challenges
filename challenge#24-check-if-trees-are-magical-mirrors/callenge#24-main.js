/**
 * @param {object} tree1 - The first binary tree.
 * @param {object} tree2 - The second binary tree.
 * @returns {[boolean, string]}
 */
function isTreesSynchronized(tree1, tree2) {
	// Helper function to check if two trees are mirrors
	function areMirrors(left, right) {
		// Both nodes are null - they mirror each other
		if (!left && !right) return true;

		// One node is null but the other isn't - not mirrors
		if (!left || !right) return false;

		// Values must match
		if (left.value !== right.value) return false;

		// Recursively check if left's children mirror right's children (swapped)
		return areMirrors(left.left, right.right) && areMirrors(left.right, right.left);
	}

	const isMirror = areMirrors(tree1, tree2);
	return [isMirror, tree1.value];
}

// Test cases
const tree1 = {
	value: "🎄",
	left: { value: "⭐" },
	right: { value: "🎅" },
};

const tree2 = {
	value: "🎄",
	left: { value: "🎅" },
	right: { value: "⭐" },
};

const tree3 = {
	value: "🎄",
	left: { value: "🎅" },
	right: { value: "🎁" },
};

const tree4 = {
	value: "🎄",
	left: { value: "⭐" },
	right: { value: "🎅" },
};

console.log('Test 1 (should be [true, "🎄"]):', isTreesSynchronized(tree1, tree2));
console.log('Test 2 (should be [false, "🎄"]):', isTreesSynchronized(tree1, tree3));
console.log('Test 3 (should be [false, "🎄"]):', isTreesSynchronized(tree1, tree4));
console.log('Test 4 (should be [false, "🎅"]):', isTreesSynchronized({ value: "🎅" }, { value: "🧑‍🎄" }));
