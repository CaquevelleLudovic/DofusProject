-- Adminer 4.7.6 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `characters`;
CREATE TABLE `characters` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(55) NOT NULL,
  `title` varchar(255) NOT NULL,
  `subtitle` varchar(255) NOT NULL,
  `content` varchar(555) NOT NULL,
  `urlvideo` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `characters` (`id`, `name`, `title`, `subtitle`, `content`, `urlvideo`) VALUES
(1,	'ecaflip',	'La pièce d\'Ecaflip',	'Combattant imprévisible',	'Les Ecaflips sont des guerriers joueurs qui se fourrent dans les endroits où l\'on peut gagner gros, et perdre beaucoup… Un Ecaflip bien dans sa peau parie sans arrêt, pour tout et pour rien. Mais attention, il prend le jeu très au sérieux et ira même jusqu\'à risquer sa vie sur un jet de dés pour tenter de remporter la mise…',	'https://www.youtube.com/embed/JAhil1C--8w'),
(2,	'eniripsa',	'Les mains d\'Eniripsa',	'Guérisseur',	'Les Eniripsas sont des guérisseurs qui soignent d\'un simple Mot. Ils utilisent le pouvoir de la parole pour soulager les souffrances de leurs alliés, mais parfois aussi pour blesser leurs ennemis. Certains Eniripsas sont même devenus de véritables arpenteurs du verbe, des rôdeurs des langues oubliées.',	'https://www.youtube.com/embed/RL28MJKZnZQ'),
(3,	'iop',	'Le cœur d\'Iop',	'Guerrier téméraire',	'Les Iops sont des guerriers fonceurs et sans reproche ! Une chose est sûre : les Iops savent faire parler les armes. D\'ailleurs, se retrouver pris dans une bagarre au moins une fois par jour est pour eux un signe de bonne santé. Leur tempérament impétueux fait des Iops des paladins de l\'extrême, capables du meilleur... comme du pire !',	'https://www.youtube.com/embed/EaOZNYoZBms'),
(4,	'cra',	'L\'étendue de Crâ',	'Archer',	'Les Crâs sont des archers aussi fiers que précis ! Ils font des alliés précieux contre les adeptes de la mêlée franche. Restant à distance, décochant leurs traits empennés dans le moindre orifice laissé sans surveillance, ils ne laissent aucun répit à leurs adversaires !',	'https://www.youtube.com/embed/SXwZCdTAfWc'),
(5,	'feca',	'Le bouclier Féca',	'Protecteur',	'Les Fécas sont de loyaux protecteurs toujours sur la défensive. Ils sont appréciés dans les groupes d\'aventuriers pour leurs armures élémentaires et leur capacité à encaisser les coups durs. Ils sont également maîtres dans l’art des signes magiques : quand il va y avoir du grabuge, les Fécas sortent leurs glyphes !',	'https://www.youtube.com/embed/Qbdjrv5lp58'),
(6,	'sacrieur',	'Le sang de Sacrieur',	'Berserker',	'Les Sacrieurs sont des berserkers qui décuplent leurs forces dès qu\'ils sont frappés ! N\'ayant pas peur de recevoir des coups, ni de s\'exposer aux blessures, ils seront souvent en première ligne, prêts à verser le premier sang ! Le Sacrieur est vraiment le compagnon idéal pour vos longues soirées guerrières…',	'https://www.youtube.com/embed/D4MS1VNDyz4'),
(7,	'sadida',	'Le soulier de Sadida',	'Sorcier sylvestre',	'Les Sadidas sont des invocateurs qui empoisonnent la vie de leurs ennemis ! Apprivoiser les Ronces pour en faire des armes terrifiantes, confectionner des poupées de guerre et de soins, voilà qui satisfait tout disciple Sadida digne de ce nom.',	'https://www.youtube.com/embed/5CrLx8uHN-U'),
(8,	'osamodas',	'Le fouet d\'Osamodas',	'Invocateur de créatures',	'Les Osamodas sont des dompteurs nés ! Ils ont le pouvoir d\'invoquer des créatures et sont de remarquables dresseurs. Une rumeur prétend qu\'ils taillent leurs vêtements dans la peau de leurs ennemis, mais allez donc leur demander ce qu\'il en est… Si vous êtes de son côté, un Osamodas sera aux petits soins pour vous. Dans le cas contraire, peut-être terminerez-vous votre vie sous la forme d\'une botte ou d\'un bonnet fourré.',	'https://www.youtube.com/embed/dRfW1YQGLW4'),
(9,	'enutrof',	'Les doigts d\'Enutrof',	'Chasseur de trésors',	'Les Enutrofs sont des chasseurs de trésor avides de kamas, qui malgré leur grand âge courent comme des dragodindes à la vue d\'un coffre bien rempli. Ils sont experts dans l’art de ralentir leurs ennemis : ils peuvent ainsi les harceler avant de les assommer à grands coups de pelle le moment venu !',	'https://www.youtube.com/embed/a8TLMsyA89o'),
(10,	'sram',	'L\'ombre de Sram',	'Assassin',	'Les Srams sont des assassins qui aiment les bourses, rebondies de préférence. Trousser les pans d\'une tunique, tâter le fond d\'une poche, faire preuve de doigté, palper enfin des bijoux tant convoités avant de poser un piège ou d\'asséner un coup mortel, voilà la vie d\'un disciple de Sram !',	'https://www.youtube.com/embed/Lx4fUSRgqAY'),
(11,	'xelor',	'Le sablier de Xélor',	'Maître du temps',	'Les Xélors sont des mages qui maîtrisent le temps et toutes les mécaniques qui donnent l\'heure : carillons, horloges, et pendules leur obéissent au doigt et à l\'œil. Les Xélors jouent donc avec le temps pour ralentir un ennemi ou se téléporter où bon leur semble.',	'https://www.youtube.com/embed/hfqXC2wmGes'),
(12,	'pandawa',	'La chopine de Pandawa',	'Bagarreur assoiffé',	'Les Pandawas sont des guerriers adeptes des arts martiaux qui savent faire des folies de leurs corps ! Ils peuvent même en faire avec le corps des autres… Le Pandawa sait comment soulever les foules, il porte ses alliés sur ses épaules pour mieux les protéger. Quant à ses ennemis, il les enverra valser dans le décor, avant de fêter sa victoire avec une bonne rasade de lait de bambou !',	'https://www.youtube.com/embed/hhVoMRdF3qg'),
(13,	'roublard',	'La ruse du Roublard',	'Expert en explosifs',	'Membres d’un clan créé à l’origine par Raval et la famille Smisse, les Roublards ont finalement prêté allégeance au dieu Dralbour, qui n’est autre que Sram. Maîtres de l’entourloupe, du coup fourré, des bombes à retardement et des pistolets… les Roublards ne sont à l’aise qu’en terrain miné.',	'https://www.youtube.com/embed/GtguUNDxl9Q'),
(14,	'zobal',	'Le masque du Zobal',	'Guerrier lunatique',	'Les Zobals portent des masques magiques qui leur permettent de changer de tête comme de chemise. Tour à tour collants comme de la glu, enragés comme des psychopathes ou partisans de la retraite stratégique, ils s’adaptent à la situation, mais gare aux troubles de la personnalité ! La légende dit que ces êtres imprévisibles seraient bénis par Sadida lui-même.',	'https://www.youtube.com/embed/HTG0ubzSYpo'),
(15,	'steamer',	'La vapeur du Steamer',	'Technomage',	'Les Steamers ont plus d’une tourelle dans leur boîte à outils. En fins tacticiens, ils utilisent la technomagie pour prendre l’avantage sur le terrain. Ces marinventeurs aux scaphandres rutilants vouent un culte au Grand Oktapodas, le protecteur des océans.',	'https://www.youtube.com/embed/NilZno8Nycw'),
(16,	'eliotrope',	'Le portail Eliotrope',	'Créateur de portails',	'Apparus par accident, les Eliotropes sont des reflets de leur créateur, le Roi-Dieu. Ils se déplacent à la vitesse de l\'éclair, disparaissant en un clin d\'œil pour réapparaître plus loin. Tout comme les Eliatropes, ils connaissent les secrets du Wakfu.',	'https://www.youtube.com/embed/qXDhqKxb2Gw'),
(17,	'huppermage',	'La rune de l\'Huppermage',	'Mage élémentaliste',	'Les Huppermages sont capables de combiner le Feu, l’Air, l’Eau et la Terre pour lancer des sortilèges aux multiples effets. Maîtres des runes élémentaires, ils vénèrent la Balance Krosmique, une force mystérieuse qui tend à maintenir l’équilibre dans l\'univers.',	'https://www.youtube.com/embed/0PMLM_Noc7A'),
(18,	'ouginak',	'La rage d\'Ouginak',	'Barbare',	'Quand on est un barbare avec un caractère de chienchien, il faut savoir montrer les crocs pour se faire respecter. Le regard fier, le poil brillant, la truffe humide : c\'est ainsi que l\'Ouginak traverse les épreuves et triomphe de l\'adversité. Traquer ses proies sans relâche, laisser éclater sa rage pour écraser ses ennemis, les voir mourir devant soi et entendre les miaulements terrorisés de leurs chachas… Voilà une vie digne d\'être vécue !',	'https://www.youtube.com/embed/vL-hKRlyPUg'),
(19,	'forgelance',	'L\'héritage du Forgelance',	'Champion immortel',	'Les Forgelances sont des lanciers qui ne croient qu\'en eux-mêmes ! Tirant leurs pouvoirs de la Lance Originelle, ces combattants cherchent à se forger une renommée que la mort elle-même ne saurait effacer. Féru d\'arts, de récits légendaires et de joutes épiques, le Forgelance se laissera convaincre de brandir son arme à vos côtés par des promesses de gloire et de postérité. Véritables fers de lance des combats, ils sont les premiers au contact pour percer les défenses adverses.',	'https://www.youtube.com/embed/U7M3NnH8_og');

-- 2023-06-02 20:19:38
