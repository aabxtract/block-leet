import type { Section, User, UserProgress } from '@/lib/types';

export const user: User = {
  name: 'Satoshi',
  level: 5,
  xp: 350,
  xpToNextLevel: 500,
  streak: 3,
};

export const userProgress: UserProgress = {
  completedProblems: ['1-1', '1-2'],
};

export const sections: Section[] = [
  {
    id: 'section-1',
    title: 'Solidity Basics',
    description: 'Start your journey by learning the fundamentals of Solidity.',
    problems: [
      {
        id: '1-1',
        slug: 'hello-solidity',
        title: 'Hello, Solidity',
        description: 'Create a simple "Hello, World" smart contract that stores and returns a greeting string. This will introduce you to basic contract structure, state variables, and functions.',
        difficulty: 'Easy',
        points: 10,
        section: 'Solidity Basics',
        starterCode: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract HelloWorld {
    string public greet = "Hello, World!";
}`
      },
      {
        id: '1-2',
        slug: 'simple-storage',
        title: 'Simple Storage',
        description: 'Write a contract that can store a single unsigned integer. It should have a function to set the number and a function to retrieve it. This will teach you about state modification and public getters.',
        difficulty: 'Easy',
        points: 15,
        section: 'Solidity Basics',
        starterCode: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SimpleStorage {
    uint256 private myNumber;

    function set(uint256 _number) public {
        myNumber = _number;
    }

    function get() public view returns (uint256) {
        return myNumber;
    }
}`
      },
      {
        id: '1-3',
        slug: 'counter',
        title: 'Counter Contract',
        description: 'Build a contract that acts as a counter. It should have functions to increment, decrement, and get the current count. This challenge focuses on function visibility and basic arithmetic operations.',
        difficulty: 'Easy',
        points: 20,
        section: 'Solidity Basics',
        starterCode: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Counter {
    uint256 public count;

    // Your implementation here
}`
      },
    ]
  },
  {
    id: 'section-2',
    title: 'ERC20 Tokens',
    description: 'Dive into the world of fungible tokens with the ERC20 standard.',
    problems: [
        {
            id: '2-1',
            slug: 'basic-erc20',
            title: 'Basic ERC20',
            description: 'Implement a basic ERC20 token with a fixed supply, including functions for transferring tokens and checking balances. Do not worry about approvals or allowances yet.',
            difficulty: 'Medium',
            points: 50,
            section: 'ERC20 Tokens',
            starterCode: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IERC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
}

contract BasicERC20 is IERC20 {
    // Your implementation here
}`
        },
        {
            id: '2-2',
            slug: 'mintable-token',
            title: 'Mintable Token',
            description: 'Create an ERC20 token where only the contract owner can mint new tokens. This introduces the concept of access control and dynamic supply.',
            difficulty: 'Medium',
            points: 60,
            section: 'ERC20 Tokens',
            starterCode: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// Tip: You might want to use OpenZeppelin's Ownable contract, but it's not required.

contract MintableToken {
    // Your implementation here
}`
        }
    ]
  },
   {
    id: 'section-3',
    title: 'Advanced Concepts',
    description: 'Challenge yourself with more complex smart contract patterns.',
    problems: [
        {
            id: '3-1',
            slug: 'simple-voting',
            title: 'Simple Voting',
            description: 'Design a contract for a simple voting system. Users can cast a vote for one of several proposals. The contract should track votes and determine a winner.',
            difficulty: 'Hard',
            points: 100,
            section: 'Advanced Concepts',
            starterCode: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Voting {
    // Your implementation here
}`
        }
    ]
  }
];
