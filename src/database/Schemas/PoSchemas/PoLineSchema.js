
import {Itemsetid} from './PoEnum';

import {Linetype} from './PoEnum';
export const PoLineSchema = {
    name: 'PoLine',
    properties: {

        rowstamp:     'string?',
        DESCRIPTION: 'string?',
        GLDEBITACCT:' string?',
        ITEMNUM:     'string?',
        ITEMSETID:   'Itemsetid?',
        LINECOST:    'int?',
        LINECOST1:   'int?',
        LINETYPE:     'Linetype?',
        LOADEDCOST1: 'int?',
        ORDERQTY:    'number?',
        ORDERUNIT:  'int?',
        POLINEID:     'int?',
        POLINENUM:   'int?',
        UNITCOST:    'int?',
        PRLINENUM:   'int?',
        PRNUM:      'int?',
        REFWO:       'string?',
    },

    };