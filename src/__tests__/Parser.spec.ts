import Parser from '../Parser';
import rosterFile from './testData.json';
import RosterLoaderFactory from '../loader/RosterLoaderFactory';
import { BSRoster } from '../types';

jest.mock('../loader/RosterLoaderFactory');

const mockedFactory = RosterLoaderFactory as jest.Mocked<typeof RosterLoaderFactory>;

describe('Parser', () => {
  it('should be able to parse a Battlescribe roster', async () => {
    mockedFactory.getLoader.mockImplementationOnce(() => ({
      load: () => Promise.resolve((rosterFile as unknown) as BSRoster)
    }));

    const roster = await Parser.parse('some absolute path');
    expect(Object.assign({}, roster)).toEqual({
      name: 'Super Soldier Strike Force',
      gameSystemName: 'Warrior Axe 9000',
      costs: [
        {
          value: 87,
          name: 'PL'
        },
        {
          value: 1837,
          name: 'pts'
        },
        {
          value: 10,
          name: 'CP'
        }
      ],
      costLimits: [
        {
          value: 2000,
          name: 'pts'
        }
      ],
      forces: [
        {
          catalogueName: 'The Empire - Super Soldier Edition',
          name: 'Goon Department',
          publications: ['Sears Catalogue', 'New York Times'],
          categories: [
            {
              primary: false,
              name: 'Category A'
            },
            {
              primary: false,
              name: 'Category B'
            }
          ],
          forces: [],
          rules: [
            {
              name: 'Kitchen aid',
              description: 'A unit with this ability is helpful in the kitchen.'
            }
          ],
          selections: [
            {
              number: 1,
              type: 'upgrade',
              name: '**DEPARTMENT**',
              customName: undefined,
              customNotes: undefined,
              costs: [
                {
                  value: 0,
                  name: 'PL'
                },
                {
                  value: 0,
                  name: 'CP'
                },
                {
                  value: 0,
                  name: 'pts'
                }
              ],
              categories: [
                {
                  primary: false,
                  name: 'Configuration'
                },
                {
                  primary: true,
                  name: 'Configuration'
                }
              ],
              rules: [],
              selections: [
                {
                  number: 1,
                  type: 'upgrade',
                  name: 'Accounting',
                  customName: undefined,
                  customNotes: undefined,
                  costs: [
                    {
                      value: 0,
                      name: 'PL'
                    },
                    {
                      value: 0,
                      name: 'CP'
                    },
                    {
                      value: 0,
                      name: 'pts'
                    }
                  ],
                  categories: [],
                  selections: [],
                  rules: [
                    {
                      name: 'Water Cooler Talk',
                      description: 'Gossip and holiday plans.'
                    }
                  ],
                  profiles: []
                }
              ],
              profiles: []
            },
            {
              number: 1,
              type: 'upgrade',
              name: 'Super Strong Super Soldier Squad',
              customName: '',
              customNotes: '',
              costs: [
                {
                  value: 9,
                  name: 'PL'
                },
                {
                  value: 187,
                  name: 'pts'
                },
                {
                  value: 0,
                  name: 'CP'
                }
              ],
              categories: [
                {
                  primary: false,
                  name: 'Super Soldiers'
                },
                {
                  primary: true,
                  name: 'Super Strong'
                }
              ],
              selections: [
                {
                  number: 1,
                  type: 'upgrade',
                  name: 'Super Soldier Leader',
                  customName: undefined,
                  customNotes: undefined,
                  costs: [
                    {
                      value: 31,
                      name: 'pts'
                    },
                    {
                      value: 0,
                      name: 'PL'
                    },
                    {
                      value: 0,
                      name: 'CP'
                    }
                  ],
                  categories: [],
                  selections: [
                    {
                      number: 1,
                      type: 'upgrade',
                      name: 'Steel ruler',
                      customName: undefined,
                      customNotes: undefined,
                      costs: [
                        {
                          value: 5,
                          name: 'pts'
                        },
                        {
                          value: 0,
                          name: 'PL'
                        },
                        {
                          value: 0,
                          name: 'CP'
                        }
                      ],
                      categories: [],
                      selections: [],
                      rules: [],
                      profiles: [
                        {
                          typeName: 'Weapon',
                          name: 'Steel ruler',
                          range: 'Melee',
                          type: 'Melee',
                          strength: 'User',
                          armourPenetration: '-3',
                          damage: '1',
                          abilities: '-'
                        }
                      ]
                    },
                    {
                      number: 1,
                      type: 'upgrade',
                      name: 'Blunderbuss',
                      customName: undefined,
                      customNotes: undefined,
                      costs: [
                        {
                          value: 3,
                          name: 'pts'
                        },
                        {
                          value: 0,
                          name: 'PL'
                        },
                        {
                          value: 0,
                          name: 'CP'
                        }
                      ],
                      categories: [],
                      selections: [],
                      rules: [],
                      profiles: [
                        {
                          typeName: 'Weapon',
                          name: 'Blunderbuss',
                          range: '24"',
                          type: 'Rapid Fire 2',
                          strength: '4',
                          armourPenetration: '0',
                          damage: '1',
                          abilities: '-'
                        }
                      ]
                    }
                  ],
                  rules: [],
                  profiles: []
                },
                {
                  number: 2,
                  type: 'upgrade',
                  name: 'Super Soldier w/Oven mitts',
                  customName: undefined,
                  customNotes: undefined,
                  costs: [
                    {
                      value: 72,
                      name: 'pts'
                    },
                    {
                      value: 0,
                      name: 'PL'
                    },
                    {
                      value: 0,
                      name: 'CP'
                    }
                  ],
                  categories: [],
                  selections: [
                    {
                      number: 2,
                      type: 'upgrade',
                      name: 'Blunderbuss',
                      customName: undefined,
                      customNotes: undefined,
                      costs: [
                        {
                          value: 6,
                          name: 'pts'
                        },
                        {
                          value: 0,
                          name: 'PL'
                        },
                        {
                          value: 0,
                          name: 'CP'
                        }
                      ],
                      categories: [],
                      selections: [],
                      rules: [],
                      profiles: [
                        {
                          typeName: 'Weapon',
                          name: 'Blunderbuss',
                          range: '24"',
                          type: 'Rapid Fire 2',
                          strength: '4',
                          armourPenetration: '0',
                          damage: '1',
                          abilities: '-'
                        }
                      ]
                    },
                    {
                      number: 2,
                      type: 'upgrade',
                      name: 'Oven mitt',
                      customName: undefined,
                      customNotes: undefined,
                      costs: [
                        {
                          value: 20,
                          name: 'pts'
                        },
                        {
                          value: 0,
                          name: 'PL'
                        },
                        {
                          value: 0,
                          name: 'CP'
                        }
                      ],
                      categories: [],
                      selections: [],
                      rules: [],
                      profiles: [
                        {
                          typeName: 'Weapon',
                          name: 'Oven mitt',
                          range: 'Melee',
                          type: 'Melee',
                          strength: 'x2',
                          armourPenetration: '-3',
                          damage: 'D3',
                          abilities: 'Can handle hot stuff.'
                        }
                      ]
                    }
                  ],
                  rules: [],
                  profiles: []
                },
                {
                  number: 1,
                  type: 'upgrade',
                  name: 'Super Solder w/Sharp oven mitt',
                  customName: undefined,
                  customNotes: undefined,
                  costs: [
                    {
                      value: 36,
                      name: 'pts'
                    },
                    {
                      value: 0,
                      name: 'PL'
                    },
                    {
                      value: 0,
                      name: 'CP'
                    }
                  ],
                  categories: [],
                  selections: [
                    {
                      number: 1,
                      type: 'upgrade',
                      name: 'Blunderbuss',
                      customName: undefined,
                      customNotes: undefined,
                      costs: [
                        {
                          value: 3,
                          name: 'pts'
                        },
                        {
                          value: 0,
                          name: 'PL'
                        },
                        {
                          value: 0,
                          name: 'CP'
                        }
                      ],
                      categories: [],
                      selections: [],
                      rules: [],
                      profiles: [
                        {
                          typeName: 'Weapon',
                          name: 'Blunderbuss',
                          range: '24"',
                          type: 'Rapid Fire 2',
                          strength: '4',
                          armourPenetration: '0',
                          damage: '1',
                          abilities: '-'
                        }
                      ]
                    },
                    {
                      number: 1,
                      type: 'upgrade',
                      name: 'Sharp oven mitt',
                      customName: undefined,
                      customNotes: undefined,
                      costs: [
                        {
                          value: 10,
                          name: 'pts'
                        },
                        {
                          value: 0,
                          name: 'PL'
                        },
                        {
                          value: 0,
                          name: 'CP'
                        }
                      ],
                      categories: [],
                      selections: [],
                      rules: [],
                      profiles: [
                        {
                          typeName: 'Weapon',
                          name: 'Sharp oven mitt',
                          range: 'Melee',
                          type: 'Melee',
                          strength: 'x2',
                          armourPenetration: '-4',
                          damage: '2',
                          abilities: 'Can cut through hot stuff.'
                        }
                      ]
                    }
                  ],
                  rules: [],
                  profiles: []
                },
                {
                  number: 1,
                  type: 'upgrade',
                  name: 'Super Soldier w/Ironing board',
                  customName: undefined,
                  customNotes: undefined,
                  costs: [
                    {
                      value: 48,
                      name: 'pts'
                    },
                    {
                      value: 0,
                      name: 'PL'
                    },
                    {
                      value: 0,
                      name: 'CP'
                    }
                  ],
                  categories: [],
                  selections: [
                    {
                      number: 1,
                      type: 'upgrade',
                      name: 'Oven mitt',
                      customName: undefined,
                      customNotes: undefined,
                      costs: [
                        {
                          value: 10,
                          name: 'pts'
                        },
                        {
                          value: 0,
                          name: 'PL'
                        },
                        {
                          value: 0,
                          name: 'CP'
                        }
                      ],
                      categories: [],
                      selections: [],
                      rules: [],
                      profiles: [
                        {
                          typeName: 'Weapon',
                          name: 'Oven mitt',
                          range: 'Melee',
                          type: 'Melee',
                          strength: 'x2',
                          armourPenetration: '-3',
                          damage: 'D3',
                          abilities: 'Can handle hot stuff.'
                        }
                      ]
                    },
                    {
                      number: 1,
                      type: 'upgrade',
                      name: 'Ironing board',
                      customName: undefined,
                      customNotes: undefined,
                      costs: [
                        {
                          value: 15,
                          name: 'pts'
                        },
                        {
                          value: 0,
                          name: 'PL'
                        },
                        {
                          value: 0,
                          name: 'CP'
                        }
                      ],
                      categories: [],
                      selections: [],
                      rules: [],
                      profiles: [
                        {
                          typeName: 'Weapon',
                          name: 'Ironing board',
                          range: '24"',
                          type: 'Heavy 6',
                          strength: '6',
                          armourPenetration: '-1',
                          damage: '1',
                          abilities: '-'
                        }
                      ]
                    }
                  ],
                  rules: [],
                  profiles: []
                }
              ],
              rules: [
                {
                  name: 'Scary',
                  description: 'This unit is downright scary.'
                }
              ],
              profiles: [
                {
                  typeName: 'Ability',
                  name: 'Cooking',
                  description: 'Can make really good pasta.'
                },
                {
                  typeName: 'Unit',
                  name: 'Super Soldier',
                  movement: '5"',
                  weaponSkill: '3+',
                  ballisticSkill: '3+',
                  strength: '4',
                  toughness: '4',
                  wounds: '2',
                  attacks: '2',
                  leadership: '8',
                  save: '2+'
                },
                {
                  typeName: 'Unit',
                  name: 'Super Soldier Leader',
                  movement: '5"',
                  weaponSkill: '3+',
                  ballisticSkill: '3+',
                  strength: '4',
                  toughness: '4',
                  wounds: '2',
                  attacks: '3',
                  leadership: '9',
                  save: '2+'
                }
              ]
            },
            {
              number: 1,
              type: 'model',
              name: 'Nerd',
              customName: undefined,
              customNotes: undefined,
              costs: [
                {
                  value: 9,
                  name: 'PL'
                },
                {
                  value: 143,
                  name: 'pts'
                },
                {
                  value: -1,
                  name: 'CP'
                }
              ],
              categories: [
                {
                  primary: false,
                  name: 'A dude'
                },
                {
                  primary: true,
                  name: 'Natural leader'
                }
              ],
              selections: [
                {
                  number: 1,
                  type: 'upgrade',
                  name: 'Notebook',
                  costs: [
                    {
                      value: 20,
                      name: 'pts'
                    },
                    {
                      value: 0,
                      name: 'PL'
                    },
                    {
                      value: 0,
                      name: 'CP'
                    }
                  ],
                  categories: [],
                  selections: [],
                  rules: [],
                  profiles: [
                    {
                      typeName: 'Weapon',
                      name: 'Notebook',
                      range: 'Melee',
                      type: 'Melee',
                      strength: 'x2',
                      armourPenetration: '-3',
                      damage: '3',
                      abilities: 'Contains knowledge about niche stuff.'
                    }
                  ]
                },
                {
                  number: 1,
                  type: 'upgrade',
                  name: 'Ballpoint pen',
                  costs: [
                    {
                      value: 0,
                      name: 'PL'
                    },
                    {
                      value: 0,
                      name: 'pts'
                    },
                    {
                      value: 0,
                      name: 'CP'
                    }
                  ],
                  categories: [],
                  selections: [],
                  rules: [],
                  profiles: [
                    {
                      typeName: 'Weapon',
                      name: 'Ballpoint pen',
                      range: 'Melee',
                      type: 'Melee',
                      strength: '+4',
                      armourPenetration: '-4',
                      damage: '3',
                      abilities: '-'
                    }
                  ]
                },
                {
                  number: 1,
                  type: 'upgrade',
                  name: 'Show off knowledge',
                  costs: [
                    {
                      value: 0,
                      name: 'PL'
                    },
                    {
                      value: 0,
                      name: 'pts'
                    },
                    {
                      value: 0,
                      name: 'CP'
                    }
                  ],
                  categories: [],
                  selections: [],
                  rules: [],
                  profiles: [
                    {
                      typeName: 'Psychic Power',
                      name: 'Show off knowledge',
                      warpCharge: '5',
                      range: '18"',
                      details: 'Can impress other nerds. Has no effect on non-nerds.'
                    }
                  ]
                },
                {
                  type: 'upgrade',
                  name: 'Blunderbuss',
                  number: 1,
                  costs: [
                    {
                      value: 3,
                      name: 'pts'
                    },
                    {
                      value: 0,
                      name: 'PL'
                    },
                    {
                      value: 0,
                      name: 'CP'
                    }
                  ],
                  categories: [],
                  selections: [],
                  rules: [],
                  profiles: [
                    {
                      typeName: 'Weapon',
                      name: 'Blunderbuss',
                      range: '24"',
                      type: 'Rapid Fire 2',
                      strength: '4',
                      armourPenetration: '0',
                      damage: '1',
                      abilities: '-'
                    }
                  ]
                },
                {
                  number: 1,
                  type: 'upgrade',
                  name: '1. Fast typing',
                  costs: [
                    {
                      value: 0,
                      name: 'PL'
                    },
                    {
                      value: 0,
                      name: 'pts'
                    },
                    {
                      value: 0,
                      name: 'CP'
                    }
                  ],
                  categories: [],
                  selections: [],
                  rules: [],
                  profiles: [
                    {
                      typeName: 'Psychic Power',
                      name: 'Fast typing',
                      warpCharge: '7',
                      range: 'Self',
                      details: 'Use the Dvorak keyboard layout.'
                    }
                  ]
                },
                {
                  number: 1,
                  type: 'upgrade',
                  name: 'Leader of the pack',
                  costs: [
                    {
                      value: -1,
                      name: 'CP'
                    },
                    {
                      value: 0,
                      name: 'PL'
                    },
                    {
                      value: 0,
                      name: 'pts'
                    }
                  ],
                  categories: [],
                  selections: [],
                  rules: [],
                  profiles: []
                },
                {
                  number: 1,
                  type: 'upgrade',
                  name: '2. Leader of the pack',
                  costs: [
                    {
                      value: 0,
                      name: 'PL'
                    },
                    {
                      value: 0,
                      name: 'pts'
                    },
                    {
                      value: 0,
                      name: 'CP'
                    }
                  ],
                  categories: [],
                  selections: [],
                  profiles: [],
                  rules: [
                    {
                      name: '2. Leader of the pack',
                      description: 'Plus 1 to charisma for nerds if number of nerds equal five or more.'
                    }
                  ]
                }
              ],
              rules: [],
              profiles: [
                {
                  typeName: 'Psyker',
                  name: 'Hidden knowledge',
                  cast: '2',
                  deny: '1',
                  powersKnown: 'No one knows',
                  other: undefined
                },
                {
                  typeName: 'Explosion',
                  name: 'Quick to anger',
                  diceRoll: '6',
                  distance: '3"',
                  mortalWounds: 'D3'
                },
                {
                  typeName: 'Unit',
                  name: 'Nerd',
                  movement: '6"',
                  weaponSkill: '2+',
                  ballisticSkill: '3+',
                  strength: '6',
                  toughness: '7',
                  wounds: '8',
                  attacks: '3',
                  leadership: '9',
                  save: '3+'
                }
              ]
            },
            {
              number: 1,
              type: 'model',
              name: 'Jeep Cherokee',
              customName: undefined,
              customNotes: undefined,
              costs: [
                {
                  value: 131,
                  name: 'pts'
                },
                {
                  value: 4,
                  name: 'PL'
                },
                {
                  value: 0,
                  name: 'CP'
                }
              ],
              categories: [
                {
                  primary: false,
                  name: 'Car'
                },
                {
                  primary: true,
                  name: 'Jeep'
                }
              ],
              selections: [
                {
                  number: 1,
                  type: 'upgrade',
                  name: '2x Blunderbuss',
                  customName: undefined,
                  customNotes: undefined,
                  costs: [
                    {
                      value: 6,
                      name: 'pts'
                    },
                    {
                      value: 0,
                      name: 'PL'
                    },
                    {
                      value: 0,
                      name: 'CP'
                    }
                  ],
                  categories: [],
                  profiles: [
                    {
                      typeName: 'Weapon',
                      name: 'Blunderbuss',
                      range: '24"',
                      type: 'Rapid Fire 2',
                      strength: '4',
                      armourPenetration: '0',
                      damage: '1',
                      abilities: '-'
                    }
                  ],
                  rules: [],
                  selections: []
                },
                {
                  number: 1,
                  type: 'upgrade',
                  name: 'Windshield',
                  customName: undefined,
                  customNotes: undefined,
                  costs: [
                    {
                      value: 25,
                      name: 'pts'
                    },
                    {
                      value: 0,
                      name: 'PL'
                    },
                    {
                      value: 0,
                      name: 'CP'
                    }
                  ],
                  categories: [],
                  selections: [],
                  rules: [],
                  profiles: [
                    {
                      typeName: 'Ability',
                      name: 'Windshield',
                      description: 'Protects against rain.'
                    }
                  ]
                }
              ],
              rules: [
                {
                  name: 'Out of gas',
                  description: 'Needs gas to drive.'
                }
              ],
              profiles: [
                {
                  typeName: 'Unit',
                  name: 'Jeep Cherokee',
                  movement: '*',
                  weaponSkill: '6+',
                  ballisticSkill: '*',
                  strength: '7',
                  toughness: '7',
                  wounds: '11',
                  attacks: '*',
                  leadership: '8',
                  save: '3+'
                },
                {
                  typeName: 'Wound Track',
                  name: 'Jeep Cherokee Wound Track 1',
                  remainingWounds: '6-11+',
                  'Characteristic 1': '14"',
                  'Characteristic 2': '3+',
                  'Characteristic 3': '3'
                },
                {
                  typeName: 'Wound Track',
                  name: 'Jeep Cherokee Wound Track 2',
                  remainingWounds: '3-5',
                  'Characteristic 1': '7"',
                  'Characteristic 2': '4+',
                  'Characteristic 3': 'D3'
                },
                {
                  typeName: 'Transport',
                  name: 'Jeep Cherokee',
                  capacity: 'Can transport at least one person.'
                }
              ]
            },
            {
              number: 1,
              type: 'upgrade',
              name: 'Extra armour plates',
              customName: undefined,
              customNotes: undefined,
              costs: [
                {
                  value: 0,
                  name: 'PL'
                },
                {
                  value: 0,
                  name: 'pts'
                },
                {
                  value: -1,
                  name: 'CP'
                }
              ],
              categories: [
                {
                  primary: false,
                  name: 'Armour plates'
                },
                {
                  primary: true,
                  name: 'Armour plates'
                }
              ],
              selections: [
                {
                  number: 1,
                  type: 'upgrade',
                  name: '1 Additional armour plate',
                  customName: undefined,
                  customNotes: undefined,
                  costs: [
                    {
                      value: -1,
                      name: 'CP'
                    },
                    {
                      value: 0,
                      name: 'PL'
                    },
                    {
                      value: 0,
                      name: 'pts'
                    }
                  ],
                  categories: [],
                  selections: [],
                  rules: [],
                  profiles: []
                }
              ],
              rules: [],
              profiles: []
            }
          ]
        }
      ]
    });
  });
});
