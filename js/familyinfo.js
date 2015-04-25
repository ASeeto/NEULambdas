/** UPDATE INFORMATION AS NEEDED */

// classInformation:
//    @letter:    refers to Greek Letter designating the class
//    @semester:  refers to the crossing semester for a class
//    @size:      refers to the number of members in the class
//    @pd:        refers to the {Roster #, Pledge Dad} of the class
//    @apd:       refers to the {Roster #, Assistant Pledge Dad(s)} of the class

var classInformation = [
  { letter: 'Zero',     semester: 'Zero',          size: 0,  pd: {num: 0,  name: 'Zero'},            apd:[{num: 0, name: 'Zero'}, {num: 0, name: 'Zero'}] }, // 0 Place Holder
  { letter: 'Charter',  semester: 'SPRING 2009',   size: 9,  pd: {num: 0,  name: ''},                apd:['']  },
  { letter: 'Alpha',    semester: 'FALL 2009',     size: 4,  pd: {num: 7,  name: 'Jason Chu'},       apd:['']  },
  { letter: 'Beta',     semester: 'SPRING 2010',   size: 5,  pd: {num: 6,  name: 'Kevin Lei'},       apd:['']  },
  { letter: 'Gamma',    semester: 'WINTER 2011',   size: 5,  pd: {num: 5,  name: 'Richard Lai'},     apd:['']  },
  { letter: 'Delta',    semester: 'SPRING 2011',   size: 5,  pd: {num: 4,  name: 'Kevin Chang'},     apd:[{num: 16, name: 'Charles Jung'}, {num: 10, name: 'Brian Shin'}]  },
  { letter: 'Epsilon',  semester: 'SPRING 2013',   size: 7,  pd: {num: 11, name: 'Derrick Quach'},   apd:[{num: 15, name: 'Ryan Ho'}, {num: 18, name: 'George Wu'}, {num: 19, name: 'Teddy Lee'}]  },
  { letter: 'Zeta',     semester: 'SPRING 2014',   size: 5,  pd: {num: 15, name: 'Ryan Ho'},         apd:[{num: 14, name: 'Justin Kwan'}, {num: 21, name: 'Larry Lee'}, {num: 25, name: 'Kevin Zhang'}]  },
  { letter: 'Eta',      semester: 'FALL 2014',     size: 10, pd: {num: 10, name: 'Brian Shin'},      apd:[{num: 34, name: 'Raymond Yang'}, {num: 31, name: 'Kevin Lin'}]  },
  { letter: 'Theta',    semester: 'SPRING 2015',   size: 5,  pd: {num: 19, name: 'Teddy Lee'},       apd:[{num: 29, name: 'Ryan Lau'}, {num: 30, name: 'Jackie Mac'}, {num: 32, name: 'Huy Le'}]  },
  // { letter: 'Theta', semester: 'SPR 2015',   size: 5 }//,
  // { letter: 'Theta', semester: 'SPR 2015',   size: 5 }
]

// brothers:
//    @name:      refers to a brother's real name
//    @nickname:  refers to a brother's nickname

var brothers = [ 
  { name: 'NEU Lambdas',      nickname: 'Zero' ,          rosternumber: '000'   ,  bigbro: 'null' },
  { name: 'Jeffrey Mui',      nickname: 'Phantom' ,       rosternumber: '1'     ,  bigbro: '000' }, 
  { name: 'Sean Tang',        nickname: 'Bolt' ,          rosternumber: '2'     ,  bigbro: '000' }, 
  { name: 'Daniel Hong',      nickname: 'Watchmen' ,      rosternumber: '3'     ,  bigbro: '000' }, 
  { name: 'Kevin Chang',      nickname: 'Transformer' ,   rosternumber: '4'     ,  bigbro: '000' }, 
  { name: 'Richard Lai',      nickname: 'Medic' ,         rosternumber: '5'     ,  bigbro: '000' }, 
  { name: 'Kevin Lei',        nickname: 'Anubis' ,        rosternumber: '6'     ,  bigbro: '000' }, 
  { name: 'Jason Chu',        nickname: 'EVO' ,           rosternumber: '7'     ,  bigbro: '000' }, 
  { name: 'Phil Yu',          nickname: 'Geodude' ,       rosternumber: '8'     ,  bigbro: '000' }, 
  { name: 'Huiston Wu',       nickname: 'i, ROBOT' ,      rosternumber: '9'     ,  bigbro: '000' }, 
  { name: 'Brian Shin',       nickname: 'Tilt' ,          rosternumber: '10'    ,  bigbro: '1' }, 
  { name: 'Derrick Quach',    nickname: 'Hyde' ,          rosternumber: '11'    ,  bigbro: '5' }, 
  { name: 'Chao Hsu',         nickname: 'Bioshock' ,      rosternumber: '12'    ,  bigbro: '2' }, 
  { name: 'Leo Bazzoli',      nickname: 'Point Break' ,   rosternumber: '13'    ,  bigbro: '8' }, 
  { name: 'Justin Kwan',      nickname: 'BlackJack' ,     rosternumber: '14'    ,  bigbro: '7' }, 
  { name: 'Ryan Ho',          nickname: 'Wall-E' ,        rosternumber: '15'    ,  bigbro: '9' }, 
  { name: 'Charles Jung',     nickname: 'ShamWOW' ,       rosternumber: '16'    ,  bigbro: '3' }, 
  { name: 'Ryan Kim',         nickname: 'Casino' ,        rosternumber: '17'    ,  bigbro: '12' }, 
  { name: 'George Wu',        nickname: 'Pulse' ,         rosternumber: '18'    ,  bigbro: '4' }, 
  { name: 'Teddy Lee',        nickname: 'Goldeneye' ,     rosternumber: '19'    ,  bigbro: '6' }, 
  { name: 'Brian Ho',         nickname: 'G-Force' ,       rosternumber: '20'    ,  bigbro: '11' }, 
  { name: 'Larry Lee',        nickname: 'Yung Roc' ,      rosternumber: '21'    ,  bigbro: '2' }, 
  { name: 'Brian Park',       nickname: 'Surge' ,         rosternumber: '22'    ,  bigbro: '6' }, 
  { name: 'Francis Sung',     nickname: 'Hershey Park' ,  rosternumber: '23'    ,  bigbro: '2' }, 
  { name: 'Bryant Zeng',      nickname: 'Eclipse' ,       rosternumber: '24'    ,  bigbro: '12' }, 
  { name: 'Kevin Zhang',      nickname: 'Snooze' ,        rosternumber: '25'    ,  bigbro: '18' }, 
  { name: 'Ryan Chan',        nickname: 'Turtle' ,        rosternumber: '26'    ,  bigbro: '12' }, 
  { name: 'Alexander Seeto',  nickname: 'GRIND' ,         rosternumber: '27'    ,  bigbro: '9' }, 
  { name: 'Michael Hurtado',  nickname: 'Dos Equis' ,     rosternumber: '28'    ,  bigbro: '13' }, 
  { name: 'Ryan Lau',         nickname: 'Riddles' ,       rosternumber: '29'    ,  bigbro: '14' }, 
  { name: 'Jackie Mac',       nickname: 'Baron' ,         rosternumber: '30'    ,  bigbro: '23' }, 
  { name: 'Kevin Lin',        nickname: 'IcyHot' ,        rosternumber: '31'    ,  bigbro: '19' }, 
  { name: 'Huy Le',           nickname: 'Jackpot' ,       rosternumber: '32'    ,  bigbro: '14' }, 
  { name: 'Daniel La',        nickname: 'Hollow' ,        rosternumber: '33'    ,  bigbro: '10' }, 
  { name: 'Raymond Yang',     nickname: 'Stark' ,         rosternumber: '34'    ,  bigbro: '15' }, 
  { name: 'Chris Chi',        nickname: 'Atlas' ,         rosternumber: '35'    ,  bigbro: '22' }, 
  { name: 'Brian Pun',        nickname: 'Pocky' ,         rosternumber: '36'    ,  bigbro: '21' }, 
  { name: 'Henry Zhou',       nickname: 'Trixxx' ,        rosternumber: '37'    ,  bigbro: '20' }, 
  { name: 'Taylor Tsang',     nickname: 'Khalifa' ,       rosternumber: '38'    ,  bigbro: '25' }, 
  { name: 'Philip Hsu',       nickname: 'Stitch' ,        rosternumber: '39'    ,  bigbro: '20' }, 
  { name: 'Mackenzie Ung',    nickname: 'Rango' ,         rosternumber: '40'    ,  bigbro: '21' }, 
  { name: 'Matthew Au',       nickname: 'Rocket' ,        rosternumber: '41'    ,  bigbro: '23' }, 
  { name: 'Perry Huang',      nickname: 'Spade' ,         rosternumber: '42'    ,  bigbro: '29' }, 
  { name: 'Justin Hwang',     nickname: 'Astro' ,         rosternumber: '43'    ,  bigbro: '27' }, 
  { name: 'Alex Kim',         nickname: 'Echo' ,          rosternumber: '44'    ,  bigbro: '32' }, 
  { name: 'Michael Chan',     nickname: 'Chewy' ,         rosternumber: '45'    ,  bigbro: '26' }, 
  { name: 'Kevin Kang',       nickname: 'Canon' ,         rosternumber: '46'    ,  bigbro: '24' }, 
  { name: 'Kevin Chu',        nickname: 'Rain' ,          rosternumber: '47'    ,  bigbro: '30' }, 
  { name: 'Ken Chen',         nickname: 'Supra' ,         rosternumber: '48'    ,  bigbro: '11' }, 
  { name: 'Chris Situ',       nickname: 'Majin Buu',      rosternumber: '49'    ,  bigbro: '28' }, 
  { name: 'Kurt Dentinger',   nickname: 'Torch' ,         rosternumber: '50'    ,  bigbro: '28' },
  { name: 'Willy Hlaing',     nickname: 'Spark',          rosternumber: '51'    ,  bigbro: '34' }, 
  { name: 'Daniel Zhu',       nickname: 'Ghost',          rosternumber: '52'    ,  bigbro: '31' }, 
  { name: 'Solomon Park',     nickname: 'Crash',          rosternumber: '53'    ,  bigbro: '33' }, 
  { name: 'Min Kim',          nickname: 'Crusade',        rosternumber: '54'    ,  bigbro: '16' }, 
  { name: 'Howard Liu',       nickname: 'Lyft',           rosternumber: '55'    ,  bigbro: '33' }
];