export const barbarianDictionary = {
    "class": [
        {
            "name": "Barbarian",
            "source": "PHB",
            "page": 46,
            "srd": true,
            "hd": {
                "number": 1,
                "faces": 12
            },
            "proficiency": [
                "str",
                "con"
            ],
            "startingProficiencies": {
                "armor": [
                    "light",
                    "medium",
                    "shield"
                ],
                "weapons": [
                    "simple",
                    "martial"
                ],
                "skills": [
                    {
                        "choose": {
                            "from": [
                                "animal handling",
                                "athletics",
                                "intimidation",
                                "nature",
                                "perception",
                                "survival"
                            ],
                            "count": 2
                        }
                    }
                ]
            },
            "startingEquipment": {
                "additionalFromBackground": true,
                "default": [
                    "(a) a greataxe or (b) any martial melee weapon",
                    "(a) two handaxes or (b) any simple weapon",
                    "An explorer's pack, and four javelin"
                ],
                "goldAlternative": "2d4 × 10 Starting Gold"
            },
            "multiclassing": {
                "requirements": {
                    "str": 13
                },
                "proficienciesGained": {
                    "armor": [
                        "shield"
                    ],
                    "weapons": [
                        "simple",
                        "martial"
                    ]
                }
            },
            "classTableGroups": [
                {
                    "colLabels": [
                        "Rages",
                        "Rage Damage"
                    ],
                    "rows": [
                        [
                            "2",
                            {
                                "type": "bonus",
                                "value": 2
                            }
                        ],
                        [
                            "2",
                            {
                                "type": "bonus",
                                "value": 2
                            }
                        ],
                        [
                            "3",
                            {
                                "type": "bonus",
                                "value": 2
                            }
                        ],
                        [
                            "3",
                            {
                                "type": "bonus",
                                "value": 2
                            }
                        ],
                        [
                            "3",
                            {
                                "type": "bonus",
                                "value": 2
                            }
                        ],
                        [
                            "4",
                            {
                                "type": "bonus",
                                "value": 2
                            }
                        ],
                        [
                            "4",
                            {
                                "type": "bonus",
                                "value": 2
                            }
                        ],
                        [
                            "4",
                            {
                                "type": "bonus",
                                "value": 2
                            }
                        ],
                        [
                            "4",
                            {
                                "type": "bonus",
                                "value": 3
                            }
                        ],
                        [
                            "4",
                            {
                                "type": "bonus",
                                "value": 3
                            }
                        ],
                        [
                            "4",
                            {
                                "type": "bonus",
                                "value": 3
                            }
                        ],
                        [
                            "5",
                            {
                                "type": "bonus",
                                "value": 3
                            }
                        ],
                        [
                            "5",
                            {
                                "type": "bonus",
                                "value": 3
                            }
                        ],
                        [
                            "5",
                            {
                                "type": "bonus",
                                "value": 3
                            }
                        ],
                        [
                            "5",
                            {
                                "type": "bonus",
                                "value": 3
                            }
                        ],
                        [
                            "5",
                            {
                                "type": "bonus",
                                "value": 4
                            }
                        ],
                        [
                            "6",
                            {
                                "type": "bonus",
                                "value": 4
                            }
                        ],
                        [
                            "6",
                            {
                                "type": "bonus",
                                "value": 4
                            }
                        ],
                        [
                            "6",
                            {
                                "type": "bonus",
                                "value": 4
                            }
                        ],
                        [
                            "Unlimited",
                            {
                                "type": "bonus",
                                "value": 4
                            }
                        ]
                    ]
                }
            ],
            "classFeatures": [
                "Rage|Barbarian||1",
                "Unarmored Defense|Barbarian||1",
                "Danger Sense|Barbarian||2",
                "Survival Instincts|Barbarian||2",
                "Reckless Attack|Barbarian||2",
                {
                    "classFeature": "Primal Path|Barbarian||3",
                    "gainSubclassFeature": true
                },
                "Primal Knowledge|Barbarian||3|TCE",
                "Ability Score Improvement|Barbarian||4",
                "Proficiency Versatility|Barbarian||4",
                "Extra Attack|Barbarian||5",
                "Fast Movement|Barbarian||5",
                "Instinctive Pounce|Barbarian||5",
                {
                    "classFeature": "Path Feature|Barbarian||6",
                    "gainSubclassFeature": true
                },
                "Feral Instinct|Barbarian||7",
                "Instinctive Pounce|Barbarian||7|TCE",
                "Ability Score Improvement|Barbarian||8",
                "Proficiency Versatility|Barbarian||8",
                "Brutal Critical (1 die)|Barbarian||9",
                {
                    "classFeature": "Path feature|Barbarian||10",
                    "gainSubclassFeature": true
                },
                "Relentless Rage|Barbarian||11",
                "Ability Score Improvement|Barbarian||12",
                "Proficiency Versatility|Barbarian||12",
                "Brutal Critical (2 dice)|Barbarian||13",
                {
                    "classFeature": "Path feature|Barbarian||14",
                    "gainSubclassFeature": true
                },
                "Persistent Rage|Barbarian||15",
                "Ability Score Improvement|Barbarian||16",
                "Proficiency Versatility|Barbarian||16",
                "Brutal Critical (3 dice)|Barbarian||17",
                "Indomitable Might|Barbarian||18",
                "Ability Score Improvement|Barbarian||19",
                "Proficiency Versatility|Barbarian||19",
                "Primal Champion|Barbarian||20"
            ],
            "subclassTitle": "Primal Path",
            "subclasses": [
                {
                    "name": "Path of the Berserker",
                    "shortName": "Berserker",
                    "source": "PHB",
                    "page": 49,
                    "srd": true,
                    "subclassFeatures": [
                        "Path of the Berserker|Barbarian||Berserker||3",
                        "Mindless Rage|Barbarian||Berserker||6",
                        "Intimidating Presence|Barbarian||Berserker||10",
                        "Retaliation|Barbarian||Berserker||14"
                    ]
                },
                {
                    "name": "Path of the Totem Warrior",
                    "shortName": "Totem Warrior",
                    "source": "PHB",
                    "page": 50,
                    "additionalSpells": [
                        {
                            "innate": {
                                "3": [
                                    "beast sense",
                                    "speak with animals"
                                ],
                                "10": [
                                    "commune with nature"
                                ]
                            }
                        }
                    ],
                    "subclassFeatures": [
                        "Path of the Totem Warrior|Barbarian||Totem Warrior||3",
                        "Aspect of the Beast|Barbarian||Totem Warrior||6",
                        "Spirit Walker|Barbarian||Totem Warrior||10",
                        "Totemic Attunement|Barbarian||Totem Warrior||14"
                    ]
                },
                {
                    "name": "Path of the Battlerager",
                    "shortName": "Battlerager",
                    "source": "SCAG",
                    "page": 121,
                    "subclassFeatures": [
                        "Path of the Battlerager|Barbarian||Battlerager|SCAG|3",
                        "Reckless Abandon|Barbarian||Battlerager|SCAG|6",
                        "Battlerager Charge|Barbarian||Battlerager|SCAG|10",
                        "Spiked Retribution|Barbarian||Battlerager|SCAG|14"
                    ]
                },
                {
                    "name": "Path of the Ancestral Guardian",
                    "shortName": "Ancestral Guardian",
                    "source": "XGE",
                    "page": 9,
                    "spellcastingAbility": "wis",
                    "additionalSpells": [
                        {
                            "innate": {
                                "10": [
                                    "augury",
                                    "clairvoyance"
                                ]
                            }
                        }
                    ],
                    "subclassFeatures": [
                        "Path of the Ancestral Guardian|Barbarian||Ancestral Guardian|XGE|3",
                        "Spirit Shield|Barbarian||Ancestral Guardian|XGE|6",
                        "Consult the Spirits|Barbarian||Ancestral Guardian|XGE|10",
                        "Vengeful Ancestors|Barbarian||Ancestral Guardian|XGE|14"
                    ]
                },
                {
                    "name": "Path of the Storm Herald",
                    "shortName": "Storm Herald",
                    "source": "XGE",
                    "page": 10,
                    "subclassFeatures": [
                        "Path of the Storm Herald|Barbarian||Storm Herald|XGE|3",
                        "Storm Soul|Barbarian||Storm Herald|XGE|6",
                        "Shielding Storm|Barbarian||Storm Herald|XGE|10",
                        "Raging Storm|Barbarian||Storm Herald|XGE|14"
                    ]
                },
                {
                    "name": "Path of the Zealot",
                    "shortName": "Zealot",
                    "source": "XGE",
                    "page": 11,
                    "subclassFeatures": [
                        "Path of the Zealot|Barbarian||Zealot|XGE|3",
                        "Fanatical Focus|Barbarian||Zealot|XGE|6",
                        "Zealous Presence|Barbarian||Zealot|XGE|10",
                        "Rage beyond Death|Barbarian||Zealot|XGE|14"
                    ]
                },
                {
                    "name": "Path of the Beast",
                    "shortName": "Beast",
                    "source": "TCE",
                    "page": 24,
                    "subclassFeatures": [
                        "Path of the Beast|Barbarian||Beast|TCE|3",
                        "Bestial Soul|Barbarian||Beast|TCE|6",
                        "Infectious Fury|Barbarian||Beast|TCE|10",
                        "Call the Hunt|Barbarian||Beast|TCE|14"
                    ]
                },
                {
                    "name": "Path of Wild Magic",
                    "shortName": "Wild Magic",
                    "source": "TCE",
                    "page": 25,
                    "subclassFeatures": [
                        "Path of Wild Magic|Barbarian||Wild Magic|TCE|3",
                        "Bolstering Magic|Barbarian||Wild Magic|TCE|6",
                        "Unstable Backlash|Barbarian||Wild Magic|TCE|10",
                        "Controlled Surge|Barbarian||Wild Magic|TCE|14"
                    ]
                }
            ],
            "fluff": [
                {
                    "name": "Barbarian",
                    "type": "section",
                    "entries": [
                        "A tall human tribesman strides through a blizzard, draped in fur and hefting his axe. He laughs as he charges toward the frost giant who dared poach his people's elk herd.",
                        "A half-orc snarls at the latest challenger to her authority over their savage tribe, ready to break his neck with her bare hands as she did to the last six rivals.",
                        "Frothing at the mouth, a dwarf slams his helmet into the face of his drow foe, then turns to drive his armored elbow into the gut of another.",
                        "These barbarians, different as they might be, are defined by their rage: unbridled, unquenchable, and unthinking fury. More than a mere emotion, their anger is the ferocity of a cornered predator, the unrelenting assault of a storm, the churning turmoil of the sea.",
                        "For some, their rage springs from a communion with fierce animal spirits. Others draw from a roiling reservoir of anger at a world full of pain. For every barbarian, rage is a power that fuels not just a battle frenzy but also uncanny reflexes, resilience, and feats of strength.",
                        {
                            "type": "entries",
                            "name": "Primal Instinct",
                            "entries": [
                                "People of towns and cities take pride in how their civilized ways set them apart from animals, as if denying one's own nature was a mark of superiority. To a barbarian, though, civilization is no virtue, but a sign of weakness. The strong embrace their animal nature—keen instincts, primal physicality, and ferocious rage. Barbarians are uncomfortable when hedged in by walls and crowds. They thrive in the wilds of their homelands: the tundra, jungle, or grasslands where their tribes live and hunt.",
                                "Barbarians come alive in the chaos of combat. They can enter a berserk state where rage takes over, giving them superhuman strength and resilience. A barbarian can draw on this reservoir of fury only a few times without resting, but those few rages are usually sufficient to defeat whatever threats arise."
                            ]
                        },
                        {
                            "type": "entries",
                            "name": "A Life of Danger",
                            "entries": [
                                "Not every member of the tribes deemed \"barbarians\" by scions of civilized society has the barbarian class. A true barbarian among these people is as uncommon as a skilled fighter in a town, and he or she plays a similar role as a protector of the people and a leader in times of war. Life in the wild places of the world is fraught with peril: rival tribes, deadly weather, and terrifying monsters. Barbarians charge headlong into that danger so that their people don't have to.",
                                "Their courage in the face of danger makes barbarians perfectly suited for adventuring. Wandering is often a way of life for their native tribes, and the rootless life of the adventurer is little hardship for a barbarian. Some barbarians miss the close-knit family structures of the tribe, but eventually find them replaced by the bonds formed among the members of their adventuring parties."
                            ]
                        },
                        {
                            "type": "entries",
                            "name": "Creating a Barbarian",
                            "entries": [
                                "When creating a barbarian character, think about where your character comes from and his or her place in the world. Talk with your DM about an appropriate origin for your barbarian. Did you come from a distant land, making you a stranger in the area of the campaign? Or is the campaign set in a rough-and-tumble frontier where barbarians are common?",
                                "What led you to take up the adventuring life? Were you lured to settled lands by the promise of riches? Did you join forces with soldiers of those lands to face a shared threat? Did monsters or an invading horde drive you out of your homeland, making you a rootless refugee? Perhaps you were a prisoner of war, brought in chains to \"civilized\" lands and only now able to win your freedom. Or you might have been cast out from your people because of a crime you committed, a taboo you violated, or a coup that removed you from a position of authority.",
                                {
                                    "type": "entries",
                                    "name": "Quick Build",
                                    "entries": [
                                        "You can make a barbarian quickly by following these suggestions. First, put your highest ability score in Strength, followed by Constitution. Second, choose the outlander background."
                                    ]
                                }
                            ]
                        }
                    ],
                    "source": "PHB",
                    "page": 46
                },
                {
                    "type": "section",
                    "entries": [
                        {
                            "type": "quote",
                            "entries": [
                                "I have witnessed the indomitable performance of barbarians on the field of battle, and it makes me wonder what force lies at the heart of their rage."
                            ],
                            "by": "Seret, archwizard"
                        },
                        "The anger felt by a normal person resembles the rage of a barbarian in the same way that a gentle breeze is akin to a furious thunderstorm. The barbarian's driving force comes from a place that transcends mere emotion, making its manifestation all the more terrible. Whether the impetus for the fury comes entirely from within or from forging a link with a spirit animal, a raging barbarian becomes able to perform supernatural feats of strength and endurance. The outburst is temporary, but while it lasts, it takes over body and mind, driving the barbarian on despite peril and injury, until the last enemy falls.",
                        "It can be tempting to play a barbarian character that is a straightforward application of the classic archetype—a brute, and usually a dimwitted one at that, who rushes in where others fear to tread. But not all the barbarians in the world are cut from that cloth, so you can certainly put your own spin on things. Either way, consider adding some flourishes to make your barbarian stand out from all others; see the following sections for some ideas.",
                        {
                            "type": "entries",
                            "name": "Personal Totems",
                            "entries": [
                                "Barbarians tend to travel light, carrying little in the way of personal effects or other unnecessary gear. The few possessions they do carry often include small items that have special significance. A personal totem is significant because it has a mystical origin or is tied to an important moment in the character's life—perhaps a remembrance from the barbarian's past or a harbinger of what lies ahead.",
                                "A personal totem of this sort might be associated with a barbarian's spirit animal, or might actually be the totem object for the animal, but such a connection is not essential. One who has a bear totem spirit, for instance, could still carry an eagle's feather as a personal totem.",
                                "Consider creating one or more personal totems for your character—objects that hold a special link to your character's past or future. Think about how a totem might affect your character's actions.",
                                {
                                    "type": "table",
                                    "caption": "Personal Totems",
                                    "colLabels": [
                                        "d6",
                                        "Totem"
                                    ],
                                    "colStyles": [
                                        "col-1 text-center",
                                        "col-11"
                                    ],
                                    "rows": [
                                        [
                                            {
                                                "type": "cell",
                                                "roll": {
                                                    "exact": 1
                                                }
                                            },
                                            "A tuft of fur from a solitary wolf that you befriended during a hunt"
                                        ],
                                        [
                                            {
                                                "type": "cell",
                                                "roll": {
                                                    "exact": 2
                                                }
                                            },
                                            "Three eagle feathers given to you by a wise shaman, who told you they would play a role in determining your fate"
                                        ],
                                        [
                                            {
                                                "type": "cell",
                                                "roll": {
                                                    "exact": 3
                                                }
                                            },
                                            "A necklace made from the claws of a young cave bear that you slew singlehandedly as a child"
                                        ],
                                        [
                                            {
                                                "type": "cell",
                                                "roll": {
                                                    "exact": 4
                                                }
                                            },
                                            "A small leather pouch holding three stones that represent your ancestors"
                                        ],
                                        [
                                            {
                                                "type": "cell",
                                                "roll": {
                                                    "exact": 5
                                                }
                                            },
                                            "A few small bones from the first beast you killed, tied together with colored wool"
                                        ],
                                        [
                                            {
                                                "type": "cell",
                                                "roll": {
                                                    "exact": 6
                                                }
                                            },
                                            "An egg-sized stone in the shape of your spirit animal that appeared one day in your belt pouch"
                                        ]
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "entries",
                            "name": "Tattoos",
                            "entries": [
                                "The members of many barbarian clans decorate their bodies with tattoos, each of which represents a significant moment in the life of the bearer or the bearer's ancestors, or which symbolizes a feeling or an attitude. As with personal totems, a barbarian's tattoos might or might not be related to an animal spirit.",
                                "Each tattoo a barbarian displays contributes to that individual's identity. If your character wears tattoos, what do they look like, and what do they represent?",
                                {
                                    "type": "table",
                                    "caption": "Tattoos",
                                    "colLabels": [
                                        "d6",
                                        "Tattoo"
                                    ],
                                    "colStyles": [
                                        "col-1 text-center",
                                        "col-11"
                                    ],
                                    "rows": [
                                        [
                                            {
                                                "type": "cell",
                                                "roll": {
                                                    "exact": 1
                                                }
                                            },
                                            "The wings of an eagle are spread wide across your upper back."
                                        ],
                                        [
                                            {
                                                "type": "cell",
                                                "roll": {
                                                    "exact": 2
                                                }
                                            },
                                            "Etched on the backs of your hands are the paws of a cave bear."
                                        ],
                                        [
                                            {
                                                "type": "cell",
                                                "roll": {
                                                    "exact": 3
                                                }
                                            },
                                            "The symbols of your clan are displayed in viny patterns along your arms."
                                        ],
                                        [
                                            {
                                                "type": "cell",
                                                "roll": {
                                                    "exact": 4
                                                }
                                            },
                                            "The antlers of an elk are inked across your back."
                                        ],
                                        [
                                            {
                                                "type": "cell",
                                                "roll": {
                                                    "exact": 5
                                                }
                                            },
                                            "Images of your spirit animal are tattooed along your weapon arm and hand."
                                        ],
                                        [
                                            {
                                                "type": "cell",
                                                "roll": {
                                                    "exact": 6
                                                }
                                            },
                                            "The eyes of a wolf are marked on your back to help you see and ward off evil spirits."
                                        ]
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "entries",
                            "name": "Superstitions",
                            "entries": [
                                "Barbarians vary widely in how they understand life. Some follow gods and look for guidance from those deities in the cycles of nature and the animals they encounter. These barbarians believe that spirits inhabit the plants and animals of the world, and the barbarians look to them for omens and power.",
                                "Other barbarians trust only in the blood that runs in their veins and the steel they hold in their hands. They have no use for the invisible world, instead relying on their senses to hunt and survive like the wild beasts they emulate.",
                                "Both of these attitudes can give rise to superstitions. These beliefs are often passed down within a family or shared among the members of a clan or a hunting group.",
                                "If your barbarian character has any superstitions, were they ingrained in you by your family, or are they the result of personal experience?",
                                {
                                    "type": "table",
                                    "caption": "Superstition",
                                    "colLabels": [
                                        "d6",
                                        "Superstition"
                                    ],
                                    "colStyles": [
                                        "col-1 text-center",
                                        "col-11"
                                    ],
                                    "rows": [
                                        [
                                            {
                                                "type": "cell",
                                                "roll": {
                                                    "exact": 1
                                                }
                                            },
                                            "If you disturb the bones of the dead, you inherit all the troubles that plagued them in life."
                                        ],
                                        [
                                            {
                                                "type": "cell",
                                                "roll": {
                                                    "exact": 2
                                                }
                                            },
                                            "Never trust a wizard. They're all devils in disguise, especially the friendly ones."
                                        ],
                                        [
                                            {
                                                "type": "cell",
                                                "roll": {
                                                    "exact": 3
                                                }
                                            },
                                            "Dwarves have lost their spirits, and are almost like the undead. That's why they live underground."
                                        ],
                                        [
                                            {
                                                "type": "cell",
                                                "roll": {
                                                    "exact": 4
                                                }
                                            },
                                            "Magical things bring trouble. Never sleep with a magic object within ten feet of you."
                                        ],
                                        [
                                            {
                                                "type": "cell",
                                                "roll": {
                                                    "exact": 5
                                                }
                                            },
                                            "When you walk through a graveyard, be sure to wear silver, or a ghost might jump into your body."
                                        ],
                                        [
                                            {
                                                "type": "cell",
                                                "roll": {
                                                    "exact": 6
                                                }
                                            },
                                            "If an elf looks you in the eyes, she's trying to read your thoughts."
                                        ]
                                    ]
                                }
                            ]
                        }
                    ],
                    "source": "XGE",
                    "page": 8
                }
            ]
        }
    ],
    "classFeature": [
        {
            "name": "Rage",
            "source": "PHB",
            "page": 46,
            "srd": true,
            "className": "Barbarian",
            "classSource": "PHB",
            "level": 1,
            "entries": [
                "In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.",
                "While raging, you gain the following benefits if you aren't wearing heavy armor:",
                {
                    "type": "list",
                    "items": [
                        "You have advantage on Strength checks and Strength saving throws.",
                        "When you make a melee weapon attack using Strength, you gain a +2 bonus to the damage roll. This bonus increases as you level.",
                        "You have resistance to bludgeoning, piercing, and slashing damage."
                    ]
                },
                "If you are able to cast spells, you can't cast them or concentrate on them while raging.",
                "Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action.",
                "Once you have raged the maximum number of times for your barbarian level, you must finish a long rest before you can rage again. You may rage 2 times at 1st level, 3 at 3rd, 4 at 6th, 5 at 12th, and 6 at 17th."
            ]
        },
        {
            "name": "Unarmored Defense",
            "source": "PHB",
            "page": 46,
            "srd": true,
            "className": "Barbarian",
            "classSource": "PHB",
            "level": 1,
            "entries": [
                "While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit."
            ]
        },
        {
            "name": "Danger Sense",
            "source": "PHB",
            "page": 46,
            "srd": true,
            "className": "Barbarian",
            "classSource": "PHB",
            "level": 2,
            "entries": [
                "At 2nd level, you gain an uncanny sense of when things nearby aren't as they should be, giving you an edge when you dodge away from danger. You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can't be blinded, deafened, or incapacitated."
            ]
        },
        {
            "name": "Reckless Attack",
            "source": "PHB",
            "page": 46,
            "srd": true,
            "className": "Barbarian",
            "classSource": "PHB",
            "level": 2,
            "entries": [
                "Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn."
            ]
        },
        {
            "name": "Primal Knowledge",
            "source": "TCE",
            "page": 24,
            "className": "Barbarian",
            "classSource": "PHB",
            "level": 3,
            "isClassFeatureVariant": true,
            "entries": [
                "3rd-level barbarian optional class features",
                "When you reach 3rd level and again at 10th level, you gain proficiency in one skill of your choice from the list of skills available to barbarians at 1st level."
            ]
        },
        {
            "name": "Primal Path",
            "source": "PHB",
            "page": 46,
            "srd": true,
            "className": "Barbarian",
            "classSource": "PHB",
            "level": 3,
            "entries": [
                "At 3rd level, you choose a path that shapes the nature of your rage from the list of available paths. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels."
            ]
        },
        {
            "name": "Ability Score Improvement",
            "source": "PHB",
            "page": 46,
            "srd": true,
            "className": "Barbarian",
            "classSource": "PHB",
            "level": 4,
            "entries": [
                "When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                "If your DM allows the use of feats, you may instead take a feat."
            ]
        },
        {
            "name": "Extra Attack",
            "source": "PHB",
            "page": 46,
            "srd": true,
            "className": "Barbarian",
            "classSource": "PHB",
            "level": 5,
            "entries": [
                "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
            ]
        },
        {
            "name": "Fast Movement",
            "source": "PHB",
            "page": 46,
            "srd": true,
            "className": "Barbarian",
            "classSource": "PHB",
            "level": 5,
            "entries": [
                "Starting at 5th level, your speed increases by 10 feet while you aren't wearing heavy armor."
            ]
        },
        {
            "name": "Path Feature",
            "source": "PHB",
            "page": 46,
            "srd": true,
            "className": "Barbarian",
            "classSource": "PHB",
            "level": 6,
            "entries": [
                "At 6th level, you gain a feature from your Primal Path."
            ]
        },
        {
            "name": "Feral Instinct",
            "source": "PHB",
            "page": 46,
            "srd": true,
            "className": "Barbarian",
            "classSource": "PHB",
            "level": 7,
            "entries": [
                "By 7th level, your instincts are so honed that you have advantage on initiative rolls.",
                "Additionally, if you are surprised at the beginning of combat and aren't incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn."
            ]
        },
        {
            "name": "Instinctive Pounce",
            "source": "TCE",
            "page": 24,
            "className": "Barbarian",
            "classSource": "PHB",
            "level": 7,
            "isClassFeatureVariant": true,
            "entries": [
                "7th-level barbarian optional class features",
                "As part of the bonus action you take to enter your rage, you can move up to half your speed."
            ]
        },
        {
            "name": "Ability Score Improvement",
            "source": "PHB",
            "page": 46,
            "srd": true,
            "className": "Barbarian",
            "classSource": "PHB",
            "level": 8,
            "entries": [
                "When you reach 8th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                "If your DM uses the optional Feats, you can instead take a feat."
            ]
        },
        {
            "name": "Brutal Critical (1 die)",
            "source": "PHB",
            "page": 46,
            "srd": true,
            "className": "Barbarian",
            "classSource": "PHB",
            "level": 9,
            "entries": [
                "Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack.",
                "This increases to two additional dice at 13th level and three additional dice at 17th level."
            ]
        },
        {
            "name": "Path feature",
            "source": "PHB",
            "page": 46,
            "srd": true,
            "className": "Barbarian",
            "classSource": "PHB",
            "level": 10,
            "entries": [
                "At 10th level, you gain a feature from your Primal Path."
            ]
        },
        {
            "name": "Relentless Rage",
            "source": "PHB",
            "page": 46,
            "srd": true,
            "className": "Barbarian",
            "classSource": "PHB",
            "level": 11,
            "entries": [
                "Starting at 11th level, your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you're raging and don't die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead.",
                "Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10."
            ]
        },
        {
            "name": "Ability Score Improvement",
            "source": "PHB",
            "page": 46,
            "srd": true,
            "className": "Barbarian",
            "classSource": "PHB",
            "level": 12,
            "entries": [
                "When you reach 12th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                "If your DM uses the optional Feats, you can instead take a feat."
            ]
        },
        {
            "name": "Brutal Critical (2 dice)",
            "source": "PHB",
            "page": 46,
            "srd": true,
            "className": "Barbarian",
            "classSource": "PHB",
            "level": 13,
            "entries": [
                "At 13th level, you can roll two additional weapon damage dice when determining the extra damage for a critical hit with a melee attack.",
                "This increases to three additional dice at 17th level."
            ]
        },
        {
            "name": "Path feature",
            "source": "PHB",
            "page": 46,
            "srd": true,
            "className": "Barbarian",
            "classSource": "PHB",
            "level": 14,
            "entries": [
                "At 14th level, you gain a feature from your Primal Path."
            ]
        },
        {
            "name": "Persistent Rage",
            "source": "PHB",
            "page": 46,
            "srd": true,
            "className": "Barbarian",
            "classSource": "PHB",
            "level": 15,
            "entries": [
                "Beginning at 15th level, your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it."
            ]
        },
        {
            "name": "Ability Score Improvement",
            "source": "PHB",
            "page": 46,
            "srd": true,
            "className": "Barbarian",
            "classSource": "PHB",
            "level": 16,
            "entries": [
                "When you reach 16th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                "If your DM uses the optional Feats, you can instead take a feat."
            ]
        },
        {
            "name": "Brutal Critical (3 dice)",
            "source": "PHB",
            "page": 46,
            "srd": true,
            "className": "Barbarian",
            "classSource": "PHB",
            "level": 17,
            "entries": [
                "At 17th level, you can roll three additional weapon damage dice when determining the extra damage for a critical hit with a melee attack."
            ]
        },
        {
            "name": "Indomitable Might",
            "source": "PHB",
            "page": 46,
            "srd": true,
            "className": "Barbarian",
            "classSource": "PHB",
            "level": 18,
            "entries": [
                "Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total."
            ]
        },
        {
            "name": "Ability Score Improvement",
            "source": "PHB",
            "page": 46,
            "srd": true,
            "className": "Barbarian",
            "classSource": "PHB",
            "level": 19,
            "entries": [
                "When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
                "If your DM uses the optional Feats, you can instead take a feat."
            ]
        },
        {
            "name": "Primal Champion",
            "source": "PHB",
            "page": 46,
            "srd": true,
            "className": "Barbarian",
            "classSource": "PHB",
            "level": 20,
            "entries": [
                "At 20th level, you embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24."
            ]
        }
    ],
    "subclassFeature": [
        {
            "name": "Path of the Berserker",
            "source": "PHB",
            "page": 49,
            "srd": true,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Berserker",
            "subclassSource": "PHB",
            "level": 3,
            "entries": [
                "For some barbarians, rage is a means to an end—that end being violence. The Path of the Berserker is a path of untrammeled fury, slick with blood. As you enter the berserker's rage, you thrill in the chaos of battle, heedless of your own health or well-being.",
                {
                    "type": "refSubclassFeature",
                    "subclassFeature": "Frenzy|Barbarian||Berserker||3"
                }
            ]
        },
        {
            "name": "Frenzy",
            "source": "PHB",
            "page": 49,
            "srd": true,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Berserker",
            "subclassSource": "PHB",
            "level": 3,
            "header": 1,
            "entries": [
                "Starting when you choose this path at 3rd level, you can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion."
            ]
        },
        {
            "name": "Mindless Rage",
            "source": "PHB",
            "page": 49,
            "srd": true,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Berserker",
            "subclassSource": "PHB",
            "level": 6,
            "header": 2,
            "entries": [
                "Beginning at 6th level, you can't be charmed or frightened while raging. If you are charmed or frightened when you enter your rage, the effect is suspended for the duration of the rage."
            ]
        },
        {
            "name": "Intimidating Presence",
            "source": "PHB",
            "page": 49,
            "srd": true,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Berserker",
            "subclassSource": "PHB",
            "level": 10,
            "header": 2,
            "entries": [
                "Beginning at 10th level, you can use your action to frighten someone with your menacing presence. When you do so, choose one creature that you can see within 30 feet of you. If the creature can see or hear you, it must succeed on a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Charisma modifier) or be frightened of you until the end of your next turn. On subsequent turns, you can use your action to extend the duration of this effect on the frightened creature until the end of your next turn. This effect ends if the creature ends its turn out of line of sight or more than 60 feet away from you.",
                "If the creature succeeds on its saving throw, you can't use this feature on that creature again for 24 hours."
            ]
        },
        {
            "name": "Retaliation",
            "source": "PHB",
            "page": 49,
            "srd": true,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Berserker",
            "subclassSource": "PHB",
            "level": 14,
            "header": 2,
            "entries": [
                "Starting at 14th level, when you take damage from a creature that is within 5 feet of you, you can use your reaction to make a melee weapon attack against that creature."
            ]
        },
        {
            "name": "Bear",
            "source": "PHB",
            "page": 50,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Totem Warrior",
            "subclassSource": "PHB",
            "level": 3,
            "entries": [
                "While raging, you have resistance to all damage except psychic damage. The spirit of the bear makes you tough enough to stand up to any punishment."
            ]
        },
        {
            "name": "Eagle",
            "source": "PHB",
            "page": 50,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Totem Warrior",
            "subclassSource": "PHB",
            "level": 3,
            "entries": [
                "While you're raging and aren't wearing heavy armor, other creatures have disadvantage on opportunity attack rolls against you, and you can use the Dash action as a bonus action on your turn. The spirit of the eagle makes you into a predator who can weave through the fray with ease."
            ]
        },
        {
            "name": "Path of the Totem Warrior",
            "source": "PHB",
            "page": 50,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Totem Warrior",
            "subclassSource": "PHB",
            "level": 3,
            "entries": [
                "The Path of the Totem Warrior is a spiritual journey, as the barbarian accepts a spirit animal as guide, protector, and inspiration. In battle, your totem spirit fills you with supernatural might, adding magical fuel to your barbarian rage.",
                "Most barbarian tribes consider a totem animal to be kin to a particular clan. In such cases, it is unusual for an individual to have more than one totem animal spirit, though exceptions exist.",
                {
                    "type": "refSubclassFeature",
                    "subclassFeature": "Spirit Seeker|Barbarian||Totem Warrior||3"
                },
                {
                    "type": "refSubclassFeature",
                    "subclassFeature": "Totem Spirit|Barbarian||Totem Warrior||3"
                }
            ]
        },
        {
            "name": "Wolf",
            "source": "PHB",
            "page": 50,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Totem Warrior",
            "subclassSource": "PHB",
            "level": 3,
            "entries": [
                "While you're raging, your friends have advantage on melee attack rolls against any creature within 5 feet of you that is hostile to you. The spirit of the wolf makes you a leader of hunters."
            ]
        },
        {
            "name": "Spirit Seeker",
            "source": "PHB",
            "page": 50,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Totem Warrior",
            "subclassSource": "PHB",
            "level": 3,
            "header": 1,
            "entries": [
                "Yours is a path that seeks attunement with the natural world, giving you a kinship with beasts. At 3rd level when you adopt this path, you gain the ability to cast the beast sense and speak with animals spells, but only as rituals, as described in chapter 10."
            ]
        },
        {
            "name": "Totem Spirit",
            "source": "PHB",
            "page": 50,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Totem Warrior",
            "subclassSource": "PHB",
            "level": 3,
            "header": 1,
            "entries": [
                "At 3rd level, when you adopt this path, you choose a totem spirit and gain its feature. You must make or acquire a physical totem object—an amulet or similar adornment—that incorporates fur or feathers, claws, teeth, or bones of the totem animal. At your option, you also gain minor physical attributes that are reminiscent of your totem spirit. For example, if you have a bear totem spirit, you might be unusually hairy and thick-skinned, or if your totem is the eagle, your eyes turn bright yellow.",
                "Your totem animal might be an animal related to those listed here but more appropriate to your homeland. For example, you could choose a hawk or vulture in place of an eagle.",
                {
                    "type": "options",
                    "count": 1,
                    "entries": [
                        {
                            "type": "refSubclassFeature",
                            "subclassFeature": "Bear|Barbarian||Totem Warrior||3"
                        },
                        {
                            "type": "refSubclassFeature",
                            "subclassFeature": "Eagle|Barbarian||Totem Warrior||3"
                        },
                        {
                            "type": "refSubclassFeature",
                            "subclassFeature": "Elk|Barbarian|SCAG|Totem Warrior||3|SCAG"
                        },
                        {
                            "type": "refSubclassFeature",
                            "subclassFeature": "Tiger|Barbarian|SCAG|Totem Warrior||3|SCAG"
                        },
                        {
                            "type": "refSubclassFeature",
                            "subclassFeature": "Wolf|Barbarian||Totem Warrior||3"
                        }
                    ]
                }
            ]
        },
        {
            "name": "Bear",
            "source": "PHB",
            "page": 50,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Totem Warrior",
            "subclassSource": "PHB",
            "level": 6,
            "entries": [
                "You gain the might of a bear. Your carrying capacity (including maximum load and maximum lift) is doubled, and you have advantage on Strength checks made to push, pull, lift, or break objects."
            ]
        },
        {
            "name": "Eagle",
            "source": "PHB",
            "page": 50,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Totem Warrior",
            "subclassSource": "PHB",
            "level": 6,
            "entries": [
                "You gain the eyesight of an eagle. You can see up to 1 mile away with no difficulty, able to discern even fine details as though looking at something no more than 100 feet away from you. Additionally, dim light doesn't impose disadvantage on your Wisdom (Perception) checks."
            ]
        },
        {
            "name": "Wolf",
            "source": "PHB",
            "page": 50,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Totem Warrior",
            "subclassSource": "PHB",
            "level": 6,
            "entries": [
                "You gain the hunting sensibilities of a wolf. You can track other creatures while traveling at a fast pace, and you can move stealthily while traveling at a normal pace."
            ]
        },
        {
            "name": "Aspect of the Beast",
            "source": "PHB",
            "page": 50,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Totem Warrior",
            "subclassSource": "PHB",
            "level": 6,
            "header": 2,
            "entries": [
                "At 6th level, you gain a magical benefit based on the totem animal of your choice. You can choose the same animal you selected at 3rd level or a different one.",
                {
                    "type": "options",
                    "count": 1,
                    "entries": [
                        {
                            "type": "refSubclassFeature",
                            "subclassFeature": "Bear|Barbarian||Totem Warrior||6"
                        },
                        {
                            "type": "refSubclassFeature",
                            "subclassFeature": "Eagle|Barbarian||Totem Warrior||6"
                        },
                        {
                            "type": "refSubclassFeature",
                            "subclassFeature": "Elk|Barbarian|SCAG|Totem Warrior||6|SCAG"
                        },
                        {
                            "type": "refSubclassFeature",
                            "subclassFeature": "Tiger|Barbarian|SCAG|Totem Warrior||6|SCAG"
                        },
                        {
                            "type": "refSubclassFeature",
                            "subclassFeature": "Wolf|Barbarian||Totem Warrior||6"
                        }
                    ]
                }
            ]
        },
        {
            "name": "Spirit Walker",
            "source": "PHB",
            "page": 50,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Totem Warrior",
            "subclassSource": "PHB",
            "level": 10,
            "header": 2,
            "entries": [
                "At 10th level, you can cast the commune with nature spell, but only as a ritual. When you do so, a spiritual version of one of the animals you chose for Totem Spirit or Aspect of the Beast appears to you to convey the information you seek."
            ]
        },
        {
            "name": "Bear",
            "source": "PHB",
            "page": 50,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Totem Warrior",
            "subclassSource": "PHB",
            "level": 14,
            "entries": [
                "While you're raging, any creature within 5 feet of you that's hostile to you has disadvantage on attack rolls against targets other than you or another character with this feature. An enemy is immune to this effect if it can't see or hear you or if it can't be frightened."
            ]
        },
        {
            "name": "Eagle",
            "source": "PHB",
            "page": 50,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Totem Warrior",
            "subclassSource": "PHB",
            "level": 14,
            "entries": [
                "While raging, you have a flying speed equal to your current walking speed. This benefit works only in short bursts; you fall if you end your turn in the air and nothing else is holding you aloft."
            ]
        },
        {
            "name": "Wolf",
            "source": "PHB",
            "page": 50,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Totem Warrior",
            "subclassSource": "PHB",
            "level": 14,
            "entries": [
                "While you're raging, you can use a bonus action on your turn to knock a Large or smaller creature prone when you hit it with melee weapon attack."
            ]
        },
        {
            "name": "Totemic Attunement",
            "source": "PHB",
            "page": 50,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Totem Warrior",
            "subclassSource": "PHB",
            "level": 14,
            "header": 2,
            "entries": [
                "At 14th level, you gain a magical benefit based on a totem animal of your choice. You can choose the same animal you selected previously or a different one.",
                {
                    "type": "options",
                    "count": 1,
                    "entries": [
                        {
                            "type": "refSubclassFeature",
                            "subclassFeature": "Bear|Barbarian||Totem Warrior||14"
                        },
                        {
                            "type": "refSubclassFeature",
                            "subclassFeature": "Eagle|Barbarian||Totem Warrior||14"
                        },
                        {
                            "type": "refSubclassFeature",
                            "subclassFeature": "Elk|Barbarian|SCAG|Totem Warrior||14|SCAG"
                        },
                        {
                            "type": "refSubclassFeature",
                            "subclassFeature": "Tiger|Barbarian|SCAG|Totem Warrior||14|SCAG"
                        },
                        {
                            "type": "refSubclassFeature",
                            "subclassFeature": "Wolf|Barbarian||Totem Warrior||14"
                        }
                    ]
                }
            ]
        },
        {
            "name": "Path of the Battlerager",
            "source": "SCAG",
            "page": 121,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Battlerager",
            "subclassSource": "SCAG",
            "level": 3,
            "entries": [
                "Known as Kuldjargh (literally \"axe idiot\") in Dwarvish, battleragers are dwarf followers of the gods of war and take the Path of the Battlerager. They specialize in wearing bulky, spiked armor and throwing themselves into combat, striking with their body itself and giving themselves over to the fury of battle.",
                {
                    "type": "refSubclassFeature",
                    "subclassFeature": "Restriction - Dwarves Only|Barbarian||Battlerager|SCAG|3"
                },
                {
                    "type": "refSubclassFeature",
                    "subclassFeature": "Battlerager Armor|Barbarian||Battlerager|SCAG|3"
                }
            ]
        },
        {
            "name": "Battlerager Armor",
            "source": "SCAG",
            "page": 121,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Battlerager",
            "subclassSource": "SCAG",
            "level": 3,
            "header": 1,
            "entries": [
                "When you choose this path at 3rd level, you gain the ability to use spiked armor as a weapon.",
                "While you are wearing spiked armor and are raging, you can use a bonus action to make one melee weapon attack with your armor spikes at a target within 5 feet of you. If the attack hits, the spikes deal 1d4 piercing damage. You use your Strength modifier for the attack and damage rolls.",
                "Additionally, when you use the Attack action to grapple a creature, the target takes 3 piercing damage if your grapple check succeeds."
            ]
        },
        {
            "name": "Restriction - Dwarves Only",
            "source": "SCAG",
            "page": 121,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Battlerager",
            "subclassSource": "SCAG",
            "level": 3,
            "header": 1,
            "entries": [
                "Only dwarves can follow the Path of the Battlerager. The battlerager fills a particular niche in dwarven society and culture.",
                "Your DM can lift this restriction to better suit the campaign. The restriction exists for the Forgotten Realms. It might not apply to your DM's setting or your DM's version of the Realms."
            ]
        },
        {
            "name": "Reckless Abandon",
            "source": "SCAG",
            "page": 121,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Battlerager",
            "subclassSource": "SCAG",
            "level": 6,
            "header": 2,
            "entries": [
                "Beginning at 6th level, when you use Reckless Attack while raging, you also gain temporary hit points equal to your Constitution modifier (minimum of 1). They vanish if any of them are left when your rage ends."
            ]
        },
        {
            "name": "Battlerager Charge",
            "source": "SCAG",
            "page": 121,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Battlerager",
            "subclassSource": "SCAG",
            "level": 10,
            "header": 2,
            "entries": [
                "Beginning at 10th level, you can take the Dash action as a bonus action while you are raging."
            ]
        },
        {
            "name": "Spiked Retribution",
            "source": "SCAG",
            "page": 121,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Battlerager",
            "subclassSource": "SCAG",
            "level": 14,
            "header": 2,
            "entries": [
                "Starting at 14th level, when a creature within 5 feet of you hits you with a melee attack, the attacker takes 3 piercing damage if you are raging, aren't incapacitated, and are wearing spiked armor."
            ]
        },
        {
            "name": "Path of the Beast",
            "source": "TCE",
            "page": 24,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Beast",
            "subclassSource": "TCE",
            "level": 3,
            "entries": [
                "Barbarians who walk the Path of the Beast draw their rage from a bestial spark burning within their souls. That beast bursts forth in the throes of rage, physically transforming the barbarian.",
                "Such a barbarian might be inhabited by a primal spirit or be descended from shape-shifters. You can choose the origin of your feral might or determine it by rolling on the Origin of the Beast table.",
                {
                    "type": "table",
                    "caption": "Origin of the Beast",
                    "colLabels": [
                        "d4",
                        "Origin"
                    ],
                    "colStyles": [
                        "col-2 text-center",
                        "col-10"
                    ],
                    "rows": [
                        [
                            "1",
                            "One of your parents is a lycanthrope, and you've inherited some of their curse."
                        ],
                        [
                            "2",
                            "You are descended from an archdruid and inherited the ability to partially change shape."
                        ],
                        [
                            "3",
                            "A fey spirit gifted you with the ability to adopt different bestial aspects."
                        ],
                        [
                            "4",
                            "An ancient animal spirit dwells within you, allowing you to walk this path."
                        ]
                    ]
                },
                {
                    "type": "refSubclassFeature",
                    "subclassFeature": "Form of the Beast|Barbarian||Beast|TCE|3"
                }
            ]
        },
        {
            "name": "Form of the Beast",
            "source": "TCE",
            "page": 24,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Beast",
            "subclassSource": "TCE",
            "level": 3,
            "header": 1,
            "entries": [
                "3rd-level Path of the Beast feature",
                "When you enter your rage, you can transform, revealing the bestial power within you. Until the rage ends, you manifest a natural weapon. It counts as a simple melee weapon for you, and you add your Strength modifier to the attack and damage rolls when you attack with it, as normal.",
                "You choose the weapon's form each time you rage:",
                {
                    "type": "list",
                    "style": "list-hang-notitle",
                    "items": [
                        {
                            "type": "item",
                            "name": "Bite.",
                            "entry": "Your mouth transforms into a bestial muzzle or great mandibles (your choice). It deals 1d8 piercing damage on a hit. Once on each of your turns when you damage a creature with this bite, you regain a number of hit points equal to your proficiency bonus, provided you have less than half your hit points when you hit."
                        },
                        {
                            "type": "item",
                            "name": "Claws.",
                            "entry": "Each of your hands transforms into a claw, which you can use as a weapon if it's empty. It deals 1d6 slashing damage on a hit. Once on each of your turns when you attack with a claw using the Attack action, you can make one additional claw attack as part of the same action."
                        },
                        {
                            "type": "item",
                            "name": "Tail.",
                            "entry": "You grow a lashing, spiny tail, which deals 1d8 piercing damage on a hit and has the reach property. If a creature you can see within 10 feet of you hits you with an attack roll, you can use your reaction to swipe your tail and roll a d8, applying a bonus to your AC equal to the number rolled, potentially causing the attack to miss you."
                        }
                    ]
                }
            ]
        },
        {
            "name": "Bestial Soul",
            "source": "TCE",
            "page": 24,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Beast",
            "subclassSource": "TCE",
            "level": 6,
            "header": 2,
            "entries": [
                "6th-level Path of the Beast feature",
                "The feral power within you increases, causing the natural weapons of your Form of the Beast to count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.",
                "You can also alter your form to help you adapt to your surroundings. When you finish a short or long rest, choose one of the following benefits, which lasts until you finish your next short or long rest:",
                {
                    "type": "list",
                    "items": [
                        "You gain a swimming speed equal to your walking speed, and you can breathe underwater.",
                        "You gain a climbing speed equal to your walking speed, and you can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
                        "When you jump, you can make a Strength (Athletics) check and extend your jump by a number of feet equal to the check's total. You can make this special check only once per turn."
                    ]
                }
            ]
        },
        {
            "name": "Infectious Fury",
            "source": "TCE",
            "page": 24,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Beast",
            "subclassSource": "TCE",
            "level": 10,
            "header": 2,
            "entries": [
                "10th-level Path of the Beast feature",
                "When you hit a creature with your natural weapons while you are raging, the beast within you can curse your target with rabid fury. The target must succeed on a Wisdom saving throw (DC equal to 8 + your Constitution modifier + your proficiency bonus) or suffer one of the following effects (your choice):",
                {
                    "type": "list",
                    "items": [
                        "The target must use its reaction to make a melee attack against another creature of your choice that you can see.",
                        "The target takes 2d12 psychic damage."
                    ]
                },
                "You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
            ]
        },
        {
            "name": "Call the Hunt",
            "source": "TCE",
            "page": 24,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Beast",
            "subclassSource": "TCE",
            "level": 14,
            "header": 2,
            "entries": [
                "14th-level Path of the Beast feature",
                "The beast within you grows so powerful that you can spread its ferocity to others and gain resilience from them joining your hunt. When you enter your rage, you can choose a number of other willing creatures you can see within 30 feet of you equal to your Constitution modifier (minimum of one creature).",
                "You gain 5 temporary hit points for each creature that accepts this feature. Until the rage ends, the chosen creatures can each use the following benefit once on each of their turns: when the creature hits a target with an attack roll and deals damage to it, the creature can roll a d6 and gain a bonus to the damage equal to the number rolled.",
                "You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
            ]
        },
        {
            "name": "Path of Wild Magic",
            "source": "TCE",
            "page": 25,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Wild Magic",
            "subclassSource": "TCE",
            "level": 3,
            "entries": [
                "Many places in the multiverse abound with beauty, intense emotion, and rampant magic; the Feywild, the Upper Planes, and other realms of supernatural power radiate with such forces and can profoundly influence people. As folk of deep feeling, barbarians are especially susceptible to these wild influences, with some barbarians being transformed by the magic. These magic-suffused barbarians walk the Path of Wild Magic. Elf, tiefling, aasimar, and genasi barbarians often seek this path, eager to manifest the otherworldly magic of their ancestors.",
                {
                    "type": "refSubclassFeature",
                    "subclassFeature": "Magic Awareness|Barbarian||Wild Magic|TCE|3"
                },
                {
                    "type": "refSubclassFeature",
                    "subclassFeature": "Wild Surge|Barbarian||Wild Magic|TCE|3"
                }
            ]
        },
        {
            "name": "Magic Awareness",
            "source": "TCE",
            "page": 25,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Wild Magic",
            "subclassSource": "TCE",
            "level": 3,
            "header": 1,
            "entries": [
                "3rd-level Path of Wild Magic feature",
                "As an action, you can open your awareness to the presence of concentrated magic. Until the end of your next turn, you know the location of any spell or magic item within 60 feet of you that isn't behind total cover. When you sense a spell, you learn which school of magic it belongs to.",
                "You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
            ]
        },
        {
            "name": "Wild Surge",
            "source": "TCE",
            "page": 25,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Wild Magic",
            "subclassSource": "TCE",
            "level": 3,
            "header": 1,
            "entries": [
                "3rd-level Path of Wild Magic feature",
                "The magical energy roiling inside you sometimes erupts from you. When you enter your rage, roll on the Wild Magic table to determine the magical effect produced.",
                "If the effect requires a saving throw, the DC equals 8 + your proficiency bonus + your Constitution modifier.",
                {
                    "type": "table",
                    "caption": "Wild Magic",
                    "colLabels": [
                        "d8",
                        "Magical Effect"
                    ],
                    "colStyles": [
                        "col-2 text-center",
                        "col-10"
                    ],
                    "rows": [
                        [
                            "1",
                            "Shadowy tendrils lash around you. Each creature of your choice that you can see within 30 feet of you must succeed on a Constitution saving throw or take 1d12 necrotic damage. You also gain 1d12 temporary hit points."
                        ],
                        [
                            "2",
                            "You teleport up to 30 feet to an unoccupied space you can see. Until your rage ends, you can use this effect again on each of your turns as a bonus action."
                        ],
                        [
                            "3",
                            "An intangible spirit, which looks like a flumph or a pixie (your choice), appears within 5 feet of one creature of your choice that you can see within 30 feet of you. At the end of the current turn, the spirit explodes, and each creature within 5 feet of it must succeed on a Dexterity saving throw or take 1d6 force damage. Until your rage ends, you can use this effect again, summoning another spirit, on each of your turns as a bonus action."
                        ],
                        [
                            "4",
                            "Magic infuses one weapon of your choice that you are holding. Until your rage ends, the weapon's damage type changes to force, and it gains the light and thrown properties, with a normal range of 20 feet and a long range of 60 feet. If the weapon leaves your hand, the weapon reappears in your hand at the end of the current turn."
                        ],
                        [
                            "5",
                            "Whenever a creature hits you with an attack roll before your rage ends, that creature takes 1d6 force damage, as magic lashes out in retribution."
                        ],
                        [
                            "6",
                            "Until your rage ends, you are surrounded by multi colored, protective lights. You gain a +1 bonus to AC, and while within 10 feet of you, your allies gain the same bonus."
                        ],
                        [
                            "7",
                            "Flowers and vines temporarily grow around you. Until your rage ends, the ground within 15 feet of you is difficult terrain for your enemies."
                        ],
                        [
                            "8",
                            "A bolt of light shoots from your chest. Another creature of your choice that you can see within 30 feet of you must succeed on a Constitution saving throw or take 1d6 radiant damage and be blinded until the start of your next turn. Until your rage ends, you can use this effect again on each of your turns as a bonus action."
                        ]
                    ],
                    "data": {
                        "tableInclude": true
                    }
                }
            ]
        },
        {
            "name": "Bolstering Magic",
            "source": "TCE",
            "page": 25,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Wild Magic",
            "subclassSource": "TCE",
            "level": 6,
            "header": 2,
            "entries": [
                "6th-level Path of Wild Magic feature",
                "You can harness your wild magic to bolster yourself or a companion. As an action, you can touch one creature (which can be yourself) and confer one of the following benefits of your choice to that creature:",
                {
                    "type": "list",
                    "items": [
                        "For 10 minutes, the creature can roll a d3 whenever making an attack roll or an ability check and add the number rolled to the d20 roll.",
                        "Roll a d3. The creature regains one expended spell slot, the level of which equals the number rolled or lower (the creature's choice). Once a creature receives this benefit, that creature can't receive it again until after a long rest."
                    ]
                },
                "You can take this action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
            ]
        },
        {
            "name": "Unstable Backlash",
            "source": "TCE",
            "page": 25,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Wild Magic",
            "subclassSource": "TCE",
            "level": 10,
            "header": 2,
            "entries": [
                "10th-level Path of Wild Magic feature",
                "When you are imperiled during your rage, the magic within you can lash out; immediately after you take damage or fail a saving throw while raging, you can use your reaction to roll on the Wild Magic table and immediately produce the effect rolled. This effect replaces your current Wild Magic effect."
            ]
        },
        {
            "name": "Controlled Surge",
            "source": "TCE",
            "page": 25,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Wild Magic",
            "subclassSource": "TCE",
            "level": 14,
            "header": 2,
            "entries": [
                "14th-level Path of Wild Magic feature",
                "Whenever you roll on the Wild Magic table, you can roll the die twice and choose which of the two effects to unleash. If you roll the same number on both dice, you can ignore the number and choose any effect on the table."
            ]
        },
        {
            "name": "Path of the Ancestral Guardian",
            "source": "XGE",
            "page": 9,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Ancestral Guardian",
            "subclassSource": "XGE",
            "level": 3,
            "entries": [
                "Some barbarians hail from cultures that revere their ancestors. These tribes teach that the warriors of the past linger in the world as mighty spirits, who can guide and protect the living. When a barbarian who follows this path rages, the barbarian contacts the spirit world and calls on these guardian spirits for aid.",
                "Barbarians who draw on their ancestral guardians can better fight to protect their tribes and their allies. In order to cement ties to their ancestral guardians, barbarians who follow this path cover themselves in elaborate tattoos that celebrate their ancestors' deeds. These tattoos tell sagas of victories against terrible monsters and other fearsome rivals.",
                {
                    "type": "refSubclassFeature",
                    "subclassFeature": "Ancestral Protectors|Barbarian||Ancestral Guardian|XGE|3"
                }
            ]
        },
        {
            "name": "Ancestral Protectors",
            "source": "XGE",
            "page": 9,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Ancestral Guardian",
            "subclassSource": "XGE",
            "level": 3,
            "header": 1,
            "entries": [
                "Starting when you choose this path at 3rd level, spectral warriors appear when you enter your rage. While you're raging, the first creature you hit with an attack on your turn becomes the target of the warriors, which hinder its attacks. Until the start of your next turn, that target has disadvantage on any attack roll that isn't against you, and when the target hits a creature other than you with an attack, that creature has resistance to the damage dealt by the attack. The effect on the target ends early if your rage ends."
            ]
        },
        {
            "name": "Spirit Shield",
            "source": "XGE",
            "page": 9,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Ancestral Guardian",
            "subclassSource": "XGE",
            "level": 6,
            "header": 2,
            "entries": [
                "Beginning at 6th level, the guardian spirits that aid you can provide supernatural protection to those you defend. If you are raging and another creature you can see within 30 feet of you takes damage, you can use your reaction to reduce that damage by 2d6.",
                "When you reach certain levels in this class, you can reduce the damage by more: by 3d6} at 10th level and by 4d6 at 14th level."
            ]
        },
        {
            "name": "Consult the Spirits",
            "source": "XGE",
            "page": 9,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Ancestral Guardian",
            "subclassSource": "XGE",
            "level": 10,
            "header": 2,
            "entries": [
                "At 10th level, you gain the ability to consult with your ancestral spirits. When you do so, you cast the augury or clairvoyance spell, without using a spell slot or material components. Rather than creating a spherical sensor, this use of clairvoyance invisibly summons one of your ancestral spirits to the chosen location. Wisdom is your spellcasting ability for these spells.",
                "After you cast either spell in this way, you can't use this feature again until you finish a short or long rest."
            ]
        },
        {
            "name": "Vengeful Ancestors",
            "source": "XGE",
            "page": 9,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Ancestral Guardian",
            "subclassSource": "XGE",
            "level": 14,
            "header": 2,
            "entries": [
                "At 14th level, your ancestral spirits grow powerful enough to retaliate. When you use your Spirit Shield to reduce the damage of an attack, the attacker takes an amount of force damage equal to the damage that your Spirit Shield prevents."
            ]
        },
        {
            "name": "Path of the Storm Herald",
            "source": "XGE",
            "page": 10,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Storm Herald",
            "subclassSource": "XGE",
            "level": 3,
            "entries": [
                "All barbarians harbor a fury within. Their rage grants them superior strength, durability, and speed. Barbarians who follow the Path of the Storm Herald learn to transform that rage into a mantle of primal magic, which swirls around them. When in a fury, a barbarian of this path taps into the forces of nature to create powerful magical effects.",
                "Storm heralds are typically elite champions who train alongside druids, rangers, and others sworn to protect nature. Other storm heralds hone their craft in lodges in regions wracked by storms, in the frozen reaches at the world's end, or deep in the hottest deserts.",
                {
                    "type": "refSubclassFeature",
                    "subclassFeature": "Storm Aura|Barbarian||Storm Herald|XGE|3"
                }
            ]
        },
        {
            "name": "Storm Aura",
            "source": "XGE",
            "page": 10,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Storm Herald",
            "subclassSource": "XGE",
            "level": 3,
            "header": 1,
            "entries": [
                "Starting at 3rd level, you emanate a stormy, magical aura while you rage. The aura extends 10 feet from you in every direction, but not through total cover.",
                "Your aura has an effect that activates when you enter your rage, and you can activate the effect again on each of your turns as a bonus action. Choose desert, sea, or tundra. Your aura's effect depends on that chosen environment, as detailed below. You can change your environment choice whenever you gain a level in this class.",
                "If your aura's effects require a saving throw, the DC equals 8 + your proficiency bonus + your Constitution modifier.",
                {
                    "type": "options",
                    "entries": [
                        {
                            "type": "refSubclassFeature",
                            "subclassFeature": "Desert|Barbarian|XGE|Storm Herald|XGE|3"
                        },
                        {
                            "type": "refSubclassFeature",
                            "subclassFeature": "Sea|Barbarian|XGE|Storm Herald|XGE|3"
                        },
                        {
                            "type": "refSubclassFeature",
                            "subclassFeature": "Tundra|Barbarian|XGE|Storm Herald|XGE|3"
                        }
                    ]
                }
            ]
        },
        {
            "name": "Storm Soul",
            "source": "XGE",
            "page": 10,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Storm Herald",
            "subclassSource": "XGE",
            "level": 6,
            "header": 2,
            "entries": [
                "At 6th level, the storm grants you benefits even when your aura isn't active. The benefits are based on the environment you chose for your Storm Aura.",
                {
                    "type": "options",
                    "entries": [
                        {
                            "type": "refSubclassFeature",
                            "subclassFeature": "Desert|Barbarian|XGE|Storm Herald|XGE|6"
                        },
                        {
                            "type": "refSubclassFeature",
                            "subclassFeature": "Sea|Barbarian|XGE|Storm Herald|XGE|6"
                        },
                        {
                            "type": "refSubclassFeature",
                            "subclassFeature": "Tundra|Barbarian|XGE|Storm Herald|XGE|6"
                        }
                    ]
                }
            ]
        },
        {
            "name": "Shielding Storm",
            "source": "XGE",
            "page": 10,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Storm Herald",
            "subclassSource": "XGE",
            "level": 10,
            "header": 2,
            "entries": [
                "At 10th level, you learn to use your mastery of the storm to protect others. Each creature of your choice has the damage resistance you gained from the Storm Soul feature while the creature is in your Storm Aura."
            ]
        },
        {
            "name": "Raging Storm",
            "source": "XGE",
            "page": 10,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Storm Herald",
            "subclassSource": "XGE",
            "level": 14,
            "header": 2,
            "entries": [
                "At 14th level, the power of the storm you channel grows mightier, lashing out at your foes. The effect is based on the environment you chose for your Storm Aura.",
                {
                    "type": "options",
                    "entries": [
                        {
                            "type": "refSubclassFeature",
                            "subclassFeature": "Desert|Barbarian|XGE|Storm Herald|XGE|14"
                        },
                        {
                            "type": "refSubclassFeature",
                            "subclassFeature": "Sea|Barbarian|XGE|Storm Herald|XGE|14"
                        },
                        {
                            "type": "refSubclassFeature",
                            "subclassFeature": "Tundra|Barbarian|XGE|Storm Herald|XGE|14"
                        }
                    ]
                }
            ]
        },
        {
            "name": "Path of the Zealot",
            "source": "XGE",
            "page": 11,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Zealot",
            "subclassSource": "XGE",
            "level": 3,
            "entries": [
                "Some deities inspire their followers to pitch themselves into a ferocious battle fury. These barbarians are zealots—warriors who channel their rage into powerful displays of divine power.",
                "A variety of gods across the worlds of D&D inspire their followers to embrace this path. Tempus from the Forgotten Realms and Hextor and Erythnul of Greyhawk are all prime examples. In general, the gods who inspire zealots are deities of combat, destruction, and violence. Not all are evil, but few are good.",
                {
                    "type": "refSubclassFeature",
                    "subclassFeature": "Divine Fury|Barbarian||Zealot|XGE|3"
                },
                {
                    "type": "refSubclassFeature",
                    "subclassFeature": "Warrior of the Gods|Barbarian||Zealot|XGE|3"
                }
            ]
        },
        {
            "name": "Divine Fury",
            "source": "XGE",
            "page": 11,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Zealot",
            "subclassSource": "XGE",
            "level": 3,
            "header": 1,
            "entries": [
                "Starting when you choose this path at 3rd level, you can channel divine fury into your weapon strikes. While you're raging, the first creature you hit on each of your turns with a weapon attack takes extra damage equal to 1d6 + half your barbarian level. The extra damage is necrotic or radiant; you choose the type of damage when you gain this feature."
            ]
        },
        {
            "name": "Warrior of the Gods",
            "source": "XGE",
            "page": 11,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Zealot",
            "subclassSource": "XGE",
            "level": 3,
            "header": 1,
            "entries": [
                "At 3rd level, your soul is marked for endless battle. If a spell, such as raise dead, has the sole effect of restoring you to life (but not undeath), the caster doesn't need material components to cast the spell on you."
            ]
        },
        {
            "name": "Fanatical Focus",
            "source": "XGE",
            "page": 11,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Zealot",
            "subclassSource": "XGE",
            "level": 6,
            "header": 2,
            "entries": [
                "Starting at 6th level, the divine power that fuels your rage can protect you. If you fail a saving throw while you're raging, you can reroll it, and you must use the new roll. You can use this ability only once per rage."
            ]
        },
        {
            "name": "Zealous Presence",
            "source": "XGE",
            "page": 11,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Zealot",
            "subclassSource": "XGE",
            "level": 10,
            "header": 2,
            "entries": [
                "At 10th level, you learn to channel divine power to inspire zealotry in others. As a bonus action, you unleash a battle cry infused with divine energy. Up to ten other creatures of your choice within 60 feet of you that can hear you gain advantage on attack rolls and saving throws until the start of your next turn.",
                "Once you use this feature, you can't use it again until you finish a long rest."
            ]
        },
        {
            "name": "Rage beyond Death",
            "source": "XGE",
            "page": 11,
            "className": "Barbarian",
            "classSource": "PHB",
            "subclassShortName": "Zealot",
            "subclassSource": "XGE",
            "level": 14,
            "header": 2,
            "entries": [
                "Beginning at 14th level, the divine power that fuels your rage allows you to shrug off fatal blows.",
                "While you're raging, having 0 hit points doesn't knock you unconscious. You still must make death saving throws, and you suffer the normal effects of taking damage while at 0 hit points. However, if you would die due to failing death saving throws, you don't die until your rage ends, and you die then only if you still have 0 hit points."
            ]
        },
        {
            "name": "Elk",
            "source": "SCAG",
            "page": 122,
            "className": "Barbarian",
            "classSource": "SCAG",
            "subclassShortName": "Totem Warrior",
            "subclassSource": "PHB",
            "level": 3,
            "entries": [
                "While you're raging and aren't wearing heavy armor, your walking speed increases by 15 feet. The spirit of the elk makes you extraordinarily swift."
            ]
        },
        {
            "name": "Tiger",
            "source": "SCAG",
            "page": 122,
            "className": "Barbarian",
            "classSource": "SCAG",
            "subclassShortName": "Totem Warrior",
            "subclassSource": "PHB",
            "level": 3,
            "entries": [
                "While raging, you can add 10 feet to your long jump distance and 3 feet to your high jump distance. The spirit of the tiger empowers your leaps."
            ]
        },
        {
            "name": "Elk",
            "source": "SCAG",
            "page": 122,
            "className": "Barbarian",
            "classSource": "SCAG",
            "subclassShortName": "Totem Warrior",
            "subclassSource": "PHB",
            "level": 6,
            "entries": [
                "Whether mounted or on foot, your travel pace is doubled, as is the travel pace of up to ten companions while they're within 60 feet of you and you're not incapacitated. The elk spirit helps you roam far and fast."
            ]
        },
        {
            "name": "Tiger",
            "source": "SCAG",
            "page": 122,
            "className": "Barbarian",
            "classSource": "SCAG",
            "subclassShortName": "Totem Warrior",
            "subclassSource": "PHB",
            "level": 6,
            "entries": [
                "You gain proficiency in two skills from the following list: Athletics, Acrobatics, Stealth, and Survival. The cat spirit hones your survival instincts."
            ]
        },
        {
            "name": "Elk",
            "source": "SCAG",
            "page": 122,
            "className": "Barbarian",
            "classSource": "SCAG",
            "subclassShortName": "Totem Warrior",
            "subclassSource": "PHB",
            "level": 14,
            "entries": [
                "While raging, you can use a bonus action during your move to pass through the space of a Large or smaller creature. That creature must succeed on a Strength saving throw (DC 8 + your Strength bonus + your proficiency bonus) or be knocked prone and take bludgeoning damage equal to 1d12 + your Strength modifier."
            ]
        },
        {
            "name": "Tiger",
            "source": "SCAG",
            "page": 122,
            "className": "Barbarian",
            "classSource": "SCAG",
            "subclassShortName": "Totem Warrior",
            "subclassSource": "PHB",
            "level": 14,
            "entries": [
                "While you're raging, if you move at least 20 feet in a straight line toward a Large or smaller target right before making a melee weapon attack against it, you can use a bonus action to make an additional melee weapon attack against it."
            ]
        },
        {
            "name": "Desert",
            "source": "XGE",
            "page": 10,
            "className": "Barbarian",
            "classSource": "XGE",
            "subclassShortName": "Storm Herald",
            "subclassSource": "XGE",
            "level": 3,
            "entries": [
                "When this effect is activated, all other creatures in your aura take 2 fire damage each. The damage increases when you reach certain levels in this class, increasing to 3 at 5th level, 4 at 10th level, 5 at 15th level, and 6 at 20th level."
            ]
        },
        {
            "name": "Sea",
            "source": "XGE",
            "page": 10,
            "className": "Barbarian",
            "classSource": "XGE",
            "subclassShortName": "Storm Herald",
            "subclassSource": "XGE",
            "level": 3,
            "entries": [
                "When this effect is activated, you can choose one other creature you can see in your aura. The target must make a Dexterity saving throw. The target takes 1d6 lightning damage on a failed save, or half as much damage on a successful one. The damage increases when you reach certain levels in this class, increasing to 2d6 at 10th level, 3d6 at 15th level, and 4d6 at 20th level."
            ]
        },
        {
            "name": "Tundra",
            "source": "XGE",
            "page": 10,
            "className": "Barbarian",
            "classSource": "XGE",
            "subclassShortName": "Storm Herald",
            "subclassSource": "XGE",
            "level": 3,
            "entries": [
                "When this effect is activated, each creature of your choice in your aura gains 2 temporary hit points, as icy spirits inure it to suffering. The temporary hit points increase when you reach certain levels in this class, increasing to 3 at 5th level, 4 at 10th level, 5 at 15th level, and 6 at 20th level."
            ]
        },
        {
            "name": "Desert",
            "source": "XGE",
            "page": 10,
            "className": "Barbarian",
            "classSource": "XGE",
            "subclassShortName": "Storm Herald",
            "subclassSource": "XGE",
            "level": 6,
            "entries": [
                "You gain resistance to fire damage, and you don't suffer the effects of extreme heat, as described in the Dungeon Master's Guide. Moreover, as an action, you can touch a flammable object that isn't being worn or carried by anyone else and set it on fire."
            ]
        },
        {
            "name": "Sea",
            "source": "XGE",
            "page": 10,
            "className": "Barbarian",
            "classSource": "XGE",
            "subclassShortName": "Storm Herald",
            "subclassSource": "XGE",
            "level": 6,
            "entries": [
                "You gain resistance to lightning damage, and you can breathe underwater. You also gain a swimming speed of 30 feet."
            ]
        },
        {
            "name": "Tundra",
            "source": "XGE",
            "page": 10,
            "className": "Barbarian",
            "classSource": "XGE",
            "subclassShortName": "Storm Herald",
            "subclassSource": "XGE",
            "level": 6,
            "entries": [
                "You gain resistance to cold damage, and you don't suffer the effects of extreme cold, as described in the Dungeon Master's Guide. Moreover, as an action, you can touch water and turn a 5-foot cube of it into ice, which melts after 1 minute. This action fails if a creature is in the cube."
            ]
        },
        {
            "name": "Desert",
            "source": "XGE",
            "page": 10,
            "className": "Barbarian",
            "classSource": "XGE",
            "subclassShortName": "Storm Herald",
            "subclassSource": "XGE",
            "level": 14,
            "entries": [
                "Immediately after a creature in your aura hits you with an attack, you can use your reaction to force that creature to make a Dexterity saving throw. On a failed save, the creature takes fire damage equal to half your barbarian level."
            ]
        },
        {
            "name": "Sea",
            "source": "XGE",
            "page": 10,
            "className": "Barbarian",
            "classSource": "XGE",
            "subclassShortName": "Storm Herald",
            "subclassSource": "XGE",
            "level": 14,
            "entries": [
                "When you hit a creature in your aura with an attack, you can use your reaction to force that creature to make a Strength saving throw. On a failed save, the creature is knocked prone, as if struck by a wave."
            ]
        },
        {
            "name": "Tundra",
            "source": "XGE",
            "page": 10,
            "className": "Barbarian",
            "classSource": "XGE",
            "subclassShortName": "Storm Herald",
            "subclassSource": "XGE",
            "level": 14,
            "entries": [
                "Whenever the effect of your Storm Aura is activated, you can choose one creature you can see in the aura. That creature must succeed on a Strength saving throw, or its speed is reduced to 0 until the start of your next turn, as magical frost covers it."
            ]
        }
    ]
}