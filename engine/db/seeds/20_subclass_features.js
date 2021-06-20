const {
    v4: uuidv4
} = require('uuid')

exports.seed = knex => (
    //Deletes ALL existing entries
    knex('subclass_features')
        .del()
        .then(() => (
            knex('subclass_features').insert([
                {
                    name: 'Chronurgy Magic',
                    source: 'EGW',
                    page: 184,
                    subclass_short_name: 'Chronurgy',
                    subclass_source: 'EGW',
                    level: 2,
                    entries: {
                        e: [
                            'Focusing on the manipulation of time, those who follow the Chronurgy tradition learn to alter the pace of reality to their liking. Using the ramping of anticipatory dunamis energy, these mages can bend the flow of time as adroitly as a skilled musician plays an instrument, lending themselves and their allies an advantage in the blink of an eye.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Chronal Shift|Wizard||Chronurgy|EGW|2',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Temporal Awareness|Wizard||Chronurgy|EGW|2',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Chronal Shift',
                    source: 'EGW',
                    page: 184,
                    subclass_short_name: 'Chronurgy',
                    subclass_source: 'EGW',
                    level: 2,
                    entries: {
                        e: [
                            '2nd-level Chronurgy Magic feature',
                            'You can magically exert limited control over the flow of time around a creature. As a reaction, after you or a creature you can see within 30 feet of you makes an attack roll, an ability check, or a saving throw, you can force the creature to reroll. You make this decision after you see whether the roll succeeds or fails. The target must use the result of the second roll.',
                            'You can use this ability twice, and you regain any expended uses when you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Temporal Awareness',
                    source: 'EGW',
                    page: 184,
                    subclass_short_name: 'Chronurgy',
                    subclass_source: 'EGW',
                    level: 2,
                    entries: {
                        e: [
                            '2nd-level Chronurgy Magic feature',
                            'You can add your Intelligence modifier to your initiative rolls.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Momentary Stasis',
                    source: 'EGW',
                    page: 184,
                    subclass_short_name: 'Chronurgy',
                    subclass_source: 'EGW',
                    level: 6,
                    entries: {
                        e: [
                            '6th-level Chronurgy Magic feature',
                            'As an action, you can magically force a Large or smaller creature you can see within 60 feet of you to make a Constitution saving throw against your spell save DC. Unless the saving throw is a success, the creature is encased in a field of magical energy until the end of your next turn or until the creature takes any damage. While encased in this way, the creature is incapacitated and has a speed of 0.',
                            'You can use this feature a number of times equal to your Intelligence modifier (a minimum of once). You regain all expended uses when you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Arcane Abeyance',
                    source: 'EGW',
                    page: 184,
                    subclass_short_name: 'Chronurgy',
                    subclass_source: 'EGW',
                    level: 10,
                    entries: {
                        e: [
                            '10th-level Chronurgy Magic feature',
                            "When you cast a spell using a spell slot of 4th level or lower, you can condense the spell's magic into a mote. The spell is frozen in time at the moment of casting and held within a gray bead for 1 hour. This bead is a Tiny object with AC 15 and 1 hit point, and it is immune to poison and psychic damage. When the duration ends, or if the bead is destroyed, it vanishes in a flash of light, and the spell is lost.",
                            'A creature holding the bead can use its action to release the spell within, whereupon the bead disappears. The spell uses your spell attack bonus and save DC, and the spell treats the creature who released it as the caster for all other purposes.',
                            "Once you create a bead with this feature, you can't do so again until you finish a short or long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Convergent Future',
                    source: 'EGW',
                    page: 184,
                    subclass_short_name: 'Chronurgy',
                    subclass_source: 'EGW',
                    level: 14,
                    entries: {
                        e: [
                            '14th-level Chronurgy Magic feature}',
                            'You can peer through possible futures and magically pull one of them into events around you, ensuring a particular outcome. When you or a creature you can see within 60 feet of you makes an attack roll, an ability check, or a saving throw, you can use your reaction to ignore the die roll and decide whether the number rolled is the minimum needed to succeed or one less than that number (your choice).',
                            'When you use this feature, you gain one level of exhaustion. Only by finishing a long rest can you remove a level of exhaustion gained in this way.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Graviturgy Magic',
                    source: 'EGW',
                    page: 185,
                    subclass_short_name: 'Graviturgy',
                    subclass_source: 'EGW',
                    level: 2,
                    entries: {
                        e: [
                            'Understanding and mastering the forces that draw bodies of matter together or drive them apart, the students of the Graviturgy arcane tradition learn to further bend and manipulate the violent energy of gravity to their benefit, and the terrible detriment of their enemies.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Adjust Density|Wizard||Graviturgy|EGW|2',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Adjust Density',
                    source: 'EGW',
                    page: 185,
                    subclass_short_name: 'Graviturgy',
                    subclass_source: 'EGW',
                    level: 2,
                    entries: {
                        e: [
                            '2nd-level Graviturgy Magic feature',
                            "As an action, you can magically alter the weight of one object or creature you can see within 30 feet of you. The object or creature must be Large or smaller. The target's weight is halved or doubled for up to 1 minute or until your concentration ends (as if you were concentrating on a spell).",
                            "While the weight of a creature is halved by this effect, the creature's speed increases by 10 feet, it can jump twice as far as normal, and it has disadvantage on Strength checks and Strength saving throws. While the weight of a creature is doubled by this effect, the creature's speed is reduced by 10 feet, and it has advantage on Strength checks and Strength saving throws.",
                            'Upon reaching 10th level in this class, you can target an object or a creature that is Huge or smaller.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Gravity Well',
                    source: 'EGW',
                    page: 185,
                    subclass_short_name: 'Graviturgy',
                    subclass_source: 'EGW',
                    level: 6,
                    entries: {
                        e: [
                            '6th-level Graviturgy Magic feature',
                            "You've learned how to manipulate gravity around a living being: whenever you cast a spell on a creature, you can move the target 5 feet to an unoccupied space of your choice if the target is willing to move, the spell hits it with an attack, or it fails a saving throw against the spell.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Violent Attraction',
                    source: 'EGW',
                    page: 185,
                    subclass_short_name: 'Graviturgy',
                    subclass_source: 'EGW',
                    level: 10,
                    entries: {
                        e: [
                            '10th-level Graviturgy Magic feature',
                            "When another creature that you can see within 60 feet of you hits with a weapon attack, you can use your reaction to increase the attack's velocity, causing the attack's target to take an extra 1d10 damage of the weapon's type.",
                            "Alternatively, if a creature within 60 feet of you takes damage from a fall, you can use your reaction to increase the fall's damage by 2d10.",
                            'You can use this feature a number of times equal to your Intelligence modifier (a minimum of once). You regain all expended uses when you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Event Horizon',
                    source: 'EGW',
                    page: 185,
                    subclass_short_name: 'Graviturgy',
                    subclass_source: 'EGW',
                    level: 14,
                    entries: {
                        e: [
                            '14th-level Graviturgy Magic feature',
                            'As an action, you can magically emit a powerful field of gravitational energy that tugs at other creatures for up to 1 minute or until your concentration ends (as if you were concentrating on a spell). For the duration, whenever a creature hostile to you starts its turn within 30 feet of you, it must make a Strength saving throw against your spell save DC. On a failed save, it takes 2d10 force damage, and its speed is reduced to 0 until the start of its next turn. On a successful save, it takes half as much damage, and every foot it moves this turn costs 2 extra feet of movement.',
                            "Once you use this feature, you can't do so again until you finish a long rest or until you expend a spell slot of 3rd level or higher on it.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'School of Abjuration',
                    source: 'PHB',
                    page: 115,
                    subclass_short_name: 'Abjuration',
                    subclass_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'The School of Abjuration emphasizes magic that blocks, banishes, or protects. Detractors of this school say that its tradition is about denial, negation rather than positive assertion. You understand, however, that ending harmful effects, protecting the weak, and banishing evil influences is anything but a philosophical void. It is a proud and respected vocation.',
                            'Called abjurers, members of this school are sought when baleful spirits require exorcism, when important locations must be guarded against magical spying, and when portals to other planes of existence must be closed.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Abjuration Savant|Wizard||Abjuration||2',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Arcane Ward|Wizard||Abjuration||2',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Abjuration Savant',
                    source: 'PHB',
                    page: 115,
                    subclass_short_name: 'Abjuration',
                    subclass_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'Beginning when you select this school at 2nd level, the gold and time you must spend to copy an abjuration spell into your spellbook is halved.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Arcane Ward',
                    source: 'PHB',
                    page: 115,
                    subclass_short_name: 'Abjuration',
                    subclass_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            "Starting at 2nd level, you can weave magic around yourself for protection. When you cast an abjuration spell of 1st level or higher, you can simultaneously use a strand of the spell's magic to create a magical ward on yourself that lasts until you finish a long rest. The ward has a hit point maximum equal to twice your wizard level + your Intelligence modifier. Whenever you take damage, the ward takes the damage instead. If this damage reduces the ward to 0 hit points, you take any remaining damage.",
                            "While the ward has 0 hit points, it can't absorb damage, but its magic remains. Whenever you cast an abjuration spell of 1st level or higher, the ward regains a number of hit points equal to twice the level of the spell.",
                            "Once you create the ward, you can't create it again until you finish a long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Projected Ward',
                    source: 'PHB',
                    page: 115,
                    subclass_short_name: 'Abjuration',
                    subclass_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            'Starting at 6th level, when a creature that you can see within 30 feet of you takes damage, you can use your reaction to cause your Arcane Ward to absorb that damage. If this damage reduces the ward to 0 hit points, the warded creature takes any remaining damage.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Improved Abjuration',
                    source: 'PHB',
                    page: 115,
                    subclass_short_name: 'Abjuration',
                    subclass_source: 'PHB',
                    level: 10,
                    entries: {
                        e: [
                            'Beginning at 10th level, when you cast an abjuration spell that requires you to make an ability check as a part of casting that spell (as in counterspell and dispel magic), you add your proficiency bonus to that ability check.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Spell Resistance',
                    source: 'PHB',
                    page: 115,
                    subclass_short_name: 'Abjuration',
                    subclass_source: 'PHB',
                    level: 14,
                    entries: {
                        e: [
                            'Starting at 14th level, you have advantage on saving throws against spells.',
                            'Furthermore, you have resistance against the damage of spells.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'School of Conjuration',
                    source: 'PHB',
                    page: 116,
                    subclass_short_name: 'Conjuration',
                    subclass_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'As a conjurer, you favor spells that produce objects and creatures out of thin air. You can conjure billowing clouds of killing fog or summon creatures from elsewhere to fight on your behalf. As your mastery grows, you learn spells of transportation and can teleport yourself across vast distances, even to other planes of existence, in an instant.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Conjuration Savant|Wizard||Conjuration||2',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Minor Conjuration|Wizard||Conjuration||2',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Conjuration Savant',
                    source: 'PHB',
                    page: 116,
                    subclass_short_name: 'Conjuration',
                    subclass_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'Beginning when you select this school at 2nd level, the gold and time you must spend to copy a conjuration spell into your spellbook is halved.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Minor Conjuration',
                    source: 'PHB',
                    page: 116,
                    subclass_short_name: 'Conjuration',
                    subclass_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'Starting at 2nd level when you select this school, you can use your action to conjure up an inanimate object in your hand or on the ground in an unoccupied space that you can see within 10 feet of you. This object can be no larger than 3 feet on a side and weigh no more than 10 pounds, and its form must be that of a nonmagical object that you have seen. The object is visibly magical, radiating dim light out to 5 feet.',
                            'The object disappears after 1 hour, when you use this feature again, if it takes any damage, or if it deals any damage.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Benign Transposition',
                    source: 'PHB',
                    page: 116,
                    subclass_short_name: 'Conjuration',
                    subclass_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            'Starting at 6th level, you can use your action to teleport up to 30 feet to an unoccupied space that you can see. Alternatively, you can choose a space within range that is occupied by a Small or Medium creature. If that creature is willing, you both teleport, swapping places.',
                            "Once you use this feature, you can't use it again until you finish a long rest or you cast a conjuration spell of 1st level or higher.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Focused Conjuration',
                    source: 'PHB',
                    page: 116,
                    subclass_short_name: 'Conjuration',
                    subclass_source: 'PHB',
                    level: 10,
                    entries: {
                        e: [
                            "Beginning at 10th level, while you are concentrating on a conjuration spell, your concentration can't be broken as a result of taking damage.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Durable Summons',
                    source: 'PHB',
                    page: 116,
                    subclass_short_name: 'Conjuration',
                    subclass_source: 'PHB',
                    level: 14,
                    entries: {
                        e: [
                            'Starting at 14th level, any creature that you summon or create with a conjuration spell has 30 temporary hit points.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'School of Divination',
                    source: 'PHB',
                    page: 116,
                    subclass_short_name: 'Divination',
                    subclass_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'The counsel of a diviner is sought by royalty and commoners alike, for all seek a clearer understanding of the past, present, and future. As a diviner, you strive to part the veils of space, time, and consciousness so that you can see clearly. You work to master spells of discernment, remote viewing, supernatural knowledge, and foresight.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Divination Savant|Wizard||Divination||2',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Portent|Wizard||Divination||2',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Divination Savant',
                    source: 'PHB',
                    page: 116,
                    subclass_short_name: 'Divination',
                    subclass_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'Beginning when you select this school at 2nd level, the gold and time you must spend to copy a divination spell into your spellbook is halved.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Portent',
                    source: 'PHB',
                    page: 116,
                    subclass_short_name: 'Divination',
                    subclass_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'Starting at 2nd level when you choose this school, glimpses of the future begin to press in on your awareness. When you finish a long rest, roll two d20s and record the numbers rolled. You can replace any attack roll, saving throw, or ability check made by you or a creature that you can see with one of these foretelling rolls. You must choose to do so before the roll, and you can replace a roll in this way only once per turn.',
                            'Each foretelling roll can be used only once. When you finish a long rest, you lose any unused foretelling rolls.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Expert Divination',
                    source: 'PHB',
                    page: 116,
                    subclass_short_name: 'Divination',
                    subclass_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            "Beginning at 6th level, casting divination spells comes so easily to you that it expends only a fraction of your spellcasting efforts. When you cast a divination spell of 2nd level or higher using a spell slot, you regain one expended spell slot. The slot you regain must be of a level lower than the spell you cast and can't be higher than 5th level.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'The Third Eye',
                    source: 'PHB',
                    page: 116,
                    subclass_short_name: 'Divination',
                    subclass_source: 'PHB',
                    level: 10,
                    entries: {
                        e: [
                            "Starting at 10th level, you can use your action to increase your powers of perception. When you do so, choose one of the following benefits, which lasts until you are incapacitated or you take a short or long rest. You can't use the feature again until you finish a rest.",
                            {
                                type: 'options',
                                entries: [
                                    {
                                        type: 'entries',
                                        name: 'Darkvision',
                                        entries: ['You gain darkvision out to a range of 60 feet.'],
                                    },
                                    {
                                        type: 'entries',
                                        name: 'Ethereal Sight',
                                        entries: [
                                            'You can see into the Ethereal Plane within 60 feet of you.',
                                        ],
                                    },
                                    {
                                        type: 'entries',
                                        name: 'Greater Comprehension',
                                        entries: ['You can read any language.'],
                                    },
                                    {
                                        type: 'entries',
                                        name: 'See Invisibility',
                                        entries: [
                                            'You can see invisible creatures and objects within 10 feet of you that are within line of sight.',
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Greater Portent',
                    source: 'PHB',
                    page: 116,
                    subclass_short_name: 'Divination',
                    subclass_source: 'PHB',
                    level: 14,
                    entries: {
                        e: [
                            'Starting at 14th level, the visions in your dreams intensify and paint a more accurate picture in your mind of what is to come. You roll three d20s for your Portent feature, rather than two.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'School of Enchantment',
                    source: 'PHB',
                    page: 117,
                    subclass_short_name: 'Enchantment',
                    subclass_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'As a member of the School of Enchantment, you have honed your ability to magically entrance and beguile other people and monsters. Some enchanters are peacemakers who bewitch the violent to lay down their arms and charm the cruel into showing mercy. Others are tyrants who magically bind the unwilling into their service. Most enchanters fall somewhere in between.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Enchantment Savant|Wizard||Enchantment||2',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Hypnotic Gaze|Wizard||Enchantment||2',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Enchantment Savant',
                    source: 'PHB',
                    page: 117,
                    subclass_short_name: 'Enchantment',
                    subclass_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'Beginning when you select this school at 2nd level, the gold and time you must spend to copy an enchantment spell into your spellbook is halved.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Hypnotic Gaze',
                    source: 'PHB',
                    page: 117,
                    subclass_short_name: 'Enchantment',
                    subclass_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            "Starting at 2nd level when you choose this school, your soft words and enchanting gaze can magically enthrall another creature. As an action, choose one creature that you can see within 5 feet of you. If the target can see or hear you, it must succeed on a Wisdom saving throw against your wizard spell save DC or be charmed by you until the end of your next turn. The charmed creature's speed drops to 0, and the creature is incapacitated and visibly dazed.",
                            'On subsequent turns, you can use your action to maintain this effect, extending its duration until the end of your next turn. However, the effect ends if you move more than 5 feet away from the creature, if the creature can neither see nor hear you, or if the creature takes damage.',
                            "Once the effect ends, or if the creature succeeds on its initial saving throw against this effect, you can't use this feature on that creature again until you finish a long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Instinctive Charm',
                    source: 'PHB',
                    page: 117,
                    subclass_short_name: 'Enchantment',
                    subclass_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            "Beginning at 6th level, when a creature you can see within 30 feet of you makes an attack roll against you, you can use your reaction to divert the attack, provided that another creature is within the attack's range. The attacker must make a Wisdom saving throw against your wizard spell save DC. On a failed save, the attacker must target the creature that is closest to it, not including you or itself. If multiple creatures are closest, the attacker chooses which one to target. On a successful save, you can't use this feature on the attacker again until you finish a long rest.",
                            "You must choose to use this feature before knowing whether the attack hits or misses. Creatures that can't be charmed are immune to this effect.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Split Enchantment',
                    source: 'PHB',
                    page: 117,
                    subclass_short_name: 'Enchantment',
                    subclass_source: 'PHB',
                    level: 10,
                    entries: {
                        e: [
                            'Starting at 10th level, when you cast an enchantment spell of 1st level or higher that targets only one creature, you can have it target a second creature.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Alter Memories',
                    source: 'PHB',
                    page: 117,
                    subclass_short_name: 'Enchantment',
                    subclass_source: 'PHB',
                    level: 14,
                    entries: {
                        e: [
                            "At 14th level, you gain the ability to make a creature unaware of your magical influence on it. When you cast an enchantment spell to charm one or more creatures, you can alter one creature's understanding so that it remains unaware of being charmed.",
                            "Additionally, once before the spell expires, you can use your action to try to make the chosen creature forget some of the time it spent charmed. The creature must succeed on an Intelligence saving throw against your wizard spell save DC or lose a number of hours of its memories equal to 1 + your Charisma modifier (minimum of 1). You can make the creature forget less time, and the amount of time can't exceed the duration of your enchantment spell.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'School of Evocation',
                    source: 'PHB',
                    page: 117,
                    subclass_short_name: 'Evocation',
                    subclass_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'You focus your study on magic that creates powerful elemental effects such as bitter cold, searing flame, rolling thunder, crackling lightning, and burning acid. Some evokers find employment in military forces, serving as artillery to blast enemy armies from afar. Others use their spectacular power to protect the weak, while some seek their own gain as bandits, adventurers, or aspiring tyrants.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Evocation Savant|Wizard||Evocation||2',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Sculpt Spells|Wizard||Evocation||2',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Evocation Savant',
                    source: 'PHB',
                    page: 117,
                    subclass_short_name: 'Evocation',
                    subclass_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'Beginning when you select this school at 2nd level, the gold and time you must spend to copy an evocation spell into your spellbook is halved.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Sculpt Spells',
                    source: 'PHB',
                    page: 117,
                    subclass_short_name: 'Evocation',
                    subclass_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            "Beginning at 2nd level, you can create pockets of relative safety within the effects of your evocation spells. When you cast an evocation spell that affects other creatures that you can see, you can choose a number of them equal to 1 + the spell's level. The chosen creatures automatically succeed on their saving throws against the spell, and they take no damage if they would normally take half damage on a successful save.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Potent Cantrip',
                    source: 'PHB',
                    page: 117,
                    subclass_short_name: 'Evocation',
                    subclass_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            "Starting at 6th level, your damaging cantrips affect even creatures that avoid the brunt of the effect. When a creature succeeds on a saving throw against your cantrip, the creature takes half the cantrip's damage (if any) but suffers no additional effect from the cantrip.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Empowered Evocation',
                    source: 'PHB',
                    page: 117,
                    subclass_short_name: 'Evocation',
                    subclass_source: 'PHB',
                    level: 10,
                    entries: {
                        e: [
                            'Beginning at 10th level, you can add your Intelligence modifier to one damage roll of any wizard evocation spell you cast.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Overchannel',
                    source: 'PHB',
                    page: 117,
                    subclass_short_name: 'Evocation',
                    subclass_source: 'PHB',
                    level: 14,
                    entries: {
                        e: [
                            'Starting at 14th level, you can increase the power of your simpler spells. When you cast a wizard spell of 1st through 5th-level that deals damage, you can deal maximum damage with that spell.',
                            'The first time you do so, you suffer no adverse effect. If you use this feature again before you finish a long rest, you take 2d12 necrotic damage for each level of the spell, immediately after you cast it. Each time you use this feature again before finishing a long rest, the necrotic damage per spell level increases by 1d12. This damage ignores resistance and immunity.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'School of Illusion',
                    source: 'PHB',
                    page: 118,
                    subclass_short_name: 'Illusion',
                    subclass_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'You focus your studies on magic that dazzles the senses, befuddles the mind, and tricks even the wisest folk. Your magic is subtle, but the illusions crafted by your keen mind make the impossible seem real. Some illusionists—including many gnome wizards—are benign tricksters who use their spells to entertain. Others are more sinister masters of deception, using their illusions to frighten and fool others for their personal gain.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Illusion Savant|Wizard||Illusion||2',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Improved Minor Illusion|Wizard||Illusion||2',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Illusion Savant',
                    source: 'PHB',
                    page: 118,
                    subclass_short_name: 'Illusion',
                    subclass_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'Beginning when you select this school at 2nd level, the gold and time you must spend to copy an illusion spell into your spellbook is halved.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Improved Minor Illusion',
                    source: 'PHB',
                    page: 118,
                    subclass_short_name: 'Illusion',
                    subclass_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            "When you choose this school at 2nd level, you learn the minor illusion cantrip. If you already know this cantrip, you learn a different wizard cantrip of your choice. The cantrip doesn't count against your number of cantrips known.",
                            'When you cast minor illusion, you can create both a sound and an image with a single casting of the spell.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Malleable Illusions',
                    source: 'PHB',
                    page: 118,
                    subclass_short_name: 'Illusion',
                    subclass_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            "Starting at 6th level, when you cast an illusion spell that has a duration of 1 minute or longer, you can use your action to change the nature of that illusion (using the spell's normal parameters for the illusion), provided that you can see the illusion.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Illusory Step',
                    source: 'PHB',
                    page: 118,
                    subclass_short_name: 'Illusion',
                    subclass_source: 'PHB',
                    level: 10,
                    entries: {
                        e: [
                            'Beginning at 10th level, you can create an illusory duplicate of yourself as an instant, almost instinctual reaction to danger. When a creature makes an attack roll against you, you can use your reaction to interpose the illusory duplicate between the attacker and yourself. The attack automatically misses you, then the illusion dissipates.',
                            "Once you use this feature, you can't use it again until you finish a short or long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Illusory Reality',
                    source: 'PHB',
                    page: 118,
                    subclass_short_name: 'Illusion',
                    subclass_source: 'PHB',
                    level: 14,
                    entries: {
                        e: [
                            'By 14th level, you have learned the secret of weaving shadow magic into your illusions to give them a semireality. When you cast an illusion spell of 1st level or higher, you can choose one inanimate, nonmagical object that is part of the illusion and make that object real. You can do this on your turn as a bonus action while the spell is ongoing. The object remains real for 1 minute. For example, you can create an illusion of a bridge over a chasm and then make it real long enough for your allies to cross.',
                            "The object can't deal damage or otherwise directly harm anyone.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'School of Necromancy',
                    source: 'PHB',
                    page: 118,
                    subclass_short_name: 'Necromancy',
                    subclass_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'The School of Necromancy explores the cosmic forces of life, death, and undeath. As you focus your studies in this tradition, you learn to manipulate the energy that animates all living things. As you progress, you learn to sap the life force from a creature as your magic destroys its body, transforming that vital energy into magical power you can manipulate.',
                            'Most people see necromancers as menacing, or even villainous, due to the close association with death. Not all necromancers are evil, but the forces they manipulate are considered taboo by many societies.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Necromancy Savant|Wizard||Necromancy||2',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Grim Harvest|Wizard||Necromancy||2',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Grim Harvest',
                    source: 'PHB',
                    page: 118,
                    subclass_short_name: 'Necromancy',
                    subclass_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            "At 2nd level, you gain the ability to reap life energy from creatures you kill with your spells. Once per turn when you kill one or more creatures with a spell of 1st level or higher, you regain hit points equal to twice the spell's level, or three times its level if the spell belongs to the School of Necromancy. You don't gain this benefit for killing constructs or undead.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Necromancy Savant',
                    source: 'PHB',
                    page: 118,
                    subclass_short_name: 'Necromancy',
                    subclass_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'Beginning when you select this school at 2nd level, the gold and time you must spend to copy a necromancy spell into your spellbook is halved.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Undead Thralls',
                    source: 'PHB',
                    page: 118,
                    subclass_short_name: 'Necromancy',
                    subclass_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            'At 6th level, you add the animate dead} spell to your spellbook if it is not there already. When you cast animate dead, you can target one additional corpse or pile of bones, creating another zombie or skeleton, as appropriate.',
                            'Whenever you create an undead using a necromancy spell, it has additional benefits:',
                            {
                                type: 'list',
                                items: [
                                    "The creature's hit point maximum is increased by an amount equal to your wizard level.",
                                    'The creature adds your proficiency bonus to its weapon damage rolls.',
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Inured to Undeath',
                    source: 'PHB',
                    page: 118,
                    subclass_short_name: 'Necromancy',
                    subclass_source: 'PHB',
                    level: 10,
                    entries: {
                        e: [
                            "Beginning at 10th level, you have resistance to necrotic damage, and your hit point maximum can't be reduced. You have spent so much time dealing with undead and the forces that animate them that you have become inured to some of their worst effects.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Command Undead',
                    source: 'PHB',
                    page: 118,
                    subclass_short_name: 'Necromancy',
                    subclass_source: 'PHB',
                    level: 14,
                    entries: {
                        e: [
                            "Starting at 14th level, you can use magic to bring undead under your control, even those created by other wizards. As an action, you can choose one undead that you can see within 60 feet of you. That creature must make a Charisma saving throw against your wizard spell save DC. If it succeeds, you can't use this feature on it again. If it fails, it becomes friendly to you and obeys your commands until you use this feature again.",
                            'Intelligent undead are harder to control in this way. If the target has an Intelligence of 8 or higher, it has advantage on the saving throw. If it fails the saving throw and has an Intelligence of 12 or higher, it can repeat the saving throw at the end of every hour until it succeeds and breaks free.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'School of Transmutation',
                    source: 'PHB',
                    page: 119,
                    subclass_short_name: 'Transmutation',
                    subclass_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            "You are a student of spells that modify energy and matter. To you, the world is not a fixed thing, but eminently mutable, and you delight in being an agent of change. You wield the raw stuff of creation and learn to alter both physical forms and mental qualities. Your magic gives you the tools to become a smith on reality's forge.",
                            'Some transmuters are tinkerers and pranksters, turning people into toads and transforming copper into silver for fun and occasional profit. Others pursue their magical studies with deadly seriousness, seeking the power of the gods to make and destroy worlds.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Transmutation Savant|Wizard||Transmutation||2',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Minor Alchemy|Wizard||Transmutation||2',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Minor Alchemy',
                    source: 'PHB',
                    page: 119,
                    subclass_short_name: 'Transmutation',
                    subclass_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'Starting at 2nd level when you select this school, you can temporarily alter the physical properties of one nonmagical object, changing it from one substance into another. You perform a special alchemical procedure on one object composed entirely of wood, stone (but not a gemstone), iron, copper, or silver, transforming it into a different one of those materials. For each 10 minutes you spend performing the procedure, you can transform up to 1 cubic foot of material. After 1 hour, or until you lose your concentration (as if you were concentrating on a spell), the material reverts to its original substance.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Transmutation Savant',
                    source: 'PHB',
                    page: 119,
                    subclass_short_name: 'Transmutation',
                    subclass_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'Beginning when you select this school at 2nd level, the gold and time you must spend to copy a transmutation spell into your spellbook is halved.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: "Transmuter's Stone",
                    source: 'PHB',
                    page: 119,
                    subclass_short_name: 'Transmutation',
                    subclass_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            "Starting at 6th level, you can spend 8 hours creating a transmuter's stone that stores transmutation magic. You can benefit from the stone yourself or give it to another creature. A creature gains a benefit of your choice as long as the stone is in the creature's possession. When you create the stone, choose the benefit from the following options:",
                            {
                                type: 'list',
                                items: [
                                    'Darkvision out to a range of 60 feet, as described in chapter 8.',
                                    'An increase to speed of 10 feet while the creature is unencumbered.',
                                    'Proficiency in Constitution saving throws.',
                                    'Resistance to acid, cold, fire, lightning, or thunder damage (your choice whenever you choose this benefit).',
                                ],
                            },
                            'Each time you cast a transmutation spell of 1st level or higher, you can change the effect of your stone if the stone is on your person.',
                            "If you create a new transmuter's stone, the previous one ceases to function.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Shapechanger',
                    source: 'PHB',
                    page: 119,
                    subclass_short_name: 'Transmutation',
                    subclass_source: 'PHB',
                    level: 10,
                    entries: {
                        e: [
                            'At 10th level, you add the polymorph spell to your spellbook, if it is not there already. You can cast polymorph without expending a spell slot. When you do so, you can target only yourself and transform into a beast whose challenge rating is 1 or lower.',
                            "Once you cast polymorph in this way, you can't do so again until you finish a short or long rest, though you can still cast it normally using an available spell slot.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Master Transmuter',
                    source: 'PHB',
                    page: 119,
                    subclass_short_name: 'Transmutation',
                    subclass_source: 'PHB',
                    level: 14,
                    entries: {
                        e: [
                            "Starting at 14th level, you can use your action to consume the reserve of transmutation magic stored within your transmuter's stone in a single burst. When you do so, choose one of the following effects. Your transmuter's stone is destroyed and can't be remade until you finish a long rest.",
                            {
                                type: 'options',
                                entries: [
                                    {
                                        type: 'entries',
                                        name: 'Major Transformation',
                                        entries: [
                                            'You can transmute one nonmagical object—no larger than a 5-foot cube—into another nonmagical object of similar size and mass and of equal or lesser value. You must spend 10 minutes handling the object to transform it.',
                                        ],
                                    },
                                    {
                                        type: 'entries',
                                        name: 'Panacea',
                                        entries: [
                                            "You remove all curses, diseases, and poisons affecting a creature that you touch with the transmuter's stone. The creature also regains all its hit points.",
                                        ],
                                    },
                                    {
                                        type: 'entries',
                                        name: 'Restore Life',
                                        entries: [
                                            "You cast the raise dead spell on a creature you touch with the transmuter's stone, without expending a spell slot or needing to have the spell in your spellbook.",
                                        ],
                                    },
                                    {
                                        type: 'entries',
                                        name: 'Restore Youth',
                                        entries: [
                                            "You touch the transmuter's stone to a willing creature, and that creature's apparent age is reduced by 3d10 years, to a minimum of 13 years. This effect doesn't extend the creature's lifespan.",
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Bladesinging',
                    source: 'TCE',
                    page: 76,
                    subclass_short_name: 'Bladesinging',
                    subclass_source: 'TCE',
                    level: 2,
                    entries: {
                        e: [
                            'Bladesingers are elves who bravely defend their people and lands. They are elf wizards who master a school of sword fighting grounded in a tradition of arcane magic. In combat, a bladesinger uses a series of intricate, elegant maneuvers that fend off harm and allow the bladesinger to channel magic into devastating attacks and a cunning defense.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature:
                                    'Training in War and Song (Bladesinging)|Wizard||Bladesinging|TCE|2',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Bladesong|Wizard||Bladesinging|TCE|2',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Bladesinger Styles|Wizard||Bladesinging|TCE|2',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Bladesinger Styles',
                    source: 'TCE',
                    page: 76,
                    subclass_short_name: 'Bladesinging',
                    subclass_source: 'TCE',
                    level: 2,
                    entries: {
                        e: [
                            "From its inception as a martial and magical art, Bladesinging has been tied to the sword, more specifically the longsword. Yet many generations of study gave rise to various styles of Bladesinging based on the melee weapon employed. The techniques of these styles are passed from master to students in small schools, some of which have a building dedicated to instruction. Even the newest styles are hundreds of years old, but are still taught by their original creators due to the long lives of elves. Most schools of Bladesinging are in Evermeet or Evereska. One was started in Myth Drannor, but the city's destruction has scattered those students who survived.",
                            "Styles of Bladesinging are broadly categorized based on the type of weapon employed, and each is associated with a category of animal. Within that style are specializations named after specific animal types, based on the types of spells employed, the techniques of the master, and the particular weapon used. Bladesingers who apprentice to a master typically get a tattoo of their chosen style's animal. Some bladesingers learn multiple styles and bear many tattoos, wearing a warning on their skin of their deadly skills.",
                            {
                                type: 'entries',
                                name: 'Cat',
                                entries: [
                                    "Styles that employ a sword belong to this family. The lion style, the eldest, trains practitioners in the use of the longsword and doesn't favor any particular type of spells. Leopard style focuses on the shortsword and spells of illusion and stealth. Red tiger, a style just three centuries old, has its bladesingers using the scimitar in a whirling dance of defense from which they launch into sudden leaps and attacks.",
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Bird',
                                entries: [
                                    'Styles that focus on the use of a hafted weapon, such as an axe or hammer, have been grouped together as bird styles, yet they vary wildly. All relatively new styles, they use weapons not typically favored by elves. Eagle-style bladesingers use small handaxes, and many maneuvers in the style focus on fluid ways to throw the weapon and draw a new one. Raven style uses a war pick, and spells associated with it grant the bladesinger more agility in combat.',
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Snake',
                                entries: [
                                    'Practitioners of these styles use a flail, chain, or whip. Viper style uses a whip, despite its inelegance as a weapon, and has almost as long a history as the lion style. Its masters punctuate their bladesong with a stunningly rapid rhythm of whip cracks, which can keep many foes at bay and allow the bladesinger space to cast the cruel spells of poison and disease favored by the style.',
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Bladesong',
                    source: 'TCE',
                    page: 76,
                    subclass_short_name: 'Bladesinging',
                    subclass_source: 'TCE',
                    level: 2,
                    entries: {
                        e: [
                            "Starting at 2nd level, you can invoke a secret elven magic called the Bladesong, provided you aren't wearing medium or heavy armor or using a shield. It graces you with supernatural speed, agility, and focus.",
                            'You can use a bonus action to start the Bladesong, which lasts for 1 minute. It ends early if you are incapacitated, if you don medium or heavy armor or a shield, or if you use two hands to make an attack with a weapon. You can also dismiss Bladesong at any time you choose (no action required).',
                            'While your bladesong is active, you gain the following benefits:',
                            {
                                type: 'list',
                                items: [
                                    'You gain a bonus to your AC equal to your Intelligence modifier (minimum of +1).',
                                    'Your walking speed increases by 10 feet.',
                                    'You have advantage on Dexterity (Acrobatics) checks.',
                                    'You gain a bonus to any Constitution saving throws you make to maintain concentration on a spell. The bonus equals your Intelligence modifier (minimum of +1).',
                                ],
                            },
                            'You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses of it when you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Training in War and Song (Bladesinging)',
                    source: 'TCE',
                    page: 76,
                    subclass_short_name: 'Bladesinging',
                    subclass_source: 'TCE',
                    level: 2,
                    entries: {
                        e: [
                            'When you adopt this tradition at 2nd level, you gain proficiency with light armor, and you gain proficiency with one type of one-handed melee weapon of your choice.',
                            "You also gain proficiency in the Performance skill if you don't already have it.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Extra Attack',
                    source: 'TCE',
                    page: 76,
                    subclass_short_name: 'Bladesinging',
                    subclass_source: 'TCE',
                    level: 6,
                    entries: {
                        e: [
                            'Starting at 6th level, you can attack twice, instead of once, whenever you take the Attack action on your turn. Moreover, you can cast one of your cantrips in place of one of those attacks.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Song of Defense',
                    source: 'TCE',
                    page: 76,
                    subclass_short_name: 'Bladesinging',
                    subclass_source: 'TCE',
                    level: 10,
                    entries: {
                        e: [
                            "Beginning at 10th level, you can direct your magic to absorb damage while your bladesong is active. When you take damage, you can use your reaction to expend one spell slot and reduce that damage to you by an amount equal to five times the spell's slot level.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Song of Victory',
                    source: 'TCE',
                    page: 76,
                    subclass_short_name: 'Bladesinging',
                    subclass_source: 'TCE',
                    level: 14,
                    entries: {
                        e: [
                            'Starting at 14th level, you add your Intelligence modifier (minimum of +1) to the damage of your melee weapon attacks while your Bladesong is active.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Order of Scribes',
                    source: 'TCE',
                    page: 77,
                    subclass_short_name: 'Scribes',
                    subclass_source: 'TCE',
                    level: 2,
                    entries: {
                        e: [
                            "Magic of the book-that's what many folk call wizardry. The name is apt, given how much time wizards spend poring over tomes and penning theories about the nature of magic. It's rare to see wizards traveling without books and scrolls sprouting from their bags, and a wizard would go to great lengths to plumb an archive of ancient knowledge.",
                            'Among wizards, the Order of Scribes is the most bookish. It takes many forms in different worlds, but its primary mission is the same everywhere: recording magical discoveries so that wizardry can flourish. And while all wizards value spellbooks, a wizard in the Order of Scribes magically awakens their book, turning it into a trusted companion. All wizards study books, but a wizardly scribe talks to theirs!',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Wizardly Quill|Wizard||Scribes|TCE|2',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Awakened Spellbook|Wizard||Scribes|TCE|2',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Awakened Spellbook',
                    source: 'TCE',
                    page: 77,
                    subclass_short_name: 'Scribes',
                    subclass_source: 'TCE',
                    level: 2,
                    entries: {
                        e: [
                            '2nd-level Order of Scribes feature',
                            'Using specially prepared inks and ancient incantations passed down by your wizardly order, you have awakened an arcane sentience within your spellbook.',
                            'While you are holding the book, it grants you the following benefits:',
                            {
                                type: 'list',
                                items: [
                                    'You can use the book as a spellcasting focus for your wizard spells.',
                                    "When you cast a wizard spell with a spell slot, you can temporarily replace its damage type with a type that appears in another spell in your spellbook, which magically alters the spell's formula for this casting only. The latter spell must be of the same level as the spell slot you expend.",
                                    "When you cast a wizard spell as a ritual, you can use the spell's normal casting time, rather than adding 10 minutes to it. Once you use this benefit, you can't do so again until you finish a long rest.",
                                ],
                            },
                            "If necessary, you can replace the book over the course of a short rest by using your Wizardly Quill to write arcane sigils in a blank book or a magic spellbook to which you're attuned. At the end of the rest, your spellbook's consciousness is summoned into the new book, which the consciousness transforms into your spellbook, along with all its spells. If the previous book still existed somewhere, all the spells vanish from its pages.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Wizardly Quill',
                    source: 'TCE',
                    page: 77,
                    subclass_short_name: 'Scribes',
                    subclass_source: 'TCE',
                    level: 2,
                    entries: {
                        e: [
                            '2nd-level Order of Scribes feature',
                            'As a bonus action, you can magically create a Tiny quill in your free hand. The magic quill has the following properties:',
                            {
                                type: 'list',
                                items: [
                                    "The quill doesn't require ink. When you write with it, it produces ink in a color of your choice on the writing surface.",
                                    'The time you must spend to copy a spell into your spellbook equals 2 minutes per spell level if you use the quill for the transcription.',
                                    'You can erase anything you write with the quill if you wave the feather over the text as a bonus action, provided the text is within 5 feet of you.',
                                ],
                            },
                            'This quill disappears if you create another one or if you die.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Manifest Mind',
                    source: 'TCE',
                    page: 77,
                    subclass_short_name: 'Scribes',
                    subclass_source: 'TCE',
                    level: 6,
                    entries: {
                        e: [
                            '6th-level Order of Scribes feature',
                            "You can conjure forth the mind of your Awakened Spellbook. As a bonus action while the book is on your person, you can cause the mind to manifest as a Tiny spectral object, hovering in an unoccupied space of your choice within 60 feet of you. The spectral mind is intangible and doesn't occupy its space, and it sheds dim light in a 10-foot radius. It looks like a ghostly tome, a cascade of text, or a scholar from the past (your choice).",
                            'While manifested, the spectral mind can hear and see, and it has darkvision with a range of 60 feet. The mind can telepathically share with you what it sees and hears (no action required).',
                            "Whenever you cast a wizard spell on your turn, you can cast it as if you were in the spectral mind's space, instead of your own, using its senses. You can do so a number of times per day equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
                            'As a bonus action, you can cause the spectral mind to hover up to 30 feet to an unoccupied space that you or it can see. It can pass through creatures but not objects.',
                            'The spectral mind stops manifesting if it is ever more than 300 feet away from you, if someone casts dispel magic on it, if the Awakened Spellbook is destroyed, if you die, or if you dismiss the spectral mind as a bonus action.',
                            "Once you conjure the mind, you can't do so again until you finish a long rest, unless you expend a spell slot of any level to conjure it again.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Master Scrivener',
                    source: 'TCE',
                    page: 78,
                    subclass_short_name: 'Scribes',
                    subclass_source: 'TCE',
                    level: 10,
                    entries: {
                        e: [
                            '10th-level Order of Scribes feature',
                            'Whenever you finish a long rest, you can create one magic scroll by touching your Wizardly Quill to a blank piece of paper or parchment and causing one spell from your Awakened Spellbook to be copied onto the scroll. The spellbook must be within 5 feet of you when you make the scroll.',
                            "The chosen spell must be of 1st or 2nd level and must have a casting time of 1 action. Once in the scroll, the spell's power is enhanced, counting as one level higher than normal. You can cast the spell from the scroll by reading it as an action. The scroll is unintelligible to anyone else, and the spell vanishes from the scroll when you cast it or when you finish your next long rest.",
                            "You are also adept at crafting spell scrolls, which are described in the treasure chapter of the Dungeon Master's Guide. The gold and time you must spend to make such a scroll are halved if you use your Wizardly Quill.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'One with the Word',
                    source: 'TCE',
                    page: 77,
                    subclass_short_name: 'Scribes',
                    subclass_source: 'TCE',
                    level: 14,
                    entries: {
                        e: [
                            '14th-level Order of Scribes feature',
                            'Your connection to your Awakened Spellbook has become so profound that your soul has become entwined with it. While the book is on your person, you have advantage on all Intelligence (Arcana) checks, as the spellbook helps you remember magical lore.',
                            "Moreover, if you take damage while your spellbook's mind is manifested, you can prevent all of that damage to you by using your reaction to dismiss the spectral mind, using its magic to save yourself. Then roll 3d6. The spellbook temporarily loses spells of your choice that have a combined spell level equal to that roll or higher. For example, if the roll's total is 9, spells vanish from the book that have a combined level of at least 9, which could mean one 9th-level spell, three 3rd-level spells, or some other combination. If there aren't enough spells in the book to cover this cost, you drop to 0 hit points.",
                            'Until you finish 1d6 long rests, you are incapable of casting the lost spells, even if you find them on a scroll or in another spellbook. After you finish the required number of rests, the spells reappear in the spellbook.',
                            "Once you use this reaction, you can't do so again until you finish a long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'War Magic',
                    source: 'XGE',
                    page: 59,
                    subclass_short_name: 'War',
                    subclass_source: 'XGE',
                    level: 2,
                    entries: {
                        e: [
                            "A variety of arcane colleges specialize in training wizards for war. The tradition of War Magic blends principles of evocation and abjuration, rather than specializing in either of those schools. It teaches techniques that empower a caster's spells, while also providing methods for wizards to bolster their own defenses.",
                            "Followers of this tradition are known as war mages. They see their magic as both a weapon and armor, a resource superior to any piece of steel. War mages act fast in battle, using their spells to seize tactical control of a situation. Their spells strike hard, while their defensive skills foil their opponents' attempts to counterattack. War mages are also adept at turning other spellcasters' magical energy against them.",
                            'In great battles, a war mage often works with evokers, abjurers, and other types of wizards. Evokers, in particular, sometimes tease war mages for splitting their attention between offense and defense. A war mage\'s typical response: "What good is being able to throw a mighty fireball if I die before I can cast it?"',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Arcane Deflection|Wizard||War|XGE|2',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Tactical Wit|Wizard||War|XGE|2',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Arcane Deflection',
                    source: 'XGE',
                    page: 59,
                    subclass_short_name: 'War',
                    subclass_source: 'XGE',
                    level: 2,
                    entries: {
                        e: [
                            'At 2nd level, you have learned to weave your magic to fortify yourself against harm. When you are hit by an attack or you fail a saving throw, you can use your reaction to gain a +2 bonus to your AC against that attack or a +4 bonus to that saving throw.',
                            "When you use this feature, you can't cast spells other than cantrips until the end of your next turn.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Tactical Wit',
                    source: 'XGE',
                    page: 59,
                    subclass_short_name: 'War',
                    subclass_source: 'XGE',
                    level: 2,
                    entries: {
                        e: [
                            'Starting at 2nd level, your keen ability to assess tactical situations allows you to act quickly in battle. You can give yourself a bonus to your initiative rolls equal to your Intelligence modifier.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Power Surge',
                    source: 'XGE',
                    page: 59,
                    subclass_short_name: 'War',
                    subclass_source: 'XGE',
                    level: 6,
                    entries: {
                        e: [
                            'Starting at 6th level, you can store magical energy within yourself to later empower your damaging spells. In its stored form, this energy is called a power surge.',
                            'You can store a maximum number of power surges equal to your Intelligence modifier (minimum of one). Whenever you finish a long rest, your number of power surges resets to one. Whenever you successfully end a spell with dispel magic or counterspell, you gain one power surge, as you steal magic from the spell you foiled. If you end a short rest with no power surges, you gain one power surge.',
                            'Once per turn when you deal damage to a creature or object with a wizard spell, you can spend one power surge to deal extra force damage to that target. The extra damage equals half your wizard level.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Durable Magic',
                    source: 'XGE',
                    page: 59,
                    subclass_short_name: 'War',
                    subclass_source: 'XGE',
                    level: 10,
                    entries: {
                        e: [
                            'Beginning at 10th level, the magic you channel helps ward off harm. While you maintain concentration on a spell, you have a +2 bonus to AC and all saving throws.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'Deflecting Shroud',
                    source: 'XGE',
                    page: 59,
                    subclass_short_name: 'War',
                    subclass_source: 'XGE',
                    level: 14,
                    entries: {
                        e: [
                            'At 14th level, your Arcane Deflection becomes infused with deadly magic. When you use your Arcane Deflection feature, you can cause magical energy to arc from you. Up to three creatures of your choice that you can see within 60 feet of you each take force damage equal to half your wizard level.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8ae9927f-fd72-42a3-a5ab-c1c2b57a40b4',
                },
                {
                    name: 'The Archfey',
                    source: 'PHB',
                    page: 108,
                    subclass_short_name: 'Archfey',
                    subclass_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            "Your patron is a lord or lady of the fey, a creature of legend who holds secrets that were forgotten before the mortal races were born. This being's motivations are often inscrutable, and sometimes whimsical, and might involve a striving for greater magical power or the settling of age-old grudges. Beings of this sort include the Prince of Frost; the Queen of Air and Darkness, ruler of the Gloaming Court; Titania of the Summer Court; her consort Oberon, the Green Lord; Hyrsam, the Prince of Fools; and ancient hags.",
                            {
                                type: 'entries',
                                name: 'Expanded Spell List',
                                entries: [
                                    'The Archfey lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.',
                                    {
                                        type: 'table',
                                        caption: 'Archfey Expanded Spells',
                                        colLabels: ['Spell Level', 'Spells'],
                                        colStyles: ['col-2 text-center', 'col-10'],
                                        rows: [
                                            ['1st', 'faerie fire, sleep'],
                                            ['2nd', 'calm emotions, phantasmal force'],
                                            ['3rd', 'blink, plant growth'],
                                            ['4th', 'dominate beast, greater invisibility'],
                                            ['5th', 'dominate person, seeming'],
                                        ],
                                    },
                                ],
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Fey Presence|Warlock||Archfey||1',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Fey Presence',
                    source: 'PHB',
                    page: 108,
                    subclass_short_name: 'Archfey',
                    subclass_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            'Starting at 1st level, your patron bestows upon you the ability to project the beguiling and fearsome presence of the fey. As an action, you can cause each creature in a 10-foot cube originating from you to make a Wisdom saving throw against your warlock spell save DC. The creatures that fail their saving throws are all charmed or frightened by you (your choice) until the end of your next turn.',
                            "Once you use this feature, you can't use it again until you finish a short or long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Misty Escape',
                    source: 'PHB',
                    page: 108,
                    subclass_short_name: 'Archfey',
                    subclass_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            'Starting at 6th level, you can vanish in a puff of mist in response to harm. When you take damage, you can use your reaction to turn invisible and teleport up to 60 feet to an unoccupied space you can see. You remain invisible until the start of your next turn or until you attack or cast a spell.',
                            "Once you use this feature, you can't use it again until you finish a short or long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Beguiling Defenses',
                    source: 'PHB',
                    page: 108,
                    subclass_short_name: 'Archfey',
                    subclass_source: 'PHB',
                    level: 10,
                    entries: {
                        e: [
                            'Beginning at 10th level, your patron teaches you how to turn the mind-affecting magic of your enemies against them. You are immune to being charmed}, and when another creature attempts to charm you, you can use your reaction to attempt to turn the charm back on that creature. The creature must succeed on a Wisdom saving throw against your warlock spell save DC or be charmed by you for 1 minute or until the creature takes any damage.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Dark Delirium',
                    source: 'PHB',
                    page: 108,
                    subclass_short_name: 'Archfey',
                    subclass_source: 'PHB',
                    level: 14,
                    entries: {
                        e: [
                            'Starting at 14th level, you can plunge a creature into an illusory realm. As an action, choose a creature that you can see within 60 feet of you. It must make a Wisdom saving throw against your warlock spell save DC. On a failed save, it is charmed} or frightened by you (your choice) for 1 minute or until your concentration is broken (as if you are concentrating on a spell). This effect ends early if the creature takes any damage.',
                            'Until this illusion ends, the creature thinks it is lost in a misty realm, the appearance of which you choose. The creature can see and hear only itself, you, and the illusion.',
                            'You must finish a short or long rest before you can use this feature again.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'The Fiend',
                    source: 'PHB',
                    page: 109,
                    subclass_short_name: 'Fiend',
                    subclass_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            "You have made a pact with a fiend from the lower planes of existence, a being whose aims are evil, even if you strive against those aims. Such beings desire the corruption or destruction of all things, ultimately including you. Fiends powerful enough to forge a pact include demon lords such as Demogorgon, Orcus, Fraz'Urb-luu, and Baphomet; archdevils such as Asmodeus, Dispater, Mephistopheles, and Belial; pit fiends and balors that are especially mighty; and ultroloths and other lords of the yugoloths.",
                            {
                                type: 'entries',
                                name: 'Expanded Spell List',
                                entries: [
                                    'The Fiend lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.',
                                    {
                                        type: 'table',
                                        caption: 'Fiend Expanded Spells',
                                        colLabels: ['Spell Level', 'Spells'],
                                        colStyles: ['col-2 text-center', 'col-10'],
                                        rows: [
                                            ['1st', 'burning hands, command'],
                                            ['2nd', 'blindness/deafness, scorching ray'],
                                            ['3rd', 'fireball, stinking cloud'],
                                            ['4th', 'fire shield, wall of fire'],
                                            ['5th', 'flame strike} hallow'],
                                        ],
                                    },
                                ],
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: "Dark One's Blessing|Warlock||Fiend||1",
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: "Dark One's Blessing",
                    source: 'PHB',
                    page: 109,
                    subclass_short_name: 'Fiend',
                    subclass_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            'Starting at 1st level, when you reduce a hostile creature to 0 hit points, you gain temporary hit points equal to your Charisma modifier + your warlock level (minimum of 1).',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: "Dark One's Own Luck",
                    source: 'PHB',
                    page: 109,
                    subclass_short_name: 'Fiend',
                    subclass_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            "Starting at 6th level, you can call on your patron to alter fate in your favor. When you make an ability check or a saving throw, you can use this feature to add a d10 to your roll. You can do so after seeing the initial roll but before any of the roll's effects occur.",
                            "Once you use this feature, you can't use it again until you finish a short or long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Fiendish Resilience',
                    source: 'PHB',
                    page: 109,
                    subclass_short_name: 'Fiend',
                    subclass_source: 'PHB',
                    level: 10,
                    entries: {
                        e: [
                            'Starting at 10th level, you can choose one damage type when you finish a short or long rest. You gain resistance to that damage type until you choose a different one with this feature. Damage from magical weapons or silver weapons ignores this resistance.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Hurl Through Hell',
                    source: 'PHB',
                    page: 109,
                    subclass_short_name: 'Fiend',
                    subclass_source: 'PHB',
                    level: 14,
                    entries: {
                        e: [
                            'Starting at 14th level, when you hit a creature with an attack, you can use this feature to instantly transport the target through the lower planes. The creature disappears and hurtles through a nightmare landscape.',
                            'At the end of your next turn, the target returns to the space it previously occupied, or the nearest unoccupied space. If the target is not a fiend, it takes 10d10 psychic damage as it reels from its horrific experience.',
                            "Once you use this feature, you can't use it again until you finish a long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'The Great Old One',
                    source: 'PHB',
                    page: 109,
                    subclass_short_name: 'Great Old One',
                    subclass_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            'Your patron is a mysterious entity whose nature is utterly foreign to the fabric of reality. It might come from the Far Realm, the space beyond reality, or it could be one of the elder gods known only in legends. Its motives are incomprehensible to mortals, and its knowledge so immense and ancient that even the greatest libraries pale in comparison to the vast secrets it holds. The Great Old One might be unaware of your existence or entirely indifferent to you, but the secrets you have learned allow you to draw your magic from it. Entities of this type include Ghaunadar, called That Which Lurks; Tharizdun, the Chained God; Dendar, the Night Serpent; Zargon, the Returner; Great Cthulhu; and other unfathomable beings.',
                            {
                                type: 'entries',
                                name: 'Expanded Spell List',
                                entries: [
                                    'The Great Old One lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.',
                                    {
                                        type: 'table',
                                        caption: 'Great Old One Expanded Spells',
                                        colLabels: ['Spell Level', 'Spells'],
                                        colStyles: ['col-2 text-center', 'col-10'],
                                        rows: [
                                            ['1st', "dissonant whispers, Tasha's hideous laughter"],
                                            ['2nd', 'detect thoughts, phantasmal force'],
                                            ['3rd', 'clairvoyance, sending'],
                                            ['4th', "dominate beast, Evard's black tentacles"],
                                            ['5th', 'dominate person, telekinesis'],
                                        ],
                                    },
                                ],
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Awakened Mind|Warlock||Great Old One||1',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Awakened Mind',
                    source: 'PHB',
                    page: 109,
                    subclass_short_name: 'Great Old One',
                    subclass_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            "Starting at 1st level, your alien knowledge gives you the ability to touch the minds of other creatures. You can telepathically speak to any creature you can see within 30 feet of you. You don't need to share a language with the creature for it to understand your telepathic utterances, but the creature must be able to understand at least one language.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Entropic Ward',
                    source: 'PHB',
                    page: 109,
                    subclass_short_name: 'Great Old One',
                    subclass_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            "At 6th level, you learn to magically ward yourself against attack and to turn an enemy's failed strike into good luck for yourself. When a creature makes an attack roll against you, you can use your reaction to impose disadvantage on that roll. If the attack misses you, your next attack roll against the creature has advantage if you make it before the end of your next turn.",
                            "Once you use this feature, you can't use it again until you finish a short or long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Thought Shield',
                    source: 'PHB',
                    page: 109,
                    subclass_short_name: 'Great Old One',
                    subclass_source: 'PHB',
                    level: 10,
                    entries: {
                        e: [
                            "Starting at 10th level, your thoughts can't be read by telepathy or other means unless you allow it. You also have resistance to psychic damage, and whenever a creature deals psychic damage to you, that creature takes the same amount of damage that you do.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Create Thrall',
                    source: 'PHB',
                    page: 109,
                    subclass_short_name: 'Great Old One',
                    subclass_source: 'PHB',
                    level: 14,
                    entries: {
                        e: [
                            "At 14th level, you gain the ability to infect a humanoid's mind with the alien magic of your patron. You can use your action to touch an incapacitated humanoid. That creature is then charmed by you until a remove curse spell is cast on it, the charmed condition is removed from it, or you use this feature again.",
                            'You can communicate telepathically with the charmed} creature as long as the two of you are on the same plane of existence.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'The Undying',
                    source: 'SCAG',
                    page: 139,
                    subclass_short_name: 'Undying',
                    subclass_source: 'SCAG',
                    level: 1,
                    entries: {
                        e: [
                            'Death holds no sway over your patron, who has unlocked the secrets of everlasting life, although such a prize—like all power—comes at a price. Once mortal, the Undying has seen mortal lifetimes pass like the seasons, like the flicker of endless days and nights. It has the secrets of the ages to share, secrets of life and death. Beings of this sort include Vecna, Lord of the Hand and the Eye; the dread Iuz; the lich-queen Vol; the Undying Court of Aerenal; Vlaakith, lich-queen of the githyanki; and the deathless wizard Fistandantalus.',
                            "In the Realms, Undying patrons include Larloch the Shadow King, legendary master of Warlock's Crypt, and Gilgeam, the God-King of Unther.",
                            {
                                type: 'entries',
                                name: 'Expanded Spell List',
                                entries: [
                                    'The Undying lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.',
                                    {
                                        type: 'table',
                                        caption: 'Undying Expanded Spells',
                                        colLabels: ['Spell Level', 'Spells'],
                                        colStyles: ['col-2 text-center', 'col-10'],
                                        rows: [
                                            ['1st', 'false life, ray of sickness'],
                                            ['2nd', 'blindness/deafness, silence'],
                                            ['3rd', 'feign death, speak with dead'],
                                            ['4th', 'aura of life, death ward'],
                                            ['5th', 'contagion, legend lore'],
                                        ],
                                    },
                                ],
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Among the Dead|Warlock||Undying|SCAG|1',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Among the Dead',
                    source: 'SCAG',
                    page: 139,
                    subclass_short_name: 'Undying',
                    subclass_source: 'SCAG',
                    level: 1,
                    entries: {
                        e: [
                            'Starting at 1st level, you learn the spare the dying cantrip, which counts as a warlock cantrip for you. You also have advantage on saving throws against any disease.',
                            "Additionally, undead have difficulty harming you. If an undead targets you directly with an attack or a harmful spell, that creature must make a Wisdom saving throw against your spell save DC (an undead needn't make the save when it includes you in an area effect, such as the explosion of fireball). On a failed save, the creature must choose a new target or forfeit targeting someone instead of you, potentially wasting the attack or spell. On a successful save, the creature is immune to this effect for 24 hours. An undead is also immune to this effect for 24 hours if you target it with an attack or a harmful spell.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Defy Death',
                    source: 'SCAG',
                    page: 139,
                    subclass_short_name: 'Undying',
                    subclass_source: 'SCAG',
                    level: 6,
                    entries: {
                        e: [
                            'Starting at 6th level, you can give yourself vitality when you cheat death or when you help someone else cheat it. You can regain hit points equal to 1d8 + your Constitution modifier (minimum of 1 hit point) when you succeed on a death saving throw or when you stabilize a creature with spare the dying.',
                            "Once you use this feature, you can't use it again until you finish a long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Undying Nature',
                    source: 'SCAG',
                    page: 139,
                    subclass_short_name: 'Undying',
                    subclass_source: 'SCAG',
                    level: 10,
                    entries: {
                        e: [
                            "Beginning at 10th level, you can hold your breath indefinitely, and you don't require food, water, or sleep, although you still require rest to reduce exhaustion and still benefit from finishing short and long rests.",
                            'In addition, you age at a slower rate. For every 10 years that pass, your body ages only 1 year, and you are immune to being magically aged.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Indestructible Life',
                    source: 'SCAG',
                    page: 139,
                    subclass_short_name: 'Undying',
                    subclass_source: 'SCAG',
                    level: 14,
                    entries: {
                        e: [
                            'When you reach 14th level, you partake some of the true secrets of the Undying. On your turn, you can use a bonus action to regain hit points equal to 1d8 + your warlock level. Additionally, if you put a severed body part of yours back in place when you use this feature, the part reattaches.',
                            "Once you use this feature, you can't use it again until you finish a short or long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'The Fathomless',
                    source: 'TCE',
                    page: 72,
                    subclass_short_name: 'Fathomless',
                    subclass_source: 'TCE',
                    level: 1,
                    entries: {
                        e: [
                            'You have plunged into a pact with the deeps. An entity of the ocean, the Elemental Plane of Water, or another otherworldly sea now allows you to draw on its thalassic power. Is it merely using you to learn about terrestrial realms, or does it want you to open cosmic floodgates and drown the world?',
                            "Perhaps you were born into a generational cult that venerates the Fathomless and its spawn. Or you might have been shipwrecked and on the brink of drowning when your patron's grasp offered you a chance at life. Whatever the reason for your pact, the sea and its unknown depths call to you.",
                            'Entities of the deep that might empower a warlock include krakens, ancient water elementals, godlike hallucinations dreamed into being by kuo-toa, merfolk demigods, and sea hag covens.',
                            {
                                type: 'entries',
                                name: 'Expanded Spell List',
                                entries: [
                                    '1st-level Fathomless feature',
                                    'The Fathomless lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.',
                                    {
                                        type: 'table',
                                        caption: 'Fathomless Expanded Spells',
                                        colLabels: ['Spell Level', 'Spells'],
                                        colStyles: ['col-2 text-center', 'col-10'],
                                        rows: [
                                            ['1st', 'create or destroy water, thunderwave'],
                                            ['2nd', 'gust of wind, silence'],
                                            ['3rd', 'lightning bolt, sleet storm'],
                                            ['4th', 'control water, summon elemental (water only)'],
                                            ['5th', "Bigby's hand (appears as a tentacle), cone of cold"],
                                        ],
                                    },
                                ],
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Tentacle of the Deeps|Warlock||Fathomless|TCE|1',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Gift of the Sea|Warlock||Fathomless|TCE|1',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Gift of the Sea',
                    source: 'TCE',
                    page: 72,
                    subclass_short_name: 'Fathomless',
                    subclass_source: 'TCE',
                    level: 1,
                    entries: {
                        e: [
                            '1st-level Fathomless feature',
                            'You gain a swimming speed of 40 feet, and you can breathe underwater.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Tentacle of the Deeps',
                    source: 'TCE',
                    page: 72,
                    subclass_short_name: 'Fathomless',
                    subclass_source: 'TCE',
                    level: 1,
                    entries: {
                        e: [
                            '1st-level Fathomless feature',
                            'You can magically summon a spectral tentacle that strikes at your foes. As a bonus action, you create a 10-foot-long tentacle at a point you can see within 60 feet of you. The tentacle lasts for 1 minute or until you use this feature to create another tentacle.',
                            'When you create the tentacle, you can make a melee spell attack against one creature within 10 feet of it. On a hit, the target takes 1d8 cold damage, and its speed is reduced by 10 feet until the start of your next turn. When you reach 10th level in this class, the damage increases to 2d8.',
                            'As a bonus action on your turn, you can move the tentacle up to 30 feet and repeat the attack.',
                            'You can summon the tentacle a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Guardian Coil',
                    source: 'TCE',
                    page: 72,
                    subclass_short_name: 'Fathomless',
                    subclass_source: 'TCE',
                    level: 6,
                    entries: {
                        e: [
                            '6th-level Fathomless feature',
                            'Your Tentacle of the Deeps can defend you and others, interposing itself between them and harm. When you or a creature you can see takes damage while within 10 feet of the tentacle, you can use your reaction to choose one of those creatures and reduce the damage to that creature by 1d8. When you reach 10th level in this class, the damage reduced by the tentacle increases to 2d8.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Oceanic Soul',
                    source: 'TCE',
                    page: 72,
                    subclass_short_name: 'Fathomless',
                    subclass_source: 'TCE',
                    level: 6,
                    entries: {
                        e: [
                            '6th-level Fathomless feature',
                            'You are now even more at home in the depths. You gain resistance to cold damage. In addition, when you are fully submerged, any creature that is also fully submerged can understand your speech, and you can understand theirs.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Grasping Tentacles',
                    source: 'TCE',
                    page: 72,
                    subclass_short_name: 'Fathomless',
                    subclass_source: 'TCE',
                    level: 10,
                    entries: {
                        e: [
                            '10th-level Fathomless feature',
                            "You learn the spell Evard's black tentacles. It counts as a warlock spell for you, but it doesn't count against the number of spells you know. You can also cast it once without a spell slot, and you regain the ability to do so when you finish a long rest.",
                            "Whenever you cast this spell, your patron's magic bolsters you, granting you a number of temporary hit points equal to your warlock level. Moreover, damage can't break your concentration on this spell.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Fathomless Plunge',
                    source: 'TCE',
                    page: 72,
                    subclass_short_name: 'Fathomless',
                    subclass_source: 'TCE',
                    level: 14,
                    entries: {
                        e: [
                            '14th-level Fathomless feature',
                            "You can magically open temporary conduits to watery destinations. As an action, you can teleport yourself and up to five other willing creatures that you can see within 30 feet of you. Amid a whirl of tentacles, you all vanish and then reappear up to 1 mile away in a body of water you've seen (pond size or larger) or within 30 feet of it, each of you appearing in an unoccupied space within 30 feet of the others.",
                            "Once you use this feature, you can't use it again until you finish a short or long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'The Genie',
                    source: 'TCE',
                    page: 73,
                    subclass_short_name: 'Genie',
                    subclass_source: 'TCE',
                    level: 1,
                    entries: {
                        e: [
                            'You have made a pact with one of the rarest kinds of genie, a noble genie. Such entities rule vast fiefs on the Elemental Planes and have great influence over lesser genies and elemental creatures. Noble genies are varied in their motivations, but most are arrogant and wield power that rivals that of lesser deities. They delight in turning the table on mortals, who often bind genies into servitude, and readily enter into pacts that expand their reach.',
                            "You choose your patron's kind or determine it randomly, using the Genie Kind table.",
                            {
                                type: 'table',
                                caption: 'Genie Kind',
                                colLabels: ['d4', 'Kind', 'Element'],
                                colStyles: ['col-2 text-center', 'col-5', 'col-5'],
                                rows: [
                                    [1, 'Dao', 'Earth'],
                                    [2, 'Djinni', 'Air'],
                                    [3, 'Efreeti', 'Fire'],
                                    [4, 'Marid', 'Water'],
                                ],
                            },
                            {
                                name: 'Expanded Spell List',
                                type: 'entries',
                                entries: [
                                    '1st-level Genie feature',
                                    "The Genie lets you choose from an expanded list of spells when you learn a warlock spell. The Genie Expanded Spells table shows the genie spells that are added to the warlock spell list for you, along with the spells associated in the table with your patron's kind: dao, djinni, efreeti, or marid.",
                                    {
                                        type: 'table',
                                        caption: 'Genie Expanded Spells',
                                        colLabels: [
                                            'Spell Level',
                                            'Genie Spells',
                                            'Dao Spells',
                                            'Djinni Spells',
                                            'Efreeti Spells',
                                            'Marid Spells',
                                        ],
                                        colStyles: [
                                            'col-1 text-center',
                                            'col-2-2',
                                            'col-2-2',
                                            'col-2-2',
                                            'col-2-2',
                                            'col-2-2',
                                        ],
                                        rows: [
                                            [
                                                '1st',
                                                'detect evil and good',
                                                'sanctuary',
                                                'thunderwave',
                                                'burning hands',
                                                'fog cloud',
                                            ],
                                            [
                                                '2nd',
                                                'phantasmal force',
                                                'spike growth',
                                                'gust of wind',
                                                'scorching ray',
                                                'blur',
                                            ],
                                            [
                                                '3rd',
                                                'create food and water',
                                                'meld into stone',
                                                'wind wall',
                                                'fireball',
                                                'sleet storm',
                                            ],
                                            [
                                                '4th',
                                                'phantasmal killer',
                                                'stone shape',
                                                'greater invisibility',
                                                'fire shield',
                                                'control water',
                                            ],
                                            [
                                                '5th',
                                                'creation',
                                                'wall of stone',
                                                'seeming}',
                                                'flame strike}',
                                                'cone of cold}',
                                            ],
                                            ['9th', 'wish', '—', '—', '—', '—'],
                                        ],
                                    },
                                ],
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: "Genie's Vessel|Warlock||Genie|TCE|1",
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: "Genie's Vessel",
                    source: 'TCE',
                    page: 73,
                    subclass_short_name: 'Genie',
                    subclass_source: 'TCE',
                    level: 1,
                    entries: {
                        e: [
                            '1st-level Genie feature',
                            "Your patron gifts you a magical vessel that grants you a measure of the genie's power. The vessel is a Tiny object, and you can use it as a spellcasting focus for your warlock spells. You decide what the object is, or you can determine what it is randomly by rolling on the Genie's Vessel table.",
                            {
                                type: 'table',
                                caption: "Genie's Vessel",
                                colLabels: ['d6', 'Vessel'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['1', 'Oil lamp'],
                                    ['2', 'Urn'],
                                    ['3', 'Ring with a compartment'],
                                    ['4', 'Stoppered bottle'],
                                    ['5', 'Hollow statuette'],
                                    ['6', 'Ornate lantern'],
                                ],
                            },
                            'While you are touching the vessel, you can use it in the following ways:',
                            {
                                type: 'options',
                                style: 'list-hang-notitle',
                                entries: [
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Bottled Respite|Warlock|TCE|Genie|TCE|1',
                                    },
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: "Genie's Wrath|Warlock|TCE|Genie|TCE|1",
                                    },
                                ],
                            },
                            "The vessel's AC equals your spell save DC. Its hit points equal your warlock level plus your proficiency bonus, and it is immune to poison and psychic damage.",
                            'If the vessel is destroyed or you lose it, you can perform a 1-hour ceremony to receive a replacement from your patron. This ceremony can be performed during a short or long rest, and the previous vessel is destroyed if it still exists. The vessel vanishes in a flare of elemental power when you die.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Elemental Gift',
                    source: 'TCE',
                    page: 73,
                    subclass_short_name: 'Genie',
                    subclass_source: 'TCE',
                    level: 6,
                    entries: {
                        e: [
                            '6th-level Genie feature',
                            "You begin to take on characteristics of your patron's kind. You now have resistance to a damage type determined by your patron's kind: bludgeoning (dao), thunder (djinni), fire (efreeti), or cold (marid).",
                            'In addition, as a bonus action, you can give yourself a flying speed of 30 feet that lasts for 10 minutes, during which you can hover. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Sanctuary Vessel',
                    source: 'TCE',
                    page: 73,
                    subclass_short_name: 'Genie',
                    subclass_source: 'TCE',
                    level: 10,
                    entries: {
                        e: [
                            '10th-level Genie feature',
                            "When you enter your Genie's Vessel via the Bottled Respite feature, you can now choose up to five willing creatures that you can see within 30 feet of you, and the chosen creatures are drawn into the vessel with you.",
                            'As a bonus action, you can eject any number of creatures from the vessel, and everyone is ejected if you leave or die or if the vessel is destroyed.',
                            'In addition, anyone (including you) who remains within the vessel for at least 10 minutes gains the benefit of finishing a short rest, and anyone can add your proficiency bonus to the number of hit points they regain if they spend any Hit Dice as part of a short rest there.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Limited Wish',
                    source: 'TCE',
                    page: 73,
                    subclass_short_name: 'Genie',
                    subclass_source: 'TCE',
                    level: 14,
                    entries: {
                        e: [
                            '14th-level Genie feature',
                            "You entreat your patron to grant you a small wish. As an action, you can speak your desire to your Genie's Vessel, requesting the effect of one spell that is 6th level or lower and has a casting time of 1 action. The spell can be from any class's spell list, and you don't need to meet the requirements in that spell, including costly components; the spell simply takes effect as part of this action.",
                            "Once you use this feature, you can't use it again until you finish 1d4 long rests.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'The Undead',
                    source: 'VRGR',
                    page: 30,
                    subclass_short_name: 'Undead',
                    subclass_source: 'VRGR',
                    level: 1,
                    entries: {
                        e: [
                            "You've made a pact with a deathless being, a creature that defies the cycle and life and death, forsaking its mortal shell so it might eternally pursue its unfathomable ambitions. For such beings, time and morality are fleeting things, the concerns of those for whom grains of sand still rush through life's hourglass. Having once been mortal themselves, these ancient undead know firsthand the paths of ambition and the routes past the doors of death. They eagerly share this profane knowledge, along with other secrets, with those who work their will among the living.",
                            'Beings of this type include the demilich Acererak, the vampire tyrant Kas the Bloody-Handed, the githyanki lich-queen Vlaakith, the dracolich Dragotha, the undead pharaoh Ankhtepot, and the elusive Darklord, Azalin Rex.',
                            {
                                type: 'entries',
                                name: 'Expanded Spell List',
                                entries: [
                                    '1st-level Undead feature',
                                    'The Undead lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.',
                                    {
                                        type: 'table',
                                        caption: 'Undead Expanded Spells',
                                        colLabels: ['Spell Level', 'Spells'],
                                        colStyles: ['col-2 text-center', 'col-10'],
                                        rows: [
                                            ['1st', 'bane, false life}'],
                                            ['2nd', 'blindness/deafness, phantasmal force'],
                                            ['3rd', 'phantom steed, speak with dead'],
                                            ['4th', 'death ward, greater invisibility'],
                                            ['5th', 'antilife shell, cloudkill'],
                                        ],
                                    },
                                ],
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Form of Dread|Warlock||Undead|VRGR|1',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Form of Dread',
                    source: 'VRGR',
                    page: 30,
                    subclass_short_name: 'Undead',
                    subclass_source: 'VRGR',
                    level: 1,
                    entries: {
                        e: [
                            '1st-level Undead feature',
                            "You manifest an aspect of your patron's dreadful power. As a bonus action, you transform for 1 minute. You gain the following benefits while transformed:",
                            {
                                type: 'list',
                                items: [
                                    'You gain temporary hit points equal to 1d10 + your warlock level.',
                                    'Once during each of your turns, when you hit a creature with an attack roll, you can force it to make a Wisdom saving throw, and if the saving throw fails, the target is frightened of you until the end of your next turn.',
                                    'You are immune to the frightened condition.',
                                ],
                            },
                            'You can transform a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
                            'The appearance of your Form of Dread reflects some aspect of your patron. For example, your form could be a shroud of shadows forming the crown and robes of your lich patron, or your body might glow with glyphs from ancient funerary rites and be surrounded by desert winds, suggesting your mummy patron.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Grave Touched',
                    source: 'VRGR',
                    page: 30,
                    subclass_short_name: 'Undead',
                    subclass_source: 'VRGR',
                    level: 6,
                    entries: {
                        e: [
                            '6th-level Undead feature',
                            "Your patron's powers have a profound effect on your body and magic. You don't need to eat, drink, or breathe.",
                            'In addition, once during each of your turns, when you hit a creature with an attack roll and roll damage against the creature, you can replace the damage type with necrotic damage. While you are using your Form of Dread, you can roll one additional damage die when determining the necrotic damage the target takes.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Necrotic Husk',
                    source: 'VRGR',
                    page: 30,
                    subclass_short_name: 'Undead',
                    subclass_source: 'VRGR',
                    level: 10,
                    entries: {
                        e: [
                            '10th-level Undead feature',
                            'Your connection to undeath and necrotic energy now saturates your body. You have resistance to necrotic damage. If you are transformed using your Form of Dread, you instead become immune to necrotic damage.',
                            "In addition, when you would be reduced to 0 hit points, you can use your reaction to drop to 1 hit point instead and cause your body to erupt with deathly energy. Each creature of your choice that is within 30 feet of you takes necrotic damage equal to 2d10 + your warlock level. You then gain 1 level of exhaustion. Once you use this reaction, you can't do so again until you finish 1d4 long rests.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Spirit Projection',
                    source: 'VRGR',
                    page: 30,
                    subclass_short_name: 'Undead',
                    subclass_source: 'VRGR',
                    level: 14,
                    entries: {
                        e: [
                            '14th-level Undead feature',
                            'Your spirit can become untethered from your physical form. As an action, you can project your spirit from your body. The body you leave behind is unconscious and in a state of suspended animation.',
                            "Your spirit resembles your mortal form in almost every way, replicating your game statistics but not your possessions. Any damage or other effects that apply to your spirit or physical body affects the other. Your spirit can remain outside your body for up to 1 hour or until your concentration is broken (as if concentrating on a spell). When your projection ends, your spirit returns to your body or your body magically teleports to your spirit's space (your choice).",
                            'While projecting your spirit, you gain the following benefits:',
                            {
                                type: 'list',
                                items: [
                                    'Your spirit and body gain resistance to bludgeoning, piercing, and slashing damage.',
                                    "When you cast a spell of the conjuration or necromancy school, the spell doesn't require verbal or somatic components or material components that lack a gold cost.",
                                    'You have a flying speed equal to your walking speed and can hover. You can move through creatures and objects as if they were difficult terrain, but you take 1d10 force damage if you end your turn inside a creature or an object.',
                                    'While you are using your Form of Dread, once during each of your turns when you deal necrotic damage to a creature, you regain hit points equal to half the amount of necrotic damage dealt.',
                                ],
                            },
                            "Once you use this feature, you can't do so again until you finish a long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'The Celestial',
                    source: 'XGE',
                    page: 54,
                    subclass_short_name: 'Celestial',
                    subclass_source: 'XGE',
                    level: 1,
                    entries: {
                        e: [
                            'Your patron is a powerful being of the Upper Planes. You have bound yourself to an ancient empyrean, solar, ki-rin, unicorn, or other entity that resides in the planes of everlasting bliss. Your pact with that being allows you to experience the barest touch of the holy light that illuminates the multiverse.',
                            'Being connected to such power can cause changes in your behavior and beliefs. You might find yourself driven to annihilate the undead, to defeat fiends, and to protect the innocent. At times, your heart might also be filled with a longing for the celestial realm of your patron, and a desire to wander that paradise for the rest of your days. But you know that your mission is among mortals for now, and that your pact binds you to bring light to the dark places of the world.',
                            {
                                type: 'entries',
                                name: 'Expanded Spell List',
                                entries: [
                                    'The Celestial lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.',
                                    {
                                        type: 'table',
                                        caption: 'Celestial Expanded Spells',
                                        colLabels: ['Spell Level', 'Spells'],
                                        colStyles: ['col-2 text-center', 'col-10'],
                                        rows: [
                                            ['1st', 'cure wounds, guiding bolt'],
                                            ['2nd', 'flaming sphere, lesser restoration'],
                                            ['3rd', 'daylight, revivify'],
                                            ['4th', 'guardian of faith, wall of fire'],
                                            ['5th', 'flame strike, greater restoration'],
                                        ],
                                    },
                                ],
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Bonus Cantrips|Warlock||Celestial|XGE|1',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Healing Light|Warlock||Celestial|XGE|1',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Bonus Cantrips',
                    source: 'XGE',
                    page: 54,
                    subclass_short_name: 'Celestial',
                    subclass_source: 'XGE',
                    level: 1,
                    entries: {
                        e: [
                            "At 1st level, you learn the sacred flame and light cantrips. They count as warlock cantrips for you, but they don't count against your number of cantrips known.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Healing Light',
                    source: 'XGE',
                    page: 54,
                    subclass_short_name: 'Celestial',
                    subclass_source: 'XGE',
                    level: 1,
                    entries: {
                        e: [
                            'At 1st level, you gain the ability to channel celestial energy to heal wounds. You have a pool of d6s that you spend to fuel this healing. The number of dice in the pool equals 1 + your warlock level.',
                            'As a bonus action, you can heal one creature you can see within 60 feet of you, spending dice from the pool. The maximum number of dice you can spend at once equals your Charisma modifier (minimum of one die). Roll the dice you spend, add them together, and restore a number of hit points equal to the total.',
                            'Your pool regains all expended dice when you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Radiant Soul',
                    source: 'XGE',
                    page: 54,
                    subclass_short_name: 'Celestial',
                    subclass_source: 'XGE',
                    level: 6,
                    entries: {
                        e: [
                            'Starting at 6th level, your link to the Celestial allows you to serve as a conduit for radiant energy. You have resistance to radiant damage, and when you cast a spell that deals radiant or fire damage, you can add your Charisma modifier to one radiant or fire damage roll of that spell against one of its targets.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Celestial Resilience',
                    source: 'XGE',
                    page: 54,
                    subclass_short_name: 'Celestial',
                    subclass_source: 'XGE',
                    level: 10,
                    entries: {
                        e: [
                            'Starting at 10th level, you gain temporary hit points whenever you finish a short or long rest. These temporary hit points equal your warlock level + your Charisma modifier. Additionally, choose up to five creatures you can see at the end of the rest. Those creatures each gain temporary hit points equal to half your warlock level + your Charisma modifier.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Searing Vengeance',
                    source: 'XGE',
                    page: 54,
                    subclass_short_name: 'Celestial',
                    subclass_source: 'XGE',
                    level: 14,
                    entries: {
                        e: [
                            'Starting at 14th level, the radiant energy you channel allows you to resist death. When you have to make a death saving throw at the start of your turn, you can instead spring back to your feet with a burst of radiant energy. You regain hit points equal to half your hit point maximum, and then you stand up if you so choose. Each creature of your choice that is within 30 feet of you takes radiant damage equal to 2d8 + your Charisma modifier, and it is blinded until the end of the current turn.',
                            "Once you use this feature, you can't use it again until you finish a long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'The Hexblade',
                    source: 'XGE',
                    page: 55,
                    subclass_short_name: 'Hexblade',
                    subclass_source: 'XGE',
                    level: 1,
                    entries: {
                        e: [
                            'You have made your pact with a mysterious entity from the Shadowfell—a force that manifests in sentient magic weapons carved from the stuff of shadow. The mighty sword Blackrazor is the most notable of these weapons, which have been spread across the multiverse over the ages. The shadowy force behind these weapons can offer power to warlocks who form pacts with it. Many hexblade warlocks create weapons that emulate those formed in the Shadowfell. Others forgo such arms, content to weave the dark magic of that plane into their spellcasting.',
                            'Because the Raven Queen is known to have forged the first of these weapons, many sages speculate that she and the force are one and that the weapons, along with hexblade warlocks, are tools she uses to manipulate events on the Material Plane to her inscrutable ends.',
                            {
                                type: 'entries',
                                name: 'Expanded Spell List',
                                entries: [
                                    'The Hexblade lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.',
                                    {
                                        type: 'table',
                                        caption: 'Hexblade Expanded Spells',
                                        colLabels: ['Spell Level', 'Spells'],
                                        colStyles: ['col-2 text-center', 'col-10'],
                                        rows: [
                                            ['1st', 'shield, wrathful smite'],
                                            ['2nd', 'blur, branding smite'],
                                            ['3rd', 'blink, elemental weapon'],
                                            ['4th', 'phantasmal killer, staggering smite'],
                                            ['5th', 'banishing smite, cone of cold'],
                                        ],
                                    },
                                ],
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: "Hexblade's Curse|Warlock||Hexblade|XGE|1",
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Hex Warrior|Warlock||Hexblade|XGE|1',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Hex Warrior',
                    source: 'XGE',
                    page: 55,
                    subclass_short_name: 'Hexblade',
                    subclass_source: 'XGE',
                    level: 1,
                    entries: {
                        e: [
                            'At 1st level, you acquire the training necessary to effectively arm yourself for battle. You gain proficiency with medium armor, shields, and martial weapons.',
                            "The influence of your patron also allows you to mystically channel your will through a particular weapon. Whenever you finish a long rest, you can touch one weapon that you are proficient with and that lacks the two-handed property. When you attack with that weapon, you can use your Charisma modifier, instead of Strength or Dexterity, for the attack and damage rolls. This benefit lasts until you finish a long rest. If you later gain the Pact of the Blade feature, this benefit extends to every pact weapon you conjure with that feature, no matter the weapon's type.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: "Hexblade's Curse",
                    source: 'XGE',
                    page: 55,
                    subclass_short_name: 'Hexblade',
                    subclass_source: 'XGE',
                    level: 1,
                    entries: {
                        e: [
                            'Starting at 1st level, you gain the ability to place a baleful curse on someone. As a bonus action, choose one creature you can see within 30 feet of you. The target is cursed for 1 minute. The curse ends early if the target dies, you die, or you are incapacitated. Until the curse ends, you gain the following benefits:',
                            {
                                type: 'list',
                                items: [
                                    'You gain a bonus to damage rolls against the cursed target. The bonus equals your proficiency bonus.',
                                    'Any attack roll you make against the cursed target is a critical hit on a roll of 19 or 20 on the d20.',
                                    'If the cursed target dies, you regain hit points equal to your warlock level + your Charisma modifier (minimum of 1 hit point).',
                                ],
                            },
                            "You can't use this feature again until you finish a short or long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Accursed Specter',
                    source: 'XGE',
                    page: 55,
                    subclass_short_name: 'Hexblade',
                    subclass_source: 'XGE',
                    level: 6,
                    entries: {
                        e: [
                            'Starting at 6th level, you can curse the soul of a person you slay, temporarily binding it to your service. When you slay a humanoid, you can cause its spirit to rise from its corpse as a specter, the statistics for which are in the Monster Manual. When the specter appears, it gains temporary hit points equal to half your warlock level. Roll initiative for the specter, which has its own turns. It obeys your verbal commands, and it gains a special bonus to its attack rolls equal to your Charisma modifier (minimum of +0).',
                            'The specter remains in your service until the end of your next long rest, at which point it vanishes to the afterlife.',
                            "Once you bind a specter with this feature, you can't use the feature again until you finish a long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Armor of Hexes',
                    source: 'XGE',
                    page: 55,
                    subclass_short_name: 'Hexblade',
                    subclass_source: 'XGE',
                    level: 10,
                    entries: {
                        e: [
                            "At 10th level, your hex grows more powerful. If the target cursed by your Hexblade's Curse hits you with an attack roll, you can use your reaction to roll a d6. On a 4 or higher, the attack instead misses you, regardless of its roll.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Master of Hexes',
                    source: 'XGE',
                    page: 55,
                    subclass_short_name: 'Hexblade',
                    subclass_source: 'XGE',
                    level: 14,
                    entries: {
                        e: [
                            "Starting at 14th level, you can spread your Hexblade's Curse from a slain creature to another creature. When the creature cursed by your Hexblade's Curse dies, you can apply the curse to a different creature you can see within 30 feet of you, provided you aren't incapacitated. When you apply the curse in this way, you don't regain hit points from the death of the previously cursed creature.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Bottled Respite',
                    source: 'TCE',
                    page: 73,
                    subclass_short_name: 'Genie',
                    subclass_source: 'TCE',
                    level: 1,
                    entries: {
                        e: [
                            "As an action, you can magically vanish and enter your vessel, which remains in the space you left. The interior of the vessel is an extradimensional space in the shape of a 20-foot-radius cylinder, 20 feet high, and resembles your vessel. The interior is appointed with cushions and low tables and is a comfortable temperature. While inside, you can hear the area around your vessel as if you were in its space. You can remain inside the vessel up to a number of hours equal to twice your proficiency bonus. You exit the vessel early if you use a bonus action to leave, if you die, or if the vessel is destroyed. When you exit the vessel, you appear in the unoccupied space closest to it. Any objects left in the vessel remain there until carried out, and if the vessel is destroyed, every object stored there harmlessly appears in the unoccupied spaces closest to the vessel's former space. Once you enter the vessel, you can't enter again until you finish a long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: "Genie's Wrath",
                    source: 'TCE',
                    page: 73,
                    subclass_short_name: 'Genie',
                    subclass_source: 'TCE',
                    level: 1,
                    entries: {
                        e: [
                            'Once during each of your turns when you hit with an attack roll, you can deal extra damage to the target equal to your proficiency bonus. The type of this damage is determined by your patron: bludgeoning (dao), thunder (djinni), fire (efreeti), or cold (marid).',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '468deff3-41eb-4ddb-a635-a39d251eaf62',
                },
                {
                    name: 'Draconic Bloodline',
                    source: 'PHB',
                    page: 102,
                    subclass_short_name: 'Draconic',
                    subclass_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            'Your innate magic comes from draconic magic that was mingled with your blood or that of your ancestors. Most often, sorcerers with this origin trace their descent back to a mighty sorcerer of ancient times who made a bargain with a dragon or who might even have claimed a dragon parent. Some of these bloodlines are well established in the world, but most are obscure. Any given sorcerer could be the first of a new bloodline, as a result of a pact or some other exceptional circumstance.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Dragon Ancestor|Sorcerer||Draconic||1',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Draconic Resilience|Sorcerer||Draconic||1',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Draconic Resilience',
                    source: 'PHB',
                    page: 102,
                    subclass_short_name: 'Draconic',
                    subclass_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            'As magic flows through your body, it causes physical traits of your dragon ancestors to emerge. At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class.',
                            "Additionally, parts of your skin are covered by a thin sheen of dragon-like scales. When you aren't wearing armor, your AC equals 13 + your Dexterity modifier.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Dragon Ancestor',
                    source: 'PHB',
                    page: 102,
                    subclass_short_name: 'Draconic',
                    subclass_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            'At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.',
                            {
                                type: 'table',
                                caption: 'Draconic Ancestry',
                                colLabels: ['Dragon', 'Damage Type'],
                                colStyles: ['col-6 text-center', 'col-6 text-center'],
                                rows: [
                                    ['Black', 'Acid'],
                                    ['Blue', 'Lightning'],
                                    ['Brass', 'Fire'],
                                    ['Bronze', 'Lightning'],
                                    ['Copper', 'Acid'],
                                    ['Gold', 'Fire'],
                                    ['Green', 'Poison'],
                                    ['Red', 'Fire'],
                                    ['Silver', 'Cold'],
                                    ['White', 'Cold'],
                                ],
                            },
                            'You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Elemental Affinity',
                    source: 'PHB',
                    page: 102,
                    subclass_short_name: 'Draconic',
                    subclass_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            'Starting at 6th level, when you cast a spell that deals damage of the type associated with your draconic ancestry, you can add your Charisma modifier to one damage roll of that spell. At the same time, you can spend 1 sorcery point to gain resistance to that damage type for 1 hour.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Dragon Wings',
                    source: 'PHB',
                    page: 102,
                    subclass_short_name: 'Draconic',
                    subclass_source: 'PHB',
                    level: 14,
                    entries: {
                        e: [
                            'At 14th level, you gain the ability to sprout a pair of dragon wings from your back, gaining a flying speed equal to your current speed. You can create these wings as a bonus action on your turn. They last until you dismiss them as a bonus action on your turn.',
                            "You can't manifest your wings while wearing armor unless the armor is made to accommodate them, and clothing not made to accommodate your wings might be destroyed when you manifest them.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Draconic Presence',
                    source: 'PHB',
                    page: 102,
                    subclass_short_name: 'Draconic',
                    subclass_source: 'PHB',
                    level: 18,
                    entries: {
                        e: [
                            'Beginning at 18th level, you can channel the dread presence of your dragon ancestor, causing those around you to become awestruck or frightened. As an action, you can spend 5 sorcery points to draw on this power and exude an aura of awe or fear (your choice) to a distance of 60 feet. For 1 minute or until you lose your concentration (as if you were casting a concentration spell), each hostile creature that starts its turn in this aura must succeed on a Wisdom saving throw or be charmed (if you chose awe) or frightened (if you chose fear) until the aura ends. A creature that succeeds on this saving throw is immune to your aura for 24 hours.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Wild Magic',
                    source: 'PHB',
                    page: 103,
                    subclass_short_name: 'Wild',
                    subclass_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            'Your innate magic comes from the wild forces of chaos that underlie the order of creation. You might have endured exposure to some form of raw magic, perhaps through a planar portal leading to Limbo, the Elemental Planes, or the mysterious Far Realm. Perhaps you were blessed by a powerful fey creature or marked by a demon. Or your magic could be a fluke of your birth, with no apparent cause or reason. However it came to be, this chaotic magic churns within you, waiting for any outlet.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Wild Magic Surge|Sorcerer||Wild||1',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Tides of Chaos|Sorcerer||Wild||1',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Tides of Chaos',
                    source: 'PHB',
                    page: 103,
                    subclass_short_name: 'Wild',
                    subclass_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            'Starting at 1st level, you can manipulate the forces of chance and chaos to gain advantage on one attack roll, ability check, or saving throw. Once you do so, you must finish a long rest before you can use this feature again.',
                            'Any time before you regain the use of this feature, the DM can have you roll on the Wild Magic Surge table immediately after you cast a sorcerer spell of 1st level or higher. You then regain the use of this feature.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Wild Magic Surge',
                    source: 'PHB',
                    page: 103,
                    subclass_short_name: 'Wild',
                    subclass_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            'Starting when you choose this origin at 1st level, your spellcasting can unleash surges of untamed magic. Immediately after you cast a sorcerer spell of 1st level or higher, the DM can have you roll a d20. If you roll a 1, roll on the Wild Magic Surge table to create a random magical effect. A Wild Magic Surge can happen once per turn.',
                            "If a Wild Magic effect is a spell, it's too wild to be affected by Metamagic. If it normally requires concentration, it doesn't require concentration in this case; the spell lasts for its full duration.",
                            {
                                type: 'table',
                                caption: 'Wild Magic Surge',
                                colLabels: ['d100', 'Effect'],
                                colStyles: ['col-1 text-center', 'col-11'],
                                rows: [
                                    [
                                        '01-02',
                                        'Roll on this table at the start of each of your turns for the next minute, ignoring this result on subsequent rolls.',
                                    ],
                                    [
                                        '03-04',
                                        'For the next minute, you can see any invisible creature if you have line of sight to it.',
                                    ],
                                    [
                                        '05-06',
                                        'A modron chosen and controlled by the DM appears in an unoccupied space within 5 feet of you, then disappears 1 minute later.',
                                    ],
                                    [
                                        '07-08',
                                        'You cast fireball as a 3rd-level spell centered on yourself.',
                                    ],
                                    ['09-10', 'You cast magic missile as a 5th-level spell.'],
                                    [
                                        '11-12',
                                        'Roll a d10. Your height changes by a number of inches equal to the roll. If the roll is odd, you shrink. If the roll is even, you grow.',
                                    ],
                                    ['13-14', 'You cast confusion centered on yourself.'],
                                    [
                                        '15-16',
                                        'For the next minute, you regain 5 hit points at the start of each of your turns.',
                                    ],
                                    [
                                        '17-18',
                                        'You grow a long beard made of feathers that remains until you sneeze, at which point the feathers explode out from your face.',
                                    ],
                                    ['19-20', 'You cast grease centered on yourself.'],
                                    [
                                        '21-22',
                                        'Creatures have disadvantage on saving throws against the next spell you cast in the next minute that involves a saving throw.',
                                    ],
                                    [
                                        '23-24',
                                        'Your skin turns a vibrant shade of blue. A remove curse spell can end this effect.',
                                    ],
                                    [
                                        '25-26',
                                        'An eye appears on your forehead for the next minute. During that time, you have advantage on Wisdom (Perception) checks that rely on sight.',
                                    ],
                                    [
                                        '27-28',
                                        'For the next minute, all your spells with a casting time of 1 action have a casting time of 1 bonus action.',
                                    ],
                                    [
                                        '29-30',
                                        'You teleport up to 60 feet to an unoccupied space of your choice that you can see.',
                                    ],
                                    [
                                        '31-32',
                                        'You are transported to the Astral Plane until the end of your next turn, after which time you return to the space you previously occupied or the nearest unoccupied space if that space is occupied.',
                                    ],
                                    [
                                        '33-34',
                                        'Maximize the damage of the next damaging spell you cast within the next minute.',
                                    ],
                                    [
                                        '35-36',
                                        'Roll a d10. Your age changes by a number of years equal to the roll. If the roll is odd, you get younger (minimum 1 year old). If the roll is even, you get older.',
                                    ],
                                    [
                                        '37-38',
                                        '1d6 flumphs controlled by the DM appear in unoccupied spaces within 60 feet of you and are frightened of you. They vanish after 1 minute.',
                                    ],
                                    ['39-40', 'You regain 2d10 hit points.'],
                                    [
                                        '41-42',
                                        'You turn into a potted plant until the start of your next turn. While a plant, you are incapacitated and have vulnerability to all damage. If you drop to 0 hit points, your pot breaks, and your form reverts.',
                                    ],
                                    [
                                        '43-44',
                                        'For the next minute, you can teleport up to 20 feet as a bonus action on each of your turns.',
                                    ],
                                    ['45-46', 'You cast levitate on yourself.'],
                                    [
                                        '47-48',
                                        'A unicorn controlled by the DM appears in a space within 5 feet of you, then disappears 1 minute later.',
                                    ],
                                    [
                                        '49-50',
                                        "You can't speak for the next minute. Whenever you try, pink bubbles float out of your mouth.",
                                    ],
                                    [
                                        '51-52',
                                        'A spectral shield hovers near you for the next minute, granting you a +2 bonus to AC and immunity to magic missile.',
                                    ],
                                    [
                                        '53-54',
                                        'You are immune to being intoxicated by alcohol for the next 5d6 days.',
                                    ],
                                    ['55-56', 'Your hair falls out but grows back within 24 hours.'],
                                    [
                                        '57-58',
                                        "For the next minute, any flammable object you touch that isn't being worn or carried by another creature bursts into flame.",
                                    ],
                                    ['59-60', 'You regain your lowest-level expended spell slot.'],
                                    ['61-62', 'For the next minute, you must shout when you speak.'],
                                    ['63-64', 'You cast fog cloud centered on yourself.'],
                                    [
                                        '65-66',
                                        'Up to three creatures you choose within 30 feet of you take 4d10 lightning damage.',
                                    ],
                                    [
                                        '67-68',
                                        'You are frightened by the nearest creature until the end of your next turn.',
                                    ],
                                    [
                                        '69-70',
                                        'Each creature within 30 feet of you becomes invisible for the next minute. The invisibility ends on a creature when it attacks or casts a spell.',
                                    ],
                                    ['71-72', 'You gain resistance to all damage for the next minute.'],
                                    [
                                        '73-74',
                                        'A random creature within 60 feet of you becomes poisoned for 1d4 hours.',
                                    ],
                                    [
                                        '75-76',
                                        'You glow with bright light in a 30-foot radius for the next minute. Any creature that ends its turn within 5 feet of you is blinded until the end of its next turn.',
                                    ],
                                    [
                                        '77-78',
                                        "You cast polymorph on yourself. If you fail the saving throw, you turn into a sheep for the spell's duration.",
                                    ],
                                    [
                                        '79-80',
                                        'Illusory butterflies and flower petals flutter in the air within 10 feet of you for the next minute.',
                                    ],
                                    ['81-82', 'You can take one additional action immediately.'],
                                    [
                                        '83-84',
                                        'Each creature within 30 feet of you takes 1d10 necrotic damage. You regain hit points equal to the sum of the necrotic damage dealt.',
                                    ],
                                    ['85-86', 'You cast mirror image.'],
                                    [
                                        '87-88',
                                        'You cast fly on a random creature within 60 feet of you.',
                                    ],
                                    [
                                        '89-90',
                                        "You become invisible for the next minute. During that time, other creatures can't hear you. The invisibility ends if you attack or cast a spell.",
                                    ],
                                    [
                                        '91-92',
                                        'If you die within the next minute, you immediately come back to life as if by the reincarnate spell.',
                                    ],
                                    [
                                        '93-94',
                                        'Your size increases by one size category for the next minute.',
                                    ],
                                    [
                                        '95-96',
                                        'You and all creatures within 30 feet of you gain vulnerability to piercing damage for the next minute.',
                                    ],
                                    [
                                        '97-98',
                                        'You are surrounded by faint, ethereal music for the next minute.',
                                    ],
                                    ['99-00', 'You regain all expended sorcery points.'],
                                ],
                                data: {
                                    tableInclude: true,
                                },
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Bend Luck',
                    source: 'PHB',
                    page: 103,
                    subclass_short_name: 'Wild',
                    subclass_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            "Starting at 6th level, you have the ability to twist fate using your wild magic. When another creature you can see makes an attack roll, an ability check, or a saving throw, you can use your reaction and spend 2 sorcery points to roll 1d4 and apply the number rolled as a bonus or penalty (your choice) to the creature's roll. You can do so after the creature rolls but before any effects of the roll occur.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Controlled Chaos',
                    source: 'PHB',
                    page: 103,
                    subclass_short_name: 'Wild',
                    subclass_source: 'PHB',
                    level: 14,
                    entries: {
                        e: [
                            'At 14th level, you gain a modicum of control over the surges of your wild magic. Whenever you roll on the Wild Magic Surge table, you can roll twice and use either number.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Spell Bombardment',
                    source: 'PHB',
                    page: 103,
                    subclass_short_name: 'Wild',
                    subclass_source: 'PHB',
                    level: 18,
                    entries: {
                        e: [
                            'Beginning at 18th level, the harmful energy of your spells intensifies. When you roll damage for a spell and roll the highest number possible on any of the dice, choose one of those dice, roll it again and add that roll to the damage. You can use the feature only once per turn.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Pyromancer (PSK)',
                    source: 'PSK',
                    page: 9,
                    subclass_short_name: 'Pyromancer (PSK)',
                    subclass_source: 'PSK',
                    level: 1,
                    entries: {
                        e: [
                            'Your innate magic manifests in fire. You are your fire, and your fire is you.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Heart of Fire|Sorcerer||Pyromancer (PSK)|PSK|1',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Heart of Fire',
                    source: 'PSK',
                    page: 9,
                    subclass_short_name: 'Pyromancer (PSK)',
                    subclass_source: 'PSK',
                    level: 1,
                    entries: {
                        e: [
                            'At 1st level, whenever you start casting a spell of 1st level or higher that deals fire damage, fiery magic erupts from you. This eruption causes creatures of your choice that you can see within 10 feet of you to take fire damage equal to half your sorcerer level (minimum of 1).',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Fire in the Veins',
                    source: 'PSK',
                    page: 9,
                    subclass_short_name: 'Pyromancer (PSK)',
                    subclass_source: 'PSK',
                    level: 6,
                    entries: {
                        e: [
                            'At 6th level, you gain resistance to fire damage. In addition, spells you cast ignore resistance to fire damage.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: "Pyromancer's Fury",
                    source: 'PSK',
                    page: 9,
                    subclass_short_name: 'Pyromancer (PSK)',
                    subclass_source: 'PSK',
                    level: 14,
                    entries: {
                        e: [
                            'Starting at 14th level, when you are hit by a melee attack, you can use your reaction to deal fire damage to the attacker. The damage equals your sorcerer level, and ignores resistance to fire damage.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Fiery Soul',
                    source: 'PSK',
                    page: 9,
                    subclass_short_name: 'Pyromancer (PSK)',
                    subclass_source: 'PSK',
                    level: 18,
                    entries: {
                        e: [
                            'At 18th level, you gain immunity to fire damage. In addition, any spell or effect you create ignores resistance to fire damage and treats immunity to fire damage as resistance to fire damage.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Aberrant Mind',
                    source: 'TCE',
                    page: 66,
                    subclass_short_name: 'Aberrant Mind',
                    subclass_source: 'TCE',
                    level: 1,
                    entries: {
                        e: [
                            'An alien influence has wrapped its tendrils around your mind, giving you psionic power. You can now touch other minds with that power and alter the world around you by using it to control the magical energy of the multiverse. Will this power shine from you as a hopeful beacon to others? Or will you be a source of terror to those who feel the stab of your mind and witness the strange manifestations of your might?',
                            'As an Aberrant Mind sorcerer, you decide how you acquired your powers. Were you born with them? Or did an event later in life leave you shining with psionic awareness? Consult the Aberrant Origins table for a possible origin of your power.',
                            {
                                type: 'table',
                                caption: 'Aberrant Origins',
                                colLabels: ['d6', 'Origin'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    [
                                        '1',
                                        "You were exposed to the Far Realm's warping influence. You are convinced that a tentacle is now growing on you, but no one else can see it.",
                                    ],
                                    [
                                        '2',
                                        'A psychic wind from the Astral Plane carried psionic energy to you. When you use your powers, faint motes of light sparkle around you.',
                                    ],
                                    [
                                        '3',
                                        'You once suffered the dominating powers of an aboleth, leaving a psychic splinter in your mind.',
                                    ],
                                    [
                                        '4',
                                        'You were implanted with a mind flayer tadpole, but the ceremorphosis never completed. And now its psionic power is yours. When you use it, your flesh shines with a strange mucus.',
                                    ],
                                    [
                                        '5',
                                        'As a child, you had an imaginary friend that looked like a flumph or a strange platypus-like creature. One day, it gifted you with psionic powers, which have ended up being not so imaginary.',
                                    ],
                                    [
                                        '6',
                                        'Your nightmares whisper the truth to you: your psionic powers are not your own. You draw them from your parasitic twin!',
                                    ],
                                ],
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Psionic Spells|Sorcerer||Aberrant Mind|TCE|1',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Telepathic Speech|Sorcerer||Aberrant Mind|TCE|1',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Psionic Spells',
                    source: 'TCE',
                    page: 66,
                    subclass_short_name: 'Aberrant Mind',
                    subclass_source: 'TCE',
                    level: 1,
                    entries: {
                        e: [
                            '1st-level Aberrant Mind feature',
                            "You learn additional spells when you reach certain levels in this class, as shown on the Psionic Spells table. Each of these spells counts as a sorcerer spell for you, but it doesn't count against the number of sorcerer spells you know.",
                            'Whenever you gain a sorcerer level, you can replace one spell you gained from this feature with another spell of the same level. The new spell must be a divination or an enchantment spell from the sorcerer, warlock, or wizard spell list.',
                            {
                                type: 'table',
                                caption: 'Psionic Spells',
                                colLabels: ['Sorcerer Level', 'Spells'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['1st', 'arms of Hadar, dissonant whispers, mind sliver'],
                                    ['3rd', 'calm emotions, detect thoughts'],
                                    ['5th', 'hunger of Hadar, sending'],
                                    ['7th', "Evard's black tentacles, summon aberration"],
                                    ['9th', "Rary's telepathic bond, telekinesis"],
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Telepathic Speech',
                    source: 'TCE',
                    page: 66,
                    subclass_short_name: 'Aberrant Mind',
                    subclass_source: 'TCE',
                    level: 1,
                    entries: {
                        e: [
                            '1st-level Aberrant Mind feature',
                            'You can form a telepathic connection between your mind and the mind of another. As a bonus action, choose one creature you can see within 30 feet of you. You and the chosen creature can speak telepathically with each other while the two of you are within a number of miles of each other equal to your Charisma modifier (minimum of 1 mile). To understand each other, you each must speak mentally in a language the other knows.',
                            'The telepathic connection lasts for a number of minutes equal to your sorcerer level. It ends early if you are incapacitated or die or if you use this ability to form a connection with a different creature.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Psionic Sorcery',
                    source: 'TCE',
                    page: 66,
                    subclass_short_name: 'Aberrant Mind',
                    subclass_source: 'TCE',
                    level: 6,
                    entries: {
                        e: [
                            '6th-level Aberrant Mind feature',
                            "When you cast any spell of 1st level or higher from your Psionic Spells feature, you can cast it by expending a spell slot as normal or by spending a number of sorcery points equal to the spell's level.",
                            'If you cast the spell using sorcery points, it requires no verbal or somatic components, and it requires no material components, unless they are consumed by the spell.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Psychic Defenses',
                    source: 'TCE',
                    page: 66,
                    subclass_short_name: 'Aberrant Mind',
                    subclass_source: 'TCE',
                    level: 6,
                    entries: {
                        e: [
                            '6th-level Aberrant Mind feature',
                            'You gain resistance to psychic damage, and you have advantage on saving throws against being charmed or frightened.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Revelation in Flesh',
                    source: 'TCE',
                    page: 66,
                    subclass_short_name: 'Aberrant Mind',
                    subclass_source: 'TCE',
                    level: 14,
                    entries: {
                        e: [
                            '14th-level Aberrant Mind feature',
                            'You can unleash the aberrant truth hidden within yourself. As a bonus action, you can spend 1 or more sorcery points to magically transform your body for 10 minutes. For each sorcery point you spend, you can gain one of the following benefits of your choice, the effects of which last until the transformation ends:',
                            {
                                type: 'list',
                                items: [
                                    "You can see any invisible creature within 60 feet of you, provided it isn't behind total cover. Your eyes also turn black or become writhing sensory tendrils.",
                                    'You gain a flying speed equal to your walking speed, and you can hover. As you fly, your skin glistens with mucus or shines with an otherworldly light.',
                                    'You gain a swimming speed equal to twice your walking speed, and you can breathe underwater. Moreover, gills grow from your neck or fan out from behind your ears, your fingers become webbed, or you grow writhing cilia that extend through your clothing.',
                                    'Your body, along with any equipment you are wearing or carrying, becomes slimy and pliable. You can move through any space as narrow as 1 inch without squeezing, and you can spend 5 feet of movement to escape from nonmagical restraints or being grappled.',
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Warping Implosion',
                    source: 'TCE',
                    page: 66,
                    subclass_short_name: 'Aberrant Mind',
                    subclass_source: 'TCE',
                    level: 18,
                    entries: {
                        e: [
                            '18th-level Aberrant Mind feature',
                            "You can unleash your aberrant power as a space-warping anomaly. As an action, you can teleport to an unoccupied space you can see within 120 feet of you. Immediately after you disappear, each creature within 30 feet of the space you left must make a Strength saving throw. On a failed save, a creature takes 3d10 force damage and is pulled straight toward the space you left, ending in an unoccupied space as close to your former space as possible. On a successful save, the creature takes half as much damage and isn't pulled.",
                            "Once you use this feature, you can't do so again until you finish a long rest, unless you spend 5 sorcery points to use it again.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Clockwork Soul',
                    source: 'TCE',
                    page: 68,
                    subclass_short_name: 'Clockwork Soul',
                    subclass_source: 'TCE',
                    level: 1,
                    entries: {
                        e: [
                            'The cosmic force of order has suffused you with magic. That power arises from Mechanus or a realm like it-a plane of existence shaped entirely by clockwork efficiency. You, or someone from your lineage, might have become entangled in the machinations of the modrons, the orderly beings who inhabit Mechanus. Perhaps your ancestor even took part in the Great Modron March. Whatever its origin within you, the power of order can seem strange to others, but for you, it is part of a vast and glorious system.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Clockwork Magic|Sorcerer||Clockwork Soul|TCE|1',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Restore Balance|Sorcerer||Clockwork Soul|TCE|1',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Clockwork Magic',
                    source: 'TCE',
                    page: 68,
                    subclass_short_name: 'Clockwork Soul',
                    subclass_source: 'TCE',
                    level: 1,
                    entries: {
                        e: [
                            '1st-level Clockwork Soul feature',
                            "You learn additional spells when you reach certain levels in this class, as shown on the Clockwork Spells table. Each of these spells counts as a sorcerer spell for you, but it doesn't count against the number of sorcerer spells you know.",
                            'Whenever you gain a sorcerer level, you can replace one spell you gained from this feature with another spell of the same level. The new spell must be an abjuration or a transmutation spell from the sorcerer, warlock, or wizard spell list.',
                            {
                                type: 'table',
                                caption: 'Clockwork Spells',
                                colLabels: ['Sorcerer Level', 'Spells'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['1st', 'alarm, protection from evil and good'],
                                    ['3rd', 'aid, lesser restoration'],
                                    ['5th', 'dispel magic, protection from energy'],
                                    ['7th', 'freedom of movement, summon construct'],
                                    ['9th', 'greater restoration, wall of force'],
                                ],
                            },
                            'In addition, consult the Manifestations of Order table and choose or randomly determine a way your connection to order manifests while you are casting any of your sorcerer spells.',
                            {
                                type: 'table',
                                caption: 'Manifestations of Order',
                                colLabels: ['d6', 'Manifestation'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['1', 'Spectral cogwheels hover behind you.'],
                                    ['2', 'The hands of a clock spin in your eyes.'],
                                    ['3', 'Your skin glows with a brassy sheen.'],
                                    [
                                        '4',
                                        'Floating equations and geometric objects overlay your body.',
                                    ],
                                    [
                                        '5',
                                        'Your spellcasting focus temporarily takes the form of a Tiny clockwork mechanism.',
                                    ],
                                    [
                                        '6',
                                        'The ticking of gears or ringing of a clock can be heard by you and those affected by your magic.',
                                    ],
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Restore Balance',
                    source: 'TCE',
                    page: 68,
                    subclass_short_name: 'Clockwork Soul',
                    subclass_source: 'TCE',
                    level: 1,
                    entries: {
                        e: [
                            '1st-level Clockwork Soul feature',
                            'Your connection to the plane of absolute order allows you to equalize chaotic moments. When a creature you can see within 60 feet of you is about to roll a d20 with advantage or disadvantage, you can use your reaction to prevent the roll from being affected by advantage and disadvantage.',
                            'You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Bastion of Law',
                    source: 'TCE',
                    page: 68,
                    subclass_short_name: 'Clockwork Soul',
                    subclass_source: 'TCE',
                    level: 6,
                    entries: {
                        e: [
                            '6th-level Clockwork Soul feature',
                            'You can tap into the grand equation of existence to imbue a creature with a shimmering shield of order. As an action, you can expend 1 to 5 sorcery points to create a magical ward around yourself or another creature you can see within 30 feet of you. The ward lasts until you finish a long rest or until you use this feature again.',
                            'The ward is represented by a number of d8s equal to the number of sorcery points spent to create it. When the warded creature takes damage, it can expend a number of those dice, roll them, and reduce the damage taken by the total rolled on those dice.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Trance of Order',
                    source: 'TCE',
                    page: 68,
                    subclass_short_name: 'Clockwork Soul',
                    subclass_source: 'TCE',
                    level: 14,
                    entries: {
                        e: [
                            '14th-level Clockwork Soul feature',
                            "You gain the ability to align your consciousness to the endless calculations of Mechanus. As a bonus action, you can enter this state for 1 minute. For the duration, attack rolls against you can't benefit from advantage, and whenever you make an attack roll, an ability check, or a saving throw, you can treat a roll of 9 or lower on the d20 as a 10.",
                            "Once you use this bonus action, you can't use it again until you finish a long rest, unless you spend 5 sorcery points to use it again.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Clockwork Cavalcade',
                    source: 'TCE',
                    page: 68,
                    subclass_short_name: 'Clockwork Soul',
                    subclass_source: 'TCE',
                    level: 18,
                    entries: {
                        e: [
                            '18th-level Clockwork Soul feature',
                            'You summon spirits of order to expunge disorder around you. As an action, you summon the spirits in a 30-foot cube originating from you. The spirits look like modrons or other constructs of your choice. The spirits are intangible and invulnerable, and they create the following effects within the cube before vanishing:',
                            {
                                type: 'list',
                                items: [
                                    'The spirits restore up to 100 hit points, divided as you choose among any number of creatures of your choice in the cube.',
                                    'Any damaged objects entirely in the cube are repaired instantly.',
                                    'Every spell of 6th level or lower ends on creatures and objects of your choice in the cube.',
                                ],
                            },
                            "Once you use this action, you can't use it again until you finish a long rest, unless you spend 7 sorcery points to use it again.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Divine Soul',
                    source: 'XGE',
                    page: 50,
                    subclass_short_name: 'Divine Soul',
                    subclass_source: 'XGE',
                    level: 1,
                    entries: {
                        e: [
                            "Sometimes the spark of magic that fuels a sorcerer comes from a divine source that glimmers within the soul. Having such a blessed soul is a sign that your innate magic might come from a distant but powerful familial connection to a divine being. Perhaps your ancestor was an angel, transformed into a mortal and sent to fight in a god's name.",
                            'Or your birth might align with an ancient prophecy, marking you as a servant of the gods or a chosen vessel of divine magic.',
                            'A Divine Soul, with a natural magnetism, is seen as a threat by some religious hierarchies. As an outsider who commands sacred power, a Divine Soul can undermine an existing order by claiming a direct tie to the divine.',
                            'In some cultures, only those who can claim the power of a Divine Soul may command religious power. In these lands, ecclesiastical positions are dominated by a few bloodlines and preserved over generations.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Divine Magic|Sorcerer||Divine Soul|XGE|1',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Favored by the Gods|Sorcerer||Divine Soul|XGE|1',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Divine Magic',
                    source: 'XGE',
                    page: 50,
                    subclass_short_name: 'Divine Soul',
                    subclass_source: 'XGE',
                    level: 1,
                    entries: {
                        e: [
                            'Your link to the divine allows you to learn spells from the cleric class. When your Spellcasting feature lets you learn or replace a sorcerer cantrip or a sorcerer spell of 1st level or higher, you can choose the new spell from the cleric spell list or the sorcerer spell list. You must otherwise obey all the restrictions for selecting the spell, and it becomes a sorcerer spell for you.',
                            "In addition, choose an affinity for the source of your divine power: good, evil, law, chaos, or neutrality. You learn an additional spell based on that affinity, as shown below. It is a sorcerer spell for you, but it doesn't count against your number of sorcerer spells known. If you later replace this spell, you must replace it with a spell from the cleric spell list.",
                            {
                                type: 'table',
                                colLabels: ['Affinity', 'Spell'],
                                colStyles: ['col-5', 'col-7'],
                                rows: [
                                    ['Good', 'cure wounds'],
                                    ['Evil', 'inflict wounds'],
                                    ['Law', 'bless'],
                                    ['Chaos', 'bane'],
                                    ['Neutrality', 'protection from evil and good'],
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Favored by the Gods',
                    source: 'XGE',
                    page: 50,
                    subclass_short_name: 'Divine Soul',
                    subclass_source: 'XGE',
                    level: 1,
                    entries: {
                        e: [
                            "Starting at 1st level, divine power guards your destiny. If you fail a saving throw or miss with an attack roll, you can roll 2d4 and add it to the total, possibly changing the outcome. Once you use this feature, you can't use it again until you finish a short or long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Empowered Healing',
                    source: 'XGE',
                    page: 50,
                    subclass_short_name: 'Divine Soul',
                    subclass_source: 'XGE',
                    level: 6,
                    entries: {
                        e: [
                            "Starting at 6th level, the divine energy coursing through you can empower healing spells. Whenever you or an ally within 5 feet of you rolls dice to determine the number of hit points a spell restores, you can spend 1 sorcery point to reroll any number of those dice once, provided you aren't incapacitated. You can use this feature only once per turn.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Otherworldly Wings',
                    source: 'XGE',
                    page: 50,
                    subclass_short_name: 'Divine Soul',
                    subclass_source: 'XGE',
                    level: 14,
                    entries: {
                        e: [
                            "Starting at 14th level, you can use a bonus action to manifest a pair of spectral wings from your back. While the wings are present, you have a flying speed of 30 feet. The wings last until you're incapacitated, you die, or you dismiss them as a bonus action.",
                            'The affinity you chose for your Divine Magic feature determines the appearance of the spectral wings: eagle wings for good or law, bat wings for evil or chaos, and dragonfly wings for neutrality.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Unearthly Recovery',
                    source: 'XGE',
                    page: 50,
                    subclass_short_name: 'Divine Soul',
                    subclass_source: 'XGE',
                    level: 18,
                    entries: {
                        e: [
                            'At 18th level, you gain the ability to overcome grievous injuries. As a bonus action when you have fewer than half of your hit points remaining, you can regain a number of hit points equal to half your hit point maximum.',
                            "Once you use this feature, you can't use it again until you finish a long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Shadow Magic',
                    source: 'XGE',
                    page: 50,
                    subclass_short_name: 'Shadow',
                    subclass_source: 'XGE',
                    level: 1,
                    entries: {
                        e: [
                            'You are a creature of shadow, for your innate magic comes from the Shadowfell itself. You might trace your lineage to an entity from that place, or perhaps you were exposed to its fell energy and transformed by it.',
                            'The power of shadow magic casts a strange pall over your physical presence. The spark of life that sustains you is muffled, as if it struggles to remain viable against the dark energy that imbues your soul. At your option, you can pick from or roll on the Shadow Sorcerer Quirks table to create a quirk for your character.',
                            {
                                type: 'table',
                                caption: 'Shadow Sorcerer Quirks',
                                colLabels: ['d6', 'Quirk'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['1', 'You are always icy cold to the touch.'],
                                    [
                                        '2',
                                        "When you are asleep, you don't appear to breathe (though you must still breathe to survive).",
                                    ],
                                    ['3', 'You barely bleed, even when badly injured.'],
                                    [
                                        '4',
                                        'Your heart beats once per minute. This event sometimes surprises you.',
                                    ],
                                    [
                                        '5',
                                        'You have trouble remembering that living creatures and corpses should be treated differently.',
                                    ],
                                    ['6', 'You blinked. Once. Last week.'],
                                ],
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Eyes of the Dark|Sorcerer||Shadow|XGE|1',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Strength of the Grave|Sorcerer||Shadow|XGE|1',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Eyes of the Dark',
                    source: 'XGE',
                    page: 50,
                    subclass_short_name: 'Shadow',
                    subclass_source: 'XGE',
                    level: 1,
                    entries: {
                        e: [
                            'Starting at 1st level, you have darkvision with a range of 120 feet.',
                            "When you reach 3rd level in this class, you learn the darkness spell, which doesn't count against your number of sorcerer spells known. In addition, you can cast it by spending 2 sorcery points or by expending a spell slot. If you cast it with sorcery points, you can see through the darkness created by the spell.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Strength of the Grave',
                    source: 'XGE',
                    page: 50,
                    subclass_short_name: 'Shadow',
                    subclass_source: 'XGE',
                    level: 1,
                    entries: {
                        e: [
                            "Starting at 1st level, your existence in a twilight state between life and death makes you difficult to defeat. When damage reduces you to 0 hit points, you can make a Charisma saving throw (DC 5 + the damage taken). On a success, you instead drop to 1 hit point. You can't use this feature if you are reduced to 0 hit points by radiant damage or by a critical hit.",
                            "After the saving throw succeeds, you can't use this feature again until you finish a long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Hound of Ill Omen',
                    source: 'XGE',
                    page: 50,
                    subclass_short_name: 'Shadow',
                    subclass_source: 'XGE',
                    level: 6,
                    entries: {
                        e: [
                            "At 6th level, you gain the ability to call forth a howling creature of darkness to harass your foes. As a bonus action, you can spend 3 sorcery points to magically summon a hound of ill omen to target one creature you can see within 120 feet of you. The hound uses the dire wolf's statistics (see the Monster Manual or appendix C in the Player's Handbook), with the following changes:",
                            {
                                type: 'list',
                                items: [
                                    'The hound is size Medium, not Large, and it counts as a monstrosity, not a beast.',
                                    'It appears with a number of temporary hit points equal to half your sorcerer level.',
                                    'It can move through other creatures and objects as if they were difficult terrain. The hound takes 5 force damage if it ends its turn inside an object.',
                                    "At the start of its turn, the hound automatically knows its target's location. If the target was hidden, it is no longer hidden from the hound.",
                                ],
                            },
                            'The hound appears in an unoccupied space of your choice within 30 feet of the target. Roll initiative for the hound. On its turn, it can move only toward its target by the most direct route, and it can use its action only to attack its target. The hound can make opportunity attacks, but only against its target. Additionally, while the hound is within 5 feet of the target, the target has disadvantage on saving throws against any spell you cast. The hound disappears if it is reduced to 0 hit points, if its target is reduced to 0 hit points, or after 5 minutes.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Shadow Walk',
                    source: 'XGE',
                    page: 50,
                    subclass_short_name: 'Shadow',
                    subclass_source: 'XGE',
                    level: 14,
                    entries: {
                        e: [
                            'At 14th level, you gain the ability to step from one shadow into another. When you are in dim light or darkness, as a bonus action, you can magically teleport up to 120 feet to an unoccupied space you can see that is also in dim light or darkness.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Umbral Form',
                    source: 'XGE',
                    page: 50,
                    subclass_short_name: 'Shadow',
                    subclass_source: 'XGE',
                    level: 18,
                    entries: {
                        e: [
                            'Starting at 18th level, you can spend 6 sorcery points as a bonus action to magically transform yourself into a shadowy form. In this form, you have resistance to all damage except force and radiant damage, and you can move through other creatures and objects as if they were difficult terrain. You take 5 force damage if you end your turn inside an object.',
                            'You remain in this form for 1 minute. It ends early if you are incapacitated, if you die, or if you dismiss it as a bonus action.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Storm Sorcery',
                    source: 'XGE',
                    page: 51,
                    subclass_short_name: 'Storm',
                    subclass_source: 'XGE',
                    level: 1,
                    entries: {
                        e: [
                            'Your innate magic comes from the power of elemental air. Many with this power can trace their magic back to a near-death experience caused by the Great Rain, but perhaps you were born during a howling gale so powerful that folk still tell stories of it, or your lineage might include the influence of potent air creatures such as djinn. Whatever the case, the magic of the storm permeates your being.',
                            "Storm sorcerers are invaluable members of a ship's crew. Their magic allows them to exert control over wind and weather in their immediate area. Their abilities also prove useful in repelling attacks by sahuagin, pirates, and other waterborne threats.",
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Wind Speaker|Sorcerer||Storm|XGE|1',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Tempestuous Magic|Sorcerer||Storm|XGE|1',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Tempestuous Magic',
                    source: 'XGE',
                    page: 51,
                    subclass_short_name: 'Storm',
                    subclass_source: 'XGE',
                    level: 1,
                    entries: {
                        e: [
                            'Starting at 1st level, you can use a bonus action on your turn to cause whirling gusts of elemental air to briefly surround you, immediately before or after you cast a spell of 1st level or higher. Doing so allows you to fly up to 10 feet without provoking opportunity attacks.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Wind Speaker',
                    source: 'XGE',
                    page: 51,
                    subclass_short_name: 'Storm',
                    subclass_source: 'XGE',
                    level: 1,
                    entries: {
                        e: [
                            'The arcane magic you command is infused with elemental air. You can speak, read, and write Primordial. Knowing this language allows you to understand and be understood by those who speak its dialects: Aquan, Auran, Ignan, and Terran.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Heart of the Storm',
                    source: 'XGE',
                    page: 51,
                    subclass_short_name: 'Storm',
                    subclass_source: 'XGE',
                    level: 6,
                    entries: {
                        e: [
                            'At 6th level, you gain resistance to lightning and thunder damage. In addition, whenever you start casting a spell of 1st level or higher that deals lightning or thunder damage, stormy magic erupts from you. This eruption causes creatures of your choice that you can see within 10 feet of you to take lightning or thunder damage (choose each time this ability activates) equal to half your sorcerer level.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Storm Guide',
                    source: 'XGE',
                    page: 51,
                    subclass_short_name: 'Storm',
                    subclass_source: 'XGE',
                    level: 6,
                    entries: {
                        e: [
                            'At 6th level, you gain the ability to subtly control the weather around you.',
                            'If it is raining, you can use an action to cause the rain to stop falling in a 20-foot-radius sphere centered on you. You can end this effect as a bonus action.',
                            "If it is windy, you can use a bonus action each round to choose the direction that the wind blows in a 100-foot-radius sphere centered on you. The wind blows in that direction until the end of your next turn. This feature doesn't alter the speed of the wind.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: "Storm's Fury",
                    source: 'XGE',
                    page: 51,
                    subclass_short_name: 'Storm',
                    subclass_source: 'XGE',
                    level: 14,
                    entries: {
                        e: [
                            'Starting at 14th level, when you are hit by a melee attack, you can use your reaction to deal lightning damage to the attacker. The damage equals your sorcerer level. The attacker must also make a Strength saving throw against your sorcerer spell save DC. On a failed save, the attacker is pushed in a straight line up to 20 feet away from you.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Wind Soul',
                    source: 'XGE',
                    page: 51,
                    subclass_short_name: 'Storm',
                    subclass_source: 'XGE',
                    level: 18,
                    entries: {
                        e: [
                            'At 18th level, you gain immunity to lightning and thunder damage.',
                            "You also gain a magical flying speed of 60 feet. As an action, you can reduce your flying speed to 30 feet for 1 hour and choose a number of creatures within 30 feet of you equal to 3 + your Charisma modifier. The chosen creatures gain a magical flying speed of 30 feet for 1 hour. Once you reduce your flying speed in this way, you can't do so again until you finish a short or long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'e1068650-2673-4835-af88-adddd16d5095',
                },
                {
                    name: 'Arcane Trickster',
                    source: 'PHB',
                    page: 97,
                    subclass_short_name: 'Arcane Trickster',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'Some rogues enhance their fine-honed skills of stealth and agility with magic, learning tricks of enchantment and illusion. These rogues include pickpockets and burglars, but also pranksters, mischief-makers, and a significant number of adventurers.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Spellcasting|Rogue||Arcane Trickster||3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Mage Hand Legerdemain|Rogue||Arcane Trickster||3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Mage Hand Legerdemain',
                    source: 'PHB',
                    page: 97,
                    subclass_short_name: 'Arcane Trickster',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'Starting at 3rd level, when you cast mage hand, you can make the spectral hand invisible, and you can perform the following additional tasks with it:',
                            {
                                type: 'list',
                                items: [
                                    'You can stow one object the hand is holding in a container worn or carried by another creature.',
                                    'You can retrieve an object in a container worn or carried by another creature.',
                                    "You can use thieves' tools to pick locks and disarm traps at range.",
                                ],
                            },
                            "You can perform one of these tasks without being noticed by a creature if you succeed on a Dexterity (Sleight of Hand) check contested by the creature's Wisdom (Perception) check.",
                            'In addition, you can use the bonus action granted by your Cunning Action to control the hand.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Spellcasting',
                    source: 'PHB',
                    page: 97,
                    subclass_short_name: 'Arcane Trickster',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'When you reach 3rd level, you gain the ability to cast spells. See chapter 10 for the general rules of spellcasting and chapter 11 for the wizard spell list.',
                            {
                                type: 'entries',
                                entries: [
                                    {
                                        type: 'entries',
                                        name: 'Cantrips',
                                        entries: [
                                            'You learn three cantrips: mage hand and two other cantrips of your choice from the wizard spell list. You learn another wizard cantrip of your choice at 10th level.',
                                        ],
                                    },
                                ],
                            },
                            {
                                type: 'entries',
                                entries: [
                                    {
                                        type: 'entries',
                                        name: 'Spell Slots',
                                        entries: [
                                            "The Arcane Trickster Spellcasting table shows how many spell slots you have to cast your wizard spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
                                            'For example, if you know the 1st-level spell charm person and have a 1st-level and a 2nd-level spell slot available, you can cast charm person using either slot.',
                                        ],
                                    },
                                ],
                            },
                            {
                                type: 'entries',
                                entries: [
                                    {
                                        type: 'entries',
                                        name: 'Spells Known of 1st-Level and Higher',
                                        entries: [
                                            'You know three 1st-level wizard spells of your choice, two of which you must choose from the enchantment and illusion spells on the wizard spell list.',
                                            'The Spells Known column of the Arcane Trickster Spellcasting table shows when you learn more wizard spells of 1st level or higher. Each of these spells must be an enchantment or illusion spell of your choice, and must be of a level for which you have spell slots. For instance, when you reach 7th level in this class, you can learn one new spell of 1st or 2nd level.',
                                            'The spells you learn at 8th, 14th, and 20th level can come from any school of magic.',
                                            "Whenever you gain a level in this class, you can replace one of the wizard spells you know with another spell of your choice from the wizard spell list. The new spell must be of a level for which you have spell slots, and it must be an enchantment or illusion spell, unless you're replacing the spell you gained at 3rd, 8th, 14th, or 20th level from any school of magic.",
                                        ],
                                    },
                                ],
                            },
                            {
                                type: 'entries',
                                entries: [
                                    {
                                        type: 'entries',
                                        name: 'Spellcasting Ability',
                                        entries: [
                                            'Intelligence is your spellcasting ability for your wizard spells, since you learn your spells through dedicated study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.',
                                            {
                                                type: 'abilityDc',
                                                name: 'Spell',
                                                attributes: ['int'],
                                            },
                                            {
                                                type: 'abilityAttackMod',
                                                name: 'Spell',
                                                attributes: ['int'],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Magical Ambush',
                    source: 'PHB',
                    page: 97,
                    subclass_short_name: 'Arcane Trickster',
                    subclass_source: 'PHB',
                    level: 9,
                    entries: {
                        e: [
                            'Starting at 9th level, if you are hidden from a creature when you cast a spell on it, the creature has disadvantage on any saving throw it makes against the spell this turn.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Versatile Trickster',
                    source: 'PHB',
                    page: 97,
                    subclass_short_name: 'Arcane Trickster',
                    subclass_source: 'PHB',
                    level: 13,
                    entries: {
                        e: [
                            'At 13th level, you gain the ability to distract targets with your mage hand. As a bonus action on your turn, you can designate a creature within 5 feet of the spectral hand created by the spell. Doing so gives you advantage on attack rolls against that creature until the end of the turn.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Spell Thief',
                    source: 'PHB',
                    page: 97,
                    subclass_short_name: 'Arcane Trickster',
                    subclass_source: 'PHB',
                    level: 17,
                    entries: {
                        e: [
                            'At 17th level, you gain the ability to magically steal the knowledge of how to cast a spell from another spellcaster.',
                            "Immediately after a creature casts a spell that targets you or includes you in its area of effect, you can use your reaction to force the creature to make a saving throw with its spellcasting ability modifier. The DC equals your spell save DC. On a failed save, you negate the spell's effect against you, and you steal the knowledge of the spell if it is at least 1st level and of a level you can cast (it doesn't need to be a wizard spell). For the next 8 hours, you know the spell and can cast it using your spell slots. The creature can't cast that spell until the 8 hours have passed.",
                            "Once you use this feature, you can't use it again until you finish a long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Assassin',
                    source: 'PHB',
                    page: 97,
                    subclass_short_name: 'Assassin',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'You focus your training on the grim art of death. Those who adhere to this archetype are diverse - hired killers, spies, bounty hunters, and even specially anointed priests trained to exterminate the enemies of their deity. Stealth, poison, and disguise help you eliminate your foes with deadly efficiency.',
                            'Your archetype grants you features at 3rd level and then again at 9th, 13th, and 17th level.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Assassinate|Rogue||Assassin||3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Bonus Proficiencies|Rogue||Assassin||3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Assassinate',
                    source: 'PHB',
                    page: 97,
                    subclass_short_name: 'Assassin',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            "Starting at 3rd level, you are at your deadliest when you get the drop on your enemies. You have advantage on attack rolls against any creature that hasn't taken a turn in the combat yet. In addition, any hit you score against a creature that is surprised is a critical hit.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Bonus Proficiencies',
                    source: 'PHB',
                    page: 97,
                    subclass_short_name: 'Assassin',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            "When you choose this archetype at 3rd level, you gain proficiency with the disguise kitand the poisoner's kit.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Infiltration Expertise',
                    source: 'PHB',
                    page: 97,
                    subclass_short_name: 'Assassin',
                    subclass_source: 'PHB',
                    level: 9,
                    entries: {
                        e: [
                            "Starting at 9th level, you can unfailingly create false identities for yourself. You must spend seven days and 25 gp to establish the history, profession, and affiliations for an identity. You can't establish an identity that belongs to someone else. For example, you might acquire appropriate clothing, letters of introduction, and official-looking certification to establish yourself as a member of a trading house from a remote city so you can insinuate yourself into the company of other wealthy merchants.",
                            'Thereafter, if you adopt the new identity as a disguise, other creatures believe you to be that person until given an obvious reason not to.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Impostor',
                    source: 'PHB',
                    page: 97,
                    subclass_short_name: 'Assassin',
                    subclass_source: 'PHB',
                    level: 13,
                    entries: {
                        e: [
                            "At 13th level, you gain the ability to unerringly mimic another person's speech, writing, and behavior. You must spend at least three hours studying these three components of the person's behavior, listening to speech, examining handwriting, and observing mannerism.",
                            'Your ruse is indiscernible to the casual observer. If a wary creature suspects something is amiss, you have advantage on any Charisma (Deception) check you make to avoid detection.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Death Strike',
                    source: 'PHB',
                    page: 97,
                    subclass_short_name: 'Assassin',
                    subclass_source: 'PHB',
                    level: 17,
                    entries: {
                        e: [
                            'Starting at 17th level, you become a master of instant death. When you attack and hit a creature that is surprised, it must make a Constitution saving throw (DC 8 + your Dexterity modifier + your proficiency bonus). On a failed save, double the damage of your attack against the creature.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Thief',
                    source: 'PHB',
                    page: 97,
                    subclass_short_name: 'Thief',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            "You hone your skills in the larcenous arts. Burglars, bandits, cutpurses, and other criminals typically follow this archetype, but so do rogues who prefer to think of themselves as professional treasure seekers, explorers, delvers, and investigators. In addition to improving your agility and stealth, you learn skills useful for delving into ancient ruins, reading unfamiliar languages, and using magic items you normally couldn't employ.",
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Fast Hands|Rogue||Thief||3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Second-Story Work|Rogue||Thief||3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Fast Hands',
                    source: 'PHB',
                    page: 97,
                    subclass_short_name: 'Thief',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            "Starting at 3rd level, you can use the bonus action granted by your Cunning Action to make a Dexterity (Sleight of Hand) check, use your thieves' tools to disarm a trap or open a lock, or take the Use an Object action.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Second-Story Work',
                    source: 'PHB',
                    page: 97,
                    subclass_short_name: 'Thief',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'When you choose this archetype at 3rd level, you gain the ability to climb faster than normal; climbing no longer costs you extra movement.',
                            'In addition, when you make a running jump, the distance you cover increases by a number of feet equal to your Dexterity modifier.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Supreme Sneak',
                    source: 'PHB',
                    page: 97,
                    subclass_short_name: 'Thief',
                    subclass_source: 'PHB',
                    level: 9,
                    entries: {
                        e: [
                            'Starting at 9th level, you have advantage on a Dexterity (Stealth) check if you move no more than half your speed on the same turn.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Use Magic Device',
                    source: 'PHB',
                    page: 97,
                    subclass_short_name: 'Thief',
                    subclass_source: 'PHB',
                    level: 13,
                    entries: {
                        e: [
                            'By 13th level, you have learned enough about the workings of magic that you can improvise the use of items even when they are not intended for you. You ignore all class, race, and level requirements on the use of magic items.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: "Thief's Reflexes",
                    source: 'PHB',
                    page: 97,
                    subclass_short_name: 'Thief',
                    subclass_source: 'PHB',
                    level: 17,
                    entries: {
                        e: [
                            "When you reach 17th level, you have become adept at laying ambushes and quickly escaping danger. You can take two turns during the first round of any combat. You take your first turn at your normal initiative and your second turn at your initiative minus 10. You can't use this feature when you are surprised.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Phantom',
                    source: 'TCE',
                    page: 62,
                    subclass_short_name: 'Phantom',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            "Many rogues walk a fine line between life and death, risking their own lives and taking the lives of others. While adventuring on that line, some rogues discover a mystical connection to death itself. These rogues take knowledge from the dead and become immersed in negative energy, eventually becoming like ghosts. Thieves' guilds value them as highly effective information gatherers and spies.",
                            "Many shadar-kai of the Shadowfell are masters of these macabre techniques, and some are willing to teach this path. In places like Thay in the Forgotten Realms and Karrnath in Eberron, where many necromancers practice their craft, a Phantom can become a wizard's confidant and right hand. In temples of gods of death, the Phantom might work as an agent to track down those who try to cheat death and to recover knowledge that might otherwise be lost to the grave.",
                            "How did you discover this grim power? Did you sleep in a graveyard and awaken to your new abilities? Or did you cultivate them in a temple or thieves' guild dedicated to a deity of death?",
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Whispers of the Dead|Rogue||Phantom|TCE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Wails from the Grave|Rogue||Phantom|TCE|3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Wails from the Grave',
                    source: 'TCE',
                    page: 62,
                    subclass_short_name: 'Phantom',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            '3rd-level Phantom feature',
                            "As you nudge someone closer to the grave, you can channel the power of death to harm someone else as well. Immediately after you deal your Sneak Attack damage to a creature on your turn, you can target a second creature that you can see within 30 feet of the first creature. Roll half the number of Sneak Attack dice for your level (round up), and the second creature takes necrotic damage equal to the roll's total, as wails of the dead sound around them for a moment.",
                            'You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Whispers of the Dead',
                    source: 'TCE',
                    page: 62,
                    subclass_short_name: 'Phantom',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            '3rd-level Phantom feature',
                            'Echoes of those who have died cling to you. Whenever you finish a short or long rest, you can choose one skill or tool proficiency that you lack and gain it, as a ghostly presence shares its knowledge with you. You lose this proficiency when you use this feature to choose a different proficiency that you lack.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Tokens of the Departed',
                    source: 'TCE',
                    page: 62,
                    subclass_short_name: 'Phantom',
                    subclass_source: 'TCE',
                    level: 9,
                    entries: {
                        e: [
                            '9th-level Phantom feature',
                            "When a life ends in your presence, you're able to snatch a token from the departing soul, a sliver of its life essence that takes physical form: as a reaction when a creature you can see dies within 30 feet of you, you can open your free hand and cause a Tiny trinket to appear there, a soul trinket. The DM determines the trinket's form or has you roll on the Trinkets table in the Player's Handbook to generate it. You can have a maximum number of soul trinkets equal to your proficiency bonus, and you can't create one while at your maximum.",
                            'You can use soul trinkets in the following ways:',
                            {
                                type: 'list',
                                items: [
                                    'While a soul trinket is on your person, you have advantage on death saving throws and Constitution saving throws, for your vitality is enhanced by the life essence within the object.',
                                    "When you deal Sneak Attack damage on your turn, you can destroy one of your soul trinkets that's on your person and then immediately use Wails from the Grave, without expending a use of that feature.",
                                    "As an action, you can destroy one of your soul trinkets, no matter where it's located. When you do so, you can ask the spirit associated with the trinket one question. The spirit appears to you and answers in a language it knew in life. It's under no obligation to be truthful, and it answers as concisely as possible, eager to be free. The spirit knows only what it knew in life, as determined by the DM.",
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Ghost Walk',
                    source: 'TCE',
                    page: 62,
                    subclass_short_name: 'Phantom',
                    subclass_source: 'TCE',
                    level: 13,
                    entries: {
                        e: [
                            '13th-level Phantom feature',
                            'You can phase partially into the realm of the dead, becoming like a ghost. As a bonus action, you assume a spectral form. While in this form, you have a flying speed of 10 feet, you can hover, and attack rolls have disadvantage against you. You can also move through creatures and objects as if they were difficult terrain, but you take 1d10 force damage if you end your turn inside a creature or an object.',
                            'You stay in this form for 10 minutes or until you end it as a bonus action. To use this feature again, you must finish a long rest or destroy one of your soul trinkets as part of the bonus action you use to activate Ghost Walk.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: "Death's Friend",
                    source: 'TCE',
                    page: 62,
                    subclass_short_name: 'Phantom',
                    subclass_source: 'TCE',
                    level: 17,
                    entries: {
                        e: [
                            '17th-level Phantom feature',
                            'Your association with death has become so close that you gain the following benefits:',
                            {
                                type: 'list',
                                items: [
                                    'When you use your Wails from the Grave, you can deal the necrotic damage to both the first and the second creature.',
                                    "At the end of a long rest, a soul trinket appears in your hand if you don't have any soul trinkets, as the spirits of the dead are drawn to you.",
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Soulknife',
                    source: 'TCE',
                    page: 63,
                    subclass_short_name: 'Soulknife',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            "Most assassins strike with physical weapons, and many burglars and spies use thieves' tools to infiltrate secure locations. In contrast, a Soulknife strikes and infiltrates with the mind, cutting through barriers both physical and psychic. These rogues discover psionic power within themselves and channel it to do their roguish work. They find easy employment as members of thieves' guilds, though they are often mistrusted by rogues who are leery of anyone using strange mind powers to conduct their business. Most governments would also be happy to employ a Soulknife as a spy.",
                            'Amid the trees of ancient forests on the Material Plane and in the Feywild, some wood elves walk the path of the Soulknife, serving as silent, lethal guardians of their woods. In the endless war among the gith, a githzerai is encouraged to become a Soulknife when stealth is required against the githyanki foe.',
                            'As a Soulknife, your psionic abilities might have haunted you since you were a child, only revealing their full potential as you experienced the stress of adventure. Or you might have sought out a reclusive order of psychic adepts and spent years learning how to manifest your power.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Psionic Power|Rogue||Soulknife|TCE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Psychic Blades|Rogue||Soulknife|TCE|3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Psionic Power',
                    source: 'TCE',
                    page: 63,
                    subclass_short_name: 'Soulknife',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            '3rd-level Soulknife feature',
                            'You harbor a wellspring of psionic energy within yourself. This energy is represented by your Psionic Energy dice, which are each a d6. You have a number of these dice equal to twice your proficiency bonus, and they fuel various psionic powers you have, which are detailed below.',
                            "Some of your powers expend the Psionic Energy die they use, as specified in a power's description, and you can't use a power if it requires you to use a die when your dice are all expended. You regain all your expended Psionic Energy dice when you finish a long rest. In addition, as a bonus action, you can regain one expended Psionic Energy die, but you can't do so again until you finish a short or long rest.",
                            'When you reach certain levels in this class, the size of your Psionic Energy dice increases: at 5th level (d8), 11th level (d10), and 17th level (d12).',
                            'The powers below use your Psionic Energy dice.',
                            {
                                type: 'options',
                                entries: [
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Psi-Bolstered Knack|Rogue|TCE|Soulknife|TCE|3',
                                    },
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Psychic Whispers|Rogue|TCE|Soulknife|TCE|3',
                                    },
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Psychic Blades',
                    source: 'TCE',
                    page: 63,
                    subclass_short_name: 'Soulknife',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            '3rd-level Soulknife feature',
                            'You can manifest your psionic power as shimmering blades of psychic energy. Whenever you take the Attack action, you can manifest a psychic blade from your free hand and make the attack with that blade. This magic blade is a simple melee weapon with the finesse and thrown properties. It has a normal range of 60 feet and no long range, and on a hit, it deals psychic damage equal to 1d6 plus the ability modifier you used for the attack roll. The blade vanishes immediately after it hits or misses its target, and it leaves no mark on its target if it deals damage.',
                            'After you attack with the blade, you can make a melee or ranged weapon attack with a second psychic blade as a bonus action on the same turn, provided your other hand is free to create it. The damage die of this bonus attack is 1d4, instead of 1d6.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Soul Blades',
                    source: 'TCE',
                    page: 63,
                    subclass_short_name: 'Soulknife',
                    subclass_source: 'TCE',
                    level: 9,
                    entries: {
                        e: [
                            '9th-level Soulknife feature',
                            'Your Psychic Blades are now an expression of your psi-suffused soul, giving you these powers that use your Psionic Energy dice:',
                            {
                                type: 'options',
                                entries: [
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Homing Strikes|Rogue|TCE|Soulknife|TCE|9',
                                    },
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature:
                                            'Psychic Teleportation|Rogue|TCE|Soulknife|TCE|9',
                                    },
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Psychic Veil',
                    source: 'TCE',
                    page: 63,
                    subclass_short_name: 'Soulknife',
                    subclass_source: 'TCE',
                    level: 13,
                    entries: {
                        e: [
                            '13th-level Soulknife feature',
                            'You can weave a veil of psychic static to mask yourself. As an action, you can magically become invisible, along with anything you are wearing or carrying, for 1 hour or until you dismiss this effect (no action required). This invisibility ends early immediately after you deal damage to a creature or you force a creature to make a saving throw.',
                            "Once you use this feature, you can't do so again until you finish a long rest, unless you expend a Psionic Energy die to use this feature again.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Rend Mind',
                    source: 'TCE',
                    page: 63,
                    subclass_short_name: 'Soulknife',
                    subclass_source: 'TCE',
                    level: 17,
                    entries: {
                        e: [
                            '17th-level Soulknife feature',
                            "You can sweep your Psychic Blades directly through a creature's mind. When you use your Psychic Blades to deal Sneak Attack damage to a creature, you can force that target to make a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Dexterity modifier). If the save fails, the target is stunned for 1 minute. The stunned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
                            "Once you use this feature, you can't do so again until you finish a long rest, unless you expend three Psionic Energy dice to use it again.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Inquisitive',
                    source: 'XGE',
                    page: 45,
                    subclass_short_name: 'Inquisitive',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'As an archetypal Inquisitive, you excel at rooting out secrets and unraveling mysteries. You rely on your sharp eye for detail, but also on your finely honed ability to read the words and deeds of other creatures to determine their true intent. You excel at defeating creatures that hide among and prey upon ordinary folk, and your mastery of lore and your keen deductions make you well equipped to expose and end hidden evils.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Ear for Deceit|Rogue||Inquisitive|XGE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Eye for Detail|Rogue||Inquisitive|XGE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Insightful Fighting|Rogue||Inquisitive|XGE|3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Ear for Deceit',
                    source: 'XGE',
                    page: 45,
                    subclass_short_name: 'Inquisitive',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'When you choose this archetype at 3rd level, you develop a talent for picking out lies. Whenever you make a Wisdom (Insight) check to determine whether a creature is lying, treat a roll of 7 or lower on the d20 as an 8.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Eye for Detail',
                    source: 'XGE',
                    page: 45,
                    subclass_short_name: 'Inquisitive',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'Starting at 3rd level, you can use a bonus action to make a Wisdom (Perception) check to spot a hidden creature or object or to make an Intelligence (Investigation) check to uncover or decipher clues.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Insightful Fighting',
                    source: 'XGE',
                    page: 45,
                    subclass_short_name: 'Inquisitive',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            "At 3rd level, you gain the ability to decipher an opponent's tactics and develop a counter to them. As a bonus action, you can make a Wisdom (Insight) check against a creature you can see that isn't incapacitated, contested by the target's Charisma (Deception) check. If you succeed, you can use your Sneak Attack against that target even if you don't have advantage on the attack roll, but not if you have disadvantage on it.",
                            'This benefit lasts for 1 minute or until you successfully use this feature against a different target.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Steady Eye',
                    source: 'XGE',
                    page: 45,
                    subclass_short_name: 'Inquisitive',
                    subclass_source: 'XGE',
                    level: 9,
                    entries: {
                        e: [
                            'Starting at 9th level, you have advantage on any Wisdom (Perception) or Intelligence (Investigation) check if you move no more than half your speed on the same turn.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Unerring Eye',
                    source: 'XGE',
                    page: 45,
                    subclass_short_name: 'Inquisitive',
                    subclass_source: 'XGE',
                    level: 13,
                    entries: {
                        e: [
                            "Beginning at 13th level, your senses are almost impossible to foil. As an action, you sense the presence of illusions, shapechangers not in their original form, and other magic designed to deceive the senses within 30 feet of you, provided you aren't blinded or deafened. You sense that an effect is attempting to trick you, but you gain no insight into what is hidden or into its true nature.",
                            'You can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses of it when you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Eye for Weakness',
                    source: 'XGE',
                    page: 45,
                    subclass_short_name: 'Inquisitive',
                    subclass_source: 'XGE',
                    level: 17,
                    entries: {
                        e: [
                            "At 17th level, you learn to exploit a creature's weaknesses by carefully studying its tactics and movement. While your Insightful Fighting feature applies to a creature, your Sneak Attack damage against that creature increases by 3d6.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Mastermind',
                    source: 'XGE',
                    page: 46,
                    subclass_short_name: 'Mastermind',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'Your focus is on people and on the influence and secrets they have. Many spies, courtiers, and schemers follow this archetype, leading lives of intrigue. Words are your weapons as often as knives or poison, and secrets and favors are some of your favorite treasures.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Master of Intrigue|Rogue||Mastermind|XGE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Master of Tactics|Rogue||Mastermind|XGE|3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Master of Intrigue',
                    source: 'XGE',
                    page: 46,
                    subclass_short_name: 'Mastermind',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'When you choose this archetype at 3rd level, you gain proficiency with the disguise Kit, the forgery kit, and one gaming set of your choice. You also learn two languages of your choice.',
                            'Additionally, you can unerringly mimic the speech patterns and accent of a creature that you hear speak for at least 1 minute, enabling you to pass yourself off as a native speaker of a particular land, provided that you know the language.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Master of Tactics',
                    source: 'XGE',
                    page: 46,
                    subclass_short_name: 'Mastermind',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'Starting at 3rd level, you can use the Help action as a bonus action. Additionally, when you use the Help action to aid an ally in attacking a creature, the target of that attack can be within 30 feet of you, rather than within 5 feet of you, if the target can see or hear you.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Insightful Manipulator',
                    source: 'XGE',
                    page: 46,
                    subclass_short_name: 'Mastermind',
                    subclass_source: 'XGE',
                    level: 9,
                    entries: {
                        e: [
                            'Starting at 9th level, if you spend at least 1 minute observing or interacting with another creature outside combat, you can learn certain information about its capabilities compared to your own. The DM tells you if the creature is your equal, superior, or inferior in regard to two of the following characteristics of your choice:',
                            {
                                type: 'list',
                                items: [
                                    'Intelligence score',
                                    'Wisdom score',
                                    'Charisma score',
                                    'Class levels (if any)',
                                ],
                            },
                            "At the DM's option, you might also realize you know a piece of the creature's history or one of its personality traits, if it has any.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Misdirection',
                    source: 'XGE',
                    page: 46,
                    subclass_short_name: 'Mastermind',
                    subclass_source: 'XGE',
                    level: 13,
                    entries: {
                        e: [
                            'Beginning at 13th level, you can sometimes cause another creature to suffer an attack meant for you. When you are targeted by an attack while a creature within 5 feet of you is granting you cover against that attack, you can use your reaction to have the attack target that creature instead of you.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Soul of Deceit',
                    source: 'XGE',
                    page: 46,
                    subclass_short_name: 'Mastermind',
                    subclass_source: 'XGE',
                    level: 17,
                    entries: {
                        e: [
                            "Starting at 17th level, your thoughts can't be read by telepathy or other means, unless you allow it. You can present false thoughts by succeeding on a Charisma (Deception) check contested by the mind reader's Wisdom (Insight) check.",
                            "Additionally, no matter what you say, magic that would determine if you are telling the truth indicates you are being truthful if you so choose, and you can't be compelled to tell the truth by magic.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Scout',
                    source: 'XGE',
                    page: 47,
                    subclass_short_name: 'Scout',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'You are skilled in stealth and surviving far from the streets of a city, allowing you to scout ahead of your companions during expeditions. Rogues who embrace this archetype are at home in the wilderness and among barbarians and rangers, and many Scouts serve as the eyes and ears of war bands. Ambusher, spy, bounty hunter—these are just a few of the roles that Scouts assume as they range the world.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Skirmisher|Rogue||Scout|XGE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Survivalist|Rogue||Scout|XGE|3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Skirmisher',
                    source: 'XGE',
                    page: 47,
                    subclass_short_name: 'Scout',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            "Starting at 3rd level, you are difficult to pin down during a fight. You can move up to half your speed as a reaction when an enemy ends its turn within 5 feet of you. This movement doesn't provoke opportunity attacks.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Survivalist',
                    source: 'XGE',
                    page: 47,
                    subclass_short_name: 'Scout',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            "When you choose this archetype at 3rd level, you gain proficiency in the Nature and Survival skills if you don't already have it. Your proficiency bonus is doubled for any ability check you make that uses either of those proficiencies.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Superior Mobility',
                    source: 'XGE',
                    page: 47,
                    subclass_short_name: 'Scout',
                    subclass_source: 'XGE',
                    level: 9,
                    entries: {
                        e: [
                            'At 9th level, your walking speed increases by 10 feet. If you have a climbing or swimming speed, this increase applies to that speed as well.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Ambush Master',
                    source: 'XGE',
                    page: 47,
                    subclass_short_name: 'Scout',
                    subclass_source: 'XGE',
                    level: 13,
                    entries: {
                        e: [
                            'Starting at 13th level, you excel at leading ambushes and acting first in a fight.',
                            'You have advantage on initiative rolls. In addition, the first creature you hit during the first round of a combat becomes easier for you and others to strike; attack rolls against that target have advantage until the start of your next turn.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Sudden Strike',
                    source: 'XGE',
                    page: 47,
                    subclass_short_name: 'Scout',
                    subclass_source: 'XGE',
                    level: 17,
                    entries: {
                        e: [
                            "Starting at 17th level, you can strike with deadly speed. If you take the Attack action on your turn, you can make one additional attack as a bonus action. This attack can benefit from your Sneak Attack even if you have already used it this turn, but you can't use your Sneak Attack against the same target more than once in a turn.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Swashbuckler',
                    source: 'XGE',
                    page: 48,
                    subclass_short_name: 'Swashbuckler',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'You focus your training on the art of the blade, relying on speed, elegance, and charm in equal parts. While some warriors are brutes clad in heavy armor, your method of fighting looks almost like a performance. Duelists and pirates typically belong to this archetype.',
                            'A Swashbuckler excels in single combat, and can fight with two weapons while safely darting away from an opponent.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Fancy Footwork|Rogue||Swashbuckler|XGE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Rakish Audacity|Rogue||Swashbuckler|XGE|3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Fancy Footwork',
                    source: 'XGE',
                    page: 48,
                    subclass_short_name: 'Swashbuckler',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            "When you choose this archetype at 3rd level, you learn how to land a strike and then slip away without reprisal. During your turn, if you make a melee attack against a creature, that creature can't make opportunity attacks against you for the rest of your turn.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Rakish Audacity',
                    source: 'XGE',
                    page: 48,
                    subclass_short_name: 'Swashbuckler',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'Starting at 3rd level, your confidence propels you into battle. You can give yourself a bonus to your initiative rolls equal to your Charisma modifier.',
                            "You also gain an additional way to use your Sneak Attack; you don't need advantage on the attack roll to use your Sneak Attack against a creature if you are within 5 feet of it, no other creatures are within 5 feet of you, and you don't have disadvantage on the attack roll. All the other rules for Sneak Attack still apply to you.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Panache',
                    source: 'XGE',
                    page: 48,
                    subclass_short_name: 'Swashbuckler',
                    subclass_source: 'XGE',
                    level: 9,
                    entries: {
                        e: [
                            "At 9th level, your charm becomes extraordinarily beguiling. As an action, you can make a Charisma (Persuasion) check contested by a creature's Wisdom (Insight) check. The creature must be able to hear you, and the two of you must share a language.",
                            "If you succeed on the check and the creature is hostile to you, it has disadvantage on attack rolls against targets other than you and can't make opportunity attacks against targets other than you. This effect lasts for 1 minute, until one of your companions attacks the target or affects it with a spell, or until you and the target are more than 60 feet apart.",
                            "If you succeed on the check and the creature isn't hostile to you, it is charmed by you for 1 minute. While charmed, it regards you as a friendly acquaintance. This effect ends immediately if you or your companions do anything harmful to it.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Elegant Maneuver',
                    source: 'XGE',
                    page: 48,
                    subclass_short_name: 'Swashbuckler',
                    subclass_source: 'XGE',
                    level: 13,
                    entries: {
                        e: [
                            'Starting at 13th level, you can use a bonus action on your turn to gain advantage on the next Dexterity (Acrobatics) or Strength (Athletics) check you make during the same turn.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Master Duelist',
                    source: 'XGE',
                    page: 48,
                    subclass_short_name: 'Swashbuckler',
                    subclass_source: 'XGE',
                    level: 17,
                    entries: {
                        e: [
                            "Beginning at 17th level, your mastery of the blade lets you turn failure into success in combat. If you miss with an attack roll, you can roll it again with advantage. Once you do so, you can't use this feature again until you finish a short or long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Psi-Bolstered Knack',
                    source: 'TCE',
                    page: 63,
                    subclass_short_name: 'Soulknife',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            'When your nonpsionic training fails you, your psionic power can help: if you fail an ability check using a skill or tool with which you have proficiency, you can roll one Psionic Energy die and add the number rolled to the check, potentially turning failure into success. You expend the die only if the roll succeeds.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Psychic Whispers',
                    source: 'TCE',
                    page: 63,
                    subclass_short_name: 'Soulknife',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            "You can establish telepathic communication between yourself and others-perfect for quiet infiltration. As an action, choose one or more creatures you can see, up to a number of creatures equal to your proficiency bonus, and then roll one Psionic Energy die. For a number of hours equal to the number rolled, the chosen creatures can speak telepathically with you, and you can speak telepathically with them. To send or receive a message (no action required), you and the other creature must be within 1 mile of each other. A creature can't use this telepathy if it can't speak any languages, and a creature can end the telepathic connection at any time (no action required). You and the creature don't need to speak a common language to understand each other.",
                            "The first time you use this power after each long rest, you don't expend the Psionic Energy die. All other times you use the power, you expend the die.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Homing Strikes',
                    source: 'TCE',
                    page: 63,
                    subclass_short_name: 'Soulknife',
                    subclass_source: 'TCE',
                    level: 9,
                    entries: {
                        e: [
                            'If you make an attack roll with your Psychic Blades and miss the target, you can roll one Psionic Energy die and add the number rolled to the attack roll. If this causes the attack to hit, you expend the Psionic Energy die.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Psychic Teleportation',
                    source: 'TCE',
                    page: 63,
                    subclass_short_name: 'Soulknife',
                    subclass_source: 'TCE',
                    level: 9,
                    entries: {
                        e: [
                            'As a bonus action, you manifest one of your Psychic Blades, expend one Psionic Energy die and roll it, and throw the blade at an unoccupied space you can see, up to a number of feet away equal to 10 times the number rolled. You then teleport to that space, and the blade vanishes.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '429ccb89-62a8-4d1f-8c82-9549a988de3e',
                },
                {
                    name: 'Beast Master',
                    source: 'PHB',
                    page: 93,
                    subclass_short_name: 'Beast Master',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'The Beast Master archetype embodies a friendship between the civilized races and the beasts of the world. United in focus, beast and ranger work as one to fight the monstrous foes that threaten civilization and the wilderness alike. Emulating the Beast Master archetype means committing yourself to this ideal, working in partnership with an animal as its companion and friend.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: "Ranger's Companion|Ranger||Beast Master||3",
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature:
                                    'Ranger Companion Options|Ranger||Beast Master||3|UAClassFeatureVariants',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Primal Companion|Ranger||Beast Master||3|TCE',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Primal Companion',
                    source: 'TCE',
                    page: 61,
                    subclass_short_name: 'Beast Master',
                    subclass_source: 'PHB',
                    level: 3,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            "3rd-level Beast Master variant feature, which replaces the Ranger's Companion feature",
                            'You magically summon a primal beast, which draws strength from your bond with nature. The beast is friendly to you and your companions and obeys your commands. Choose its stat block—Beast of the Land, Beast of the Sea, or Beast of the Sky—which uses your proficiency bonus (PB) in several places. You also determine the kind of animal the beast is, choosing a kind appropriate for the stat block. Whatever kind you choose, the beast bears primal markings, indicating its mystical origin.',
                            'In combat, the beast acts during your turn. It can move and use its reaction on its own, but the only action it takes is the Dodge action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. You can also sacrifice one of your attacks when you take the Attack action to command the beast to take the Attack action. If you are incapacitated, the beast can take any action of its choice, not just Dodge.',
                            'If the beast has died within the last hour, you can use your action to touch it and expend a spell slot of 1st level or higher. The beast returns to life after 1 minute with all its hit points restored.',
                            'When you finish a long rest, you can summon a different primal beast. The new beast appears in an unoccupied space within 5 feet of you, and you choose its stat block and appearance. If you already have a beast from this feature, it vanishes when the new beast appears. The beast also vanishes if you die.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: "Ranger's Companion",
                    source: 'PHB',
                    page: 93,
                    subclass_short_name: 'Beast Master',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            "You gain a beast companion that accompanies you on your adventures and is trained to fight alongside you. Choose a beast that is no larger than Medium and that has a challenge rating of 1/4 or lower. Add your proficiency bonus to the beast's AC, attack rolls, and damage rolls, as well as to any saving throws and skills it is proficient in. Its hit point maximum equals its normal maximum or four times your ranger level, whichever is higher. Like any creature, the beast can spend Hit Dice during a short rest.",
                            "The beast obeys your commands as best as it can. It takes its turn on your initiative. On your turn, you can verbally command the beast where to move (no action required by you). You can use your action to verbally command it to take the Attack, Dash, Disengage, or Help action. If you don't issue a command, the beast takes the Dodge action. Once you have the Extra Attack feature, you can make one weapon attack yourself when you command the beast to take the Attack action.",
                            'If you are incapacitated or absent, your beast companion acts on its own, focusing on protecting you and itself. It never requires your command to use its reaction, such as when making an opportunity attack.',
                            'While traveling through your favored terrain with only the beast, you can move stealthily at a normal pace.',
                            "If the beast dies, you can obtain another one by spending 8 hours magically bonding with another beast that isn't hostile to you, either the same type of beast as before or a different one.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Exceptional Training',
                    source: 'PHB',
                    page: 93,
                    subclass_short_name: 'Beast Master',
                    subclass_source: 'PHB',
                    level: 7,
                    entries: {
                        e: [
                            "Beginning at 7th level, on any of your turns when your beast companion doesn't attack, you can use a bonus action to command the beast to take the Dash, Disengage, or Help action on its turn. In addition, the beast's attacks now count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Bestial Fury',
                    source: 'PHB',
                    page: 93,
                    subclass_short_name: 'Beast Master',
                    subclass_source: 'PHB',
                    level: 11,
                    entries: {
                        e: [
                            'Starting at 11th level, when you command your beast companion to take the Attack action, the beast can make two attacks, or it can take the Multiattack action if it has that action.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Share Spells',
                    source: 'PHB',
                    page: 93,
                    subclass_short_name: 'Beast Master',
                    subclass_source: 'PHB',
                    level: 15,
                    entries: {
                        e: [
                            'Beginning at 15th level, when you cast a spell targeting yourself, you can also affect your beast companion with the spell if the beast is within 30 feet of you.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Hunter',
                    source: 'PHB',
                    page: 93,
                    subclass_short_name: 'Hunter',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            "Emulating the Hunter archetype means accepting your place as a bulwark between civilization and the terrors of the wilderness. As you walk the Hunter's path, you learn specialized techniques for fighting the threats you face, from rampaging ogres and hordes of orcs to towering giants and terrifying dragons.",
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: "Hunter's Prey|Ranger||Hunter||3",
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Horde Breaker',
                    source: 'PHB',
                    page: 93,
                    subclass_short_name: 'Hunter',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'Once on each of your turns when you make a weapon attack, you can make another attack with the same weapon against a different creature that is within 5 feet of the original target and within range of your weapon.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: "Hunter's Prey",
                    source: 'PHB',
                    page: 93,
                    subclass_short_name: 'Hunter',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'At 3rd level, you gain one of the following features of your choice.',
                            {
                                type: 'options',
                                count: 1,
                                entries: [
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Colossus Slayer|Ranger||Hunter||3',
                                    },
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Giant Killer|Ranger||Hunter||3',
                                    },
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Horde Breaker|Ranger||Hunter||3',
                                    },
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Colossus Slayer',
                    source: 'PHB',
                    page: 93,
                    subclass_short_name: 'Hunter',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            "Your tenacity can wear down the most potent foes. When you hit a creature with a weapon attack, the creature takes an extra 1d8 damage if it's below its hit point maximum. You can deal this extra damage only once per turn.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Giant Killer',
                    source: 'PHB',
                    page: 93,
                    subclass_short_name: 'Hunter',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'When a Large or larger creature within 5 feet of you hits or misses you with an attack, you can use your reaction to attack that creature immediately after its attack, provided that you can see the creature.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Defensive Tactics',
                    source: 'PHB',
                    page: 93,
                    subclass_short_name: 'Hunter',
                    subclass_source: 'PHB',
                    level: 7,
                    entries: {
                        e: [
                            'At 7th level, you gain one of the following features of your choice.',
                            {
                                type: 'options',
                                count: 1,
                                entries: [
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Escape the Horde|Ranger||Hunter||7',
                                    },
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Multiattack Defense|Ranger||Hunter||7',
                                    },
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Steel Will|Ranger||Hunter||7',
                                    },
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Escape the Horde',
                    source: 'PHB',
                    page: 93,
                    subclass_short_name: 'Hunter',
                    subclass_source: 'PHB',
                    level: 7,
                    entries: {
                        e: ['Opportunity attacks against you are made with disadvantage.'],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Multiattack Defense',
                    source: 'PHB',
                    page: 93,
                    subclass_short_name: 'Hunter',
                    subclass_source: 'PHB',
                    level: 7,
                    entries: {
                        e: [
                            'When a creature hits you with an attack, you gain a +4 bonus to AC against all subsequent attacks made by that creature for the rest of the turn.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Steel Will',
                    source: 'PHB',
                    page: 93,
                    subclass_short_name: 'Hunter',
                    subclass_source: 'PHB',
                    level: 7,
                    entries: {
                        e: ['You have advantage on saving throws against being frightened.'],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Multiattack',
                    source: 'PHB',
                    page: 93,
                    subclass_short_name: 'Hunter',
                    subclass_source: 'PHB',
                    level: 11,
                    entries: {
                        e: [
                            'At 11th level, you gain one of the following features of your choice.',
                            {
                                type: 'options',
                                count: 1,
                                entries: [
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Volley|Ranger||Hunter||11',
                                    },
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Whirlwind Attack|Ranger||Hunter||11',
                                    },
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Volley',
                    source: 'PHB',
                    page: 93,
                    subclass_short_name: 'Hunter',
                    subclass_source: 'PHB',
                    level: 11,
                    entries: {
                        e: [
                            "You can use your action to make a ranged attack against any number of creatures within 10 feet of a point you can see within your weapon's range. You must have ammunition for each target, as normal, and you make a separate attack roll for each target.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Whirlwind Attack',
                    source: 'PHB',
                    page: 93,
                    subclass_short_name: 'Hunter',
                    subclass_source: 'PHB',
                    level: 11,
                    entries: {
                        e: [
                            'You can use your action to make a melee attack against any number of creatures within 5 feet of you, with a separate attack roll for each target.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Evasion',
                    source: 'PHB',
                    page: 93,
                    subclass_short_name: 'Hunter',
                    subclass_source: 'PHB',
                    level: 15,
                    entries: {
                        e: [
                            "You can nimbly dodge out of the way of certain area effects, such as a red dragon's fiery breath or a lightning bolt spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Stand Against the Tide',
                    source: 'PHB',
                    page: 93,
                    subclass_short_name: 'Hunter',
                    subclass_source: 'PHB',
                    level: 15,
                    entries: {
                        e: [
                            'When a hostile creature misses you with a melee attack, you can use your reaction to force that creature to repeat the same attack against another creature (other than itself) of your choice.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: "Superior Hunter's Defense",
                    source: 'PHB',
                    page: 93,
                    subclass_short_name: 'Hunter',
                    subclass_source: 'PHB',
                    level: 15,
                    entries: {
                        e: [
                            'At 15th level, you gain one of the following features of your choice.',
                            {
                                type: 'options',
                                count: 1,
                                entries: [
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Evasion|Ranger||Hunter||15',
                                    },
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Stand Against the Tide|Ranger||Hunter||15',
                                    },
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Uncanny Dodge|Ranger||Hunter||15',
                                    },
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Uncanny Dodge',
                    source: 'PHB',
                    page: 93,
                    subclass_short_name: 'Hunter',
                    subclass_source: 'PHB',
                    level: 15,
                    entries: {
                        e: [
                            "When an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Fey Wanderer',
                    source: 'TCE',
                    page: 58,
                    subclass_short_name: 'Fey Wanderer',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            'A fey mystique surrounds you, thanks to the boon of an archfey, the shining fruit you ate from a talking tree, the magic spring you swam in, or some other auspicious event. However you acquired your fey magic, you are now a Fey Wanderer, a ranger who represents both the mortal and the fey realms. As you wander the multiverse, your joyful laughter brightens the hearts of the downtrodden, and your martial prowess strikes terror in your foes, for great is the mirth of the fey and dreadful is their fury.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Dreadful Strikes|Ranger||Fey Wanderer|TCE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Fey Wanderer Magic|Ranger||Fey Wanderer|TCE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Otherworldly Glamour|Ranger||Fey Wanderer|TCE|3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Dreadful Strikes',
                    source: 'TCE',
                    page: 58,
                    subclass_short_name: 'Fey Wanderer',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            '3rd-level Fey Wanderer feature',
                            'You can augment your weapon strikes with mind-scarring magic, drawn from the gloomy hollows of the Feywild. When you hit a creature with a weapon, you can deal an extra 1d4 psychic damage to the target, which can take this extra damage only once per turn.',
                            'The extra damage increases to 1d6 when you reach 11th level in this class.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Fey Wanderer Magic',
                    source: 'TCE',
                    page: 58,
                    subclass_short_name: 'Fey Wanderer',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            '3rd-level Fey Wanderer feature',
                            "You learn an additional spell when you reach certain levels in this class, as shown in the Fey Wanderer Spells table. Each spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know.",
                            {
                                type: 'table',
                                caption: 'Fey Wanderer Spells',
                                colLabels: ['Ranger Level', 'Spells'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['3rd', 'charm person'],
                                    ['5th', 'misty step'],
                                    ['9th', 'dispel magic'],
                                    ['13th', 'dimension door'],
                                    ['17th', 'mislead'],
                                ],
                            },
                            'You also possess a preternatural blessing from a fey ally or a place of fey power. Choose your blessing from the Feywild Gifts table or determine it randomly.',
                            {
                                type: 'table',
                                caption: 'Feywild Gifts',
                                colLabels: ['d6', 'Gift'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    [
                                        '1',
                                        'Illusory butterflies flutter around you while you take a short or long rest.',
                                    ],
                                    ['2', 'Fresh, seasonal flowers sprout from your hair each dawn.'],
                                    [
                                        '3',
                                        'You faintly smell of cinnamon, lavender, nutmeg, or another comforting herb or spice.',
                                    ],
                                    ['4', 'Your shadow dances while no one is looking directly at it.'],
                                    ['5', 'Horns or antlers sprout from your head.'],
                                    [
                                        '6',
                                        'Your skin and hair change color to match the season at each dawn.',
                                    ],
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Otherworldly Glamour',
                    source: 'TCE',
                    page: 58,
                    subclass_short_name: 'Fey Wanderer',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            '3rd-level Fey Wanderer feature',
                            'Your fey qualities give you a supernatural charm. As a result, whenever you make a Charisma check, you gain a bonus to the check equal to your Wisdom modifier (minimum of +1).',
                            'In addition, you gain proficiency in one of the following skills of your choice: Deception, Performance, or Persuasion.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Beguiling Twist',
                    source: 'TCE',
                    page: 58,
                    subclass_short_name: 'Fey Wanderer',
                    subclass_source: 'TCE',
                    level: 7,
                    entries: {
                        e: [
                            '7th-level Fey Wanderer feature',
                            'The magic of the Feywild guards your mind. You have advantage on saving throws against being charmed or frightened.',
                            'In addition, whenever you or a creature you can see within 120 feet of you succeeds on a saving throw against being charmed or frightened, you can use your reaction to force a different creature you can see within 120 feet of you to make a Wisdom saving throw against your spell save DC. If the save fails, the target is charmed or frightened by you (your choice) for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a successful save.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Fey Reinforcements',
                    source: 'TCE',
                    page: 58,
                    subclass_short_name: 'Fey Wanderer',
                    subclass_source: 'TCE',
                    level: 11,
                    entries: {
                        e: [
                            '11th-level Fey Wanderer feature',
                            "The royal courts of the Feywild have blessed you with the assistance of fey beings: you know summon fey. It doesn't count against the number of ranger spells you know, and you can cast it without a material component. You can also cast it once without a spell slot, and you regain the ability to do so when you finish a long rest.",
                            "Whenever you start casting the spell, you can modify it so that it doesn't require concentration. If you do so, the spell's duration becomes 1 minute for that casting.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Misty Wanderer',
                    source: 'TCE',
                    page: 58,
                    subclass_short_name: 'Fey Wanderer',
                    subclass_source: 'TCE',
                    level: 15,
                    entries: {
                        e: [
                            '15th-level Fey Wanderer feature',
                            'You can slip in and out of the Feywild to move in a blink of an eye: you can cast misty step without expending a spell slot. You can do so a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses when you finish a long rest.',
                            'In addition, whenever you cast misty step, you can bring along one willing creature you can see within 5 feet of you. That creature teleports to an unoccupied space of your choice within 5 feet of your destination space.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Swarmkeeper',
                    source: 'TCE',
                    page: 59,
                    subclass_short_name: 'Swarmkeeper',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            'Feeling a deep connection to the environment around them, some rangers reach out through their magical connection to the world and bond with a swarm of nature spirits. The swarm becomes a potent force in battle, as well as helpful company for the ranger. Some Swarmkeepers are outcasts or hermits, keeping to themselves and their attendant swarms rather than dealing with the discomfort of others. Other Swarmkeepers enjoy building vibrant communities that work for the mutual benefit of all those they consider part of their swarm.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Gathered Swarm|Ranger||Swarmkeeper|TCE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Swarmkeeper Magic|Ranger||Swarmkeeper|TCE|3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Gathered Swarm',
                    source: 'TCE',
                    page: 59,
                    subclass_short_name: 'Swarmkeeper',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            '3rd-level Swarmkeeper feature',
                            'A swarm of intangible nature spirits has bonded itself to you and can assist you in battle. Until you die, the swarm remains in your space, crawling on you or flying and skittering around you within your space. You determine its appearance, or you generate its appearance by rolling on the Swarm Appearance table.',
                            {
                                type: 'table',
                                caption: 'Swarm Appearance',
                                colLabels: ['d4', 'Appearance'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['1', 'Swarming insects'],
                                    ['2', 'Miniature twig blights'],
                                    ['3', 'Fluttering birds'],
                                    ['4', 'Playful pixies'],
                                ],
                            },
                            'Once on each of your turns, you can cause the swarm to assist you in one of the following ways, immediately after you hit a creature with an attack:',
                            {
                                type: 'list',
                                items: [
                                    "The attack's target takes 1d6 piercing damage from the swarm.",
                                    "The attack's target must succeed on a Strength saving throw against your spell save DC or be moved by the swarm up to 15 feet horizontally in a direction of your choice.",
                                    'You are moved by the swarm 5 feet horizontally in a direction of your choice.',
                                ],
                            },
                            {
                                type: 'inset',
                                name: "It's Your Swarm",
                                entries: [
                                    "A Swarmkeeper's swarm and spells are reflections of the character's bond with nature spirits. Take the opportunity to describe the swarm and the ranger's magic in play. For example, when your ranger casts gaseous form, they might appear to melt into the swarm, instead of a cloud of mist, or the arcane eye spell could create an extension of your swarm that spies for you. Such descriptions don't change the effects of spells, but they are an exciting opportunity to explore your character's narrative through their class abilities. For more guidance on customizing spells, see the \"Personalizing Spells\" section in chapter 3.",
                                    "Also, remember that the swarm's appearance is yours to customize, and don't feel confined to a single appearance. Perhaps the spirits' look changes with the ranger's mood or with the seasons. You decide!",
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Swarmkeeper Magic',
                    source: 'TCE',
                    page: 59,
                    subclass_short_name: 'Swarmkeeper',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            '3rd-level Swarmkeeper feature',
                            "You learn the mage hand cantrip if you don't already know it. When you cast it, the hand takes the form of your swarming nature spirits.",
                            "You also learn an additional spell of 1st level or higher when you reach certain levels in this class, as shown in the Swarmkeeper Spells table. Each spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know.",
                            {
                                type: 'table',
                                caption: 'Swarmkeeper Spells',
                                colLabels: ['Ranger Level', 'Spells'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['3rd', 'faerie fire'],
                                    ['5th', 'web'],
                                    ['9th', 'gaseous form'],
                                    ['13th', 'arcane eye'],
                                    ['17th', 'insect plague'],
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Writhing Tide',
                    source: 'TCE',
                    page: 59,
                    subclass_short_name: 'Swarmkeeper',
                    subclass_source: 'TCE',
                    level: 7,
                    entries: {
                        e: [
                            '7th-level Swarmkeeper feature',
                            'You can condense part of your swarm into a focused mass that lifts you up. As a bonus action, you gain a flying speed of 10 feet and can hover. This effect lasts for 1 minute or until you are incapacitated.',
                            'You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Mighty Swarm',
                    source: 'TCE',
                    page: 59,
                    subclass_short_name: 'Swarmkeeper',
                    subclass_source: 'TCE',
                    level: 11,
                    entries: {
                        e: [
                            '11th-level Swarmkeeper feature',
                            'Your Gathered Swarm grows mightier in the following ways:',
                            {
                                type: 'list',
                                items: [
                                    'The damage of Gathered Swarm increases to 1d8.',
                                    'If a creature fails its saving throw against being moved by Gathered Swarm, you can also cause the swarm to knock the creature prone.',
                                    'When you are moved by Gathered Swarm, it gives you half cover until the start of your next turn.',
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Swarming Dispersal',
                    source: 'TCE',
                    page: 59,
                    subclass_short_name: 'Swarmkeeper',
                    subclass_source: 'TCE',
                    level: 15,
                    entries: {
                        e: [
                            '15th-level Swarmkeeper feature',
                            'You can discorporate into your swarm, avoiding danger. When you take damage, you can use your reaction to give yourself resistance to that damage. You vanish into your swarm and then teleport to an unoccupied space that you can see within 30 feet of you, where you reappear with the swarm.',
                            'You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Gloom Stalker',
                    source: 'XGE',
                    page: 41,
                    subclass_short_name: 'Gloom Stalker',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'Gloom Stalkers are at home in the darkest places: deep under the earth, in gloomy alleyways, in primeval forests, and wherever else the light dims. Most folk enter such places with trepidation, but a Gloom Stalker ventures boldly into the darkness, seeking to ambush threats before they can reach the broader world. Such rangers are often found in the Underdark, but they will go any place where evil lurks in the shadows.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Gloom Stalker Magic|Ranger||Gloom Stalker|XGE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Dread Ambusher|Ranger||Gloom Stalker|XGE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Umbral Sight|Ranger||Gloom Stalker|XGE|3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Dread Ambusher',
                    source: 'XGE',
                    page: 41,
                    subclass_short_name: 'Gloom Stalker',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'At 3rd level, you master the art of the ambush. You can give yourself a bonus to your initiative rolls equal to your Wisdom modifier.',
                            "At the start of your first turn of each combat, your walking speed increases by 10 feet, which lasts until the end of that turn. If you take the Attack action on that turn, you can make one additional weapon attack as part of that action. If that attack hits, the target takes an extra 1d8 damage of the weapon's damage type.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Gloom Stalker Magic',
                    source: 'XGE',
                    page: 41,
                    subclass_short_name: 'Gloom Stalker',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            "Starting at 3rd level, you learn an additional spell when you reach certain levels in this class, as shown in the Gloom Stalker Spells table. The spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know.",
                            {
                                type: 'table',
                                caption: 'Gloom Stalker Spells',
                                colLabels: ['Ranger Level', 'Spells'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['3rd', 'disguise self'],
                                    ['5th', 'rope trick'],
                                    ['9th', 'fear'],
                                    ['13th', 'greater invisibility'],
                                    ['17th', 'seeming'],
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Umbral Sight',
                    source: 'XGE',
                    page: 41,
                    subclass_short_name: 'Gloom Stalker',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'At 3rd level, you gain darkvision out to a range of 60 feet. If you already have darkvision from your race, its range increases by 30 feet.',
                            'You are also adept at evading creatures that rely on darkvision. While in darkness, you are invisible to any creature that relies on darkvision to see you in that darkness.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Iron Mind',
                    source: 'XGE',
                    page: 41,
                    subclass_short_name: 'Gloom Stalker',
                    subclass_source: 'XGE',
                    level: 7,
                    entries: {
                        e: [
                            'By 7th level, you have honed your ability to resist the mind-altering powers of your prey. You gain proficiency in Wisdom saving throws. If you already have this proficiency, you instead gain proficiency in Intelligence or Charisma saving throws (your choice).',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: "Stalker's Flurry",
                    source: 'XGE',
                    page: 41,
                    subclass_short_name: 'Gloom Stalker',
                    subclass_source: 'XGE',
                    level: 11,
                    entries: {
                        e: [
                            'At 11th level, you learn to attack with such unexpected speed that you can turn a miss into another strike. Once on each of your turns when you miss with a weapon attack, you can make another weapon attack as part of the same action.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Shadowy Dodge',
                    source: 'XGE',
                    page: 41,
                    subclass_short_name: 'Gloom Stalker',
                    subclass_source: 'XGE',
                    level: 15,
                    entries: {
                        e: [
                            "Starting at 15th level, you can dodge in unforeseen ways, with wisps of supernatural shadow around you. Whenever a creature makes an attack roll against you and doesn't have advantage on the roll, you can use your reaction to impose disadvantage on it. You must use this feature before you know the outcome of the attack roll.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Horizon Walker',
                    source: 'XGE',
                    page: 42,
                    subclass_short_name: 'Horizon Walker',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'Horizon Walkers guard the world against threats that originate from other planes or that seek to ravage the mortal realm with otherworldly magic. They seek out planar portals and keep watch over them, venturing to the Inner Planes and the Outer Planes as needed to pursue their foes. These rangers are also friends to any forces in the multiverse—especially benevolent dragons, fey, and elementals—that work to preserve life and the order of the planes.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Horizon Walker Magic|Ranger||Horizon Walker|XGE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Detect Portal|Ranger||Horizon Walker|XGE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Planar Warrior|Ranger||Horizon Walker|XGE|3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Detect Portal',
                    source: 'XGE',
                    page: 42,
                    subclass_short_name: 'Horizon Walker',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'At 3rd level, you gain the ability to magically sense the presence of a planar portal. As an action, you detect the distance and direction to the closest planar portal within 1 mile of you.',
                            "Once you use this feature, you can't use it again until you finish a short or long rest.",
                            'See the "Planar Travel" section in chapter 2 of the Dungeon Master\'s Guide for examples of planar portals.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Horizon Walker Magic',
                    source: 'XGE',
                    page: 42,
                    subclass_short_name: 'Horizon Walker',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            "Starting at 3rd level, you learn an additional spell when you reach certain levels in this class, as shown in the Horizon Walker Spells table. The spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know.",
                            {
                                type: 'table',
                                caption: 'Horizon Walker Spells',
                                colLabels: ['Ranger Level', 'Spells'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['3rd', 'protection from evil and good'],
                                    ['5th', 'misty step'],
                                    ['9th', 'haste'],
                                    ['13th', 'banishment'],
                                    ['17th', 'teleportation circle'],
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Planar Warrior',
                    source: 'XGE',
                    page: 42,
                    subclass_short_name: 'Horizon Walker',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'At 3rd level, you learn to draw on the energy of the multiverse to augment your attacks.',
                            'As a bonus action, choose one creature you can see within 30 feet of you. The next time you hit that creature on this turn with a weapon attack, all damage dealt by the attack becomes force damage, and the creature takes an extra 1d8 force damage from the attack. When you reach 11th level in this class, the extra damage increases to 2d8.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Ethereal Step',
                    source: 'XGE',
                    page: 42,
                    subclass_short_name: 'Horizon Walker',
                    subclass_source: 'XGE',
                    level: 7,
                    entries: {
                        e: [
                            'At 7th level, you learn to step through the Ethereal Plane. As a bonus action, you can cast the etherealness spell with this feature, without expending a spell slot, but the spell ends at the end of the current turn.',
                            "Once you use this feature, you can't use it again until you finish a short or long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Distant Strike',
                    source: 'XGE',
                    page: 42,
                    subclass_short_name: 'Horizon Walker',
                    subclass_source: 'XGE',
                    level: 11,
                    entries: {
                        e: [
                            'At 11th level, you gain the ability to pass between the planes in the blink of an eye. When you take the Attack action, you can teleport up to 10 feet before each attack to an unoccupied space you can see.',
                            'If you attack at least two different creatures with the action, you can make one additional attack with it against a third creature.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Spectral Defense',
                    source: 'XGE',
                    page: 42,
                    subclass_short_name: 'Horizon Walker',
                    subclass_source: 'XGE',
                    level: 15,
                    entries: {
                        e: [
                            "At 15th level, your ability to move between planes enables you to slip through the planar boundaries to lessen the harm done to you during battle. When you take damage from an attack, you can use your reaction to give yourself resistance to all of that attack's damage on this turn.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Monster Slayer',
                    source: 'XGE',
                    page: 43,
                    subclass_short_name: 'Monster Slayer',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'You have dedicated yourself to hunting down creatures of the night and wielders of grim magic. A Monster Slayer seeks out vampires, dragons, evil fey, fiends, and other magical threats. Trained in supernatural techniques to overcome such monsters, slayers are experts at unearthing and defeating mighty, mystical foes.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Monster Slayer Magic|Ranger||Monster Slayer|XGE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: "Hunter's Sense|Ranger||Monster Slayer|XGE|3",
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: "Slayer's Prey|Ranger||Monster Slayer|XGE|3",
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: "Hunter's Sense",
                    source: 'XGE',
                    page: 43,
                    subclass_short_name: 'Monster Slayer',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'At 3rd level, you gain the ability to peer at a creature and magically discern how best to hurt it. As an action, choose one creature you can see within 60 feet of you. You immediately learn whether the creature has any damage immunities, resistances, or vulnerabilities and what they are. If the creature is hidden from divination magic, you sense that it has no damage immunities, resistances, or vulnerabilities.',
                            'You can use this feature a number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses of it when you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Monster Slayer Magic',
                    source: 'XGE',
                    page: 43,
                    subclass_short_name: 'Monster Slayer',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            "Starting at 3rd level, you learn an additional spell when you reach certain levels in this class, as shown in the Monster Slayer Spells table. The spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know.",
                            {
                                type: 'table',
                                caption: 'Monster Slayer Spells',
                                colLabels: ['Ranger Level', 'Spells'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['3rd', 'protection from evil and good'],
                                    ['5th', 'zone of truth'],
                                    ['9th', 'magic circle'],
                                    ['13th', 'banishment'],
                                    ['17th', 'hold monster'],
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: "Slayer's Prey",
                    source: 'XGE',
                    page: 43,
                    subclass_short_name: 'Monster Slayer',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'Starting at 3rd level, you can focus your ire on one foe, increasing the harm you inflict on it. As a bonus action, you designate one creature you can see within 60 feet of you as the target of this feature. The first time each turn that you hit that target with a weapon attack, it takes an extra 1d6 damage from the weapon.',
                            'This benefit lasts until you finish a short or long rest. It ends early if you designate a different creature.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Supernatural Defense',
                    source: 'XGE',
                    page: 43,
                    subclass_short_name: 'Monster Slayer',
                    subclass_source: 'XGE',
                    level: 7,
                    entries: {
                        e: [
                            "At 7th level, you gain extra resilience against your prey's assaults on your mind and body. Whenever the target of your Slayer's Prey forces you to make a saving throw and whenever you make an ability check to escape that target's grapple, add 1d6 to your roll.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: "Magic-User's Nemesis",
                    source: 'XGE',
                    page: 43,
                    subclass_short_name: 'Monster Slayer',
                    subclass_source: 'XGE',
                    level: 11,
                    entries: {
                        e: [
                            "At 11th level, you gain the ability to thwart someone else's magic. When you see a creature casting a spell or teleporting within 60 feet of you, you can use your reaction to try to magically foil it. The creature must succeed on a Wisdom saving throw against your spell save DC, or its spell or teleport fails and is wasted.",
                            "Once you use this feature, you can't use it again until you finish a short or long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: "Slayer's Counter",
                    source: 'XGE',
                    page: 43,
                    subclass_short_name: 'Monster Slayer',
                    subclass_source: 'XGE',
                    level: 15,
                    entries: {
                        e: [
                            "At 15th level, you gain the ability to counterattack when your prey tries to sabotage you. If the target of your Slayer's Prey forces you to make a saving throw, you can use your reaction to make one weapon attack against the quarry. You make this attack immediately before making the saving throw. If your attack hits, your save automatically succeeds, in addition to the attack's normal effects.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '5116d376-344c-4c22-82a0-b4d32c58147e',
                },
                {
                    name: 'Oathbreaker',
                    source: 'DMG',
                    page: 97,
                    subclass_short_name: 'Oathbreaker',
                    subclass_source: 'DMG',
                    level: 3,
                    entries: {
                        e: [
                            "An Oathbreaker is a paladin who breaks his or her sacred oaths to pursue some dark ambition or serve an evil power. Whatever light burned in the paladin's heart has been extinguished. Only darkness remains.",
                            'A paladin must be evil and at least 3rd level to become an Oathbreaker. The paladin replaces the features specific to his or her Sacred Oath with Oathbreaker features.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Oathbreaker Spells|Paladin||Oathbreaker|DMG|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature:
                                    'Oathbreaker Channel Divinity: Control Undead|Paladin||Oathbreaker|DMG|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature:
                                    'Oathbreaker Channel Divinity: Dreadful Aspect|Paladin||Oathbreaker|DMG|3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Oathbreaker Channel Divinity: Control Undead',
                    source: 'DMG',
                    page: 97,
                    subclass_short_name: 'Oathbreaker',
                    subclass_source: 'DMG',
                    level: 3,
                    entries: {
                        e: [
                            "As an action, the paladin targets one undead creature he or she can see within 30 feet of him or her. The target must make a Wisdom saving throw. On a failed save, the target must obey the paladin's commands for the next 24 hours, or until the paladin uses this Channel Divinity option again. An undead whose challenge rating is equal to or greater than the paladin's level is immune to this effect.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Oathbreaker Channel Divinity: Dreadful Aspect',
                    source: 'DMG',
                    page: 97,
                    subclass_short_name: 'Oathbreaker',
                    subclass_source: 'DMG',
                    level: 3,
                    entries: {
                        e: [
                            "As an action, the paladin channels the darkest emotions and focuses them into a burst of magical menace. Each creature of the paladin's choice within 30 feet of the paladin must make a Wisdom saving throw if it can see the paladin. On a failed save, the target is frightened of the paladin for 1 minute. If a creature frightened by this effect ends its turn more than 30 feet away from the paladin, it can attempt another Wisdom saving throw to end the effect on it.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Oathbreaker Spells',
                    source: 'DMG',
                    page: 97,
                    subclass_short_name: 'Oathbreaker',
                    subclass_source: 'DMG',
                    level: 3,
                    entries: {
                        e: [
                            'You gain oathbreaker spells at the paladin levels listed.',
                            {
                                type: 'table',
                                caption: 'Oathbreaker Spells',
                                colLabels: ['Paladin Level', 'Spells'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['3rd', 'hellish rebuke, inflict wounds'],
                                    ['5th', 'crown of madness, darkness'],
                                    ['9th', 'animate dead, bestow curse'],
                                    ['13th', 'blight, confusion'],
                                    ['17th', 'contagion, dominate person'],
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Aura of Hate',
                    source: 'DMG',
                    page: 97,
                    subclass_short_name: 'Oathbreaker',
                    subclass_source: 'DMG',
                    level: 7,
                    entries: {
                        e: [
                            "Starting at 7th level, the paladin, as well any fiends and undead within 10 feet of the paladin, gains a bonus to melee weapon damage rolls equal to the paladin's Charisma modifier (minimum of +1). A creature can benefit from this feature from only one paladin at a time.",
                            'At 18th level, the range of this aura increases to 30 feet.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Supernatural Resistance',
                    source: 'DMG',
                    page: 97,
                    subclass_short_name: 'Oathbreaker',
                    subclass_source: 'DMG',
                    level: 15,
                    entries: {
                        e: [
                            'At 15th level, the paladin gains resistance to bludgeoning, piercing, and slashing damage from nonmagical weapons.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Dread Lord',
                    source: 'DMG',
                    page: 97,
                    subclass_short_name: 'Oathbreaker',
                    subclass_source: 'DMG',
                    level: 20,
                    entries: {
                        e: [
                            'At 20th level, the paladin can, as an action, surround himself or herself with an aura of gloom that lasts for 1 minute. The aura reduces any bright light in a 30-foot radius around the paladin to dim light. Whenever an enemy that is frightened by the paladin starts its turn in the aura, it takes 4d10 psychic damage. Additionally, the paladin and creatures he or she chooses in the aura are draped in deeper shadow. Creatures that rely on sight have disadvantage on attack rolls against creatures draped in this shadow.',
                            "While the aura lasts, the paladin can use a bonus action on his or her turn to cause the shadows in the aura to attack one creature. The paladin makes a melee spell attack against the target. If the attack hits, the target takes necrotic damage equal to 3d10 + the paladin's Charisma modifier.",
                            "After activating the aura, the paladin can't do so again until he or she finishes a long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Oath of the Ancients',
                    source: 'PHB',
                    page: 86,
                    subclass_short_name: 'Ancients',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'The Oath of the Ancients is as old as the race of elves and the rituals of the druids. Sometimes called fey knights, green knights, or horned knights, paladins who swear this oath cast their lot with the side of the light in the cosmic struggle against darkness because they love the beautiful and life-giving things of the world, not necessarily because they believe in principles of honor, courage, and justice. They adorn their armor and clothing with images of growing things—leaves, antlers, or flowers—to reflect their commitment to preserving life and light in the world.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Tenets of the Ancients|Paladin||Ancients||3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Oath Spells|Paladin||Ancients||3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature:
                                    "Channel Divinity: Nature's Wrath|Paladin||Ancients||3",
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature:
                                    'Channel Divinity: Turn the Faithless|Paladin||Ancients||3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: "Channel Divinity: Nature's Wrath",
                    source: 'PHB',
                    page: 86,
                    subclass_short_name: 'Ancients',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'You can use your Channel Divinity to invoke primeval forces to ensnare a foe. As an action, you can cause spectral vines to spring up and reach for a creature within 10 feet of you that you can see. The creature must succeed on a Strength or Dexterity saving throw (its choice) or be restrained. While restrained by the vines, the creature repeats the saving throw at the end of each of its turns. On a success, it frees itself and the vines vanish.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Channel Divinity: Turn the Faithless',
                    source: 'PHB',
                    page: 86,
                    subclass_short_name: 'Ancients',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'You can use your Channel Divinity to utter ancient words that are painful for fey and fiends to hear. As an action, you present your holy symbol, and each fey or fiend within 30 feet of you that can hear you must make a Wisdom saving throw. On a failed save, the creature is turned for 1 minute or until it takes damage.',
                            "A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action.",
                            "If the creature's true form is concealed by an illusion, shapeshifting, or other effect, that form is revealed while it is turned.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Oath Spells',
                    source: 'PHB',
                    page: 86,
                    subclass_short_name: 'Ancients',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'You gain oath spells at the paladin levels listed.',
                            {
                                type: 'table',
                                caption: 'Oath of the Ancients Spells',
                                colLabels: ['Paladin Level', 'Spells'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['3rd', 'ensnaring strike, speak with animals'],
                                    ['5th', 'moonbeam, misty step'],
                                    ['9th', 'plant growth, protection from energy'],
                                    ['13th', 'ice storm, stoneskin'],
                                    ['17th', 'commune with nature, tree stride'],
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Tenets of the Ancients',
                    source: 'PHB',
                    page: 86,
                    subclass_short_name: 'Ancients',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'The tenets of the Oath of the Ancients have been preserved for uncounted centuries. This oath emphasizes the principles of good above any concerns of law or chaos. Its four central principles are simple.',
                            {
                                type: 'entries',
                                entries: [
                                    {
                                        type: 'entries',
                                        name: 'Kindle the Light',
                                        entries: [
                                            'Through your acts of mercy, kindness, and forgiveness, kindle the light of hope in the world, beating back despair.',
                                        ],
                                    },
                                ],
                            },
                            {
                                type: 'entries',
                                entries: [
                                    {
                                        type: 'entries',
                                        name: 'Shelter the Light',
                                        entries: [
                                            'Where there is good, beauty, love, and laughter in the world, stand against the wickedness that would swallow it. Where life flourishes, stand against the forces that would render it barren.',
                                        ],
                                    },
                                ],
                            },
                            {
                                type: 'entries',
                                entries: [
                                    {
                                        type: 'entries',
                                        name: 'Preserve Your Own Light',
                                        entries: [
                                            "Delight in song and laughter, in beauty and art. If you allow the light to die in your own heart, you can't preserve it in the world.",
                                        ],
                                    },
                                ],
                            },
                            {
                                type: 'entries',
                                entries: [
                                    {
                                        type: 'entries',
                                        name: 'Be the Light',
                                        entries: [
                                            'Be a glorious beacon for all who live in despair. Let the light of your joy and courage shine forth in all your deeds.',
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Aura of Warding',
                    source: 'PHB',
                    page: 86,
                    subclass_short_name: 'Ancients',
                    subclass_source: 'PHB',
                    level: 7,
                    entries: {
                        e: [
                            'Beginning at 7th level, ancient magic lies so heavily upon you that it forms an eldritch ward. You and friendly creatures within 10 feet of you have resistance to damage from spells.',
                            'At 18th level, the range of this aura increases to 30 feet.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Undying Sentinel',
                    source: 'PHB',
                    page: 86,
                    subclass_short_name: 'Ancients',
                    subclass_source: 'PHB',
                    level: 15,
                    entries: {
                        e: [
                            "Starting at 15th level, when you are reduced to 0 hit points and are not killed outright, you can choose to drop to 1 hit point instead. Once you use this ability, you can't use it again until you finish a long rest.",
                            "Additionally, you suffer none of the drawbacks of old age, and you can't be aged magically.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Elder Champion',
                    source: 'PHB',
                    page: 86,
                    subclass_short_name: 'Ancients',
                    subclass_source: 'PHB',
                    level: 20,
                    entries: {
                        e: [
                            'At 20th level, you can assume the form of an ancient force of nature, taking on an appearance you choose. For example, your skin might turn green or take on a bark-like texture, your hair might become leafy or mosslike, or you might sprout antlers or a lion-like mane.',
                            'Using your action, you undergo a transformation. For 1 minute, you gain the following benefits:',
                            {
                                type: 'list',
                                items: [
                                    'At the start of each of your turns, you regain 10 hit points.',
                                    'Whenever you cast a paladin spell that has a casting time of 1 action, you can cast it using your bonus action instead.',
                                    'Enemy creatures within 10 feet of you have disadvantage on saving throws against your paladin spells and Channel Divinity options.',
                                ],
                            },
                            "Once you use this feature, you can't use it again until you finish a long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Oath of Devotion',
                    source: 'PHB',
                    page: 85,
                    subclass_short_name: 'Devotion',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            "The Oath of Devotion binds a paladin to the loftiest ideals of justice, virtue, and order. Sometimes called cavaliers, white knights, or holy warriors, these paladins meet the ideal of the knight in shining armor, acting with honor in pursuit of justice and the greater good. They hold themselves to the highest standards of conduct, and some, for better or worse, hold the rest of the world to the same standards. Many who swear this oath are devoted to gods of law and good and use their gods' tenets as the measure of their devotion. They hold angels—the perfect servants of good—as their ideals, and incorporate images of angelic wings into their helmets or coats of arms.",
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Tenets of Devotion|Paladin||Devotion||3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Oath Spells|Paladin||Devotion||3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature:
                                    'Channel Divinity: Sacred Weapon|Paladin||Devotion||3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature:
                                    'Channel Divinity: Turn the Unholy|Paladin||Devotion||3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Channel Divinity: Sacred Weapon',
                    source: 'PHB',
                    page: 85,
                    subclass_short_name: 'Devotion',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'As an action, you can imbue one weapon that you are holding with positive energy, using your Channel Divinity. For 1 minute, you add your Charisma modifier to attack rolls made with that weapon (with a minimum bonus of +1). The weapon also emits bright light in a 20-foot radius and dim light 20 feet beyond that. If the weapon is not already magical, it becomes magical for the duration.',
                            'You can end this effect on your turn as part of any other action. If you are no longer holding or carrying this weapon, or if you fall unconscious, this effect ends.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Channel Divinity: Turn the Unholy',
                    source: 'PHB',
                    page: 85,
                    subclass_short_name: 'Devotion',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'As an action, you present your holy symbol and speak a prayer censuring fiends and undead, using your Channel Divinity. Each fiend or undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes damage.',
                            "A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Oath Spells',
                    source: 'PHB',
                    page: 85,
                    subclass_short_name: 'Devotion',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'You gain oath spells at the paladin levels listed.',
                            {
                                type: 'table',
                                caption: 'Oath of Devotion Spells',
                                colLabels: ['Paladin Level', 'Spells'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['3rd', 'protection from evil and good, sanctuary'],
                                    ['5th', 'lesser restoration, zone of truth'],
                                    ['9th', 'beacon of hope, dispel magic'],
                                    ['13th', 'freedom of movement, guardian of faith'],
                                    ['17th', 'commune, flame strike'],
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Tenets of Devotion',
                    source: 'PHB',
                    page: 85,
                    subclass_short_name: 'Devotion',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'Though the exact words and strictures of the Oath of Devotion vary, paladins of this oath share these tenets.',
                            {
                                type: 'entries',
                                entries: [
                                    {
                                        type: 'entries',
                                        name: 'Honesty',
                                        entries: ["Don't lie or cheat. Let your word be your promise."],
                                    },
                                ],
                            },
                            {
                                type: 'entries',
                                entries: [
                                    {
                                        type: 'entries',
                                        name: 'Courage',
                                        entries: ['Never fear to act, though caution is wise.'],
                                    },
                                ],
                            },
                            {
                                type: 'entries',
                                entries: [
                                    {
                                        type: 'entries',
                                        name: 'Compassion',
                                        entries: [
                                            'Aid others, protect the weak, and punish those who threaten them. Show mercy to your foes, but temper it with wisdom.',
                                        ],
                                    },
                                ],
                            },
                            {
                                type: 'entries',
                                entries: [
                                    {
                                        type: 'entries',
                                        name: 'Honor',
                                        entries: [
                                            'Treat others with fairness, and let your honorable deeds be an example to them. Do as much good as possible while causing the least amount of harm.',
                                        ],
                                    },
                                ],
                            },
                            {
                                type: 'entries',
                                entries: [
                                    {
                                        type: 'entries',
                                        name: 'Duty',
                                        entries: [
                                            'Be responsible for your actions and their consequences, protect those entrusted to your care, and obey those who have just authority over you.',
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Aura of Devotion',
                    source: 'PHB',
                    page: 85,
                    subclass_short_name: 'Devotion',
                    subclass_source: 'PHB',
                    level: 7,
                    entries: {
                        e: [
                            "Starting at 7th level, you and friendly creatures within 10 feet of you can't be charmed while you are conscious.",
                            'At 18th level, the range of this aura increases to 30 feet.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Purity of Spirit',
                    source: 'PHB',
                    page: 85,
                    subclass_short_name: 'Devotion',
                    subclass_source: 'PHB',
                    level: 15,
                    entries: {
                        e: [
                            'Beginning at 15th level, you are always under the effects of a protection from evil and good spell.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Holy Nimbus',
                    source: 'PHB',
                    page: 85,
                    subclass_short_name: 'Devotion',
                    subclass_source: 'PHB',
                    level: 20,
                    entries: {
                        e: [
                            'At 20th level, as an action, you can emanate an aura of sunlight. For 1 minute, bright light shines from you in a 30-foot radius, and dim light shines 30 feet beyond that.',
                            'Whenever an enemy creature starts its turn in the bright light, the creature takes 10 radiant damage.',
                            'In addition, for the duration, you have advantage on saving throws against spells cast by fiends or undead.',
                            "Once you use this feature, you can't use it again until you finish a long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Oath of Vengeance',
                    source: 'PHB',
                    page: 87,
                    subclass_short_name: 'Vengeance',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            "The Oath of Vengeance is a solemn commitment to punish those who have committed a grievous sin. When evil forces slaughter helpless villagers, when an entire people turns against the will of the gods, when a thieves' guild grows too violent and powerful, when a dragon rampages through the countryside - at times like these, paladins arise and swear an Oath of Vengeance to set right that which has gone wrong. To these paladins—sometimes called avengers or dark knights—their own purity is not as important as delivering justice.",
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Tenets of Vengeance|Paladin||Vengeance||3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Oath Spells|Paladin||Vengeance||3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature:
                                    'Channel Divinity: Abjure Enemy|Paladin||Vengeance||3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature:
                                    'Channel Divinity: Vow of Enmity|Paladin||Vengeance||3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Channel Divinity: Abjure Enemy',
                    source: 'PHB',
                    page: 87,
                    subclass_short_name: 'Vengeance',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'As an action, you present your holy symbol and speak a prayer of denunciation, using your Channel Divinity. Choose one creature within 60 feet of you that you can see. That creature must make a Wisdom saving throw, unless it is immune to being frightened. Fiends and undead have disadvantage on this saving throw.',
                            "On a failed save, the creature is frightened for 1 minute or until it takes any damage. While frightened, the creature's speed is 0, and it can't benefit from any bonus to its speed.",
                            "On a successful save, the creature's speed is halved for 1 minute or until the creature takes any damage.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Channel Divinity: Vow of Enmity',
                    source: 'PHB',
                    page: 87,
                    subclass_short_name: 'Vengeance',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'As a bonus action, you can utter a vow of enmity against a creature you can see within 10 feet of you, using your Channel Divinity. You gain advantage on attack rolls against the creature for 1 minute or until it drops to 0 hit points or falls unconscious.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Oath Spells',
                    source: 'PHB',
                    page: 87,
                    subclass_short_name: 'Vengeance',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'You gain oath spells at the paladin levels listed.',
                            {
                                type: 'table',
                                caption: 'Oath of Vengeance Spells',
                                colLabels: ['Paladin Level', 'Spells'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['3rd', "bane, hunter's mark"],
                                    ['5th', 'hold person, misty step'],
                                    ['9th', 'haste, protection from energy'],
                                    ['13th', 'banishment, dimension door'],
                                    ['17th', 'hold monster, scrying'],
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Tenets of Vengeance',
                    source: 'PHB',
                    page: 87,
                    subclass_short_name: 'Vengeance',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'The tenets of the Oath of Vengeance vary by paladin, but all the tenets revolve around punishing wrongdoers by any means necessary. Paladins who uphold these tenets are willing to sacrifice even their own righteousness to mete out justice upon those who do evil, so the paladins are often neutral or lawful neutral in alignment. The core principles of the tenets are brutally simple.',
                            {
                                type: 'entries',
                                entries: [
                                    {
                                        type: 'entries',
                                        name: 'Fight the Greater Evil',
                                        entries: [
                                            'Faced with a choice of fighting my sworn foes or combating a lesser evil, I choose the greater evil.',
                                        ],
                                    },
                                ],
                            },
                            {
                                type: 'entries',
                                entries: [
                                    {
                                        type: 'entries',
                                        name: 'No Mercy for the Wicked',
                                        entries: [
                                            'Ordinary foes might win my mercy, but my sworn enemies do not.',
                                        ],
                                    },
                                ],
                            },
                            {
                                type: 'entries',
                                entries: [
                                    {
                                        type: 'entries',
                                        name: 'By Any Means Necessary',
                                        entries: [
                                            "My qualms can't get in the way of exterminating my foes.",
                                        ],
                                    },
                                ],
                            },
                            {
                                type: 'entries',
                                entries: [
                                    {
                                        type: 'entries',
                                        name: 'Restitution',
                                        entries: [
                                            'If my foes wreak ruin on the world, it is because I failed to stop them. I must help those harmed by their misdeeds.',
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Relentless Avenger',
                    source: 'PHB',
                    page: 87,
                    subclass_short_name: 'Vengeance',
                    subclass_source: 'PHB',
                    level: 7,
                    entries: {
                        e: [
                            "By 7th level, your supernatural focus helps you close off a foe's retreat. When you hit a creature with an opportunity attack, you can move up to half your speed immediately after the attack and as part of the same reaction. This movement doesn't provoke opportunity attacks.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Soul of Vengeance',
                    source: 'PHB',
                    page: 87,
                    subclass_short_name: 'Vengeance',
                    subclass_source: 'PHB',
                    level: 15,
                    entries: {
                        e: [
                            'Starting at 15th level, the authority with which you speak your Vow of Enmity gives you greater power over your foe. When a creature under the effect of your Vow of Enmity makes an attack, you can use your reaction to make a melee weapon attack against that creature if it is within range.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Avenging Angel',
                    source: 'PHB',
                    page: 87,
                    subclass_short_name: 'Vengeance',
                    subclass_source: 'PHB',
                    level: 20,
                    entries: {
                        e: [
                            'At 20th level, you can assume the form of an angelic avenger. Using your action, you undergo a transformation. For 1 hour, you gain the following benefits:',
                            {
                                type: 'list',
                                items: [
                                    'Wings sprout from your back and grant you a flying speed of 60 feet.',
                                    'You emanate an aura of menace in a 30-foot radius. The first time any enemy creature enters the aura or starts its turn there during a battle, the creature must succeed on a Wisdom saving throw or become frightened of you for 1 minute or until it takes any damage. Attack rolls against the frightened creature have advantage.',
                                ],
                            },
                            "Once you use this feature, you can't use it again until you finish a long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Oath of the Crown',
                    source: 'SCAG',
                    page: 132,
                    subclass_short_name: 'Crown',
                    subclass_source: 'SCAG',
                    level: 3,
                    entries: {
                        e: [
                            "The Oath of the Crown is sworn to the ideals of civilization, be it the spirit of a nation, fealty to a sovereign, or service to a deity of law and rulership. The paladins who swear this oath dedicate themselves to serving society and, in particular, the laws that hold society together. These paladins are the watchful guardians on the walls, standing against the chaotic tides of barbarism that threaten to tear down all that civilization has built, and are commonly known as guardians, exemplars, or sentinels. Often, paladins who swear this oath are members of an order of knighthood in service to a nation or sovereign, and undergo their oath as part of their admission to the order's ranks.",
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Tenets of the Crown|Paladin||Crown|SCAG|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Oath Spells|Paladin||Crown|SCAG|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature:
                                    'Channel Divinity: Champion Challenge|Paladin||Crown|SCAG|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature:
                                    'Channel Divinity: Turn the Tide|Paladin||Crown|SCAG|3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Channel Divinity: Champion Challenge',
                    source: 'SCAG',
                    page: 132,
                    subclass_short_name: 'Crown',
                    subclass_source: 'SCAG',
                    level: 3,
                    entries: {
                        e: [
                            "As a bonus action, you issue a challenge that compels other creatures to do battle with you. Each creature of your choice that you can see within 30 feet of you must make a Wisdom saving throw. On a failed save, a creature can't willingly move more than 30 feet away from you. This effect ends on the creature if you are incapacitated or die or if the creature is more than 30 feet away from you.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Channel Divinity: Turn the Tide',
                    source: 'SCAG',
                    page: 132,
                    subclass_short_name: 'Crown',
                    subclass_source: 'SCAG',
                    level: 3,
                    entries: {
                        e: [
                            'As a bonus action, you can bolster injured creatures with your Channel Divinity. Each creature of your choice that can hear you within 30 feet of you regains hit points equal to 1d6 + your Charisma modifier (minimum of 1) if it has no more than half of its hit points.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Oath Spells',
                    source: 'SCAG',
                    page: 132,
                    subclass_short_name: 'Crown',
                    subclass_source: 'SCAG',
                    level: 3,
                    entries: {
                        e: [
                            'You gain oath spells at the paladin levels listed.',
                            {
                                type: 'table',
                                caption: 'Oath of the Crown Spells',
                                colLabels: ['Paladin Level', 'Spells'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['3rd', 'command, compelled duel'],
                                    ['5th', 'warding bond, zone of truth'],
                                    ['9th', 'aura of vitality, spirit guardians'],
                                    ['13th', 'banishment, guardian of faith'],
                                    ['17th', 'circle of power, geas'],
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Tenets of the Crown',
                    source: 'SCAG',
                    page: 132,
                    subclass_short_name: 'Crown',
                    subclass_source: 'SCAG',
                    level: 3,
                    entries: {
                        e: [
                            'The tenets of the Oath of the Crown are often set by the sovereign to which their oath is sworn, but generally emphasize the following tenets.',
                            {
                                type: 'entries',
                                entries: [
                                    {
                                        type: 'entries',
                                        name: 'Law',
                                        entries: [
                                            'The law is paramount. It is the mortar that holds the stones of civilization together, and it must be respected.',
                                        ],
                                    },
                                ],
                            },
                            {
                                type: 'entries',
                                entries: [
                                    {
                                        type: 'entries',
                                        name: 'Loyalty',
                                        entries: [
                                            'Your word is your bond. Without loyalty, oaths and laws are meaningless.',
                                        ],
                                    },
                                ],
                            },
                            {
                                type: 'entries',
                                entries: [
                                    {
                                        type: 'entries',
                                        name: 'Courage',
                                        entries: [
                                            "You must be willing to do what needs to be done for the sake of order, even in the face of overwhelming odds. If you don't act, then who will?",
                                        ],
                                    },
                                ],
                            },
                            {
                                type: 'entries',
                                entries: [
                                    {
                                        type: 'entries',
                                        name: 'Responsibility',
                                        entries: [
                                            'You must deal with the consequences of your actions, and you are responsible for fulfilling your duties and obligations.',
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Divine Allegiance',
                    source: 'SCAG',
                    page: 132,
                    subclass_short_name: 'Crown',
                    subclass_source: 'SCAG',
                    level: 7,
                    entries: {
                        e: [
                            "Starting at 7th level, when a creature within 5 feet of you takes damage, you can use your reaction to magically substitute your own health for that of the target creature, causing that creature not to take the damage. Instead, you take the damage. This damage to you can't be reduced or prevented in any way.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Unyielding Spirit',
                    source: 'SCAG',
                    page: 132,
                    subclass_short_name: 'Crown',
                    subclass_source: 'SCAG',
                    level: 15,
                    entries: {
                        e: [
                            'Starting at 15th level, you have advantage on saving throws to avoid becoming paralyzed or stunned.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Exalted Champion',
                    source: 'SCAG',
                    page: 132,
                    subclass_short_name: 'Crown',
                    subclass_source: 'SCAG',
                    level: 20,
                    entries: {
                        e: [
                            'At 20th level, your presence on the field of battle is an inspiration to those dedicated to your cause. You can use your action to gain the following benefits for 1 hour:',
                            {
                                type: 'list',
                                items: [
                                    'You have resistance to bludgeoning, piercing, and slashing damage from nonmagical weapons.',
                                    'Your allies have advantage on death saving throws while within 30 feet of you.',
                                    'You have advantage on Wisdom saving throws, as do your allies within 30 feet of you.',
                                ],
                            },
                            "This effect ends early if you are incapacitated or die. Once you use this feature, you can't use it again until you finish a long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Oath of Glory',
                    source: 'TCE',
                    page: 53,
                    subclass_short_name: 'Glory',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            "Paladins who take the Oath of Glory believe they and their companions are destined to achieve glory through deeds of heroism. They train diligently and encourage their companions so they're all ready when destiny calls.",
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Tenets of Glory|Paladin||Glory|TCE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Oath Spells|Paladin||Glory|TCE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Channel Divinity|Paladin||Glory|TCE|3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Channel Divinity',
                    source: 'TCE',
                    page: 53,
                    subclass_short_name: 'Glory',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            '3rd-level Oath of Glory feature',
                            'You gain the following two Channel Divinity options. See the Sacred Oath class feature for how Channel Divinity works.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Peerless Athlete|Paladin||Glory|TCE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Inspiring Smite|Paladin||Glory|TCE|3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Oath Spells',
                    source: 'TCE',
                    page: 53,
                    subclass_short_name: 'Glory',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            '3rd-level Oath of Glory feature',
                            'You gain oath spells at the paladin levels listed in the Oath of Glory Spells table. See the Sacred Oath class feature for how oath spells work.',
                            {
                                type: 'table',
                                caption: 'Oath of Glory Spells',
                                colLabels: ['Paladin Level', 'Spells'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['3rd', 'guiding bolt, heroism'],
                                    ['5th', 'enhance ability, magic weapon'],
                                    ['9th', 'haste, protection from energy'],
                                    ['13th', 'compulsion, freedom of movement'],
                                    ['17th', 'commune, flame strike'],
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Tenets of Glory',
                    source: 'TCE',
                    page: 53,
                    subclass_short_name: 'Glory',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            'The tenets of the Oath of Glory drive a paladin to attempt heroics that might one day shine in legend.',
                            {
                                type: 'entries',
                                name: 'Actions over Words',
                                entries: ['Strive to be known by glorious deeds, not words.'],
                            },
                            {
                                type: 'entries',
                                name: 'Challenges Are but Tests',
                                entries: [
                                    'Face hardships with courage, and encourage your allies to face them with you.',
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Hone the Body',
                                entries: [
                                    'Like raw stone, your body must be worked so its potential can be realized.',
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Discipline the Soul',
                                entries: [
                                    'You must marshal the discipline to overcome failings within yourself that threaten to dim the glory of you and your friends.',
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Inspiring Smite',
                    source: 'TCE',
                    page: 53,
                    subclass_short_name: 'Glory',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            'Immediately after you deal damage to a creature with your Divine Smite feature, you can use your Channel Divinity as a bonus action and distribute temporary hit points to creatures of your choice within 30 feet of you, which can include you. The total number of temporary hit points equals 2d8 + your level in this class, divided among the chosen creatures however you like.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Peerless Athlete',
                    source: 'TCE',
                    page: 53,
                    subclass_short_name: 'Glory',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            'As a bonus action, you can use your Channel Divinity to augment your athleticism. For the next 10 minutes, you have advantage on Strength (Athletics) and Dexterity (Acrobatics) checks; you can carry, push, drag, and lift twice as much weight as normal; and the distance of your long and high jumps increases by 10 feet (this extra distance costs movement as normal).',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Aura of Alacrity',
                    source: 'TCE',
                    page: 53,
                    subclass_short_name: 'Glory',
                    subclass_source: 'TCE',
                    level: 7,
                    entries: {
                        e: [
                            '7th-level Oath of Glory feature',
                            "You emanate an aura that fills you and your companions with supernatural speed, allowing you to race across a battlefield in formation. Your walking speed increases by 10 feet. In addition, if you aren't incapacitated, the walking speed of any ally who starts their turn within 5 feet of you increases by 10 feet until the end of that turn.",
                            'When you reach 18th level in this class, the range of the aura increases to 10 feet.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Glorious Defense',
                    source: 'TCE',
                    page: 53,
                    subclass_short_name: 'Glory',
                    subclass_source: 'TCE',
                    level: 15,
                    entries: {
                        e: [
                            '15th-level Oath of Glory feature',
                            "You can turn defense into a sudden strike. When you or another creature you can see within 10 feet of you is hit by an attack roll, you can use your reaction to grant a bonus to the target's AC against that attack, potentially causing it to miss. The bonus equals your Charisma modifier (minimum of +1). If the attack misses, you can make one weapon attack against the attacker as part of this reaction, provided the attacker is within your weapon's range.",
                            'You can use this feature a number of times equal to your Charisma modifier (minimum of once), and you regain all expended uses when you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Living Legend',
                    source: 'TCE',
                    page: 53,
                    subclass_short_name: 'Glory',
                    subclass_source: 'TCE',
                    level: 20,
                    entries: {
                        e: [
                            '20th-level Oath of Glory feature',
                            'You can empower yourself with the legends—whether true or exaggerated—of your great deeds. As a bonus action, you gain the following benefits for 1 minute:',
                            {
                                type: 'list',
                                items: [
                                    'You are blessed with an otherworldly presence, gaining advantage on all Charisma checks.',
                                    'Once on each of your turns when you make a weapon attack and miss, you can cause that attack to hit instead.',
                                    'If you fail a saving throw, you can use your reaction to reroll it. You must use this new roll.',
                                ],
                            },
                            "Once you use this feature, you can't use it again until you finish a long rest, unless you expend a 5th-level spell slot to use it again.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Oath of the Watchers',
                    source: 'TCE',
                    page: 54,
                    subclass_short_name: 'Watchers',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            'The Oath of the Watchers binds paladins to protect mortal realms from the predations of extraplanar creatures, many of which can lay waste to mortal soldiers. Thus, the Watchers hone their minds, spirits, and bodies to be the ultimate weapons against such threats.',
                            "Paladins who follow the Watchers' oath are ever vigilant in spotting the influence of extraplanar forces, often establishing a network of spies and informants to gather information on suspected cults. To a Watcher, keeping a healthy suspicion and awareness about one's surroundings is as natural as wearing armor in battle.",
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Tenets of the Watchers|Paladin||Watchers|TCE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Oath Spells|Paladin||Watchers|TCE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Channel Divinity|Paladin||Watchers|TCE|3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Channel Divinity',
                    source: 'TCE',
                    page: 54,
                    subclass_short_name: 'Watchers',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            '3rd-level Oath of the Watchers feature',
                            'You gain the following Channel Divinity options. See the Sacred Oath class feature for how Channel Divinity works.',
                            {
                                type: 'entries',
                                name: "Watcher's Will",
                                entries: [
                                    'You can use your Channel Divinity to invest your presence with the warding power of your faith. As an action, you can choose a number of creatures you can see within 30 feet of you, up to a number equal to your Charisma modifier (minimum of one creature). For 1 minute, you and the chosen creatures have advantage on Intelligence, Wisdom, and Charisma saving throws.',
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Abjure the Extraplanar',
                                entries: [
                                    'You can use your Channel Divinity to castigate unworldly beings. As an action, you present your holy symbol and each aberration, celestial, elemental, fey, or fiend within 30 feet of you that can hear you must make a Wisdom saving throw. On a failed save, the creature is turned for 1 minute or until it takes damage.',
                                    "A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly end its move in a space within 30 feet of you. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can take the Dodge action.",
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Oath Spells',
                    source: 'TCE',
                    page: 54,
                    subclass_short_name: 'Watchers',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            '3rd-level Oath of the Watchers feature',
                            'You gain oath spells at the paladin levels listed in the Oath of the Watchers table. See the Sacred Oath class feature for how oath spells work.',
                            {
                                type: 'table',
                                caption: 'Oath of the Watchers Spells  Spells',
                                colLabels: ['Paladin Level', 'Spells'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['3rd', 'alarm, detect magic'],
                                    ['5th', 'moonbeam, see invisibility'],
                                    ['9th', 'counterspell, nondetection'],
                                    ['13th', 'aura of purity, banishment'],
                                    ['17th', 'hold monster, scrying'],
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Tenets of the Watchers',
                    source: 'TCE',
                    page: 54,
                    subclass_short_name: 'Watchers',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            'A paladin who assumes the Oath of the Watchers swears to safeguard mortal realms from otherworldly threats.',
                            {
                                type: 'entries',
                                name: 'Vigilance',
                                entries: [
                                    'The threats you face are cunning, powerful, and subversive. Be ever alert for their corruption.',
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Loyalty',
                                entries: [
                                    'Never accept gifts or favors from fiends or those who truck with them. Stay true to your order, your comrades, and your duty.',
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Discipline',
                                entries: [
                                    'You are the shield against the endless terrors that lie beyond the stars. Your blade must be forever sharp and your mind keen to survive what lies beyond.',
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Aura of the Sentinel',
                    source: 'TCE',
                    page: 54,
                    subclass_short_name: 'Watchers',
                    subclass_source: 'TCE',
                    level: 7,
                    entries: {
                        e: [
                            '7th-level Oath of the Watchers feature',
                            "You emit an aura of alertness while you aren't incapacitated. When you and any creatures of your choice within 10 feet of you roll initiative, you all gain a bonus to initiative equal to your proficiency bonus.",
                            'At 18th level, the range of this aura increases to 30 feet.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Vigilant Rebuke',
                    source: 'TCE',
                    page: 54,
                    subclass_short_name: 'Watchers',
                    subclass_source: 'TCE',
                    level: 15,
                    entries: {
                        e: [
                            '15th-level Oath of the Watchers feature',
                            "You've learned how to chastise anyone who dares wield beguilements against you and your wards. Whenever you or a creature you can see within 30 feet of you succeeds on an Intelligence, a Wisdom, or a Charisma saving throw, you can use your reaction to deal 2d8 + your Charisma modifier force damage to the creature that forced the saving throw.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Mortal Bulwark',
                    source: 'TCE',
                    page: 54,
                    subclass_short_name: 'Watchers',
                    subclass_source: 'TCE',
                    level: 20,
                    entries: {
                        e: [
                            '20th-level Oath of the Watchers feature',
                            'You manifest a spark of divine power in defense of the mortal realms. As a bonus action, you gain the following benefits for 1 minute:',
                            {
                                type: 'list',
                                items: [
                                    'You gain truesight with a range of 120 feet.',
                                    'You have advantage on attack rolls against aberrations, celestials, elementals, fey, and fiends.',
                                    "When you hit a creature with an attack roll and deal damage to it, you can also force it to make a Charisma saving throw against your spell save DC. On a failed save, the creature is magically banished to its native plane of existence if it's currently not there. On a successful save, the creature can't be banished by this feature for 24 hours.",
                                ],
                            },
                            "Once you use this bonus action, you can't use it again until you finish a long rest, unless you expend a 5th-level spell slot to use it again.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Oath of Conquest',
                    source: 'XGE',
                    page: 37,
                    subclass_short_name: 'Conquest',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            "The Oath of Conquest calls to paladins who seek glory in battle and the subjugation of their enemies. It isn't enough for these paladins to establish order. They must crush the forces of chaos. Sometimes called knight tyrants or iron mongers, those who swear this oath gather into grim orders that serve gods or philosophies of war and well-ordered might.",
                            'Some of these paladins go so far as to consort with the powers of the Nine Hells, valuing the rule of law over the balm of mercy. The archdevil Bel, warlord of Avernus, counts many of these paladins—called hell knights—as his most ardent supporters. Hell knights cover their armor with trophies taken from fallen enemies, a grim warning to any who dare oppose them and the decrees of their lords. These knights are often most fiercely resisted by other paladins of this oath, who believe that the hell knights have wandered too far into darkness.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Tenets of Conquest|Paladin||Conquest|XGE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Oath Spells|Paladin||Conquest|XGE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature:
                                    'Channel Divinity: Conquering Presence|Paladin||Conquest|XGE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature:
                                    'Channel Divinity: Guided Strike|Paladin||Conquest|XGE|3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Channel Divinity: Conquering Presence',
                    source: 'XGE',
                    page: 37,
                    subclass_short_name: 'Conquest',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'You can use your Channel Divinity to exude a terrifying presence. As an action, you force each creature of your choice that you can see within 30 feet of you to make a Wisdom saving throw. On a failed save, a creature becomes frightened of you for 1 minute. The frightened creature can repeat this saving throw at the end of each of its turns, ending the effect on itself on a success.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Channel Divinity: Guided Strike',
                    source: 'XGE',
                    page: 37,
                    subclass_short_name: 'Conquest',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'You can use your Channel Divinity to strike with supernatural accuracy. When you make an attack roll, you can use your Channel Divinity to gain a +10 bonus to the roll. You make this choice after you see the roll, but before the DM says whether the attack hits or misses.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Oath Spells',
                    source: 'XGE',
                    page: 37,
                    subclass_short_name: 'Conquest',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'You gain oath spells at the paladin levels listed.',
                            {
                                type: 'table',
                                caption: 'Oath of Conquest Spells',
                                colLabels: ['Paladin Level', 'Spells'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['3rd', 'armor of Agathys, command'],
                                    ['5th', 'hold person, spiritual weapon'],
                                    ['9th', 'bestow curse, fear'],
                                    ['13th', 'dominate beast, stoneskin'],
                                    ['17th', 'cloudkill, dominate person'],
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Tenets of Conquest',
                    source: 'XGE',
                    page: 37,
                    subclass_short_name: 'Conquest',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'A paladin who takes this oath has the tenets of conquest seared on the upper arm.',
                            {
                                type: 'entries',
                                entries: [
                                    {
                                        type: 'entries',
                                        name: 'Douse the Flame of Hope',
                                        entries: [
                                            "It is not enough to merely defeat an enemy in battle. Your victory must be so overwhelming that your enemies' will to fight is shattered forever. A blade can end a life. Fear can end an empire.",
                                        ],
                                    },
                                    {
                                        type: 'entries',
                                        name: 'Rule with an Iron Fist',
                                        entries: [
                                            'Once you have conquered, tolerate no dissent. Your word is law. Those who obey it shall be favored. Those who defy it shall be punished as an example to all who might follow.',
                                        ],
                                    },
                                    {
                                        type: 'entries',
                                        name: 'Strength Above All',
                                        entries: [
                                            'You shall rule until a stronger one arises. Then you must grow mightier and meet the challenge, or fall to your own ruin.',
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Aura of Conquest',
                    source: 'XGE',
                    page: 37,
                    subclass_short_name: 'Conquest',
                    subclass_source: 'XGE',
                    level: 7,
                    entries: {
                        e: [
                            "Starting at 7th level, you constantly emanate a menacing aura while you're not incapacitated. The aura extends 10 feet from you in every direction, but not through total cover.",
                            'If a creature is frightened of you, its speed is reduced to 0 while in the aura, and that creature takes psychic damage equal to half your paladin level if it starts its turn there.',
                            'At 18th level, the range of this aura increases to 30 feet.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Scornful Rebuke',
                    source: 'XGE',
                    page: 37,
                    subclass_short_name: 'Conquest',
                    subclass_source: 'XGE',
                    level: 15,
                    entries: {
                        e: [
                            "Starting at 15th level, those who dare to strike you are psychically punished for their audacity. Whenever a creature hits you with an attack, that creature takes psychic damage equal to your Charisma modifier (minimum of 1) if you're not incapacitated.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Invincible Conqueror',
                    source: 'XGE',
                    page: 37,
                    subclass_short_name: 'Conquest',
                    subclass_source: 'XGE',
                    level: 20,
                    entries: {
                        e: [
                            'At 20th level, you gain the ability to harness extraordinary martial prowess. As an action, you can magically become an avatar of conquest, gaining the following benefits for 1 minute:',
                            {
                                type: 'list',
                                items: [
                                    'You have resistance to all damage.',
                                    'When you take the Attack action on your turn, you can make one additional attack as part of that action.',
                                    'Your melee weapon attacks score a critical hit on a roll of 19 or 20 on the d20.',
                                ],
                            },
                            "Once you use this feature, you can't use it again until you finish a long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Oath of Redemption',
                    source: 'XGE',
                    page: 38,
                    subclass_short_name: 'Redemption',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'The Oath of Redemption sets a paladin on a difficult path, one that requires a holy warrior to use violence only as a last resort. Paladins who dedicate themselves to this oath believe that any person can be redeemed and that the path of benevolence and justice is one that anyone can walk. These paladins face evil creatures in the hope of turning their foes to the light, and they slay their enemies only when such a deed will clearly save other lives. Paladins who follow this path are known as redeemers.',
                            'While redeemers are idealists, they are no fools. Redeemers know that undead, demons, devils, and other supernatural threats can be inherently evil. Against such foes, paladins who swear this oath bring the full wrath of their weapons and spells to bear. Yet the redeemers still pray that, one day, even creatures of wickedness will invite their own redemption.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Tenets of Redemption|Paladin||Redemption|XGE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Oath Spells|Paladin||Redemption|XGE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature:
                                    'Channel Divinity: Emissary of Peace|Paladin||Redemption|XGE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature:
                                    'Channel Divinity: Rebuke the Violent|Paladin||Redemption|XGE|3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Channel Divinity: Emissary of Peace',
                    source: 'XGE',
                    page: 38,
                    subclass_short_name: 'Redemption',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'You can use your Channel Divinity to augment your presence with divine power. As a bonus action, you grant yourself a +5 bonus to Charisma (Persuasion) checks for the next 10 minutes.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Channel Divinity: Rebuke the Violent',
                    source: 'XGE',
                    page: 38,
                    subclass_short_name: 'Redemption',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'You can use your Channel Divinity to rebuke those who use violence. Immediately after an attacker within 30 feet of you deals damage with an attack against a creature other than you, you can use your reaction to force the attacker to make a Wisdom saving throw. On a failed save, the attacker takes radiant damage equal to the damage it just dealt. On a successful save, it takes half as much damage.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Oath Spells',
                    source: 'XGE',
                    page: 38,
                    subclass_short_name: 'Redemption',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'You gain oath spells at the paladin levels listed.',
                            {
                                type: 'table',
                                caption: 'Oath of Redemption Spells',
                                colLabels: ['Paladin Level', 'Spells'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['3rd', 'sanctuary, sleep'],
                                    ['5th', 'calm emotions, hold person'],
                                    ['9th', 'counterspell, hypnotic pattern'],
                                    ['13th', "Otiluke's resilient sphere, stoneskin"],
                                    ['17th', 'hold monster, wall of force'],
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Tenets of Redemption',
                    source: 'XGE',
                    page: 38,
                    subclass_short_name: 'Redemption',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'The tenets of the Oath of Redemption hold a paladin to a high standard of peace and justice.',
                            {
                                type: 'entries',
                                entries: [
                                    {
                                        type: 'entries',
                                        name: 'Peace',
                                        entries: [
                                            'Violence is a weapon of last resort. Diplomacy and understanding are the paths to long-lasting peace.',
                                        ],
                                    },
                                ],
                            },
                            {
                                type: 'entries',
                                entries: [
                                    {
                                        type: 'entries',
                                        name: 'Innocence',
                                        entries: [
                                            'All people begin life in an innocent state, and it is their environment or the influence of dark forces that drives them to evil. By setting the proper example, and working to heal the wounds of a deeply flawed world, you can set anyone on a righteous path.',
                                        ],
                                    },
                                ],
                            },
                            {
                                type: 'entries',
                                entries: [
                                    {
                                        type: 'entries',
                                        name: 'Patience',
                                        entries: [
                                            'Change takes time. Those who have walked the path of the wicked must be given reminders to keep them honest and true. Once you have planted the seed of righteousness in a creature, you must work day after day to allow that seed to survive and flourish.',
                                        ],
                                    },
                                ],
                            },
                            {
                                type: 'entries',
                                entries: [
                                    {
                                        type: 'entries',
                                        name: 'Wisdom',
                                        entries: [
                                            'Your heart and mind must stay clear, for eventually you will be forced to admit defeat. While every creature can be redeemed, some are so far along the path of evil that you have no choice but to end their lives for the greater good. Any such action must be carefully weighed and the consequences fully understood, but once you have made the decision, follow through with it knowing your path is just.',
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Aura of the Guardian',
                    source: 'XGE',
                    page: 38,
                    subclass_short_name: 'Redemption',
                    subclass_source: 'XGE',
                    level: 7,
                    entries: {
                        e: [
                            "Starting at 7th level, you can shield others from harm at the cost of your own health. When a creature within 10 feet of you takes damage, you can use your reaction to magically take that damage, instead of that creature taking it. This feature doesn't transfer any other effects that might accompany the damage, and this damage can't be reduced in any way.",
                            'At 18th level, the range of this aura increases to 30 feet.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Protective Spirit',
                    source: 'XGE',
                    page: 38,
                    subclass_short_name: 'Redemption',
                    subclass_source: 'XGE',
                    level: 15,
                    entries: {
                        e: [
                            "Starting at 15th level, a holy presence mends your wounds in battle. You regain hit points equal to 1d6 + half your paladin level if you end your turn in combat with fewer than half of your hit points remaining and you aren't incapacitated.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Emissary of Redemption',
                    source: 'XGE',
                    page: 38,
                    subclass_short_name: 'Redemption',
                    subclass_source: 'XGE',
                    level: 20,
                    entries: {
                        e: [
                            'At 20th level, you become an avatar of peace, which gives you two benefits:',
                            {
                                type: 'list',
                                items: [
                                    'You have resistance to all damage dealt by other creatures (their attacks, spells, and other effects).',
                                    'Whenever a creature hits you with an attack, it takes radiant damage equal to half the damage you take from the attack.',
                                ],
                            },
                            'If you attack a creature, cast a spell on it, or deal damage to it by any means but this feature, neither benefit works against that creature until you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: 'cf3cd010-8db3-4956-9f4f-0f3da3739e22',
                },
                {
                    name: 'Way of the Four Elements',
                    source: 'PHB',
                    page: 80,
                    subclass_short_name: 'Four Elements',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'You follow a monastic tradition that teaches you to harness the elements. When you focus your ki, you can align yourself with the forces of creation and bend the four elements to your will, using them as an extension of your body. Some members of this tradition dedicate themselves to a single element, but others weave the elements together.',
                            'Many monks of this tradition tattoo their bodies with representations of their ki powers, commonly imagined as coiling dragons, but also as phoenixes, fish, plants, mountains, and cresting waves.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Disciple of the Elements|Monk||Four Elements||3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Elemental Disciplines|Monk||Four Elements||3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Disciple of the Elements',
                    source: 'PHB',
                    page: 80,
                    subclass_short_name: 'Four Elements',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'You learn magical disciplines that harness the power of the four elements. A discipline requires you to spend ki points each time you use it.',
                            'You know the Elemental Attunement discipline and one other elemental discipline of your choice. You learn one additional elemental discipline of your choice at 6th, 11th, and 17th level.',
                            'Whenever you learn a new elemental discipline, you can also replace one elemental discipline that you already know with a different discipline.',
                            {
                                type: 'entries',
                                name: 'Casting Elemental Spells',
                                entries: [
                                    "Some elemental disciplines allow you to cast spells. See chapter 10 of the Player's Handbook for the general rules of spellcasting. To cast one of these spells, you use its casting time and other rules, but you don't need to provide material components for it.",
                                    "Once you reach 5th level in this class, you can spend additional ki points to increase the level of an elemental discipline spell that you cast, provided that the spell has an enhanced effect at a higher level, as burning hands does. The spell's level increases by 1 for each additional ki point you spend. For example, if you are a 5th-level monk and use Sweeping Cinder Strike to cast burning hands, you can spend 3 ki points to cast it as a 2nd-level spell (the discipline's base cost of 2 ki points plus 1).",
                                    'The maximum number of ki points you can spend to cast a spell in this way (including its base ki point cost and any additional ki points you spend to increase its level) is determined by your monk level, as shown in the Spells and Ki Points table. At 5th level, you may spend up to 3 ki points; this increases to 4 ki points at 9th level, 5 at 13th level, and 6 at 17th level.',
                                    {
                                        type: 'table',
                                        caption: 'Spells and Ki Points',
                                        colLabels: ['Monk Levels', 'Maximum Ki Points for a Spell'],
                                        colStyles: ['col-5 text-center', 'col-7 text-center'],
                                        rows: [
                                            ['5th-8th', 3],
                                            ['9th-12th', 4],
                                            ['13th-16th', 5],
                                            ['17th-20th', 6],
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Elemental Disciplines',
                    source: 'PHB',
                    page: 80,
                    subclass_short_name: 'Four Elements',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'The elemental disciplines are presented in alphabetical order. If a discipline requires a level, you must be the level in this class to learn the discipline.',
                            {
                                type: 'options',
                                count: 2,
                                entries: [
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Breath of Winter',
                                        name: 'Breath of Winter (17th Level Required)',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Clench of the North Wind',
                                        name: 'Clench of the North Wind (6th Level Required)',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Elemental Attunement',
                                        data: {
                                            isRequiredOption: true,
                                        },
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Eternal Mountain Defense',
                                        name: 'Eternal Mountain Defense (17th Level Required)',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Fangs of the Fire Snake',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Fist of Four Thunders',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Unbroken Air',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Flames of the Phoenix',
                                        name: 'Flames of the Phoenix (11th Level Required)',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Gong of the Summit',
                                        name: 'Gong of the Summit (6th Level Required)',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Mist Stance',
                                        name: 'Mist Stance (11th Level Required)',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Ride the Wind',
                                        name: 'Ride the Wind (11th Level Required)',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'River of Hungry Flame',
                                        name: 'River of Hungry Flame (17th Level Required)',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Rush of the Gale Spirits',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Shape the Flowing River',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Sweeping Cinder Strike',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Water Whip',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Wave of Rolling Earth',
                                        name: 'Wave of Rolling Earth (17th Level Required)',
                                    },
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Extra Elemental Discipline',
                    source: 'PHB',
                    page: 80,
                    subclass_short_name: 'Four Elements',
                    subclass_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            'You learn one additional elemental discipline of your choice. You should know 2 elemental disciplines, as well as Elemental Attunement.',
                            'Whenever you learn a new elemental discipline, you can also replace one elemental discipline that you already know with a different discipline.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Extra Elemental Discipline',
                    source: 'PHB',
                    page: 80,
                    subclass_short_name: 'Four Elements',
                    subclass_source: 'PHB',
                    level: 11,
                    entries: {
                        e: [
                            'You learn one additional elemental discipline of your choice. You should know 3 elemental disciplines, as well as Elemental Attunement.',
                            'Whenever you learn a new elemental discipline, you can also replace one elemental discipline that you already know with a different discipline.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Extra Elemental Discipline',
                    source: 'PHB',
                    page: 80,
                    subclass_short_name: 'Four Elements',
                    subclass_source: 'PHB',
                    level: 17,
                    entries: {
                        e: [
                            'You learn one additional elemental discipline of your choice. You should know 4 elemental disciplines, as well as Elemental Attunement.',
                            'Whenever you learn a new elemental discipline, you can also replace one elemental discipline that you already know with a different discipline.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Way of the Open Hand',
                    source: 'PHB',
                    page: 79,
                    subclass_short_name: 'Open Hand',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'Monks of the Way of the Open Hand are the ultimate masters of martial arts combat, whether armed or unarmed. They learn techniques to push and trip their opponents, manipulate ki to heal damage to their bodies, and practice advanced meditation that can protect them from harm.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Open Hand Technique|Monk||Open Hand||3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Open Hand Technique',
                    source: 'PHB',
                    page: 79,
                    subclass_short_name: 'Open Hand',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            "You can manipulate your enemy's ki when you harness your own. Whenever you hit a creature with one of the attacks granted by your Flurry of Blows, you can impose one of the following effects on that target.",
                            {
                                type: 'list',
                                items: [
                                    'It must succeed on a Dexterity saving throw or be knocked prone.',
                                    'It must make a Strength saving throw. If it fails, you can push it up to 15 feet away from you.',
                                    "It can't take reactions until the end of your next turn.",
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Wholeness of Body',
                    source: 'PHB',
                    page: 79,
                    subclass_short_name: 'Open Hand',
                    subclass_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            'You gain the ability to heal yourself. As an action, you can regain hit points equal to three times your monk level. You must finish a long rest before you can use this feature again.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Tranquility',
                    source: 'PHB',
                    page: 79,
                    subclass_short_name: 'Open Hand',
                    subclass_source: 'PHB',
                    level: 11,
                    entries: {
                        e: [
                            'Beginning at 11th level, you can enter a special meditation that surrounds you with an aura of peace. At the end of a long rest, you gain the effect of a sanctuary spell that lasts until the start of your next long rest (the spell can end early as normal). The saving throw DC for the spell equals 8 + your Wisdom modifier + your proficiency bonus.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Quivering Palm',
                    source: 'PHB',
                    page: 79,
                    subclass_short_name: 'Open Hand',
                    subclass_source: 'PHB',
                    level: 17,
                    entries: {
                        e: [
                            "You gain the ability to set up lethal vibrations in someone's body. When you hit a creature with an unarmed strike, you can spend 3 ki points to start these imperceptible vibrations, which last for a number of days equal to your monk level. The vibrations are harmless unless you use your action to end them. To do so, you and the target must be on the same plane of existence. When you use this action, the creature must make a Constitution saving throw. If it fails, it is reduced to 0 hit points. If it succeeds, it takes 10d10 necrotic damage.",
                            'You can have only one creature under the effect of this feature at a time. You can choose to end the vibrations harmlessly without using an action.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Way of Shadow',
                    source: 'PHB',
                    page: 80,
                    subclass_short_name: 'Shadow',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            "Monks of the Way of Shadow follow a tradition that values stealth and subterfuge. These monks might be called ninjas or shadowdancers, and they serve as spies and assassins. Sometimes the members of a ninja monastery are family members, forming a clan sworn to secrecy about their arts and missions. Other monasteries are more like thieves' guilds, hiring out their services to nobles, rich merchants, or anyone else who can pay their fees. Regardless of their methods, the heads of these monasteries expect the unquestioning obedience of their students.",
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Shadow Arts|Monk||Shadow||3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Shadow Arts',
                    source: 'PHB',
                    page: 80,
                    subclass_short_name: 'Shadow',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            "You can use your ki to duplicate the effects of certain spells. As an action, you can spend 2 ki points to cast darkness, darkvision, pass without trace, or silence, without providing material components. Additionally, you gain the minor illusion cantrip if you don't already know it.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Shadow Step',
                    source: 'PHB',
                    page: 80,
                    subclass_short_name: 'Shadow',
                    subclass_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            'You gain the ability to step from one shadow into another. When you are in dim light or darkness, as a bonus action you can teleport up to 60 feet to an unoccupied space you can see that is also in dim light or darkness. You then have advantage on the first melee attack you make before the end of the turn.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Cloak of Shadows',
                    source: 'PHB',
                    page: 80,
                    subclass_short_name: 'Shadow',
                    subclass_source: 'PHB',
                    level: 11,
                    entries: {
                        e: [
                            'By 11th level, you have learned to become one with the shadows. When you are in an area of dim light or darkness, you can use your action to become invisible. You remain invisible until you make an attack, cast a spell, or are in an area of bright light.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Opportunist',
                    source: 'PHB',
                    page: 80,
                    subclass_short_name: 'Shadow',
                    subclass_source: 'PHB',
                    level: 17,
                    entries: {
                        e: [
                            "At 17th level, you can exploit a creature's momentary distraction when it is hit by an attack. Whenever a creature within 5 feet of you is hit by an attack made by a creature other than you, you can use your reaction to make a melee attack against that creature.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Way of the Long Death',
                    source: 'SCAG',
                    page: 130,
                    subclass_short_name: 'Long Death',
                    subclass_source: 'SCAG',
                    level: 3,
                    entries: {
                        e: [
                            'Monks of the Way of the Long Death are obsessed with the meaning and mechanics of dying. They capture creatures and prepare elaborate experiments to capture, record, and understand the moments of their demise. They use this knowledge to guide their understanding of martial arts, yielding a deadly fighting style.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Touch of Death|Monk||Long Death|SCAG|3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Touch of Death',
                    source: 'SCAG',
                    page: 130,
                    subclass_short_name: 'Long Death',
                    subclass_source: 'SCAG',
                    level: 3,
                    entries: {
                        e: [
                            'Starting when you choose this tradition at 3rd level, your study of death allows you to extract vitality from another creature as it nears its demise. When you reduce a creature within 5 feet of you to 0 hit points, you gain temporary hit points equal to your Wisdom modifier + your monk level (minimum of 1 temporary hit point).',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Hour of Reaping',
                    source: 'SCAG',
                    page: 130,
                    subclass_short_name: 'Long Death',
                    subclass_source: 'SCAG',
                    level: 6,
                    entries: {
                        e: [
                            'At 6th level, you gain the ability to unsettle or terrify those around you as an action, for your soul has been touched by the shadow of death. When you take this action, each creature within 30 feet of you that can see you must succeed on a Wisdom saving throw or be frightened of you until the end of your next turn.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Mastery of Death',
                    source: 'SCAG',
                    page: 130,
                    subclass_short_name: 'Long Death',
                    subclass_source: 'SCAG',
                    level: 11,
                    entries: {
                        e: [
                            'Beginning at 11th level, you use your familiarity with death to escape its grasp. When you are reduced to 0 hit points, you can expend 1 ki point (no action required) to have 1 hit point instead.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Touch of the Long Death',
                    source: 'SCAG',
                    page: 130,
                    subclass_short_name: 'Long Death',
                    subclass_source: 'SCAG',
                    level: 17,
                    entries: {
                        e: [
                            'Starting at 17th level, your touch can channel the energy of death into a creature. As an action, you touch one creature within 5 feet of you, and you expend 1 to 10 ki points. The target must make a Constitution saving throw, and it takes 2d10 necrotic damage per ki point spent on a failed save, or half as much damage on a successful one.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Way of the Astral Self',
                    source: 'TCE',
                    page: 50,
                    subclass_short_name: 'Astral Self',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            'A monk who follows the Way of the Astral Self believes their body is an illusion. They see their ki as a representation of their true form, an astral self. This astral self has the capacity to be a force of order or disorder, with some monasteries training students to use their power to protect the weak and other instructing aspirants in how to manifest their true selves in service to the mighty.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Forms of Your Astral Self|Monk||Astral Self|TCE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Arms of the Astral Self|Monk||Astral Self|TCE|3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Arms of the Astral Self',
                    source: 'TCE',
                    page: 50,
                    subclass_short_name: 'Astral Self',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            '3rd-level Way of the Astral Self feature',
                            'Your mastery of your ki allows you to summon a portion of your astral self. As a bonus action, you can spend 1 ki point to summon the arms of your astral self. When you do so, each creature of your choice that you can see within 10 feet of you must succeed on a Dexterity saving throw or take force damage equal to two rolls of your Martial Arts die.',
                            "For 10 minutes, these spectral arms hover near your shoulders or surround your arms (your choice). You determine the arms' appearance, and they vanish early if you are incapacitated or die.",
                            'While the spectral arms are present, you gain the following benefits:',
                            {
                                type: 'list',
                                items: [
                                    'You can use your Wisdom modifier in place of your Strength modifier when making Strength checks and Strength saving throws.',
                                    'You can use the spectral arms to make unarmed strikes.',
                                    'When you make an unarmed strike with the arms on your turn, your reach for it is 5 feet greater than normal.',
                                    'The unarmed strikes you make with the arms can use your Wisdom modifier in place of your Strength or Dexterity modifier for the attack and damage rolls, and their damage type is force.',
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Forms of Your Astral Self',
                    source: 'TCE',
                    page: 50,
                    subclass_short_name: 'Astral Self',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            "The astral self is a translucent embodiment of the monk's soul. As a result, an astral self can reflect aspects of a monk's background, ideals, flaws, and bonds, and an astral self doesn't necessarily look anything like the monk. For example, the astral self of a lanky human might be reminiscent of a minotaur-the strength of which the monk feels within. Similarly, an orc monk might manifest gossamer arms and a delicate visage, representing the gentle beauty of the orc's soul. Each astral self is unique, and some of the monks of this monastic tradition are known more for the appearance of their astral self than for their physical appearance.",
                            'When choosing this path, consider the quirks that define your monk. Are you obsessed with something? Are you driven by justice or a selfish desire? Any of these motivations could manifest in the form of your astral self.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Visage of the Astral Self',
                    source: 'TCE',
                    page: 50,
                    subclass_short_name: 'Astral Self',
                    subclass_source: 'TCE',
                    level: 6,
                    entries: {
                        e: [
                            '6th-level Way of the Astral Self feature',
                            'You can summon the visage of your astral self. As a bonus action, or as part of the bonus action you take to activate Arms of the Astral Self, you can spend 1 ki point to summon this visage for 10 minutes. It vanishes early if you are incapacitated or die.',
                            'The spectral visage covers your face like a helmet or mask. You determine its appearance.',
                            'While the spectral visage is present, you gain the following benefits.',
                            {
                                type: 'entries',
                                name: 'Astral Sight',
                                entries: [
                                    'You can see normally in darkness, both magical and nonmagical, to a distance of 120 feet.',
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Wisdom of the Spirit',
                                entries: [
                                    'You have advantage on Wisdom (Insight}) and Charisma (Intimidation) checks.',
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Word of the Spirit',
                                entries: [
                                    'When you speak, you can direct your words to a creature of your choice that you can see within 60 feet of you, making it so only that creature can hear you. Alternatively, you can amplify your voice so that all creatures within 600 feet can hear you.',
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Body of the Astral Self',
                    source: 'TCE',
                    page: 50,
                    subclass_short_name: 'Astral Self',
                    subclass_source: 'TCE',
                    level: 11,
                    entries: {
                        e: [
                            '11th-level Way of the Astral Self feature',
                            'When you have both your astral arms and visage summoned, you can cause the body of your astral self to appear (no action required). This spectral body covers your physical form like a suit of armor, connecting with the arms and visage. You determine its appearance.',
                            'While the spectral body is present, you gain the following benefits.',
                            {
                                type: 'entries',
                                name: 'Deflect Energy',
                                entries: [
                                    'When you take acid, cold, fire, force, lightning, or thunder damage, you can use your reaction to deflect it. When you do so, the damage you take is reduced by 1d10 + your Wisdom modifier (minimum reduction of 1).',
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Empowered Arms',
                                entries: [
                                    'Once on each of your turns when you hit a target with the Arms of the Astral Self, you can deal extra damage to the target equal to your Martial Arts die.',
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Awakened Astral Self',
                    source: 'TCE',
                    page: 50,
                    subclass_short_name: 'Astral Self',
                    subclass_source: 'TCE',
                    level: 17,
                    entries: {
                        e: [
                            '17th-level Way of the Astral Self feature',
                            'Your connection to your astral self is complete, allowing you to unleash its full potential. As a bonus action, you can spend 5 ki points to summon the arms, visage, and body of your astral self and awaken it for 10 minutes. This awakening ends early if you are incapacitated or die.',
                            'While your astral self is awakened, you gain the following benefits.',
                            {
                                type: 'entries',
                                name: 'Armor of the Spirit',
                                entries: ['You gain a +2 bonus to Armor Class.'],
                            },
                            {
                                type: 'entries',
                                name: 'Astral Barrage',
                                entries: [
                                    'Whenever you use the Extra Attack feature to attack twice, you can instead attack three times if all the attacks are made with your astral arms.',
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Way of Mercy',
                    source: 'TCE',
                    page: 49,
                    subclass_short_name: 'Mercy',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            'Monks of the Way of Mercy learn to manipulate the life force of others to bring aid to those in need. They are wandering physicians to the poor and hurt. However, to those beyond their help, they bring a swift end as an act of mercy.',
                            'Those who follow the Way of Mercy might be members of a religious order, administering to the needy and making grim choices rooted in reality rather than idealism. Some might be gentle-voiced healers, beloved by their communities, while others might be masked bringers of macabre mercies.',
                            'The walkers of this way usually don robes with deep cowls, and they often conceal their faces with masks, presenting themselves as the faceless bringers of life and death.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Implements of Mercy|Monk||Mercy|TCE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Hand of Healing|Monk||Mercy|TCE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Hand of Harm|Monk||Mercy|TCE|3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Hand of Harm',
                    source: 'TCE',
                    page: 49,
                    subclass_short_name: 'Mercy',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            '3rd-level Way of Mercy feature',
                            'You use your ki to inflict wounds. When you hit a creature with an unarmed strike, you can spend 1 ki point to deal extra necrotic damage equal to one roll of your Martial Arts die + your Wisdom modifier. You can use this feature only once per turn.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Hand of Healing',
                    source: 'TCE',
                    page: 49,
                    subclass_short_name: 'Mercy',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            '3rd-level Way of Mercy feature',
                            'Your mystical touch can mend wounds. As an action, you can spend 1 ki point to touch a creature and restore a number of hit points equal to a roll of your Martial Arts die + your Wisdom modifier.',
                            'When you use your Flurry of Blows, you can replace one of the unarmed strikes with a use of this feature without spending a ki point for the healing.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Implements of Mercy',
                    source: 'TCE',
                    page: 49,
                    subclass_short_name: 'Mercy',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            '3rd-level Way of Mercy feature',
                            'You gain proficiency in the Insight and Medicine skills, and you gain proficiency with the herbalism kit.',
                            'You also gain a special mask, which you often wear when using the features of this subclass. You determine its appearance, or generate it randomly by rolling on the Merciful Mask table.',
                            {
                                type: 'table',
                                caption: 'Merciful Mask',
                                colLabels: ['d6', 'Mask Appearance'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['1', 'Raven'],
                                    ['2', 'Blank and white'],
                                    ['3', 'Crying visage'],
                                    ['4', 'Laughing visage'],
                                    ['5', 'Skull'],
                                    ['6', 'Butterfly'],
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: "Physician's Touch",
                    source: 'TCE',
                    page: 49,
                    subclass_short_name: 'Mercy',
                    subclass_source: 'TCE',
                    level: 6,
                    entries: {
                        e: [
                            '6th-level Way of Mercy feature',
                            "You can administer even greater cures with a touch, and if you feel it's necessary, you can use your knowledge to cause harm.",
                            'When you use Hand of Healing on a creature, you can also end one disease or one of the following conditions affecting the creature: blinded, deafened, paralyzed, poisoned, or stunned.',
                            'When you use Hand of Harm on a creature, you can subject that creature to the poisoned condition until the end of your next turn.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Flurry of Healing and Harm',
                    source: 'TCE',
                    page: 49,
                    subclass_short_name: 'Mercy',
                    subclass_source: 'TCE',
                    level: 11,
                    entries: {
                        e: [
                            '11th-level Way of Mercy feature',
                            'You can now mete out a flurry of comfort and hurt. When you use Flurry of Blows, you can now replace each of the unarmed strikes with a use of your Hand of Healing, without spending ki points for the healing.',
                            'In addition, when you make an unarmed strike with Flurry of Blows, you can use Hand of Harm with that strike without spending the ki point for Hand of Harm. You can still use Hand of Harm only once per turn.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Hand of Ultimate Mercy',
                    source: 'TCE',
                    page: 49,
                    subclass_short_name: 'Mercy',
                    subclass_source: 'TCE',
                    level: 17,
                    entries: {
                        e: [
                            '17th-level Way of Mercy feature',
                            'Your mastery of life energy opens the door to the ultimate mercy. As an action, you can touch the corpse of a creature that died within the past 24 hours and expend 5 ki points. The creature then returns to life, regaining a number of hit points equal to 4d10 + your Wisdom modifier. If the creature died while subject to any of the following conditions, it revives with them removed: blinded, deafened, paralyzed, poisoned, and stunned.',
                            "Once you use this feature, you can't use it again until you finish a long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Way of the Drunken Master',
                    source: 'XGE',
                    page: 33,
                    subclass_short_name: 'Drunken Master',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            "The Way of the Drunken Master teaches its students to move with the jerky, unpredictable movements of a drunkard. A drunken master sways, tottering on unsteady feet, to present what seems like an incompetent combatant who proves frustrating to engage. The drunken master's erratic stumbles conceal a carefully executed dance of blocks, parries, advances, attacks, and retreats.",
                            'A drunken master often enjoys playing the fool to bring gladness to the despondent or to demonstrate humility to the arrogant, but when battle is joined, the drunken master can be a maddening, masterful foe.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Bonus Proficiencies|Monk||Drunken Master|XGE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Drunken Technique|Monk||Drunken Master|XGE|3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Bonus Proficiencies',
                    source: 'XGE',
                    page: 33,
                    subclass_short_name: 'Drunken Master',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            "When you choose this tradition at 3rd level, you gain proficiency in the Performance skill if you don't already have it. Your martial arts technique mixes combat training with the precision of a dancer and the antics of a jester. You also gain proficiency with brewer's supplies if you don't already have it.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Drunken Technique',
                    source: 'XGE',
                    page: 33,
                    subclass_short_name: 'Drunken Master',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'At 3rd level, you learn how to twist and turn quickly as part of your Flurry of Blows. Whenever you use Flurry of Blows, you gain the benefit of the Disengage action, and your walking speed increases by 10 feet until the end of the current turn.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Tipsy Sway',
                    source: 'XGE',
                    page: 33,
                    subclass_short_name: 'Drunken Master',
                    subclass_source: 'XGE',
                    level: 6,
                    entries: {
                        e: [
                            'Starting at 6th level, you can move in sudden, swaying ways. You gain the following benefits.',
                            {
                                type: 'options',
                                entries: [
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature:
                                            'Leap to Your Feet|Monk|XGE|Drunken Master|XGE|6',
                                    },
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Redirect Attack|Monk|XGE|Drunken Master|XGE|6',
                                    },
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: "Drunkard's Luck",
                    source: 'XGE',
                    page: 33,
                    subclass_short_name: 'Drunken Master',
                    subclass_source: 'XGE',
                    level: 11,
                    entries: {
                        e: [
                            'Starting at 11th level, you always seem to get a lucky bounce at the right moment. When you make an ability check, an attack roll, or a saving throw and have disadvantage on the roll, you can spend 2 ki points to cancel the disadvantage for that roll.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Intoxicated Frenzy',
                    source: 'XGE',
                    page: 33,
                    subclass_short_name: 'Drunken Master',
                    subclass_source: 'XGE',
                    level: 17,
                    entries: {
                        e: [
                            'At 17th level, you gain the ability to make an overwhelming number of attacks against a group of enemies. When you use your Flurry of Blows, you can make up to three additional attacks with it (up to a total of five Flurry of Blows attacks), provided that each Flurry of Blows attack targets a different creature this turn.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Way of the Kensei',
                    source: 'XGE',
                    page: 34,
                    subclass_short_name: 'Kensei',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'Monks of the Way of the Kensei train relentlessly with their weapons, to the point where the weapon becomes an extension of the body. Founded on a mastery of sword fighting, the tradition has expanded to include many different weapons.',
                            'A kensei sees a weapon in much the same way a calligrapher or painter regards a pen or brush. Whatever the weapon, the kensei views it as a tool used to express the beauty and precision of the martial arts. That such mastery makes a kensei a peerless warrior is but a side effect of intense devotion, practice, and study.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Path of the Kensei|Monk||Kensei|XGE|3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Path of the Kensei',
                    source: 'XGE',
                    page: 34,
                    subclass_short_name: 'Kensei',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'When you choose this tradition at 3rd level, your special martial arts training leads you to master the use of certain weapons. This path also includes instruction in the deft strokes of calligraphy or painting. You gain the following benefits.',
                            {
                                type: 'entries',
                                name: 'Kensei Weapons',
                                entries: [
                                    "Choose two types of weapons to be your kensei weapons: one melee weapon and one ranged weapon. Each of these weapons can be any simple or martial weapon that lacks the heavy and special properties. The longbow is also a valid choice. You gain proficiency with these weapons if you don't already have it. Weapons of the chosen types are monk weapons for you. Many of this tradition's features work only with your kensei weapons. When you reach 6th, 11th, and 17th level in this class, you can choose another type of weapon—either melee or ranged—to be a kensei weapon for you, following the criteria above.",
                                ],
                            },
                            {
                                type: 'options',
                                entries: [
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Agile Parry|Monk|XGE|Kensei|XGE|3',
                                    },
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: "Kensei's Shot|Monk|XGE|Kensei|XGE|3",
                                    },
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Way of the Brush',
                                entries: [
                                    "You gain proficiency with your choice of calligrapher's supplies or painter's supplies.",
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'One with the Blade',
                    source: 'XGE',
                    page: 34,
                    subclass_short_name: 'Kensei',
                    subclass_source: 'XGE',
                    level: 6,
                    entries: {
                        e: [
                            'At 6th level, you extend your ki into your kensei weapons, granting you the following benefits.',
                            {
                                type: 'entries',
                                name: 'Magic Kensei Weapons',
                                entries: [
                                    'Your attacks with your kensei weapons count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.',
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Deft Strike',
                                entries: [
                                    'When you hit a target with a kensei weapon, you can spend 1 ki point to cause the weapon to deal extra damage to the target equal to your Martial Arts die. You can use this feature only once on each of your turns.',
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Sharpen the Blade',
                    source: 'XGE',
                    page: 34,
                    subclass_short_name: 'Kensei',
                    subclass_source: 'XGE',
                    level: 11,
                    entries: {
                        e: [
                            'At 11th level, you gain the ability to augment your weapons further with your ki. As a bonus action, you can expend up to 3 ki points to grant one kensei weapon you touch a bonus to attack and damage rolls when you attack with it. The bonus equals the number of ki points you spent. This bonus lasts for 1 minute or until you use this feature again. This feature has no effect on a magic weapon that already has a bonus to attack and damage rolls.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Unerring Accuracy',
                    source: 'XGE',
                    page: 34,
                    subclass_short_name: 'Kensei',
                    subclass_source: 'XGE',
                    level: 17,
                    entries: {
                        e: [
                            'At 17th level, your mastery of weapons grants you extraordinary accuracy. If you miss with an attack roll using a monk weapon on your turn, you can reroll it. You can use this feature only once on each of your turns.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Way of the Sun Soul',
                    source: 'XGE',
                    page: 35,
                    subclass_short_name: 'Sun Soul',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'Monks of the Way of the Sun Soul learn to channel their life energy into searing bolts of light. They teach that meditation can unlock the ability to unleash the indomitable light shed by the soul of every living creature.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Radiant Sun Bolt|Monk||Sun Soul|XGE|3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Radiant Sun Bolt',
                    source: 'XGE',
                    page: 35,
                    subclass_short_name: 'Sun Soul',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'Starting when you choose this tradition at 3rd level, you can hurl searing bolts of magical radiance.',
                            'You gain a new attack option that you can use with the Attack action. This special attack is a ranged spell attack with a range of 30 feet. You are proficient with it, and you add your Dexterity modifier to its attack and damage rolls. Its damage is radiant, and its damage die is a d4. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table.',
                            'When you take the Attack action on your turn and use this special attack as part of it, you can spend 1 ki point to make the special attack twice as a bonus action.',
                            'When you gain the Extra Attack feature, this special attack can be used for any of the attacks you make as part of the Attack action.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Searing Arc Strike',
                    source: 'XGE',
                    page: 35,
                    subclass_short_name: 'Sun Soul',
                    subclass_source: 'XGE',
                    level: 6,
                    entries: {
                        e: [
                            'At 6th level, you gain the ability to channel your ki into searing waves of energy. Immediately after you take the Attack action on your turn, you can spend 2 ki points to cast the burning hands spell as a bonus action.',
                            "You can spend additional ki points to cast burning hands as a higher-level spell. Each additional ki point you spend increases the spell's level by 1. The maximum number of ki points (2 plus any additional points) that you can spend on the spell equals half your monk level.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Searing Sunburst',
                    source: 'XGE',
                    page: 35,
                    subclass_short_name: 'Sun Soul',
                    subclass_source: 'XGE',
                    level: 11,
                    entries: {
                        e: [
                            'At 11th level, you gain the ability to create an orb of light that erupts into a devastating explosion. As an action, you magically create an orb and hurl it at a point you choose within 150 feet, where it erupts into a sphere of radiant light for a brief but deadly instant.',
                            "Each creature in that 20-foot-radius sphere must succeed on a Constitution saving throw or take 2d6 radiant damage. A creature doesn't need to make the save if the creature is behind total cover that is opaque.",
                            "You can increase the sphere's damage by spending ki points. Each point you spend, to a maximum of 3, increases the damage by 2d6.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Sun Shield',
                    source: 'XGE',
                    page: 35,
                    subclass_short_name: 'Sun Soul',
                    subclass_source: 'XGE',
                    level: 17,
                    entries: {
                        e: [
                            'At 17th level, you become wreathed in a luminous, magical aura. You shed bright light in a 30-foot radius and dim light for an additional 30 feet. You can extinguish or restore the light as a bonus action.',
                            'If a creature hits you with a melee attack while this light shines, you can use your reaction to deal radiant damage to the creature. The radiant damage equals 5 + your Wisdom modifier.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Leap to Your Feet',
                    source: 'XGE',
                    page: 34,
                    subclass_short_name: 'Drunken Master',
                    subclass_source: 'XGE',
                    level: 6,
                    entries: {
                        e: [
                            "When you're prone, you can stand up by spending 5 feet of movement, rather than half your speed.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Redirect Attack',
                    source: 'XGE',
                    page: 34,
                    subclass_short_name: 'Drunken Master',
                    subclass_source: 'XGE',
                    level: 6,
                    entries: {
                        e: [
                            'When a creature misses you with a melee attack roll, you can spend 1 ki point as a reaction to cause that attack to hit one creature of your choice, other than the attacker, that you can see within 5 feet of you.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Agile Parry',
                    source: 'XGE',
                    page: 34,
                    subclass_short_name: 'Kensei',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            "If you make an unarmed strike as part of the Attack action on your turn and are holding a kensei weapon, you can use it to defend yourself if it is a melee weapon. You gain a +2 bonus to AC until the start of your next turn, while the weapon is in your hand and you aren't incapacitated.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: "Kensei's Shot",
                    source: 'XGE',
                    page: 34,
                    subclass_short_name: 'Kensei',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            "You can use a bonus action on your turn to make your ranged attacks with a kensei weapon more deadly. When you do so, any target you hit with a ranged attack using a kensei weapon takes an extra 1d4 damage of the weapon's type. You retain this benefit until the end of the current turn.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '3cef1591-b577-4c0f-9dc7-02b846c63d52',
                },
                {
                    name: 'Echo Knight',
                    source: 'EGW',
                    page: 183,
                    subclass_short_name: 'Echo Knight',
                    subclass_source: 'EGW',
                    level: 3,
                    entries: {
                        e: [
                            'A mysterious and feared frontline warrior of the Kryn Dynasty, the Echo Knight has mastered the art of using dunamis to summon the fading shades of unrealized timelines to aid them in battle. Surrounded by echoes of their own might, they charge into the fray as a cycling swarm of shadows and strikes.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Manifest Echo|Fighter||Echo Knight|EGW|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Unleash Incarnation|Fighter||Echo Knight|EGW|3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Manifest Echo',
                    source: 'EGW',
                    page: 183,
                    subclass_short_name: 'Echo Knight',
                    subclass_source: 'EGW',
                    level: 3,
                    entries: {
                        e: [
                            '3rd-level Echo Knight feature',
                            "You can use a bonus action to magically manifest an echo of yourself in an unoccupied space you can see within 15 feet of you. This echo is a magical, translucent, gray image of you that lasts until it is destroyed, until you dismiss it as a bonus action, until you manifest another echo, or until you're incapacitated.",
                            'Your echo has AC 14 + your proficiency bonus, 1 hit point, and immunity to all conditions. If it has to make a saving throw, it uses your saving throw bonus for the roll. It is the same size as you, and it occupies its space. On your turn, you can mentally command the echo to move up to 30 feet in any direction (no action required). If your echo is ever more than 30 feet from you at the end of your turn, it is destroyed.',
                            'You can use the echo in the following ways:',
                            {
                                type: 'list',
                                items: [
                                    'As a bonus action, you can teleport, magically swapping places with your echo at a cost of 15 feet of your movement, regardless of the distance between the two of you.',
                                    "When you take the Attack action on your turn, any attack you make with that action can originate from your space or the echo's space. You make this choice for each attack.",
                                    "When a creature that you can see within 5 feet of your echo moves at least 5 feet away from it, you can use your reaction to make an opportunity attack against that creature as if you were in the echo's space.",
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Unleash Incarnation',
                    source: 'EGW',
                    page: 183,
                    subclass_short_name: 'Echo Knight',
                    subclass_source: 'EGW',
                    level: 3,
                    entries: {
                        e: [
                            '3rd-level Echo Knight feature',
                            "You can heighten your echo's fury. Whenever you take the Attack action, you can make one additional melee attack from the echo's position.",
                            'You can use this feature a number of times equal to your Constitution modifier (a minimum of once). You regain all expended uses when you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Echo Avatar',
                    source: 'EGW',
                    page: 183,
                    subclass_short_name: 'Echo Knight',
                    subclass_source: 'EGW',
                    level: 7,
                    entries: {
                        e: [
                            '7th-level Echo Knight feature',
                            "You can temporarily transfer your consciousness to your echo. As an action, you can see through your echo's eyes and hear through its ears. During this time, you are deafened and blinded. You can sustain this effect for up to 10 minutes, and you can end it at any time (requires no action). While your echo is being used in this way, it can be up to 1,000 feet away from you without being destroyed.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Shadow Martyr',
                    source: 'EGW',
                    page: 183,
                    subclass_short_name: 'Echo Knight',
                    subclass_source: 'EGW',
                    level: 10,
                    entries: {
                        e: [
                            '10th-level Echo Knight feature',
                            'You can make your echo throw itself in front of an attack directed at another creature that you can see. Before the attack roll is made, you can use your reaction to teleport the echo to an unoccupied space within 5 feet of the targeted creature. The attack roll that triggered the reaction is instead made against your echo.',
                            "Once you use this feature, you can't use it again until you finish a short or long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Reclaim Potential',
                    source: 'EGW',
                    page: 183,
                    subclass_short_name: 'Echo Knight',
                    subclass_source: 'EGW',
                    level: 15,
                    entries: {
                        e: [
                            '15th-level Echo Knight feature',
                            "You've learned to absorb the fleeting magic of your echo. When an echo of yours is destroyed by taking damage, you can gain a number of temporary hit points equal to 2d6 + your Constitution modifier, provided you don't already have temporary hit points.",
                            'You can use this feature a number of times equal to your Constitution modifier (a minimum of once). You regain all expended uses when you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Legion of One',
                    source: 'EGW',
                    page: 183,
                    subclass_short_name: 'Echo Knight',
                    subclass_source: 'EGW',
                    level: 18,
                    entries: {
                        e: [
                            '18th-level Echo Knight feature',
                            "You can use a bonus action to create two echoes with your Manifest Echo feature, and these echoes can coexist. If you try to create a third echo, the previous two echoes are destroyed. Anything you can do from one echo's position can be done from the other's instead.",
                            'In addition, when you roll initiative and have no uses of your Unleash Incarnation feature left, you regain one use of that feature.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Battle Master',
                    source: 'PHB',
                    page: 73,
                    subclass_short_name: 'Battle Master',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'Those who emulate the archetypal Battle Master employ martial techniques passed down through generations. To a Battle Master, combat is an academic field, sometimes including subjects beyond battle such as weaponsmithing and calligraphy. Not every fighter absorbs the lessons of history, theory, and artistry that are reflected in the Battle Master archetype, but those who do are well-rounded fighters of great skill and knowledge.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Student of War|Fighter||Battle Master||3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Combat Superiority|Fighter||Battle Master||3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Maneuvers|Fighter||Battle Master||3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature:
                                    'Maneuver Options|Fighter||Battle Master||3|UAClassFeatureVariants',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Maneuver Options|Fighter||Battle Master||3|TCE',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Combat Superiority',
                    source: 'PHB',
                    page: 73,
                    subclass_short_name: 'Battle Master',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'When you choose this archetype at 3rd level, you learn maneuvers that are fueled by special dice called superiority dice.',
                            {
                                type: 'entries',
                                entries: [
                                    {
                                        type: 'entries',
                                        name: 'Maneuvers',
                                        entries: [
                                            'You learn three maneuvers of your choice, which are listed under "Maneuvers" below. Many maneuvers enhance an attack in some way. You can use only one maneuver per attack.',
                                            'You learn two additional maneuvers of your choice at 7th, 10th, and 15th level. Each time you learn new maneuvers, you can also replace one maneuver you know with a different one.',
                                        ],
                                    },
                                ],
                            },
                            {
                                type: 'entries',
                                entries: [
                                    {
                                        type: 'entries',
                                        name: 'Superiority Dice',
                                        entries: [
                                            'You have four superiority dice, which are d8s. A superiority die is expended when you use it. You regain all of your expended superiority dice when you finish a short or long rest.',
                                            'You gain another superiority die at 7th level and one more at 15th level.',
                                        ],
                                    },
                                ],
                            },
                            {
                                type: 'entries',
                                entries: [
                                    {
                                        type: 'entries',
                                        name: 'Saving Throws',
                                        entries: [
                                            "Some of your maneuvers require your target to make a saving throw to resist the maneuver's effects. The saving throw DC is calculated as follows:",
                                            {
                                                type: 'abilityDc',
                                                name: 'Maneuver',
                                                attributes: ['str', 'dex'],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Maneuver Options',
                    source: 'TCE',
                    page: 41,
                    subclass_short_name: 'Battle Master',
                    subclass_source: 'PHB',
                    level: 3,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            '3rd-level fighter optional class features',
                            'If you have access to maneuvers, the following maneuvers are added to the list of options available to you. Maneuvers are available to Battle Masters but also to characters who have a special feature like the Superior Technique fighting style or the Martial Adept feat.',
                            {
                                type: 'entries',
                                entries: [
                                    {
                                        type: 'options',
                                        entries: [
                                            {
                                                type: 'refOptionalfeature',
                                                optionalfeature: 'Ambush|TCE',
                                            },
                                            {
                                                type: 'refOptionalfeature',
                                                optionalfeature: 'Bait and Switch|TCE',
                                            },
                                            {
                                                type: 'refOptionalfeature',
                                                optionalfeature: 'Brace|TCE',
                                            },
                                            {
                                                type: 'refOptionalfeature',
                                                optionalfeature: 'Commanding Presence|TCE',
                                            },
                                            {
                                                type: 'refOptionalfeature',
                                                optionalfeature: 'Grappling Strike|TCE',
                                            },
                                            {
                                                type: 'refOptionalfeature',
                                                optionalfeature: 'Quick Toss|TCE',
                                            },
                                            {
                                                type: 'refOptionalfeature',
                                                optionalfeature: 'Tactical Assessment|TCE',
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Maneuvers',
                    source: 'PHB',
                    page: 73,
                    subclass_short_name: 'Battle Master',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'The maneuvers are presented in alphabetical order.',
                            {
                                type: 'options',
                                count: 3,
                                entries: [
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: "Commander's Strike",
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Disarming Attack',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Distracting Strike',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Evasive Footwork',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Feinting Attack',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Goading Attack',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Lunging Attack',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Maneuvering Attack',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Menacing Attack',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Parry',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Precision Attack',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Pushing Attack',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Rally',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Riposte',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Sweeping Attack',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Trip Attack',
                                    },
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Student of War',
                    source: 'PHB',
                    page: 73,
                    subclass_short_name: 'Battle Master',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            "At 3rd level, you gain proficiency with one type of artisan's tools of your choice.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Additional Maneuvers',
                    source: 'PHB',
                    page: 73,
                    subclass_short_name: 'Battle Master',
                    subclass_source: 'PHB',
                    level: 7,
                    entries: {
                        e: ['At 7th level, you learn two additional maneuvers of your choice.'],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Additional Superiority Die',
                    source: 'PHB',
                    page: 73,
                    subclass_short_name: 'Battle Master',
                    subclass_source: 'PHB',
                    level: 7,
                    entries: {
                        e: ['You gain another superiority die at 7th level.'],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Know Your Enemy',
                    source: 'PHB',
                    page: 73,
                    subclass_short_name: 'Battle Master',
                    subclass_source: 'PHB',
                    level: 7,
                    entries: {
                        e: [
                            'If you spend at least 1 minute observing or interacting with another creature outside combat, you can learn certain information about its capabilities compared to your own. The DM tells you if the creature is your equal, superior, or inferior in regard to two of the following characteristics of your choice:',
                            {
                                type: 'list',
                                items: [
                                    'Strength score',
                                    'Dexterity score',
                                    'Constitution score',
                                    'Armor Class',
                                    'Current hit points',
                                    'Total class levels (if any)',
                                    'Fighter class levels (if any)',
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Additional Maneuvers',
                    source: 'PHB',
                    page: 73,
                    subclass_short_name: 'Battle Master',
                    subclass_source: 'PHB',
                    level: 10,
                    entries: {
                        e: ['At 10th level, you learn two additional maneuvers of your choice.'],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Improved Combat Superiority (d10)',
                    source: 'PHB',
                    page: 73,
                    subclass_short_name: 'Battle Master',
                    subclass_source: 'PHB',
                    level: 10,
                    entries: {
                        e: ['At 10th level, your superiority dice turn into d10s.'],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Additional Maneuvers',
                    source: 'PHB',
                    page: 73,
                    subclass_short_name: 'Battle Master',
                    subclass_source: 'PHB',
                    level: 15,
                    entries: {
                        e: ['At 15th level, you learn two additional maneuvers of your choice.'],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Additional Superiority Die',
                    source: 'PHB',
                    page: 73,
                    subclass_short_name: 'Battle Master',
                    subclass_source: 'PHB',
                    level: 15,
                    entries: {
                        e: ['You gain another superiority die at 15th level.'],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Relentless',
                    source: 'PHB',
                    page: 73,
                    subclass_short_name: 'Battle Master',
                    subclass_source: 'PHB',
                    level: 15,
                    entries: {
                        e: [
                            'Starting at 15th level, when you roll initiative and have no superiority dice remaining, you regain 1 superiority die.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Improved Combat Superiority (d12)',
                    source: 'PHB',
                    page: 73,
                    subclass_short_name: 'Battle Master',
                    subclass_source: 'PHB',
                    level: 18,
                    entries: {
                        e: ['At 18th level, your superiority dice turn into d12s.'],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Champion',
                    source: 'PHB',
                    page: 72,
                    subclass_short_name: 'Champion',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'The archetypal Champion focuses on the development of raw physical power honed to deadly perfection. Those who model themselves on this archetype combine rigorous training with physical excellence to deal devastating blows.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Improved Critical|Fighter||Champion||3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Improved Critical',
                    source: 'PHB',
                    page: 72,
                    subclass_short_name: 'Champion',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'Beginning when you choose this archetype at 3rd level, your weapon attacks score a critical hit on a roll of 19 or 20.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Remarkable Athlete',
                    source: 'PHB',
                    page: 72,
                    subclass_short_name: 'Champion',
                    subclass_source: 'PHB',
                    level: 7,
                    entries: {
                        e: [
                            "Starting at 7th level, you can add half your proficiency bonus (round up) to any Strength, Dexterity, or Constitution check you make that doesn't already use your proficiency bonus.",
                            'In addition, when you make a running long jump, the distance you can cover increases by a number of feet equal to your Strength modifier.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Additional Fighting Style',
                    source: 'PHB',
                    page: 72,
                    subclass_short_name: 'Champion',
                    subclass_source: 'PHB',
                    level: 10,
                    entries: {
                        e: [
                            'At 10th level, you can choose a second option from the Fighting Style class feature.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Superior Critical',
                    source: 'PHB',
                    page: 72,
                    subclass_short_name: 'Champion',
                    subclass_source: 'PHB',
                    level: 15,
                    entries: {
                        e: [
                            'Starting at 15th level, your weapon attacks score a critical hit on a roll of 18-20.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Survivor',
                    source: 'PHB',
                    page: 72,
                    subclass_short_name: 'Champion',
                    subclass_source: 'PHB',
                    level: 18,
                    entries: {
                        e: [
                            "At 18th level, you attain the pinnacle of resilience in battle. At the start of each of your turns, you regain hit points equal to 5 + your Constitution modifier if you have no more than half of your hit points left. You don't gain this benefit if you have 0 hit points.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Eldritch Knight',
                    source: 'PHB',
                    page: 74,
                    subclass_short_name: 'Eldritch Knight',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            "The archetypal Eldritch Knight combines the martial mastery common to all fighters with a careful study of magic. Eldritch Knights use magical techniques similar to those practiced by wizards. They focus their study on two of the eight schools of magic—abjuration and evocation. Abjuration spells grant an Eldritch Knight additional protection in battle, and evocation spells deal damage to many foes at once, extending the fighter's reach in combat. These knights learn a comparatively small number of spells, committing them to memory instead of keeping them in a spellbook.",
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Spellcasting|Fighter||Eldritch Knight||3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Weapon Bond|Fighter||Eldritch Knight||3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Spellcasting',
                    source: 'PHB',
                    page: 74,
                    subclass_short_name: 'Eldritch Knight',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'When you reach 3rd level, you augment your martial prowess with the ability to cast spells. See chapter 10 for the general rules of spellcasting and chapter 11 for the wizard spell list.',
                            {
                                type: 'entries',
                                name: 'Cantrips',
                                entries: [
                                    'You learn two cantrips of your choice from the wizard spell list. You learn an additional wizard cantrip of your choice at 10th level.',
                                ],
                            },
                            {
                                type: 'entries',
                                entries: [
                                    {
                                        type: 'entries',
                                        name: 'Spell Slots',
                                        entries: [
                                            "The Eldritch Knight Spellcasting table shows how many spell slots you have to cast your wizard spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
                                            'For example, if you know the 1st-level spell shield and have a 1st-level and a 2nd-level spell slot available, you can cast shield using either slot.',
                                        ],
                                    },
                                ],
                            },
                            {
                                type: 'entries',
                                entries: [
                                    {
                                        type: 'entries',
                                        name: 'Spells Known of 1st-Level and Higher',
                                        entries: [
                                            'You know three 1st-level wizard spells of your choice, two of which you must choose from the abjuration and evocation spells on the wizard spell list.',
                                            'The Spells Known column of the Eldritch Knight Spellcasting table shows when you learn more wizard spells of 1st level or higher. Each of these spells must be an abjuration or evocation spell of your choice, and must be of a level for which you have spell slots. For instance, when you reach 7th level in this class, you can learn one new spell of 1st or 2nd level.',
                                            'The spells you learn at 8th, 14th, and 20th level can come from any school of magic.',
                                            "Whenever you gain a level in this class, you can replace one of the wizard spells you know with another spell of your choice from the wizard spell list. The new spell must be of a level for which you have spell slots, and it must be an abjuration or evocation spell, unless you're replacing the spell you gained at 3rd, 8th, 14th, or 20th level from any school of magic.",
                                        ],
                                    },
                                ],
                            },
                            {
                                type: 'entries',
                                entries: [
                                    {
                                        type: 'entries',
                                        name: 'Spellcasting Ability',
                                        entries: [
                                            'Intelligence is your spellcasting ability for your wizard spells, since you learn your spells through study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.',
                                            {
                                                type: 'abilityDc',
                                                name: 'Spell',
                                                attributes: ['int'],
                                            },
                                            {
                                                type: 'abilityAttackMod',
                                                name: 'Spell',
                                                attributes: ['int'],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Weapon Bond',
                    source: 'PHB',
                    page: 74,
                    subclass_short_name: 'Eldritch Knight',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'At 3rd level, you learn a ritual that creates a magical bond between yourself and one weapon. You perform the ritual over the course of 1 hour, which can be done during a short rest. The weapon must be within your reach throughout the ritual, at the conclusion of which you touch the weapon and forge the bond.',
                            "Once you have bonded a weapon to yourself, you can't be disarmed of that weapon unless you are incapacitated. If it is on the same plane of existence, you can summon that weapon as a bonus action on your turn, causing it to teleport instantly to your hand.",
                            'You can have up to two bonded weapons, but can summon only one at a time with your bonus action. If you attempt to bond with a third weapon, you must break the bond with one of the other two.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'War Magic',
                    source: 'PHB',
                    page: 74,
                    subclass_short_name: 'Eldritch Knight',
                    subclass_source: 'PHB',
                    level: 7,
                    entries: {
                        e: [
                            'Beginning at 7th level, when you use your action to cast a cantrip, you can make one weapon attack as a bonus action.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Eldritch Strike',
                    source: 'PHB',
                    page: 74,
                    subclass_short_name: 'Eldritch Knight',
                    subclass_source: 'PHB',
                    level: 10,
                    entries: {
                        e: [
                            "At 10th level, you learn how to make your weapon strikes undercut a creature's resistance to your spells. When you hit a creature with a weapon attack, that creature has disadvantage on the next saving throw it makes against a spell you cast before the end of your next turn.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Arcane Charge',
                    source: 'PHB',
                    page: 74,
                    subclass_short_name: 'Eldritch Knight',
                    subclass_source: 'PHB',
                    level: 15,
                    entries: {
                        e: [
                            'At 15th level, you gain the ability to teleport up to 30 feet to an unoccupied space you can see when you use your Action Surge. You can teleport before or after the additional action.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Improved War Magic',
                    source: 'PHB',
                    page: 74,
                    subclass_short_name: 'Eldritch Knight',
                    subclass_source: 'PHB',
                    level: 18,
                    entries: {
                        e: [
                            'Starting at 18th level, when you use your action to cast a spell, you can make one weapon attack as a bonus action.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Purple Dragon Knight (Banneret)',
                    source: 'SCAG',
                    page: 128,
                    subclass_short_name: 'Purple Dragon Knight (Banneret)',
                    subclass_source: 'SCAG',
                    level: 3,
                    entries: {
                        e: [
                            "Purple Dragon Knights are warriors who hail from the kingdom of Cormyr. Pledged to protect the crown, they take the fight against evil beyond the kingdom's borders. They are tasked with wandering the land as knights errant, relying on their judgment, bravery, and fidelity to guide them in defeating evildoers.",
                            'A Purple Dragon Knight inspires greatness in others by committing brave deeds in battle. The mere presence of a knight in a hamlet is enough to cause some orcs and bandits to seek easier prey. A lone knight is a skilled warrior, but a knight leading a band of allies can transform even the most poorly equipped militia into a ferocious war band.',
                            "A knight prefers to lead through deeds, not words. As a knight spearheads an attack, the knight's actions can awaken reserves of courage and conviction in allies that they never suspected they had.",
                            {
                                type: 'refSubclassFeature',
                                subclassFeature:
                                    'Restriction: Knighthood|Fighter||Purple Dragon Knight (Banneret)|SCAG|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature:
                                    'Rallying Cry|Fighter||Purple Dragon Knight (Banneret)|SCAG|3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Rallying Cry',
                    source: 'SCAG',
                    page: 128,
                    subclass_short_name: 'Purple Dragon Knight (Banneret)',
                    subclass_source: 'SCAG',
                    level: 3,
                    entries: {
                        e: [
                            'When you choose this archetype at 3rd level, you learn how to inspire your allies to fight on past their injuries.',
                            'When you use your Second Wind feature, you can choose up to three creatures within 60 feet of you that are allied with you. Each one regains hit points equal to your fighter level, provided that the creature can see or hear you.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Restriction: Knighthood',
                    source: 'SCAG',
                    page: 128,
                    subclass_short_name: 'Purple Dragon Knight (Banneret)',
                    subclass_source: 'SCAG',
                    level: 3,
                    entries: {
                        e: [
                            'Purple Dragon Knights are tied to a specific order of Cormyrean knighthood.',
                            'Banneret serves as the generic name for this archetype if you use it in other campaign settings or to model warlords other than the Purple Dragon Knights.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Royal Envoy',
                    source: 'SCAG',
                    page: 128,
                    subclass_short_name: 'Purple Dragon Knight (Banneret)',
                    subclass_source: 'SCAG',
                    level: 7,
                    entries: {
                        e: [
                            'A Purple Dragon Knight serves as an envoy of the Cormyrean crown. Knights of high standing are expected to conduct themselves with grace.',
                            'At 7th level, you gain proficiency in the Persuasion skill. If you are already proficient in it, you gain proficiency in one of the following skills of your choice: Animal Handling, Insight, Intimidation, or Performance.',
                            'Your proficiency bonus is doubled for any ability check you make that uses Persuasion. You receive this benefit regardless of the skill proficiency you gain from this feature.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Inspiring Surge',
                    source: 'SCAG',
                    page: 128,
                    subclass_short_name: 'Purple Dragon Knight (Banneret)',
                    subclass_source: 'SCAG',
                    level: 10,
                    entries: {
                        e: [
                            'Starting at 10th level, when you use your Action Surge feature, you can choose one creature within 60 feet of you that is allied with you. That creature can make one melee or ranged weapon attack with its reaction, provided that it can see or hear you.',
                            'Starting at 18th level, you can choose two allies within 60 feet of you, rather than one.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Bulwark',
                    source: 'SCAG',
                    page: 128,
                    subclass_short_name: 'Purple Dragon Knight (Banneret)',
                    subclass_source: 'SCAG',
                    level: 15,
                    entries: {
                        e: [
                            "Beginning at 15th level, you can extend the benefit of your Indomitable feature to an ally. When you decide to use Indomitable to reroll an Intelligence, a Wisdom, or a Charisma saving throw and you aren't incapacitated, you can choose one ally within 60 feet of you that also failed its saving throw against the same effect. If that creature can see or hear you, it can reroll its saving throw and must use the new roll.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Inspiring Surge',
                    source: 'SCAG',
                    page: 128,
                    subclass_short_name: 'Purple Dragon Knight (Banneret)',
                    subclass_source: 'SCAG',
                    level: 18,
                    entries: {
                        e: [
                            'Starting at 18th level, you can choose two allies within 60 feet of you, rather than one.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Psi Warrior',
                    source: 'TCE',
                    page: 42,
                    subclass_short_name: 'Psi Warrior',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            'Awake to the psionic power within, a Psi Warrior is a fighter who augments their physical might with psi-infused weapon strikes, telekinetic lashes, and barriers of mental force. Many githyanki train to become such warriors, as do some of the most disciplined high elves. In the world of Eberron, many young kalashtar dream of becoming Psi Warriors.',
                            "As a Psi Warrior, you might have honed your psionic abilities through solo discipline, unlocked it under the tutelage of a master, or refined it at an academy dedicated to wielding the mind's power as both weapon and shield.",
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Psionic Power|Fighter||Psi Warrior|TCE|3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Psionic Power',
                    source: 'TCE',
                    page: 42,
                    subclass_short_name: 'Psi Warrior',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            '3rd-level Psi Warrior feature',
                            'You harbor a wellspring of psionic energy within yourself. This energy is represented by your Psionic Energy dice, which are each a d6. You have a number of these dice equal to twice your proficiency bonus, and they fuel various psionic powers you have, which are detailed below.',
                            "Some of your powers expend the Psionic Energy die they use, as specified in a power's description, and you can't use a power if it requires you to use a die when your dice are all expended. You regain all your expended Psionic Energy dice when you finish a long rest. In addition, as a bonus action, you can regain one expended Psionic Energy die, but you can't do so again until you finish a short or long rest.",
                            'When you reach certain levels in this class, the size of your Psionic Energy dice increases: at 5th level (d8), 11th level (d10), and 17th level (d12).',
                            'The powers below use your Psionic Energy dice.',
                            {
                                type: 'options',
                                style: 'list-hang-notitle',
                                entries: [
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Protective Field|Fighter|TCE|Psi Warrior|TCE|3',
                                    },
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Psionic Strike|Fighter|TCE|Psi Warrior|TCE|3',
                                    },
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature:
                                            'Telekinetic Movement|Fighter|TCE|Psi Warrior|TCE|3',
                                    },
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Telekinetic Adept',
                    source: 'TCE',
                    page: 42,
                    subclass_short_name: 'Psi Warrior',
                    subclass_source: 'TCE',
                    level: 7,
                    entries: {
                        e: [
                            '7th-level Psi Warrior feature',
                            'You have mastered new ways to use your telekinetic abilities, detailed below.',
                            {
                                type: 'options',
                                style: 'list-hang-notitle',
                                entries: [
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature:
                                            'Psi-Powered Leap.|Fighter|TCE|Psi Warrior|TCE|7',
                                    },
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature:
                                            'Telekinetic Thrust.|Fighter|TCE|Psi Warrior|TCE|7',
                                    },
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Guarded Mind',
                    source: 'TCE',
                    page: 42,
                    subclass_short_name: 'Psi Warrior',
                    subclass_source: 'TCE',
                    level: 10,
                    entries: {
                        e: [
                            '10th-level Psi Warrior feature',
                            'The psionic energy flowing through you has bolstered your mind. You have resistance to psychic damage. Moreover, if you start your turn charmed or frightened, you can expend a Psionic Energy die and end every effect on yourself subjecting you to those conditions.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Bulwark of Force',
                    source: 'TCE',
                    page: 42,
                    subclass_short_name: 'Psi Warrior',
                    subclass_source: 'TCE',
                    level: 15,
                    entries: {
                        e: [
                            '15th-level Psi Warrior feature',
                            "You can shield yourself and others with telekinetic force. As a bonus action, you can choose creatures, which can include you, that you can see within 30 feet of you, up to a number of creatures equal to your Intelligence modifier (minimum of one creature). Each of the chosen creatures is protected by half cover for 1 minute or until you're incapacitated.",
                            "Once you take this bonus action, you can't do so again until you finish a long rest, unless you expend a Psionic Energy die to take it again.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Telekinetic Master',
                    source: 'TCE',
                    page: 42,
                    subclass_short_name: 'Psi Warrior',
                    subclass_source: 'TCE',
                    level: 18,
                    entries: {
                        e: [
                            '18th-level Psi Warrior feature',
                            'Your ability to move creatures and objects with your mind is matched by few. You can cast the telekinesis spell, requiring no components, and your spellcasting ability for the spell is Intelligence. On each of your turns while you concentrate on the spell, including the turn when you cast it, you can make one attack with a weapon as a bonus action.',
                            "Once you cast the spell with this feature, you can't do so again until you finish a long rest, unless you expend a Psionic Energy die to cast it again.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Rune Knight',
                    source: 'TCE',
                    page: 44,
                    subclass_short_name: 'Rune Knight',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            "Rune Knights enhance their martial prowess using the supernatural power of runes, an ancient practice that originated with giants. Rune cutters can be found among any family of giants, and you likely learned your methods first or second hand from such a mystical artisan. Whether you found the giant's work carved into a hill or cave, learned of the runes from a sage, or met the giant in person, you studied the giant's craft and learned how to apply magic runes to empower your equipment.",
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Bonus Proficiencies|Fighter||Rune Knight|TCE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Rune Carver|Fighter||Rune Knight|TCE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: "Giant's Might|Fighter||Rune Knight|TCE|3",
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Bonus Proficiencies',
                    source: 'TCE',
                    page: 44,
                    subclass_short_name: 'Rune Knight',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            '3rd-level Rune Knight feature',
                            "You gain proficiency with smith's tools, and you learn to speak, read, and write Giant.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: "Giant's Might",
                    source: 'TCE',
                    page: 44,
                    subclass_short_name: 'Rune Knight',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            '3rd-level Rune Knight feature',
                            'You have learned how to imbue yourself with the might of giants. As a bonus action, you magically gain the following benefits, which last for 1 minute:',
                            {
                                type: 'list',
                                items: [
                                    "If you are smaller than Large, you become Large, along with anything you are wearing. If you lack the room to become Large, your size doesn't change.",
                                    'You have advantage on Strength checks and Strength saving throws.',
                                    'Once on each of your turns, one of your attacks with a weapon or an unarmed strike can deal an extra 1d6 damage to a target on a hit.',
                                ],
                            },
                            'You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses of it when you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Rune Carver',
                    source: 'TCE',
                    page: 44,
                    subclass_short_name: 'Rune Knight',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            '3rd-level Rune Knight feature',
                            'You can use magic runes to enhance your gear. You learn two runes of your choice, from among the runes described below, and each time you gain a level in this class, you can replace one rune you know with a different one from this feature. When you reach certain levels in this class, you learn additional runes, as shown in the Runes Known table.',
                            'Whenever you finish a long rest, you can touch a number of objects equal to the number of runes you know, and you inscribe a different rune onto each of the objects. To be eligible, an object must be a weapon, a suit of armor, a shield, a piece of jewelry, or something else you can wear or hold in a hand. Your rune remains on an object until you finish a long rest, and an object can bear only one of your runes at a time.',
                            {
                                type: 'table',
                                caption: 'Runes Known',
                                colLabels: ['Fighter Level', 'Number of Runes'],
                                colStyles: ['col-6 text-center', 'col-6 text-center'],
                                rows: [
                                    ['3rd', '2'],
                                    ['7th', '3'],
                                    ['10th', '4'],
                                    ['15th', '5'],
                                ],
                            },
                            'The following runes are available to you when you learn a rune. If a rune has a level requirement, you must be at least that level in this class to learn the rune. If a rune requires a saving throw, your Rune Magic save DC equals 8 + your proficiency bonus + your Constitution modifier.',
                            {
                                type: 'options',
                                count: 2,
                                entries: [
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Cloud Rune|TCE',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Fire Rune|TCE',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Frost Rune|TCE',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Stone Rune|TCE',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Hill Rune|TCE',
                                        name: 'Hill Rune (7th Level or Higher)',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Storm Rune|TCE',
                                        name: 'Storm Rune (7th Level or Higher)',
                                    },
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Additional Rune Known',
                    source: 'TCE',
                    page: 44,
                    subclass_short_name: 'Rune Knight',
                    subclass_source: 'TCE',
                    level: 7,
                    entries: {
                        e: ['7th-level Rune Knight feature', 'You learn an additional Rune.'],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Runic Shield',
                    source: 'TCE',
                    page: 44,
                    subclass_short_name: 'Rune Knight',
                    subclass_source: 'TCE',
                    level: 7,
                    entries: {
                        e: [
                            '7th-level Rune Knight feature',
                            'You learn to invoke your rune magic to protect your allies. When another creature you can see within 60 feet of you is hit by an attack roll, you can use your reaction to force the attacker to reroll the d20 and use the new roll.',
                            'You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Additional Rune Known',
                    source: 'TCE',
                    page: 44,
                    subclass_short_name: 'Rune Knight',
                    subclass_source: 'TCE',
                    level: 10,
                    entries: {
                        e: ['10th-level Rune Knight feature', 'You learn an additional Rune.'],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Great Stature',
                    source: 'TCE',
                    page: 44,
                    subclass_short_name: 'Rune Knight',
                    subclass_source: 'TCE',
                    level: 10,
                    entries: {
                        e: [
                            '10th-level Rune Knight feature',
                            'The magic of your runes permanently alters you. When you gain this feature, roll 3d4. You grow a number of inches in height equal to the roll.',
                            "Moreover, the extra damage you deal with your Giant's Might feature increases to 1d8.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Additional Rune Known',
                    source: 'TCE',
                    page: 44,
                    subclass_short_name: 'Rune Knight',
                    subclass_source: 'TCE',
                    level: 15,
                    entries: {
                        e: ['15th-level Rune Knight feature', 'You learn an additional Rune.'],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Master of Runes',
                    source: 'TCE',
                    page: 44,
                    subclass_short_name: 'Rune Knight',
                    subclass_source: 'TCE',
                    level: 15,
                    entries: {
                        e: [
                            '15th-level Rune Knight feature',
                            'You can invoke each rune you know from your Rune Carver feature twice, rather than once, and you regain all expended uses when you finish a short or long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Runic Juggernaut',
                    source: 'TCE',
                    page: 44,
                    subclass_short_name: 'Rune Knight',
                    subclass_source: 'TCE',
                    level: 18,
                    entries: {
                        e: [
                            '18th-level Rune Knight feature',
                            "You learn how to amplify your rune-powered transformation. As a result, the extra damage you deal with the Giant's Might feature increases to 1d10. Moreover, when you use that feature, your size can increase to Huge, and while you are that size, your reach increases by 5 feet.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Arcane Archer',
                    source: 'XGE',
                    page: 28,
                    subclass_short_name: 'Arcane Archer',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'An Arcane Archer studies a unique elven method of archery that weaves magic into attacks to produce supernatural effects. Arcane Archers are some of the most elite warriors among the elves. They stand watch over the fringes of elven domains, keeping a keen eye out for trespassers and using magic-infused arrows to defeat monsters and invaders before they can reach elven settlements. Over the centuries, the methods of these elf archers have been learned by members of other races who can also balance arcane aptitude with archery.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Arcane Archer Lore|Fighter||Arcane Archer|XGE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Arcane Shot|Fighter||Arcane Archer|XGE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Arcane Shot Options|Fighter||Arcane Archer|XGE|3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Arcane Archer Lore',
                    source: 'XGE',
                    page: 28,
                    subclass_short_name: 'Arcane Archer',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'At 3rd level, you learn magical theory or some of the secrets of nature—typical for practitioners of this elven martial tradition. You choose to gain proficiency in either the Arcana or the Nature skill, and you choose to learn either the prestidigitation or the druidcraft cantrip.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Arcane Shot',
                    source: 'XGE',
                    page: 28,
                    subclass_short_name: 'Arcane Archer',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'At 3rd level, you learn to unleash special magical effects with some of your shots. When you gain this feature, you learn two Arcane Shot options of your choice (see "Arcane Shot Options" below).',
                            "Once per turn when you fire an arrow from a shortbow or longbow as part of the Attack action, you can apply one of your Arcane Shot options to that arrow. You decide to use the option when the arrow hits a creature, unless the option doesn't involve an attack roll. You have two uses of this ability, and you regain all expended uses of it when you finish a short or long rest.",
                            'You gain an additional Arcane Shot option of your choice when you reach certain levels in this class: 7th, 10th, 15th, and 18th level. Each option also improves when you become an 18th-level fighter.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Arcane Shot Options',
                    source: 'XGE',
                    page: 28,
                    subclass_short_name: 'Arcane Archer',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'The Arcane Shot feature lets you choose options for it at certain levels. The options are presented here in alphabetical order. They are all magical effects, and each one is associated with one of the schools of magic.',
                            'If an option requires a saving throw, your Arcane Shot save DC is calculated as follows:',
                            {
                                type: 'abilityDc',
                                name: 'Arcane Shot',
                                attributes: ['int'],
                            },
                            {
                                type: 'options',
                                count: 2,
                                entries: [
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Banishing Arrow|XGE',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Beguiling Arrow|XGE',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Bursting Arrow|XGE',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Enfeebling Arrow|XGE',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Grasping Arrow|XGE',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Piercing Arrow|XGE',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Seeking Arrow|XGE',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Shadow Arrow|XGE',
                                    },
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Additional Arcane Shot Option',
                    source: 'XGE',
                    page: 28,
                    subclass_short_name: 'Arcane Archer',
                    subclass_source: 'XGE',
                    level: 7,
                    entries: {
                        e: [
                            'You gain an additional Arcane Shot option of your choice when you reach 7th level.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Curving Shot',
                    source: 'XGE',
                    page: 28,
                    subclass_short_name: 'Arcane Archer',
                    subclass_source: 'XGE',
                    level: 7,
                    entries: {
                        e: [
                            'At 7th level, you learn how to direct an errant arrow toward a new target. When you make an attack roll with a magic arrow and miss, you can use a bonus action to reroll the attack roll against a different target within 60 feet of the original target.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Magic Arrow',
                    source: 'XGE',
                    page: 28,
                    subclass_short_name: 'Arcane Archer',
                    subclass_source: 'XGE',
                    level: 7,
                    entries: {
                        e: [
                            'At 7th level, you gain the ability to infuse arrows with magic. Whenever you fire a nonmagical arrow from a shortbow or longbow, you can make it magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage. The magic fades from the arrow immediately after it hits or misses its target.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Additional Arcane Shot Option',
                    source: 'XGE',
                    page: 28,
                    subclass_short_name: 'Arcane Archer',
                    subclass_source: 'XGE',
                    level: 10,
                    entries: {
                        e: [
                            'You gain an additional Arcane Shot option of your choice when you reach 10th level.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Additional Arcane Shot Option',
                    source: 'XGE',
                    page: 28,
                    subclass_short_name: 'Arcane Archer',
                    subclass_source: 'XGE',
                    level: 15,
                    entries: {
                        e: [
                            'You gain an additional Arcane Shot option of your choice when you reach 15th level.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Ever-Ready Shot',
                    source: 'XGE',
                    page: 28,
                    subclass_short_name: 'Arcane Archer',
                    subclass_source: 'XGE',
                    level: 15,
                    entries: {
                        e: [
                            'Starting at 15th level, your magical archery is available whenever battle starts. If you roll initiative and have no uses of Arcane Shot remaining, you regain one use of it.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Additional Arcane Shot Option',
                    source: 'XGE',
                    page: 28,
                    subclass_short_name: 'Arcane Archer',
                    subclass_source: 'XGE',
                    level: 18,
                    entries: {
                        e: [
                            'You gain an additional Arcane Shot option of your choice when you reach 18th level. Each option also improves when you become an 18th-level fighter.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Cavalier',
                    source: 'XGE',
                    page: 30,
                    subclass_short_name: 'Cavalier',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'The archetypal Cavalier excels at mounted combat. Usually born among the nobility and raised at court, a Cavalier is equally at home leading a cavalry charge or exchanging repartee at a state dinner. Cavaliers also learn how to guard those in their charge from harm, often serving as the protectors of their superiors and of the weak. Compelled to right wrongs or earn prestige, many of these fighters leave their lives of comfort to embark on glorious adventure.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Bonus Proficiency|Fighter||Cavalier|XGE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Born to the Saddle|Fighter||Cavalier|XGE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Unwavering Mark|Fighter||Cavalier|XGE|3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Bonus Proficiency',
                    source: 'XGE',
                    page: 30,
                    subclass_short_name: 'Cavalier',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'When you choose this archetype at 3rd level, you gain proficiency in one of the following skills of your choice: Animal Handling, History, Insight, Performance, or Persuasion. Alternatively, you learn one language of your choice.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Born to the Saddle',
                    source: 'XGE',
                    page: 30,
                    subclass_short_name: 'Cavalier',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            "Starting at 3rd level, your mastery as a rider becomes apparent. You have advantage on saving throws made to avoid falling off your mount. If you fall off your mount and descend no more than 10 feet, you can land on your feet if you're not incapacitated.",
                            'Finally, mounting or dismounting a creature costs you only 5 feet of movement, rather than half your speed.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Unwavering Mark',
                    source: 'XGE',
                    page: 30,
                    subclass_short_name: 'Cavalier',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'Starting at 3rd level, you can menace your foes, foiling their attacks and punishing them for harming others. When you hit a creature with a melee weapon attack, you can mark the creature until the end of your next turn. This effect ends early if you are incapacitated or you die, or if someone else marks the creature.',
                            "While it is within 5 feet of you, a creature marked by you has disadvantage on any attack roll that doesn't target you.",
                            "In addition, if a creature marked by you deals damage to anyone other than you, you can make a special melee weapon attack against the marked creature as a bonus action on your next turn. You have advantage on the attack roll, and if it hits, the attack's weapon deals extra damage to the target equal to half your fighter level.",
                            'Regardless of the number of creatures you mark, you can make this special attack a number of times equal to your Strength modifier (minimum of once), and you regain all expended uses of it when you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Warding Maneuver',
                    source: 'XGE',
                    page: 30,
                    subclass_short_name: 'Cavalier',
                    subclass_source: 'XGE',
                    level: 7,
                    entries: {
                        e: [
                            "At 7th level, you learn to fend off strikes directed at you, your mount, or other creatures nearby. If you or a creature you can see within 5 feet of you is hit by an attack, you can roll 1d8 as a reaction if you're wielding a melee weapon or a shield. Roll the die, and add the number rolled to the target's AC against that attack. If the attack still hits, the target has resistance against the attack's damage.",
                            'You can use this feature a number of times equal to your Constitution modifier (minimum of once), and you regain all expended uses of it when you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Hold the Line',
                    source: 'XGE',
                    page: 30,
                    subclass_short_name: 'Cavalier',
                    subclass_source: 'XGE',
                    level: 10,
                    entries: {
                        e: [
                            "At 10th level, you become a master of locking down your enemies. Creatures provoke an opportunity attack from you when they move 5 feet or more while within your reach, and if you hit a creature with an opportunity attack, the target's speed is reduced to 0 until the end of the current turn.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Ferocious Charger',
                    source: 'XGE',
                    page: 30,
                    subclass_short_name: 'Cavalier',
                    subclass_source: 'XGE',
                    level: 15,
                    entries: {
                        e: [
                            "Starting at 15th level, you can run down your foes, whether you're mounted or not. If you move at least 10 feet in a straight line right before attacking a creature and you hit it with the attack, that target must succeed on a Strength saving throw (DC 8 + your proficiency bonus + your Strength modifier) or be knocked prone. You can use this feature only once on each of your turns.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Vigilant Defender',
                    source: 'XGE',
                    page: 30,
                    subclass_short_name: 'Cavalier',
                    subclass_source: 'XGE',
                    level: 18,
                    entries: {
                        e: [
                            "Starting at 18th level, you respond to danger with extraordinary vigilance. In combat, you get a special reaction that you can take once on every creature's turn, except your turn. You can use this special reaction only to make an opportunity attack, and you can't use it on the same turn that you take your normal reaction.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Samurai',
                    source: 'XGE',
                    page: 31,
                    subclass_short_name: 'Samurai',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            "The Samurai is a fighter who draws on an implacable fighting spirit to overcome enemies. A Samurai's resolve is nearly unbreakable, and the enemies in a Samurai's path have two choices: yield or die fighting.",
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Bonus Proficiency|Fighter||Samurai|XGE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Fighting Spirit|Fighter||Samurai|XGE|3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Bonus Proficiency',
                    source: 'XGE',
                    page: 31,
                    subclass_short_name: 'Samurai',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'When you choose this archetype at 3rd level, you gain proficiency in one of the following skills of your choice: History, Insight, Performance, or Persuasion. Alternatively, you learn one language of your choice.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Fighting Spirit',
                    source: 'XGE',
                    page: 31,
                    subclass_short_name: 'Samurai',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'Starting at 3rd level, your intensity in battle can shield you and help you strike true. As a bonus action on your turn, you can give yourself advantage on weapon attack rolls until the end of the current turn. When you do so, you also gain 5 temporary hit points. The number of temporary hit points increases when you reach certain levels in this class, increasing to 10 at 10th level and 15 at 15th level.',
                            'You can use this feature three times, and you regain all expended uses of it when you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Elegant Courtier',
                    source: 'XGE',
                    page: 31,
                    subclass_short_name: 'Samurai',
                    subclass_source: 'XGE',
                    level: 7,
                    entries: {
                        e: [
                            'Starting at 7th level, your discipline and attention to detail allow you to excel in social situations. Whenever you make a Charisma (Persuasion) check, you gain a bonus to the check equal to your Wisdom modifier.',
                            'Your self-control also causes you to gain proficiency in Wisdom saving throws. If you already have this proficiency, you instead gain proficiency in Intelligence or Charisma saving throws (your choice).',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Tireless Spirit',
                    source: 'XGE',
                    page: 31,
                    subclass_short_name: 'Samurai',
                    subclass_source: 'XGE',
                    level: 10,
                    entries: {
                        e: [
                            'Starting at 10th level, when you roll initiative and have no uses of Fighting Spirit remaining, you regain one use.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Rapid Strike',
                    source: 'XGE',
                    page: 31,
                    subclass_short_name: 'Samurai',
                    subclass_source: 'XGE',
                    level: 15,
                    entries: {
                        e: [
                            'Starting at 15th level, you learn to trade accuracy for swift strikes. If you take the Attack action on your turn and have advantage on an attack roll against one of the targets, you can forgo the advantage for that roll to make an additional weapon attack against that target, as part of the same action. You can do so no more than once per turn.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Strength before Death',
                    source: 'XGE',
                    page: 31,
                    subclass_short_name: 'Samurai',
                    subclass_source: 'XGE',
                    level: 18,
                    entries: {
                        e: [
                            "Starting at 18th level, your fighting spirit can delay the grasp of death. If you take damage that reduces you to 0 hit points and doesn't kill you outright, you can use your reaction to delay falling unconscious, and you can immediately take an extra turn, interrupting the current turn. While you have 0 hit points during that extra turn, taking damage causes death saving throw failures as normal, and three death saving throw failures can still kill you. When the extra turn ends, you fall unconscious if you still have 0 hit points.",
                            "Once you use this feature, you can't use it again until you finish a long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Protective Field',
                    source: 'TCE',
                    page: 42,
                    subclass_short_name: 'Psi Warrior',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            'When you or another creature you can see within 30 feet of you takes damage, you can use your reaction to expend one Psionic Energy die, roll the die, and reduce the damage taken by the number rolled plus your Intelligence modifier (minimum reduction of 1), as you create a momentary shield of telekinetic force.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Psionic Strike',
                    source: 'TCE',
                    page: 42,
                    subclass_short_name: 'Psi Warrior',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            'You can propel your weapons with psionic force. Once on each of your turns, immediately after you hit a target within 30 feet of you with an attack and deal damage to it with a weapon, you can expend one Psionic Energy die, rolling it and dealing force damage to the target equal to the number rolled plus your Intelligence modifier.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Telekinetic Movement',
                    source: 'TCE',
                    page: 42,
                    subclass_short_name: 'Psi Warrior',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            "You can move an object or a creature with your mind. As an action, you target one loose object that is Large or smaller or one willing creature, other than yourself. If you can see the target and it is within 30 feet of you, you can move it up to 30 feet to an unoccupied space you can see. Alternatively, if it is a Tiny object, you can move it to or from your hand. Either way, you can move the target horizontally, vertically, or both. Once you take this action, you can't do so again until you finish a short or long rest, unless you expend a Psionic Energy die to take it again.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Psi-Powered Leap.',
                    source: 'TCE',
                    page: 42,
                    subclass_short_name: 'Psi Warrior',
                    subclass_source: 'TCE',
                    level: 7,
                    entries: {
                        e: [
                            "As a bonus action, you can propel your body with your mind. You gain a flying speed equal to twice your walking speed until the end of the current turn. Once you take this bonus action, you can't do so again until you finish a short or long rest, unless you expend a Psionic Energy die to take it again.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Telekinetic Thrust.',
                    source: 'TCE',
                    page: 42,
                    subclass_short_name: 'Psi Warrior',
                    subclass_source: 'TCE',
                    level: 7,
                    entries: {
                        e: [
                            'When you deal damage to a target with your Psionic Strike, you can force the target to make a Strength saving throw against a DC equal to 8 + your proficiency bonus + your Intelligence modifier. If the save fails, you can knock the target prone or move it up to 10 feet in any direction horizontally.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '38d52f93-07f5-443f-81de-88cfe30dd2d8',
                },
                {
                    name: 'Circle of the Land',
                    source: 'PHB',
                    page: 68,
                    subclass_short_name: 'Land',
                    subclass_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            "The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle's wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle's mysterious rites.",
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Bonus Cantrip|Druid||Land||2',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Natural Recovery|Druid||Land||2',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Circle Spells|Druid||Land||2',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Bonus Cantrip',
                    source: 'PHB',
                    page: 68,
                    subclass_short_name: 'Land',
                    subclass_source: 'PHB',
                    level: 2,
                    entries: {
                        e: ['You learn one additional druid cantrip of your choice.'],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Circle Spells',
                    source: 'PHB',
                    page: 68,
                    subclass_short_name: 'Land',
                    subclass_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'Your mystical connection to the land infuses you with the ability to cast certain spells. At 3rd, 5th, 7th, and 9th level you gain access to circle spells connected to the land where you became a druid. Choose that land - arctic, coast, desert, forest, grassland, mountain, swamp, or Underdark - and consult the associated list of spells.',
                            "Once you gain access to a circle spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day. If you gain access to a spell that doesn't appear on the druid spell list, the spell is nonetheless a druid spell for you.",
                            {
                                type: 'table',
                                caption: 'Arctic',
                                colLabels: ['Druid Level', 'Circle Spells'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['3rd', 'hold person, spike growth'],
                                    ['5th', 'sleet storm, slow'],
                                    ['7th', 'freedom of movement, ice storm'],
                                    ['9th', 'commune with nature, cone of cold'],
                                ],
                            },
                            {
                                type: 'table',
                                caption: 'Coast',
                                colLabels: ['Druid Level', 'Circle Spells'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['3rd', 'mirror image, misty step'],
                                    ['5th', 'water breathing, water walk'],
                                    ['7th', 'control water, freedom of movement'],
                                    ['9th', 'conjure elemental, scrying'],
                                ],
                            },
                            {
                                type: 'table',
                                caption: 'Desert',
                                colLabels: ['Druid Level', 'Circle Spells'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['3rd', 'blur, silence'],
                                    ['5th', 'create food and water, protection from energy'],
                                    ['7th', 'blight, hallucinatory terrain'],
                                    ['9th', 'insect plague, wall of stone'],
                                ],
                            },
                            {
                                type: 'table',
                                caption: 'Forest',
                                colLabels: ['Druid Level', 'Circle Spells'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['3rd', 'barkskin, spider climb'],
                                    ['5th', 'call lightning, plant growth'],
                                    ['7th', 'divination, freedom of movement'],
                                    ['9th', 'commune with nature, tree stride'],
                                ],
                            },
                            {
                                type: 'table',
                                caption: 'Grassland',
                                colLabels: ['Druid Level', 'Circle Spells'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['3rd', 'invisibility, pass without trace'],
                                    ['5th', 'daylight, haste'],
                                    ['7th', 'divination, freedom of movement'],
                                    ['9th', 'dream, insect plague'],
                                ],
                            },
                            {
                                type: 'table',
                                caption: 'Mountain',
                                colLabels: ['Druid Level', 'Circle Spells'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['3rd', 'spider climb, spike growth'],
                                    ['5th', 'lightning bolt, meld into stone'],
                                    ['7th', 'stone shape, stoneskin'],
                                    ['9th', 'passwall, wall of stone'],
                                ],
                            },
                            {
                                type: 'table',
                                caption: 'Swamp',
                                colLabels: ['Druid Level', 'Circle Spells'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['3rd', "darkness, Melf's acid arrow"],
                                    ['5th', 'water walk, stinking cloud'],
                                    ['7th', 'freedom of movement, locate creature'],
                                    ['9th', 'insect plague, scrying'],
                                ],
                            },
                            {
                                type: 'table',
                                caption: 'Underdark',
                                colLabels: ['Druid Level', 'Circle Spells'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['3rd', 'spider climb, web'],
                                    ['5th', 'gaseous form, stinking cloud'],
                                    ['7th', 'greater invisibility, stone shape'],
                                    ['9th', 'cloudkill, insect plague'],
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Natural Recovery',
                    source: 'PHB',
                    page: 68,
                    subclass_short_name: 'Land',
                    subclass_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            "Starting at 2nd level, you can regain some of your magical energy by sitting in meditation and communing with nature. During a short rest, you choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your druid level (rounded up), and none of the slots can be 6th level or higher. You can't use this feature again until you finish a long rest.",
                            'For example, when you are a 4th-level druid, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level slot or two 1st-level slots.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: "Land's Stride",
                    source: 'PHB',
                    page: 68,
                    subclass_short_name: 'Land',
                    subclass_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            'Starting at 6th level, moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.',
                            'In addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such those created by the entangle spell.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: "Nature's Ward",
                    source: 'PHB',
                    page: 68,
                    subclass_short_name: 'Land',
                    subclass_source: 'PHB',
                    level: 10,
                    entries: {
                        e: [
                            "When you reach 10th level, you can't be charmed or frightened by elementals or fey, and you are immune to poison and disease.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: "Nature's Sanctuary",
                    source: 'PHB',
                    page: 68,
                    subclass_short_name: 'Land',
                    subclass_source: 'PHB',
                    level: 14,
                    entries: {
                        e: [
                            'When you reach 14th level, creatures of the natural world sense your connection to nature and become hesitant to attack you. When a beast or plant creature attacks you, that creature must make a Wisdom saving throw against your druid spell save DC. On a failed save, the creature must choose a different target, or the attack automatically misses. On a successful save, the creature is immune to this effect for 24 hours.',
                            'The creature is aware of this effect before it makes its attack against you.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Circle of the Moon',
                    source: 'PHB',
                    page: 69,
                    subclass_short_name: 'Moon',
                    subclass_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'Druids of the Circle of the Moon are fierce guardians of the wilds. Their order gathers under the full moon to share news and trade warnings. They haunt the deepest parts of the wilderness, where they might go for weeks on end before crossing paths with another humanoid creature, let alone another druid.',
                            "Changeable as the moon, a druid of this circle might prowl as a great cat one night, soar over the treetops as an eagle the next day, and crash through the undergrowth in bear form to drive off a trespassing monster. The wild is in the druid's blood.",
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Combat Wild Shape|Druid||Moon||2',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Circle Forms|Druid||Moon||2',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Circle Forms',
                    source: 'PHB',
                    page: 69,
                    subclass_short_name: 'Moon',
                    subclass_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'The rites of your circle grant you the ability to transform into more dangerous animal forms. Starting at 2nd level, you can use your Wild Shape to transform into a beast with a challenge rating as high as 1 (you ignore the Max. CR column of the Beast Shapes table, but must abide by the other limitations there).',
                            'Starting at 6th level, you can transform into a beast with a challenge rating as high as your druid level divided by 3, rounded down.',
                            {
                                type: 'table',
                                caption: 'Circle of the Moon Beast Shapes',
                                colLabels: ['Level', 'Max. CR', 'Limitations'],
                                colStyles: ['col-2 text-center', 'col-2 text-center', 'col-8'],
                                rows: [
                                    ['2nd', '1', 'No flying or swimming speed'],
                                    ['4th', '1', 'No flying speed'],
                                    ['6th', '2', 'No flying speed'],
                                    ['8th', '2', '—'],
                                    ['9th', '3', '—'],
                                    ['12th', '4', '—'],
                                    ['15th', '5', '—'],
                                    ['18th', '6', '—'],
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Combat Wild Shape',
                    source: 'PHB',
                    page: 69,
                    subclass_short_name: 'Moon',
                    subclass_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'You gain the ability to use Wild Shape on your turn as a bonus action, rather than as an action.',
                            'Additionally, while you are transformed by Wild Shape, you can use a bonus action to expend one spell slot to regain 1d8 hit points per level of the spell slot expended.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Primal Strike',
                    source: 'PHB',
                    page: 69,
                    subclass_short_name: 'Moon',
                    subclass_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            'Starting at 6th level, your attacks in beast form count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Elemental Wild Shape',
                    source: 'PHB',
                    page: 69,
                    subclass_short_name: 'Moon',
                    subclass_source: 'PHB',
                    level: 10,
                    entries: {
                        e: [
                            'At 10th level, you can expend two uses of Wild Shape at the same time to transform into an air elemental, an earth elemental, a fire elemental, or a water elemental.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Thousand Forms',
                    source: 'PHB',
                    page: 69,
                    subclass_short_name: 'Moon',
                    subclass_source: 'PHB',
                    level: 14,
                    entries: {
                        e: [
                            'By 14th level, you have learned to use magic to alter your physical form in more subtle ways. You can cast the alter self spell at will.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Circle of Spores',
                    source: 'TCE',
                    page: 36,
                    subclass_short_name: 'Spores',
                    subclass_source: 'TCE',
                    level: 2,
                    entries: {
                        e: [
                            'Druids of the Circle of Spores find beauty in decay. They see within mold and other fungi the ability to transform lifeless material into abundant, albeit somewhat strange, life.',
                            "These druids believe that life and death are parts of a grand cycle, with one leading to the other and then back again. Death isn't the end of life, but instead a change of state that sees life shift into a new form.",
                            'Druids of this circle have a complex relationship with the undead. Unlike most other druids, they see nothing inherently wrong with undeath, which they consider to be a companion to life and death. But these druids believe that the natural cycle is healthiest when each segment of it is vibrant and changing. Undead that seek to replace all life with undeath, or that try to avoid passing to a final rest, violate the cycle and must be thwarted.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Circle Spells|Druid||Spores|TCE|2',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Halo of Spores|Druid||Spores|TCE|2',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Symbiotic Entity|Druid||Spores|TCE|2',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Circle Spells',
                    source: 'TCE',
                    page: 36,
                    subclass_short_name: 'Spores',
                    subclass_source: 'TCE',
                    level: 2,
                    entries: {
                        e: [
                            'Your symbiotic link to fungus and your ability to tap into the cycle of life and death grants you access to certain spells. At 2nd level, you learn the chill touch cantrip. At 3rd, 5th, 7th, and 9th level you gain access to the spells listed for that level in the Circle of Spores Spells table.',
                            "Once you gain access to one of these spells, you always have it prepared, and it doesn't count against the number of spells you can prepare each day. If you gain access to a spell that doesn't appear on the druid spell list, the spell is nonetheless a druid spell for you.",
                            {
                                type: 'table',
                                caption: 'Circle of Spores Spells',
                                colLabels: ['Druid Level', 'Circle Spells'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['3rd', 'blindness/deafness, gentle repose'],
                                    ['5th', 'animate dead, gaseous form'],
                                    ['7th', 'blight, confusion'],
                                    ['9th', 'cloudkill, contagion'],
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Halo of Spores',
                    source: 'TCE',
                    page: 36,
                    subclass_short_name: 'Spores',
                    subclass_source: 'TCE',
                    level: 2,
                    entries: {
                        e: [
                            'Starting at 2nd level, you are surrounded by invisible, necrotic spores that are harmless until you unleash them on a creature nearby. When a creature you can see moves into a space within 10 feet of you or starts its turn there, you can use your reaction to deal 1d4 necrotic damage to that creature unless it succeeds on a Constitution saving throw against your spell save DC. The necrotic damage increases to 1d6 at 6th level, 1d8 at 10th level, and 1d10 at 14th level.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Symbiotic Entity',
                    source: 'TCE',
                    page: 36,
                    subclass_short_name: 'Spores',
                    subclass_source: 'TCE',
                    level: 2,
                    entries: {
                        e: [
                            'At 2nd level, you gain the ability to channel magic into your spores. As an action, you can expend a use of your Wild Shape feature to awaken those spores, rather than transforming into a beast form, and you gain 4 temporary hit points for each level you have in this class. While this feature is active, you gain the following benefits:',
                            {
                                type: 'list',
                                items: [
                                    'When you deal your Halo of Spores damage, roll the damage die a second time and add it to the total.',
                                    'Your melee weapon attacks deal an extra 1d6 necrotic damage to any target they hit.',
                                ],
                            },
                            'These benefits last for 10 minutes, until you lose all these temporary hit points, or until you use your Wild Shape again.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Fungal Infestation',
                    source: 'TCE',
                    page: 36,
                    subclass_short_name: 'Spores',
                    subclass_source: 'TCE',
                    level: 6,
                    entries: {
                        e: [
                            'At 6th level, your spores gain the ability to infest a corpse and animate it. If a beast or a humanoid that is Small or Medium dies within 10 feet of you, you can use your reaction to animate it, causing it to stand up immediately with 1 hit point. The creature uses the zombie stat block in the Monster Manual. It remains animate for 1 hour, after which time it collapses and dies.',
                            "In combat, the zombie's turn comes immediately after yours. It obeys your mental commands, and the only action it can take is the Attack action, making one melee attack.",
                            'You can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses of it when you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Spreading Spores',
                    source: 'TCE',
                    page: 36,
                    subclass_short_name: 'Spores',
                    subclass_source: 'TCE',
                    level: 10,
                    entries: {
                        e: [
                            'At 10th level, you gain the ability to seed an area with deadly spores. As a bonus action while your Symbiotic Entity feature is active, you can hurl spores up to 30 feet away, where they swirl in a 10-foot cube for 1 minute. The spores disappear early if you use this feature again, if you dismiss them as a bonus action, or if your Symbiotic Entity feature is no longer active.',
                            'Whenever a creature moves into the cube or starts its turn there, that creature takes your Halo of Spores damage, unless the creature succeeds on a Constitution saving throw against your spell save DC. A creature can take this damage no more than once per turn.',
                            "While the cube of spores persists, you can't use your Halo of Spores reaction.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Fungal Body',
                    source: 'TCE',
                    page: 36,
                    subclass_short_name: 'Spores',
                    subclass_source: 'TCE',
                    level: 14,
                    entries: {
                        e: [
                            "At 14th level, the fungal spores in your body alter you: you can't be blinded, deafened, frightened, or poisoned, and any critical hit against you counts as a normal hit instead, unless you're incapacitated.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Circle of Stars',
                    source: 'TCE',
                    page: 38,
                    subclass_short_name: 'Stars',
                    subclass_source: 'TCE',
                    level: 2,
                    entries: {
                        e: [
                            'The Circle of Stars allows druids to draw on the power of starlight. These druids have tracked heavenly patterns since time immemorial, discovering secrets hidden amid the constellations. By revealing and understanding these secrets, the Circle of the Stars seeks to harness the powers of the cosmos.',
                            "Many druids of this circle keep records of the constellations and the stars' effects on the world. Some groups document these observations at megalithic sites, which serve as enigmatic libraries of lore. These repositories might take the form of stone circles, pyramids, petroglyphs, and underground temples-any construction durable enough to protect the circle's sacred knowledge even against a great cataclysm.",
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Star Map|Druid||Stars|TCE|2',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Starry Form|Druid||Stars|TCE|2',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Star Map',
                    source: 'TCE',
                    page: 38,
                    subclass_short_name: 'Stars',
                    subclass_source: 'TCE',
                    level: 2,
                    entries: {
                        e: [
                            '2nd-level Circle of the Stars feature',
                            "You've created a star chart as part of your heavenly studies. It is a Tiny object and can serve as a spellcasting focus for your druid spells. You determine its form by rolling on the Star Map table or by choosing one.",
                            {
                                type: 'table',
                                caption: 'Star Map',
                                colLabels: ['d6', 'Map Form'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['1', 'A scroll covered with depictions of constellations'],
                                    ['2', 'A stone tablet with fine holes drilled through it'],
                                    ['3', 'A speckled owlbear hide, tooled with raised marks'],
                                    ['4', 'A collection of maps bound in an ebony cover'],
                                    [
                                        '5',
                                        'A crystal that projects starry patterns when placed before a light',
                                    ],
                                    ['6', 'Glass disks that depict constellations'],
                                ],
                            },
                            'While holding this map, you have these benefits:',
                            {
                                type: 'list',
                                items: [
                                    'You know the guidance cantrip.',
                                    "You have the guiding bolt spell prepared. It counts as a druid spell for you, and it doesn't count against the number of spells you can have prepared.",
                                    'You can cast guiding bolt without expending a spell slot. You can do so a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
                                ],
                            },
                            'If you lose the map, you can perform a 1-hour ceremony to magically create a replacement. This ceremony can be performed during a short or long rest, and it destroys the previous map.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Starry Form',
                    source: 'TCE',
                    page: 38,
                    subclass_short_name: 'Stars',
                    subclass_source: 'TCE',
                    level: 2,
                    entries: {
                        e: [
                            '2nd-level Circle of the Stars feature',
                            'As a bonus action, you can expend a use of your Wild Shape feature to take on a starry form, rather than transforming into a beast.',
                            'While in your starry form, you retain your game statistics, but your body becomes luminous; your joints glimmer like stars, and glowing lines connect them as on a star chart. This form sheds bright light in a 10-foot radius and dim light for an additional 10 feet. The form lasts for 10 minutes. It ends early if you dismiss it (no action required), are incapacitated, die, or use this feature again.',
                            'Whenever you assume your starry form, choose which of the following constellations glimmers on your body; your choice gives you certain benefits while in the form:',
                            {
                                type: 'entries',
                                name: 'Archer',
                                entries: [
                                    'A constellation of an archer appears on you. When you activate this form, and as a bonus action on your subsequent turns while it lasts, you can make a ranged spell attack, hurling a luminous arrow that targets one creature within 60 feet of you. On a hit, the attack deals radiant damage equal to 1d8 + your Wisdom modifier.',
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Chalice',
                                entries: [
                                    'A constellation of a life-giving goblet appears on you. Whenever you cast a spell using a spell slot that restores hit points to a creature, you or another creature within 30 feet of you can regain hit points equal to 1d8 + your Wisdom modifier.',
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Dragon',
                                entries: [
                                    'A constellation of a wise dragon appears on you. When you make an Intelligence or a Wisdom check or a Constitution saving throw to maintain concentration on a spell, you can treat a roll of 9 or lower on the d20 as a 10.',
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Cosmic Omen',
                    source: 'TCE',
                    page: 38,
                    subclass_short_name: 'Stars',
                    subclass_source: 'TCE',
                    level: 6,
                    entries: {
                        e: [
                            '6th-level Circle of the Stars feature',
                            'Whenever you finish a long rest, you can consult your Star Map for omens. When you do so, roll a die. Until you finish your next long rest, you gain access to a special reaction based on whether you rolled an even or an odd number on the die:',
                            {
                                type: 'list',
                                style: 'list-hang-notitle',
                                items: [
                                    {
                                        type: 'item',
                                        name: 'Weal (even).',
                                        entry:
                                            'Whenever a creature you can see within 30 feet of you is about to make an attack roll, a saving throw, or an ability check, you can use your reaction to roll a d6 and add the number rolled to the total.',
                                    },
                                    {
                                        type: 'item',
                                        name: 'Woe (odd).',
                                        entry:
                                            'Whenever a creature you can see within 30 feet of you is about to make an attack roll, a saving throw, or an ability check, you can use your reaction to roll a d6 and subtract the number rolled from the total.',
                                    },
                                ],
                            },
                            'You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Twinkling Constellations',
                    source: 'TCE',
                    page: 38,
                    subclass_short_name: 'Stars',
                    subclass_source: 'TCE',
                    level: 10,
                    entries: {
                        e: [
                            '10th-level Circle of the Stars feature}',
                            'The constellations of your Starry Form improve. The 1d8 of the Archer and the Chalice becomes 2d8, and while the Dragon is active, you have a flying speed of 20 feet and can hover.',
                            'Moreover, at the start of each of your turns while in your Starry Form, you can change which constellation glimmers on your body.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Full of Stars',
                    source: 'TCE',
                    page: 38,
                    subclass_short_name: 'Stars',
                    subclass_source: 'TCE',
                    level: 14,
                    entries: {
                        e: [
                            '14th-level Circle of the Stars feature',
                            'While in your Starry Form, you become partially incorporeal, giving you resistance to bludgeoning, piercing, and slashing damage.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Circle of Wildfire',
                    source: 'TCE',
                    page: 39,
                    subclass_short_name: 'Wildfire',
                    subclass_source: 'TCE',
                    level: 2,
                    entries: {
                        e: [
                            'Druids within the Circle of Wildfire understand that destruction is sometimes the precursor of creation, such as when a forest fire promotes later growth. These druids bond with a primal spirit that harbors both destructive and creative power, allowing the druids to create controlled flames that burn away one thing but give life to another.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Circle Spells|Druid||Wildfire|TCE|2',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Summon Wildfire Spirit|Druid||Wildfire|TCE|2',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Circle Spells',
                    source: 'TCE',
                    page: 39,
                    subclass_short_name: 'Wildfire',
                    subclass_source: 'TCE',
                    level: 2,
                    entries: {
                        e: [
                            '2nd-level Circle of Wildfire feature',
                            'You have formed a bond with a wildfire spirit, a primal being of creation and destruction. Your link with this spirit grants you access to some spells when you reach certain levels in this class, as shown on the Circle of Wildfire Spells table.',
                            "Once you gain access to one of these spells, you always have it prepared, and it doesn't count against the number of spells you can prepare each day. If you gain access to a spell that doesn't appear on the druid spell list, the spell is nonetheless a druid spell for you.",
                            {
                                type: 'table',
                                caption: 'Circle of Wildfire Spells',
                                colLabels: ['Druid Level', 'Circle Spells'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['2nd', 'burning hands, cure wounds'],
                                    ['3rd', 'flaming sphere, scorching ray'],
                                    ['5th', 'plant growth, revivify'],
                                    ['7th', 'aura of life, fire shield'],
                                    ['9th', 'flame strike, mass cure wounds'],
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Summon Wildfire Spirit',
                    source: 'TCE',
                    page: 39,
                    subclass_short_name: 'Wildfire',
                    subclass_source: 'TCE',
                    level: 2,
                    entries: {
                        e: [
                            '2nd-level Circle of Wildfire feature',
                            'You can summon the primal spirit bound to your soul. As an action, you can expend one use of your Wild Shape feature to summon your wildfire spirit, rather than assuming a beast form.',
                            'The spirit appears in an unoccupied space of your choice that you can see within 30 feet of you. Each creature within 10 feet of the spirit (other than you) when it appears must succeed on a Dexterity saving throw against your spell save DC or take 2d6 fire damage.',
                            "The spirit is friendly to you and your companions and obeys your commands. See this creature's game statistics in the Wildfire Spirit stat block, which uses your proficiency bonus (PB) in several places. You determine the spirit's appearance. Some spirits take the form of a humanoid figure made of gnarled branches covered in flame, while others look like beasts wreathed in fire.",
                            'In combat, the spirit shares your initiative count, but it takes its turn immediately after yours. The only action it takes on its turn is the Dodge action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. If you are incapacitated, the spirit can take any action of its choice, not just Dodge.',
                            'The spirit manifests for 1 hour, until it is reduced to 0 hit points, until you use this feature to summon the spirit again, or until you die.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Enhanced Bond',
                    source: 'TCE',
                    page: 39,
                    subclass_short_name: 'Wildfire',
                    subclass_source: 'TCE',
                    level: 6,
                    entries: {
                        e: [
                            '6th-level Circle of Wildfire feature',
                            'The bond with your wildfire spirit enhances your destructive and restorative spells. Whenever you cast a spell that deals fire damage or restores hit points while your wildfire spirit is summoned, roll a d8, and you gain a bonus equal to the number rolled to one damage or healing roll of the spell.',
                            'In addition, when you cast a spell with a range other than self, the spell can originate from you or your wildfire spirit.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Cauterizing Flames',
                    source: 'TCE',
                    page: 39,
                    subclass_short_name: 'Wildfire',
                    subclass_source: 'TCE',
                    level: 10,
                    entries: {
                        e: [
                            '10th-level Circle of Wildfire feature',
                            "You gain the ability to turn death into magical flames that can heal or incinerate. When a Small or larger creature dies within 30 feet of you or your wildfire spirit, a harmless spectral flame springs forth in the dead creature's space and flickers there for 1 minute. When a creature you can see enters that space, you can use your reaction to extinguish the spectral flame there and either heal the creature or deal fire damage to it. The healing or damage equals 2d10 + your Wisdom modifier.",
                            'You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Blazing Revival',
                    source: 'TCE',
                    page: 39,
                    subclass_short_name: 'Wildfire',
                    subclass_source: 'TCE',
                    level: 14,
                    entries: {
                        e: [
                            '14th-level Circle of Wildfire feature',
                            'The bond with your wildfire spirit can save you from death. If the spirit is within 120 feet of you when you are reduced to 0 hit points and thereby fall unconscious, you can cause the spirit to drop to 0 hit points. You then regain half your hit points and immediately rise to your feet.',
                            "Once you use this feature, you can't use it again until you finish a long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Circle of Dreams',
                    source: 'XGE',
                    page: 22,
                    subclass_short_name: 'Dreams',
                    subclass_source: 'XGE',
                    level: 2,
                    entries: {
                        e: [
                            "Druids who are members of the Circle of Dreams hail from regions that have strong ties to the Feywild and its dreamlike realms. The druids' guardianship of the natural world makes for a natural alliance between them and good-aligned fey. These druids seek to fill the world with dreamy wonder. Their magic mends wounds and brings joy to downcast hearts, and the realms they protect are gleaming, fruitful places, where dream and reality blur together and where the weary can find rest.",
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Balm of the Summer Court|Druid||Dreams|XGE|2',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Balm of the Summer Court',
                    source: 'XGE',
                    page: 22,
                    subclass_short_name: 'Dreams',
                    subclass_source: 'XGE',
                    level: 2,
                    entries: {
                        e: [
                            'At 2nd level, you become imbued with the blessings of the Summer Court. You are a font of energy that offers respite from injuries. You have a pool of fey energy represented by a number of d6s equal to your druid level.',
                            'As a bonus action, you can choose one creature you can see within 120 feet of you and spend a number of those dice equal to half your druid level or less. Roll the spent dice and add them together. The target regains a number of hit points equal to the total. The target also gains 1 temporary hit point per die spent.',
                            'You regain all expended dice when you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Hearth of Moonlight and Shadow',
                    source: 'XGE',
                    page: 22,
                    subclass_short_name: 'Dreams',
                    subclass_source: 'XGE',
                    level: 6,
                    entries: {
                        e: [
                            'At 6th level, home can be wherever you are. During a short or long rest, you can invoke the shadowy power of the Gloaming Court to help guard your respite. At the start of the rest, you touch a point in space, and an invisible, 30-foot-radius sphere of magic appears, centered on that point. Total cover blocks the sphere.',
                            "While within the sphere, you and your allies gain a +5 bonus to Dexterity (Stealth) and Wisdom (Perception) checks, and any light from open flames in the sphere (a campfire, torches, or the like) isn't visible outside it.",
                            'The sphere vanishes at the end of the rest or when you leave the sphere.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Hidden Paths',
                    source: 'XGE',
                    page: 22,
                    subclass_short_name: 'Dreams',
                    subclass_source: 'XGE',
                    level: 10,
                    entries: {
                        e: [
                            'Starting at 10th level, you can use the hidden, magical pathways that some fey use to traverse space in the blink of an eye. As a bonus action on your turn, you can teleport up to 60 feet to an unoccupied space you can see. Alternatively, you can use your action to teleport one willing creature you touch up to 30 feet to an unoccupied space you can see.',
                            'You can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses of it when you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Walker in Dreams',
                    source: 'XGE',
                    page: 22,
                    subclass_short_name: 'Dreams',
                    subclass_source: 'XGE',
                    level: 14,
                    entries: {
                        e: [
                            'At 14th level, the magic of the Feywild grants you the ability to travel mentally or physically through dreamlands.',
                            'When you finish a short rest, you can cast one of the following spells, without expending a spell slot or requiring material components: dream (with you as the messenger), scrying, or teleportation circle.',
                            "This use of teleportation circle is special. Rather than opening a portal to a permanent teleportation circle, it opens a portal to the last location where you finished a long rest on your current plane of existence. If you haven't taken a long rest on your current plane, the spell fails but isn't wasted.",
                            "Once you use this feature, you can't use it again until you finish a long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Circle of the Shepherd',
                    source: 'XGE',
                    page: 23,
                    subclass_short_name: 'Shepherd',
                    subclass_source: 'XGE',
                    level: 2,
                    entries: {
                        e: [
                            'Druids of the Circle of the Shepherd commune with the spirits of nature, especially the spirits of beasts and the fey, and call to those spirits for aid. These druids recognize that all living things play a role in the natural world, yet they focus on protecting animals and fey creatures that have difficulty defending themselves. Shepherds, as they are known, see such creatures as their charges. They ward off monsters that threaten them, rebuke hunters who kill more prey than necessary, and prevent civilization from encroaching on rare animal habitats and on sites sacred to the fey. Many of these druids are happiest far from cities and towns, content to spend their days in the company of animals and the fey creatures of the wilds.',
                            'Members of this circle become adventurers to oppose forces that threaten their charges or to seek knowledge and power that will help them safeguard their charges better. Wherever these druids go, the spirits of the wilderness are with them.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Speech of the Woods|Druid||Shepherd|XGE|2',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Spirit Totem|Druid||Shepherd|XGE|2',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Speech of the Woods',
                    source: 'XGE',
                    page: 23,
                    subclass_short_name: 'Shepherd',
                    subclass_source: 'XGE',
                    level: 2,
                    entries: {
                        e: [
                            'At 2nd level, you gain the ability to converse with beasts and many fey.',
                            "You learn to speak, read, and write Sylvan. In addition, beasts can understand your speech, and you gain the ability to decipher their noises and motions. Most beasts lack the intelligence to convey or understand sophisticated concepts, but a friendly beast could relay what it has seen or heard in the recent past. This ability doesn't grant you friendship with beasts, though you can combine this ability with gifts to curry favor with them as you would with any nonplayer character.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Spirit Totem',
                    source: 'XGE',
                    page: 23,
                    subclass_short_name: 'Shepherd',
                    subclass_source: 'XGE',
                    level: 2,
                    entries: {
                        e: [
                            'Starting at 2nd level, you can call forth nature spirits to influence the world around you. As a bonus action, you can magically summon an incorporeal spirit to a point you can see within 60 feet of you. The spirit creates an aura in a 30-foot radius around that point. It counts as neither a creature nor an object, though it has the spectral appearance of the creature it represents.',
                            'As a bonus action, you can move the spirit up to 60 feet to a point you can see.',
                            "The spirit persists for 1 minute or until you're incapacitated. Once you use this feature, you can't use it again until you finish a short or long rest.",
                            "The effect of the spirit's aura depends on the type of spirit you summon from the options below.",
                            {
                                type: 'entries',
                                name: 'Bear Spirit',
                                entries: [
                                    'The bear spirit grants you and your allies its might and endurance. Each creature of your choice in the aura when the spirit appears gains temporary hit points equal to 5 + your druid level. In addition, you and your allies gain advantage on Strength checks and Strength saving throws while in the aura.',
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Hawk Spirit',
                                entries: [
                                    "The hawk spirit is a consummate hunter, aiding you and your allies with its keen sight. When a creature makes an attack roll against a target in the spirit's aura, you can use your reaction to grant advantage to that attack roll. In addition, you and your allies have advantage on Wisdom (Perception) checks while in the aura.",
                                ],
                            },
                            {
                                type: 'entries',
                                name: 'Unicorn Spirit',
                                entries: [
                                    "The unicorn spirit lends its protection to those nearby. You and your allies gain advantage on all ability checks made to detect creatures in the spirit's aura. In addition, if you cast a spell using a spell slot that restores hit points to any creature inside or outside the aura, each creature of your choice in the aura also regains hit points equal to your druid level.",
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Mighty Summoner',
                    source: 'XGE',
                    page: 23,
                    subclass_short_name: 'Shepherd',
                    subclass_source: 'XGE',
                    level: 6,
                    entries: {
                        e: [
                            'Starting at 6th level, beasts and fey that you conjure are more resilient than normal. Any beast or fey summoned or created by a spell that you cast gains the following benefits:',
                            {
                                type: 'list',
                                items: [
                                    'The creature appears with more hit points than normal: 2 extra hit points per Hit Die it has.',
                                    'The damage from its natural weapons is considered magical for the purpose of overcoming immunity and resistance to nonmagical attacks and damage.',
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Guardian Spirit',
                    source: 'XGE',
                    page: 23,
                    subclass_short_name: 'Shepherd',
                    subclass_source: 'XGE',
                    level: 10,
                    entries: {
                        e: [
                            'Beginning at 10th level, your Spirit Totem safeguards the beasts and fey that you call forth with your magic. When a beast or fey that you summoned or created with a spell ends its turn in your Spirit Totem aura, that creature regains a number of hit points equal to half your druid level.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Faithful Summons',
                    source: 'XGE',
                    page: 23,
                    subclass_short_name: 'Shepherd',
                    subclass_source: 'XGE',
                    level: 14,
                    entries: {
                        e: [
                            'Starting at 14th level, the nature spirits you commune with protect you when you are the most defenseless. If you are reduced to 0 hit points or are incapacitated against your will, you can immediately gain the benefits of conjure animals} as if it were cast using a 9th-level spell slot. It summons four beasts of your choice that are challenge rating 2 or lower. The conjured beasts appear within 20 feet of you. If they receive no commands from you, they protect you from harm and attack your foes. The spell lasts for 1 hour, requiring no concentration, or until you dismiss it (no action required).',
                            "Once you use this feature, you can't use it again until you finish a long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '83880f9d-5125-4b0a-a774-af5cc36413ea',
                },
                {
                    name: 'Death Domain',
                    source: 'DMG',
                    page: 96,
                    subclass_short_name: 'Death',
                    subclass_source: 'DMG',
                    level: 1,
                    entries: {
                        e: [
                            'The Death domain is concerned with the forces that cause death, as well as the negative energy that gives rise to undead creatures. Deities such as Chemosh, Myrkul, and WeeJas are patrons of necromancers, death knights, liches, mummy lords, and vampires. Gods of the Death domain also embody murder (Anubis, Bhaal, and Pyremius), pain (Iuz or Loviatar), disease or poison (Incabulos, Talona, or Morgion), and the underworld (Hades and Hel).',
                            'At each indicated cleric level, add the listed spells to your spells prepared. They do not count towards your limit.',
                            {
                                type: 'table',
                                caption: 'Death Domain Spells',
                                colLabels: ['Cleric Level', 'Spells'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['1st', 'false life, ray of sickness'],
                                    ['3rd', 'blindness/deafness, ray of enfeeblement'],
                                    ['5th', 'animate dead}, vampiric touch'],
                                    ['7th', 'blight, death ward'],
                                    ['9th', 'antilife shell, cloudkill'],
                                ],
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Bonus Proficiency|Cleric||Death|DMG|1',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Reaper|Cleric||Death|DMG|1',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Bonus Proficiency',
                    source: 'DMG',
                    page: 96,
                    subclass_short_name: 'Death',
                    subclass_source: 'DMG',
                    level: 1,
                    entries: {
                        e: [
                            'When the cleric chooses this domain at 1st level, he or she gains proficiency with martial weapons.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Reaper',
                    source: 'DMG',
                    page: 96,
                    subclass_short_name: 'Death',
                    subclass_source: 'DMG',
                    level: 1,
                    entries: {
                        e: [
                            'At 1st level, the cleric learns one necromancy cantrip of his or her choice from any spell list. When the cleric casts a necromancy cantrip that normally targets only one creature, the spell can instead target two creatures within range and within 5 feet of each other.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Channel Divinity: Touch of Death',
                    source: 'DMG',
                    page: 96,
                    subclass_short_name: 'Death',
                    subclass_source: 'DMG',
                    level: 2,
                    entries: {
                        e: [
                            "Starting at 2nd level, the cleric can use Channel Divinity to destroy another creature's life force by touch.",
                            'When the cleric hits a creature with a melee attack, the cleric can use Channel Divinity to deal extra necrotic damage to the target. The damage equals 5 + twice his or her cleric level.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Inescapable Destruction',
                    source: 'DMG',
                    page: 96,
                    subclass_short_name: 'Death',
                    subclass_source: 'DMG',
                    level: 6,
                    entries: {
                        e: [
                            "Starting at 6th level, the cleric's ability to channel negative energy becomes more potent. Necrotic damage dealt by the character's cleric spells and Channel Divinity options ignores resistance to necrotic damage.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Blessed Strikes',
                    source: 'TCE',
                    page: 30,
                    subclass_short_name: 'Death',
                    subclass_source: 'DMG',
                    level: 8,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            '8th-level cleric optional class features, which replaces the Divine Strike feature',
                            "You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal 1d8 radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Divine Strike',
                    source: 'DMG',
                    page: 96,
                    subclass_short_name: 'Death',
                    subclass_source: 'DMG',
                    level: 8,
                    entries: {
                        e: [
                            "At 8th level, the cleric gains the ability to infuse his or her weapon strikes with necrotic energy. Once on each of the cleric's turns when he or she hits a creature with a weapon attack, the cleric can cause the attack to deal an extra 1d8 necrotic damage to the target. When the cleric reaches 14th level, the extra damage increases to 2d8.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Improved Reaper',
                    source: 'DMG',
                    page: 96,
                    subclass_short_name: 'Death',
                    subclass_source: 'DMG',
                    level: 17,
                    entries: {
                        e: [
                            'Starting at 17th level, when the cleric casts a Necromancy spell of 1st through 5th-level that targets only one creature, the spell can instead target two creatures within range and within 5 feet of each other. If the spell consumes its material components, the cleric must provide them for each target.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Knowledge Domain',
                    source: 'PHB',
                    page: 59,
                    subclass_short_name: 'Knowledge',
                    subclass_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            'The gods of knowledge—including Oghma, Boccob, Gilean, Aureon, and Thoth—value learning and understanding above all. Some teach that knowledge is to be gathered and shared in libraries and universities, or promote the practical knowledge of craft and invention. Some deities hoard knowledge and keep its secrets to themselves. And some promise their followers that they will gain tremendous power if they unlock the secrets of the multiverse. Followers of these gods study esoteric lore, collect old tomes, delve into the secret places of the earth, and learn all they can. Some gods of knowledge promote the practical knowledge of craft and invention, including smith deities like Gond, Reorx, Onatar, Moradin, Hephaestus, and Goibhniu.',
                            'At each indicated cleric level, you add the listed spells to your spells prepared.',
                            {
                                type: 'table',
                                caption: 'Knowledge Domain Spells',
                                colLabels: ['Cleric Level', 'Spells'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['1st', 'command, identify'],
                                    ['3rd', 'augury, suggestion'],
                                    ['5th', 'nondetection, speak with dead'],
                                    ['7th', 'arcane eye, confusion'],
                                    ['9th', 'legend lore, scrying'],
                                ],
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Blessings of Knowledge|Cleric||Knowledge||1',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Blessings of Knowledge',
                    source: 'PHB',
                    page: 59,
                    subclass_short_name: 'Knowledge',
                    subclass_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            'At 1st level, you learn two languages of your choice. You also become proficient in your choice of two of the following skills: Arcana, History, Nature, or Religion.',
                            'Your proficiency bonus is doubled for any ability check you make that uses either of those skills.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Channel Divinity: Knowledge of the Ages',
                    source: 'PHB',
                    page: 59,
                    subclass_short_name: 'Knowledge',
                    subclass_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'Starting at 2nd level, you can use your Channel Divinity to tap into a divine well of knowledge. As an action, you choose one skill or tool. For 10 minutes, you have proficiency with the chosen skill or tool.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Channel Divinity: Read Thoughts',
                    source: 'PHB',
                    page: 59,
                    subclass_short_name: 'Knowledge',
                    subclass_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            "At 6th level, you can use your Channel Divinity to read a creature's thoughts. You can then use your access to the creature's mind to command it.",
                            "As an action, choose one creature that you can see within 60 feet of you. That creature must make a Wisdom saving throw. If the creature succeeds on the saving throw, you can't use this feature on it again until you finish a long rest.",
                            'If the creature fails its save, you can read its surface thoughts (those foremost in its mind, reflecting its current emotions and what it is actively thinking about) when it is within 60 feet of you. This effect lasts for 1 minute.',
                            'During that time, you can use your action to end this effect and cast the suggestion spell on the creature without expending a spell slot. The target automatically fails its saving throw against the spell.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Blessed Strikes',
                    source: 'TCE',
                    page: 30,
                    subclass_short_name: 'Knowledge',
                    subclass_source: 'PHB',
                    level: 8,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            '8th-level cleric optional class features, which replaces the Potent Spellcasting feature',
                            "You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal 1d8 radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Potent Spellcasting',
                    source: 'PHB',
                    page: 59,
                    subclass_short_name: 'Knowledge',
                    subclass_source: 'PHB',
                    level: 8,
                    entries: {
                        e: [
                            'Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Visions of the Past',
                    source: 'PHB',
                    page: 59,
                    subclass_short_name: 'Knowledge',
                    subclass_source: 'PHB',
                    level: 17,
                    entries: {
                        e: [
                            'Starting at 17th level, you can call up visions of the past that relate to an object you hold or your immediate surroundings. You spend at least 1 minute in meditation and prayer, then receive dreamlike, shadowy glimpses of recent events. You can meditate in this way for a number of minutes equal to your Wisdom score and must maintain concentration during that time, as if you were casting a spell.',
                            "Once you use this feature, you can't use it again until you finish a short or long rest.",
                            {
                                type: 'entries',
                                entries: [
                                    {
                                        type: 'entries',
                                        name: 'Object Reading',
                                        entries: [
                                            "Holding an object as you meditate, you can see visions of the object's previous owner. After meditating for 1 minute, you learn how the owner acquired and lost the object, as well as the most recent significant event involving the object and that owner. If the object was owned by another creature in the recent past (within a number of days equal to your Wisdom score), you can spend 1 additional minute for each owner to learn the same information about that creature.",
                                        ],
                                    },
                                ],
                            },
                            {
                                type: 'entries',
                                entries: [
                                    {
                                        type: 'entries',
                                        name: 'Area Reading',
                                        entries: [
                                            'As you meditate, you see visions of recent events in your immediate vicinity (a room, street, tunnel, clearing, or the like, up to a 50-foot cube), going back a number of days equal to your Wisdom score. For each minute you meditate, you learn about one significant event, beginning with the most recent. Significant events typically involve powerful emotions, such as battles and betrayals, marriages and murders, births and funerals. However, they might also include more mundane events that are nevertheless important in your current situation.',
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Life Domain',
                    source: 'PHB',
                    page: 60,
                    subclass_short_name: 'Life',
                    subclass_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            'The Life domain focuses on the vibrant positive energy—one of the fundamental forces of the universe—that sustains all life. The gods of life promote vitality and health through healing the sick and wounded, caring for those in need, and driving away the forces of death and undeath. Almost any non-evil deity can claim influence over this domain, particularly agricultural deities (such as Chauntea, Arawai, and Demeter), sun gods (such as Lathander, Pelor, and Re-Horakhty), gods of healing or endurance (such as Ilmater, Mishakal, Apollo, and Diancecht), and gods of home and community (such as Hestia, Hathor, and Boldrei).',
                            'At each indicated cleric level, you add the listed spells to your spells prepared.',
                            {
                                type: 'table',
                                caption: 'Life Domain Spells',
                                colLabels: ['Cleric Level', 'Spells'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['1st', 'bless, cure wounds'],
                                    ['3rd', 'lesser restoration, spiritual weapon'],
                                    ['5th', 'beacon of hope, revivify'],
                                    ['7th', 'death ward, guardian of faith'],
                                    ['9th', 'mass cure wounds, raise dead'],
                                ],
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Bonus Proficiency|Cleric||Life||1',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Disciple of Life|Cleric||Life||1',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Bonus Proficiency',
                    source: 'PHB',
                    page: 60,
                    subclass_short_name: 'Life',
                    subclass_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            'When you choose this domain at 1st level, you gain proficiency with heavy armor.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Disciple of Life',
                    source: 'PHB',
                    page: 60,
                    subclass_short_name: 'Life',
                    subclass_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            "Also starting at 1st level, your healing spells are more effective. Whenever you use a spell of 1st level or higher to restore hit points to a creature, the creature regains additional hit points equal to 2 + the spell's level.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Channel Divinity: Preserve Life',
                    source: 'PHB',
                    page: 60,
                    subclass_short_name: 'Life',
                    subclass_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'Starting at 2nd level, you can use your Channel Divinity to heal the badly injured.',
                            "As an action, you present your holy symbol and evoke healing energy that can restore a number of hit points equal to five times your cleric level. Choose any creatures within 30 feet of you, and divide those hit points among them. This feature can restore a creature to no more than half of its hit point maximum. You can't use this feature on an undead or a construct.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Blessed Healer',
                    source: 'PHB',
                    page: 60,
                    subclass_short_name: 'Life',
                    subclass_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            "Beginning at 6th level, the healing spells you cast on others heal you as well. When you cast a spell of 1st level or higher that restores hit points to a creature other than you, you regain hit points equal to 2 + the spell's level.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Blessed Strikes',
                    source: 'TCE',
                    page: 30,
                    subclass_short_name: 'Life',
                    subclass_source: 'PHB',
                    level: 8,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            '8th-level cleric optional class features, which replaces the Divine Strike feature',
                            "You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal 1d8 radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Divine Strike',
                    source: 'PHB',
                    page: 60,
                    subclass_short_name: 'Life',
                    subclass_source: 'PHB',
                    level: 8,
                    entries: {
                        e: [
                            'At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. When you reach 14th level, the extra damage increases to 2d8.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Supreme Healing',
                    source: 'PHB',
                    page: 60,
                    subclass_short_name: 'Life',
                    subclass_source: 'PHB',
                    level: 17,
                    entries: {
                        e: [
                            'Starting at 17th level, when you would normally roll one or more dice to restore hit points with a spell, you instead use the highest number possible for each die. For example, instead of restoring 2d6 hit points to a creature, you restore 12.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Light Domain',
                    source: 'PHB',
                    page: 60,
                    subclass_short_name: 'Light',
                    subclass_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            "Gods of light—including Helm, Lathander, Pholtus, Branchala, the Silver Flame, Belenus, Apollo, and Re-Horakhty—promote the ideals of rebirth and renewal, truth, vigilance, and beauty, often using the symbol of the sun. Some of these gods are portrayed as the sun itself or as a charioteer who guides the sun across the sky. Others are tireless sentinels whose eyes pierce every shadow and see through every deception. Some are deities of beauty and artistry, who teach that art is a vehicle for the soul's improvement. Clerics of a god of light are enlightened souls infused with radiance and the power of their gods' discerning vision, charged with chasing away lies and burning away darkness.",
                            'At each indicated cleric level, you add the listed spells to your spells prepared.',
                            {
                                type: 'table',
                                caption: 'Light Domain Spells',
                                colLabels: ['Cleric Level', 'Spells'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['1st', 'burning hands, faerie fire'],
                                    ['3rd', 'flaming sphere, scorching ray'],
                                    ['5th', 'daylight, fireball'],
                                    ['7th', 'guardian of faith, wall of fire'],
                                    ['9th', 'flame strike, scrying'],
                                ],
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Bonus Cantrip|Cleric||Light||1',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Warding Flare|Cleric||Light||1',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Bonus Cantrip',
                    source: 'PHB',
                    page: 60,
                    subclass_short_name: 'Light',
                    subclass_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            "When you choose this domain at 1st level, you gain the light cantrip if you don't already know it.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Warding Flare',
                    source: 'PHB',
                    page: 60,
                    subclass_short_name: 'Light',
                    subclass_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            "Also at 1st level, you can interpose divine light between yourself and an attacking enemy. When you are attacked by a creature within 30 feet of you that you can see, you can use your reaction to impose disadvantage on the attack roll, causing light to flare before the attacker before it hits or misses. An attacker that can't be blinded is immune to this feature.",
                            'You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Channel Divinity: Radiance of the Dawn',
                    source: 'PHB',
                    page: 60,
                    subclass_short_name: 'Light',
                    subclass_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'Starting at 2nd level, you can use your Channel Divinity to harness sunlight, banishing darkness and dealing radiant damage to your foes.',
                            'As an action, you present your holy symbol, and any magical darkness within 30 feet of you is dispelled. Additionally, each hostile creature within 30 feet of you must make a Constitution saving throw. A creature takes radiant damage equal to 2d10 + your cleric level on a failed saving throw, and half as much damage on a successful one. A creature that has total cover from you is not affected.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Improved Flare',
                    source: 'PHB',
                    page: 60,
                    subclass_short_name: 'Light',
                    subclass_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            'Starting at 6th level, you can also use your Warding Flare feature when a creature that you can see within 30 feet of you attacks a creature other than you.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Blessed Strikes',
                    source: 'TCE',
                    page: 30,
                    subclass_short_name: 'Light',
                    subclass_source: 'PHB',
                    level: 8,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            '8th-level cleric optional class features, which replaces the Potent Spellcasting feature',
                            "You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal 1d8 radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Potent Spellcasting',
                    source: 'PHB',
                    page: 60,
                    subclass_short_name: 'Light',
                    subclass_source: 'PHB',
                    level: 8,
                    entries: {
                        e: [
                            'Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Corona of Light',
                    source: 'PHB',
                    page: 60,
                    subclass_short_name: 'Light',
                    subclass_source: 'PHB',
                    level: 17,
                    entries: {
                        e: [
                            'Starting at 17th level, you can use your action to activate an aura of sunlight that lasts for 1 minute or until you dismiss it using another action. You emit bright light in a 60-foot radius and dim light 30 feet beyond that. Your enemies in the bright light have disadvantage on saving throws against any spell that deals fire or radiant damage.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Nature Domain',
                    source: 'PHB',
                    page: 61,
                    subclass_short_name: 'Nature',
                    subclass_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            'Gods of nature are as varied as the natural world itself, from inscrutable gods of the deep forests (such as Silvanus, Obad-Hai, Chislev, Balinor, and Pan) to friendly deities associated with particular springs and groves (such as Eldath). Druids revere nature as a whole and might serve one of these deities, practicing mysterious rites and reciting all-but-forgotten prayers in their own secret tongue. But many of these gods have clerics as well, champions who take a more active role in advancing the interests of a particular nature god. These clerics might hunt the evil monstrosities that despoil the woodlands, bless the harvest of the faithful, or wither the crops of those who anger their gods.',
                            'At each indicated cleric level, you add the listed spells to your spells prepared.',
                            {
                                type: 'table',
                                caption: 'Nature Domain Spells',
                                colLabels: ['Cleric Level', 'Spells'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['1st', 'animal friendship, speak with animals'],
                                    ['3rd', 'barkskin, spike growth'],
                                    ['5th', 'plant growth, wind wall'],
                                    ['7th', 'dominate beast, grasping vine'],
                                    ['9th', 'insect plague, tree stride'],
                                ],
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Acolyte of Nature|Cleric||Nature||1',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Bonus Proficiency|Cleric||Nature||1',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Acolyte of Nature',
                    source: 'PHB',
                    page: 61,
                    subclass_short_name: 'Nature',
                    subclass_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            'At 1st level, you learn one druid cantrip of your choice. You also gain proficiency in one of the following skills of your choice: Animal Handling, Nature, or Survival.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Bonus Proficiency',
                    source: 'PHB',
                    page: 61,
                    subclass_short_name: 'Nature',
                    subclass_source: 'PHB',
                    level: 1,
                    entries: {
                        e: ['Also at 1st level, you gain proficiency with heavy armor.'],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Channel Divinity: Charm Animals and Plants',
                    source: 'PHB',
                    page: 61,
                    subclass_short_name: 'Nature',
                    subclass_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'Starting at 2nd level, you can use your Channel Divinity to charm animals and plants.',
                            'As an action, you present your holy symbol and invoke the name of your deity. Each beast or plant creature that can see you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is charmed by you for 1 minute or until it takes damage. While it is charmed by you, it is friendly to you and other creatures you designate.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Dampen Elements',
                    source: 'PHB',
                    page: 61,
                    subclass_short_name: 'Nature',
                    subclass_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            'Starting at 6th level, when you or a creature within 30 feet of you takes acid, cold, fire, lightning, or thunder damage, you can use your reaction to grant resistance to the creature against that instance of the damage.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Blessed Strikes',
                    source: 'TCE',
                    page: 30,
                    subclass_short_name: 'Nature',
                    subclass_source: 'PHB',
                    level: 8,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            '8th-level cleric optional class features, which replaces the Divine Strike feature',
                            "You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal 1d8 radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Divine Strike',
                    source: 'PHB',
                    page: 61,
                    subclass_short_name: 'Nature',
                    subclass_source: 'PHB',
                    level: 8,
                    entries: {
                        e: [
                            'At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 cold, fire, or lightning damage (your choice) to the target. When you reach 14th level, the extra damage increases to 2d8.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Master of Nature',
                    source: 'PHB',
                    page: 61,
                    subclass_short_name: 'Nature',
                    subclass_source: 'PHB',
                    level: 17,
                    entries: {
                        e: [
                            'At 17th level, you gain the ability to command animals and plant creatures. While creatures are charmed by your Charm Animals and Plants feature, you can take a bonus action on your turn to verbally command what each of those creatures will do on its next turn.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Tempest Domain',
                    source: 'PHB',
                    page: 62,
                    subclass_short_name: 'Tempest',
                    subclass_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            'Gods whose portfolios include the Tempest domain—including Talos, Umberlee, Kord, Zeboim, the Devourer, Zeus, and Thor—govern storms, sea, and sky. They include gods of lightning and thunder, gods of earthquakes, some fire gods, and certain gods of violence, physical strength, and courage. In some pantheons, a god of this domain rules over other deities and is known for swift justice delivered by thunderbolts. In the pantheons of seafaring people, gods of this domain are ocean deities and the patrons of sailors. Tempest gods send their clerics to inspire fear in the common folk, either to keep those folk on the path of righteousness or to encourage them to offer sacrifices of propitiation to ward off divine wrath.',
                            'At each indicated cleric level, you add the listed spells to your spells prepared.',
                            {
                                type: 'table',
                                caption: 'Tempest Domain Spells',
                                colLabels: ['Cleric Level', 'Spells'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['1st', 'fog cloud, thunderwave'],
                                    ['3rd', 'gust of wind, shatter'],
                                    ['5th', 'call lightning, sleet storm'],
                                    ['7th', 'control water, ice storm'],
                                    ['9th', 'destructive wave, insect plague'],
                                ],
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Bonus Proficiencies|Cleric||Tempest||1',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Wrath of the Storm|Cleric||Tempest||1',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Bonus Proficiencies',
                    source: 'PHB',
                    page: 62,
                    subclass_short_name: 'Tempest',
                    subclass_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            'At 1st level, you gain proficiency with martial weapons and heavy armor.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Wrath of the Storm',
                    source: 'PHB',
                    page: 62,
                    subclass_short_name: 'Tempest',
                    subclass_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            'Also at 1st level, you can thunderously rebuke attackers. When a creature within 5 feet of you that you can see hits you with an attack, you can use your reaction to cause the creature to make a Dexterity saving throw. The creature takes 2d8 lightning or thunder damage (your choice) on a failed saving throw, and half as much damage on a successful one.',
                            'You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Channel Divinity: Destructive Wrath',
                    source: 'PHB',
                    page: 62,
                    subclass_short_name: 'Tempest',
                    subclass_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'Starting at 2nd level, you can use your Channel Divinity to wield the power of the storm with unchecked ferocity.',
                            'When you roll lightning or thunder damage, you can use your Channel Divinity to deal maximum damage, instead of rolling.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Thunderbolt Strike',
                    source: 'PHB',
                    page: 62,
                    subclass_short_name: 'Tempest',
                    subclass_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            'At 6th level, when you deal lightning damage to a Large or smaller creature, you can also push it up to 10 feet away from you.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Blessed Strikes',
                    source: 'TCE',
                    page: 30,
                    subclass_short_name: 'Tempest',
                    subclass_source: 'PHB',
                    level: 8,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            '8th-level cleric optional class features, which replaces the Divine Strike feature',
                            "You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal 1d8 radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Divine Strike',
                    source: 'PHB',
                    page: 62,
                    subclass_short_name: 'Tempest',
                    subclass_source: 'PHB',
                    level: 8,
                    entries: {
                        e: [
                            'At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 thunder damage to the target. When you reach 14th level, the extra damage increases to 2d8.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Stormborn',
                    source: 'PHB',
                    page: 62,
                    subclass_short_name: 'Tempest',
                    subclass_source: 'PHB',
                    level: 17,
                    entries: {
                        e: [
                            'At 17th level, you have a flying speed equal to your current walking speed whenever you are not underground or indoors.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Trickery Domain',
                    source: 'PHB',
                    page: 62,
                    subclass_short_name: 'Trickery',
                    subclass_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            "Gods of trickery—such as Tymora, Beshaba, Olidammara, the Traveler, Garl Glittergold, and Loki—are mischief-makers and instigators who stand as a constant challenge to the accepted order among both gods and mortals. They're patrons of thieves, scoundrels, gamblers, rebels, and liberators. Their clerics are a disruptive force in the world, puncturing pride, mocking tyrants, stealing from the rich, freeing captives, and flouting hollow traditions. They prefer subterfuge, pranks, deception, and theft rather than direct confrontation.",
                            'At each indicated cleric level, you add the listed spells to your spells prepared.',
                            {
                                type: 'table',
                                caption: 'Trickery Domain Spells',
                                colLabels: ['Cleric Level', 'Spells'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['1st', 'charm person, disguise self'],
                                    ['3rd', 'mirror image, pass without trace'],
                                    ['5th', 'blink, dispel magic'],
                                    ['7th', 'dimension door, polymorph'],
                                    ['9th', 'dominate person, modify memory'],
                                ],
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Blessing of the Trickster|Cleric||Trickery||1',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Blessing of the Trickster',
                    source: 'PHB',
                    page: 62,
                    subclass_short_name: 'Trickery',
                    subclass_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            'Starting when you choose this domain at 1st level, you can use your action to touch a willing creature other than yourself to give it advantage on Dexterity (Stealth) checks. This blessing lasts for 1 hour or until you use this feature again.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Channel Divinity: Invoke Duplicity',
                    source: 'PHB',
                    page: 62,
                    subclass_short_name: 'Trickery',
                    subclass_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'Starting at 2nd level, you can use your Channel Divinity to create an illusory duplicate of yourself.',
                            'As an action, you create a perfect illusion of yourself that lasts for 1 minute, or until you lose your concentration (as if you were concentrating on a spell). The illusion appears in an unoccupied space that you can see within 30 feet of you. As a bonus action on your turn, you can move the illusion up to 30 feet to a space you can see, but it must remain within 120 feet of you.',
                            "For the duration, you can cast spells as though you were in the illusion's space, but you must use your own senses. Additionally, when both you and your illusion are within 5 feet of a creature that can see the illusion, you have advantage on attack rolls against that creature, given how distracting the illusion is to the target.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Channel Divinity: Cloak of Shadows',
                    source: 'PHB',
                    page: 62,
                    subclass_short_name: 'Trickery',
                    subclass_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            'Starting at 6th level, you can use your Channel Divinity to vanish.',
                            'As an action, you become invisible until the end of your next turn. You become visible if you attack or cast a spell.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Blessed Strikes',
                    source: 'TCE',
                    page: 30,
                    subclass_short_name: 'Trickery',
                    subclass_source: 'PHB',
                    level: 8,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            '8th-level cleric optional class features, which replaces the Divine Strike feature',
                            "You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal 1d8 radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Divine Strike',
                    source: 'PHB',
                    page: 62,
                    subclass_short_name: 'Trickery',
                    subclass_source: 'PHB',
                    level: 8,
                    entries: {
                        e: [
                            'At 8th level, you gain the ability to infuse your weapon strikes with poison—a gift from your deity. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 poison damage to the target. When you reach 14th level, the extra damage increases to 2d8.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Improved Duplicity',
                    source: 'PHB',
                    page: 62,
                    subclass_short_name: 'Trickery',
                    subclass_source: 'PHB',
                    level: 17,
                    entries: {
                        e: [
                            'At 17th level, you can create up to four duplicates of yourself, instead of one, when you use Invoke Duplicity. As a bonus action on your turn, you can move any number of them up to 30 feet, to a maximum range of 120 feet.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'War Domain',
                    source: 'PHB',
                    page: 63,
                    subclass_short_name: 'War',
                    subclass_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            'War has many manifestations. It can make heroes of ordinary people. It can be desperate and horrific, with acts of cruelty and cowardice eclipsing instances of excellence and courage. In either case, the gods of war watch over warriors and reward them for their great deeds. The clerics of such gods excel in battle, inspiring others to fight the good fight or offering acts of violence as prayers. Gods of war include champions of honor and chivalry (such as Torm, Heironeous, and Kiri-Jolith) as well as gods of destruction and pillage (such as Erythnul, the Fury, Gruumsh, and Ares) and gods of conquest and domination (such as Bane, Hextor, and Maglubiyet). Other war gods (such as Tempus, Nike, and Nuada) take a more neutral stance, promoting war in all its manifestations and supporting warriors in any circumstance.',
                            'At each indicated cleric level, add the listed spells to your spells prepared.',
                            {
                                type: 'table',
                                caption: 'War Domain Spells',
                                colLabels: ['Cleric Level', 'Spells'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['1st', 'divine favor, shield of faith'],
                                    ['3rd', 'magic weapon, spiritual weapon'],
                                    ['5th', "crusader's mantle, spirit guardians"],
                                    ['7th', 'freedom of movement, stoneskin'],
                                    ['9th', 'flame strike, hold monster'],
                                ],
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Bonus Proficiencies|Cleric||War||1',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'War Priest|Cleric||War||1',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Bonus Proficiencies',
                    source: 'PHB',
                    page: 63,
                    subclass_short_name: 'War',
                    subclass_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            'At 1st level, you gain proficiency with martial weapons and heavy armor.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'War Priest',
                    source: 'PHB',
                    page: 63,
                    subclass_short_name: 'War',
                    subclass_source: 'PHB',
                    level: 1,
                    entries: {
                        e: [
                            'From 1st level, your god delivers bolts of inspiration to you while you are engaged in battle. When you use the Attack action, you can make one weapon attack as a bonus action. You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Channel Divinity: Guided Strike',
                    source: 'PHB',
                    page: 63,
                    subclass_short_name: 'War',
                    subclass_source: 'PHB',
                    level: 2,
                    entries: {
                        e: [
                            'Starting at 2nd level, you can use your Channel Divinity to strike with supernatural accuracy. When you make an attack roll, you can use your Channel Divinity to gain a +10 bonus to the roll. You make this choice after you see the roll, but before the DM says whether the attack hits or misses.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: "Channel Divinity: War God's Blessing",
                    source: 'PHB',
                    page: 63,
                    subclass_short_name: 'War',
                    subclass_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            'At 6th level, when a creature within 30 feet of you makes an attack roll, you can use your reaction to grant that creature a +10 bonus to the roll, using your Channel Divinity. You make this choice after you see the roll, but before the DM says whether the attack hits or misses.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Blessed Strikes',
                    source: 'TCE',
                    page: 30,
                    subclass_short_name: 'War',
                    subclass_source: 'PHB',
                    level: 8,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            '8th-level cleric optional class feature, which replaces the Divine Strike feature',
                            "You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal 1d8 radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Divine Strike',
                    source: 'PHB',
                    page: 63,
                    subclass_short_name: 'War',
                    subclass_source: 'PHB',
                    level: 8,
                    entries: {
                        e: [
                            'At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 damage of the same type dealt by the weapon to the target. When you reach 14th level, the extra damage increases to 2d8.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Avatar of Battle',
                    source: 'PHB',
                    page: 63,
                    subclass_short_name: 'War',
                    subclass_source: 'PHB',
                    level: 17,
                    entries: {
                        e: [
                            'At 17th level, you gain resistance to bludgeoning, piercing, and slashing damage from nonmagical weapons.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Arcana Domain',
                    source: 'SCAG',
                    page: 125,
                    subclass_short_name: 'Arcana',
                    subclass_source: 'SCAG',
                    level: 1,
                    entries: {
                        e: [
                            'Magic is an energy that suffuses the multiverse and that fuels both destruction and creation. Gods of the Arcana domain know the secrets and potential of magic intimately. For some of these gods, magical knowledge is a great responsibility that comes with a special understanding of the nature of reality. Other gods of Arcana see magic as pure power, to be used as its wielder sees fit.',
                            'The gods of this domain are often associated with knowledge, as learning and arcane power tend to go hand-in-hand. In the Realms, deities of this domain include Azuth and Mystra, as well as Corellon Larethian of the elven pantheon. In other worlds, this domain includes Hecate, Math Mathonwy, and Isis; the triple moon gods of Solinari, Lunitari, and Nuitari of Krynn; and Boccob, Vecna, and WeeJas of Greyhawk.',
                            'At each indicated cleric level, add the listed spells to your spells prepared. They do not count towards your limit.',
                            {
                                type: 'table',
                                caption: 'Arcana Domain Spells',
                                colLabels: ['Cleric Level', 'Spells'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['1st', 'detect magic, magic missile'],
                                    ['3rd', "magic weapon, Nystul's magic aura"],
                                    ['5th', 'dispel magic, magic circle'],
                                    ['7th', "arcane eye, Leomund's secret chest"],
                                    ['9th', 'planar binding, teleportation circle'],
                                ],
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Arcane Initiate|Cleric||Arcana|SCAG|1',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Arcane Initiate',
                    source: 'SCAG',
                    page: 125,
                    subclass_short_name: 'Arcana',
                    subclass_source: 'SCAG',
                    level: 1,
                    entries: {
                        e: [
                            'When you choose this domain at 1st level, you gain proficiency in the Arcana skill, and you gain two cantrips of your choice from the wizard spell list. For you, these cantrips count as cleric cantrips.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Channel Divinity: Arcane Abjuration',
                    source: 'SCAG',
                    page: 125,
                    subclass_short_name: 'Arcana',
                    subclass_source: 'SCAG',
                    level: 2,
                    entries: {
                        e: [
                            'Starting at 2nd level, you can use your Channel Divinity to abjure otherworldly creatures.',
                            'As an action, you present your holy symbol, and one celestial, elemental, fey, or fiend of your choice that is within 30 feet of you must make a Wisdom saving throw, provided that the creature can see or hear you. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.',
                            "A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly end its move in a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, then the creature can use the Dodge action.",
                            "After you reach 5th level, when a creature fails its saving throw against your Arcane Abjuration feature, the creature is banished for 1 minute (as in the banishment spell, no concentration required) if it isn't on its plane of origin, and its challenge rating is at or below a certain threshold, as shown below.",
                            {
                                type: 'table',
                                caption: 'Arcane Banishment',
                                colLabels: ['Cleric level', 'Banishes Creatures of CR...'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['5th', '1/2 or lower'],
                                    ['8th', '1 or lower'],
                                    ['11th', '2 or lower'],
                                    ['14th', '3 or lower'],
                                    ['17th', '4 or lower'],
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Spell Breaker',
                    source: 'SCAG',
                    page: 125,
                    subclass_short_name: 'Arcana',
                    subclass_source: 'SCAG',
                    level: 6,
                    entries: {
                        e: [
                            'Starting at 6th level, when you restore hit points to an ally with a spell of 1st level or higher, you can also end one spell of your choice on that creature. The level of the spell you end must be equal to or lower than the level of the spell slot you use to cast the healing spell.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Blessed Strikes',
                    source: 'TCE',
                    page: 30,
                    subclass_short_name: 'Arcana',
                    subclass_source: 'SCAG',
                    level: 8,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            '8th-level cleric optional class feature, which replaces the Potent Spellcasting feature',
                            "You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal 1d8 radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Potent Spellcasting',
                    source: 'SCAG',
                    page: 125,
                    subclass_short_name: 'Arcana',
                    subclass_source: 'SCAG',
                    level: 8,
                    entries: {
                        e: [
                            'Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Arcane Mastery',
                    source: 'SCAG',
                    page: 125,
                    subclass_short_name: 'Arcana',
                    subclass_source: 'SCAG',
                    level: 17,
                    entries: {
                        e: [
                            'At 17th level, you choose four spells from the Wizard spell list, one from each of the following levels: 6th, 7th, 8th, and 9th. You add them to your list of domain spells. Like your other domain spells, they are always prepared and count as cleric spells for you.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Order Domain',
                    source: 'TCE',
                    page: 31,
                    subclass_short_name: 'Order',
                    subclass_source: 'TCE',
                    level: 1,
                    entries: {
                        e: [
                            'The Order Domain represents discipline, as well as devotion to a society or an institution and strict obedience to the laws governing it. On Ravnica, the domain is favored by clerics of the Azorius Senate, who use it to maintain and enforce the law, and of the Orzhov Syndicate, who exploit law and order for their personal gain. On other worlds, gods who grant access to this domain include Bane, Tyr, Majere, Erathis, Pholtus, Wee Jas, Aureon, Maglubiyet, Nuada, Athena, Anubis, Forseti, and Asmodeus.',
                            "The ideal of order is obedience to the law above all else, rather than to a specific individual or the passing influence of emotion or popular rule. Clerics of order are typically concerned with how things are done, rather than whether an action's results are just. Following the law and obeying its edicts is critical, especially when it benefits these clerics and their guilds or deities.",
                            'Law establishes hierarchies. Those selected by the law to lead must be obeyed. Those who obey must do so to the best of their ability. In this manner, law creates an intricate web of obligations that allows society to forge order and security in a chaotic multiverse.',
                            'At each indicated cleric level, you add the listed spells to your spells prepared.',
                            {
                                type: 'table',
                                caption: 'Order Domain Spells',
                                colLabels: ['Cleric Level', 'Spells'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['1st', 'command, heroism'],
                                    ['3rd', 'hold person, zone of truth'],
                                    ['5th', 'mass healing word, slow'],
                                    ['7th', 'compulsion, locate creature'],
                                    ['9th', 'commune, dominate person'],
                                ],
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Bonus Proficiencies|Cleric||Order|TCE|1',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Voice of Authority|Cleric||Order|TCE|1',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Bonus Proficiencies',
                    source: 'TCE',
                    page: 31,
                    subclass_short_name: 'Order',
                    subclass_source: 'TCE',
                    level: 1,
                    entries: {
                        e: [
                            'When you choose this domain at 1st level, you gain proficiency with heavy armor. You also gain proficiency in the Intimidation or Persuasion skill (your choice).',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Voice of Authority',
                    source: 'TCE',
                    page: 31,
                    subclass_short_name: 'Order',
                    subclass_source: 'TCE',
                    level: 1,
                    entries: {
                        e: [
                            'Starting at 1st level, you can invoke the power of law to drive an ally to attack. If you cast a spell with a spell slot of 1st level or higher and target an ally with the spell, that ally can use their reaction immediately after the spell to make one weapon attack against a creature of your choice that you can see.',
                            'If the spell targets more than one ally, you choose the ally who can make the attack.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: "Channel Divinity: Order's Demand",
                    source: 'TCE',
                    page: 31,
                    subclass_short_name: 'Order',
                    subclass_source: 'TCE',
                    level: 2,
                    entries: {
                        e: [
                            'Starting at 2nd level, you can use your Channel Divinity to exert an intimidating presence over others.',
                            'As an action, you present your holy symbol, and each creature of your choice that can see or hear you within 30 feet of you must succeed on a Wisdom saving throw or be charmed} by you until the end of your next turn or until the charmed} creature takes any damage. You can also cause any of the charmed creatures to drop what they are holding when they fail the saving throw.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Embodiment of the Law',
                    source: 'TCE',
                    page: 31,
                    subclass_short_name: 'Order',
                    subclass_source: 'TCE',
                    level: 6,
                    entries: {
                        e: [
                            'At 6th level, you become remarkably adept at channeling magical energy to compel others.',
                            "If you cast a spell of the enchantment school using a spell slot of 1st level or higher, you can change the spell's casting time to 1 bonus action for this casting, provided the spell's casting time is normally 1 action.",
                            'You can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses of it when you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Blessed Strikes',
                    source: 'TCE',
                    page: 31,
                    subclass_short_name: 'Order',
                    subclass_source: 'TCE',
                    level: 8,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            '8th-level cleric optional class features, which replaces the Divine Strike feature',
                            "You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal 1d8 radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Divine Strike',
                    source: 'TCE',
                    page: 31,
                    subclass_short_name: 'Order',
                    subclass_source: 'TCE',
                    level: 8,
                    entries: {
                        e: [
                            'At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 psychic damage to the target. When you reach 14th level, the extra damage increases to 2d8.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: "Order's Wrath",
                    source: 'TCE',
                    page: 31,
                    subclass_short_name: 'Order',
                    subclass_source: 'TCE',
                    level: 17,
                    entries: {
                        e: [
                            'Starting at 17th level, enemies you designate for destruction wilt under the combined efforts of you and your allies. If you deal your Divine Strike damage to a creature on your turn, you can curse that creature until the start of your next turn. The next time one of your allies hits the cursed creature with an attack, the target also takes 2d8 psychic damage, and the curse ends. You can curse a creature in this way only once per turn.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Peace Domain',
                    source: 'TCE',
                    page: 32,
                    subclass_short_name: 'Peace',
                    subclass_source: 'TCE',
                    level: 1,
                    entries: {
                        e: [
                            'The balm of peace thrives at the heart of healthy communities, between friendly nations, and in the souls of the kindhearted. The gods of peace inspire people of all sorts to resolve conflict and to stand up against those forces that try to prevent peace from flourishing. See the Peace Deities table for a list of some of the gods associated with this domain.',
                            "Clerics of the Peace Domain preside over the signing of treaties, and they are often asked to arbitrate in disputes. These clerics' blessings draw people together and help them shoulder one another's burdens, and the clerics' magic aids those who are driven to fight for the way of peace.",
                            {
                                type: 'table',
                                caption: 'Peace Deities',
                                colLabels: ['Example Deity', 'Pantheon'],
                                colStyles: ['col-6 text-center', 'col-6 text-center'],
                                rows: [
                                    ['Angharradh', 'Elven'],
                                    ['Berronar Truesilver', 'Dwarven'],
                                    ['Boldrei', 'Eberron'],
                                    ['Cyrrollalee', 'Halfling'],
                                    ['Eldath', 'Forgotten Realms'],
                                    ['Gaerdal', 'Ironhand Gnomish'],
                                    ['Paladine', 'Dragonlance'],
                                    ['Rao', 'Greyhawk'],
                                ],
                            },
                            {
                                name: 'Domain Spells',
                                type: 'entries',
                                entries: [
                                    '1st-level Peace Domain feature',
                                    'You gain domain spells at the cleric levels listed in the Peace Domain Spells table. See the Divine Domain class feature for how domain spells work.',
                                    {
                                        type: 'table',
                                        caption: 'Peace Domain Spells',
                                        colLabels: ['Cleric Level', 'Spells'],
                                        colStyles: ['col-2 text-center', 'col-10'],
                                        rows: [
                                            ['1st', 'heroism, sanctuary'],
                                            ['3rd', 'aid, warding bond'],
                                            ['5th', 'beacon of hope, sending'],
                                            ['7th', "aura of purity, Otiluke's resilient sphere"],
                                            ['9th', "greater restoration, Rary's telepathic bond"],
                                        ],
                                    },
                                ],
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Implement of Peace|Cleric||Peace|TCE|1',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Emboldening Bond|Cleric||Peace|TCE|1',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Emboldening Bond',
                    source: 'TCE',
                    page: 32,
                    subclass_short_name: 'Peace',
                    subclass_source: 'TCE',
                    level: 1,
                    entries: {
                        e: [
                            '1st-level Peace Domain feature',
                            'You can forge an empowering bond among people who are at peace with one another. As an action, you choose a number of willing creatures within 30 feet of you (this can include yourself) equal to your proficiency bonus. You create a magical bond among them for 10 minutes or until you use this feature again. While any bonded creature is within 30 feet of another, the creature can roll a d4 and add the number rolled to an attack roll, an ability check, or a saving throw it makes. Each creature can add the d4 no more than once per turn.',
                            'You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Implement of Peace',
                    source: 'TCE',
                    page: 32,
                    subclass_short_name: 'Peace',
                    subclass_source: 'TCE',
                    level: 1,
                    entries: {
                        e: [
                            '1st-level Peace Domain feature',
                            'You gain proficiency in the Insight, Performance, or Persuasion skill (your choice).',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Channel Divinity: Balm of Peace',
                    source: 'TCE',
                    page: 32,
                    subclass_short_name: 'Peace',
                    subclass_source: 'TCE',
                    level: 2,
                    entries: {
                        e: [
                            '2nd-level Peace Domain feature',
                            'You can use your Channel Divinity to make your very presence a soothing balm. As an action, you can move up to your speed, without provoking opportunity attacks, and when you move within 5 feet of any other creature during this action, you can restore a number of hit points to that creature equal to 2d6 + your Wisdom modifier (minimum of 1 hit point). A creature can receive this healing only once whenever you take this action.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Protective Bond',
                    source: 'TCE',
                    page: 32,
                    subclass_short_name: 'Peace',
                    subclass_source: 'TCE',
                    level: 6,
                    entries: {
                        e: [
                            '6th-level Peace Domain feature',
                            'The bond you forge between people helps them protect each other. When a creature affected by your Emboldening Bond feature is about to take damage, a second bonded creature within 30 feet of the first can use its reaction to teleport to an unoccupied space within 5 feet of the first creature. The second creature then takes all the damage instead.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Blessed Strikes',
                    source: 'TCE',
                    page: 32,
                    subclass_short_name: 'Peace',
                    subclass_source: 'TCE',
                    level: 8,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            '8th-level cleric optional class feature, which replaces the Potent Spellcasting feature',
                            "You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal 1d8 radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Potent Spellcasting',
                    source: 'TCE',
                    page: 32,
                    subclass_short_name: 'Peace',
                    subclass_source: 'TCE',
                    level: 8,
                    entries: {
                        e: [
                            '8th-level Peace Domain feature',
                            'You add your Wisdom modifier to the damage you deal with any cleric cantrip.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Expansive Bond',
                    source: 'TCE',
                    page: 32,
                    subclass_short_name: 'Peace',
                    subclass_source: 'TCE',
                    level: 17,
                    entries: {
                        e: [
                            '17th-level Peace Domain feature',
                            "The benefits of your Emboldening Bond and Protective Bond features now work when the creatures are within 60 feet of each other. Moreover, when a creature uses Protective Bond to take someone else's damage, the creature has resistance to that damage.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Twilight Domain',
                    source: 'TCE',
                    page: 34,
                    subclass_short_name: 'Twilight',
                    subclass_source: 'TCE',
                    level: 1,
                    entries: {
                        e: [
                            "The twilit transition from light into darkness often brings calm and even joy, as the day's labors end and the hours of rest begin. The darkness can also bring terrors, but the gods of twilight guard against the horrors of the night.",
                            'Clerics who serve these deities-examples of which appear on the Twilight Deities table-bring comfort to those who seek rest and protect them by venturing into the encroaching darkness to ensure that the dark is a comfort, not a terror.',
                            {
                                type: 'table',
                                caption: 'Twilight Deities',
                                colLabels: ['Example Deity', 'Pantheon'],
                                colStyles: ['col-6 text-center', 'col-6 text-center'],
                                rows: [
                                    ['Boldrei', 'Eberron'],
                                    ['Celestian', 'Greyhawk'],
                                    ['Dol Arrah', 'Eberron'],
                                    ['Helm', 'Forgotten Realms'],
                                    ['Ilmater', 'Forgotten Realms'],
                                    ['Mishakal', 'Dragonlance'],
                                    ['Selûne', 'Forgotten Realms'],
                                    ['Yondalla', 'Halfling'],
                                ],
                            },
                            {
                                name: 'Domain Spells',
                                type: 'entries',
                                entries: [
                                    '1st-level Twilight Domain feature',
                                    'You gain domain spells at the cleric levels listed in the Twilight Domain Spells table. See the Divine Domain class feature for how domain spells work.',
                                    {
                                        type: 'table',
                                        caption: 'Twilight Domain Spells',
                                        colLabels: ['Cleric Level', 'Spells'],
                                        colStyles: ['col-2 text-center', 'col-10'],
                                        rows: [
                                            ['1st', 'faerie fire, sleep'],
                                            ['3rd', 'moonbeam, see invisibility'],
                                            ['5th', "aura of vitality, Leomund's tiny hut"],
                                            ['7th', 'aura of life, greater invisibility'],
                                            ['9th', 'circle of power, mislead'],
                                        ],
                                    },
                                ],
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Bonus Proficiencies|Cleric||Twilight|TCE|1',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Eyes of Night|Cleric||Twilight|TCE|1',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Vigilant Blessing|Cleric||Twilight|TCE|1',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Bonus Proficiencies',
                    source: 'TCE',
                    page: 34,
                    subclass_short_name: 'Twilight',
                    subclass_source: 'TCE',
                    level: 1,
                    entries: {
                        e: [
                            '1st-level Twilight Domain feature',
                            'You gain proficiency with martial weapons and heavy armor.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Eyes of Night',
                    source: 'TCE',
                    page: 34,
                    subclass_short_name: 'Twilight',
                    subclass_source: 'TCE',
                    level: 1,
                    entries: {
                        e: [
                            '1st-level Twilight Domain feature',
                            'You can see through the deepest gloom. You have darkvision out to a range of 300 feet. In that radius, you can see in dim light as if it were bright light and in darkness as if it were dim light.',
                            "As an action, you can magically share the darkvision of this feature with willing creatures you can see within 10 feet of you, up to a number of creatures equal to your Wisdom modifier (minimum of one creature). The shared darkvision lasts for 1 hour. Once you share it, you can't do so again until you finish a long rest, unless you expend a spell slot of any level to share it again.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Vigilant Blessing',
                    source: 'TCE',
                    page: 34,
                    subclass_short_name: 'Twilight',
                    subclass_source: 'TCE',
                    level: 1,
                    entries: {
                        e: [
                            '1st-level Twilight Domain feature',
                            'The night has taught you to be vigilant. As an action, you give one creature you touch (including possibly yourself) advantage on the next initiative roll the creature makes. This benefit ends immediately after the roll or if you use this feature again.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Channel Divinity: Twilight Sanctuary',
                    source: 'TCE',
                    page: 34,
                    subclass_short_name: 'Twilight',
                    subclass_source: 'TCE',
                    level: 2,
                    entries: {
                        e: [
                            '2nd-level Twilight Domain feature',
                            'You can use your Channel Divinity to refresh your allies with soothing twilight.',
                            'As an action, you present your holy symbol, and a sphere of twilight emanates from you. The sphere is centered on you, has a 30-foot radius, and is filled with dim light. The sphere moves with you, and it lasts for 1 minute or until you are incapacitated or die. Whenever a creature (including you) ends its turn in the sphere, you can grant that creature one of these benefits:',
                            {
                                type: 'list',
                                items: [
                                    'You grant it temporary hit points equal to 1d6 plus your cleric level.',
                                    'You end one effect on it causing it to be charmed or frightened.',
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Steps of Night',
                    source: 'TCE',
                    page: 34,
                    subclass_short_name: 'Twilight',
                    subclass_source: 'TCE',
                    level: 6,
                    entries: {
                        e: [
                            '6th-level Twilight Domain feature',
                            'You can draw on the mystical power of night to rise into the air. As a bonus action when you are in dim light or darkness, you can magically give yourself a flying speed equal to your walking speed for 1 minute. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Blessed Strikes',
                    source: 'TCE',
                    page: 34,
                    subclass_short_name: 'Twilight',
                    subclass_source: 'TCE',
                    level: 8,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            '8th-level cleric optional class features, which replaces the Divine Strike feature',
                            "You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal 1d8 radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Divine Strike',
                    source: 'TCE',
                    page: 34,
                    subclass_short_name: 'Twilight',
                    subclass_source: 'TCE',
                    level: 8,
                    entries: {
                        e: [
                            '8th-level Twilight Domain feature',
                            'You gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage. When you reach 14th level, the extra damage increases to 2d8.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Twilight Shroud',
                    source: 'TCE',
                    page: 34,
                    subclass_short_name: 'Twilight',
                    subclass_source: 'TCE',
                    level: 17,
                    entries: {
                        e: [
                            '17th-level Twilight Domain feature',
                            'The twilight that you summon offers a protective embrace: you and your allies have half cover while in the sphere created by your Twilight Sanctuary.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Forge Domain',
                    source: 'XGE',
                    page: 18,
                    subclass_short_name: 'Forge',
                    subclass_source: 'XGE',
                    level: 1,
                    entries: {
                        e: [
                            'The gods of the forge are patrons of artisans who work with metal, from a humble blacksmith who keeps a village in horseshoes and plow blades to the mighty elf artisan whose diamond-tipped arrows of mithral have felled demon lords. The gods of the forge teach that, with patience and hard work, even the most intractable metal can be transformed from a lump of ore to a beautifully wrought object. Clerics of these deities search for objects lost to the forces of darkness, liberate mines overrun by orcs, and uncover rare and wondrous materials necessary to create potent magic items. Followers of these gods take great pride in their work, and they are willing to craft and use heavy armor and powerful weapons to protect them. Deities of this domain include Gond, Reorx, Onatar, Moradin, Hephaestus, and Goibhniu.',
                            'At each indicated cleric level, add the listed spells to your spells prepared.',
                            {
                                type: 'table',
                                caption: 'Forge Domain Spells',
                                colLabels: ['Cleric Level', 'Spells'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['1st', 'identify, searing smite'],
                                    ['3rd', 'heat metal, magic weapon'],
                                    ['5th', 'elemental weapon, protection from energy'],
                                    ['7th', 'fabricate, wall of fire'],
                                    ['9th', 'animate objects, creation'],
                                ],
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Bonus Proficiency|Cleric||Forge|XGE|1',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Blessing of the Forge|Cleric||Forge|XGE|1',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Blessing of the Forge',
                    source: 'XGE',
                    page: 18,
                    subclass_short_name: 'Forge',
                    subclass_source: 'XGE',
                    level: 1,
                    entries: {
                        e: [
                            "At 1st level, you gain the ability to imbue magic into a weapon or armor. At the end of a long rest, you can touch one nonmagical object that is a suit of armor or a simple or martial weapon. Until the end of your next long rest or until you die, the object becomes a magic item, granting a +1 bonus to AC if it's armor or a +1 bonus to attack and damage rolls if it's a weapon.",
                            "Once you use this feature, you can't use it again until you finish a long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Bonus Proficiency',
                    source: 'XGE',
                    page: 18,
                    subclass_short_name: 'Forge',
                    subclass_source: 'XGE',
                    level: 1,
                    entries: {
                        e: [
                            "When you choose this domain at 1st level, you gain proficiency with heavy armor and smith's tools.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: "Channel Divinity: Artisan's Blessing",
                    source: 'XGE',
                    page: 18,
                    subclass_short_name: 'Forge',
                    subclass_source: 'XGE',
                    level: 2,
                    entries: {
                        e: [
                            'Starting at 2nd level, you can use your Channel Divinity to create simple items.',
                            'You conduct an hour-long ritual that crafts a nonmagical item that must include some metal: a simple or martial weapon, a suit of armor, ten pieces of ammunition, a set of tools, or another metal object (see chapter 5, "Equipment," in the Player\'s Handbook for examples of these items). The creation is completed at the end of the hour, coalescing in an unoccupied space of your choice on a surface within 5 feet of you.',
                            "The thing you create can be something that is worth no more than 100 gp. As part of this ritual, you must lay out metal, which can include coins, with a value equal to the creation. The metal irretrievably coalesces and transforms into the creation at the ritual's end, magically forming even nonmetal parts of the creation. The ritual can create a duplicate of a nonmagical item that contains metal, such as a key, if you possess the original during the ritual.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Soul of the Forge',
                    source: 'XGE',
                    page: 18,
                    subclass_short_name: 'Forge',
                    subclass_source: 'XGE',
                    level: 6,
                    entries: {
                        e: [
                            'Starting at 6th level, your mastery of the forge grants you special abilities:',
                            {
                                type: 'list',
                                items: [
                                    'You gain resistance to fire damage.',
                                    'While wearing heavy armor, you gain a +1 bonus to AC.',
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Blessed Strikes',
                    source: 'TCE',
                    page: 30,
                    subclass_short_name: 'Forge',
                    subclass_source: 'XGE',
                    level: 8,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            '8th-level cleric optional class features, which replaces the Divine Strike feature',
                            "You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal 1d8 radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Divine Strike',
                    source: 'XGE',
                    page: 18,
                    subclass_short_name: 'Forge',
                    subclass_source: 'XGE',
                    level: 8,
                    entries: {
                        e: [
                            'At 8th level, you gain the ability to infuse your weapon strikes with the fiery power of the forge. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 fire damage to the target. When you reach 14th level, the extra damage increases to 2d8.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Saint of Forge and Fire',
                    source: 'XGE',
                    page: 18,
                    subclass_short_name: 'Forge',
                    subclass_source: 'XGE',
                    level: 17,
                    entries: {
                        e: [
                            'At 17th level, your blessed affinity with fire and metal becomes more powerful:',
                            {
                                type: 'list',
                                items: [
                                    'You gain immunity to fire damage',
                                    'While wearing heavy armor, you have resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks.',
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Grave Domain',
                    source: 'XGE',
                    page: 19,
                    subclass_short_name: 'Grave',
                    subclass_source: 'XGE',
                    level: 1,
                    entries: {
                        e: [
                            'Gods of the grave watch over the line between life and death. To these deities, death and the afterlife are a foundational part of the multiverse. To desecrate the peace of the dead is an abomination. Deities of the grave include Kelemvor, Wee Jas, the ancestral spirits of the Undying Court, Hades, Anubis, and Osiris. Followers of these deities seek to put wandering spirits to rest, destroy the undead, and ease the suffering of the dying. Their magic also allows them to stave off death for a time, particularly for a person who still has some great work to accomplish in the world. This is a delay of death, not a denial of it, for death will eventually get its due.',
                            {
                                type: 'table',
                                caption: 'Grave Domain Spells',
                                colLabels: ['Cleric Level', 'Spells'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    ['1st', 'bane, false life'],
                                    ['3rd', 'gentle repose, ray of enfeeblement'],
                                    ['5th', 'revivify, vampiric touch'],
                                    ['7th', 'blight, death ward'],
                                    ['9th', 'antilife shell, raise dead'],
                                ],
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Circle of Mortality|Cleric||Grave|XGE|1',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Eyes of the Grave|Cleric||Grave|XGE|1',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Circle of Mortality',
                    source: 'XGE',
                    page: 19,
                    subclass_short_name: 'Grave',
                    subclass_source: 'XGE',
                    level: 1,
                    entries: {
                        e: [
                            'At 1st level, you gain the ability to manipulate the line between life and death. When you would normally roll one or more dice to restore hit points with a spell to a creature at 0 hit points, you instead use the highest number possible for each die.',
                            "In addition, you learn the spare the dying cantrip, which doesn't count against the number of cleric cantrips you know. For you, it has a range of 30 feet, and you can cast it as a bonus action.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Eyes of the Grave',
                    source: 'XGE',
                    page: 19,
                    subclass_short_name: 'Grave',
                    subclass_source: 'XGE',
                    level: 1,
                    entries: {
                        e: [
                            "At 1st level, you gain the ability to occasionally sense the presence of the undead, whose existence is an insult to the natural cycle of life. As an action, you can open your awareness to magically detect undead. Until the end of your next turn, you know the location of any undead within 60 feet of you that isn't behind total cover and that isn't protected from divination magic. This sense doesn't tell you anything about a creature's capabilities or identity.",
                            'You can use this feature a number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses when you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Channel Divinity: Path to the Grave',
                    source: 'XGE',
                    page: 19,
                    subclass_short_name: 'Grave',
                    subclass_source: 'XGE',
                    level: 2,
                    entries: {
                        e: [
                            "Starting at 2nd level, you can use your Channel Divinity to mark another creature's life force for termination.",
                            "As an action, you choose one creature you can see within 30 feet of you, cursing it until the end of your next turn. The next time you or an ally of yours hits the cursed creature with an attack, the creature has vulnerability to all of that attack's damage, and then the curse ends.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: "Sentinel at Death's Door",
                    source: 'XGE',
                    page: 19,
                    subclass_short_name: 'Grave',
                    subclass_source: 'XGE',
                    level: 6,
                    entries: {
                        e: [
                            "At 6th level, you gain the ability to impede death's progress. As a reaction when you or a creature you can see within 30 feet of you suffers a critical hit, you can turn that hit into a normal hit. Any effects triggered by a critical hit are canceled.",
                            'You can use this feature a number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses when you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Blessed Strikes',
                    source: 'TCE',
                    page: 30,
                    subclass_short_name: 'Grave',
                    subclass_source: 'XGE',
                    level: 8,
                    is_class_feature_variant: true,
                    entries: {
                        e: [
                            '8th-level cleric optional class feature, which replaces the Potent Spellcasting feature',
                            "You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal 1d8 radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Potent Spellcasting',
                    source: 'XGE',
                    page: 19,
                    subclass_short_name: 'Grave',
                    subclass_source: 'XGE',
                    level: 8,
                    entries: {
                        e: [
                            'Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'Keeper of Souls',
                    source: 'XGE',
                    page: 19,
                    subclass_short_name: 'Grave',
                    subclass_source: 'XGE',
                    level: 17,
                    entries: {
                        e: [
                            "Starting at 17th level, you can seize a trace of vitality from a parting soul and use it to heal the living. When an enemy you can see dies within 60 feet of you, you or one creature of your choice that is within 60 feet of you regains hit points equal to the enemy's number of Hit Dice. You can use this feature only if you aren't incapacitated. Once you use it, you can't do so again until the start of your next turn.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '7e5e677d-59d2-484e-8e96-0dd940a2c25e',
                },
                {
                    name: 'College of Lore',
                    source: 'PHB',
                    page: 54,
                    subclass_short_name: 'Lore',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'Bards of the College of Lore know something about most things, collecting bits of knowledge from sources as diverse as scholarly tomes and peasant tales. Whether singing folk ballads in taverns or elaborate compositions in royal courts, these bards use their gifts to hold audiences spellbound. When the applause dies down, the audience members might find themselves questioning everything they held to be true, from their faith in the priesthood of the local temple to their loyalty to the king.',
                            'The loyalty of these bards lies in the pursuit of beauty and truth, not in fealty to a monarch or following the tenets of a deity. A noble who keeps such a bard as a herald or advisor knows that the bard would rather be honest than politic.',
                            "The college's members gather in libraries and sometimes in actual colleges, complete with classrooms and dormitories, to share their lore with one another. They also meet at festivals or affairs of state, where they can expose corruption, unravel lies, and poke fun at self-important figures of authority.",
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Bonus Proficiencies|Bard||Lore||3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Cutting Words|Bard||Lore||3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Bonus Proficiencies',
                    source: 'PHB',
                    page: 54,
                    subclass_short_name: 'Lore',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'When you join the College of Lore at 3rd level, you gain proficiency with three skills of your choice.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Cutting Words',
                    source: 'PHB',
                    page: 54,
                    subclass_short_name: 'Lore',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            "Also at 3rd level, you learn how to use your wit to distract, confuse, and otherwise sap the confidence and competence of others. When a creature that you can see within 60 feet of you makes an attack roll, an ability check, or a damage roll, you can use your reaction to expend one of your uses of Bardic Inspiration, rolling a Bardic Inspiration die and subtracting the number rolled from the creature's roll. You can choose to use this feature after the creature makes its roll, but before the DM determines whether the attack roll or ability check succeeds or fails, or before the creature deals its damage. The creature is immune if it can't hear you or if it's immune to being charmed.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Additional Magical Secrets',
                    source: 'PHB',
                    page: 54,
                    subclass_short_name: 'Lore',
                    subclass_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            "At 6th level, you learn two spells of your choice from any class. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. The chosen spells count as bard spells for you but don't count against the number of bard spells you know.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Peerless Skill',
                    source: 'PHB',
                    page: 54,
                    subclass_short_name: 'Lore',
                    subclass_source: 'PHB',
                    level: 14,
                    entries: {
                        e: [
                            'Starting at 14th level, when you make an ability check, you can expend one use of Bardic Inspiration. Roll a Bardic Inspiration die and add the number rolled to your ability check. You can choose to do so after you roll the die for the ability check, but before the DM tells you whether you succeed or fail.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'College of Valor',
                    source: 'PHB',
                    page: 55,
                    subclass_short_name: 'Valor',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            "Bards of the College of Valor are daring skalds whose tales keep alive the memory of the great heroes of the past, and thereby inspire a new generation of heroes. These bards gather in mead halls or around great bonfires to sing the deeds of the mighty, both past and present. They travel the land to witness great events firsthand and to ensure that the memory of those events doesn't pass from the world. With their songs, they inspire others to reach the same heights of accomplishment as the heroes of old.",
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Bonus Proficiencies|Bard||Valor||3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Combat Inspiration|Bard||Valor||3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Bonus Proficiencies',
                    source: 'PHB',
                    page: 55,
                    subclass_short_name: 'Valor',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'When you join the College of Valor at 3rd level, you gain proficiency with medium armor, shields, and martial weapons.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Combat Inspiration',
                    source: 'PHB',
                    page: 55,
                    subclass_short_name: 'Valor',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'Also at 3rd level, you learn to inspire others in battle. A creature that has a Bardic Inspiration die from you can roll that die and add the number rolled to a weapon damage roll it just made. Alternatively, when an attack roll is made against the creature, it can use its reaction to roll the Bardic Inspiration die and add the number rolled to its AC against that attack, after seeing the roll but before knowing whether it hits or misses.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Extra Attack',
                    source: 'PHB',
                    page: 55,
                    subclass_short_name: 'Valor',
                    subclass_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            'Starting at 6th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Battle Magic',
                    source: 'PHB',
                    page: 55,
                    subclass_short_name: 'Valor',
                    subclass_source: 'PHB',
                    level: 14,
                    entries: {
                        e: [
                            'At 14th level, you have mastered the art of weaving spellcasting and weapon use into a single harmonious act. When you use your action to cast a bard spell, you can make one weapon attack as a bonus action.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'College of Creation',
                    source: 'TCE',
                    page: 27,
                    subclass_short_name: 'Creation',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            'Bards believe the cosmos is a work of art-the creation of the first dragons and gods. That creative work included harmonies that continue to resound through existence today, a power known as the Song of Creation. The bards of the College of Creation draw on that primeval song through dance, music, and poetry, and their teachers share this lesson:',
                            '"Before the sun and the moon, there was the Song, and its music awoke the first dawn. Its melodies so delighted the stones and trees that some of them gained a voice of their own. And now they sing too. Learn the Song, students, and you too can teach the mountains to sing and dance."',
                            "Dwarves and gnomes often encourage their bards to become students of the Song of Creation. And among dragonborn, the Song of Creation is revered, for legends portray Bahamut and Tiamat-the greatest of dragons-as two of the song's first singers.",
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Mote of Potential|Bard||Creation|TCE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Performance of Creation|Bard||Creation|TCE|3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Mote of Potential',
                    source: 'TCE',
                    page: 27,
                    subclass_short_name: 'Creation',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            '3rd-level College of Creation feature',
                            'Whenever you give a creature a Bardic Inspiration die, you can utter a note from the Song of Creation to create a Tiny mote of potential, which orbits within 5 feet of that creature. The mote is intangible and invulnerable, and it lasts until the Bardic Inspiration die is lost. The mote looks like a musical note, a star, a flower, or another symbol of art or life that you choose.',
                            'When the creature uses the Bardic Inspiration die, the mote provides an additional effect based on whether the die benefits an ability check, an attack roll, or a saving throw, as detailed below:',
                            {
                                type: 'list',
                                style: 'list-hang-notitle',
                                items: [
                                    {
                                        type: 'item',
                                        name: 'Ability Check.',
                                        entry:
                                            'When the creature rolls the Bardic Inspiration die to add it to an ability check, the creature can roll the Bardic Inspiration die again and choose which roll to use, as the mote pops and emits colorful, harmless sparks for a moment.',
                                    },
                                    {
                                        type: 'item',
                                        name: 'Attack Roll.',
                                        entry:
                                            'Immediately after the creature rolls the Bardic Inspiration die to add it to an attack roll against a target, the mote thunderously shatters. The target and each creature of your choice that you can see within 5 feet of it must succeed on a Constitution saving throw against your spell save DC or take thunder damage equal to the number rolled on the Bardic Inspiration die.',
                                    },
                                    {
                                        type: 'item',
                                        name: 'Saving Throw.',
                                        entry:
                                            'Immediately after the creature rolls the Bardic Inspiration die and adds it to a saving throw, the mote vanishes with the sound of soft music, causing the creature to gain temporary hit points equal to the number rolled on the Bardic Inspiration die plus your Charisma modifier (minimum of 1 temporary hit point).',
                                    },
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Performance of Creation',
                    source: 'TCE',
                    page: 27,
                    subclass_short_name: 'Creation',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            '3rd-level College of Creation feature',
                            "As an action, you can channel the magic of the Song of Creation to create one nonmagical item of your choice in an unoccupied space within 10 feet of you. The item must appear on a surface or in a liquid that can support it. The gp value of the item can't be more than 20 times your bard level, and the item must be Medium or smaller. The item glimmers softly, and a creature can faintly hear music when touching it. The created item disappears after a number of hours equal to your proficiency bonus. For examples of items you can create, see the equipment chapter of the Player's Handbook.",
                            "Once you create an item with this feature, you can't do so again until you finish a long rest, unless you expend a spell slot of 2nd level or higher to use this feature again. You can have only one item created by this feature at a time; if you use this action and already have an item from this feature, the first one immediately vanishes.",
                            'The size of the item you can create with this feature increases by one size category when you reach 6th level (Large) and 14th level (Huge).',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Animating Performance',
                    source: 'TCE',
                    page: 27,
                    subclass_short_name: 'Creation',
                    subclass_source: 'TCE',
                    level: 6,
                    entries: {
                        e: [
                            '6th-level College of Creation feature',
                            'As an action, you can target a Large or smaller nonmagical item you can see within 30 feet of you and animate it. The animate item uses the Dancing Item stat block, which uses your proficiency bonus (PB). The item is friendly to you and your companions and obeys your commands. It lives for 1 hour, until it is reduced to 0 hit points, or until you die.',
                            'In combat, the item shares your initiative count, but it takes its turn immediately after yours. It can move and use its reaction on its own, but the only action it takes on its turn is the Dodge action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. If you are incapacitated, the item can take any action of its choice, not just Dodge.',
                            'When you use your Bardic Inspiration feature, you can command the item as part of the same bonus action you use for Bardic Inspiration.',
                            "Once you animate an item with this feature, you can't do so again until you finish a long rest, unless you expend a spell slot of 3rd level or higher to use this feature again. You can have only one item animated by this feature at a time; if you use this action and already have a dancing item from this feature, the first one immediately becomes inanimate.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Creative Crescendo',
                    source: 'TCE',
                    page: 27,
                    subclass_short_name: 'Creation',
                    subclass_source: 'TCE',
                    level: 14,
                    entries: {
                        e: [
                            '14th-level College of Creation feature',
                            'When you use your Performance of Creation feature, you can create more than one item at once. The number of items equals your Charisma modifier (minimum of two items). If you create an item that would exceed that number, you choose which of the previously created items disappears. Only one of these items can be of the maximum size you can create; the rest must be Small or Tiny.',
                            'You are no longer limited by gp value when creating items with Performance of Creation.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'College of Eloquence',
                    source: 'TCE',
                    page: 29,
                    subclass_short_name: 'Eloquence',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            'Adherents of the College of Eloquence master the art of oratory. Persuasion is regarded as a high art, and a well-reasoned, well-spoken argument often proves more persuasive than facts. These bards wield a blend of logic and theatrical wordplay, winning over skeptics and detractors with logical arguments and plucking at heartstrings to appeal to the emotions of audiences.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Silver Tongue|Bard||Eloquence|TCE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Unsettling Words|Bard||Eloquence|TCE|3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Silver Tongue',
                    source: 'TCE',
                    page: 29,
                    subclass_short_name: 'Eloquence',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            '3rd-level College of Eloquence feature',
                            'You are a master at saying the right thing at the right time. When you make a Charisma (Persuasion) or Charisma (Deception) check, you can treat a d20 roll of 9 or lower as a 10.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Unsettling Words',
                    source: 'TCE',
                    page: 29,
                    subclass_short_name: 'Eloquence',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            '3rd-level College of Eloquence feature',
                            'You can spin words laced with magic that unsettle a creature and cause it to doubt itself. As a bonus action, you can expend one use of your Bardic Inspiration and choose one creature you can see within 60 feet of you. Roll the Bardic Inspiration die. The creature must subtract the number rolled from the next saving throw it makes before the start of your next turn.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Unfailing Inspiration',
                    source: 'TCE',
                    page: 29,
                    subclass_short_name: 'Eloquence',
                    subclass_source: 'TCE',
                    level: 6,
                    entries: {
                        e: [
                            '6th-level College of Eloquence feature',
                            'Your inspiring words are so persuasive that others feel driven to succeed. When a creature adds one of your Bardic Inspiration dice to its ability check, attack roll, or saving throw and the roll fails, the creature can keep the Bardic Inspiration die.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Universal Speech',
                    source: 'TCE',
                    page: 29,
                    subclass_short_name: 'Eloquence',
                    subclass_source: 'TCE',
                    level: 6,
                    entries: {
                        e: [
                            '6th-level College of Eloquence feature',
                            'You have gained the ability to make your speech intelligible to any creature. As an action, choose one or more creatures within 60 feet of you, up to a number equal to your Charisma modifier (minimum of one creature). The chosen creatures can magically understand you, regardless of the language you speak, for 1 hour.',
                            "Once you use this feature, you can't use it again until you finish a long rest, unless you expend a spell slot to use it again.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Infectious Inspiration',
                    source: 'TCE',
                    page: 29,
                    subclass_short_name: 'Eloquence',
                    subclass_source: 'TCE',
                    level: 14,
                    entries: {
                        e: [
                            '14th-level College of Eloquence feature',
                            'When you successfully inspire someone, the power of your eloquence can now spread to someone else. When a creature within 60 feet of you adds one of your Bardic Inspiration dice to its ability check, attack roll, or saving throw and the roll succeeds, you can use your reaction to encourage a different creature (other than yourself) that can hear you within 60 feet of you, giving it a Bardic Inspiration die without expending any of your Bardic Inspiration uses.',
                            'You can use this reaction a number of times equal to your Charisma modifier (minimum of once), and you regain all expended uses when you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'College of Spirits',
                    source: 'VRGR',
                    page: 28,
                    subclass_short_name: 'Spirits',
                    subclass_source: 'VRGR',
                    level: 3,
                    entries: {
                        e: [
                            "Bards of the College of Spirits seek tales with inherent power—be they legends, histories, or fictions—and bring their subjects to life. Using occult trappings, these bards conjure spiritual embodiments of powerful forces to change the world once more. Such spirits are capricious, though, and what a bard summons isn't always entirely under their control.",
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Guiding Whispers|Bard||Spirits|VRGR|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Spiritual Focus|Bard||Spirits|VRGR|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Tales from Beyond|Bard||Spirits|VRGR|3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Guiding Whispers',
                    source: 'VRGR',
                    page: 28,
                    subclass_short_name: 'Spirits',
                    subclass_source: 'VRGR',
                    level: 3,
                    entries: {
                        e: [
                            '3rd-level College of Spirits feature',
                            "You can reach out to spirits to guide you and others. You learn the guidance cantrip, which doesn't count against the number of bard cantrips you know. For you, it has a range of 60 feet when you cast it.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Spiritual Focus',
                    source: 'VRGR',
                    page: 28,
                    subclass_short_name: 'Spirits',
                    subclass_source: 'VRGR',
                    level: 3,
                    entries: {
                        e: [
                            '3rd-level College of Spirits feature',
                            'You employ tools that aid you in channeling spirits, be they historical figures or fictional archetypes. You can use the following objects as a spellcasting focus for your bard spells: a candle, crystal ball, skull, spirit board, or tarokka deck.',
                            'Starting at 6th level, when you cast a bard spell that deals damage or restores hit points through the Spiritual Focus, roll a d6, and you gain a bonus to one damage or healing roll of the spell equal to the number rolled.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Tales from Beyond',
                    source: 'VRGR',
                    page: 28,
                    subclass_short_name: 'Spirits',
                    subclass_source: 'VRGR',
                    level: 3,
                    entries: {
                        e: [
                            '3rd-level College of Spirits feature',
                            "You reach out to spirits who tell their tales through you. While you are holding your Spiritual Focus, you can use a bonus action to expend one use of your Bardic Inspiration and roll on the Spirit Tales table using your Bardic Inspiration die to determine the tale the spirits direct you to tell. You retain the tale in mind until you bestow the tale's effect or you finish a short or long rest.",
                            "You can use an action to choose one creature you can see within 30 feet of you (this can be you) to be the target of the tale's effect. Once you do so, you can't bestow the tale's effect again until you roll it again.",
                            'You can retain only one of these tales in mind at a time, and rolling on the Spirit Tales table immediately ends the effect of the previous tale.',
                            'If the tale requires a saving throw, the DC equals your spell save DC.',
                            {
                                type: 'table',
                                caption: 'Spirit Tales',
                                colLabels: ['Bardic Insp. Die', 'Tale Told Through You'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    [
                                        '1',
                                        "Tale of the Clever Animal. For the next 10 minutes, whenever the target makes an Intelligence, a Wisdom, or a Charisma check, the target can roll an extra die immediately after rolling the d20 and add the extra die's number to the check. The extra die is the same type as your Bardic Inspiration die.",
                                    ],
                                    [
                                        '2',
                                        'Tale of the Renowned Duelist. You make a melee spell attack against the target. On a hit, the target takes force damage equal to two rolls of your Bardic Inspiration die + your Charisma modifier.',
                                    ],
                                    [
                                        '3',
                                        'Tale of the Beloved Friends. The target and another creature of its choice it can see within 5 feet of it gains temporary hit points equal to a roll of your Bardic Inspiration die + your Charisma modifier.',
                                    ],
                                    [
                                        '4',
                                        'Tale of the Runaway. The target can immediately use its reaction to teleport up to 30 feet to an unoccupied space it can see. When the target teleports, it can choose a number of creatures it can see within 30 feet of it up to your Charisma modifier (minimum of 0) to immediately use the same reaction.',
                                    ],
                                    [
                                        '5',
                                        'Tale of the Avenger. For 1 minute, any creature that hits the target with a melee attack takes force damage equal to a roll of your Bardic Inspiration die.',
                                    ],
                                    [
                                        '6',
                                        "Tale of the Traveler. The target gains temporary hit points equal to a roll of your Bardic Inspiration die + your bard level. While it has these temporary hit points, the target's walking speed increases by 10 feet and it gains a +1 bonus to its AC.",
                                    ],
                                    [
                                        '7',
                                        'Tale of the Beguiler. The target must succeed on a Wisdom saving throw or take psychic damage equal to two rolls of your Bardic Inspiration die, and the target is incapacitated until the end of its next turn.',
                                    ],
                                    [
                                        '8',
                                        "Tale of the Phantom. The target becomes invisible until the end of its next turn or until it hits a creature with an attack. If the target hits a creature with an attack during this invisibility, the creature it hits takes necrotic damage equal to a roll of your Bardic Inspiration die and is frightened of the target until the end of the frightened creature's next turn.",
                                    ],
                                    [
                                        '9',
                                        "Tale of the Brute. Each creature of the target's choice it can see within 30 feet of it must make a Strength saving throw. On a failed save, a creature takes thunder damage equal to three rolls of your Bardic Inspiration die and is knocked prone. A creature that succeeds on its saving throw takes half as much damage and isn't knocked prone.",
                                    ],
                                    [
                                        '10',
                                        'Tale of the Dragon. The target spews fire from the mouth in a 30-foot cone. Each creature in that area must make a Dexterity saving throw, taking fire damage equal to four rolls of your Bardic Inspiration die on a failed save, or half as much damage on a successful one.',
                                    ],
                                    [
                                        '11',
                                        'Tale of the Angel. The target regains hit points equal to two rolls of your Bardic Inspiration die + your Charisma modifier, and you end one condition from the following list affecting the target: blinded, deafened, paralyzed, petrified, or poisoned.',
                                    ],
                                    [
                                        '12',
                                        'Tale of the Mind-Bender. You evoke an incomprehensible fable from an otherworldly being. The target must succeed on an Intelligence saving throw or take psychic damage equal to three rolls of your Bardic Inspiration die and be stunned until the end of its next turn.',
                                    ],
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Spirit Session',
                    source: 'VRGR',
                    page: 28,
                    subclass_short_name: 'Spirits',
                    subclass_source: 'VRGR',
                    level: 6,
                    entries: {
                        e: [
                            '6th-level College of Spirits feature',
                            'Spirits provide you with supernatural insights. You can conduct an hour-long ritual channeling spirits (which can be done during a short or long rest) using your Spiritual Focus. You can conduct the ritual with a number of willing creatures equal to your proficiency bonus (including yourself). At the end of the ritual, you temporarily learn one spell of your choice from any class.',
                            "The spell you choose must be of a level equal to the number of creatures that conducted the ritual or less, the spell must be of a level you can cast, and it must be in the school of divination or necromancy. The chosen spell counts as a bard spell for you but doesn't count against the number of bard spells you know.",
                            "Once you perform the ritual, you can't do so again until you start a long rest, and you know the chosen spell until you start a long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Mystical Connection',
                    source: 'VRGR',
                    page: 28,
                    subclass_short_name: 'Spirits',
                    subclass_source: 'VRGR',
                    level: 14,
                    entries: {
                        e: [
                            '14th-level College of Spirits feature',
                            'You now have the ability to nudge the spirits of Tales from Beyond toward certain tales. Whenever you roll on the Spirit Tales table, you can roll the die twice and choose which of the two effects to bestow. If you roll the same number on both dice, you can ignore the number and choose any effect on the table.',
                            {
                                type: 'inset',
                                name: 'Spirit Tales',
                                entries: [
                                    'Storytellers, like bards of the College of Spirits, often give voice to tales inspired by some greater theme or body of work. When determining what stories you tell, consider what unites them. Do they all feature characters from a specific group, like archetypes from the tarokka deck, figures from constellations, childhood imaginary friends, or characters in a particular storybook? Or are your inspirations more general, incorporating historic champions, mythological heroes, or urban legends? Use the tales you tell to define your niche as a storytelling adventurer.',
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'College of Glamour',
                    source: 'XGE',
                    page: 14,
                    subclass_short_name: 'Glamour',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'The College of Glamour is the home of bards who mastered their craft in the vibrant realm of the Feywild or under the tutelage of someone who dwelled there. Tutored by satyrs, eladrin, and other fey, these bards learn to use their magic to delight and captivate others.',
                            'The bards of this college are regarded with a mixture of awe and fear. Their performances are the stuff of legend. These bards are so eloquent that a speech or song that one of them performs can cause captors to release the bard unharmed and can lull a furious dragon into complacency. The same magic that allows them to quell beasts can also bend minds. Villainous bards of this college can leech off a community for weeks, misusing their magic to turn their hosts into thralls. Heroic bards of this college instead use this power to gladden the downtrodden and undermine oppressors.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Mantle of Inspiration|Bard||Glamour|XGE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Enthralling Performance|Bard||Glamour|XGE|3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Enthralling Performance',
                    source: 'XGE',
                    page: 14,
                    subclass_short_name: 'Glamour',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'Starting at 3rd level, you can charge your performance with seductive, fey magic.',
                            'If you perform for at least 1 minute, you can attempt to inspire wonder in your audience by singing, reciting a poem, or dancing. At the end of the performance, choose a number of humanoids within 60 feet of you who watched and listened to all of it, up to a number equal to your Charisma modifier (minimum of one). Each target must succeed on a Wisdom saving throw against your spell save DC or be charmed by you. While charmed in this way, the target idolizes you, it speaks glowingly of you to anyone who talks to it, and it hinders anyone who opposes you, although it avoids violence unless it was already inclined to fight on your behalf. This effect ends on a target after 1 hour, if it takes any damage, if you attack it, or if it witnesses you attacking or damaging any of its allies.',
                            'If a target succeeds on its saving throw, the target has no hint that you tried to charm it.',
                            "Once you use this feature, you can't use it again until you finish a short or long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Mantle of Inspiration',
                    source: 'XGE',
                    page: 14,
                    subclass_short_name: 'Glamour',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'When you join the College of Glamour at 3rd level, you gain the ability to weave a song of fey magic that imbues your allies with vigor and speed.',
                            'As a bonus action, you can expend one use of your Bardic Inspiration to grant yourself a wondrous appearance. When you do so, choose a number of creatures you can see and that can see you within 60 feet of you, up to a number equal to your Charisma modifier (minimum of one). Each of them gains 5 temporary hit points. When a creature gains these temporary hit points, it can immediately use its reaction to move up to its speed, without provoking opportunity attacks.',
                            'The number of temporary hit points increases when you reach certain levels in this class, increasing to 8 at 5th level, 11 at 10th level, and 14 at 15th level.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Mantle of Majesty',
                    source: 'XGE',
                    page: 14,
                    subclass_short_name: 'Glamour',
                    subclass_source: 'XGE',
                    level: 6,
                    entries: {
                        e: [
                            'At 6th level, you gain the ability to cloak yourself in a fey magic that makes others want to serve you. As a bonus action, you cast command, without expending a spell slot, and you take on an appearance of unearthly beauty for 1 minute or until your concentration ends (as if you were concentrating on a spell). During this time, you can cast command as a bonus action on each of your turns, without expending a spell slot.',
                            'Any creature charmed by you automatically fails its saving throw against the command you cast with this feature.',
                            "Once you use this feature, you can't use it again until you finish a long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Unbreakable Majesty',
                    source: 'XGE',
                    page: 14,
                    subclass_short_name: 'Glamour',
                    subclass_source: 'XGE',
                    level: 14,
                    entries: {
                        e: [
                            'At 14th level, your appearance permanently gains an otherworldly aspect that makes you look more lovely and fierce.',
                            "In addition, as a bonus action, you can assume a magically majestic presence for 1 minute or until you are incapacitated. For the duration, whenever any creature tries to attack you for the first time on a turn, the attacker must make a Charisma saving throw against your spell save DC. On a failed save, it can't attack you on this turn, and it must choose a new target for its attack or the attack is wasted. On a successful save, it can attack you on this turn, but it has disadvantage on any saving throw it makes against your spells on your next turn.",
                            "Once you assume this majestic presence, you can't do so again until you finish a short or long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'College of Swords',
                    source: 'XGE',
                    page: 15,
                    subclass_short_name: 'Swords',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'Bards of the College of Swords are called blades, and they entertain through daring feats of weapon prowess. Blades perform stunts such as sword swallowing, knife throwing and juggling, and mock combats. Though they use their weapons to entertain, they are also highly trained and skilled warriors in their own right.',
                            "Their talent with weapons inspires many blades to lead double lives. One blade might use a circus troupe as cover for nefarious deeds such as assassination, robbery, and blackmail. Other blades strike at the wicked, bringing justice to bear against the cruel and powerful. Most troupes are happy to accept a blade's talent for the excitement it adds to a performance, but few entertainers fully trust a blade in their ranks.",
                            "Blades who abandon their lives as entertainers have often run into trouble that makes maintaining their secret activities impossible. A blade caught stealing or engaging in vigilante justice is too great a liability for most troupes. With their weapon skills and magic, these blades either take up work as enforcers for thieves' guilds or strike out on their own as adventurers.",
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Bonus Proficiencies|Bard||Swords|XGE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Fighting Style|Bard||Swords|XGE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Blade Flourish|Bard||Swords|XGE|3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Blade Flourish',
                    source: 'XGE',
                    page: 15,
                    subclass_short_name: 'Swords',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'At 3rd level, you learn to perform impressive displays of martial prowess and speed.',
                            'Whenever you take the Attack action on your turn, your walking speed increases by 10 feet until the end of the turn, and if a weapon attack that you make as part of this action hits a creature, you can use one of the following Blade Flourish options of your choice. You can use only one Blade Flourish option per turn.',
                            {
                                type: 'options',
                                entries: [
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Defensive Flourish|Bard|XGE|Swords|XGE|3',
                                    },
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Slashing Flourish|Bard|XGE|Swords|XGE|3',
                                    },
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Mobile Flourish|Bard|XGE|Swords|XGE|3',
                                    },
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Bonus Proficiencies',
                    source: 'XGE',
                    page: 15,
                    subclass_short_name: 'Swords',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'When you join the College of Swords at 3rd level, you gain proficiency with medium armor and the scimitar.',
                            "If you're proficient with a simple or martial melee weapon, you can use it as a spellcasting focus for your bard spells.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Fighting Style',
                    source: 'XGE',
                    page: 15,
                    subclass_short_name: 'Swords',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            "At 3rd level, you adopt a style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if something in the game lets you choose again.",
                            {
                                type: 'options',
                                count: 1,
                                entries: [
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Dueling',
                                    },
                                    {
                                        type: 'refOptionalfeature',
                                        optionalfeature: 'Two-Weapon Fighting',
                                    },
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Extra Attack',
                    source: 'XGE',
                    page: 15,
                    subclass_short_name: 'Swords',
                    subclass_source: 'XGE',
                    level: 6,
                    entries: {
                        e: [
                            'Starting at 6th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: "Master's Flourish",
                    source: 'XGE',
                    page: 15,
                    subclass_short_name: 'Swords',
                    subclass_source: 'XGE',
                    level: 14,
                    entries: {
                        e: [
                            'Starting at 14th level, whenever you use a Blade Flourish option, you can roll a d6 and use it instead of expending a Bardic Inspiration die.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'College of Whispers',
                    source: 'XGE',
                    page: 16,
                    subclass_short_name: 'Whispers',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'Most folk are happy to welcome a bard into their midst. Bards of the College of Whispers use this to their advantage. They appear to be like other bards, sharing news, singing songs, and telling tales to the audiences they gather. In truth, the College of Whispers teaches its students that they are wolves among sheep. These bards use their knowledge and magic to uncover secrets and turn them against others through extortion and threats.',
                            "Many other bards hate the College of Whispers, viewing it as a parasite that uses a bard's reputation to acquire wealth and power. For this reason, members of this college rarely reveal their true nature. They typically claim to follow some other college, or they keep their actual calling secret in order to infiltrate and exploit royal courts and other settings of power.",
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Psychic Blades|Bard||Whispers|XGE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Words of Terror|Bard||Whispers|XGE|3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Psychic Blades',
                    source: 'XGE',
                    page: 16,
                    subclass_short_name: 'Whispers',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            "When you join the College of Whispers at 3rd level, you gain the ability to make your weapon attacks magically toxic to a creature's mind.",
                            'When you hit a creature with a weapon attack, you can expend one use of your Bardic Inspiration to deal an extra 2d6 psychic damage to that target. You can do so only once per round on your turn.',
                            'The psychic damage increases when you reach certain levels in this class, increasing to 3d6 at 5th level, 5d6 at 10th level, and 8d6 at 15th level.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Words of Terror',
                    source: 'XGE',
                    page: 16,
                    subclass_short_name: 'Whispers',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'At 3rd level, you learn to infuse innocent-seeming words with an insidious magic that can inspire terror.',
                            'If you speak to a humanoid alone for at least 1 minute, you can attempt to seed paranoia in its mind. At the end of the conversation, the target must succeed on a Wisdom saving throw against your spell save DC or be frightened of you or another creature of your choice. The target is frightened in this way for 1 hour, until it is attacked or damaged, or until it witnesses its allies being attacked or damaged.',
                            'If the target succeeds on its saving throw, the target has no hint that you tried to frighten it.',
                            "Once you use this feature, you can't use it again until you finish a short or long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Mantle of Whispers',
                    source: 'XGE',
                    page: 16,
                    subclass_short_name: 'Whispers',
                    subclass_source: 'XGE',
                    level: 6,
                    entries: {
                        e: [
                            "At 6th level, you gain the ability to adopt a humanoid's persona. When a humanoid dies within 30 feet of you, you can magically capture its shadow using your reaction. You retain this shadow until you use it or you finish a long rest.",
                            'You can use the shadow as an action. When you do so, it vanishes, magically transforming into a disguise that appears on you. You now look like the dead person, but healthy and alive. This disguise lasts for 1 hour or until you end it as a bonus action.',
                            "While you're in the disguise, you gain access to all information that the humanoid would freely share with a casual acquaintance. Such information includes general details on its background and personal life, but doesn't include secrets. The information is enough that you can pass yourself off as the person by drawing on its memories.",
                            'Another creature can see through this disguise by succeeding on a Wisdom (Insight) check contested by your Charisma (Deception) check. You gain a +5 bonus to your check.',
                            "Once you capture a shadow with this feature, you can't capture another one with it until you finish a short or long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Shadow Lore',
                    source: 'XGE',
                    page: 16,
                    subclass_short_name: 'Whispers',
                    subclass_source: 'XGE',
                    level: 14,
                    entries: {
                        e: [
                            "At 14th level, you gain the ability to weave dark magic into your words and tap into a creature's deepest fears.",
                            "As an action, you magically whisper a phrase that only one creature of your choice within 30 feet of you can hear. The target must make a Wisdom saving throw against your spell save DC. It automatically succeeds if it doesn't share a language with you or if it can't hear you. On a successful saving throw, your whisper sounds like unintelligible mumbling and has no effect.",
                            'On a failed saving throw, the target is charmed by you for the next 8 hours or until you or your allies attack it, damage it, or force it to make a saving throw. It interprets the whispers as a description of its most mortifying secret. You gain no knowledge of this secret, but the target is convinced you know it.',
                            "The charmed creature obeys your commands for fear that you will reveal its secret. It won't risk its life for you or fight for you, unless it was already inclined to do so. It grants you favors and gifts it would offer to a close friend.",
                            'When the effect ends, the creature has no understanding of why it held you in such fear.',
                            "Once you use this feature, you can't use it again until you finish a long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Defensive Flourish',
                    source: 'XGE',
                    page: 15,
                    subclass_short_name: 'Swords',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'You can expend one use of your Bardic Inspiration to cause the weapon to deal extra damage to the target you hit. The damage equals the number you roll on the Bardic Inspiration die. You also add the number rolled to your AC until the start of your next turn.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Mobile Flourish',
                    source: 'XGE',
                    page: 15,
                    subclass_short_name: 'Swords',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'You can expend one use of your Bardic Inspiration to cause the weapon to deal extra damage to the target you hit. The damage equals the number you roll on the Bardic Inspiration die. You can also push the target up to 5 feet away from you, plus a number of feet equal to the number you roll on that die. You can then immediately use your reaction to move up to your walking speed to an unoccupied space within 5 feet of the target.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Slashing Flourish',
                    source: 'XGE',
                    page: 15,
                    subclass_short_name: 'Swords',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'You can expend one use of your Bardic Inspiration to cause the weapon to deal extra damage to the target you hit and to any other creature of your choice that you can see within 5 feet of you. The damage equals the number you roll on the Bardic Inspiration die.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '29861b2c-0473-4171-84b0-cdc430a134ef',
                },
                {
                    name: 'Path of the Berserker',
                    source: 'PHB',
                    page: 49,
                    subclass_short_name: 'Berserker',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            "For some barbarians, rage is a means to an end—that end being violence. The Path of the Berserker is a path of untrammeled fury, slick with blood. As you enter the berserker's rage, you thrill in the chaos of battle, heedless of your own health or well-being.",
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Frenzy|Barbarian||Berserker||3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Frenzy',
                    source: 'PHB',
                    page: 49,
                    subclass_short_name: 'Berserker',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'Starting when you choose this path at 3rd level, you can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Mindless Rage',
                    source: 'PHB',
                    page: 49,
                    subclass_short_name: 'Berserker',
                    subclass_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            "Beginning at 6th level, you can't be charmed or frightened while raging. If you are charmed or frightened when you enter your rage, the effect is suspended for the duration of the rage.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Intimidating Presence',
                    source: 'PHB',
                    page: 49,
                    subclass_short_name: 'Berserker',
                    subclass_source: 'PHB',
                    level: 10,
                    entries: {
                        e: [
                            'Beginning at 10th level, you can use your action to frighten someone with your menacing presence. When you do so, choose one creature that you can see within 30 feet of you. If the creature can see or hear you, it must succeed on a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Charisma modifier) or be frightened of you until the end of your next turn. On subsequent turns, you can use your action to extend the duration of this effect on the frightened creature until the end of your next turn. This effect ends if the creature ends its turn out of line of sight or more than 60 feet away from you.',
                            "If the creature succeeds on its saving throw, you can't use this feature on that creature again for 24 hours.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Retaliation',
                    source: 'PHB',
                    page: 49,
                    subclass_short_name: 'Berserker',
                    subclass_source: 'PHB',
                    level: 14,
                    entries: {
                        e: [
                            'Starting at 14th level, when you take damage from a creature that is within 5 feet of you, you can use your reaction to make a melee weapon attack against that creature.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Bear',
                    source: 'PHB',
                    page: 50,
                    subclass_short_name: 'Totem Warrior',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'While raging, you have resistance to all damage except psychic damage. The spirit of the bear makes you tough enough to stand up to any punishment.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Eagle',
                    source: 'PHB',
                    page: 50,
                    subclass_short_name: 'Totem Warrior',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            "While you're raging and aren't wearing heavy armor, other creatures have disadvantage on opportunity attack rolls against you, and you can use the Dash action as a bonus action on your turn. The spirit of the eagle makes you into a predator who can weave through the fray with ease.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Path of the Totem Warrior',
                    source: 'PHB',
                    page: 50,
                    subclass_short_name: 'Totem Warrior',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'The Path of the Totem Warrior is a spiritual journey, as the barbarian accepts a spirit animal as guide, protector, and inspiration. In battle, your totem spirit fills you with supernatural might, adding magical fuel to your barbarian rage.',
                            'Most barbarian tribes consider a totem animal to be kin to a particular clan. In such cases, it is unusual for an individual to have more than one totem animal spirit, though exceptions exist.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Spirit Seeker|Barbarian||Totem Warrior||3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Totem Spirit|Barbarian||Totem Warrior||3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Wolf',
                    source: 'PHB',
                    page: 50,
                    subclass_short_name: 'Totem Warrior',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            "While you're raging, your friends have advantage on melee attack rolls against any creature within 5 feet of you that is hostile to you. The spirit of the wolf makes you a leader of hunters.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Spirit Seeker',
                    source: 'PHB',
                    page: 50,
                    subclass_short_name: 'Totem Warrior',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'Yours is a path that seeks attunement with the natural world, giving you a kinship with beasts. At 3rd level when you adopt this path, you gain the ability to cast the beast sense and speak with animals spells, but only as rituals, as described in chapter 10.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Totem Spirit',
                    source: 'PHB',
                    page: 50,
                    subclass_short_name: 'Totem Warrior',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'At 3rd level, when you adopt this path, you choose a totem spirit and gain its feature. You must make or acquire a physical totem object—an amulet or similar adornment—that incorporates fur or feathers, claws, teeth, or bones of the totem animal. At your option, you also gain minor physical attributes that are reminiscent of your totem spirit. For example, if you have a bear totem spirit, you might be unusually hairy and thick-skinned, or if your totem is the eagle, your eyes turn bright yellow.',
                            'Your totem animal might be an animal related to those listed here but more appropriate to your homeland. For example, you could choose a hawk or vulture in place of an eagle.',
                            {
                                type: 'options',
                                count: 1,
                                entries: [
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Bear|Barbarian||Totem Warrior||3',
                                    },
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Eagle|Barbarian||Totem Warrior||3',
                                    },
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Elk|Barbarian|SCAG|Totem Warrior||3|SCAG',
                                    },
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Tiger|Barbarian|SCAG|Totem Warrior||3|SCAG',
                                    },
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Wolf|Barbarian||Totem Warrior||3',
                                    },
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Bear',
                    source: 'PHB',
                    page: 50,
                    subclass_short_name: 'Totem Warrior',
                    subclass_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            'You gain the might of a bear. Your carrying capacity (including maximum load and maximum lift) is doubled, and you have advantage on Strength checks made to push, pull, lift, or break objects.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Eagle',
                    source: 'PHB',
                    page: 50,
                    subclass_short_name: 'Totem Warrior',
                    subclass_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            "You gain the eyesight of an eagle. You can see up to 1 mile away with no difficulty, able to discern even fine details as though looking at something no more than 100 feet away from you. Additionally, dim light doesn't impose disadvantage on your Wisdom (Perception) checks.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Wolf',
                    source: 'PHB',
                    page: 50,
                    subclass_short_name: 'Totem Warrior',
                    subclass_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            'You gain the hunting sensibilities of a wolf. You can track other creatures while traveling at a fast pace, and you can move stealthily while traveling at a normal pace.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Aspect of the Beast',
                    source: 'PHB',
                    page: 50,
                    subclass_short_name: 'Totem Warrior',
                    subclass_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            'At 6th level, you gain a magical benefit based on the totem animal of your choice. You can choose the same animal you selected at 3rd level or a different one.',
                            {
                                type: 'options',
                                count: 1,
                                entries: [
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Bear|Barbarian||Totem Warrior||6',
                                    },
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Eagle|Barbarian||Totem Warrior||6',
                                    },
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Elk|Barbarian|SCAG|Totem Warrior||6|SCAG',
                                    },
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Tiger|Barbarian|SCAG|Totem Warrior||6|SCAG',
                                    },
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Wolf|Barbarian||Totem Warrior||6',
                                    },
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Spirit Walker',
                    source: 'PHB',
                    page: 50,
                    subclass_short_name: 'Totem Warrior',
                    subclass_source: 'PHB',
                    level: 10,
                    entries: {
                        e: [
                            'At 10th level, you can cast the commune with nature spell, but only as a ritual. When you do so, a spiritual version of one of the animals you chose for Totem Spirit or Aspect of the Beast appears to you to convey the information you seek.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Bear',
                    source: 'PHB',
                    page: 50,
                    subclass_short_name: 'Totem Warrior',
                    subclass_source: 'PHB',
                    level: 14,
                    entries: {
                        e: [
                            "While you're raging, any creature within 5 feet of you that's hostile to you has disadvantage on attack rolls against targets other than you or another character with this feature. An enemy is immune to this effect if it can't see or hear you or if it can't be frightened.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Eagle',
                    source: 'PHB',
                    page: 50,
                    subclass_short_name: 'Totem Warrior',
                    subclass_source: 'PHB',
                    level: 14,
                    entries: {
                        e: [
                            'While raging, you have a flying speed equal to your current walking speed. This benefit works only in short bursts; you fall if you end your turn in the air and nothing else is holding you aloft.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Wolf',
                    source: 'PHB',
                    page: 50,
                    subclass_short_name: 'Totem Warrior',
                    subclass_source: 'PHB',
                    level: 14,
                    entries: {
                        e: [
                            "While you're raging, you can use a bonus action on your turn to knock a Large or smaller creature prone when you hit it with melee weapon attack.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Totemic Attunement',
                    source: 'PHB',
                    page: 50,
                    subclass_short_name: 'Totem Warrior',
                    subclass_source: 'PHB',
                    level: 14,
                    entries: {
                        e: [
                            'At 14th level, you gain a magical benefit based on a totem animal of your choice. You can choose the same animal you selected previously or a different one.',
                            {
                                type: 'options',
                                count: 1,
                                entries: [
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Bear|Barbarian||Totem Warrior||14',
                                    },
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Eagle|Barbarian||Totem Warrior||14',
                                    },
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Elk|Barbarian|SCAG|Totem Warrior||14|SCAG',
                                    },
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Tiger|Barbarian|SCAG|Totem Warrior||14|SCAG',
                                    },
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Wolf|Barbarian||Totem Warrior||14',
                                    },
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Path of the Battlerager',
                    source: 'SCAG',
                    page: 121,
                    subclass_short_name: 'Battlerager',
                    subclass_source: 'SCAG',
                    level: 3,
                    entries: {
                        e: [
                            'Known as Kuldjargh (literally "axe idiot") in Dwarvish, battleragers are dwarf followers of the gods of war and take the Path of the Battlerager. They specialize in wearing bulky, spiked armor and throwing themselves into combat, striking with their body itself and giving themselves over to the fury of battle.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature:
                                    'Restriction - Dwarves Only|Barbarian||Battlerager|SCAG|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Battlerager Armor|Barbarian||Battlerager|SCAG|3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Battlerager Armor',
                    source: 'SCAG',
                    page: 121,
                    subclass_short_name: 'Battlerager',
                    subclass_source: 'SCAG',
                    level: 3,
                    entries: {
                        e: [
                            'When you choose this path at 3rd level, you gain the ability to use spiked armor as a weapon.',
                            'While you are wearing spiked armor and are raging, you can use a bonus action to make one melee weapon attack with your armor spikes at a target within 5 feet of you. If the attack hits, the spikes deal 1d4 piercing damage. You use your Strength modifier for the attack and damage rolls.',
                            'Additionally, when you use the Attack action to grapple a creature, the target takes 3 piercing damage if your grapple check succeeds.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Restriction - Dwarves Only',
                    source: 'SCAG',
                    page: 121,
                    subclass_short_name: 'Battlerager',
                    subclass_source: 'SCAG',
                    level: 3,
                    entries: {
                        e: [
                            'Only dwarves can follow the Path of the Battlerager. The battlerager fills a particular niche in dwarven society and culture.',
                            "Your DM can lift this restriction to better suit the campaign. The restriction exists for the Forgotten Realms. It might not apply to your DM's setting or your DM's version of the Realms.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Reckless Abandon',
                    source: 'SCAG',
                    page: 121,
                    subclass_short_name: 'Battlerager',
                    subclass_source: 'SCAG',
                    level: 6,
                    entries: {
                        e: [
                            'Beginning at 6th level, when you use Reckless Attack while raging, you also gain temporary hit points equal to your Constitution modifier (minimum of 1). They vanish if any of them are left when your rage ends.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Battlerager Charge',
                    source: 'SCAG',
                    page: 121,
                    subclass_short_name: 'Battlerager',
                    subclass_source: 'SCAG',
                    level: 10,
                    entries: {
                        e: [
                            'Beginning at 10th level, you can take the Dash action as a bonus action while you are raging.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Spiked Retribution',
                    source: 'SCAG',
                    page: 121,
                    subclass_short_name: 'Battlerager',
                    subclass_source: 'SCAG',
                    level: 14,
                    entries: {
                        e: [
                            "Starting at 14th level, when a creature within 5 feet of you hits you with a melee attack, the attacker takes 3 piercing damage if you are raging, aren't incapacitated, and are wearing spiked armor.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Path of the Beast',
                    source: 'TCE',
                    page: 24,
                    subclass_short_name: 'Beast',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            'Barbarians who walk the Path of the Beast draw their rage from a bestial spark burning within their souls. That beast bursts forth in the throes of rage, physically transforming the barbarian.',
                            'Such a barbarian might be inhabited by a primal spirit or be descended from shape-shifters. You can choose the origin of your feral might or determine it by rolling on the Origin of the Beast table.',
                            {
                                type: 'table',
                                caption: 'Origin of the Beast',
                                colLabels: ['d4', 'Origin'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    [
                                        '1',
                                        "One of your parents is a lycanthrope, and you've inherited some of their curse.",
                                    ],
                                    [
                                        '2',
                                        'You are descended from an archdruid and inherited the ability to partially change shape.',
                                    ],
                                    [
                                        '3',
                                        'A fey spirit gifted you with the ability to adopt different bestial aspects.',
                                    ],
                                    [
                                        '4',
                                        'An ancient animal spirit dwells within you, allowing you to walk this path.',
                                    ],
                                ],
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Form of the Beast|Barbarian||Beast|TCE|3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Form of the Beast',
                    source: 'TCE',
                    page: 24,
                    subclass_short_name: 'Beast',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            '3rd-level Path of the Beast feature',
                            'When you enter your rage, you can transform, revealing the bestial power within you. Until the rage ends, you manifest a natural weapon. It counts as a simple melee weapon for you, and you add your Strength modifier to the attack and damage rolls when you attack with it, as normal.',
                            "You choose the weapon's form each time you rage:",
                            {
                                type: 'list',
                                style: 'list-hang-notitle',
                                items: [
                                    {
                                        type: 'item',
                                        name: 'Bite.',
                                        entry:
                                            'Your mouth transforms into a bestial muzzle or great mandibles (your choice). It deals 1d8 piercing damage on a hit. Once on each of your turns when you damage a creature with this bite, you regain a number of hit points equal to your proficiency bonus, provided you have less than half your hit points when you hit.',
                                    },
                                    {
                                        type: 'item',
                                        name: 'Claws.',
                                        entry:
                                            "Each of your hands transforms into a claw, which you can use as a weapon if it's empty. It deals 1d6 slashing damage on a hit. Once on each of your turns when you attack with a claw using the Attack action, you can make one additional claw attack as part of the same action.",
                                    },
                                    {
                                        type: 'item',
                                        name: 'Tail.',
                                        entry:
                                            'You grow a lashing, spiny tail, which deals 1d8 piercing damage on a hit and has the reach property. If a creature you can see within 10 feet of you hits you with an attack roll, you can use your reaction to swipe your tail and roll a d8, applying a bonus to your AC equal to the number rolled, potentially causing the attack to miss you.',
                                    },
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Bestial Soul',
                    source: 'TCE',
                    page: 24,
                    subclass_short_name: 'Beast',
                    subclass_source: 'TCE',
                    level: 6,
                    entries: {
                        e: [
                            '6th-level Path of the Beast feature',
                            'The feral power within you increases, causing the natural weapons of your Form of the Beast to count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.',
                            'You can also alter your form to help you adapt to your surroundings. When you finish a short or long rest, choose one of the following benefits, which lasts until you finish your next short or long rest:',
                            {
                                type: 'list',
                                items: [
                                    'You gain a swimming speed equal to your walking speed, and you can breathe underwater.',
                                    'You gain a climbing speed equal to your walking speed, and you can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.',
                                    "When you jump, you can make a Strength (Athletics) check and extend your jump by a number of feet equal to the check's total. You can make this special check only once per turn.",
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Infectious Fury',
                    source: 'TCE',
                    page: 24,
                    subclass_short_name: 'Beast',
                    subclass_source: 'TCE',
                    level: 10,
                    entries: {
                        e: [
                            '10th-level Path of the Beast feature',
                            'When you hit a creature with your natural weapons while you are raging, the beast within you can curse your target with rabid fury. The target must succeed on a Wisdom saving throw (DC equal to 8 + your Constitution modifier + your proficiency bonus) or suffer one of the following effects (your choice):',
                            {
                                type: 'list',
                                items: [
                                    'The target must use its reaction to make a melee attack against another creature of your choice that you can see.',
                                    'The target takes 2d12 psychic damage.',
                                ],
                            },
                            'You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Call the Hunt',
                    source: 'TCE',
                    page: 24,
                    subclass_short_name: 'Beast',
                    subclass_source: 'TCE',
                    level: 14,
                    entries: {
                        e: [
                            '14th-level Path of the Beast feature',
                            'The beast within you grows so powerful that you can spread its ferocity to others and gain resilience from them joining your hunt. When you enter your rage, you can choose a number of other willing creatures you can see within 30 feet of you equal to your Constitution modifier (minimum of one creature).',
                            'You gain 5 temporary hit points for each creature that accepts this feature. Until the rage ends, the chosen creatures can each use the following benefit once on each of their turns: when the creature hits a target with an attack roll and deals damage to it, the creature can roll a d6 and gain a bonus to the damage equal to the number rolled.',
                            'You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Path of Wild Magic',
                    source: 'TCE',
                    page: 25,
                    subclass_short_name: 'Wild Magic',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            'Many places in the multiverse abound with beauty, intense emotion, and rampant magic; the Feywild, the Upper Planes, and other realms of supernatural power radiate with such forces and can profoundly influence people. As folk of deep feeling, barbarians are especially susceptible to these wild influences, with some barbarians being transformed by the magic. These magic-suffused barbarians walk the Path of Wild Magic. Elf, tiefling, aasimar, and genasi barbarians often seek this path, eager to manifest the otherworldly magic of their ancestors.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Magic Awareness|Barbarian||Wild Magic|TCE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Wild Surge|Barbarian||Wild Magic|TCE|3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Magic Awareness',
                    source: 'TCE',
                    page: 25,
                    subclass_short_name: 'Wild Magic',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            '3rd-level Path of Wild Magic feature',
                            "As an action, you can open your awareness to the presence of concentrated magic. Until the end of your next turn, you know the location of any spell or magic item within 60 feet of you that isn't behind total cover. When you sense a spell, you learn which school of magic it belongs to.",
                            'You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Wild Surge',
                    source: 'TCE',
                    page: 25,
                    subclass_short_name: 'Wild Magic',
                    subclass_source: 'TCE',
                    level: 3,
                    entries: {
                        e: [
                            '3rd-level Path of Wild Magic feature',
                            'The magical energy roiling inside you sometimes erupts from you. When you enter your rage, roll on the Wild Magic table to determine the magical effect produced.',
                            'If the effect requires a saving throw, the DC equals 8 + your proficiency bonus + your Constitution modifier.',
                            {
                                type: 'table',
                                caption: 'Wild Magic',
                                colLabels: ['d8', 'Magical Effect'],
                                colStyles: ['col-2 text-center', 'col-10'],
                                rows: [
                                    [
                                        '1',
                                        'Shadowy tendrils lash around you. Each creature of your choice that you can see within 30 feet of you must succeed on a Constitution saving throw or take 1d12 necrotic damage. You also gain 1d12 temporary hit points.',
                                    ],
                                    [
                                        '2',
                                        'You teleport up to 30 feet to an unoccupied space you can see. Until your rage ends, you can use this effect again on each of your turns as a bonus action.',
                                    ],
                                    [
                                        '3',
                                        'An intangible spirit, which looks like a flumph or a pixie (your choice), appears within 5 feet of one creature of your choice that you can see within 30 feet of you. At the end of the current turn, the spirit explodes, and each creature within 5 feet of it must succeed on a Dexterity saving throw or take 1d6 force damage. Until your rage ends, you can use this effect again, summoning another spirit, on each of your turns as a bonus action.',
                                    ],
                                    [
                                        '4',
                                        "Magic infuses one weapon of your choice that you are holding. Until your rage ends, the weapon's damage type changes to force, and it gains the light and thrown properties, with a normal range of 20 feet and a long range of 60 feet. If the weapon leaves your hand, the weapon reappears in your hand at the end of the current turn.",
                                    ],
                                    [
                                        '5',
                                        'Whenever a creature hits you with an attack roll before your rage ends, that creature takes 1d6 force damage, as magic lashes out in retribution.',
                                    ],
                                    [
                                        '6',
                                        'Until your rage ends, you are surrounded by multi colored, protective lights. You gain a +1 bonus to AC, and while within 10 feet of you, your allies gain the same bonus.',
                                    ],
                                    [
                                        '7',
                                        'Flowers and vines temporarily grow around you. Until your rage ends, the ground within 15 feet of you is difficult terrain for your enemies.',
                                    ],
                                    [
                                        '8',
                                        'A bolt of light shoots from your chest. Another creature of your choice that you can see within 30 feet of you must succeed on a Constitution saving throw or take 1d6 radiant damage and be blinded until the start of your next turn. Until your rage ends, you can use this effect again on each of your turns as a bonus action.',
                                    ],
                                ],
                                data: {
                                    tableInclude: true,
                                },
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Bolstering Magic',
                    source: 'TCE',
                    page: 25,
                    subclass_short_name: 'Wild Magic',
                    subclass_source: 'TCE',
                    level: 6,
                    entries: {
                        e: [
                            '6th-level Path of Wild Magic feature',
                            'You can harness your wild magic to bolster yourself or a companion. As an action, you can touch one creature (which can be yourself) and confer one of the following benefits of your choice to that creature:',
                            {
                                type: 'list',
                                items: [
                                    'For 10 minutes, the creature can roll a d3 whenever making an attack roll or an ability check and add the number rolled to the d20 roll.',
                                    "Roll a d3. The creature regains one expended spell slot, the level of which equals the number rolled or lower (the creature's choice). Once a creature receives this benefit, that creature can't receive it again until after a long rest.",
                                ],
                            },
                            'You can take this action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Unstable Backlash',
                    source: 'TCE',
                    page: 25,
                    subclass_short_name: 'Wild Magic',
                    subclass_source: 'TCE',
                    level: 10,
                    entries: {
                        e: [
                            '10th-level Path of Wild Magic feature',
                            'When you are imperiled during your rage, the magic within you can lash out; immediately after you take damage or fail a saving throw while raging, you can use your reaction to roll on the Wild Magic table and immediately produce the effect rolled. This effect replaces your current Wild Magic effect.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Controlled Surge',
                    source: 'TCE',
                    page: 25,
                    subclass_short_name: 'Wild Magic',
                    subclass_source: 'TCE',
                    level: 14,
                    entries: {
                        e: [
                            '14th-level Path of Wild Magic feature',
                            'Whenever you roll on the Wild Magic table, you can roll the die twice and choose which of the two effects to unleash. If you roll the same number on both dice, you can ignore the number and choose any effect on the table.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Path of the Ancestral Guardian',
                    source: 'XGE',
                    page: 9,
                    subclass_short_name: 'Ancestral Guardian',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'Some barbarians hail from cultures that revere their ancestors. These tribes teach that the warriors of the past linger in the world as mighty spirits, who can guide and protect the living. When a barbarian who follows this path rages, the barbarian contacts the spirit world and calls on these guardian spirits for aid.',
                            "Barbarians who draw on their ancestral guardians can better fight to protect their tribes and their allies. In order to cement ties to their ancestral guardians, barbarians who follow this path cover themselves in elaborate tattoos that celebrate their ancestors' deeds. These tattoos tell sagas of victories against terrible monsters and other fearsome rivals.",
                            {
                                type: 'refSubclassFeature',
                                subclassFeature:
                                    'Ancestral Protectors|Barbarian||Ancestral Guardian|XGE|3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Ancestral Protectors',
                    source: 'XGE',
                    page: 9,
                    subclass_short_name: 'Ancestral Guardian',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            "Starting when you choose this path at 3rd level, spectral warriors appear when you enter your rage. While you're raging, the first creature you hit with an attack on your turn becomes the target of the warriors, which hinder its attacks. Until the start of your next turn, that target has disadvantage on any attack roll that isn't against you, and when the target hits a creature other than you with an attack, that creature has resistance to the damage dealt by the attack. The effect on the target ends early if your rage ends.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Spirit Shield',
                    source: 'XGE',
                    page: 9,
                    subclass_short_name: 'Ancestral Guardian',
                    subclass_source: 'XGE',
                    level: 6,
                    entries: {
                        e: [
                            'Beginning at 6th level, the guardian spirits that aid you can provide supernatural protection to those you defend. If you are raging and another creature you can see within 30 feet of you takes damage, you can use your reaction to reduce that damage by 2d6.',
                            'When you reach certain levels in this class, you can reduce the damage by more: by 3d6} at 10th level and by 4d6 at 14th level.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Consult the Spirits',
                    source: 'XGE',
                    page: 9,
                    subclass_short_name: 'Ancestral Guardian',
                    subclass_source: 'XGE',
                    level: 10,
                    entries: {
                        e: [
                            'At 10th level, you gain the ability to consult with your ancestral spirits. When you do so, you cast the augury or clairvoyance spell, without using a spell slot or material components. Rather than creating a spherical sensor, this use of clairvoyance invisibly summons one of your ancestral spirits to the chosen location. Wisdom is your spellcasting ability for these spells.',
                            "After you cast either spell in this way, you can't use this feature again until you finish a short or long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Vengeful Ancestors',
                    source: 'XGE',
                    page: 9,
                    subclass_short_name: 'Ancestral Guardian',
                    subclass_source: 'XGE',
                    level: 14,
                    entries: {
                        e: [
                            'At 14th level, your ancestral spirits grow powerful enough to retaliate. When you use your Spirit Shield to reduce the damage of an attack, the attacker takes an amount of force damage equal to the damage that your Spirit Shield prevents.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Path of the Storm Herald',
                    source: 'XGE',
                    page: 10,
                    subclass_short_name: 'Storm Herald',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'All barbarians harbor a fury within. Their rage grants them superior strength, durability, and speed. Barbarians who follow the Path of the Storm Herald learn to transform that rage into a mantle of primal magic, which swirls around them. When in a fury, a barbarian of this path taps into the forces of nature to create powerful magical effects.',
                            "Storm heralds are typically elite champions who train alongside druids, rangers, and others sworn to protect nature. Other storm heralds hone their craft in lodges in regions wracked by storms, in the frozen reaches at the world's end, or deep in the hottest deserts.",
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Storm Aura|Barbarian||Storm Herald|XGE|3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Storm Aura',
                    source: 'XGE',
                    page: 10,
                    subclass_short_name: 'Storm Herald',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'Starting at 3rd level, you emanate a stormy, magical aura while you rage. The aura extends 10 feet from you in every direction, but not through total cover.',
                            "Your aura has an effect that activates when you enter your rage, and you can activate the effect again on each of your turns as a bonus action. Choose desert, sea, or tundra. Your aura's effect depends on that chosen environment, as detailed below. You can change your environment choice whenever you gain a level in this class.",
                            "If your aura's effects require a saving throw, the DC equals 8 + your proficiency bonus + your Constitution modifier.",
                            {
                                type: 'options',
                                entries: [
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Desert|Barbarian|XGE|Storm Herald|XGE|3',
                                    },
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Sea|Barbarian|XGE|Storm Herald|XGE|3',
                                    },
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Tundra|Barbarian|XGE|Storm Herald|XGE|3',
                                    },
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Storm Soul',
                    source: 'XGE',
                    page: 10,
                    subclass_short_name: 'Storm Herald',
                    subclass_source: 'XGE',
                    level: 6,
                    entries: {
                        e: [
                            "At 6th level, the storm grants you benefits even when your aura isn't active. The benefits are based on the environment you chose for your Storm Aura.",
                            {
                                type: 'options',
                                entries: [
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Desert|Barbarian|XGE|Storm Herald|XGE|6',
                                    },
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Sea|Barbarian|XGE|Storm Herald|XGE|6',
                                    },
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Tundra|Barbarian|XGE|Storm Herald|XGE|6',
                                    },
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Shielding Storm',
                    source: 'XGE',
                    page: 10,
                    subclass_short_name: 'Storm Herald',
                    subclass_source: 'XGE',
                    level: 10,
                    entries: {
                        e: [
                            'At 10th level, you learn to use your mastery of the storm to protect others. Each creature of your choice has the damage resistance you gained from the Storm Soul feature while the creature is in your Storm Aura.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Raging Storm',
                    source: 'XGE',
                    page: 10,
                    subclass_short_name: 'Storm Herald',
                    subclass_source: 'XGE',
                    level: 14,
                    entries: {
                        e: [
                            'At 14th level, the power of the storm you channel grows mightier, lashing out at your foes. The effect is based on the environment you chose for your Storm Aura.',
                            {
                                type: 'options',
                                entries: [
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Desert|Barbarian|XGE|Storm Herald|XGE|14',
                                    },
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Sea|Barbarian|XGE|Storm Herald|XGE|14',
                                    },
                                    {
                                        type: 'refSubclassFeature',
                                        subclassFeature: 'Tundra|Barbarian|XGE|Storm Herald|XGE|14',
                                    },
                                ],
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Path of the Zealot',
                    source: 'XGE',
                    page: 11,
                    subclass_short_name: 'Zealot',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'Some deities inspire their followers to pitch themselves into a ferocious battle fury. These barbarians are zealots—warriors who channel their rage into powerful displays of divine power.',
                            'A variety of gods across the worlds of D&D inspire their followers to embrace this path. Tempus from the Forgotten Realms and Hextor and Erythnul of Greyhawk are all prime examples. In general, the gods who inspire zealots are deities of combat, destruction, and violence. Not all are evil, but few are good.',
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Divine Fury|Barbarian||Zealot|XGE|3',
                            },
                            {
                                type: 'refSubclassFeature',
                                subclassFeature: 'Warrior of the Gods|Barbarian||Zealot|XGE|3',
                            },
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Divine Fury',
                    source: 'XGE',
                    page: 11,
                    subclass_short_name: 'Zealot',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            "Starting when you choose this path at 3rd level, you can channel divine fury into your weapon strikes. While you're raging, the first creature you hit on each of your turns with a weapon attack takes extra damage equal to 1d6 + half your barbarian level. The extra damage is necrotic or radiant; you choose the type of damage when you gain this feature.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Warrior of the Gods',
                    source: 'XGE',
                    page: 11,
                    subclass_short_name: 'Zealot',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            "At 3rd level, your soul is marked for endless battle. If a spell, such as raise dead, has the sole effect of restoring you to life (but not undeath), the caster doesn't need material components to cast the spell on you.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Fanatical Focus',
                    source: 'XGE',
                    page: 11,
                    subclass_short_name: 'Zealot',
                    subclass_source: 'XGE',
                    level: 6,
                    entries: {
                        e: [
                            "Starting at 6th level, the divine power that fuels your rage can protect you. If you fail a saving throw while you're raging, you can reroll it, and you must use the new roll. You can use this ability only once per rage.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Zealous Presence',
                    source: 'XGE',
                    page: 11,
                    subclass_short_name: 'Zealot',
                    subclass_source: 'XGE',
                    level: 10,
                    entries: {
                        e: [
                            'At 10th level, you learn to channel divine power to inspire zealotry in others. As a bonus action, you unleash a battle cry infused with divine energy. Up to ten other creatures of your choice within 60 feet of you that can hear you gain advantage on attack rolls and saving throws until the start of your next turn.',
                            "Once you use this feature, you can't use it again until you finish a long rest.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Rage beyond Death',
                    source: 'XGE',
                    page: 11,
                    subclass_short_name: 'Zealot',
                    subclass_source: 'XGE',
                    level: 14,
                    entries: {
                        e: [
                            'Beginning at 14th level, the divine power that fuels your rage allows you to shrug off fatal blows.',
                            "While you're raging, having 0 hit points doesn't knock you unconscious. You still must make death saving throws, and you suffer the normal effects of taking damage while at 0 hit points. However, if you would die due to failing death saving throws, you don't die until your rage ends, and you die then only if you still have 0 hit points.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Elk',
                    source: 'SCAG',
                    page: 122,
                    subclass_short_name: 'Totem Warrior',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            "While you're raging and aren't wearing heavy armor, your walking speed increases by 15 feet. The spirit of the elk makes you extraordinarily swift.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Tiger',
                    source: 'SCAG',
                    page: 122,
                    subclass_short_name: 'Totem Warrior',
                    subclass_source: 'PHB',
                    level: 3,
                    entries: {
                        e: [
                            'While raging, you can add 10 feet to your long jump distance and 3 feet to your high jump distance. The spirit of the tiger empowers your leaps.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Elk',
                    source: 'SCAG',
                    page: 122,
                    subclass_short_name: 'Totem Warrior',
                    subclass_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            "Whether mounted or on foot, your travel pace is doubled, as is the travel pace of up to ten companions while they're within 60 feet of you and you're not incapacitated. The elk spirit helps you roam far and fast.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Tiger',
                    source: 'SCAG',
                    page: 122,
                    subclass_short_name: 'Totem Warrior',
                    subclass_source: 'PHB',
                    level: 6,
                    entries: {
                        e: [
                            'You gain proficiency in two skills from the following list: Athletics, Acrobatics, Stealth, and Survival. The cat spirit hones your survival instincts.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Elk',
                    source: 'SCAG',
                    page: 122,
                    subclass_short_name: 'Totem Warrior',
                    subclass_source: 'PHB',
                    level: 14,
                    entries: {
                        e: [
                            'While raging, you can use a bonus action during your move to pass through the space of a Large or smaller creature. That creature must succeed on a Strength saving throw (DC 8 + your Strength bonus + your proficiency bonus) or be knocked prone and take bludgeoning damage equal to 1d12 + your Strength modifier.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Tiger',
                    source: 'SCAG',
                    page: 122,
                    subclass_short_name: 'Totem Warrior',
                    subclass_source: 'PHB',
                    level: 14,
                    entries: {
                        e: [
                            "While you're raging, if you move at least 20 feet in a straight line toward a Large or smaller target right before making a melee weapon attack against it, you can use a bonus action to make an additional melee weapon attack against it.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Desert',
                    source: 'XGE',
                    page: 10,
                    subclass_short_name: 'Storm Herald',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'When this effect is activated, all other creatures in your aura take 2 fire damage each. The damage increases when you reach certain levels in this class, increasing to 3 at 5th level, 4 at 10th level, 5 at 15th level, and 6 at 20th level.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Sea',
                    source: 'XGE',
                    page: 10,
                    subclass_short_name: 'Storm Herald',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'When this effect is activated, you can choose one other creature you can see in your aura. The target must make a Dexterity saving throw. The target takes 1d6 lightning damage on a failed save, or half as much damage on a successful one. The damage increases when you reach certain levels in this class, increasing to 2d6 at 10th level, 3d6 at 15th level, and 4d6 at 20th level.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Tundra',
                    source: 'XGE',
                    page: 10,
                    subclass_short_name: 'Storm Herald',
                    subclass_source: 'XGE',
                    level: 3,
                    entries: {
                        e: [
                            'When this effect is activated, each creature of your choice in your aura gains 2 temporary hit points, as icy spirits inure it to suffering. The temporary hit points increase when you reach certain levels in this class, increasing to 3 at 5th level, 4 at 10th level, 5 at 15th level, and 6 at 20th level.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Desert',
                    source: 'XGE',
                    page: 10,
                    subclass_short_name: 'Storm Herald',
                    subclass_source: 'XGE',
                    level: 6,
                    entries: {
                        e: [
                            "You gain resistance to fire damage, and you don't suffer the effects of extreme heat, as described in the Dungeon Master's Guide. Moreover, as an action, you can touch a flammable object that isn't being worn or carried by anyone else and set it on fire.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Sea',
                    source: 'XGE',
                    page: 10,
                    subclass_short_name: 'Storm Herald',
                    subclass_source: 'XGE',
                    level: 6,
                    entries: {
                        e: [
                            'You gain resistance to lightning damage, and you can breathe underwater. You also gain a swimming speed of 30 feet.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Tundra',
                    source: 'XGE',
                    page: 10,
                    subclass_short_name: 'Storm Herald',
                    subclass_source: 'XGE',
                    level: 6,
                    entries: {
                        e: [
                            "You gain resistance to cold damage, and you don't suffer the effects of extreme cold, as described in the Dungeon Master's Guide. Moreover, as an action, you can touch water and turn a 5-foot cube of it into ice, which melts after 1 minute. This action fails if a creature is in the cube.",
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Desert',
                    source: 'XGE',
                    page: 10,
                    subclass_short_name: 'Storm Herald',
                    subclass_source: 'XGE',
                    level: 14,
                    entries: {
                        e: [
                            'Immediately after a creature in your aura hits you with an attack, you can use your reaction to force that creature to make a Dexterity saving throw. On a failed save, the creature takes fire damage equal to half your barbarian level.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Sea',
                    source: 'XGE',
                    page: 10,
                    subclass_short_name: 'Storm Herald',
                    subclass_source: 'XGE',
                    level: 14,
                    entries: {
                        e: [
                            'When you hit a creature in your aura with an attack, you can use your reaction to force that creature to make a Strength saving throw. On a failed save, the creature is knocked prone, as if struck by a wave.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
                {
                    name: 'Tundra',
                    source: 'XGE',
                    page: 10,
                    subclass_short_name: 'Storm Herald',
                    subclass_source: 'XGE',
                    level: 14,
                    entries: {
                        e: [
                            'Whenever the effect of your Storm Aura is activated, you can choose one creature you can see in the aura. That creature must succeed on a Strength saving throw, or its speed is reduced to 0 until the start of your next turn, as magical frost covers it.',
                        ],
                    },
                    id: uuidv4(),
                    class_id: '8be354f0-4707-41a5-be97-127d1218c446',
                },
            ])
        ))
)