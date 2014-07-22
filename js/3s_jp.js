/*
 * Card:
 *   ID Name Description Event Border Stars Place Place2 Prototype Shape Attribute HP MP ATK DEF AGI WIS 
 *   Skills Recommends RecommendsRB
 */
Card.addAll([
    /*
      ["20001", "Vrtra", "This evil serpent born of fire brings drought by damming the celestial river with its massive body.", 
      Event.none, Border.none, 3, Place.volcano, 0, null, Shape.dragon, Attribute.fire,
      751, 703, 711, 660, 727, 719, 
      [Skill.physical1, Skill.datk20, Skill.physical2, Skill.ddef20, Skill.physical3],
      [Skill.datk20, Skill.ddef20, Skill.physical3],
      []],
      ["20002", "Chimera", "A horrific fusion of varied bestial parts, this fire-breathing abomination rains terror upon the world of man.", 
      Event.none, Border.none, 3, Place.volcano, 0, null, Shape.wolf, Attribute.fire,
      790, 808, 790, 795, 620, 712,
      [Skill.fire1, Skill.physical2, Skill.fire2, Skill.dagi20, Skill.fire3],
      [Skill.physical2, Skill.dagi20, Skill.fire3],
      []],
      ["20003", "Lindworm", "A flightless dragon that in place of wings has a body of such mass it sends tremors through the earth.", 
      Event.none, Border.none, 3, Place.plains, 0, null, Shape.wolf, Attribute.fire,
      756, 676, 679, 715, 790, 682, 
      [Skill.atk10, Skill.fire2, Skill.atk20, Skill.def20, Skill.physical3],
      [Skill.atk10, Skill.atk20, Skill.physical3],
      []],
      ["20004", "Naga", "A serpent spirit of immortality and rebirth that possesses a great vitality and the power to bring rain.", 
      Event.none, Border.none, 3, Place.plains, 0, null, Shape.dragon, Attribute.water,
      810, 756, 704, 719, 678, 739,
      [Skill.water1, Skill.heal, Skill.def10, Skill.water2, Skill.revival],
      [Skill.def10, Skill.water2, Skill.revival],
      []],
      ["20005", "Hydra", "A water serpent with nine heads that regenerate when severed, the central of which is deathless.", 
      Event.none, Border.none, 3, Place.plains, 0, null, Shape.dragon, Attribute.water,
      748, 708, 744, 754, 721, 728,
      [Skill.physical1, Skill.def10, Skill.def20, Skill.physical2, Skill.revival],
      [Skill.def20, Skill.physical2, Skill.revival],
      []],
      ["20007", "Cernunnos", "Known as the lord of all beasts, this primeval being is ever attended by a retinue of myriad creatures.", 
      Event.none, Border.none, 3, Place.volcano, 0, null, Shape.wolf, Attribute.earth,
      682, 760, 730, 767, 628, 745, 
      [Skill.atk20, Skill.physical1, Skill.physical2, Skill.dwis20, Skill.physical3],
      [Skill.atk20, Skill.dwis20, Skill.physical3],
      []],
      ["20008", "Humbaba", "This spirit warden holds vigil over the sacred forest with a booming roar and breath of fire and poison.", 
      Event.none, Border.none, 3, Place.plains, 0, null, Shape.giant, Attribute.earth,
      632, 732, 682, 683, 688, 691, 
      [Skill.water1, Skill.fire1, Skill.water2, Skill.poison1, Skill.water3],
      [Skill.water2, Skill.poison1, Skill.water3],
      []],
      ["20009", "Cyclops", "Known for its single eye and smithery skills, this giant demigod fought in the war of the old and new gods.", 
      Event.none, Border.none, 3, Place.plains, 0, null, Shape.giant, Attribute.lightning,
      708, 645, 705, 715, 675, 672,
      [Skill.physical1, Skill.def20, Skill.physical2, Skill.atk20, Skill.physical3],
      [Skill.def20, Skill.atk20, Skill.physical3],
      []],
      ["20010", "Nue", "Gifted with a great power over thunder, this beast is said to bring a curse upon the land where it is slain.", 
      Event.none, Border.none, 3, Place.volcano, 0, null, Shape.wolf, Attribute.lightning,
      696, 736, 708, 702, 745, 710,
      [Skill.lightning1, Skill.dagi20, Skill.dwis20, Skill.ddef20, Skill.lightning2],
      [Skill.dagi20, Skill.dwis20, Skill.ddef20],
      []],
      ["20011", "Furfur", "This great earl of hell and bringer of storms tries to deceive those mortals fool enough to summon him.", 
      Event.none, Border.none, 3, Place.plains, 0, null, Shape.wolf, Attribute.lightning,
      728, 760, 754, 705, 718, 742,
      [Skill.lightning1, Skill.wind1, Skill.agi10, Skill.lightning2, Skill.mana],
      [Skill.wind1, Skill.agi10, Skill.lightning2],
      []],
      ["20012", "Wendigo", "Hailing from frigid forests and mountains, this ice spirit rides the winds to attack with blinding speed.", 
      Event.none, Border.none, 3, Place.volcano, 0, null, Shape.giant, Attribute.wind,
      740, 628, 758, 745, 800, 675,
      [Skill.wind1, Skill.agi10, Skill.wind2, Skill.agi20, Skill.wind3],
      [Skill.agi10, Skill.agi20, Skill.wind3],
      []],
      ["20013", "Jinn", "This evil spirit is fettered by no corporeal form, and has the power to change its size and shape at will.", 
      Event.none, Border.none, 3, Place.plains, 0, null, Shape.humanoid, Attribute.wind,
      678, 725, 684, 715, 721, 723,
      [Skill.wind1, Skill.agi20, Skill.wind2, Skill.datk20, Skill.wind3],
      [Skill.agi20, Skill.datk20, Skill.wind3],
      []],
      ["20014", "Hanuman", "This shapeshifting incarnation of the wind god possesses both great wisdom and prowess as a warrior. ", 
      Event.none, Border.none, 3, Place.volcano, 0, null, Shape.giant, Attribute.wind,
      695, 653, 678, 675, 785, 633,
      [Skill.wind1, Skill.def20, Skill.atk20, Skill.physical2, Skill.wind2],
      [Skill.def20, Skill.atk20, Skill.physical2],
      []],
      ["20015", "Cait Sith", "A capricious faerie that shrewdly observes the world in the guise of a common cat.", 
      Event.none, Border.none, 3, Place.plains, 0, null, Shape.humanoid, Attribute.poison,
      665, 692, 688, 733, 783, 714, 
      [Skill.poison1, Skill.dagi20, Skill.slash1, Skill.poison2, Skill.slash2],
      [Skill.dagi20, Skill.poison2, Skill.slash2],
      []],
      ["20016", "Basilisk", "Called the king of serpents, the basilisk has a body steeped in venom and a gaze that brings death.", 
      Event.none, Border.none, 3, Place.volcano, 0, null, Shape.dragon, Attribute.poison,
      628, 665, 782, 670, 700, 672,
      [Skill.poison1, Skill.dwis20, Skill.poison2, Skill.dagi20, Skill.poison3],
      [Skill.dwis20, Skill.dagi20, Skill.poison3],
      []],
      ["20018", "Berserker", "Created by man, this mechanical dread destroys all in its path, discriminating not between friend or foe.", 
      Event.none, Border.none, 3, Place.volcano, 0, null, Shape.giant, Attribute.mecha,
      808, 790, 808, 782, 728, 612, 
      [Skill.slash1, Skill.slash2, Skill.slash3, Skill.atk10, Skill.def10],
      [Skill.slash3, Skill.atk10, Skill.def10],
      []],
      ["20019", "Kirin", "A kind and gentle beast of divinity said to appear only during an age of benevolent and gracious rule.", 
      Event.none, Border.none, 3, Place.volcano, 0, null, Shape.wolf, Attribute.light,
      700, 732, 694, 772, 772, 732,
      [Skill.heal, Skill.lightning1, Skill.majorheal, Skill.light2, Skill.light3],
      [Skill.lightning1, Skill.light2, Skill.light3],
      []],
      ["20020", "Sphinx", "A man's head and lion's body grant this beast the wisdom and strength to guard all royal and sacred.", 
      Event.none, Border.none, 3, Place.plains, 0, null, Shape.wolf, Attribute.light,
      708, 740, 787, 672, 674, 800, 
      [Skill.light1, Skill.atk20, Skill.dwis20, Skill.physical1, Skill.physical2],
      [Skill.atk20, Skill.dwis20, Skill.physical2],
      []],
      ["20021", "Unicorn", "Only the purest of maidens can tame this divine beast, which has a horn with the power to cures all ails.", 
      Event.none, Border.none, 3, Place.volcano, 0, null, Shape.wolf, Attribute.light,
      650, 719, 710, 668, 720, 653,
      [Skill.physical1, Skill.heal, Skill.atk20, Skill.slash3, Skill.majorheal],
      [Skill.physical1, Skill.atk20, Skill.slash3],
      []],
      ["20022", "Succubus", "This demoness appears in the dreams of her prey, corrupting them with unbound lust and temptation.", 
      Event.none, Border.none, 3, Place.volcano, 0, null, Shape.humanoid, Attribute.darkness,
      672, 760, 693, 688, 676, 763,
      [Skill.dwis20, Skill.darkness2, Skill.slash2, Skill.mana, Skill.life],
      [Skill.dwis20, Skill.darkness2, Skill.slash2],
      []],
      ["20023", "Diabolos", "A fallen angel and enemy of the gods who has now turned his divine powers upon the mortal world.", 
      Event.none, Border.none, 3, Place.plains, 0, null, Shape.humanoid, Attribute.darkness,
      688, 728, 753, 708, 727, 772,
      [Skill.darkness1, Skill.slash1, Skill.slash2, Skill.atk20, Skill.def20],
      [Skill.slash2, Skill.atk20, Skill.def20],
      []],
      ["20024", "Silver Slime", "This mutated slime is ill-suited to battle, though it is known to serve as an excellent combining material.", 
      Event.none, Border.none, 3, Place.grounds, 0, null, Shape.slime, Attribute.poison,
      10, 10, 1, 1, 1, 1,
      [Skill.heal],
      [Skill.heal],
      []],
      ["20028", "Mandragora", "Seen across Vana'diel, these bipedal plants have a society all their own. - FINAL FANTASY XI", 
      Event.none, Border.none, 3, Place.invitation, 1, null, Shape.orbs, Attribute.light,
      705, 742, 727, 707, 739, 759,
      [Skill.light1, Skill.wis10, Skill.agi20, Skill.wis20, Skill.light2],
      [Skill.wis10, Skill.wis20, Skill.light2],
      []],
      ["20030", "Good King Moggle Mog XII", "Long believed to be a myth, this moogle king has now descended to Eorzea. - FINAL FANTASY XIV", 
      Event.none, Border.none, 3, Place.invitation, 1, null, Shape.humanoid, Attribute.darkness,
      715, 741, 727, 757, 699, 739,
      [Skill.def10, Skill.darkness1, Skill.wis20, Skill.darkness2, Skill.def20],
      [Skill.wis20, Skill.darkness2, Skill.def20],
      []],
      ["20031", "Spriggan", "A soot-colored beast ever seen bearing a burden of precious stones. - FINAL FANTASY XIV", 
      Event.none, Border.none, 3, Place.invitation, 1, null, Shape.orbs, Attribute.earth,
      745, 734, 725, 712, 707, 752, 
      [Skill.earth1, Skill.wis10, Skill.earth2, Skill.agi20, Skill.earth3],
      [Skill.wis10, Skill.agi20, Skill.earth3],
      []],
      ["20035", "Surtr", "This fire giant will appear at the end of days with his flaming sword and minions to set creation ablaze.", 
      Event.none, Border.none, 3, Place.plains, 0, null, Shape.giant, Attribute.fire,
      835, 663, 806, 784, 656, 692,
      [Skill.fire1, Skill.physical1, Skill.fire2, Skill.physical2, Skill.fire3],
      [Skill.fire2, Skill.physical2, Skill.fire3],
      []],
      ["20036", "Grim Reaper", "Death itself, this being reaps the souls of the living with its scythe and sees them to the underworld.", 
      Event.none, Border.none, 3, Place.plains, 0, null, Shape.orbs, Attribute.death,
      696, 807, 862, 752, 657, 846,
      [Skill.darkness1, Skill.darkness2, Skill.dagi20, Skill.dwis20, Skill.darkness3],
      [Skill.dagi20, Skill.dwis20, Skill.darkness3],
      []],
      ["20037", "Dragoon", "This ancient war machine is mounted with massive, swiveling cannons capable of firing in any direction.", 
      Event.none, Border.none, 3, Place.snowfield, 0, null, Shape.wolf, Attribute.mecha,
      820, 684, 799, 784, 699, 655, 
      [Skill.fire1, Skill.physical1, Skill.physical2, Skill.atk20, Skill.physical3],
      [Skill.physical2, Skill.atk20, Skill.physical3],
      []],
      ["20038", "Ripper", "Crafted in antiquity, this mechanical humanoid tears through metal and flesh with its many steel blades.", 
      Event.none, Border.none, 3, Place.snowfield, 0, null, Shape.orbs, Attribute.mecha,
      656, 725, 738, 672, 745, 660,
      [Skill.physical1, Skill.atk10, Skill.physical2, Skill.ddef20, Skill.physical3],
      [Skill.atk10, Skill.ddef20, Skill.physical3],
      []],
      ["20039", "Avnas", "This evil deity commands all fire, and within the flames that burn about him the future can be seen.", 
      Event.none, Border.none, 3, Place.snowfield, 0, null, Shape.humanoid, Attribute.fire,
      672, 757, 657, 657, 705, 745, 
      [Skill.fire1, Skill.physical2, Skill.fire2, Skill.wis10, Skill.fire3],
      [Skill.fire2, Skill.wis10, Skill.fire3],
      []],
      ["20040", "Yeti", "Found in snowbound mountains, this wise and peaceful humanoid is unrelenting and ferocious in battle.", 
      Event.none, Border.none, 3, Place.snowfield, 0, null, Shape.giant, Attribute.water,
      777, 656, 763, 770, 684, 740, 
      [Skill.water1, Skill.slash1, Skill.water2, Skill.slash2, Skill.water3],
      [Skill.water2, Skill.slash2, Skill.water3],
      []],
      ["20041", "Arigan", "The wings of this avian elemental take on the luster of the gold and silver upon which it feasts.", 
      Event.none, Border.none, 3, Place.snowfield, 0, null, Shape.bird, Attribute.earth,
      706, 756, 706, 684, 799, 684,
      [Skill.atk10, Skill.def10, Skill.physical1, Skill.physical2, Skill.physical3],
      [Skill.atk10, Skill.def10, Skill.physical3],
      []],
      ["20042", "Taranis", "Warrior maiden and goddess of thunder, this being is worshipped for her powers over death and battle.", 
      Event.none, Border.none, 3, Place.snowfield, 0, null, Shape.humanoid, Attribute.lightning,
      663, 777, 741, 692, 734, 763, 
      [Skill.lightning1, Skill.darkness1, Skill.lightning2, Skill.darkness2, Skill.lightning3],
      [Skill.lightning2, Skill.darkness2, Skill.lightning3],
      []],
      ["20043", "Umu Dabrutu", "Spawned by an ancient wyrm to battle the gods, this magical master of storms commands the winds.", 
      Event.none, Border.none, 3, Place.snowfield, 0, null, Shape.bird, Attribute.wind,
      784, 677, 727, 699, 777, 677, 
      [Skill.wind1, Skill.slash1, Skill.wind2, Skill.slash2, Skill.wind3],
      [Skill.wind2, Skill.slash2, Skill.wind3],
      []],
      ["20045", "Sleipnir", "This eight-legged warhorse of the gods gallops freely through the realms of heaven, Attribute.earth, and hell.", 
      Event.none, Border.none, 3, Place.snowfield, 0, null, Shape.wolf, Attribute.darkness,
      751, 725, 796, 768, 846, 727, 
      [Skill.darkness1, Skill.agi10, Skill.darkness2, Skill.physical2, Skill.agi20],
      [Skill.agi10, Skill.physical2, Skill.agi20],
      []],
      ["20046", "Rangda", "Versed in the black arts and ever attended by her familiars, this vile witch visits disaster upon mortals.", 
      Event.none, Border.none, 3, Place.snowfield, 0, null, Shape.humanoid, Attribute.darkness,
      658, 849, 670, 677, 663, 842,
      [Skill.darkness1, Skill.datk20, Skill.ddef20, Skill.dagi20, Skill.dwis20],
      [Skill.ddef20, Skill.dagi20, Skill.dwis20],
      []],
      ["20047", "Indigo Pixie", "One of the seven pixies of good fortune. Though short-tempered and sadistic, deep down it truly cares. ", 
      Event.pixie, Border.none, 3, Place.snowfield, 0, null, Shape.orbs, Attribute.darkness,
      808, 698, 788, 679, 780, 715,
      [Skill.agi10, Skill.darkness2, Skill.atk10, Skill.physical2, Skill.darkness3],
      [Skill.agi10, Skill.atk10, Skill.physical2],
      []],
      ["20048", "Bicorn", "This two-horned demonic creature derives its strength from devouring the flesh of the good, virtuous, and loyal.", 
      Event.none, Border.none, 3, Place.volcano, 0, null, Shape.wolf, Attribute.darkness,
      759, 659, 821, 737, 781, 669,
      [Skill.darkness1, Skill.physical1, Skill.atk20, Skill.mana, Skill.darkness2],
      [Skill.physical1, Skill.atk20, Skill.darkness2],
      []],
      ["20049", "Pih Fang", "Spawned forth from a tree, this sinister bird visits great fire and conflagration upon the lands over which it flies.", 
      Event.none, Border.none, 3, Place.volcano, 0, null, Shape.bird, Attribute.fire,
      759, 659, 821, 737, 781, 669,
      [Skill.fire1, Skill.agi10, Skill.fire2, Skill.slash2, Skill.fire3],
      [Skill.agi10, Skill.slash2, Skill.fire3],
      []],
      ["20050", "Svarog", "This fire god of the firmament is praised by smiths, and wields as its weapons the tools of their trade.", 
      Event.none, Border.none, 3, Place.desert, 0, null, Shape.dragon, Attribute.fire,
      735, 745, 781, 724, 735, 721,
      [Skill.fire2, Skill.physical2, Skill.atk10, Skill.fire3, Skill.atk20],
      [Skill.physical2, Skill.atk10, Skill.atk20],
      []],
      ["20051", "Agares", "This demon is able to cause calamitous quakes, and commands change and flux to steer the course of the future.", 
      Event.none, Border.none, 3, Place.desert, 0, null, Shape.beast, Attribute.earth,
      800, 731, 723, 733, 699, 740, 
      [Skill.earth1, Skill.slash2, Skill.ls, Skill.atk20, Skill.earth2],
      [Skill.slash2, Skill.ls, Skill.atk20],
      []],
      ["20052", "Set", "Even among other immortals, this god of darkness and chaos commands fear as great as his powers.", 
      Event.none, Border.none, 3, Place.desert, 0, null, Shape.humanoid, Attribute.wind,
      722, 710, 792, 699, 720, 767, 
      [Skill.wind2, Skill.atk10, Skill.qs, Skill.atk20, Skill.wind3],
      [Skill.atk10, Skill.qs, Skill.atk20],
      []],
      ["20053", "Druj Nasu", "This vile demoness emerges from the mouth of hell to enter the bodies of the dead and spread her taint.", 
      Event.none, Border.none, 3, Place.desert, 0, null, Shape.female, Attribute.poison,
      699, 734, 711, 751, 749, 750,
      [Skill.poison1, Skill.datk20, Skill.dwis20, Skill.poison2, Skill.sd],
      [Skill.dwis20, Skill.poison2, Skill.sd],
      []],
      ["20054", "Basmu", "Once savage and tameless, this horned serpent spawn of the Great Mother now serves the lords of hell.", 
      Event.none, Border.none, 3, Place.desert, 0, null, Shape.dragon, Attribute.poison,
      755, 705, 821, 761, 709, 700,
      [Skill.poison1, Skill.poison2, Skill.slash2, Skill.slash3, Skill.poison3],
      [Skill.slash2, Skill.slash3, Skill.poison3],
      []],
      ["20055", "Ganesha", "This benevolent deity is worshipped as the Remover of Obstacles, and is tutelary of both trade and study.", 
      Event.none, Border.none, 3, Place.desert, 0, null, Shape.beast, Attribute.wind,
      811, 715, 761, 793, 686, 803, 
      [Skill.physical2, Skill.def20, Skill.wind2, Skill.wis20, Skill.physical3],
      [Skill.def20, Skill.wind2, Skill.wis20],
      []],
      ["20056", "Mummy", "These corpses are free of death´s grip, and the ancient among them possess powers from far beyond the grave.", 
      Event.none, Border.none, 3, Place.desert, 0, null, Shape.humanoid, Attribute.death,
      733, 774, 739, 770, 699, 709, 
      [Skill.slash2, Skill.poison2, Skill.death2, Skill.wis20, Skill.revival],
      [Skill.death2, Skill.wis20, Skill.revival],
      []],
      ["20057", "Bastet", "This feline goddess of the hearth and fertility is also revered for her aspects as a divinity of both war and music.", 
      Event.none, Border.none, 3, Place.desert, 0, null, Shape.female, Attribute.light,
      788, 767, 710, 733, 721, 771, 
      [Skill.light2, Skill.slash2, Skill.wis10, Skill.light3, Skill.majorheal],
      [Skill.slash2, Skill.wis10, Skill.light3],
      []],
      ["20058", "Grigori", "Cast from heaven for loving a human, this fallen angel bears forbidden knowledge and evil to the mortal world.", 
      Event.none, Border.none, 3, Place.desert, 0, null, Shape.humanoid, Attribute.darkness,
      743, 800, 774, 754, 739, 811,
      [Skill.agi10, Skill.wis10, Skill.darkness2, Skill.wis20, Skill.darkness3],
      [Skill.wis10, Skill.wis20, Skill.darkness3],
      []],
      ["20059", "Chaos", "This ageless demon has existed since creation, spreading vice and depravity to corrupt the good.", 
      Event.none, Border.none, 3, Place.desert, 0, null, Shape.wolf, Attribute.darkness,
      794, 687, 732, 686, 743, 715,
      [Skill.dagi20, Skill.darkness2, Skill.dwis20, Skill.sd, Skill.darkness3],
      [Skill.dagi20, Skill.dwis20, Skill.darkness3],
      []],
      ["20060", "Tengu", "Known as keepers of the mountains they inhabit, these ghastly spirits weave fell sorceries to cause the fall of men.", 
      Event.none, Border.none, 3, Place.snowfield, 0, null, Shape.bird, Attribute.wind,
      730, 752, 735, 727, 767, 767, 
      [Skill.wind1, Skill.wind2, Skill.dwis20, Skill.agi10, Skill.wind3],
      [Skill.dwis20, Skill.agi10, Skill.wind3],
      []],
      ["20061", "Bifrons", "This mighty demon uses necromancy to command the dead, nefariously moving their corpses from grave to grave.", 
      Event.none, Border.none, 3, Place.snowfield, 0, null, Shape.orbs, Attribute.death,
      755, 749, 700, 700, 695, 755, 
      [Skill.darkness2, Skill.wis10, Skill.darkness3, Skill.death2, Skill.death3],
      [Skill.wis10, Skill.darkness3, Skill.death3],
      []],
      ["20063", "Ruby Serpent", "This twin jewels of vibrant red crowning this viper house burning stars which endow the beast with its dominance.", 
      Event.serpents, Border.none, 3, Place.volcano, 0, null, Shape.dragon, Attribute.fire,
      786, 717, 790, 733, 775, 752,
      [Skill.fire1, Skill.fire2, Skill.slash2, Skill.atk20, Skill.fire3],
      [Skill.slash2, Skill.atk20, Skill.fire3],
      []],
      ["20064", "Sapphire Serpent", "As the embodiment of purity, this spirit of truest blue grants the power to calm emotions and see through treacheries.", 
      Event.serpents, Border.none, 3, Place.snowfield, 0, null, Shape.dragon, Attribute.water,
      743, 775, 687, 740, 775, 765,
      [Skill.water1, Skill.water2, Skill.wis10, Skill.majorheal, Skill.water3],
      [Skill.water2, Skill.wis10, Skill.water3],
      []],
      ["20065", "Emerald Serpent", "The untainted beauty of this lethargic green beast wins hearts of gods and demons much to the confusion of man.", 
      Event.serpents, Border.none, 3, Place.plains, 0, null, Shape.dragon, Attribute.wind,
      820, 695, 808, 780, 690, 650,
      [Skill.wind1, Skill.slash2, Skill.wind2, Skill.slash3, Skill.ls],
      [Skill.slash2, Skill.slash3, Skill.ls],
      []],
      ["20066", "Hakutaku", "This sacred beast's wisdom pervades all creation, and its image is a warding talisman against illness and plague.", 
      Event.none, Border.none, 3, Place.desert, 0, null, Shape.wolf, Attribute.light,
      780, 741, 725, 760, 704, 705,
      [Skill.physical1, Skill.heal, Skill.physical2, Skill.light3, Skill.majorheal],
      [Skill.physical2, Skill.light3, Skill.majorheal],
      []],
      ["20067", "Fae Sorceress", "The power of these mages is so feared among faeriekind that they must swear a strict code to practice their arcana.", 
      Event.none, Border.none, 3, Place.desert, 0, null, Shape.female, Attribute.light,
      780, 741, 725, 760, 704, 705,
      [Skill.dwis20, Skill.light2, Skill.dagi20, Skill.datk20, Skill.sd],
      [Skill.dwis20, Skill.light2, Skill.sd],
      []],
      ["20068", "Vepar", "With the oceans at her command, this duchess of hell is able to conjure raging storms and guide vast fleets to war.", 
      Event.none, Border.none, 3, Place.ocean, 0, null, Shape.mermaid, Attribute.water,
      744, 832, 708, 689, 750, 715,
      [Skill.agi10, Skill.datk20, Skill.water2, Skill.wis20, Skill.water3],
      [Skill.agi10, Skill.wis20, Skill.water3],
      []],
      ["20069", "Apophis", "Born of chaos, this evil serpent is locked in eternal battle with the sun god to stay the dawn of each new day.", 
      Event.none, Border.none, 3, Place.ocean, 0, null, Shape.serpent, Attribute.darkness,
      781, 811, 767, 760, 698, 780,
      [Skill.darkness1, Skill.datk20, Skill.dwis20, Skill.ep, Skill.darkness2],
      [Skill.dwis20, Skill.ep, Skill.darkness2],
      []],
      ["20070", "Amphitrite", "The world's seas and all they contain are ruled by this benevolent goddess queen and symbol of tranquil waters.", 
      Event.none, Border.none, 3, Place.ocean, 0, null, Shape.mermaid, Attribute.light,
      738, 800, 727, 712, 765, 854,
      [Skill.ep, Skill.light2, Skill.agi10, Skill.agi20, Skill.light3],
      [Skill.ep, Skill.agi20, Skill.light3],
      []],
      ["20071", "Empusa", "A servant of the dark, this specter stalks in the night on the command of her master, seeking out warm blood.", 
      Event.none, Border.none, 3, Place.ocean, 0, null, Shape.mermaid, Attribute.mecha,
      830, 798, 800, 699, 699, 771,
      [Skill.slash1, Skill.poison2, Skill.slash2, Skill.atkwis10, Skill.poison3],
      [Skill.slash2, Skill.atkwis10, Skill.poison3],
      []],
      ["20072", "Zahhak", "Each day of his thousand-year rule, this tyrant made a sacrifice of two souls to the serpents that grow forth from him.", 
      Event.none, Border.none, 3, Place.ocean, 0, null, Shape.orbs, Attribute.poison,
      830, 705, 830, 790, 670, 702,
      [Skill.physical2, Skill.slash2, Skill.ddef20, Skill.atk20, Skill.physical3],
      [Skill.ddef20, Skill.atk20, Skill.physical3],
      []],
      ["20073", "Tiamat", "Felled by those same deities she first birthed, this creatress became the heavens and earth, but now returns.", 
      Event.none, Border.none, 3, Place.ocean, 0, null, Shape.orbs, Attribute.water,
      700, 732, 703, 700, 818, 804,
      [Skill.water1, Skill.water2, Skill.wis10, Skill.agi20, Skill.water3],
      [Skill.wis10, Skill.agi20, Skill.water3],
      []],
      ["20074", "Forcalor", "Bending wind and water to his will, this duke of hell can consign the mightiest vessel to oblivion beneath the waves.", 
      Event.none, Border.none, 3, Place.ocean, 0, null, Shape.merman, Attribute.water,
      744, 810, 734, 720, 755, 788,
      [Skill.water2, Skill.ds, Skill.wind2, Skill.agi20, Skill.water3],
      [Skill.ds, Skill.agi20, Skill.water3],
      []],
      ["20075", "Merman", "Unmatched in combat in open waters, clans of these fishmen claim dominion over vast stretches of the sea.", 
      Event.none, Border.none, 3, Place.ocean, 0, null, Shape.merman, Attribute.water,
      809, 765, 749, 717, 735, 749,
      [Skill.ep, Skill.water2, Skill.wis10, Skill.dagi20, Skill.water3],
      [Skill.ep, Skill.wis10, Skill.water3],
      []],
      ["20076", "Rusalka", "Draped in mist, this sensual nymph dances to mesmerize passersby, then leads them to die in her riverbed.", 
      Event.none, Border.none, 3, Place.ocean, 0, null, Shape.mermaid, Attribute.darkness,
      699, 811, 732, 721, 762, 804,
      [Skill.darkness2, Skill.water2, Skill.wis10, Skill.agiwis10, Skill.darkness3],
      [Skill.wis10, Skill.agiwis10, Skill.darkness3],
      []],
      ["20077", "Umibozu", "Appearing abruptly on nights when the seas are still, this giant destroys ships by churning rough waters and waves.", 
      Event.none, Border.none, 3, Place.ocean, 0, null, Shape.merman, Attribute.darkness,
      811, 677, 860, 800, 662, 716,
      [Skill.physical1, Skill.def10, Skill.physical2, Skill.ls, Skill.physical3],
      [Skill.def10, Skill.ls, Skill.physical3],
      []],
      ["20078", "Occultum Katana", "Control over this sword's powers died with its master, and it now seeks only to cleave any and all things in two.", 
      Event.weapons, Border.none, 3, Place.desert, 0, null, Shape.orbs, Attribute.none,
      670, 670, 819, 705, 790, 650,
      [Skill.darkness1, Skill.life, Skill.slash3, Skill.death1, Skill.ds],
      [Skill.slash3, Skill.death1, Skill.ds],
      []],
      ["20079", "Lapidem Sword", "Passed down through many noble lines, this cursed sword longs to spill blood and fan the the flames of strife.", 
      Event.weapons, Border.none, 3, Place.ocean, 0, null, Shape.orbs, Attribute.none,
      790, 750, 805, 750, 750, 705,
      [Skill.agi10, Skill.slash1, Skill.slash2, Skill.slash3, Skill.qs],
      [Skill.agi10, Skill.slash3, Skill.qs],
      []],
      ["20083", "Shen", "Men who breathe the noxious fumes of this sea dragon are plagued by visions of terror and mirages of false hope.", 
      Event.none, Border.none, 3, Place.ocean, 0, null, Shape.serpent, Attribute.poison,
      771, 801, 770, 749, 737, 770,
      [Skill.dagi20, Skill.life, Skill.ddef20, Skill.poison2, Skill.datk20],
      [Skill.ddef20, Skill.poison2, Skill.datk20],
      []],
      ["20084", "Makara", "Mount of the gods and scourge of the deep, this scaled leviathan spews forth lightning from its cavernous maw.", 
      Event.none, Border.none, 3, Place.ocean, 0, null, Shape.shark, Attribute.lightning,
      849, 732, 841, 808, 664, 742,
      [Skill.physical1, Skill.atk10, Skill.physical2, Skill.physical3, Skill.def20],
      [Skill.atk10, Skill.physical3, Skill.def20],
      []],
      ["20085", "黒塚", "", 
      Event.none, Border.none, 3, Place.plains_night, 0, null, Shape.female, Attribute.darkness,
      742, 844, 746, 721, 740, 812,
      [Skill.darkness1],
      [],
      []],
      ["20086", "ムルムル", "", 
      Event.none, Border.none, 3, Place.plains_night, 0, null, Shape.bird, Attribute.death,
      810, 675, 811, 801, 750, 727,
      [Skill.slash1, Skill.slash2, Skill.ddef20, Skill.ds, Skill.slash3],
      [Skill.ddef20, Skill.ds, Skill.slash3],
      []],
      ["20087", "オルトロス", "", 
      Event.none, Border.none, 3, Place.plains_night, 0, null, Shape.wolf, Attribute.poison,
      781, 770, 794, 752, 849, 713,
      [Skill.datk20, Skill.slash2, Skill.qs, Skill.dagi20, Skill.slash3],
      [Skill.qs, Skill.dagi20, Skill.slash3],
      []],
      ["20088", "ドッペルゲンガー", "", 
      Event.none, Border.none, 3, Place.plains_night, 0, null, Shape.orbs, Attribute.death,
      752, 800, 760, 744, 812, 832,
      [life],
      [],
      []],
      ["20089", "オロバス", "", 
      Event.none, Border.none, 3, Place.plains_night, 0, null, Shape.humanoid, Attribute.fire,
      781, 748, 749, 812, 759, 797,
      [Skill.def10, Skill.physical2, Skill.fb, Skill.fire3, Skill.def20],
      [Skill.fb, Skill.fire3, Skill.def20],
      []],
      ["20090", "ケツァルコアトル", "", 
      Event.none, Border.none, 3, Place.plains_night, 0, null, Shape.bird, Attribute.wind,
      702, 788, 814, 754, 814, 748,
      [Skill.slash1, Skill.wind2, Skill.slash2, Skill.atk20, Skill.slash3],
      [Skill.slash2, Skill.atk20, Skill.slash3],
      []],
      ["20092", "ヘル", "", 
      Event.none, Border.none, 3, Place.plains_night, 0, null, Shape.female, Attribute.death,
      799, 869, 718, 715, 709, 720,
      [Skill.poison2, Skill.majorheal, Skill.wis20, Skill.poison3, Skill.revival],
      [Skill.wis20, Skill.poison3, Skill.revival],
      []],
      ["20093", "トラロック", "", 
      Event.none, Border.none, 3, Place.plains_night, 0, null, Shape.humanoid, Attribute.lightning,
      750, 777, 789, 743, 731, 870,
      [Skill.water1, Skill.lightning2, Skill.water2, Skill.lightning3, Skill.water3],
      [Skill.water2, Skill.lightning3, Skill.water3],
      []],
      ["20094", "オーベロン", "", 
      Event.none, Border.none, 3, Place.plains_night, 0, null, Shape.orbs, Attribute.light,
      798, 789, 738, 741, 730, 854,
      [Skill.wis10],
      [],
      []],
      ["20095", "シャンタク", "", 
      Event.none, Border.none, 3, Place.plains_night, 0, null, Shape.bird, Attribute.wind,
      834, 720, 735, 779, 749, 739,
      [Skill.agi10, Skill.wind2, Skill.slash2, Skill.agi20, Skill.wind3],
      [Skill.agi10, Skill.agi20, Skill.wind3],
      []]

      ["20120", "ピンクスライム", "", 
      Event.pink_slime, Border.none, 3, Place.grounds, 0, null, Shape.slime, Attribute.light,
      460, 453, 456, 500, 453, 422,
      [Skill.physical1],
      [],
      []]
    */
    ["20133", "チョコボイーター", "", 
     Event.chocobo_eater, Border.none, 3, Place.volcano, 0, null, Shape.beast, Attribute.earth,
     850, 625, 830, 810, 650, 775,
     [Skill.earth2, Skill.slash2, Skill.earth3, Skill.slash3, Skill.ls],
     [Skill.earth3, Skill.slash3, Skill.ls],
     [Skill.earth3, Skill.slash3, Skill.ls]]
]);

Card.addNotes({
});

ExCard.addAll([
    ["25001", "ニャイ・ロロ・キドゥル", "南海の女王、黃金の華と呼ばれる神。小さな島国を守護し、魔の領域である海を総べる。",
     Event.pink_slime, ExType.red, 3, Place.quests, 0, Shape.none, Attribute.water,
     [ExSkill.hp1, ExSkill.hp2, ExSkill.hp3]],
    ["25002", "アイケンガ", "努力・達成・勝利の神。供物を捧げ、祈る者の右手に聖なる力を宿らせ、成功へと導く。",
     Event.pink_slime, ExType.red, 3, Place.quests, 0, Shape.none, Attribute.earth,
     [ExSkill.atk2, ExSkill.atk4, ExSkill.atk6]],
    ["25003", "ヤタガラス", "王の軍勢を先導した三本足の神烏。戦勝の兆しとされ、古来より武人から尊ばれている。",
     Event.pink_slime, ExType.blue, 3, Place.quests, 0, Shape.none, Attribute.light,
     [ExSkill.pow_qs1, ExSkill.pow_qs2, ExSkill.pow_qs3]],
    ["25004", "ゼピュロス", "",
     Event.none, ExType.red, 3, Place.zeus, 0, Shape.none, Attribute.wind,
     [ExSkill.wind1, ExSkill.wind2, ExSkill.wind3]],
    ["25005", "アトロポス", "",
     Event.none, ExType.blue, 3, Place.zeus, 0, Shape.none, Attribute.mecha,
     [ExSkill.suc_ds1, ExSkill.suc_ds2, ExSkill.suc_ds3]],
    ["25006", "ナンナ", "",
     Event.none, ExType.red, 3, Place.zeus, 0, Shape.none, Attribute.light,
     [ExSkill.def2, ExSkill.def4, ExSkill.def6]],
    ["25007", "インドラ", "",
     Event.none, ExType.blue, 3, Place.desert_night, 0, Shape.humanoid, Attribute.lightning,
     [ExSkill.suc_gs1, ExSkill.suc_gs2, ExSkill.suc_gs3]],
    ["25008", "ティロッタマー", "",
     Event.none, ExType.red, 3, Place.desert_night, 0, Shape.female, Attribute.water,
     [ExSkill.mp2, ExSkill.mp3, ExSkill.mp5]]
]);