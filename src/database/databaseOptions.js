/* eslint-disable prettier/prettier */
import { AssetSchema } from './Schemas/AssetSchema';
import { ServiceSchema } from './Schemas/ServiceSchema';
import { ServiceListSchema } from './Schemas/ListServiceSchema';
import { LocationSchema } from './Schemas/LocationSchema';
import { TesttSchema } from './Schemas/TestSchema';
import { AddressSchema } from './Schemas/TestSchema';
import {CompanieSchema} from './Schemas/PoSchemas/CompanieSchema';
import {DocLinkSchema} from './Schemas/PoSchemas/DocLinkSchema';
import {PoEnum} from './Schemas/PoSchemas/PoEnum';
import {PoLineSchema} from './Schemas/PoSchemas/PoLineSchema';
import {PoSchema} from './Schemas/PoSchemas/PoSchema'
//definir les parametres de la bd
export const databaseOptions = {
    path: 'myrealm',
    schema: [
        ServiceSchema,
        AssetSchema,
        LocationSchema,
        TesttSchema,
        AddressSchema,
        ServiceListSchema,
        PoEnum,
        PoLineSchema,
        PoSchema,
        CompanieSchema,
        DocLinkSchema,
        
    ],
    schemaVersion: 1,
};
