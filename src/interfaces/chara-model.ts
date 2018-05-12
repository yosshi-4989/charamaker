export interface Ability {
    'STR': number, 'DEX': number, 'INT': number, 'IDEA': number,
    'CON': number, 'APP': number, 'POW': number, 'LUCK': number,
    'SIZ': number, 'SAN': number, 'EDU': number, 'KNOW': number,
    'MAXSAN': number, 'DB': string
}

export interface Status {
    'HP': number, 'MP': number,
    'SANpoint': number
}

export interface SkillPoint {
    'jobSkillPoint': number,
    'freeSkillPoint': number 
}

export interface Skill {
    'name': string,
    'default': number,
    'jobPoint': number,
    'freePoint': number,
    'point': number,
    'addFlag': boolean
}

export interface ParsonalData {
    'name': string, 'kana': string, 
    'age': number, 'sex': string,
    'job': string, 'growPlace': string,
    'memo': string
}

export interface CharaData {
    'parsonalData': ParsonalData,
    'ability': Ability,
    'status': Status,
    'skills': {name: string, point: number}[]
}
