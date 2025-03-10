export type Basic = {
  "version": "0.1.0",
  "name": "basic",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "storeVaultData",
      "accounts": [
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "solAmount",
          "type": "u64"
        },
        {
          "name": "releaseTime",
          "type": "u64"
        },
        {
          "name": "destination",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "releaseFunds",
      "accounts": [
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destination",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "vaultData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "solAmount",
            "type": "u64"
          },
          {
            "name": "releaseTime",
            "type": "u64"
          },
          {
            "name": "destination",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidAmount",
      "msg": "La cantidad de SOL debe ser mayor que 0"
    },
    {
      "code": 6001,
      "name": "AmountOverflow",
      "msg": "Error de overflow al sumar cantidades de SOL"
    },
    {
      "code": 6002,
      "name": "TimeNotReached",
      "msg": "Aún no ha llegado el tiempo de desbloqueo"
    }
  ]
};

export const IDL: Basic = {
  "version": "0.1.0",
  "name": "basic",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "storeVaultData",
      "accounts": [
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "solAmount",
          "type": "u64"
        },
        {
          "name": "releaseTime",
          "type": "u64"
        },
        {
          "name": "destination",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "releaseFunds",
      "accounts": [
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "destination",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "vaultData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "solAmount",
            "type": "u64"
          },
          {
            "name": "releaseTime",
            "type": "u64"
          },
          {
            "name": "destination",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidAmount",
      "msg": "La cantidad de SOL debe ser mayor que 0"
    },
    {
      "code": 6001,
      "name": "AmountOverflow",
      "msg": "Error de overflow al sumar cantidades de SOL"
    },
    {
      "code": 6002,
      "name": "TimeNotReached",
      "msg": "Aún no ha llegado el tiempo de desbloqueo"
    }
  ]
};
