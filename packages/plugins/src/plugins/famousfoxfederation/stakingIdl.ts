export const StakingIDL = {
  version: '0.1.0',
  name: 'staking',
  instructions: [
    {
      name: 'initialize',
      accounts: [
        { name: 'config', isMut: true, isSigner: true },
        { name: 'authority', isMut: true, isSigner: false },
        { name: 'systemProgram', isMut: false, isSigner: false },
      ],
      args: [
        { name: 'reward', type: 'publicKey' },
        { name: 'amount', type: 'i64' },
        { name: 'interval', type: 'i64' },
        { name: 'timelock', type: 'i64' },
      ],
    },
    {
      name: 'updateConfig',
      accounts: [
        { name: 'config', isMut: true, isSigner: false },
        { name: 'authority', isMut: false, isSigner: true },
      ],
      args: [
        { name: 'reward', type: 'publicKey' },
        { name: 'amount', type: 'i64' },
        { name: 'interval', type: 'i64' },
        { name: 'timelock', type: 'i64' },
      ],
    },
    {
      name: 'initDeposit',
      accounts: [
        { name: 'config', isMut: true, isSigner: false },
        { name: 'authority', isMut: false, isSigner: false },
        { name: 'rewardAccount', isMut: true, isSigner: false },
        { name: 'reward', isMut: false, isSigner: false },
        { name: 'owner', isMut: false, isSigner: true },
        { name: 'tokenProgram', isMut: false, isSigner: false },
        { name: 'systemProgram', isMut: false, isSigner: false },
        { name: 'rent', isMut: false, isSigner: false },
      ],
      args: [
        { name: 'authBump', type: 'u8' },
        { name: 'rewardBump', type: 'u8' },
      ],
    },
    {
      name: 'deposit',
      accounts: [
        { name: 'config', isMut: true, isSigner: false },
        { name: 'authority', isMut: false, isSigner: false },
        { name: 'rewardAccount', isMut: true, isSigner: false },
        { name: 'reward', isMut: false, isSigner: false },
        { name: 'mainAccount', isMut: true, isSigner: false },
        { name: 'owner', isMut: false, isSigner: true },
        { name: 'tokenProgram', isMut: false, isSigner: false },
      ],
      args: [{ name: 'amount', type: 'u64' }],
    },
    {
      name: 'stakeFox',
      accounts: [
        { name: 'config', isMut: true, isSigner: false },
        { name: 'authority', isMut: true, isSigner: false },
        { name: 'stakeAccount', isMut: true, isSigner: false },
        { name: 'tokenAccount', isMut: true, isSigner: false },
        { name: 'owner', isMut: false, isSigner: true },
        { name: 'fromAccount', isMut: true, isSigner: false },
        { name: 'mint', isMut: false, isSigner: false },
        { name: 'metadata', isMut: false, isSigner: false },
        { name: 'tokenProgram', isMut: false, isSigner: false },
        { name: 'systemProgram', isMut: false, isSigner: false },
        { name: 'rent', isMut: false, isSigner: false },
        { name: 'clock', isMut: false, isSigner: false },
      ],
      args: [
        { name: 'authBump', type: 'u8' },
        { name: 'stakeBump', type: 'u8' },
        { name: 'tokenBump', type: 'u8' },
      ],
    },
    {
      name: 'stakeFoxV2',
      accounts: [
        { name: 'config', isMut: true, isSigner: false },
        { name: 'authority', isMut: true, isSigner: false },
        { name: 'stakeAccount', isMut: true, isSigner: false },
        { name: 'owner', isMut: false, isSigner: true },
        { name: 'fromAccount', isMut: true, isSigner: false },
        { name: 'mint', isMut: false, isSigner: false },
        { name: 'metadata', isMut: false, isSigner: false },
        { name: 'metaplexAcc', isMut: false, isSigner: false },
        { name: 'masterEdition', isMut: false, isSigner: false },
        { name: 'tokenProgram', isMut: false, isSigner: false },
        { name: 'systemProgram', isMut: false, isSigner: false },
        { name: 'rent', isMut: false, isSigner: false },
        { name: 'clock', isMut: false, isSigner: false },
      ],
      args: [
        { name: 'authBump', type: 'u8' },
        { name: 'stakeBump', type: 'u8' },
      ],
    },
    {
      name: 'unstakeFox',
      accounts: [
        { name: 'config', isMut: true, isSigner: false },
        { name: 'authority', isMut: true, isSigner: false },
        { name: 'stakeAccount', isMut: true, isSigner: false },
        { name: 'tokenAccount', isMut: true, isSigner: false },
        { name: 'owner', isMut: true, isSigner: true },
        { name: 'toAccount', isMut: true, isSigner: false },
        { name: 'mint', isMut: false, isSigner: false },
        { name: 'tokenProgram', isMut: false, isSigner: false },
        { name: 'systemProgram', isMut: false, isSigner: false },
        { name: 'clock', isMut: false, isSigner: false },
        { name: 'associatedTokenProgram', isMut: false, isSigner: false },
        { name: 'rent', isMut: false, isSigner: false },
      ],
      args: [],
    },
    {
      name: 'bonkDerug',
      accounts: [
        { name: 'config', isMut: true, isSigner: false },
        { name: 'authority', isMut: true, isSigner: false },
        { name: 'tokenAccount', isMut: true, isSigner: false },
        { name: 'owner', isMut: true, isSigner: true },
        { name: 'toAccount', isMut: true, isSigner: false },
        { name: 'mint', isMut: false, isSigner: false },
        { name: 'tokenProgram', isMut: false, isSigner: false },
        { name: 'systemProgram', isMut: false, isSigner: false },
        { name: 'associatedTokenProgram', isMut: false, isSigner: false },
        { name: 'rent', isMut: false, isSigner: false },
      ],
      args: [{ name: 'bump', type: 'u8' }],
    },
    {
      name: 'unstakeFoxV2',
      accounts: [
        { name: 'config', isMut: true, isSigner: false },
        { name: 'authority', isMut: true, isSigner: false },
        { name: 'stakeAccount', isMut: true, isSigner: false },
        { name: 'masterEdition', isMut: false, isSigner: false },
        { name: 'metaplexAcc', isMut: false, isSigner: false },
        { name: 'owner', isMut: true, isSigner: true },
        { name: 'toAccount', isMut: true, isSigner: false },
        { name: 'mint', isMut: false, isSigner: false },
        { name: 'tokenProgram', isMut: false, isSigner: false },
        { name: 'systemProgram', isMut: false, isSigner: false },
        { name: 'clock', isMut: false, isSigner: false },
        { name: 'rent', isMut: false, isSigner: false },
      ],
      args: [],
    },
    {
      name: 'claim',
      accounts: [
        { name: 'config', isMut: true, isSigner: false },
        { name: 'authority', isMut: false, isSigner: false },
        { name: 'rewardAccount', isMut: true, isSigner: false },
        { name: 'userRewardAccount', isMut: true, isSigner: false },
        { name: 'stakeAccount', isMut: true, isSigner: false },
        { name: 'owner', isMut: false, isSigner: true },
        { name: 'mint', isMut: false, isSigner: false },
        { name: 'reward', isMut: false, isSigner: false },
        { name: 'clock', isMut: false, isSigner: false },
        { name: 'tokenProgram', isMut: false, isSigner: false },
        { name: 'associatedTokenProgram', isMut: false, isSigner: false },
        { name: 'rent', isMut: false, isSigner: false },
        { name: 'systemProgram', isMut: false, isSigner: false },
      ],
      args: [],
    },
  ],
  accounts: [
    {
      name: 'StakingAccount',
      type: {
        kind: 'struct',
        fields: [
          { name: 'bump', type: 'u8' },
          { name: 'fox', type: 'publicKey' },
          { name: 'owner', type: 'publicKey' },
          { name: 'lock', type: 'i64' },
          { name: 'lastClaim', type: 'i64' },
          { name: 'tff', type: 'bool' },
          { name: 'v2', type: 'bool' },
        ],
      },
    },
    {
      name: 'StakingConfig',
      type: {
        kind: 'struct',
        fields: [
          { name: 'bump', type: 'u8' },
          { name: 'reward', type: 'publicKey' },
          { name: 'authority', type: 'publicKey' },
          { name: 'amount', type: 'i64' },
          { name: 'interval', type: 'i64' },
          { name: 'timelock', type: 'i64' },
          { name: 'count', type: 'u64' },
          { name: 'tcount', type: 'u64' },
        ],
      },
    },
  ],
  errors: [
    { code: 6000, name: 'IncorrectOwner', msg: 'Invalid owner account' },
    { code: 6001, name: 'FoxLocked', msg: 'Fox is locked' },
    { code: 6002, name: 'FoxNotStaked', msg: 'Fox not staked' },
    { code: 6003, name: 'FoxNotFound', msg: 'Fox not found' },
    { code: 6004, name: 'NoReward', msg: 'No reward' },
    { code: 6005, name: 'InvalidReward', msg: 'Invalid reward account' },
    { code: 6006, name: 'InvalidFox', msg: 'Invalid Index' },
    { code: 6007, name: 'InvalidMetadata', msg: 'Invalid Fox' },
    { code: 6008, name: 'ClaimReward', msg: 'Claim Reward' },
  ],
};
