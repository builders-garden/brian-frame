export const LIFI_DIAMOND_PROXY_ABI = 
[
    {
      "type": "function",
      "name": "addressCanExecuteMethod",
      "inputs": [
        { "name": "_selector", "type": "bytes4", "internalType": "bytes4" },
        { "name": "_executor", "type": "address", "internalType": "address" }
      ],
      "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "setCanExecute",
      "inputs": [
        { "name": "_selector", "type": "bytes4", "internalType": "bytes4" },
        { "name": "_executor", "type": "address", "internalType": "address" },
        { "name": "_canExecute", "type": "bool", "internalType": "bool" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "ExecutionAllowed",
      "inputs": [
        {
          "name": "account",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "method",
          "type": "bytes4",
          "indexed": true,
          "internalType": "bytes4"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "ExecutionDenied",
      "inputs": [
        {
          "name": "account",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "method",
          "type": "bytes4",
          "indexed": true,
          "internalType": "bytes4"
        }
      ],
      "anonymous": false
    },
    { "type": "error", "name": "CannotAuthoriseSelf", "inputs": [] },
    { "type": "error", "name": "OnlyContractOwner", "inputs": [] },
    {
      "type": "constructor",
      "inputs": [
        {
          "name": "_spokePool",
          "type": "address",
          "internalType": "contract IAcrossSpokePool"
        },
        { "name": "_wrappedNative", "type": "address", "internalType": "address" }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaAcross",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_acrossData",
          "type": "tuple",
          "internalType": "struct AcrossFacet.AcrossData",
          "components": [
            { "name": "relayerFeePct", "type": "int64", "internalType": "int64" },
            {
              "name": "quoteTimestamp",
              "type": "uint32",
              "internalType": "uint32"
            },
            { "name": "message", "type": "bytes", "internalType": "bytes" },
            { "name": "maxCount", "type": "uint256", "internalType": "uint256" }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "swapAndStartBridgeTokensViaAcross",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_swapData",
          "type": "tuple[]",
          "internalType": "struct LibSwap.SwapData[]",
          "components": [
            { "name": "callTo", "type": "address", "internalType": "address" },
            { "name": "approveTo", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "receivingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "fromAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "callData", "type": "bytes", "internalType": "bytes" },
            { "name": "requiresDeposit", "type": "bool", "internalType": "bool" }
          ]
        },
        {
          "name": "_acrossData",
          "type": "tuple",
          "internalType": "struct AcrossFacet.AcrossData",
          "components": [
            { "name": "relayerFeePct", "type": "int64", "internalType": "int64" },
            {
              "name": "quoteTimestamp",
              "type": "uint32",
              "internalType": "uint32"
            },
            { "name": "message", "type": "bytes", "internalType": "bytes" },
            { "name": "maxCount", "type": "uint256", "internalType": "uint256" }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "event",
      "name": "LiFiGenericSwapCompleted",
      "inputs": [
        {
          "name": "transactionId",
          "type": "bytes32",
          "indexed": true,
          "internalType": "bytes32"
        },
        {
          "name": "integrator",
          "type": "string",
          "indexed": false,
          "internalType": "string"
        },
        {
          "name": "referrer",
          "type": "string",
          "indexed": false,
          "internalType": "string"
        },
        {
          "name": "receiver",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "fromAssetId",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "toAssetId",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "fromAmount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "toAmount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "LiFiSwappedGeneric",
      "inputs": [
        {
          "name": "transactionId",
          "type": "bytes32",
          "indexed": true,
          "internalType": "bytes32"
        },
        {
          "name": "integrator",
          "type": "string",
          "indexed": false,
          "internalType": "string"
        },
        {
          "name": "referrer",
          "type": "string",
          "indexed": false,
          "internalType": "string"
        },
        {
          "name": "fromAssetId",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "toAssetId",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "fromAmount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "toAmount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "LiFiTransferCompleted",
      "inputs": [
        {
          "name": "transactionId",
          "type": "bytes32",
          "indexed": true,
          "internalType": "bytes32"
        },
        {
          "name": "receivingAssetId",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "receiver",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "timestamp",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "LiFiTransferRecovered",
      "inputs": [
        {
          "name": "transactionId",
          "type": "bytes32",
          "indexed": true,
          "internalType": "bytes32"
        },
        {
          "name": "receivingAssetId",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "receiver",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "timestamp",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "LiFiTransferStarted",
      "inputs": [
        {
          "name": "bridgeData",
          "type": "tuple",
          "indexed": false,
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        }
      ],
      "anonymous": false
    },
    { "type": "error", "name": "CannotBridgeToSameNetwork", "inputs": [] },
    { "type": "error", "name": "ContractCallNotAllowed", "inputs": [] },
    {
      "type": "error",
      "name": "CumulativeSlippageTooHigh",
      "inputs": [
        { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
        { "name": "receivedAmount", "type": "uint256", "internalType": "uint256" }
      ]
    },
    { "type": "error", "name": "InformationMismatch", "inputs": [] },
    {
      "type": "error",
      "name": "InsufficientBalance",
      "inputs": [
        { "name": "required", "type": "uint256", "internalType": "uint256" },
        { "name": "balance", "type": "uint256", "internalType": "uint256" }
      ]
    },
    { "type": "error", "name": "InvalidAmount", "inputs": [] },
    { "type": "error", "name": "InvalidContract", "inputs": [] },
    { "type": "error", "name": "InvalidReceiver", "inputs": [] },
    { "type": "error", "name": "NativeAssetTransferFailed", "inputs": [] },
    { "type": "error", "name": "NoSwapDataProvided", "inputs": [] },
    { "type": "error", "name": "NoSwapFromZeroBalance", "inputs": [] },
    { "type": "error", "name": "NoTransferToNullAddress", "inputs": [] },
    { "type": "error", "name": "NullAddrIsNotAValidSpender", "inputs": [] },
    { "type": "error", "name": "NullAddrIsNotAnERC20Token", "inputs": [] },
    { "type": "error", "name": "ReentrancyError", "inputs": [] },
    { "type": "error", "name": "SliceOutOfBounds", "inputs": [] },
    { "type": "error", "name": "SliceOverflow", "inputs": [] },
    {
      "type": "function",
      "name": "ACROSS_REFERRER_DELIMITER",
      "inputs": [],
      "outputs": [{ "name": "", "type": "bytes", "internalType": "bytes" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "cancelOwnershipTransfer",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "confirmOwnershipTransfer",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "decode_startBridgeTokensViaAcrossERC20Packed",
      "inputs": [{ "name": "data", "type": "bytes", "internalType": "bytes" }],
      "outputs": [
        {
          "name": "bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "acrossData",
          "type": "tuple",
          "internalType": "struct AcrossFacet.AcrossData",
          "components": [
            { "name": "relayerFeePct", "type": "int64", "internalType": "int64" },
            {
              "name": "quoteTimestamp",
              "type": "uint32",
              "internalType": "uint32"
            },
            { "name": "message", "type": "bytes", "internalType": "bytes" },
            { "name": "maxCount", "type": "uint256", "internalType": "uint256" }
          ]
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "decode_startBridgeTokensViaAcrossNativePacked",
      "inputs": [{ "name": "data", "type": "bytes", "internalType": "bytes" }],
      "outputs": [
        {
          "name": "bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "acrossData",
          "type": "tuple",
          "internalType": "struct AcrossFacet.AcrossData",
          "components": [
            { "name": "relayerFeePct", "type": "int64", "internalType": "int64" },
            {
              "name": "quoteTimestamp",
              "type": "uint32",
              "internalType": "uint32"
            },
            { "name": "message", "type": "bytes", "internalType": "bytes" },
            { "name": "maxCount", "type": "uint256", "internalType": "uint256" }
          ]
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "encode_startBridgeTokensViaAcrossERC20Packed",
      "inputs": [
        { "name": "transactionId", "type": "bytes32", "internalType": "bytes32" },
        { "name": "receiver", "type": "address", "internalType": "address" },
        {
          "name": "sendingAssetId",
          "type": "address",
          "internalType": "address"
        },
        { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
        {
          "name": "destinationChainId",
          "type": "uint256",
          "internalType": "uint256"
        },
        { "name": "relayerFeePct", "type": "int64", "internalType": "int64" },
        { "name": "quoteTimestamp", "type": "uint32", "internalType": "uint32" },
        { "name": "message", "type": "bytes", "internalType": "bytes" },
        { "name": "maxCount", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [{ "name": "", "type": "bytes", "internalType": "bytes" }],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "encode_startBridgeTokensViaAcrossNativePacked",
      "inputs": [
        { "name": "transactionId", "type": "bytes32", "internalType": "bytes32" },
        { "name": "receiver", "type": "address", "internalType": "address" },
        {
          "name": "destinationChainId",
          "type": "uint64",
          "internalType": "uint64"
        },
        { "name": "relayerFeePct", "type": "int64", "internalType": "int64" },
        { "name": "quoteTimestamp", "type": "uint32", "internalType": "uint32" },
        { "name": "maxCount", "type": "uint256", "internalType": "uint256" },
        { "name": "message", "type": "bytes", "internalType": "bytes" }
      ],
      "outputs": [{ "name": "", "type": "bytes", "internalType": "bytes" }],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "executeCallAndWithdraw",
      "inputs": [
        { "name": "_callTo", "type": "address", "internalType": "address" },
        { "name": "_callData", "type": "bytes", "internalType": "bytes" },
        { "name": "_assetAddress", "type": "address", "internalType": "address" },
        { "name": "_to", "type": "address", "internalType": "address" },
        { "name": "_amount", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "owner",
      "inputs": [],
      "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "pendingOwner",
      "inputs": [],
      "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "setApprovalForBridge",
      "inputs": [
        {
          "name": "tokensToApprove",
          "type": "address[]",
          "internalType": "address[]"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaAcrossERC20Min",
      "inputs": [
        { "name": "transactionId", "type": "bytes32", "internalType": "bytes32" },
        {
          "name": "sendingAssetId",
          "type": "address",
          "internalType": "address"
        },
        { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
        { "name": "receiver", "type": "address", "internalType": "address" },
        {
          "name": "destinationChainId",
          "type": "uint64",
          "internalType": "uint64"
        },
        { "name": "relayerFeePct", "type": "int64", "internalType": "int64" },
        { "name": "quoteTimestamp", "type": "uint32", "internalType": "uint32" },
        { "name": "message", "type": "bytes", "internalType": "bytes" },
        { "name": "maxCount", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaAcrossERC20Packed",
      "inputs": [],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaAcrossNativeMin",
      "inputs": [
        { "name": "transactionId", "type": "bytes32", "internalType": "bytes32" },
        { "name": "receiver", "type": "address", "internalType": "address" },
        {
          "name": "destinationChainId",
          "type": "uint256",
          "internalType": "uint256"
        },
        { "name": "relayerFeePct", "type": "int64", "internalType": "int64" },
        { "name": "quoteTimestamp", "type": "uint32", "internalType": "uint32" },
        { "name": "message", "type": "bytes", "internalType": "bytes" },
        { "name": "maxCount", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaAcrossNativePacked",
      "inputs": [],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "transferOwnership",
      "inputs": [
        { "name": "_newOwner", "type": "address", "internalType": "address" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "CallExecutedAndFundsWithdrawn",
      "inputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "LiFiAcrossTransfer",
      "inputs": [
        {
          "name": "_transactionId",
          "type": "bytes8",
          "indexed": false,
          "internalType": "bytes8"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "OwnershipTransferRequested",
      "inputs": [
        {
          "name": "_from",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "_to",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "OwnershipTransferred",
      "inputs": [
        {
          "name": "previousOwner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "newOwner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    { "type": "error", "name": "NewOwnerMustNotBeSelf", "inputs": [] },
    { "type": "error", "name": "NoNullOwner", "inputs": [] },
    { "type": "error", "name": "NoPendingOwnershipTransfer", "inputs": [] },
    { "type": "error", "name": "NotPendingOwner", "inputs": [] },
    { "type": "error", "name": "UnAuthorized", "inputs": [] },
    { "type": "error", "name": "WithdrawFailed", "inputs": [] },
    {
      "type": "function",
      "name": "startBridgeTokensViaAllBridge",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_allBridgeData",
          "type": "tuple",
          "internalType": "struct AllBridgeFacet.AllBridgeData",
          "components": [
            { "name": "fees", "type": "uint256", "internalType": "uint256" },
            { "name": "recipient", "type": "bytes32", "internalType": "bytes32" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "receiveToken",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "nonce", "type": "uint256", "internalType": "uint256" },
            {
              "name": "messenger",
              "type": "uint8",
              "internalType": "enum IAllBridge.MessengerProtocol"
            },
            {
              "name": "payFeeWithSendingAsset",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "swapAndStartBridgeTokensViaAllBridge",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_swapData",
          "type": "tuple[]",
          "internalType": "struct LibSwap.SwapData[]",
          "components": [
            { "name": "callTo", "type": "address", "internalType": "address" },
            { "name": "approveTo", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "receivingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "fromAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "callData", "type": "bytes", "internalType": "bytes" },
            { "name": "requiresDeposit", "type": "bool", "internalType": "bool" }
          ]
        },
        {
          "name": "_allBridgeData",
          "type": "tuple",
          "internalType": "struct AllBridgeFacet.AllBridgeData",
          "components": [
            { "name": "fees", "type": "uint256", "internalType": "uint256" },
            { "name": "recipient", "type": "bytes32", "internalType": "bytes32" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "receiveToken",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "nonce", "type": "uint256", "internalType": "uint256" },
            {
              "name": "messenger",
              "type": "uint8",
              "internalType": "enum IAllBridge.MessengerProtocol"
            },
            {
              "name": "payFeeWithSendingAsset",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaAmarok",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_amarokData",
          "type": "tuple",
          "internalType": "struct AmarokFacet.AmarokData",
          "components": [
            { "name": "callData", "type": "bytes", "internalType": "bytes" },
            { "name": "callTo", "type": "address", "internalType": "address" },
            {
              "name": "relayerFee",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "slippageTol",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "delegate", "type": "address", "internalType": "address" },
            {
              "name": "destChainDomainId",
              "type": "uint32",
              "internalType": "uint32"
            },
            {
              "name": "payFeeWithSendingAsset",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "swapAndStartBridgeTokensViaAmarok",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_swapData",
          "type": "tuple[]",
          "internalType": "struct LibSwap.SwapData[]",
          "components": [
            { "name": "callTo", "type": "address", "internalType": "address" },
            { "name": "approveTo", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "receivingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "fromAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "callData", "type": "bytes", "internalType": "bytes" },
            { "name": "requiresDeposit", "type": "bool", "internalType": "bool" }
          ]
        },
        {
          "name": "_amarokData",
          "type": "tuple",
          "internalType": "struct AmarokFacet.AmarokData",
          "components": [
            { "name": "callData", "type": "bytes", "internalType": "bytes" },
            { "name": "callTo", "type": "address", "internalType": "address" },
            {
              "name": "relayerFee",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "slippageTol",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "delegate", "type": "address", "internalType": "address" },
            {
              "name": "destChainDomainId",
              "type": "uint32",
              "internalType": "uint32"
            },
            {
              "name": "payFeeWithSendingAsset",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    { "type": "error", "name": "NativeAssetNotSupported", "inputs": [] },
    {
      "type": "function",
      "name": "decode_startBridgeTokensViaAmarokERC20PackedPayFeeWithAsset",
      "inputs": [{ "name": "_data", "type": "bytes", "internalType": "bytes" }],
      "outputs": [
        {
          "name": "",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "",
          "type": "tuple",
          "internalType": "struct AmarokFacet.AmarokData",
          "components": [
            { "name": "callData", "type": "bytes", "internalType": "bytes" },
            { "name": "callTo", "type": "address", "internalType": "address" },
            {
              "name": "relayerFee",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "slippageTol",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "delegate", "type": "address", "internalType": "address" },
            {
              "name": "destChainDomainId",
              "type": "uint32",
              "internalType": "uint32"
            },
            {
              "name": "payFeeWithSendingAsset",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "decode_startBridgeTokensViaAmarokERC20PackedPayFeeWithNative",
      "inputs": [{ "name": "_data", "type": "bytes", "internalType": "bytes" }],
      "outputs": [
        {
          "name": "",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "",
          "type": "tuple",
          "internalType": "struct AmarokFacet.AmarokData",
          "components": [
            { "name": "callData", "type": "bytes", "internalType": "bytes" },
            { "name": "callTo", "type": "address", "internalType": "address" },
            {
              "name": "relayerFee",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "slippageTol",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "delegate", "type": "address", "internalType": "address" },
            {
              "name": "destChainDomainId",
              "type": "uint32",
              "internalType": "uint32"
            },
            {
              "name": "payFeeWithSendingAsset",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "encode_startBridgeTokensViaAmarokERC20PackedPayFeeWithAsset",
      "inputs": [
        { "name": "transactionId", "type": "bytes32", "internalType": "bytes32" },
        { "name": "receiver", "type": "address", "internalType": "address" },
        {
          "name": "sendingAssetId",
          "type": "address",
          "internalType": "address"
        },
        { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
        {
          "name": "destChainDomainId",
          "type": "uint32",
          "internalType": "uint32"
        },
        { "name": "slippageTol", "type": "uint256", "internalType": "uint256" },
        { "name": "relayerFee", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [{ "name": "", "type": "bytes", "internalType": "bytes" }],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "encode_startBridgeTokensViaAmarokERC20PackedPayFeeWithNative",
      "inputs": [
        { "name": "transactionId", "type": "bytes32", "internalType": "bytes32" },
        { "name": "receiver", "type": "address", "internalType": "address" },
        {
          "name": "sendingAssetId",
          "type": "address",
          "internalType": "address"
        },
        { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
        {
          "name": "destChainDomainId",
          "type": "uint32",
          "internalType": "uint32"
        },
        { "name": "slippageTol", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [{ "name": "", "type": "bytes", "internalType": "bytes" }],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "getChainIdForDomain",
      "inputs": [
        { "name": "domainId", "type": "uint32", "internalType": "uint32" }
      ],
      "outputs": [
        { "name": "chainId", "type": "uint32", "internalType": "uint32" }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaAmarokERC20MinPayFeeWithAsset",
      "inputs": [
        { "name": "transactionId", "type": "bytes32", "internalType": "bytes32" },
        { "name": "receiver", "type": "address", "internalType": "address" },
        {
          "name": "sendingAssetId",
          "type": "address",
          "internalType": "address"
        },
        { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
        {
          "name": "destChainDomainId",
          "type": "uint32",
          "internalType": "uint32"
        },
        { "name": "slippageTol", "type": "uint256", "internalType": "uint256" },
        { "name": "relayerFee", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaAmarokERC20MinPayFeeWithNative",
      "inputs": [
        { "name": "transactionId", "type": "bytes32", "internalType": "bytes32" },
        { "name": "receiver", "type": "address", "internalType": "address" },
        {
          "name": "sendingAssetId",
          "type": "address",
          "internalType": "address"
        },
        { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
        {
          "name": "destChainDomainId",
          "type": "uint32",
          "internalType": "uint32"
        },
        { "name": "slippageTol", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaAmarokERC20PackedPayFeeWithAsset",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaAmarokERC20PackedPayFeeWithNative",
      "inputs": [],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "event",
      "name": "LiFiAmarokTransfer",
      "inputs": [
        {
          "name": "_transactionId",
          "type": "bytes8",
          "indexed": false,
          "internalType": "bytes8"
        }
      ],
      "anonymous": false
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaArbitrumBridge",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_arbitrumData",
          "type": "tuple",
          "internalType": "struct ArbitrumBridgeFacet.ArbitrumData",
          "components": [
            {
              "name": "maxSubmissionCost",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "maxGas", "type": "uint256", "internalType": "uint256" },
            {
              "name": "maxGasPrice",
              "type": "uint256",
              "internalType": "uint256"
            }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "swapAndStartBridgeTokensViaArbitrumBridge",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_swapData",
          "type": "tuple[]",
          "internalType": "struct LibSwap.SwapData[]",
          "components": [
            { "name": "callTo", "type": "address", "internalType": "address" },
            { "name": "approveTo", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "receivingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "fromAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "callData", "type": "bytes", "internalType": "bytes" },
            { "name": "requiresDeposit", "type": "bool", "internalType": "bool" }
          ]
        },
        {
          "name": "_arbitrumData",
          "type": "tuple",
          "internalType": "struct ArbitrumBridgeFacet.ArbitrumData",
          "components": [
            {
              "name": "maxSubmissionCost",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "maxGas", "type": "uint256", "internalType": "uint256" },
            {
              "name": "maxGasPrice",
              "type": "uint256",
              "internalType": "uint256"
            }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaCBridge",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_cBridgeData",
          "type": "tuple",
          "internalType": "struct CBridgeFacet.CBridgeData",
          "components": [
            { "name": "maxSlippage", "type": "uint32", "internalType": "uint32" },
            { "name": "nonce", "type": "uint64", "internalType": "uint64" }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "swapAndStartBridgeTokensViaCBridge",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_swapData",
          "type": "tuple[]",
          "internalType": "struct LibSwap.SwapData[]",
          "components": [
            { "name": "callTo", "type": "address", "internalType": "address" },
            { "name": "approveTo", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "receivingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "fromAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "callData", "type": "bytes", "internalType": "bytes" },
            { "name": "requiresDeposit", "type": "bool", "internalType": "bool" }
          ]
        },
        {
          "name": "_cBridgeData",
          "type": "tuple",
          "internalType": "struct CBridgeFacet.CBridgeData",
          "components": [
            { "name": "maxSlippage", "type": "uint32", "internalType": "uint32" },
            { "name": "nonce", "type": "uint64", "internalType": "uint64" }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "triggerRefund",
      "inputs": [
        {
          "name": "_callTo",
          "type": "address",
          "internalType": "address payable"
        },
        { "name": "_callData", "type": "bytes", "internalType": "bytes" },
        { "name": "_assetAddress", "type": "address", "internalType": "address" },
        { "name": "_to", "type": "address", "internalType": "address" },
        { "name": "_amount", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "CBridgeRefund",
      "inputs": [
        {
          "name": "_assetAddress",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "_to",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    { "type": "error", "name": "ExternalCallFailed", "inputs": [] },
    { "type": "receive", "stateMutability": "payable" },
    {
      "type": "function",
      "name": "decode_startBridgeTokensViaCBridgeERC20Packed",
      "inputs": [{ "name": "_data", "type": "bytes", "internalType": "bytes" }],
      "outputs": [
        {
          "name": "",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "",
          "type": "tuple",
          "internalType": "struct CBridgeFacet.CBridgeData",
          "components": [
            { "name": "maxSlippage", "type": "uint32", "internalType": "uint32" },
            { "name": "nonce", "type": "uint64", "internalType": "uint64" }
          ]
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "decode_startBridgeTokensViaCBridgeNativePacked",
      "inputs": [{ "name": "_data", "type": "bytes", "internalType": "bytes" }],
      "outputs": [
        {
          "name": "",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "",
          "type": "tuple",
          "internalType": "struct CBridgeFacet.CBridgeData",
          "components": [
            { "name": "maxSlippage", "type": "uint32", "internalType": "uint32" },
            { "name": "nonce", "type": "uint64", "internalType": "uint64" }
          ]
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "encode_startBridgeTokensViaCBridgeERC20Packed",
      "inputs": [
        { "name": "transactionId", "type": "bytes32", "internalType": "bytes32" },
        { "name": "receiver", "type": "address", "internalType": "address" },
        {
          "name": "destinationChainId",
          "type": "uint64",
          "internalType": "uint64"
        },
        {
          "name": "sendingAssetId",
          "type": "address",
          "internalType": "address"
        },
        { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
        { "name": "nonce", "type": "uint64", "internalType": "uint64" },
        { "name": "maxSlippage", "type": "uint32", "internalType": "uint32" }
      ],
      "outputs": [{ "name": "", "type": "bytes", "internalType": "bytes" }],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "encode_startBridgeTokensViaCBridgeNativePacked",
      "inputs": [
        { "name": "transactionId", "type": "bytes32", "internalType": "bytes32" },
        { "name": "receiver", "type": "address", "internalType": "address" },
        {
          "name": "destinationChainId",
          "type": "uint64",
          "internalType": "uint64"
        },
        { "name": "nonce", "type": "uint64", "internalType": "uint64" },
        { "name": "maxSlippage", "type": "uint32", "internalType": "uint32" }
      ],
      "outputs": [{ "name": "", "type": "bytes", "internalType": "bytes" }],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaCBridgeERC20Min",
      "inputs": [
        { "name": "transactionId", "type": "bytes32", "internalType": "bytes32" },
        { "name": "receiver", "type": "address", "internalType": "address" },
        {
          "name": "destinationChainId",
          "type": "uint64",
          "internalType": "uint64"
        },
        {
          "name": "sendingAssetId",
          "type": "address",
          "internalType": "address"
        },
        { "name": "amount", "type": "uint256", "internalType": "uint256" },
        { "name": "nonce", "type": "uint64", "internalType": "uint64" },
        { "name": "maxSlippage", "type": "uint32", "internalType": "uint32" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaCBridgeERC20Packed",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaCBridgeNativeMin",
      "inputs": [
        { "name": "transactionId", "type": "bytes32", "internalType": "bytes32" },
        { "name": "receiver", "type": "address", "internalType": "address" },
        {
          "name": "destinationChainId",
          "type": "uint64",
          "internalType": "uint64"
        },
        { "name": "nonce", "type": "uint64", "internalType": "uint64" },
        { "name": "maxSlippage", "type": "uint32", "internalType": "uint32" }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaCBridgeNativePacked",
      "inputs": [],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "event",
      "name": "LiFiCBridgeTransfer",
      "inputs": [
        {
          "name": "_transactionId",
          "type": "bytes8",
          "indexed": false,
          "internalType": "bytes8"
        }
      ],
      "anonymous": false
    },
    {
      "type": "function",
      "name": "extractBridgeData",
      "inputs": [{ "name": "data", "type": "bytes", "internalType": "bytes" }],
      "outputs": [
        {
          "name": "bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "extractData",
      "inputs": [{ "name": "data", "type": "bytes", "internalType": "bytes" }],
      "outputs": [
        {
          "name": "bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "swapData",
          "type": "tuple[]",
          "internalType": "struct LibSwap.SwapData[]",
          "components": [
            { "name": "callTo", "type": "address", "internalType": "address" },
            { "name": "approveTo", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "receivingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "fromAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "callData", "type": "bytes", "internalType": "bytes" },
            { "name": "requiresDeposit", "type": "bool", "internalType": "bool" }
          ]
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "extractGenericSwapParameters",
      "inputs": [{ "name": "data", "type": "bytes", "internalType": "bytes" }],
      "outputs": [
        {
          "name": "sendingAssetId",
          "type": "address",
          "internalType": "address"
        },
        { "name": "amount", "type": "uint256", "internalType": "uint256" },
        { "name": "receiver", "type": "address", "internalType": "address" },
        {
          "name": "receivingAssetId",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "receivingAmount",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "extractMainParameters",
      "inputs": [{ "name": "data", "type": "bytes", "internalType": "bytes" }],
      "outputs": [
        { "name": "bridge", "type": "string", "internalType": "string" },
        {
          "name": "sendingAssetId",
          "type": "address",
          "internalType": "address"
        },
        { "name": "receiver", "type": "address", "internalType": "address" },
        { "name": "amount", "type": "uint256", "internalType": "uint256" },
        {
          "name": "destinationChainId",
          "type": "uint256",
          "internalType": "uint256"
        },
        { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
        { "name": "hasDestinationCall", "type": "bool", "internalType": "bool" }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "extractSwapData",
      "inputs": [{ "name": "data", "type": "bytes", "internalType": "bytes" }],
      "outputs": [
        {
          "name": "swapData",
          "type": "tuple[]",
          "internalType": "struct LibSwap.SwapData[]",
          "components": [
            { "name": "callTo", "type": "address", "internalType": "address" },
            { "name": "approveTo", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "receivingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "fromAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "callData", "type": "bytes", "internalType": "bytes" },
            { "name": "requiresDeposit", "type": "bool", "internalType": "bool" }
          ]
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "validateCalldata",
      "inputs": [
        { "name": "data", "type": "bytes", "internalType": "bytes" },
        { "name": "bridge", "type": "string", "internalType": "string" },
        {
          "name": "sendingAssetId",
          "type": "address",
          "internalType": "address"
        },
        { "name": "receiver", "type": "address", "internalType": "address" },
        { "name": "amount", "type": "uint256", "internalType": "uint256" },
        {
          "name": "destinationChainId",
          "type": "uint256",
          "internalType": "uint256"
        },
        { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
        { "name": "hasDestinationCall", "type": "bool", "internalType": "bool" }
      ],
      "outputs": [{ "name": "isValid", "type": "bool", "internalType": "bool" }],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "validateDestinationCalldata",
      "inputs": [
        { "name": "data", "type": "bytes", "internalType": "bytes" },
        { "name": "callTo", "type": "bytes", "internalType": "bytes" },
        { "name": "dstCalldata", "type": "bytes", "internalType": "bytes" }
      ],
      "outputs": [{ "name": "isValid", "type": "bool", "internalType": "bool" }],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaCelerCircleBridge",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "swapAndStartBridgeTokensViaCelerCircleBridge",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_swapData",
          "type": "tuple[]",
          "internalType": "struct LibSwap.SwapData[]",
          "components": [
            { "name": "callTo", "type": "address", "internalType": "address" },
            { "name": "approveTo", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "receivingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "fromAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "callData", "type": "bytes", "internalType": "bytes" },
            { "name": "requiresDeposit", "type": "bool", "internalType": "bool" }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    { "type": "error", "name": "InvalidSendingToken", "inputs": [] },
    {
      "type": "function",
      "name": "relayer",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "contract RelayerCelerIM"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaCelerIM",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_celerIMData",
          "type": "tuple",
          "internalType": "struct CelerIM.CelerIMData",
          "components": [
            { "name": "maxSlippage", "type": "uint32", "internalType": "uint32" },
            { "name": "nonce", "type": "uint64", "internalType": "uint64" },
            { "name": "callTo", "type": "bytes", "internalType": "bytes" },
            { "name": "callData", "type": "bytes", "internalType": "bytes" },
            {
              "name": "messageBusFee",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "bridgeType",
              "type": "uint8",
              "internalType": "enum MsgDataTypes.BridgeSendType"
            }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "swapAndStartBridgeTokensViaCelerIM",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_swapData",
          "type": "tuple[]",
          "internalType": "struct LibSwap.SwapData[]",
          "components": [
            { "name": "callTo", "type": "address", "internalType": "address" },
            { "name": "approveTo", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "receivingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "fromAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "callData", "type": "bytes", "internalType": "bytes" },
            { "name": "requiresDeposit", "type": "bool", "internalType": "bool" }
          ]
        },
        {
          "name": "_celerIMData",
          "type": "tuple",
          "internalType": "struct CelerIM.CelerIMData",
          "components": [
            { "name": "maxSlippage", "type": "uint32", "internalType": "uint32" },
            { "name": "nonce", "type": "uint64", "internalType": "uint64" },
            { "name": "callTo", "type": "bytes", "internalType": "bytes" },
            { "name": "callData", "type": "bytes", "internalType": "bytes" },
            {
              "name": "messageBusFee",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "bridgeType",
              "type": "uint8",
              "internalType": "enum MsgDataTypes.BridgeSendType"
            }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaCircleBridge",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_circleBridgeData",
          "type": "tuple",
          "internalType": "struct CircleBridgeFacet.CircleBridgeData",
          "components": [
            { "name": "dstDomain", "type": "uint32", "internalType": "uint32" }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "swapAndStartBridgeTokensViaCircleBridge",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_swapData",
          "type": "tuple[]",
          "internalType": "struct LibSwap.SwapData[]",
          "components": [
            { "name": "callTo", "type": "address", "internalType": "address" },
            { "name": "approveTo", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "receivingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "fromAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "callData", "type": "bytes", "internalType": "bytes" },
            { "name": "requiresDeposit", "type": "bool", "internalType": "bool" }
          ]
        },
        {
          "name": "_circleBridgeData",
          "type": "tuple",
          "internalType": "struct CircleBridgeFacet.CircleBridgeData",
          "components": [
            { "name": "dstDomain", "type": "uint32", "internalType": "uint32" }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "dlnSource",
      "inputs": [],
      "outputs": [
        { "name": "", "type": "address", "internalType": "contract IDlnSource" }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaDeBridgeDln",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_deBridgeDlnData",
          "type": "tuple",
          "internalType": "struct DeBridgeDlnFacet.DeBridgeDlnData",
          "components": [
            {
              "name": "receivingAssetId",
              "type": "bytes",
              "internalType": "bytes"
            },
            { "name": "receiver", "type": "bytes", "internalType": "bytes" },
            {
              "name": "minAmountOut",
              "type": "uint256",
              "internalType": "uint256"
            }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "swapAndStartBridgeTokensViaDeBridgeDln",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_swapData",
          "type": "tuple[]",
          "internalType": "struct LibSwap.SwapData[]",
          "components": [
            { "name": "callTo", "type": "address", "internalType": "address" },
            { "name": "approveTo", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "receivingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "fromAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "callData", "type": "bytes", "internalType": "bytes" },
            { "name": "requiresDeposit", "type": "bool", "internalType": "bool" }
          ]
        },
        {
          "name": "_deBridgeDlnData",
          "type": "tuple",
          "internalType": "struct DeBridgeDlnFacet.DeBridgeDlnData",
          "components": [
            {
              "name": "receivingAssetId",
              "type": "bytes",
              "internalType": "bytes"
            },
            { "name": "receiver", "type": "bytes", "internalType": "bytes" },
            {
              "name": "minAmountOut",
              "type": "uint256",
              "internalType": "uint256"
            }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "event",
      "name": "BridgeToNonEVMChain",
      "inputs": [
        {
          "name": "transactionId",
          "type": "bytes32",
          "indexed": true,
          "internalType": "bytes32"
        },
        {
          "name": "destinationChainId",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "name": "receiver",
          "type": "bytes",
          "indexed": false,
          "internalType": "bytes"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "DlnOrderCreated",
      "inputs": [
        {
          "name": "orderId",
          "type": "bytes32",
          "indexed": true,
          "internalType": "bytes32"
        }
      ],
      "anonymous": false
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaDeBridge",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_deBridgeData",
          "type": "tuple",
          "internalType": "struct DeBridgeFacet.DeBridgeData",
          "components": [
            { "name": "nativeFee", "type": "uint256", "internalType": "uint256" },
            { "name": "useAssetFee", "type": "bool", "internalType": "bool" },
            {
              "name": "referralCode",
              "type": "uint32",
              "internalType": "uint32"
            },
            {
              "name": "autoParams",
              "type": "tuple",
              "internalType": "struct DeBridgeFacet.SubmissionAutoParamsTo",
              "components": [
                {
                  "name": "executionFee",
                  "type": "uint256",
                  "internalType": "uint256"
                },
                { "name": "flags", "type": "uint256", "internalType": "uint256" },
                {
                  "name": "fallbackAddress",
                  "type": "bytes",
                  "internalType": "bytes"
                },
                { "name": "data", "type": "bytes", "internalType": "bytes" }
              ]
            }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "swapAndStartBridgeTokensViaDeBridge",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_swapData",
          "type": "tuple[]",
          "internalType": "struct LibSwap.SwapData[]",
          "components": [
            { "name": "callTo", "type": "address", "internalType": "address" },
            { "name": "approveTo", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "receivingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "fromAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "callData", "type": "bytes", "internalType": "bytes" },
            { "name": "requiresDeposit", "type": "bool", "internalType": "bool" }
          ]
        },
        {
          "name": "_deBridgeData",
          "type": "tuple",
          "internalType": "struct DeBridgeFacet.DeBridgeData",
          "components": [
            { "name": "nativeFee", "type": "uint256", "internalType": "uint256" },
            { "name": "useAssetFee", "type": "bool", "internalType": "bool" },
            {
              "name": "referralCode",
              "type": "uint32",
              "internalType": "uint32"
            },
            {
              "name": "autoParams",
              "type": "tuple",
              "internalType": "struct DeBridgeFacet.SubmissionAutoParamsTo",
              "components": [
                {
                  "name": "executionFee",
                  "type": "uint256",
                  "internalType": "uint256"
                },
                { "name": "flags", "type": "uint256", "internalType": "uint256" },
                {
                  "name": "fallbackAddress",
                  "type": "bytes",
                  "internalType": "bytes"
                },
                { "name": "data", "type": "bytes", "internalType": "bytes" }
              ]
            }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "addDex",
      "inputs": [
        { "name": "_dex", "type": "address", "internalType": "address" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "approvedDexs",
      "inputs": [],
      "outputs": [
        { "name": "addresses", "type": "address[]", "internalType": "address[]" }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "batchAddDex",
      "inputs": [
        { "name": "_dexs", "type": "address[]", "internalType": "address[]" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "batchRemoveDex",
      "inputs": [
        { "name": "_dexs", "type": "address[]", "internalType": "address[]" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "batchSetFunctionApprovalBySignature",
      "inputs": [
        { "name": "_signatures", "type": "bytes4[]", "internalType": "bytes4[]" },
        { "name": "_approval", "type": "bool", "internalType": "bool" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "isFunctionApproved",
      "inputs": [
        { "name": "_signature", "type": "bytes4", "internalType": "bytes4" }
      ],
      "outputs": [{ "name": "approved", "type": "bool", "internalType": "bool" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "removeDex",
      "inputs": [
        { "name": "_dex", "type": "address", "internalType": "address" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setFunctionApprovalBySignature",
      "inputs": [
        { "name": "_signature", "type": "bytes4", "internalType": "bytes4" },
        { "name": "_approval", "type": "bool", "internalType": "bool" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "DexAdded",
      "inputs": [
        {
          "name": "dexAddress",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "DexRemoved",
      "inputs": [
        {
          "name": "dexAddress",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "FunctionSignatureApprovalChanged",
      "inputs": [
        {
          "name": "functionSignature",
          "type": "bytes4",
          "indexed": true,
          "internalType": "bytes4"
        },
        {
          "name": "approved",
          "type": "bool",
          "indexed": true,
          "internalType": "bool"
        }
      ],
      "anonymous": false
    },
    {
      "type": "function",
      "name": "diamondCut",
      "inputs": [
        {
          "name": "_diamondCut",
          "type": "tuple[]",
          "internalType": "struct IDiamondCut.FacetCut[]",
          "components": [
            {
              "name": "facetAddress",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "action",
              "type": "uint8",
              "internalType": "enum IDiamondCut.FacetCutAction"
            },
            {
              "name": "functionSelectors",
              "type": "bytes4[]",
              "internalType": "bytes4[]"
            }
          ]
        },
        { "name": "_init", "type": "address", "internalType": "address" },
        { "name": "_calldata", "type": "bytes", "internalType": "bytes" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "DiamondCut",
      "inputs": [
        {
          "name": "_diamondCut",
          "type": "tuple[]",
          "indexed": false,
          "internalType": "struct IDiamondCut.FacetCut[]",
          "components": [
            {
              "name": "facetAddress",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "action",
              "type": "uint8",
              "internalType": "enum IDiamondCut.FacetCutAction"
            },
            {
              "name": "functionSelectors",
              "type": "bytes4[]",
              "internalType": "bytes4[]"
            }
          ]
        },
        {
          "name": "_init",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "_calldata",
          "type": "bytes",
          "indexed": false,
          "internalType": "bytes"
        }
      ],
      "anonymous": false
    },
    { "type": "error", "name": "CalldataEmptyButInitNotZero", "inputs": [] },
    { "type": "error", "name": "FacetAddressIsNotZero", "inputs": [] },
    { "type": "error", "name": "FacetAddressIsZero", "inputs": [] },
    { "type": "error", "name": "FacetContainsNoCode", "inputs": [] },
    { "type": "error", "name": "FunctionAlreadyExists", "inputs": [] },
    { "type": "error", "name": "FunctionDoesNotExist", "inputs": [] },
    { "type": "error", "name": "FunctionIsImmutable", "inputs": [] },
    { "type": "error", "name": "IncorrectFacetCutAction", "inputs": [] },
    { "type": "error", "name": "InitReverted", "inputs": [] },
    { "type": "error", "name": "InitZeroButCalldataNotEmpty", "inputs": [] },
    { "type": "error", "name": "NoSelectorsInFace", "inputs": [] },
    {
      "type": "function",
      "name": "facetAddress",
      "inputs": [
        {
          "name": "_functionSelector",
          "type": "bytes4",
          "internalType": "bytes4"
        }
      ],
      "outputs": [
        { "name": "facetAddress_", "type": "address", "internalType": "address" }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "facetAddresses",
      "inputs": [],
      "outputs": [
        {
          "name": "facetAddresses_",
          "type": "address[]",
          "internalType": "address[]"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "facetFunctionSelectors",
      "inputs": [
        { "name": "_facet", "type": "address", "internalType": "address" }
      ],
      "outputs": [
        {
          "name": "facetFunctionSelectors_",
          "type": "bytes4[]",
          "internalType": "bytes4[]"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "facets",
      "inputs": [],
      "outputs": [
        {
          "name": "facets_",
          "type": "tuple[]",
          "internalType": "struct IDiamondLoupe.Facet[]",
          "components": [
            {
              "name": "facetAddress",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "functionSelectors",
              "type": "bytes4[]",
              "internalType": "bytes4[]"
            }
          ]
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "supportsInterface",
      "inputs": [
        { "name": "_interfaceId", "type": "bytes4", "internalType": "bytes4" }
      ],
      "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "swapTokensGeneric",
      "inputs": [
        {
          "name": "_transactionId",
          "type": "bytes32",
          "internalType": "bytes32"
        },
        { "name": "_integrator", "type": "string", "internalType": "string" },
        { "name": "_referrer", "type": "string", "internalType": "string" },
        {
          "name": "_receiver",
          "type": "address",
          "internalType": "address payable"
        },
        { "name": "_minAmount", "type": "uint256", "internalType": "uint256" },
        {
          "name": "_swapData",
          "type": "tuple[]",
          "internalType": "struct LibSwap.SwapData[]",
          "components": [
            { "name": "callTo", "type": "address", "internalType": "address" },
            { "name": "approveTo", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "receivingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "fromAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "callData", "type": "bytes", "internalType": "bytes" },
            { "name": "requiresDeposit", "type": "bool", "internalType": "bool" }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaXDaiBridge",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "swapAndStartBridgeTokensViaXDaiBridge",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_swapData",
          "type": "tuple[]",
          "internalType": "struct LibSwap.SwapData[]",
          "components": [
            { "name": "callTo", "type": "address", "internalType": "address" },
            { "name": "approveTo", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "receivingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "fromAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "callData", "type": "bytes", "internalType": "bytes" },
            { "name": "requiresDeposit", "type": "bool", "internalType": "bool" }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    { "type": "error", "name": "InvalidDestinationChain", "inputs": [] },
    {
      "type": "function",
      "name": "initHop",
      "inputs": [
        {
          "name": "configs",
          "type": "tuple[]",
          "internalType": "struct HopFacet.Config[]",
          "components": [
            { "name": "assetId", "type": "address", "internalType": "address" },
            { "name": "bridge", "type": "address", "internalType": "address" }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "registerBridge",
      "inputs": [
        { "name": "assetId", "type": "address", "internalType": "address" },
        { "name": "bridge", "type": "address", "internalType": "address" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaHop",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_hopData",
          "type": "tuple",
          "internalType": "struct HopFacet.HopData",
          "components": [
            { "name": "bonderFee", "type": "uint256", "internalType": "uint256" },
            {
              "name": "amountOutMin",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "deadline", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationAmountOutMin",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "destinationDeadline",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "relayer", "type": "address", "internalType": "address" },
            {
              "name": "relayerFee",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "nativeFee", "type": "uint256", "internalType": "uint256" }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "swapAndStartBridgeTokensViaHop",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_swapData",
          "type": "tuple[]",
          "internalType": "struct LibSwap.SwapData[]",
          "components": [
            { "name": "callTo", "type": "address", "internalType": "address" },
            { "name": "approveTo", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "receivingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "fromAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "callData", "type": "bytes", "internalType": "bytes" },
            { "name": "requiresDeposit", "type": "bool", "internalType": "bool" }
          ]
        },
        {
          "name": "_hopData",
          "type": "tuple",
          "internalType": "struct HopFacet.HopData",
          "components": [
            { "name": "bonderFee", "type": "uint256", "internalType": "uint256" },
            {
              "name": "amountOutMin",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "deadline", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationAmountOutMin",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "destinationDeadline",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "relayer", "type": "address", "internalType": "address" },
            {
              "name": "relayerFee",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "nativeFee", "type": "uint256", "internalType": "uint256" }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "event",
      "name": "HopBridgeRegistered",
      "inputs": [
        {
          "name": "assetId",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "bridge",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "HopInitialized",
      "inputs": [
        {
          "name": "configs",
          "type": "tuple[]",
          "indexed": false,
          "internalType": "struct HopFacet.Config[]",
          "components": [
            { "name": "assetId", "type": "address", "internalType": "address" },
            { "name": "bridge", "type": "address", "internalType": "address" }
          ]
        }
      ],
      "anonymous": false
    },
    { "type": "error", "name": "InvalidConfig", "inputs": [] },
    {
      "type": "function",
      "name": "setApprovalForBridges",
      "inputs": [
        { "name": "bridges", "type": "address[]", "internalType": "address[]" },
        {
          "name": "tokensToApprove",
          "type": "address[]",
          "internalType": "address[]"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaHopL1ERC20",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_hopData",
          "type": "tuple",
          "internalType": "struct HopFacetOptimized.HopData",
          "components": [
            { "name": "bonderFee", "type": "uint256", "internalType": "uint256" },
            {
              "name": "amountOutMin",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "deadline", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationAmountOutMin",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "destinationDeadline",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "hopBridge",
              "type": "address",
              "internalType": "contract IHopBridge"
            },
            { "name": "relayer", "type": "address", "internalType": "address" },
            {
              "name": "relayerFee",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "nativeFee", "type": "uint256", "internalType": "uint256" }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaHopL1Native",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_hopData",
          "type": "tuple",
          "internalType": "struct HopFacetOptimized.HopData",
          "components": [
            { "name": "bonderFee", "type": "uint256", "internalType": "uint256" },
            {
              "name": "amountOutMin",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "deadline", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationAmountOutMin",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "destinationDeadline",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "hopBridge",
              "type": "address",
              "internalType": "contract IHopBridge"
            },
            { "name": "relayer", "type": "address", "internalType": "address" },
            {
              "name": "relayerFee",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "nativeFee", "type": "uint256", "internalType": "uint256" }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaHopL2ERC20",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_hopData",
          "type": "tuple",
          "internalType": "struct HopFacetOptimized.HopData",
          "components": [
            { "name": "bonderFee", "type": "uint256", "internalType": "uint256" },
            {
              "name": "amountOutMin",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "deadline", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationAmountOutMin",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "destinationDeadline",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "hopBridge",
              "type": "address",
              "internalType": "contract IHopBridge"
            },
            { "name": "relayer", "type": "address", "internalType": "address" },
            {
              "name": "relayerFee",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "nativeFee", "type": "uint256", "internalType": "uint256" }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaHopL2Native",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_hopData",
          "type": "tuple",
          "internalType": "struct HopFacetOptimized.HopData",
          "components": [
            { "name": "bonderFee", "type": "uint256", "internalType": "uint256" },
            {
              "name": "amountOutMin",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "deadline", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationAmountOutMin",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "destinationDeadline",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "hopBridge",
              "type": "address",
              "internalType": "contract IHopBridge"
            },
            { "name": "relayer", "type": "address", "internalType": "address" },
            {
              "name": "relayerFee",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "nativeFee", "type": "uint256", "internalType": "uint256" }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "swapAndStartBridgeTokensViaHopL1ERC20",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_swapData",
          "type": "tuple[]",
          "internalType": "struct LibSwap.SwapData[]",
          "components": [
            { "name": "callTo", "type": "address", "internalType": "address" },
            { "name": "approveTo", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "receivingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "fromAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "callData", "type": "bytes", "internalType": "bytes" },
            { "name": "requiresDeposit", "type": "bool", "internalType": "bool" }
          ]
        },
        {
          "name": "_hopData",
          "type": "tuple",
          "internalType": "struct HopFacetOptimized.HopData",
          "components": [
            { "name": "bonderFee", "type": "uint256", "internalType": "uint256" },
            {
              "name": "amountOutMin",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "deadline", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationAmountOutMin",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "destinationDeadline",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "hopBridge",
              "type": "address",
              "internalType": "contract IHopBridge"
            },
            { "name": "relayer", "type": "address", "internalType": "address" },
            {
              "name": "relayerFee",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "nativeFee", "type": "uint256", "internalType": "uint256" }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "swapAndStartBridgeTokensViaHopL1Native",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_swapData",
          "type": "tuple[]",
          "internalType": "struct LibSwap.SwapData[]",
          "components": [
            { "name": "callTo", "type": "address", "internalType": "address" },
            { "name": "approveTo", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "receivingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "fromAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "callData", "type": "bytes", "internalType": "bytes" },
            { "name": "requiresDeposit", "type": "bool", "internalType": "bool" }
          ]
        },
        {
          "name": "_hopData",
          "type": "tuple",
          "internalType": "struct HopFacetOptimized.HopData",
          "components": [
            { "name": "bonderFee", "type": "uint256", "internalType": "uint256" },
            {
              "name": "amountOutMin",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "deadline", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationAmountOutMin",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "destinationDeadline",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "hopBridge",
              "type": "address",
              "internalType": "contract IHopBridge"
            },
            { "name": "relayer", "type": "address", "internalType": "address" },
            {
              "name": "relayerFee",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "nativeFee", "type": "uint256", "internalType": "uint256" }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "swapAndStartBridgeTokensViaHopL2ERC20",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_swapData",
          "type": "tuple[]",
          "internalType": "struct LibSwap.SwapData[]",
          "components": [
            { "name": "callTo", "type": "address", "internalType": "address" },
            { "name": "approveTo", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "receivingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "fromAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "callData", "type": "bytes", "internalType": "bytes" },
            { "name": "requiresDeposit", "type": "bool", "internalType": "bool" }
          ]
        },
        {
          "name": "_hopData",
          "type": "tuple",
          "internalType": "struct HopFacetOptimized.HopData",
          "components": [
            { "name": "bonderFee", "type": "uint256", "internalType": "uint256" },
            {
              "name": "amountOutMin",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "deadline", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationAmountOutMin",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "destinationDeadline",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "hopBridge",
              "type": "address",
              "internalType": "contract IHopBridge"
            },
            { "name": "relayer", "type": "address", "internalType": "address" },
            {
              "name": "relayerFee",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "nativeFee", "type": "uint256", "internalType": "uint256" }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "swapAndStartBridgeTokensViaHopL2Native",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_swapData",
          "type": "tuple[]",
          "internalType": "struct LibSwap.SwapData[]",
          "components": [
            { "name": "callTo", "type": "address", "internalType": "address" },
            { "name": "approveTo", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "receivingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "fromAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "callData", "type": "bytes", "internalType": "bytes" },
            { "name": "requiresDeposit", "type": "bool", "internalType": "bool" }
          ]
        },
        {
          "name": "_hopData",
          "type": "tuple",
          "internalType": "struct HopFacetOptimized.HopData",
          "components": [
            { "name": "bonderFee", "type": "uint256", "internalType": "uint256" },
            {
              "name": "amountOutMin",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "deadline", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationAmountOutMin",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "destinationDeadline",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "hopBridge",
              "type": "address",
              "internalType": "contract IHopBridge"
            },
            { "name": "relayer", "type": "address", "internalType": "address" },
            {
              "name": "relayerFee",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "nativeFee", "type": "uint256", "internalType": "uint256" }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "decode_startBridgeTokensViaHopL1ERC20Packed",
      "inputs": [{ "name": "_data", "type": "bytes", "internalType": "bytes" }],
      "outputs": [
        {
          "name": "",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "",
          "type": "tuple",
          "internalType": "struct HopFacetOptimized.HopData",
          "components": [
            { "name": "bonderFee", "type": "uint256", "internalType": "uint256" },
            {
              "name": "amountOutMin",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "deadline", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationAmountOutMin",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "destinationDeadline",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "hopBridge",
              "type": "address",
              "internalType": "contract IHopBridge"
            },
            { "name": "relayer", "type": "address", "internalType": "address" },
            {
              "name": "relayerFee",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "nativeFee", "type": "uint256", "internalType": "uint256" }
          ]
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "decode_startBridgeTokensViaHopL1NativePacked",
      "inputs": [{ "name": "_data", "type": "bytes", "internalType": "bytes" }],
      "outputs": [
        {
          "name": "",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "",
          "type": "tuple",
          "internalType": "struct HopFacetOptimized.HopData",
          "components": [
            { "name": "bonderFee", "type": "uint256", "internalType": "uint256" },
            {
              "name": "amountOutMin",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "deadline", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationAmountOutMin",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "destinationDeadline",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "hopBridge",
              "type": "address",
              "internalType": "contract IHopBridge"
            },
            { "name": "relayer", "type": "address", "internalType": "address" },
            {
              "name": "relayerFee",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "nativeFee", "type": "uint256", "internalType": "uint256" }
          ]
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "decode_startBridgeTokensViaHopL2ERC20Packed",
      "inputs": [{ "name": "_data", "type": "bytes", "internalType": "bytes" }],
      "outputs": [
        {
          "name": "",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "",
          "type": "tuple",
          "internalType": "struct HopFacetOptimized.HopData",
          "components": [
            { "name": "bonderFee", "type": "uint256", "internalType": "uint256" },
            {
              "name": "amountOutMin",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "deadline", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationAmountOutMin",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "destinationDeadline",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "hopBridge",
              "type": "address",
              "internalType": "contract IHopBridge"
            },
            { "name": "relayer", "type": "address", "internalType": "address" },
            {
              "name": "relayerFee",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "nativeFee", "type": "uint256", "internalType": "uint256" }
          ]
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "decode_startBridgeTokensViaHopL2NativePacked",
      "inputs": [{ "name": "_data", "type": "bytes", "internalType": "bytes" }],
      "outputs": [
        {
          "name": "",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "",
          "type": "tuple",
          "internalType": "struct HopFacetOptimized.HopData",
          "components": [
            { "name": "bonderFee", "type": "uint256", "internalType": "uint256" },
            {
              "name": "amountOutMin",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "deadline", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationAmountOutMin",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "destinationDeadline",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "hopBridge",
              "type": "address",
              "internalType": "contract IHopBridge"
            },
            { "name": "relayer", "type": "address", "internalType": "address" },
            {
              "name": "relayerFee",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "nativeFee", "type": "uint256", "internalType": "uint256" }
          ]
        }
      ],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "encode_startBridgeTokensViaHopL1ERC20Packed",
      "inputs": [
        { "name": "transactionId", "type": "bytes8", "internalType": "bytes8" },
        { "name": "receiver", "type": "address", "internalType": "address" },
        {
          "name": "destinationChainId",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "sendingAssetId",
          "type": "address",
          "internalType": "address"
        },
        { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
        {
          "name": "destinationAmountOutMin",
          "type": "uint256",
          "internalType": "uint256"
        },
        { "name": "relayer", "type": "address", "internalType": "address" },
        { "name": "relayerFee", "type": "uint256", "internalType": "uint256" },
        { "name": "hopBridge", "type": "address", "internalType": "address" }
      ],
      "outputs": [{ "name": "", "type": "bytes", "internalType": "bytes" }],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "encode_startBridgeTokensViaHopL1NativePacked",
      "inputs": [
        { "name": "transactionId", "type": "bytes8", "internalType": "bytes8" },
        { "name": "receiver", "type": "address", "internalType": "address" },
        {
          "name": "destinationChainId",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "destinationAmountOutMin",
          "type": "uint256",
          "internalType": "uint256"
        },
        { "name": "relayer", "type": "address", "internalType": "address" },
        { "name": "relayerFee", "type": "uint256", "internalType": "uint256" },
        { "name": "hopBridge", "type": "address", "internalType": "address" }
      ],
      "outputs": [{ "name": "", "type": "bytes", "internalType": "bytes" }],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "encode_startBridgeTokensViaHopL2ERC20Packed",
      "inputs": [
        { "name": "transactionId", "type": "bytes32", "internalType": "bytes32" },
        { "name": "receiver", "type": "address", "internalType": "address" },
        {
          "name": "destinationChainId",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "sendingAssetId",
          "type": "address",
          "internalType": "address"
        },
        { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
        { "name": "bonderFee", "type": "uint256", "internalType": "uint256" },
        { "name": "amountOutMin", "type": "uint256", "internalType": "uint256" },
        {
          "name": "destinationAmountOutMin",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "destinationDeadline",
          "type": "uint256",
          "internalType": "uint256"
        },
        { "name": "wrapper", "type": "address", "internalType": "address" }
      ],
      "outputs": [{ "name": "", "type": "bytes", "internalType": "bytes" }],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "encode_startBridgeTokensViaHopL2NativePacked",
      "inputs": [
        { "name": "transactionId", "type": "bytes8", "internalType": "bytes8" },
        { "name": "receiver", "type": "address", "internalType": "address" },
        {
          "name": "destinationChainId",
          "type": "uint256",
          "internalType": "uint256"
        },
        { "name": "bonderFee", "type": "uint256", "internalType": "uint256" },
        { "name": "amountOutMin", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [{ "name": "", "type": "bytes", "internalType": "bytes" }],
      "stateMutability": "pure"
    },
    {
      "type": "function",
      "name": "nativeBridge",
      "inputs": [],
      "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "nativeExchangeAddress",
      "inputs": [],
      "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "nativeHToken",
      "inputs": [],
      "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "nativeL2CanonicalToken",
      "inputs": [],
      "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "setApprovalForHopBridges",
      "inputs": [
        { "name": "bridges", "type": "address[]", "internalType": "address[]" },
        {
          "name": "tokensToApprove",
          "type": "address[]",
          "internalType": "address[]"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaHopL1ERC20Min",
      "inputs": [
        { "name": "transactionId", "type": "bytes8", "internalType": "bytes8" },
        { "name": "receiver", "type": "address", "internalType": "address" },
        {
          "name": "destinationChainId",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "sendingAssetId",
          "type": "address",
          "internalType": "address"
        },
        { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
        {
          "name": "destinationAmountOutMin",
          "type": "uint256",
          "internalType": "uint256"
        },
        { "name": "relayer", "type": "address", "internalType": "address" },
        { "name": "relayerFee", "type": "uint256", "internalType": "uint256" },
        { "name": "hopBridge", "type": "address", "internalType": "address" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaHopL1ERC20Packed",
      "inputs": [],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaHopL1NativeMin",
      "inputs": [
        { "name": "transactionId", "type": "bytes8", "internalType": "bytes8" },
        { "name": "receiver", "type": "address", "internalType": "address" },
        {
          "name": "destinationChainId",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "destinationAmountOutMin",
          "type": "uint256",
          "internalType": "uint256"
        },
        { "name": "relayer", "type": "address", "internalType": "address" },
        { "name": "relayerFee", "type": "uint256", "internalType": "uint256" },
        { "name": "hopBridge", "type": "address", "internalType": "address" }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaHopL1NativePacked",
      "inputs": [],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaHopL2ERC20Min",
      "inputs": [
        { "name": "transactionId", "type": "bytes8", "internalType": "bytes8" },
        { "name": "receiver", "type": "address", "internalType": "address" },
        {
          "name": "destinationChainId",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "sendingAssetId",
          "type": "address",
          "internalType": "address"
        },
        { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
        { "name": "bonderFee", "type": "uint256", "internalType": "uint256" },
        { "name": "amountOutMin", "type": "uint256", "internalType": "uint256" },
        {
          "name": "destinationAmountOutMin",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "destinationDeadline",
          "type": "uint256",
          "internalType": "uint256"
        },
        { "name": "hopBridge", "type": "address", "internalType": "address" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaHopL2ERC20Packed",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaHopL2NativeMin",
      "inputs": [
        { "name": "transactionId", "type": "bytes8", "internalType": "bytes8" },
        { "name": "receiver", "type": "address", "internalType": "address" },
        {
          "name": "destinationChainId",
          "type": "uint256",
          "internalType": "uint256"
        },
        { "name": "bonderFee", "type": "uint256", "internalType": "uint256" },
        { "name": "amountOutMin", "type": "uint256", "internalType": "uint256" },
        {
          "name": "destinationAmountOutMin",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "destinationDeadline",
          "type": "uint256",
          "internalType": "uint256"
        },
        { "name": "hopBridge", "type": "address", "internalType": "address" }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaHopL2NativePacked",
      "inputs": [],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "event",
      "name": "LiFiHopTransfer",
      "inputs": [
        {
          "name": "_transactionId",
          "type": "bytes8",
          "indexed": false,
          "internalType": "bytes8"
        }
      ],
      "anonymous": false
    },
    { "type": "error", "name": "Invalid", "inputs": [] },
    {
      "type": "function",
      "name": "startBridgeTokensViaHyphen",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "swapAndStartBridgeTokensViaHyphen",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_swapData",
          "type": "tuple[]",
          "internalType": "struct LibSwap.SwapData[]",
          "components": [
            { "name": "callTo", "type": "address", "internalType": "address" },
            { "name": "approveTo", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "receivingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "fromAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "callData", "type": "bytes", "internalType": "bytes" },
            { "name": "requiresDeposit", "type": "bool", "internalType": "bool" }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaLIFuel",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "swapAndStartBridgeTokensViaLIFuel",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_swapData",
          "type": "tuple[]",
          "internalType": "struct LibSwap.SwapData[]",
          "components": [
            { "name": "callTo", "type": "address", "internalType": "address" },
            { "name": "approveTo", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "receivingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "fromAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "callData", "type": "bytes", "internalType": "bytes" },
            { "name": "requiresDeposit", "type": "bool", "internalType": "bool" }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaMakerTeleport",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "swapAndStartBridgeTokensViaMakerTeleport",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_swapData",
          "type": "tuple[]",
          "internalType": "struct LibSwap.SwapData[]",
          "components": [
            { "name": "callTo", "type": "address", "internalType": "address" },
            { "name": "approveTo", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "receivingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "fromAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "callData", "type": "bytes", "internalType": "bytes" },
            { "name": "requiresDeposit", "type": "bool", "internalType": "bool" }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "initMultichain",
      "inputs": [
        { "name": "anyNative", "type": "address", "internalType": "address" },
        { "name": "routers", "type": "address[]", "internalType": "address[]" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "registerRouters",
      "inputs": [
        { "name": "routers", "type": "address[]", "internalType": "address[]" },
        { "name": "allowed", "type": "bool[]", "internalType": "bool[]" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaMultichain",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_multichainData",
          "type": "tuple",
          "internalType": "struct MultichainFacet.MultichainData",
          "components": [
            { "name": "router", "type": "address", "internalType": "address" }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "swapAndStartBridgeTokensViaMultichain",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_swapData",
          "type": "tuple[]",
          "internalType": "struct LibSwap.SwapData[]",
          "components": [
            { "name": "callTo", "type": "address", "internalType": "address" },
            { "name": "approveTo", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "receivingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "fromAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "callData", "type": "bytes", "internalType": "bytes" },
            { "name": "requiresDeposit", "type": "bool", "internalType": "bool" }
          ]
        },
        {
          "name": "_multichainData",
          "type": "tuple",
          "internalType": "struct MultichainFacet.MultichainData",
          "components": [
            { "name": "router", "type": "address", "internalType": "address" }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "updateAddressMappings",
      "inputs": [
        {
          "name": "mappings",
          "type": "tuple[]",
          "internalType": "struct MultichainFacet.AnyMapping[]",
          "components": [
            {
              "name": "tokenAddress",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "anyTokenAddress",
              "type": "address",
              "internalType": "address"
            }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "AnyMappingUpdated",
      "inputs": [
        {
          "name": "mappings",
          "type": "tuple[]",
          "indexed": false,
          "internalType": "struct MultichainFacet.AnyMapping[]",
          "components": [
            {
              "name": "tokenAddress",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "anyTokenAddress",
              "type": "address",
              "internalType": "address"
            }
          ]
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "MultichainInitialized",
      "inputs": [],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "MultichainRoutersUpdated",
      "inputs": [
        {
          "name": "routers",
          "type": "address[]",
          "indexed": false,
          "internalType": "address[]"
        },
        {
          "name": "allowed",
          "type": "bool[]",
          "indexed": false,
          "internalType": "bool[]"
        }
      ],
      "anonymous": false
    },
    { "type": "error", "name": "InvalidRouter", "inputs": [] },
    {
      "type": "function",
      "name": "batchSetNonStandardSelectors",
      "inputs": [
        { "name": "_selectors", "type": "bytes4[]", "internalType": "bytes4[]" },
        {
          "name": "_isNonStandardSelectors",
          "type": "bool[]",
          "internalType": "bool[]"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "isNonStandardSelector",
      "inputs": [
        { "name": "_selector", "type": "bytes4", "internalType": "bytes4" }
      ],
      "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "setNonStandardSelector",
      "inputs": [
        { "name": "_selector", "type": "bytes4", "internalType": "bytes4" },
        {
          "name": "_isNonStandardSelector",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaOmniBridge",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "swapAndStartBridgeTokensViaOmniBridge",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_swapData",
          "type": "tuple[]",
          "internalType": "struct LibSwap.SwapData[]",
          "components": [
            { "name": "callTo", "type": "address", "internalType": "address" },
            { "name": "approveTo", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "receivingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "fromAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "callData", "type": "bytes", "internalType": "bytes" },
            { "name": "requiresDeposit", "type": "bool", "internalType": "bool" }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "initOptimism",
      "inputs": [
        {
          "name": "configs",
          "type": "tuple[]",
          "internalType": "struct OptimismBridgeFacet.Config[]",
          "components": [
            { "name": "assetId", "type": "address", "internalType": "address" },
            { "name": "bridge", "type": "address", "internalType": "address" }
          ]
        },
        {
          "name": "standardBridge",
          "type": "address",
          "internalType": "contract IL1StandardBridge"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "registerOptimismBridge",
      "inputs": [
        { "name": "assetId", "type": "address", "internalType": "address" },
        { "name": "bridge", "type": "address", "internalType": "address" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaOptimismBridge",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_optimismData",
          "type": "tuple",
          "internalType": "struct OptimismBridgeFacet.OptimismData",
          "components": [
            {
              "name": "assetIdOnL2",
              "type": "address",
              "internalType": "address"
            },
            { "name": "l2Gas", "type": "uint32", "internalType": "uint32" },
            { "name": "isSynthetix", "type": "bool", "internalType": "bool" }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "swapAndStartBridgeTokensViaOptimismBridge",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_swapData",
          "type": "tuple[]",
          "internalType": "struct LibSwap.SwapData[]",
          "components": [
            { "name": "callTo", "type": "address", "internalType": "address" },
            { "name": "approveTo", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "receivingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "fromAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "callData", "type": "bytes", "internalType": "bytes" },
            { "name": "requiresDeposit", "type": "bool", "internalType": "bool" }
          ]
        },
        {
          "name": "_optimismData",
          "type": "tuple",
          "internalType": "struct OptimismBridgeFacet.OptimismData",
          "components": [
            {
              "name": "assetIdOnL2",
              "type": "address",
              "internalType": "address"
            },
            { "name": "l2Gas", "type": "uint32", "internalType": "uint32" },
            { "name": "isSynthetix", "type": "bool", "internalType": "bool" }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "event",
      "name": "OptimismBridgeRegistered",
      "inputs": [
        {
          "name": "assetId",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "bridge",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "OptimismInitialized",
      "inputs": [
        {
          "name": "configs",
          "type": "tuple[]",
          "indexed": false,
          "internalType": "struct OptimismBridgeFacet.Config[]",
          "components": [
            { "name": "assetId", "type": "address", "internalType": "address" },
            { "name": "bridge", "type": "address", "internalType": "address" }
          ]
        }
      ],
      "anonymous": false
    },
    { "type": "error", "name": "AlreadyInitialized", "inputs": [] },
    { "type": "error", "name": "NotInitialized", "inputs": [] },
    {
      "type": "function",
      "name": "getPeripheryContract",
      "inputs": [{ "name": "_name", "type": "string", "internalType": "string" }],
      "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "registerPeripheryContract",
      "inputs": [
        { "name": "_name", "type": "string", "internalType": "string" },
        {
          "name": "_contractAddress",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "PeripheryContractRegistered",
      "inputs": [
        {
          "name": "name",
          "type": "string",
          "indexed": false,
          "internalType": "string"
        },
        {
          "name": "contractAddress",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaPolygonBridge",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "swapAndStartBridgeTokensViaPolygonBridge",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_swapData",
          "type": "tuple[]",
          "internalType": "struct LibSwap.SwapData[]",
          "components": [
            { "name": "callTo", "type": "address", "internalType": "address" },
            { "name": "approveTo", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "receivingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "fromAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "callData", "type": "bytes", "internalType": "bytes" },
            { "name": "requiresDeposit", "type": "bool", "internalType": "bool" }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "standardizedCall",
      "inputs": [
        { "name": "callData", "type": "bytes", "internalType": "bytes" }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "initStargate",
      "inputs": [
        {
          "name": "chainIdConfigs",
          "type": "tuple[]",
          "internalType": "struct StargateFacet.ChainIdConfig[]",
          "components": [
            { "name": "chainId", "type": "uint256", "internalType": "uint256" },
            {
              "name": "layerZeroChainId",
              "type": "uint16",
              "internalType": "uint16"
            }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "quoteLayerZeroFee",
      "inputs": [
        {
          "name": "_destinationChainId",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "_stargateData",
          "type": "tuple",
          "internalType": "struct StargateFacet.StargateData",
          "components": [
            { "name": "srcPoolId", "type": "uint256", "internalType": "uint256" },
            { "name": "dstPoolId", "type": "uint256", "internalType": "uint256" },
            {
              "name": "minAmountLD",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "dstGasForCall",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "lzFee", "type": "uint256", "internalType": "uint256" },
            {
              "name": "refundAddress",
              "type": "address",
              "internalType": "address payable"
            },
            { "name": "callTo", "type": "bytes", "internalType": "bytes" },
            { "name": "callData", "type": "bytes", "internalType": "bytes" }
          ]
        }
      ],
      "outputs": [
        { "name": "", "type": "uint256", "internalType": "uint256" },
        { "name": "", "type": "uint256", "internalType": "uint256" }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "setLayerZeroChainId",
      "inputs": [
        { "name": "_chainId", "type": "uint256", "internalType": "uint256" },
        {
          "name": "_layerZeroChainId",
          "type": "uint16",
          "internalType": "uint16"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaStargate",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_stargateData",
          "type": "tuple",
          "internalType": "struct StargateFacet.StargateData",
          "components": [
            { "name": "srcPoolId", "type": "uint256", "internalType": "uint256" },
            { "name": "dstPoolId", "type": "uint256", "internalType": "uint256" },
            {
              "name": "minAmountLD",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "dstGasForCall",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "lzFee", "type": "uint256", "internalType": "uint256" },
            {
              "name": "refundAddress",
              "type": "address",
              "internalType": "address payable"
            },
            { "name": "callTo", "type": "bytes", "internalType": "bytes" },
            { "name": "callData", "type": "bytes", "internalType": "bytes" }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "swapAndStartBridgeTokensViaStargate",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_swapData",
          "type": "tuple[]",
          "internalType": "struct LibSwap.SwapData[]",
          "components": [
            { "name": "callTo", "type": "address", "internalType": "address" },
            { "name": "approveTo", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "receivingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "fromAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "callData", "type": "bytes", "internalType": "bytes" },
            { "name": "requiresDeposit", "type": "bool", "internalType": "bool" }
          ]
        },
        {
          "name": "_stargateData",
          "type": "tuple",
          "internalType": "struct StargateFacet.StargateData",
          "components": [
            { "name": "srcPoolId", "type": "uint256", "internalType": "uint256" },
            { "name": "dstPoolId", "type": "uint256", "internalType": "uint256" },
            {
              "name": "minAmountLD",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "dstGasForCall",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "lzFee", "type": "uint256", "internalType": "uint256" },
            {
              "name": "refundAddress",
              "type": "address",
              "internalType": "address payable"
            },
            { "name": "callTo", "type": "bytes", "internalType": "bytes" },
            { "name": "callData", "type": "bytes", "internalType": "bytes" }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "event",
      "name": "LayerZeroChainIdSet",
      "inputs": [
        {
          "name": "chainId",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "name": "layerZeroChainId",
          "type": "uint16",
          "indexed": false,
          "internalType": "uint16"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "PartnerSwap",
      "inputs": [
        {
          "name": "partnerId",
          "type": "bytes2",
          "indexed": false,
          "internalType": "bytes2"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "StargateInitialized",
      "inputs": [
        {
          "name": "chainIdConfigs",
          "type": "tuple[]",
          "indexed": false,
          "internalType": "struct StargateFacet.ChainIdConfig[]",
          "components": [
            { "name": "chainId", "type": "uint256", "internalType": "uint256" },
            {
              "name": "layerZeroChainId",
              "type": "uint16",
              "internalType": "uint16"
            }
          ]
        }
      ],
      "anonymous": false
    },
    { "type": "error", "name": "UnknownLayerZeroChain", "inputs": [] },
    {
      "type": "function",
      "name": "startBridgeTokensViaSymbiosis",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_symbiosisData",
          "type": "tuple",
          "internalType": "struct SymbiosisFacet.SymbiosisData",
          "components": [
            {
              "name": "firstSwapCalldata",
              "type": "bytes",
              "internalType": "bytes"
            },
            {
              "name": "secondSwapCalldata",
              "type": "bytes",
              "internalType": "bytes"
            },
            {
              "name": "intermediateToken",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "firstDexRouter",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "secondDexRouter",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "approvedTokens",
              "type": "address[]",
              "internalType": "address[]"
            },
            { "name": "callTo", "type": "address", "internalType": "address" },
            { "name": "callData", "type": "bytes", "internalType": "bytes" }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "swapAndStartBridgeTokensViaSymbiosis",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_swapData",
          "type": "tuple[]",
          "internalType": "struct LibSwap.SwapData[]",
          "components": [
            { "name": "callTo", "type": "address", "internalType": "address" },
            { "name": "approveTo", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "receivingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "fromAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "callData", "type": "bytes", "internalType": "bytes" },
            { "name": "requiresDeposit", "type": "bool", "internalType": "bool" }
          ]
        },
        {
          "name": "_symbiosisData",
          "type": "tuple",
          "internalType": "struct SymbiosisFacet.SymbiosisData",
          "components": [
            {
              "name": "firstSwapCalldata",
              "type": "bytes",
              "internalType": "bytes"
            },
            {
              "name": "secondSwapCalldata",
              "type": "bytes",
              "internalType": "bytes"
            },
            {
              "name": "intermediateToken",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "firstDexRouter",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "secondDexRouter",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "approvedTokens",
              "type": "address[]",
              "internalType": "address[]"
            },
            { "name": "callTo", "type": "address", "internalType": "address" },
            { "name": "callData", "type": "bytes", "internalType": "bytes" }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaSynapseBridge",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_synapseData",
          "type": "tuple",
          "internalType": "struct SynapseBridgeFacet.SynapseData",
          "components": [
            {
              "name": "originQuery",
              "type": "tuple",
              "internalType": "struct ISynapseRouter.SwapQuery",
              "components": [
                {
                  "name": "swapAdapter",
                  "type": "address",
                  "internalType": "address"
                },
                {
                  "name": "tokenOut",
                  "type": "address",
                  "internalType": "address"
                },
                {
                  "name": "minAmountOut",
                  "type": "uint256",
                  "internalType": "uint256"
                },
                {
                  "name": "deadline",
                  "type": "uint256",
                  "internalType": "uint256"
                },
                { "name": "rawParams", "type": "bytes", "internalType": "bytes" }
              ]
            },
            {
              "name": "destQuery",
              "type": "tuple",
              "internalType": "struct ISynapseRouter.SwapQuery",
              "components": [
                {
                  "name": "swapAdapter",
                  "type": "address",
                  "internalType": "address"
                },
                {
                  "name": "tokenOut",
                  "type": "address",
                  "internalType": "address"
                },
                {
                  "name": "minAmountOut",
                  "type": "uint256",
                  "internalType": "uint256"
                },
                {
                  "name": "deadline",
                  "type": "uint256",
                  "internalType": "uint256"
                },
                { "name": "rawParams", "type": "bytes", "internalType": "bytes" }
              ]
            }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "swapAndStartBridgeTokensViaSynapseBridge",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_swapData",
          "type": "tuple[]",
          "internalType": "struct LibSwap.SwapData[]",
          "components": [
            { "name": "callTo", "type": "address", "internalType": "address" },
            { "name": "approveTo", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "receivingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "fromAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "callData", "type": "bytes", "internalType": "bytes" },
            { "name": "requiresDeposit", "type": "bool", "internalType": "bool" }
          ]
        },
        {
          "name": "_synapseData",
          "type": "tuple",
          "internalType": "struct SynapseBridgeFacet.SynapseData",
          "components": [
            {
              "name": "originQuery",
              "type": "tuple",
              "internalType": "struct ISynapseRouter.SwapQuery",
              "components": [
                {
                  "name": "swapAdapter",
                  "type": "address",
                  "internalType": "address"
                },
                {
                  "name": "tokenOut",
                  "type": "address",
                  "internalType": "address"
                },
                {
                  "name": "minAmountOut",
                  "type": "uint256",
                  "internalType": "uint256"
                },
                {
                  "name": "deadline",
                  "type": "uint256",
                  "internalType": "uint256"
                },
                { "name": "rawParams", "type": "bytes", "internalType": "bytes" }
              ]
            },
            {
              "name": "destQuery",
              "type": "tuple",
              "internalType": "struct ISynapseRouter.SwapQuery",
              "components": [
                {
                  "name": "swapAdapter",
                  "type": "address",
                  "internalType": "address"
                },
                {
                  "name": "tokenOut",
                  "type": "address",
                  "internalType": "address"
                },
                {
                  "name": "minAmountOut",
                  "type": "uint256",
                  "internalType": "uint256"
                },
                {
                  "name": "deadline",
                  "type": "uint256",
                  "internalType": "uint256"
                },
                { "name": "rawParams", "type": "bytes", "internalType": "bytes" }
              ]
            }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaThorSwap",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_thorSwapData",
          "type": "tuple",
          "internalType": "struct ThorSwapFacet.ThorSwapData",
          "components": [
            { "name": "vault", "type": "address", "internalType": "address" },
            { "name": "memo", "type": "string", "internalType": "string" },
            { "name": "expiration", "type": "uint256", "internalType": "uint256" }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "swapAndStartBridgeTokensViaThorSwap",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_swapData",
          "type": "tuple[]",
          "internalType": "struct LibSwap.SwapData[]",
          "components": [
            { "name": "callTo", "type": "address", "internalType": "address" },
            { "name": "approveTo", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "receivingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "fromAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "callData", "type": "bytes", "internalType": "bytes" },
            { "name": "requiresDeposit", "type": "bool", "internalType": "bool" }
          ]
        },
        {
          "name": "_thorSwapData",
          "type": "tuple",
          "internalType": "struct ThorSwapFacet.ThorSwapData",
          "components": [
            { "name": "vault", "type": "address", "internalType": "address" },
            { "name": "memo", "type": "string", "internalType": "string" },
            { "name": "expiration", "type": "uint256", "internalType": "uint256" }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "withdraw",
      "inputs": [
        { "name": "_assetAddress", "type": "address", "internalType": "address" },
        { "name": "_to", "type": "address", "internalType": "address" },
        { "name": "_amount", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "LogWithdraw",
      "inputs": [
        {
          "name": "_assetAddress",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "_to",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    { "type": "error", "name": "NotAContract", "inputs": [] },
    {
      "type": "function",
      "name": "initWormhole",
      "inputs": [
        {
          "name": "configs",
          "type": "tuple[]",
          "internalType": "struct WormholeFacet.Config[]",
          "components": [
            { "name": "chainId", "type": "uint256", "internalType": "uint256" },
            {
              "name": "wormholeChainId",
              "type": "uint16",
              "internalType": "uint16"
            }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setWormholeChainId",
      "inputs": [
        { "name": "_lifiChainId", "type": "uint256", "internalType": "uint256" },
        { "name": "_wormholeChainId", "type": "uint16", "internalType": "uint16" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setWormholeChainIds",
      "inputs": [
        {
          "name": "configs",
          "type": "tuple[]",
          "internalType": "struct WormholeFacet.Config[]",
          "components": [
            { "name": "chainId", "type": "uint256", "internalType": "uint256" },
            {
              "name": "wormholeChainId",
              "type": "uint16",
              "internalType": "uint16"
            }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "startBridgeTokensViaWormhole",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_wormholeData",
          "type": "tuple",
          "internalType": "struct WormholeFacet.WormholeData",
          "components": [
            { "name": "receiver", "type": "bytes32", "internalType": "bytes32" },
            {
              "name": "arbiterFee",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "nonce", "type": "uint32", "internalType": "uint32" }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "swapAndStartBridgeTokensViaWormhole",
      "inputs": [
        {
          "name": "_bridgeData",
          "type": "tuple",
          "internalType": "struct ILiFi.BridgeData",
          "components": [
            {
              "name": "transactionId",
              "type": "bytes32",
              "internalType": "bytes32"
            },
            { "name": "bridge", "type": "string", "internalType": "string" },
            { "name": "integrator", "type": "string", "internalType": "string" },
            { "name": "referrer", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            { "name": "receiver", "type": "address", "internalType": "address" },
            { "name": "minAmount", "type": "uint256", "internalType": "uint256" },
            {
              "name": "destinationChainId",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "hasSourceSwaps", "type": "bool", "internalType": "bool" },
            {
              "name": "hasDestinationCall",
              "type": "bool",
              "internalType": "bool"
            }
          ]
        },
        {
          "name": "_swapData",
          "type": "tuple[]",
          "internalType": "struct LibSwap.SwapData[]",
          "components": [
            { "name": "callTo", "type": "address", "internalType": "address" },
            { "name": "approveTo", "type": "address", "internalType": "address" },
            {
              "name": "sendingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "receivingAssetId",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "fromAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "callData", "type": "bytes", "internalType": "bytes" },
            { "name": "requiresDeposit", "type": "bool", "internalType": "bool" }
          ]
        },
        {
          "name": "_wormholeData",
          "type": "tuple",
          "internalType": "struct WormholeFacet.WormholeData",
          "components": [
            { "name": "receiver", "type": "bytes32", "internalType": "bytes32" },
            {
              "name": "arbiterFee",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "nonce", "type": "uint32", "internalType": "uint32" }
          ]
        }
      ],
      "outputs": [],
      "stateMutability": "payable"
    },
    {
      "type": "event",
      "name": "WormholeChainIdMapped",
      "inputs": [
        {
          "name": "lifiChainId",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        },
        {
          "name": "wormholeChainId",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "WormholeChainIdsMapped",
      "inputs": [
        {
          "name": "configs",
          "type": "tuple[]",
          "indexed": false,
          "internalType": "struct WormholeFacet.Config[]",
          "components": [
            { "name": "chainId", "type": "uint256", "internalType": "uint256" },
            {
              "name": "wormholeChainId",
              "type": "uint16",
              "internalType": "uint16"
            }
          ]
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "WormholeInitialized",
      "inputs": [
        {
          "name": "configs",
          "type": "tuple[]",
          "indexed": false,
          "internalType": "struct WormholeFacet.Config[]",
          "components": [
            { "name": "chainId", "type": "uint256", "internalType": "uint256" },
            {
              "name": "wormholeChainId",
              "type": "uint16",
              "internalType": "uint16"
            }
          ]
        }
      ],
      "anonymous": false
    },
    {
      "type": "error",
      "name": "UnsupportedChainId",
      "inputs": [
        { "name": "chainId", "type": "uint256", "internalType": "uint256" }
      ]
    },
    {
      "type": "event",
      "name": "AccessGranted",
      "inputs": [
        {
          "name": "account",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "method",
          "type": "bytes4",
          "indexed": true,
          "internalType": "bytes4"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "AccessRevoked",
      "inputs": [
        {
          "name": "account",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "method",
          "type": "bytes4",
          "indexed": true,
          "internalType": "bytes4"
        }
      ],
      "anonymous": false
    },
    { "type": "error", "name": "AddressOutOfBounds", "inputs": [] },
    {
      "type": "event",
      "name": "AssetSwapped",
      "inputs": [
        {
          "name": "transactionId",
          "type": "bytes32",
          "indexed": false,
          "internalType": "bytes32"
        },
        {
          "name": "dex",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "fromAssetId",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "toAssetId",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "fromAmount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "toAmount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "timestamp",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    }
  ]
