import {PoLineSchema } from './PoLineSchema';
import { CompanieSchema} from './CompanieSchema';
import { Currencycode } from './PoEnum';
import { DocLinkSchema} from './DocLinkSchema';
export const PoSchema = {
    name: 'Po',
    properties: {
    rowstamp:       'string?',
    CURRENCYCODE:   'Currencycode?',
    DESCRIPTION?:  ' string?',
    ORDERDATE:      'Date?',
    POID:           'int',
    PONUM:          'string?',
    PRETAXTOTAL:    'int?',
    REVISIONNUM:    'int?',
    SITEID:         'Siteid?',
    SM_SENDEMAIL:  'boolean?',
    STATUS:         'Status?',
    STATUSDATE:     'Date?',
    TOTALCOST:     'int?',
    TOTALTAX1:      'int?',
    TOTALTAX2:     'int?',
    VENDOR:       'string?',
    POLINE:        { type: PoLineSchema, optional: true },
    COMPANIES:   { type: CompanieSchema, optional: true },
    DOCLINKS:      { type: DocLinkSchema, optional: true },
    PURCHASEAGENT: 'string?',
    REQUIREDDATE: 'Date?'
},
primaryKey: 'POID',
};
