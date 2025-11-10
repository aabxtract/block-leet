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
      {
        id: '1-4',
        slug: 'owner-contract',
        title: 'Owner Contract',
        description: 'Create a contract with an owner. Only the owner should be able to call a specific function. This introduces msg.sender and simple access control.',
        difficulty: 'Easy',
        points: 25,
        section: 'Solidity Basics',
        starterCode: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Owner {
    address public owner;
    string public secretMessage;

    constructor() {
        owner = msg.sender;
    }

    function setSecretMessage(string memory _message) public {
        // Your implementation here: only the owner should be able to set the message
    }
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
        },
        {
            id: '2-3',
            slug: 'approvable-token',
            title: 'Approvable Token',
            description: 'Extend an ERC20 token by implementing the `approve` and `transferFrom` functions. This is a core concept for enabling smart contracts to interact with tokens on a user\'s behalf.',
            difficulty: 'Medium',
            points: 70,
            section: 'ERC20 Tokens',
            starterCode: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IFullERC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
}

contract ApprovableToken is IFullERC20 {
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
        },
        {
            id: '3-2',
            slug: 're-entrancy-guard',
            title: 'Re-entrancy Guard',
            description: 'Implement a simple guard to prevent re-entrancy attacks. You will create a modifier that protects a function from being called again while it is still executing.',
            difficulty: 'Hard',
            points: 120,
            section: 'Advanced Concepts',
            starterCode: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract ReentrancyGuard {
    bool internal locked;

    modifier noReentrant() {
        // Your implementation here
        _;
        // And here
    }

    // Example function to protect
    function protectedFunction() public noReentrant {
        // some logic
    }
}`
        }
    ]
  },
  {
    id: 'section-4',
    title: 'NFTs (ERC721)',
    description: 'Explore the world of unique digital assets with Non-Fungible Tokens.',
    problems: [
      {
        id: '4-1',
        slug: 'basic-nft',
        title: 'Basic NFT',
        description: 'Create a basic ERC721 contract. Implement the `mint` function to create new NFTs and the `ownerOf` function to check token ownership.',
        difficulty: 'Medium',
        points: 80,
        section: 'NFTs (ERC721)',
        starterCode: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IERC721 {
    function ownerOf(uint256 tokenId) external view returns (address owner);
}

contract BasicNFT is IERC721 {
    // Your implementation here
}`
      },
      {
        id: '4-2',
        slug: 'nft-with-metadata',
        title: 'NFT with Metadata',
        description: 'Extend your NFT contract to include metadata. Each token should have a unique URI pointing to a JSON file with its properties (name, description, image).',
        difficulty: 'Hard',
        points: 110,
        section: 'NFTs (ERC721)',
        starterCode: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IERC721Metadata {
    function tokenURI(uint256 tokenId) external view returns (string memory);
}

contract MetadataNFT is IERC721Metadata {
    // Your implementation here
}`
      }
    ]
  }
];
