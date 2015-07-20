CREATE TABLE brothers (
    id serial primary key, 
    rosternumber integer,
    name text,
    nickname text,
    class text,
    bigbro integer
);

INSERT INTO brothers (rosternumber, name, nickname, class, bigbro) VALUES
  ('1'  , 'Jeffrey Mui',      'Phantom' ,      'Charter',  null ), 
  ('2'  , 'Sean Tang',        'Bolt' ,         'Charter',  null ), 
  ('3'  , 'Daniel Hong',      'Watchmen' ,     'Charter',  null ), 
  ('4'  , 'Kevin Chang',      'Transformer' ,  'Charter',  null ), 
  ('5'  , 'Richard Lai',      'Medic' ,        'Charter',  null ), 
  ('6'  , 'Kevin Lei',        'Anubis' ,       'Charter',  null ), 
  ('7'  , 'Jason Chu',        'EVO' ,          'Charter',  null ), 
  ('8'  , 'Phil Yu',          'Geodude' ,      'Charter',  null ), 
  ('9'  , 'Huiston Wu',       'i, ROBOT' ,     'Charter',  null ), 
  ('10' , 'Brian Shin',       'Tilt' ,         'Alpha'  ,  '1'  ), 
  ('11' , 'Derrick Quach',    'Hyde' ,         'Alpha'  ,  '5'  ), 
  ('12' , 'Chao Hsu',         'Bioshock' ,     'Alpha'  ,  '2'  ), 
  ('13' , 'Leo Bazzoli',      'Point Break' ,  'Alpha'  ,  '8'  ), 
  ('14' , 'Justin Kwan',      'BlackJack' ,    'Beta'   ,  '7'  ), 
  ('15' , 'Ryan Ho',          'Wall-E' ,       'Beta'   ,  '9'  ), 
  ('16' , 'Charles Jung',     'ShamWOW' ,      'Beta'   ,  '3'  ), 
  ('17' , 'Ryan Kim',         'Casino' ,       'Beta'   ,  '12' ), 
  ('18' , 'George Wu',        'Pulse' ,        'Beta'   ,  '4'  ), 
  ('19' , 'Teddy Lee',        'Goldeneye' ,    'Gamma'  ,  '6'  ), 
  ('20' , 'Brian Ho',         'G-Force' ,      'Gamma'  ,  '11' ), 
  ('21' , 'Larry Lee',        'Yung Roc' ,     'Gamma'  ,  '2'  ), 
  ('22' , 'Brian Park',       'Surge' ,        'Gamma'  ,  '6'  ), 
  ('23' , 'Francis Sung',     'Hershey Park' , 'Gamma'  ,  '2'  ), 
  ('24' , 'Bryant Zeng',      'Eclipse' ,      'Delta'  ,  '12' ), 
  ('25' , 'Kevin Zhang',      'Snooze' ,       'Delta'  ,  '18' ), 
  ('26' , 'Ryan Chan',        'Turtle' ,       'Delta'  ,  '12' ), 
  ('27' , 'Alexander Seeto',  'GRIND' ,        'Delta'  ,  '9'  ), 
  ('28' , 'Michael Hurtado',  'Dos Equis' ,    'Delta'  ,  '13' ), 
  ('29' , 'Ryan Lau',         'Riddles' ,      'Epsilon',  '14' ), 
  ('30' , 'Jackie Mac',       'Baron' ,        'Epsilon',  '23' ), 
  ('31' , 'Kevin Lin',        'IcyHot' ,       'Epsilon',  '19' ), 
  ('32' , 'Huy Le',           'Jackpot' ,      'Epsilon',  '14' ), 
  ('33' , 'Daniel La',        'Hollow' ,       'Epsilon',  '10' ), 
  ('34' , 'Raymond Yang',     'Stark' ,        'Epsilon',  '15' ), 
  ('35' , 'Chris Chi',        'Atlas' ,        'Epsilon',  '22' ), 
  ('36' , 'Brian Pun',        'Pocky' ,        'Zeta'  ,  '21' ), 
  ('37' , 'Henry Zhou',       'Trixxx' ,       'Zeta'  ,  '20' ), 
  ('38' , 'Taylor Tsang',     'Khalifa' ,      'Zeta'  ,  '25' ), 
  ('39' , 'Philip Hsu',       'Stitch' ,       'Zeta'  ,  '20' ), 
  ('40' , 'Mackenzie Ung',    'Rango' ,        'Zeta'  ,  '21' ), 
  ('41' , 'Matthew Au',       'Rocket' ,       'Eta'    ,  '23' ), 
  ('42' , 'Perry Huang',      'Spade' ,        'Eta'    ,  '29' ), 
  ('43' , 'Justin Hwang',     'Astro' ,        'Eta'    ,  '27' ), 
  ('44' , 'Alex Kim',         'Echo' ,         'Eta'    ,  '32' ), 
  ('45' , 'Michael Chan',     'Chewy' ,        'Eta'    ,  '26' ), 
  ('46' , 'Kevin Kang',       'Canon' ,        'Eta'    ,  '24' ), 
  ('47' , 'Kevin Chu',        'Rain' ,         'Eta'    ,  '30' ), 
  ('48' , 'Ken Chen',         'Supra' ,        'Eta'    ,  '11' ), 
  ('49' , 'Chris Situ',       'Majin Buu',     'Eta'    ,  '28' ), 
  ('50' , 'Kurt Dentinger',   'Torch' ,        'Eta'    ,  '28' ),
  ('51' , 'Willy Hlaing',     'Spark',         'Theta'   ,  '34' ), 
  ('52' , 'Daniel Zhu',       'Ghost',         'Theta'   ,  '31' ), 
  ('53' , 'Solomon Park',     'Crash',         'Theta'   ,  '33' ), 
  ('54' , 'Min Kim',          'Crusade',       'Theta'   ,  '16' ), 
  ('55' , 'Howard Liu',       'Lyft',          'Theta'   ,  '33' )
;

CREATE TABLE classes (
    id serial primary key, 
    name text,
    semester text,
    size integer,
    pd integer,
    apd integer[]
);

INSERT INTO classes (name, semester, size, pd, apd) VALUES
    ('Charter',  'SPRING 2009',   9,  0,     '{}'),
    ('Alpha',    'FALL 2009',     4,  7,     '{}'),
    ('Beta',     'SPRING 2010',   5,  6,     '{}'),
    ('Gamma',    'WINTER 2011',   5,  5,     '{}'),
    ('Delta',    'SPRING 2011',   5,  4,     '{16, 10}'),
    ('Epsilon',  'SPRING 2013',   7,  11,    '{15, 18, 19}'),
    ('Zeta',     'SPRING 2014',   5,  15,    '{14, 21, 25}'),
    ('Eta',      'FALL 2014',     10, 10,    '{34, 31}'),
    ('Theta',    'SPRING 2015',   5,  19,    '{29, 30, 32}')
;

CREATE TABLE eboards (
    id serial primary key, 
    semester text,
    president integer,
    external integer,
    internal integer,
    treasurer integer,
    secretary integer
);

INSERT INTO eboards (semester, president, external, internal, treasurer, secretary) VALUES
    ('Fall 2006 - Spring 2009',  '7',  '5',  '6',  '1',  '8' ),
    ('Fall 2009 - Spring 2010',  '1',  '2',  '8',  '6',  '9' ),
    ('Fall 2010 - Spring 2011',  '2',  '11', '4',  '6',  '16'),
    ('Fall 2011 - Spring 2012',  '11', '14', '18', '22', '20'),
    ('Fall 2012 - Spring 2014',  '14', '19', '15', '28', '27'),
    ('Fall 2014',                '27', '26', '25', '24', '31'),
    ('Spring 2015',              '29', '26', '31', '24', '37'),
    ('Fall 2015',                '34', '46', '40', '32', '39') 
;

CREATE TABLE chapters (
    id serial primary key, 
    status text,
    campus text,
    founding text,
    location text,
    region text,
    website text
);

INSERT INTO chapters (status, campus, founding, location, region, website) VALUES
    ('A',               'University of California, Los Angeles'                    ,   '1981/02/25'  , 'Los Angeles, CA'            ,     'West Coast'    ,   'http://www.lalambdas.com/'),
    ('Δ',               'University of California, Berkeley'                       ,   '1988/08/17'  , 'Berkeley, CA'               ,     'West Coast'    ,   'http://www.facebook.com/berkeleycalambdas'),
    ('Θ',               'Stanford University'                                      ,   '1991/04/12'  , 'Palo Alto, CA'              ,     'West Coast'    ,   'http://www.stanfordlambdas.com/'),
    ('Κ',               'University of California, Santa Cruz'                     ,   '1992/01/30'  , 'Santa Cruz, CA'             ,     'West Coast'    ,   'http://www.facebook.com/ucsc.lambdas'),
    ('Ν',               'State University of New York, Buffalo'                    ,   '1989/03/21'  , 'Buffalo, NY'                ,     'Northeast'     ,   'http://www.buffalolambdas.com/3.0/Welcome.html'),
    ('Ξ',               'University of Michigan'                                   ,   '1991/10/24'  , 'Ann Arbor, MI'              ,     'Midwest'       ,   'http://www.greeklife.umich.edu/resource/76'),
    ('Π',               'University of Houston'                                    ,   '1993/05/14'  , 'Houston, TX'                ,     'Southwest'     ,   'http://www.facebook.com/HoustonLPhiE/'),
    ('Σ',               'University of Pennsylvania'                               ,   '1993/04/20'  , 'Philadelphia, PA'           ,     'Mid-Atlantic'  ,   'http://www.upenn.lambdaphiepsilon.com/'),
    ('Τ',               'Pennsylvania State University'                            ,   '1994/05/10'  , 'State College, PA'          ,     'Mid-Atlantic'  ,   'http://www.pennstatelambdas.com/'),
    ('Υ',               'Johns Hopkins University'                                 ,   '1994/10/02'  , 'Baltimore, MD'              ,     'Mid-Atlantic'  ,   'http://www.jhu.edu/lambdas/home.html'),
    ('Φ',               'California Polytechnic State University, San Luis Obispo' ,   '1995/10/06'  , 'San Luis Obispo, CA'        ,     'West Coast'    ,   'http://www.calpoly.lambdaphiepsilon.com/'),
    ('Χ',               'University of Illinois at Urbana-Champaign'               ,   '1997/05/10'  , 'Champaign, IL'              ,     'Midwest'       ,   'http://www.illinois.lambdaphiepsilon.com/'),
    ('Ψ',               'University of Chicago'                                    ,   '1995/09/30'  , 'Chicago, IL'                ,     'Midwest'       ,   'http://www.facebook.com/uofclambdas'),
    ('AA',              'State University of New York, Binghamton'                 ,   '1996/05/12'  , 'Binghamton, NY'             ,     'Northeast'     ,   'http://www.facebook.com/bing.lambdas'),
    ('AΒ',              'New York University'                                      ,   '1996/06/09'  , 'New York, NY'               ,     'Mid-Atlantic'  ,   'http://www.nyu.lambdaphiepsilon.com/'),
    ('ΑΓ',              'Baylor University'                                        ,   '1997/09/09'  , 'Waco, TX'                   ,     'Southwest'     ,   'http://www.facebook.com/pages/Baylor-Lambda-Phi-Epsilon/343435759014300'),
    ('ΑΔ',              'St. John’s University'                                    ,   '1998/11/08'  , 'Queens, NY'                 ,     'Mid-Atlantic'  ,   'http://www.sjulambdas.weebly.com/'),
    ('ΑΖ',              'University of Washington'                                 ,   '1999/02/14'  , 'Seattle, WA'                ,     'West Coast'    ,   'http://www.uwlambdas.com/'),
    ('ΑΘ',              'Rutgers University'                                       ,   '2001/04/15'  , 'Piscataway Township, NJ'    ,     'Mid-Atlantic'  ,   'http://www.rutgers.lambdaphiepsilon.com/'),
    ('ΑΙ',              'Purdue University'                                        ,   '2001/04/22'  , 'West Lafayette, IN'         ,     'Midwest'       ,   'http://www.purdue.lambdaphiepsilon.com/'),
    ('ΑΚ',              'Cornell University'                                       ,   '1999/11/14'  , 'Ithaca, NY'                 ,     'Northeast'     ,   'http://www.culambdas.com/'),
    ('ΑΜ',              'Carnegie Mellon University'                               ,   '2002/03/24'  , 'Pittsburgh, PA'             ,     'Mid-Atlantic'  ,   'http://www.cmulambdas.com/wordpress/'),
    ('ΑΝ',              'City University of New York, Baruch'                      ,   '2004/11/14'  , 'Baruch, NY'                 ,     'Mid-Atlantic'  ,   'http://www.lambdaphiepsilon.wix.com/baruch'),
    ('ΑΞ',              'University of Toronto'                                    ,   '2004/12/05'  , 'Toronto, ON'                ,     'Northeast'     ,   'http://www.facebook.com/to.lambdas'),
    ('ΑΠ',              'Boston University'                                        ,   '1996/11/02'  , 'Boston, MA'                 ,     'Northeast'     ,   'http://www.facebook.com/bulphie'),
    ('ΑΡ',              'Columbia University'                                      ,   '1999/04/17'  , 'New York, NY'               ,     'Mid-Atlantic'  ,   'http://www.columbialambdas.com/'),
    ('ΑΣ',              'Virginia Commonwealth University'                         ,   '2007/12/08'  , 'Richmond, VA'               ,     'Southeast'     ,   'http://www.lifeatvcu.com/'),
    ('ΑΤ',              'University of Virginia'                                   ,   '2002/03/16'  , 'Charlottesville, VA'        ,     'Southeast'     ,   'http://www.virginia.lambdaphiepsilon.com/'),
    ('ΑΥ',              'University of Massachusetts, Amherst'                     ,   '2002/12/07'  , 'Amherst, MA'                ,     'Northeast'     ,   'http://www.umass.lambdaphiepsilon.com/'),
    ('Associate',       'University of Georgia'                                    ,   '2001/06/10'  , 'Athens, GA'                 ,     'Southeast'     ,   'http://www.uga.lambdaphiepsilon.com/'),
    ('Associate',       'University of Kansas'                                     ,   '2003/05/10'  , 'Lawrence, KS'               ,     'Midwest'       ,   'http://www.facebook.com/kansas.lambdas'),
    ('Associate',       'Duke University'                                          ,   '2003/11/23'  , 'Durham, NC'                 ,     'Southeast'     ,   'http://www.dukelambdas.com/'),
    ('Associate',       'University of Oklahoma'                                   ,   '2007/12/02'  , 'Norman, OK'                 ,     'Southwest'     ,   'http://www.oulambdas.com/'),
    ('Colony (Ζ)',      'University of Texas, Austin'                              ,   '1989/11/11'  , 'Austin, TX'                 ,     'Southwest'     ,   'http://www.utlambdas.com/'),
    ('Colony (ΑΕ)',     'State University of New York, Stony Brook'                ,   '1998/11/22'  , 'Stony Brook, NY'            ,     'Mid-Atlantic'  ,   'http://www.stonybrook.lambdaphiepsilon.com/'),
    ('Colony',          'Northeastern University'                                  ,   '2009/04/12'  , 'Boston, MA'                 ,     'Northeast'     ,   'http://www.northeastern.edu/lambdaphiepsilon/'),
    ('Colony',          'Michigan State University'                                ,   '2002/11/24'  , 'East Lansing, MI'           ,     'Midwest'       ,   'http://www.msu.edu/~lphie/'),
    ('Colony',          'Virginia Polytechnic Institute and State University'      ,   '2003/12/21'  , 'Blacksburg, VA'             ,     'Southeast'     ,   'http://www.facebook.com/vtech.lambdas'),
    ('Colony',          'McMaster University'                                      ,   '2011/11/13'  , 'Hamilton, ON'               ,     'Northeast'     ,   'http://www.maclambdas.com/'),
    ('Colony',          'James Madison University '                                ,   '2012/04/14'  , 'Harrisonburg, VA'           ,     'Southeast'     ,   'http://www.jmu.edu/multicultural/studentorganizations/ICGC/chapters/LambdaPhiEpsilon.shtml'),
    ('Colony',          'University of North Carolina at Chapel Hill'              ,   '2013/03/31'  , 'Chapel Hill, NC'            ,     'Southeast'     ,   'http://www.unclambdas.com/'),
    ('Colony',          'University of Texas, Arlington'                           ,   '2013/04/07'  , 'Arlington, TX'              ,     'Southwest'     ,   'http://www.facebook.com/arlington.lambdas'),
    ('Colony',          'Northern Arizona University'                              ,   '2014/04/12'  , 'Flagstaff, AZ'              ,     'West Coast'    ,   'http://www.facebook.com/Lambdajacks'),
    ('Colony',          'Syracuse University'                                      ,   '2015/03/28'  , 'Syracuse, NY'               ,     'Northeast'     ,   'http://www.facebook.com/syracuselambdas'),
    ('Colony',          'DePaul University'                                        ,   '2010/04/24'  , 'Chicago, IL'                ,     'Midwest'       ,   'http://www.facebook.com/dpu.lphie'),
    ('Inactive (I)',    'University of California, San Diego'                      ,   '1991/11/12'  , 'San Diego, CA'              ,     'West Coast'    ,   ''),
    ('Inactive (M)',    'California State University, Sacramento'                  ,   '1992/11/14'  , 'Sacramento, CA'             ,     'West Coast'    ,   ''),
    ('Inactive (O)',    'San Francisco State University'                           ,   '1993/02/09'  , 'San Francisco, CA'          ,     'West Coast'    ,   ''),
    ('Inactive (P)',    'San Jose State University'                                ,   '1994/05/02'  , 'San Jose, CA'               ,     'West Coast'    ,   ''),
    ('Inactive (Β)',    'University of California, Davis'                          ,   '1985/09/04'  , 'Davis, CA'                  ,     'West Coast'    ,   ''),
    ('Inactive (Γ)',    'University of California, Santa Barbara'                  ,   '1986/11/21'  , 'Santa Barbara, CA'          ,     'West Coast'    ,   ''),
    ('Inactive (Ε)',    'University of California, Irvine'                         ,   '1989/03/09'  , 'Irvine, CA'                 ,     'West Coast'    ,   ''),
    ('Inactive (Η)',    'University of California, Riverside'                      ,   '1990/05/09'  , 'Riverside, CA'              ,     'West Coast'    ,   ''),
    ('Inactive (AH)',   'Northwestern University'                                  ,   '1997/05/18'  , 'Evanston, IL'               ,     'Midwest'       ,   ''),
    ('Inactive (ΑΟ)',   'University of Texas, Dallas'                              ,   '2005/11/20'  , 'Dallas, TX'                 ,     'Southwest'     ,   ''),
    ('Inactive',        'Florida State University'                                 ,   '2006/01/02'  , 'Tallahassee, FL'            ,     'Southeast'     ,   ''),
    ('Inactive',        'University of Maryland, College Park'                     ,   '2011/04/24'  , 'College Park, MD'           ,     'Mid-Atlantic'  ,   ''),
    ('Inactive',        'Washington State University'                              ,   '2013/03/24'  , 'Pullman, WA'                ,     'West Coast'    ,   '')
;




