export const DocLinkSchema = {
    name: 'DocLink',
    properties: {
        rowstamp:    'string?',
        ADDINFO:     'boolean?',
        DESCRIPTION: 'string?',
        DOCINFOID:   'int?',
        DOCLINKSID: 'int?',
        DOCTYPE:     'Doctype?',
        DOCUMENT:    'string?',
        OWNERID:     'int?',
        OWNERTABLE: 'Ownertable?',
        SHOW:       'int?',
        UPLOAD:      'boolean?',
        URLNAME:    'string?',
        URLTYPE:    'Urltype?',
        WEBURL:     'string?',
    },
    };