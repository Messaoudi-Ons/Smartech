import { Orgid,SmPwemail,SmLangcode} from './PoEnum';

export const ComapanieSchema = {
    name: 'Companies',
    properties: {
        rowstamp:   'string?',
        COMPANY:     'string?',
        CUST_SUBST:   'boolean?',
        NAME:        'string?',
        ORGID:        'Orgid?',
        SM_ISCRM:     'boolean?',
        SM_PWEMAIL: 'SmPwemail?',
        SM_LANGCODE: 'SmLangcode?',
    },
   
    };